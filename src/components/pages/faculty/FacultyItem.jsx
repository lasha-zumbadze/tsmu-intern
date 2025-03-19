import { useState } from "react";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { useTranslation } from "react-i18next";

function FacultyItem({ faculty, index, dispatch }) {
  const [facultyName, setFacultyName] = useState(faculty);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const { t } = useTranslation();

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

      <div className="bg-white shadow-md border border-gray-200 p-4 text-xl rounded-md h-50 transition-all hover:shadow-xl hover:-translate-y-0.5 flex flex-col justify-between dark:bg-gray-700 dark:border-gray-600">
        <h2 className="text-gray-700 dark:text-gray-50">{faculty}</h2>
        <div className="flex justify-between">
          <button
            className="text-gray-500 cursor-pointer border-b hover:text-gray-700 transition-all dark:text-gray-50 dark:hover:text-gray-300"
            onClick={() => setDeleteOpen(true)}
          >
            {t("view.faculty.facultyModal.btnDelete")}
          </button>
          <button
            className="text-gray-500 cursor-pointer border-b hover:text-gray-700 transition-all dark:text-gray-50 dark:hover:text-gray-300"
            onClick={() => setEditOpen(true)}
          >
            {t("view.faculty.facultyModal.btnUpdate")}
          </button>
        </div>
      </div>
    </>
  );
}

export default FacultyItem;
