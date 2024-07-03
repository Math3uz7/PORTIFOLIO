import Styles from "../Habilidades/habilidades.module.css"
import imgone from "../../img/node-js-logo-F4F55CD2D0-seeklogo.com.png"
import imgtwo from "../../img/React.png"
import imgtree from "../../img/Unofficial_JavaScript_logo_2.svg.png"
import imgfour from "../../img/ts-logo-512.svg"
import imgfive from "../../img/HTML5_logo_and_wordmark.svg.png"
import imgsix from "../../img/css-3.png"
import imgseven from "../../img/sass.png"


function habilidades(){
return(
<div className={Styles.habilidades}>

<h2 className={Styles.h2}>Habilidades</h2>

<section className={Styles.gridContainer}>
  <div className={Styles.gridItem}><img src={imgone} alt="" className={Styles.node} /></div>
  <div className={Styles.gridItem}><img src={imgtwo} alt="" className={Styles.react} /></div>
  <div className={Styles.gridItem}><img src={imgtree} alt="" className={Styles.js} /></div>  
  <div className={Styles.gridItem}><img src={imgfour} alt="" className={Styles.ts} /></div>
  <div className={Styles.gridItem}><img src={imgfive}alt="" className={Styles.html} /></div>
  <div className={Styles.gridItem}><img src={imgsix}alt="" className={Styles.css} /></div>  
  <div className={Styles.gridItem}><img src={imgseven} alt="" className={Styles.sass} /></div>
</section>

<hr />

</div>

)
}

export default habilidades