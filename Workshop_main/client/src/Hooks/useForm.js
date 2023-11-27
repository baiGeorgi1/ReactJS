import { useState } from "react";
//От login подаваме на useForm хендлъра като 1-ви парам. и ст-стите като втори парам
export function useForm(submitHandler, initialValues) {
  const [values, setValues] = useState(initialValues);
  const onChange = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    submitHandler(values);
  };

  return {
    values,
    onChange,
    onSubmit,
  };
}
