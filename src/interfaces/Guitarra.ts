export interface GuitarraInterface { // definir los tipos de datos que tendran las propiedades de un objeto
  id: number
  attributes: {
    nombre: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    descripcion: string
    precio: number
    url: string
    imagen: {
      data: {
        attributes: {
          formats: {
            medium: {
              url: string
            }
          }
        }
      }
    }
  }
}