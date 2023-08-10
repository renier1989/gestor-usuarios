import { useState } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import UserForm from "./components/UserForm";

function App() {
  const [usuarios, setUsuario] = useState([]);
  // custom hook
  

  const quitarUsuario = (keyU) => {
    console.log(keyU, usuarios);
    const newUsuarios = usuarios.filter((_, i) => i !== keyU);
    setUsuario(newUsuarios);
  };

  const submit = (usuario) => {
    setUsuario([...usuarios, usuario]);
  };

  console.log(usuarios)
  return (
    <div className="font-Montserrat h-screen flex flex-col justify-center items-center bg-stone-300">
      <Container>
        <Card>
          <UserForm submit={submit} />
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
