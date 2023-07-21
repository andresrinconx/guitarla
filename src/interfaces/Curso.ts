export interface CursoInterface {
  id: number
  attributes: {
    titulo: string
    contenido: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    url: string
    imagen: {
      data: {
        attributes: {
          formats: {
            medium: {
              url: string
            }
          }
          url: string
        }
      }
    }
  }
}