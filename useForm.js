import { useState } from "react";

export const useForm = (initState) => {
  const [formState, setFormState] = useState(initState);

  const onInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const onResetForm = () => {
    setFormState(initState);
  };
  return {
    ...formState,
    onInputChange,
    onResetForm,
  };
};
