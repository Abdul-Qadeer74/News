const Search = () => {
  return (
    <div className="w-full border-black flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-4 lg:gap-6 px-4 py-6">
      <div className="w-full lg:w-[45%] h-12 border rounded-xl border-gray-400">
        <input
          type="text"
          placeholder="Search for new articles"
          className="h-full w-full p-3 rounded-xl outline-none"
        />
      </div>

      <div className="w-full lg:w-auto flex items-center gap-2">
        <label>Sort by:</label>

        <select
          name="sort"
          id="sort"
          className="h-10 flex-1 lg:w-36 rounded border px-2"
        >
          <option value="most-recent">Most recent</option>
          <option value="oldest">Oldest</option>
          <option value="most-popular">Most popular</option>
        </select>
      </div>

      <div className="w-full lg:w-auto flex items-center gap-2">
        <label htmlFor="from" className="whitespace-nowrap">
          From:
        </label>

        <select
          name="from"
          id="from"
          className="h-10 flex-1 lg:w-36 rounded border px-2"
        >
          <option value="all-time">All time</option>
          <option value="24-hours">Last 24 hours</option>
          <option value="7-days">Last 7 days</option>
          <option value="month">Last Month</option>
        </select>
      </div>

      <button className="w-full lg:w-28 h-12 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl flex items-center justify-center text-lg transition">
        Search
      </button>
    </div>
  );
};

export default Search;
