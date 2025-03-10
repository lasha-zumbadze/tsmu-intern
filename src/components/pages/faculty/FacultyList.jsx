import { useReducer, useState } from "react";
import AddModal from "./AddModal";
import { facultyData } from "../../../assets/data/facultyData";
import { facultyReducer } from "../../../reducers/facultyReducer";
import FacultyItem from "./FacultyItem";

function FacultyList() {
  const [faculties, dispatch] = useReducer(facultyReducer, facultyData);
  const [addOpen, setAddOpen] = useState(false);

  return (
    <div>
      {addOpen && (
        <AddModal
          dispatch={dispatch}
          addOpen={addOpen}
          setAddOpen={setAddOpen}
        />
      )}
      <div className="border border-gray-200 p-5 bg-white rounded-md shadow-lg mb-2 flex justify-between">
        <h2 className="text-3xl font-semibold text-gray-700">Faculties</h2>
        <button
          className="rounded-md border border-gray-500 bg-blue-400 text-lg w-28 md:w-36 py-3 text-white transition-all cursor-pointer hover:bg-blue-600"
          onClick={() => setAddOpen(true)}
        >
          Create Faculty
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
