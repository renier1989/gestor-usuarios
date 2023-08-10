import Button from "./components/Button";
import Card from "./components/Card";
import Container from "./components/Container";
import Input from "./components/Input";
import useFormulario from "./hooks/useFormulario";

function App() {
  // custom hook
  const [formulario, handleChange] = useFormulario({
    name: "",
    lastname: "",
    email: "",
  });

  return (
    <div className="h-screen bg-stone-300">
      <Container>
        <Card>
          <form>
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

            <Button >Enviar</Button>
          </form>
        </Card>
      </Container>
    </div>
  );
}

export default App;
