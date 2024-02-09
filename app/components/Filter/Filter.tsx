"use client";

const Filter = () => {
  return (
    <form className="flex flex-col md:flex-row gap-4 flex-nowrap">
      <input
        type="search"
        name="description"
        id="description"
        className="md:w-5/12 rounded-md shadow-sm border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Search case descriptions"
      />

      <input
        type="text"
        name="from"
        id="from"
        className="md:w-2/12 rounded-md shadow-sm border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="From"
      />

      <input
        type="text"
        name="to"
        id="to"
        className="md:w-2/12 rounded-md shadow-sm border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="To"
      />

      <button
        type="submit"
        className="flex justify-center md:w-3/12 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-nowrap"
      >
        Find cases
      </button>
    </form>
  );
};

export default Filter;
