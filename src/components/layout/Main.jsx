import { Outlet } from "react-router";
import Footer from "./Footer";

function Main() {
  return (
    <main className="grid col-start-1 col-end-3 h-[90vh] lg:col-start-2">
      <article className="overflow-auto h-full lg:px-10">
        <Outlet />
        <Footer />
      </article>
    </main>
  );
}

export default Main;
