export const formatearFecha = (fecha: string) => {
  const fechaNueva = new Date(fecha)
  const opciones: any = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }
  return fechaNueva.toLocaleDateString('en-US', opciones)
}