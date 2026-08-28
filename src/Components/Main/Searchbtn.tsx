import { useState } from "react";

const Searchbtn = () => {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!search.trim()) return;
    const API_KEY = "22439b547d904b1caa169221d47072f8";
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(search)}&sources=techcrunch&apiKey=${API_KEY}`;
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch articles");
      }
      setArticles(data.articles);
    } finally {
      setLoading(false);
    }
  };
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="w-full">
      <div className="w-full border-black flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-4 lg:gap-6 px-4 py-6">
        <div className="lg:w-[45%] w-full flex items-center justify-center gap-4">
          <div className="w-full h-12 border rounded-xl border-gray-400">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder="Search for news articles"
              className="h-full w-full p-3 rounded-xl outline-none"
            />
          </div>
        </div>
        <div className="w-full lg:w-auto flex items-center gap-2">
          Sort by:
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
          From:
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
        <button
          onClick={handleSearch}
          disabled={loading}
          className="w-full lg:w-28 h-12 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl flex items-center justify-center text-lg transition disabled:opacity-50"
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>
      <div className="px-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article: any, index: number) => (
            <div key={index} className=" rounded-xl overflow-hidden transition">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-52 object-cover"
                />
              )}
              <div className="p-5">
                <h1 className="font-bold h-[10%]">
                  {formatDate(articles[0].publishedAt)}
                </h1>
                <h2 className="text-lg font-bold mb-3">{article.title}</h2>

                <p className="text-gray-600 text-sm mb-4">
                  {article.description || "No description available."}
                </p>
              </div>
            </div>
          ))}
        </div>

        {!loading && search && articles.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No articles found.</p>
        )}
      </div>
    </div>
  );
};
export default Searchbtn;
