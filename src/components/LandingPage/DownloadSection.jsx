import ButtonDownload from "../atoms/ButtonDownload";

function DownloadSection() {
  return (
    <section className="bg-gray-100 px-6 md:px-20 py-4 md:py-16 grid grid-cols-1 md:grid-cols-2">
      <div className="flex order-2 md:order-1">
        <img
          src="../src/assets/Group 1580.svg"
          alt="mobile-dashboard"
          className="order-2 md:order-1"
        />
      </div>

      <div className="download flex flex-col justify-center order-1 md:order2 gap-4">
        <h1 className="font-montserrat text-4xl font-medium">
          Download The App
        </h1>
        <p className="font-montserrat ">
          Ready to experience the future of payments? Download e-wallet now and
          enjoy a world of convenience at your fingertips.
        </p>
        <div className="btn-download flex gap-8">
          <ButtonDownload
            icon="../src/assets/gplay.png"
            altText="google-play"
            text="Google Play"
            imgSize="w-8"
            variant="outlineBlue"
          />

          <ButtonDownload
            icon="../src/assets/apple-24.png"
            altText="apple-store"
            text="Apple Store"
            imgSize="w-6"
            variant="outlineBlue"
          />
        </div>
      </div>
    </section>
  );
}

export default DownloadSection;
