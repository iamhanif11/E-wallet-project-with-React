function PartnerSection(){
    return(
        <section className="hero-4 flex flex-col md:flex-row justify-center items-center px-6 md:px-20 py-4 md:py-16 gap-4 ">
        <div className="partners text-center md:w-1/3 ">
          <h2 className="font-montserrat font-medium text-3xl md:text-5xl mb-2">100+ Trusted Partners</h2>
          <p className="font-montserrat text-gray-500">
            We have reached global level and have 100+ brand partners around the
            globe.
          </p>
        </div>
        <div className="brand-support md:flex md:w-2/3">
          <img src="../public/ms.svg" alt="icon-microsoft" />
          <img src="../public/dropbox.svg" alt="icon-dropbox" />
          <img src="../public/hm.svg" alt="icon-hm" />
          <img src="../public/airbnb.svg" alt="icon-airbnb" />
          <img src="../public/canon.svg" alt="icon-canon" />
          <img src="../public/dell.svg" alt="icon-dell" />
        </div>
      </section>
    )
}

export default PartnerSection