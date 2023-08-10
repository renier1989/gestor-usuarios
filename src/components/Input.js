import React from "react";

// aqui uso un rest operator. puedo excluir unicamente la propidad del "label" fuera del Spread operator.
// recordar que los rest operators siempre se declaran como segundo parametro ya que estos van a contener los demas parametros excluyendo los primeros
function Input({ label, ...restInput }) {
  //   console.log(restInput);
  return (
    <div className="mb-10">
      <label className="font-semibold text-2xl block text-[#222]">{label}</label>
      <input
        className="bg-white outline-none text-lg py-2 px-4  border-[0.5px] border-gray-400  rounded-lg text-[#222] w-full"
        {...restInput}
      />
    </div>
  );
}

export default Input;
