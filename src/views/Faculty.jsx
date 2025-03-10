import { Helmet } from "react-helmet-async";
import FacultyList from "../components/pages/faculty/FacultyList";

function Faculty() {
  return (
    <>
      <Helmet>
        <title>Faculty Page</title>
      </Helmet>
      <FacultyList />
    </>
  );
}

export default Faculty;
