import React from "react";
import Input from "./Input";
import Button from "./Button";
import useFormulario from "../hooks/useFormulario";

function UserForm({submit}) {

    const [formulario, handleChange, reset] = useFormulario({
        name: "",
        lastname: "",
        email: "",
      });

      const handleSubmit = (e) => {
        e.preventDefault(); 
        submit(formulario);
        reset();
      }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nombre de Usuario"
        type="text"
        name="name"
        placeholder="Nombre"
        value={formulario.name}
        onChange={handleChange}
      />

      <Input
        label="Apellido de Usuario"
        type="text"
        name="lastname"
        placeholder="Apellido"
        value={formulario.lastname}
        onChange={handleChange}
      />

      <Input
        label="Correo Electrónico"
        type="text"
        name="email"
        placeholder="Correo"
        value={formulario.email}
        onChange={handleChange}
      />

      <Button>Enviar</Button>
    </form>
  );
}

export default UserForm;
