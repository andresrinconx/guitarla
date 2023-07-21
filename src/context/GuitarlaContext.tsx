"use client"
import { createContext, useState } from "react"
import { GuitarraCarritoInterface } from "@/interfaces/GuitarraCarrito"

// crea un contexto con acceso al provider que envolvera los hijos
export const GuitarlaContext = createContext<{
  carrito: GuitarraCarritoInterface[]
  agregarCarrito: (guitarra: GuitarraCarritoInterface) => void 
  eliminarProducto: (id: number) => void
  actualizarCantidad: (guitarra: GuitarraCarritoInterface) => void
}>({
  carrito: [], 
  agregarCarrito: () => {}, 
  eliminarProducto: () => {}, 
  actualizarCantidad: () => {}
})

// crea todo el proveedor y consumidor del contexto

export const GuitarlaProvider = ({ children }: { children: React.ReactNode}) => {

  const carritoLS = JSON.parse(localStorage.getItem('carrito') ?? '[]') // cadena a objeto JS
  const [carrito, setCarrito] = useState<GuitarraCarritoInterface[]>(carritoLS) // indica que carrito sera un array de objetos de tipo GuitarraCarritoInterface

  const agregarCarrito = (guitarra: GuitarraCarritoInterface) => {
    // Comprobar si la guitarra ya esta en el carrito...
    if(carrito.some( guitarraState => guitarraState.id === guitarra.id )) {
      // Iterar para actualizar la cantidad
      const carritoActualizado = carrito.map( guitarraState => {
        if( guitarraState.id === guitarra.id ) {
          guitarraState.cantidad = guitarra.cantidad
        }
        return guitarraState
      })
      // Se asigna al array
      setCarrito([...carritoActualizado])
      localStorage.setItem('carrito', JSON.stringify( carrito ))
    } else {
      // En caso de que el articulo no exista, es nuevo y se agrega
      setCarrito([...carrito, guitarra])
      localStorage.setItem('carrito', JSON.stringify( carrito ))
    }
  }

  const eliminarProducto = (id: number) => {
    const carritoActualizado = carrito.filter( producto => producto.id != id)
    setCarrito(carritoActualizado)
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }

  const actualizarCantidad = (guitarra: GuitarraCarritoInterface) => {
    const carritoActualizado = carrito.map( guitarraState => {
      if(guitarraState.id === guitarra.id ) {
        guitarraState.cantidad = guitarra.cantidad
      } 
      return guitarraState
    })
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify( carrito ))
  }

  const contextValue = {
    carrito,
    agregarCarrito,
    eliminarProducto,
    actualizarCantidad,
  }

  return (
    <GuitarlaContext.Provider value={contextValue}> {/* los componentes que lo consuman (los que estan debajo en el arbol de componentes) pueden acceder al valor con useContext */}
      {children}
    </GuitarlaContext.Provider>
  )
}

