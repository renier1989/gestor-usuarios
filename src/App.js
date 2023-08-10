import useFormulario from "./hooks/useFormulario";

function App() {
  // custom hook
  const [formulario, handleChange] = useFormulario({ name: "" });

  console.log(formulario);
  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formulario.name}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default App;
