import ButtonDownload from "../atoms/ButtonDownload";

function HeroSection() {
  return (
    <section className="hero flex flex-col justify-center px-6 md:px-32  py-4 bg-blue-600 gap-2 overflow-hidden">
      <h1 className="text-white font-montserrat  font font-medium text-4xl md:text-5xl md:text-center">
        Experience the Future of Digital Payments with e-wallet
      </h1>
      <div className="description flex flex-col md:flex-row md:justify-centera md:items-center md:gap-4 ">
      <div>
        <img src="/Group 1580.svg" alt="dashboard"/>
      </div>
        <div className="user-download ">
          <p className="ads font-montserrat text-sm md:text-base text-white font-light mb-8">
            Simplify Your Life with Secure and Convenient Mobile Payments
          </p>
          <div className="btn-download flex justify-between mb-2 gap-8">
            <ButtonDownload
                icon="/gplay.png"
                altText="google-play"
                text="Google Play"
                imgSize='w-8'
                variant='outline'
                />
            
            {/* <button className="border flex justify-center items-center gap-4 flex-1 p-2 border-white rounded-sm text-white hover:bg-white hover:text-blue-600">
              <img src="/gplay.png" alt="gplay" className="w-6" />
              <p className="font-montserrat font-light">Playstore</p>
            </button> */}
           
           <ButtonDownload
            icon="/iconapple.svg"
            altText="apple-store"
            text="Apple Store"
            invertOnHover={true}
            imgSize="w-6"
            variant='outline'
           />
            {/* <button className="border justify-center flex gap-4 flex-1 p-2 border-white rounded-sm items-center text-white hover:bg-white hover:text-blue-600">
              <img
                src="/iconapple.svg"
                id="apple"
                alt="apple-store"
                className="group-hover:invert"
              />
              <p className="font-montserrat font-light ">Apple Store</p>
            </button> */}
          </div>
          <div className="total-user flex gap-4 items-center mt-4 mb-4">
            <h1 className="font-montserrat font-medium text-4xl text-white">
              4.6 M
            </h1>
            <img src="/user.svg" alt="user" />
          </div>
          <p className="ads font-montserrat font-light text-white">
            Around the world, we already have over 4.6 happy user
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
