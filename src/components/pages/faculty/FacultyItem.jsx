import { useState } from "react";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

function FacultyItem({ faculty, index, dispatch }) {
  const [facultyName, setFacultyName] = useState(faculty);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <>
      {editOpen ? (
        <EditModal
          facultyName={facultyName}
          setFacultyName={setFacultyName}
          setEditOpen={setEditOpen}
          index={index}
          dispatch={dispatch}
          editOpen={editOpen}
        />
      ) : deleteOpen ? (
        <DeleteModal
          dispatch={dispatch}
          setDeleteOpen={setDeleteOpen}
          deleteOpen={deleteOpen}
          index={index}
        />
      ) : null}

      <div className="bg-gradient-to-br from-blue-100 to-white shadow-md border border-gray-200 p-4 text-xl rounded-md h-50 transition-all hover:shadow-xl hover:-translate-y-0.5 flex flex-col justify-between">
        <p className="text-gray-700">{faculty}</p>
        <div className="flex justify-between">
          <button
            className="text-gray-500 cursor-pointer border-b hover:text-gray-700 transition-all"
            onClick={() => setDeleteOpen(true)}
          >
            Delete
          </button>
          <button
            className="text-gray-500 cursor-pointer border-b hover:text-gray-700 transition-all"
            onClick={() => setEditOpen(true)}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default FacultyItem;
