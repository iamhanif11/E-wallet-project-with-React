
function FailPopUp({onClose}) {
  return (
    <section className="p-8">
      <p className="font-semibold">Transfer to </p>

      <div className="flex flex-col justify-center items-center">
        <img src="/ohno.png" alt="failed" className="w-2xs text" />
        <p className="font-semibold text-2xl text-center">
          Oops Transfer <span className="text-red-500">Failed</span>{" "}
        </p>
        <p className="text-sm text-gray-400 text-center">Sorry Theres is an issue for your transfer, try again later !</p>
      </div>

      <button className="btn-submit w-full border border-blue-600 p-2 rounded-md bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-montserrat mt-4">
        Try Again
      </button>

      <button 
      onClick={onClose}
      className="btn-submit w-full border border-blue-600 p-2 rounded-md bg-white hover:bg-gray-100 cursor-pointer text-primary font-montserrat mt-4">
        Back to Dashboard
      </button>
    </section>
  )
}

export default FailPopUp