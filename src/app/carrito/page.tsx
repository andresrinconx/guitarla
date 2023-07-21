"use client"
import { useEffect, useState } from "react"
import { GuitarlaContext } from "@/context/GuitarlaContext"
import Image from "next/image"
import { useContext } from "react"

export default function Carrito() {
  const [total, setTotal] = useState(0)

  const guitarlaContext = useContext(GuitarlaContext)
  const {carrito, eliminarProducto} = guitarlaContext

  useEffect(() => {
    const calcularTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0) // devuelve el acumulador, el total
    setTotal(calcularTotal)
  }, [carrito])

  return (
    <div className='mx-10 md:mx-40'>
      <h1 className='text-2xl font-extrabold text-[#d88506] text-center my-10'>Carrito</h1>

      <div className='md:grid md:grid-cols-2'>
        <div className=''>
          <h2 className='text-xl font-black'>Articulos</h2>

          {carrito.length === 0
            ? (
              <p className=''>Carrito vacio</p>
            ) : (
              carrito.map((guitarra) => {
                const {nombre, imagen, id, cantidad, precio} = guitarra
                return (
                  <div key={id} className='flex border-b last-of-type:border-b-0 m-6 flex-row'>
                    <div className=''>
                      <Image src={imagen} alt={`imagen guitarra ${nombre}`} width={100} height={100} />
                    </div>
                    <div className='flex flex-col gap-3 justify-center relative'>
                      <p className='text-xl font-black'>{nombre}</p>
                      <p className=''>Cantidad: {cantidad}</p>
                      <p className='text-[#d88506] text-lg font-bold'>${precio}</p>
                      <p className=''>Subtotal: ${precio * cantidad}</p>
                      <button className='text-red-500 absolute top-0 right-0'
                        type='button'
                        onClick={() => eliminarProducto(id)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                )
              })
            )
          }
        </div>
        <div className='bg-gray bg-gray-100 p-2 my-10 space-y-4 h-24 md:my-0 md:mb-10'>
          <h3 className='text-lg font-black'>Resumen del pedido</h3>
          <p>Total a pagar: {total}</p>
        </div>
      </div>
    </div>
  )
}
