import Accordion from "../ui/Accordion";
import PageNavbar from "../navbar/PageNavbar";
import ModuleNavbar from "../navbar/ModuleNavbar";
import { SiProgress } from "react-icons/si";

function Navbar() {
  return (
    <nav className="overflow-y-auto overscroll-x-none py-5 flex flex-col gap-5 h-full">
      <Accordion
        title="Dashboard"
        routeData={[
          "Analytics",
          "CRM",
          "E commerce",
          "LMS",
          "Management",
          "Sass",
          "Support desk",
        ]}
      >
        <SiProgress />
      </Accordion>

      <PageNavbar />
      <ModuleNavbar />
    </nav>
  );
}

export default Navbar;
