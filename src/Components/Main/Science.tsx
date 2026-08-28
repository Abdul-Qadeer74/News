import { useEffect, useState } from "react";

const Science = () => {
  const [articles, setArticles] = useState<any>([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=22439b547d904b1caa169221d47072f8",
      );

      const data = await response.json();

      setArticles(data.articles || []);
    };

    getUsers();
  }, []);
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="w-full p-2">
      <h1 className="text-6xl font-bold w-full  flex items-center ">Science</h1>
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
              <h2 className="font-bold text-xl lg:text-2xl mb-3">
                {article.title}
              </h2>

              <p className="text-gray-700 mb-3">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Science;
