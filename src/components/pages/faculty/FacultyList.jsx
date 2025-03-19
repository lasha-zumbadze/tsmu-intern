import { useReducer, useState } from "react";
import AddModal from "./AddModal";
import { facultyData } from "../../../assets/data/facultyData";
import { facultyReducer } from "../../../reducers/facultyReducer";
import FacultyItem from "./FacultyItem";
import { useTranslation } from "react-i18next";

function FacultyList() {
  const [faculties, dispatch] = useReducer(facultyReducer, facultyData);
  const [addOpen, setAddOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div>
      {addOpen && (
        <AddModal
          dispatch={dispatch}
          addOpen={addOpen}
          setAddOpen={setAddOpen}
        />
      )}
      <div className="border border-gray-200 p-5 bg-white rounded-md shadow-lg mb-2 flex justify-between dark:bg-gray-700 dark:border-gray-600">
        <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-50">
          {t("view.faculty.pageTitle")}
        </h2>
        <button
          className="rounded-md border border-gray-500 bg-blue-400 text-lg w-28 md:w-36 py-3 text-white transition-all cursor-pointer hover:bg-blue-600"
          onClick={() => setAddOpen(true)}
        >
          {t("view.faculty.facultyModal.btnCreate")}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        {faculties.map((faculty, i) => (
          <FacultyItem
            key={i}
            index={i}
            faculty={faculty}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
}

export default FacultyList;
