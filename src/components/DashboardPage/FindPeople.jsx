import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";

function FindPeople() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()

  const queryFromUrl = searchParams.get("q") || "";
  const [inputValue, setInputValue] = useState(queryFromUrl);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const people = [
    { id: 1, name: "Robert Fox", phone: "(239) 555-0108", img: "/1.svg" },
    { id: 2, name: "Floyd Miles", phone: "(480) 555-0103", img: "/1-1.svg" },
    { id: 3, name: "Ujang", phone: "(225) 555-0118", img: "/1-4.svg" },
    { id: 4, name: "Raul Melos", phone: "(406) 555-0120", img: "/1-2.svg" },
    { id: 5, name: "Ganjar", phone: "(303) 555-0105", img: "/1-5.svg" },
    { id: 6, name: "Gibran", phone: "(808) 555-0111", img: "/1-6.svg" },
    { id: 7, name: "Sitepu", phone: "(671) 555-0110", img: "/1-7.svg" },
    { id: 8, name: "Sahroni", phone: "(270) 555-0117", img: "/1-8.svg" },
    {
      id: 9,
      name: "Cameron Williamson",
      phone: "(308) 555-0121",
      img: "/1.svg",
    },
    { id: 10, name: "Cody Fisher", phone: "(704) 555-0127", img: "/1-1.svg" },
    {
      id: 11,
      name: "Kristin Watson",
      phone: "(603) 555-0123",
      img: "/1-4.svg",
    },
    { id: 12, name: "Wade Warren", phone: "(225) 555-0118", img: "/1-2.svg" },
    {
      id: 13,
      name: "Savannah Nguyen",
      phone: "(217) 555-0113",
      img: "/1-5.svg",
    },
    { id: 14, name: "Budi Santoso", phone: "(812) 555-0101", img: "/1-6.svg" },
    { id: 15, name: "Siti Aminah", phone: "(813) 555-0102", img: "/1-7.svg" },
    { id: 16, name: "Joko Widodo", phone: "(814) 555-0103", img: "/1-8.svg" },
    { id: 17, name: "Andi Wijaya", phone: "(815) 555-0104", img: "/1.svg" },
    { id: 18, name: "Maya Sari", phone: "(816) 555-0105", img: "/1-1.svg" },
    { id: 19, name: "Dedi Setiawan", phone: "(817) 555-0106", img: "/1-4.svg" },
    { id: 20, name: "Agus Pratama", phone: "(818) 555-0107", img: "/1-2.svg" },
    { id: 21, name: "Rina Amelia", phone: "(819) 555-0108", img: "/1-5.svg" },
    { id: 22, name: "Toni Kusuma", phone: "(820) 555-0109", img: "/1-6.svg" },
    {
      id: 23,
      name: "Dian Sastrowardoyo",
      phone: "(821) 555-0110",
      img: "/1-7.svg",
    },
    { id: 24, name: "Eko Yuli", phone: "(822) 555-0111", img: "/1-8.svg" },
    { id: 25, name: "Fitriani", phone: "(823) 555-0112", img: "/1.svg" },
    { id: 26, name: "Gilang Dirga", phone: "(824) 555-0113", img: "/1-1.svg" },
    {
      id: 27,
      name: "Hendra Setiawan",
      phone: "(825) 555-0114",
      img: "/1-4.svg",
    },
    { id: 28, name: "Iwan Fals", phone: "(826) 555-0115", img: "/1-2.svg" },
    { id: 29, name: "Bunga Citra", phone: "(827) 555-0116", img: "/1-5.svg" },
    { id: 30, name: "Kevin Sanjaya", phone: "(828) 555-0117", img: "/1-6.svg" },
    { id: 31, name: "Lesti Kejora", phone: "(829) 555-0118", img: "/1-7.svg" },
    {
      id: 32,
      name: "Mohammad Ahsan",
      phone: "(830) 555-0119",
      img: "/1-8.svg",
    },
    { id: 33, name: "Nia Ramadhani", phone: "(831) 555-0120", img: "/1.svg" },
    {
      id: 34,
      name: "Okan Kornelius",
      phone: "(832) 555-0121",
      img: "/1-1.svg",
    },
    { id: 35, name: "Putri KW", phone: "(833) 555-0122", img: "/1-4.svg" },
    { id: 36, name: "Rizky Billar", phone: "(834) 555-0123", img: "/1-2.svg" },
    { id: 37, name: "Sule", phone: "(835) 555-0124", img: "/1-5.svg" },
    { id: 38, name: "Tukul Arwana", phone: "(836) 555-0125", img: "/1-6.svg" },
    {
      id: 39,
      name: "Ussy Sulistiawaty",
      phone: "(837) 555-0126",
      img: "/1-7.svg",
    },
    { id: 40, name: "Vidi Aldiano", phone: "(838) 555-0127", img: "/1-8.svg" },
    { id: 41, name: "Wulan Guritno", phone: "(839) 555-0128", img: "/1.svg" },
    { id: 42, name: "Yuki Kato", phone: "(840) 555-0129", img: "/1-1.svg" },
    {
      id: 43,
      name: "Zaskia Sungkar",
      phone: "(841) 555-0130",
      img: "/1-4.svg",
    },
    { id: 44, name: "Ahmad Dhani", phone: "(842) 555-0131", img: "/1-2.svg" },
    { id: 45, name: "Ariel Noah", phone: "(843) 555-0132", img: "/1-5.svg" },
    { id: 46, name: "Judika", phone: "(844) 555-0133", img: "/1-6.svg" },
    {
      id: 47,
      name: "Isyana Sarasvati",
      phone: "(845) 555-0134",
      img: "/1-7.svg",
    },
    {
      id: 48,
      name: "Raisa Andriana",
      phone: "(846) 555-0135",
      img: "/1-8.svg",
    },
    { id: 49, name: "Afgan Syahreza", phone: "(847) 555-0136", img: "/1.svg" },
    { id: 50, name: "Tulus", phone: "(848) 555-0137", img: "/1-1.svg" },
  ];

