import { useEffect } from "react";

function useFacultyModalCloseEffect(
  state: boolean,
  stateSetter: React.Dispatch<React.SetStateAction<boolean>>
) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        stateSetter(false);
      }
    };

    if (state) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [state, stateSetter]);
}

export default useFacultyModalCloseEffect;
