import React, { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constants/index";

const Formulario = () => {
  return (
    <>
      <form action="">
        <div className="my-5 ">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="marca"
            className="w-full bg-white border border-gray-200 h-10 rounded-lg"
          >
            <option className="text-center">--- Selecciona Marca --- </option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id} className="text-center">
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5 ">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="marca"
            className="w-full bg-white border border-gray-200 h-10 rounded-lg"
          >
            <option className="text-center">--- Selecciona Año --- </option>
            {YEARS.map((year) => (
              <option key={year} value={year} className="text-center">
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5 ">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Plan
          </label>
          <div className="flex gap-3">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input type="radio" name="plan" value={plan.id} />
              </Fragment>
            ))}
          </div>
        </div>

        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="Cotizar"
        />
      </form>
    </>
  );
};

export default Formulario;
