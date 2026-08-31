import { useEffect, useState } from "react";

const Science = () => {
  const [articles, setArticles] = useState<any>([]);
  const [index, setIndex] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);
  const itemsPerPage = 5;

  const getUsers = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=22439b547d904b1caa169221d47072f8&page=${index}&pageSize=${itemsPerPage}`,
    );

    const data = await response.json();

    setArticles(data.articles || []);
    setTotalResults(data.totalResults || 0);
  };
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  useEffect(() => {
    getUsers();
  }, [index]);
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="w-full p-2">
      {articles.length > 0 && (
        <div className="w-full flex flex-col lg:flex-row  gap-4 mb-6 rounded-xl p-2">
          {articles[0].urlToImage && (
            <img
              src={articles[0].urlToImage}
              alt={articles[0].title}
              className="w-full lg:w-[50%] h-72 md:h-96 object-cover rounded-xl"
            />
          )}

          <div className="w-full lg:w-[50%] flex flex-col justify-center p-4">
            <h1 className="font-bold h-[10%]">
              {formatDate(articles[0].publishedAt)}
            </h1>
            <h2 className="font-bold text-2xl lg:text-4xl mb-4">
              {articles[0].title}
            </h2>

            <p className="text-gray-600 mb-4">{articles[0].description}</p>

            <p>
              <strong>Source:</strong> {articles[0].source?.name}
            </p>
          </div>
        </div>
      )}

      <div className="w-full flex lg:flex-row md:flex-col flex-wrap justify-evenly ">
        {articles.slice(1).map((article: any, index: number) => (
          <div
            key={article.url || index}
            className="lg:w-[30%] md:w-full flex flex-col mt-2"
          >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-60 object-cover rounded-xl"
              />
            )}

            <div className=" w-full flex flex-col justify-center p-4">
              <h1 className="font-bold h-[10%]">
                {formatDate(article.publishedAt)}
              </h1>
              <h2 className="font-bold text-2xl lg:text-4xl mb-4">
                {article.title}
              </h2>

              <p className="text-gray-700 mb-3">{article.description}</p>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="p-5 font-bold text-black">
          <div className="gap-5 flex flex-col lg:flex-row items-center justify-center mt-5">
            <button
              onClick={() => {
                if (index > 1) {
                  setIndex(index - 1);
                }
              }}
              disabled={index === 1}
              className={`px-10 py-3 rounded-2xl ${
                index === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-amber-300 cursor-pointer active:scale-95"
              }`}
            >
              Prev
            </button>

            <div className="flex flex-wrap justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setIndex(page)}
                    className={`px-4 py-2 rounded ${
                      index === page
                        ? "bg-amber-400 text-white"
                        : "bg-gray-200 text-black cursor-pointer"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>

            <button
              onClick={() => {
                if (index < totalPages) {
                  setIndex(index + 1);
                }
              }}
              disabled={index === totalPages}
              className={`px-10 py-3 rounded-2xl ${
                index === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-amber-300 cursor-pointer active:scale-95"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Science;
