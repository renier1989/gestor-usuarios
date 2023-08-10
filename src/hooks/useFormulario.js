import { useState } from "react";

function useFormulario(initial) {
  const [formulario, setFormulario] = useState(initial);
  const handleChange = ({ target }) => {
    setFormulario({
      ...formulario,
      [target.name]: target.value,
    });
  };

  return [formulario, handleChange];
}

export default useFormulario;
