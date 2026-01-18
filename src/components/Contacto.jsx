import styles from "./Contacto.module.css"
import Gnosis_Thelema from "../assets/Gnosis_Thelema.png"
import telefono from "../assets/telefono.png"
import ubicacion from "../assets/ubicacion.png"
import gmail from "../assets/gmail.png"
import tarot3 from "../assets/tarot3.png"

const Separator = ({ height = 50 }) => {
    const separatorStyle = {
        height: `${height}px`,
        backgroundColor: '#000000',
    };

    return <span className={styles.separator} style={separatorStyle}></span>;
};

function Information() {
    return (
        <div className={styles.description}>
            <div className={styles.description_img}>
                <img className={styles.description_img_main} src={Gnosis_Thelema} alt="" />
            </div>
            <div className={styles.service_description}>
                <h1 className={styles.service_title_description}>Gnosis de Thelema</h1>
                <br />
                <p className={styles.service_text_description}><em>Descubre tu Verdadera Voluntad. El universo espera tus órdenes.</em></p>
            </div>
        </div>
    );
}

function Formulario() {
    return (
        <section className={styles.info_contact}>
            <section className={styles.info_contact_section}>
                <ul className={styles.images_info}>
                    <li className={styles.images_info_img}><img src={telefono} alt="Imagen de telefono" /></li>
                    <li className={styles.images_info_img}><img src={ubicacion} alt="Imagen de ubicacion" /></li>
                    <li className={styles.images_info_img}><img src={gmail} alt="Imagen de gmail" /></li>
                </ul>
                <ul className={styles.contacto}>
                    <li className={styles.contacto_li}>+57 311 527 50 75</li>
                    <li className={styles.contacto_li}>Armenia, Quindío, Colombia</li>
                    <li className={styles.contacto_li}>gnosis_thelema@gmail.com</li>
                </ul>
            </section>
            <section className={styles.formulario}>
                <form>
                    <input className={styles.formulario_input} type="text" placeholder="Nombre..." />
                    <input className={styles.formulario_input} type="email" placeholder="Email" />
                    <textarea className={styles.formulario_input_text} placeholder="Escribe tu mensaje..."></textarea>
                    <button className={styles.formulario_button} type="submit">ENVÍA TU MENSAJE</button>
                </form>
            </section>
        </section>
    )
}

function ImageFooter() {
    return (
        <img className={styles.imageFooter} src={tarot3} alt="Tarot" />
    )
}

export const Contacto = () => {
    return (
        <>
            <Information />
            <Formulario />
            <ImageFooter />
        </>
    )
}