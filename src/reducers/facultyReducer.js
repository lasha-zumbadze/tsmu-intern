export const facultyReducer = (state, action) => {
  switch (action.type) {
    case "addFaculty":
      return [...state, action.payload];
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
