import { Link } from "react-router";

function FindPeople() {
  const people = [
    { id: 1, name: "Robert Fox", phone: "(239) 555-0108", img: "/1.svg" },
    { id: 2, name: "Floyd Miles", phone: "(480) 555-0103", img: "/1-1.svg" },
    { id: 3, name: "Ujang", phone: "(225) 555-0118", img: "/1-4.svg" },
    { id: 4, name: "Raul Melos", phone: "(406) 555-0120", img: "/1-2.svg" },
    { id: 5, name: "Ganjar", phone: "(303) 555-0105", img: "/1-5.svg" },
    { id: 6, name: "Gibran", phone: "(808) 555-0111", img: "/1-6.svg" },
    { id: 7, name: "Sitepu", phone: "(671) 555-0110", img: "/1-7.svg" },
    { id: 8, name: "Sahroni", phone: "(270) 555-0117", img: "/1-8.svg" },
  ];

  return (
    <section className="bg-white rounded-md p-6 shadow-sm border border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h3 className="text-xl font-bold text-black">Find People</h3>
          <p className="text-sm text-gray-500 mt-1">
            8 Result Found For Ghaluh
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Enter Number Or Full Name"
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
            {people.map((person, index) => (
              <tr
                key={person.id}
                className={`${index % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"} transition-colors hover:bg-blue-50`}
              >
                <td className="py-2 px-3 md:py-3 md:px-4 w-12 md-16">
                  <img
                    src={person.img}
                    alt={person.name}
                    className=" w-10 h-10 md:w-12 md:h-12 rounded-md object-cover"
                  />
                </td>
                <td className="py-2 px-3 md:py-3 md:px-4 whitespace-nowrap" >
                  <Link
                    to="/Detail"
                    className="py-3 px-4 text-center text-sm md:text-base font-medium text-black"
                  >
                    {person.name}
                  </Link>
                </td>
                <td className="py-3 px-4 text-xs md:text-sm text-gray-500">{person.phone}</td>
                <td className="py-3 px-4 text-right">
                  <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
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
      </div>
    </section>
  );
}

export default FindPeople;
