import { SiGoogleforms } from "react-icons/si";
import { HiOutlineTableCells } from "react-icons/hi2";
import { PiChartLineUp } from "react-icons/pi";
import Accordion from "../ui/Accordion";

function ModuleNavbar() {
  return (
    <div>
      <div className="flex items-center gap-6">
        <h5 className="text-[#9faec5] text-md">Modules</h5>
        <div className="h-[0.5px] w-full bg-gray-300"></div>
      </div>
      <div className="mt-1 pl-5">
        <Accordion
          title="Forms"
          routeData={[
            "Basic",
            "Advance",
            "Floating labels",
            "Wizard",
            "Validation",
          ]}
        >
          <SiGoogleforms />
        </Accordion>

        <Accordion
          title="Tables"
          routeData={["Basic tables", "Advance tables", "Bulk select"]}
        >
          <HiOutlineTableCells />
        </Accordion>
        <Accordion title="Charts" routeData={["Chartjs", "D3js", "ECharts"]}>
          <PiChartLineUp />
        </Accordion>
      </div>
    </div>
  );
}

export default ModuleNavbar;
