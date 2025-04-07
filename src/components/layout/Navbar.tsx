import PageNavbar from "../navbar/PageNavbar";

function Navbar() {
  return (
    <nav className="overflow-y-auto overscroll-x-none py-5 flex flex-col gap-5 h-full">
      <PageNavbar />
    </nav>
  );
}

export default Navbar;
