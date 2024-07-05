import Styles from "../Formacao/formacao.module.css"
import img from "../../img/fatec_ra_central_taquaritinga_cor.png"

function formacao() {

    return (
        <section className={Styles.formacao}>
            <h2 className={Styles.h2}>Formação</h2>
            <div className={Styles.mDiv}><img src={img} alt="" className={Styles.img}/></div>

<section className={Styles.content}>
            <h3>Curso: Sitemas para internet</h3>
            <h3>Inicio: <span className={Styles.red}>2023</span> | Termino: <span className={Styles.red}>2025</span></h3>
</section>

            <hr />
        </section>
    )
}

export default formacao