const handleSelectPerson = (person) => {
  navigate("/detail", {state: {selectedPerson:person }})
}

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inputValue) {
        setSearchParams({ q: inputValue });
      } else {
        setSearchParams({});
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [inputValue, setSearchParams]);

  const filteredPeople = people.filter(
    (person) =>
      person.name.toLocaleLowerCase().includes(inputValue.toLowerCase()) ||
      person.phone.includes(inputValue),
  );

  const totalItems = filteredPeople.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPeople = filteredPeople.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <section className="bg-white rounded-md p-6 shadow-sm border border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h3 className="text-xl font-bold text-black">Find People</h3>
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
            {paginatedPeople.map((person, index) => (
              <tr
                key={person.id}
                onClick={() => handleSelectPerson(person)}
                className={`${index % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"} transition-colors hover:bg-blue-50`}
              >
                <td className="py-2 px-3 md:py-3 md:px-4 w-12 md:w-16">
                  <img
                    src={person.img}
                    alt={person.name}
                    className=" w-10 h-10 md:w-12 md:h-12 rounded-sm object-cover"
                  />
                </td>
                <td className="py-2 px-3 md:py-3 md:px-4 whitespace-nowrap">
                  <div
                    className="py-3 px-4 text-center text-sm md:text-base font-medium text-black"
                  >
                    {person.name}
                  </div>
                </td>
                <td className="py-3 px-4 text-xs md:text-sm text-gray-500">
                  {person.phone}
                </td>
                <td className="py-3 px-4 text-right">
                  <button 
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                    <img
                      src="/Star.svg"
                      alt="favorit"
                      className="w-5 h-5 opacity-60"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredPeople.length === 0 && <div>Data tidak ditemukan</div>}
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
                    ? "text-[#4A3AFF] font-bold bg-blue-50"
                    : "hover:bg-gray-100"
                }`}
              >
                {num}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-2 py-1 font-medium text-black hover:text-[#4A3AFF] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default FindPeople;
