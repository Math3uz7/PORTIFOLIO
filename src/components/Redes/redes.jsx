import Styles from "../Redes/redes.module.css";
import img from "../../img/LI-In-Bug.png";
import imgtwo from "../../img/github-mark.svg"
import imgtree from "../../img/Gmail_icon_(2020).svg.png"


function redes() {
    return (

        <div className={Styles.redes}>
            <h2 className={Styles.h2}>Redes</h2>
            <section className={Styles.gridContainer}>

                <div className={Styles.gridItem}>
                    <h3 className={Styles.h31}>Contato</h3>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                        <img src={imgtree} alt="" className={Styles.img} />
                        <p className={Styles.desc1}>matheuspprudencio@gmail.com</p>
                    </a>
                </div>

                <div className={Styles.gridItem}>
                    <h3 className={Styles.h32}>Projetos</h3>
                    <a href="https://github.com/Math3uz7">
                        <img src={imgtwo} alt="" className={Styles.img} />
                        <p className={Styles.desc2}>Math3uz7</p>
                    </a>
                </div>

                <div className={Styles.gridItem}>
                    <h3 className={Styles.h33}>Contato</h3>
                    <a href="https://www.linkedin.com/in/matheus-prudencio-a721b7270/">
                        <img src={img} alt="" className={Styles.img} />
                        <p className={Styles.desc3}>Matheus Prudencio</p>
                    </a>
                </div>

            </section>
        </div>



    )
}


export default redes;