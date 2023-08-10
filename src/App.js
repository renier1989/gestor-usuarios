import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Container from "./components/Container";
import Input from "./components/Input";
import useFormulario from "./hooks/useFormulario";

function App() {
  const [usuarios, setUsuario] = useState([]);
  // custom hook
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    email: "",
  });

  const quitarUsuario = (keyU) => {
    console.log(keyU, usuarios);
    const newUsuarios = usuarios.filter((_, i) => i !== keyU);
    setUsuario(newUsuarios);
  };

  const submit = (e) => {
    e.preventDefault();
    setUsuario([...usuarios, formulario]);
    reset();
  };

  // console.log(usuarios)
  return (
    <div className="font-Montserrat h-screen flex flex-col justify-center items-center bg-stone-300">
      <Container>
        <Card>
          <form onSubmit={submit}>
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
        </Card>
        {usuarios.length ? (
          <Card>
            <ul className="flex flex-col gap-4">
              {usuarios.map((usuario, index) => (
                <li key={index} className="text-lg font-semibold">
                  <span
                    onClick={() => quitarUsuario(index)}
                    className="cursor-pointer hover:text-lg"
                  >
                    ❌
                  </span>{" "}
                  {`${usuario.name}`} {`${usuario.lastname}`} /{" "}
                  {`${usuario.email}`}
                </li>
              ))}
            </ul>
          </Card>
        ) : null}
      </Container>
    </div>
  );
}

export default App;
