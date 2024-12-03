import React, { useState, useEffect } from "react";
import axios from "axios";

const Catalogo = () => {
  const [data, setData] = useState([]); // Estado para almacenar los productos dinámicos

  const apiURL = "http://localhost/products/api.php/productos"; // Endpoint para obtener productos

  const getAllProducts = async () => {
    try {
      const res = await axios.get(apiURL); // Llama a la API
      setData(res.data); // Guarda los productos en el estado
    } catch (error) {
      console.error("Error fetching products:", error); // Maneja errores
    }
  };

  useEffect(() => {
    getAllProducts(); // Obtiene los productos al cargar el componente
  }, []);

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* Productos dinámicos obtenidos de la API */}
          {data.map((item, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt={item.nombre}
                  className="object-cover object-center w-full h-full block"
                  src={item.image || "https://dummyimage.com/420x260"} // Imagen por defecto si no hay URL
                />
              </a>
              <div className="mt-4">
                <h2 className="text-white title-font text-lg font-medium">
                  {item.nombre} {/* Nombre del producto */}
                </h2>
                <p className="mt-1">{item.precio} {/* Precio del producto */}</p>
                <p className="mt-2 text-gray-500 text-sm">
                  {item.descripcion} {/* Descripción del producto */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogo;



