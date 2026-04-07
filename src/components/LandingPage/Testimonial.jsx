function Testimonial() {
  return (
    <section className="hero-5 px-6 md:px-16 py-4 mb-4">
      <h2 className="font-montserrat font-medium md:text-center text-3xl md:text-5xl">
        What Our Users Are Saying
      </h2>
      <p className="font-montserrat text-center text-gray-500 mb-4">
        Ready to experience the future of payments? Download e-wallet now and
        enjoy a world of convenience at your fingertips.
      </p>

      <div className="testimoni w-full md:grid md:grid-cols-3 items-center max-w-6xl mx-auto ">
        <div className="arrow hidden md:flex md:justify-center">
          <img src="../public/Group 1305.svg" alt="left-arrow" />
        </div>

        <div className="box-testimoni w-full px-16 py-8 text-white rounded-lg  border-blue-600 bg-blue-600 flex flex-col items-center">
          <img src="../public/james.svg" className="profil" alt="james" />
          <h3 className="font-montserrat font-bold text-lg ">James Bond</h3>
          <img
            src="../public/Frame 41 white.svg"
            className="star"
            alt="rating"
          />
          <h3 className="font-montserrat font-bold text-x">“</h3>
          <p className="text-center font-montserrat">
            I've been using the e-wallet for over two years now, and I'm very
            satisfied with the ease of use. This has completely changed the way
            I shop and conduct financial transactions.
          </p>
        </div>

        <div className="arrow hidden md:flex md:justify-center">
          <img src="../public/Group 1304.svg" alt="right-arrow" />
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
