import Card from "./components/Card";
import Input from "./components/Input";
import useFormulario from "./hooks/useFormulario";

function App() {
  // custom hook
  const [formulario, handleChange] = useFormulario({
    name: "",
    lastname: "",
  });

  return (
    <div className="h-screen bg-stone-300">
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
        </form>
      </Card>
    </div>
  );
}

export default App;
