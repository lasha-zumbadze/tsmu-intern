import Aside from "./Aside";
import Header from "./Header";
import Main from "./Main";

function RootLayout() {
  return (
    <div className="bg-[#edf2f9] h-screen overflow-hidden px-10 md:px-30 lg:px-50 grid grid-cols-[18vw_1fr]">
      <Header />
      <Aside />
      <Main />
    </div>
  );
}

export default RootLayout;
