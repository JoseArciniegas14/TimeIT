import { useState } from "react";
import { initialValues } from "../validations/RegisterValidation";

const useRegister = () => {
  const [data, setData] = useState(initialValues());

  const updateData = (data) => {
    setData(data);
  };

  const resetData = () => {
    setData(initialValues());
  };

  return { data, updateData, resetData };
};

export { useRegister };
