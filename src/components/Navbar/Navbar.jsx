import styles from "./Navbar.module.css"
import Button from "../Button/Button"

const Navbar = () => {
  return (
    <nav className={styles.container}>
        <p>PERFECTo</p>
        <p>Hombre</p>
        <p>Mujer</p>
        <p>Conocenos</p>
        <Button textoBoton="CARRO" />
    </nav>
  )
}

export default Navbar