function IntroSection(){
    return(
        <section className="flex flex-col md:flex-row md:gap-4 px-6 md:px-20 py-8 md:py-16 max-w-7xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center order-1 md:order-2">
         <img src="/lpdasboard.png" alt="image-mobiledashboard" className="w-full mb-6 max-w-md md:w-xl md:max-w-lg " />
        </div>
        <div className="intro-detail flex flex-col gap-4 items-center md:items-start order-2 md:order-1">
          <h3 className="font-montserrat text-blue-600 text-lg font-bold">WELCOME TO E-WALLET</h3>
          <h1 className="font-montserrat text-center md:text-left text-3xl md:text-4xl">Your All-in-One Digital Payment Solution</h1>
          <p className="font-montserrat text-center md:text-left text:text-left text-gray-700 font-light ">
            Say goodbye to cash and hello to the future of payments! With
            e-wallet, you have the power of secure, fast, and convenient digital
            transactions right at your fingertips. Whether you're shopping,
            dining out, or sending money to loved ones, we've got you covered.
          </p>
          <button className="border-blue-600 p-4 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer rounded-md w-full md:w-40 md:px-8 md:py-3">Get Started</button>
        </div>

      </section>
    )
}

export default IntroSection