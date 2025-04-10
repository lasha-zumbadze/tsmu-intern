export type FacultyState = string[];

export type FacultyAction =
  | { type: "addFaculty"; payload: { value: string } }
  | { type: "editFaculty"; payload: { id: number; value: string } }
  | { type: "deleteFaculty"; payload: { id: number } };

export type FacultyItemProps = {
  faculty: string;
  index: number;
  dispatch: React.Dispatch<FacultyAction>;
};

export type AddModalProps = {
  setAddOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addOpen: boolean;
  dispatch: React.Dispatch<FacultyAction>;
};

export type EditModalProps = {
  facultyName: string;
  setFacultyName: React.Dispatch<React.SetStateAction<string>>;
  setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editOpen: boolean;
  index: number;
  dispatch: React.Dispatch<FacultyAction>;
};

export type DeleteModalProps = {
  setDeleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteOpen: boolean;
  index: number;
  dispatch: React.Dispatch<FacultyAction>;
};
