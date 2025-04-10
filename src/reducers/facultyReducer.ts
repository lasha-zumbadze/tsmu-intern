import { FacultyAction, FacultyState } from "../types/facultyTypes";

export const facultyReducer = (state: FacultyState, action: FacultyAction) => {
  switch (action.type) {
    case "addFaculty":
      return [...state, action.payload.value];
    case "editFaculty":
      return state.map((faculty, i) =>
        i === action.payload.id ? action.payload.value : faculty
      );
    case "deleteFaculty":
      return state.filter((_, i) => i !== action.payload.id);
    default:
      return state;
  }
};
