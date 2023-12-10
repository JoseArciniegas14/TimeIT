import * as Yup from "yup";

function NotesValues() {
  return {
    title: "",
    content: "",
  };
}

function NotesValitations() {
  return Yup.object({
    title: Yup.string(),
    content: Yup.string(),
  });
}

export { NotesValues, NotesValitations };
