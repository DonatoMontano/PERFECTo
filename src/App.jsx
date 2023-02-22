import './App.css'
import Navbar from './components/Navbar/Navbar'
import Button from './components/Button/Button'

function App() {

  return (
    <div>
      <Navbar />
      <h1>Aca iria o una descripcion de la tienda o directamente los productos</h1>
      <Button textoBoton="Sumar al carro (ejemplo boton)" />

    </div>
  )
}

export default App
