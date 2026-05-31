import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { fetchWalletData } from "../../redux/slices/walletSlice";


function BalanceCard() {
  const {currentUser} = useAuth()
  const dispatch = useDispatch();

  const {balance, income, expense, status} = useSelector((state) => state.wallet)

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchWalletData())
    }
  }, [currentUser, dispatch]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount || 0);
  };

  if(!currentUser) return null
  return (
    <div className="information bg-white p-6  border border-gray-200 rounded-xs w-full font-montserrat ">
      
      <div className="box-information flex flex-col gap-4">
        
    
        <div className="head flex items-center gap-3">

          <img src="/balance.svg" alt="balance" className="w-6 h-6 object-contain" />
          <p className="text-gray-500 font-montserrat font-medium">Balance</p>
        </div>
        
        {status === "loading" ? (
          <div className="animate-pulse h-8 bg-gray-200 rounded w-1/2"></div>
        ) : (
          <h3 className="text-2xl font-montserrat font-medium">{formatCurrency(balance)}</h3>
        )}
        
        <div className="tail flex items-center gap-8 mt-2">
          
          
          <div className="add flex flex-col gap-1">
            <h4 className="text-gray-400 text-xs font-montserrat">Income</h4>
            <div className="more flex items-center gap-2">
              {status === "loading" ? (
                <div className="animate-pulse h-5 bg-gray-200 rounded w-16"></div>
              ) : (
                <p className="in font-montserrat text-green-500 text-sm">{formatCurrency(income)}</p>
              )}
              <img src="/ArrowRise-s.png" alt="arrow up" className="w-3 h-3 object-contain" />
            </div>
          </div>

          
          <div className="add flex flex-col gap-1">
            <h4 className="text-gray-400 text-xs ">Expense</h4>
            <div className="more flex items-center gap-2">
              {status === "loading" ? (
                <div className="animate-pulse h-5 bg-gray-200 rounded w-16"></div>
              ) : (
                <p className="in font-montserrat text-red-500 text-sm">{formatCurrency(expense)}</p>
              )}
              <img src="/ArrowRise-red.svg" alt="arrow down" className="w-3 h-3 object-contain" />
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default BalanceCard;