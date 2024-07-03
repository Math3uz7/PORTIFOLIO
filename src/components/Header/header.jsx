import Styles from "../Header/header.module.css"
import img from "../../img/foto.jpeg"
import fundo from "../../img/code-1076536_1920.png"

function header() {

  return (

    <header className={Styles.header} style={{ backgroundImage: `url(${fundo})` }}>

      <div className={Styles.divz}>
        <h1>Matheus Prudencio</h1>
        <h3 className={Styles.h3}>Desenvolvedor Fullstack</h3>
      </div>

      <div className={Styles.eu}><img src={img} alt="" className={Styles.img} /></div>
    </header>

  )
}


export default header