function FeatureSection(){
    return (
        <section className="px-6 md:px-20 py-4 md:py-16 bg-gray-100">
        <div className="flex flex-col md:flex-row md:gap-32 justify-center items-center gap-2">
          <img
            src="../src/assets/online-payment-security-concept-3d-phone-bill 1.svg"
            alt="image"
            className="w-xs"
          />
          <div className="benefit-detail flex flex-col gap-4 items-start ">
            <h1 className="font-montserrat font-medium text-3xl md:text-5xl ">All The Great Zwallet Features.</h1>
            <p className="font-montserrat text-gray-500 md:text-lg">
              We have some great features from the application and it’s totally
              free to use by all users around the world.
            </p>
            <img className="img1" src="../src/assets/Frame 57.svg" alt="small-fee" />
            <img className="img2" src="../src/assets/Frame 58.svg" alt="data-secure" />
            <img className="img3" src="../src/assets/Frame 59.svg" alt="user-friendly" />
            <button className="border-blue-600 p-4 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer rounded-md w-full md:w-40 md:px-8 md:py-3">Get Started</button>
          </div>
        </div>
      </section>
    )

}

export default FeatureSection