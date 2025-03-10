import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div className="h-[85vh] text-5xl bg-gray-50 p-5">Home Page</div>
    </>
  );
}

export default Home;
