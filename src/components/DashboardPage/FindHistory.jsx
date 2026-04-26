import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useAuth } from "../../hooks/useAuth";


function FindHistory() {
  const { currentUser, registeredUsers } = useAuth()
  const [searchParams, setSearchParams] = useSearchParams();

  const activeUser = registeredUsers.find((u) => u.email === currentUser?.email)
  const historyTrx = activeUser?.history || []

  const queryFromUrl = searchParams.get("q") || "";
  // const pageFromUrl = parseInt(searchParams.get("page")) || 1
  const [inputValue, setInputValue] = useState(queryFromUrl);

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
 
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
    setCurrentPage(1)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      
      if (inputValue) {
        setSearchParams({q: inputValue});
      } else {
        setSearchParams({});
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [inputValue, setSearchParams]);

  const filteredHistory = historyTrx.filter(
    (item) =>
      item.name.toLowerCase().includes(inputValue.toLocaleLowerCase()) ||
      item.type.toLowerCase().includes(inputValue.toLocaleLowerCase())
  )

  const totalItems = filteredHistory.length
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1

  const startIndex = (currentPage -1) * itemsPerPage;
  const paginatedPeople = [...filteredHistory]
  .reverse()
  .slice(startIndex, startIndex + itemsPerPage)

  const pageNumbers = Array.from({ length: totalPages }, (_,i) => i + 1)

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev -1, 1))
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  return (
    <section className="bg-white rounded-md p-6 shadow-sm border border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h3 className="text-xl font-bold text-black">Find History</h3>
          <p className="text-sm text-gray-500 mt-1">
            {/* {filteredPeople.length} Result Found For{" "}
            {queryFromUrl || "Everyone"}{" "} */}
            {totalItems} Result Found For {queryFromUrl || "Everyone"}
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Enter Number Or Full Name"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full pl-4 pr-12 py-3 bg-white border border-gray-200 rounded-xs text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />

          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src="/Search.svg"
              alt="icon-search"
              className="w-5 h-5 opacity-40"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
        <table className="w-full min-w-lg md:min-w-full border-spacing-y-0">
          <tbody>
            {paginatedPeople.map((item, index) => (
              <tr
                key={item.id}
                className={`${index % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"} transition-colors hover:bg-blue-50`}
              >
                <td className="py-2 px-3 md:py-3 md:px-4 w-12 md:w-16">
                  <img
                    src={item.image}
                    alt={item.name}
                    className=" w-10 h-10 md:w-12 md:h-12 rounded-sm object-cover"
                  />
                </td>
                <td className="py-3 px-4 text-center text-sm md:text-base font-medium text-black">
                
                    {/* className="py-3 px-4 text-center text-sm md:text-base font-medium text-black" */}

                    {item.name}
                </td>

                <td className="py-3 px-4 text-xs md:text-sm text-gray-500">
                  Rp. 50.000
                </td>

                <td className="py-3 px-4 text-xs md:text-sm text-gray-500">
                  {item.phone}
                </td>
                <td className="py-3 px-4 text-right">
                  <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                    <img
                      src="/Trash.svg"
                      alt="favorit"
                      className="w-5 h-5 opacity-60"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {totalItems.length === 0 && (
          <div>
            Data tidak ditemukan
          </div>
        )}

      </div>

      {totalItems > 0 && (
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 w-full text-sm text-gray-500 pt-4 border-t border-gray-100 gap-4">
          <div className="font-medium">
            Show {paginatedPeople.length} History of {totalItems} History
          </div>

          <div className="flex items-center space-x-1">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-2 py-1 font-medium hover:text-[#4A3AFF] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Prev
            </button>

            {pageNumbers.map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`w-8 h-8 flex items-center justify-center rounded-md font-medium transition-all ${
                  currentPage === num
                    ? "text-primary font-bold bg-blue-50"
                    : "hover:bg-gray-100"
                }`}
              >
                {num}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-2 py-1 font-medium text-black hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default FindHistory;
