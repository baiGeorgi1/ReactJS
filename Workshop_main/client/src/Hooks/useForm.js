import { useState } from "react";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const onChange = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return {
    values,
    onchange,
    onSubmit,
  };
}
