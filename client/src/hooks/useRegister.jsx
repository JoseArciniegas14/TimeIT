import { useState } from "react";
import { RegisterValues } from "../validations/RegisterValidation";

const useRegister = () => {
  const [data, setData] = useState(RegisterValues());

  const updateData = (data) => {
    setData(data);
  };

  const resetData = () => {
    setData(RegisterValues());
  };

  return { data, updateData, resetData };
};

export { useRegister };
