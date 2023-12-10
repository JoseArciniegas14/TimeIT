import * as Yup from "yup";

function AlarmValues() {
  return {
    time: "",
    interval: "",
    days: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
    state: false,
    title: "",
    content: "",
  };
}

function AlarmValitations() {
  return Yup.object({
    title: Yup.string(),
    content: Yup.string(),
  });
}

export { AlarmValues, AlarmValitations };
