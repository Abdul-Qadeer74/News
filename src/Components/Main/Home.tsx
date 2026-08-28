import Api from "../../Api";

const Home = () => {
  return (
    <div className="px-2 h-full w-full ">
      <h1 className="xs:text-3xl lg:text-5xl font-bold w-full h-[15%] flex items-center ">
        Top Headlines
      </h1>
      <Api />
    </div>
  );
};

export default Home;
