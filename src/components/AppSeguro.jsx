import React from "react";
import Formulario from "./Formulario";

const AppSeguro = () => {
  return (
    <>
      <header>
        <h1 className="text-white text-center text-4xl font-black my-5">
            Cotizador de seguros de auto.
        </h1>
        <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
            <Formulario />
        </main>
      </header>
    </>
  );
};

export default AppSeguro;
