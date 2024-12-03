import React, { useState } from "react";
import axios from "axios";

const RegisterProduct = () => {
  const apiURL = "http://localhost/products/api.php/productos"; // URL de la API
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  // Estado inicial del producto
  const dataProductInit = {
    name: "",
    description: "",
    price: "",
  };

  // Estado del formulario
  const [dataProduct, setDataProduct] = useState(dataProductInit);

  // Manejador para capturar los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataProduct({ ...dataProduct, [name]: value });
  };

  // Manejador del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene la recarga de la página

    try {
      // Enviar datos a la API
      const response = await axios.post(apiURL, dataProduct, config);
      console.log("Producto registrado exitosamente:", response.data);

      // Reiniciar el formulario después del registro exitoso
      setDataProduct(dataProductInit);
      alert("Producto registrado exitosamente");
    } catch (error) {
      console.error("Error al registrar el producto:", error);
      alert("Ocurrió un error al registrar el producto");
    }
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-1/2 mx-auto">
          <div className="rounded-lg overflow-hidden">
            <h2 className="text-white text-lg font-medium mb-4">Registrar Producto</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Nombre del Producto
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={dataProduct.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 bg-gray-800 text-gray-200 border border-gray-600 rounded focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300">
                  Descripción
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={dataProduct.description}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 bg-gray-800 text-gray-200 border border-gray-600 rounded focus:ring-2 focus:ring-indigo-500"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-300">
                  Precio
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={dataProduct.price}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 bg-gray-800 text-gray-200 border border-gray-600 rounded focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500"
              >
                Registrar Producto
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterProduct;
