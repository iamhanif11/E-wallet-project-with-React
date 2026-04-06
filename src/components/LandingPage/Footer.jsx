function Footer() {
  return (
    <footer className="bg-blue-600 flex flex-col justify-center items-center px-6 md:px-20 py-4">
      <div className="footer-desc w-full max-w-7xl grid-cols-1 grid md:grid-cols-4 gap-10 mb-4 items-start">
        <div className="detail-brand flex flex-col gap-2">
          <div className="logo-footer logo flex items-center gap-2">
            <img src="../src/assets/money_wallet.png" alt="logo"
            className="w-8"
            />
            <p className="font-nunito-sans text-white font-medium">E-Wallet</p>
          </div> 
          <p className="font-montserrat text-white font-light leading-relaxed">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>
        </div>

        <div className="contact font-montserrat text-white text-lg font-medium flex flex-col gap-2">
          <h2>GET IN TOUCH</h2>
          <div className="phone flex items-center gap-2">
            <img src="../src/assets/u_phone.svg" alt="phone" />
            <p className="text-sm">+62 5637 8882 9901</p>
          </div>
          <div className="mail flex items-center gap-2">
            <img src="../src/assets/mail.svg" alt="mail" />
            <p className="text-sm">contact@zwallet.com</p>
          </div>
        </div>
        <div className="sosmed flex flex-col gap-2">
          <h2 className="font-montserrat text-white text-lg font-medium">SOCIAL MEDIA</h2>
          <div className="sosmed-icon flex gap-2 ">
            <img src="../src/assets/twt.svg" alt="twitter" />
            <img src="../src/assets/2.svg" alt="fb" />
            <img src="../src/assets/3.svg" alt="ig" />
            <img src="../src/assets/4.svg" alt="github" />
          </div>
        </div>
        <form className="flex flex-col gap-2">
          <label htmlFor="email-footer" className="w-full font-montserrat text-white text-lg font-medium">NEWSLETTER</label>
          <div className="input-box flex gap-2 bg-white px-4 py-3 rounded-lg items-center">
            <img src="../src/assets/Vector.svg" alt="icon_email" />
            <input type="email" id="email" placeholder="Enter Your Email"
            className="bg-white" />
          </div>
          <button className="w-full bg-white p-2 rounded-sm font-montserrat font-medium text-blue-600">Subscribe</button>
        </form>
      </div>

      <div className="w-full max-w-7xl flex flex-col items-center">
      <hr className="w-full border-t border border-white mb-6" />
      <p className="font-montserrat text-sm text-white">© Copyright 2022, All Rights Reserved by ClarityUI</p>
      </div>
    </footer>
  );
}

export default Footer;
