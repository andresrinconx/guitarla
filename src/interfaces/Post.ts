export interface PostInterface {
  id: number
  attributes: {
    titulo: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    contenido: string
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