"use client"
import { useState, useEffect, useContext } from "react"
import Image from "next/image"
import { GuitarlaContext } from "@/context/GuitarlaContext"
import { GuitarraCarritoInterface } from "@/interfaces/GuitarraCarrito"

async function getGuitarra(path: string) {
  const res = await fetch(`https://guitarla-strapi-485d.onrender.com/api/guitarras?filters[url]=${path}&populate=imagen`)
  return res.json()
}

export default function Page({ params }: { params: { url: string } }) {
  const [mostrar, setMostrar] = useState(false)
  const [cantidad, setCantidad] = useState(0)
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState(0)
  const [imagen, setImagen] = useState('')
  const [id, setId] = useState(0)

  const guitarlaContext = useContext(GuitarlaContext)
  const {carrito, agregarCarrito} = guitarlaContext

  useEffect(() => {
    // Función asincrónica para obtener los datos de la guitarra
    async function fetchData() {
      const path = params.url
      const {data} = await getGuitarra(path)
      const {id, attributes: {nombre, descripcion, precio, imagen: {data: {attributes: {url}}}}} = data[0]

      // Puedes establecer más estados aquí si es necesario
      setNombre(nombre)
      setDescripcion(descripcion)
      setPrecio(precio)
      setImagen(url)
      setId(id)
      setMostrar(true)
    }
    fetchData()
  }, [])

  // submit
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()

    // validar
    if (cantidad < 1) {
      alert("Invalid amount")
      return
    }

    // objeto guitarra
    const guitarraSeleccionada: GuitarraCarritoInterface = {
      id: id,
      imagen: imagen,
      nombre,
      precio,
      cantidad
    }

    // agregar al carrito
    guitarlaContext.agregarCarrito(guitarraSeleccionada)
  }

  return (
    <>
      {mostrar
        ? (
          <div className="mb-10 mx-20 flex items-center md:flex-row md:mx-64">
            <Image
              src={imagen}
              alt={'hola'}
              width={200}
              height={200}
            />
            <div className="md:w-3/5 md:flex md:flex-col md:justify-center">
              <h1 className="uppercase text-[#d88506] font-bold mb-5">{nombre}</h1>
              <p className="line-clamp-6">{descripcion}</p>
              <p className="text-[#d88506] font-extrabold text-2xl my-3">${precio}</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label htmlFor="cantidad">Amount</label>

                <select
                  onChange={(e) => setCantidad(Number(e.target.value))}
                  id="cantidad"
                  className="px-4 py-2 border border-black"
                >
                  <option value="0">-- Select --</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>

                <input
                  className="bg-black hover:bg-[#d88506] transition duration-500 ease-in-out uppercase text-white px-4 py-2"
                  type="submit"
                  value={"Add to cart"}
                />
              </form>
            </div>
          </div>
        ) : (
          <div></div>
        )
      }
    </>
  )
}
