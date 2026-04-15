import PaymentMethod from "../components/atoms/PaymentOption";
import DashboardHeader from "../components/DashboardPage/DashboardHeader";
import Menu from "../components/DashboardPage/Menu";

function TopUp() {
  return (
    <>
      <div>
        <DashboardHeader/>

        <div className="flex gap-8 p-4 md:py-0 md:px-8 flex-col md:flex-row">
          <Menu />
          <div className="flex flex-col">
            <div className="flex gap-2 font-bold p-4 ">
              <img src="/Upload.svg" alt="icon-upload" />
              <h2>Top Up Account</h2>
            </div>
            <div className="mb-8 border border-gray-200 rounded-xs p-4">
              <h3 className="text-lg font-bold mb-4">People Information</h3>

              <div className="flex items-center gap-4 bg-[#E8E8E84D] p-4  border border-gray-100">
                <img
                  src="/ghaluh.svg"
                  alt="photo-profile"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div className="flex-1">
                  <p className="font-bold text-md">Ghaluh 1</p>
                  <p className="text-sm text-gray-500 mb-1">(239) 555-0108</p>
                  <div className="flex items-center gap-2 bg-primary text-white text-xs px-3 py-1 rounded-lg w-fit">
                    <img src="/badge.svg" alt="verified" className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                  <img
                    src="/Star.svg"
                    alt="favorite"
                    className="w-6 h-6 opacity-40"
                  />
                </button>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-md font-bold">Amount</h3>
              <p className="text-sm text-gray-500 mb-4">
                Type the amount you want to transfer and then press continue to
                the next steps.
              </p>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <img
                    src="/money.png"
                    alt="icon-money"
                    className="w-8 h-8 opacity-50"
                  />
                </div>
                <input
                  type="number"
                  placeholder="Enter Nominal Transfer"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-md text-sm focus:outline-none  placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="border border-gray-200 rounded-xs p-4" >
              <PaymentMethod />
            </div>
          </div>
          <div>
             <section className="payment-section border border-gray-200 rounded-xs p-4 md:mt-14">
              <h3 className="font-bold mb-4">Payment</h3>

              <div className="summary-item font-medium text-sm flex justify-between mb-2">
                <p>Order</p>
                <p>Idr. 40.000</p>
              </div>
              <div className="summary-item font-medium text-sm flex justify-between mb-2">
                <p>Delivery</p>
                <p>Idr. 0</p>
              </div>
              <div className="summary-item font-medium text-sm flex justify-between mb-2">
                <p>Tax</p>
                <p>Idr. 4000</p>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-item font-medium text-sm flex justify-between mb-2 summary-total border-t-2 border-gray-400 pt-2">
                <p>Sub Total</p>
                <p>Idr. 44.000</p>
              </div>

              <button className="btn-submit border bg-primary text-white p-2 w-full rounded-md text-sm">Submit</button>

              <p className="text-sm text-gray-500 mt-4">
                *Get Discount if you pay with Bank Central Asia
              </p>
            </section>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default TopUp;
