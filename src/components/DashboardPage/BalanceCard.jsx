function BalanceCard() {
  return (
    <div className="information bg-white p-6  border border-gray-200 rounded-xs w-full font-montserrat ">
      
      <div className="box-information flex flex-col gap-4">
        
    
        <div className="head flex items-center gap-3">

          <img src="/balance.svg" alt="balance" className="w-6 h-6 object-contain" />
          <p className="text-gray-500 font-montserrat font-medium">Balance</p>
        </div>
        
        <h3 className="text-2xl font-montserrat font-medium">Rp.120.000</h3>
        
        <div className="tail flex items-center gap-8 mt-2">
          
          
          <div className="add flex flex-col gap-1">
            <h4 className="text-gray-400 text-xs font-montserrat">Income</h4>
            <div className="more flex items-center gap-2">
              <p className="in font-montserrat text-green-500 text-sm">Rp.200.000 +2%</p>
              <img src="/ArrowRise-s.png" alt="arrow up" className="w-3 h-3 object-contain" />
            </div>
          </div>

          
          <div className="add flex flex-col gap-1">
            <h4 className="text-gray-400 text-xs ">Expense</h4>
            <div className="more flex items-center gap-2">
              <p className="out-1 text-red-500  text-sm">Rp.100.000 +5%</p>
              <img src="/ArrowRise-red.svg" alt="arrow down" className="w-3 h-3 object-contain" />
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default BalanceCard;