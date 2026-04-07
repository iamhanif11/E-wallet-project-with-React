function ServiceCard() {
  return (
    <div className="service-1 w-full h-full items-center jufont-montserrat border justify-between border-gray-400 flex p-6">
      <h3 className="font-semibold">Fast Service</h3>
      <div className="btn-service flex gap-4">
        <button className="flex gap-2 items-center border border-blue-600 bg-blue-600 text-white p-2 rounded-sm">
          <img src="../public/u_money-insert.svg" alt="insert" />
          <p>Top Up</p>
        </button>
        <button className="flex gap-2 items-center border border-blue-600 bg-blue-600 text-white p-2 rounded-sm">
          <img src="../public/Send.svg" alt="send" className="brightness-0 invert" />
          <p>Transfer</p>
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
