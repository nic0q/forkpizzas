export default function to_clp (price) {
  return price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })
}