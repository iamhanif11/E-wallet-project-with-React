function BenefitSection() {
  return (
    <section className="px-6 md:px-20 py-16 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl ">
        <div className="flex flex-col md:flex-row items-center md:justify-end gap-4 md:gap-6">
          <img src="../src/assets/Group 1307.svg" alt="icon-headphone" />
         
          <div className="flex flex-col  items-center md:items-start">
            <h3 className="font-montserrat font-bold text-lg">24/7 Support</h3>
            <p className="text-center md:text-left font-montserrat">
              We have 24/7 contact support so you can contact us whenever you
              want and we will respond it.
            </p>
          </div>
        </div>
       
        <div className="flex flex-col md:flex-row  items-center md:justify-end gap-4 md:gap-6">
          <img src="../src/assets/Group 1307 (1).svg" alt="icon-shield" />
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-montserrat font-bold text-lg">Data Privacy</h3>
            <p className="text-center md:text-left font-montserrat">
              We make sure your data is safe in our database and we will encrypt
              any data you submitted to us.
            </p>
          </div>
        </div>
       
        <div className="flex flex-col md:flex-row items-center md:justify-end gap-4 md:gap-6">
          <img src="../src/assets/Group 1307 (2).svg" alt="icon-download" />
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-montserrat font-bold text-lg">Easy Download</h3>
            <p className="text-center md:text-left font-montserrat">
              Zwallet is 100% totally free to use it’s now available on Google
              Play Store and App Store.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitSection;
