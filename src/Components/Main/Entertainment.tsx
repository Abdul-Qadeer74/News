import { useEffect, useState } from "react";
type Article = {
  title: string;
  description: string;
  urlToImage: string | null;
  url: string;
  source: { name: string };
};
const Entertainment = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=apple&from=2026-08-26&to=2026-08-26&sortBy=popularity&apiKey=5bb0f95a0069473c8f3f2a9f7f1eb767",
      );

      const data = await response.json();

      setArticles(data.articles || []);
    };

    getUsers();
  }, []);

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
        {articles.slice(1).map((article, index) => (
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
              <h2 className="font-bold text-xl lg:text-2xl mb-3">
                {article.title}
              </h2>

              <p className="text-gray-700 mb-3">{article.description}</p>

              <p>
                <strong>Source:</strong> {article.source?.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Entertainment;
