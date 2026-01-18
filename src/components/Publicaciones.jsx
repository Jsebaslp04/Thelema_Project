import styles from './Publicaciones.module.css'
import main from '../assets/main_publicaciones.png'
import gnosis from '../assets/Gnosis_Thelema.png'
import pharo from '../assets/Pharo_Nox.png'
import meditacion from '../assets/Meditación.png'

const Separator = ({ height = 50 }) => {
    const separatorStyle = {
        height: `${height}px`,
        backgroundColor: '#000000',
    };

    return <span className={styles.separator} style={separatorStyle}></span>;
};

function Image_main() {
    return (
        <img className={styles.image_main} src={main} alt="" />
    )
}

function Publication_1() {
    return (
        <div className={styles.description}>
            <div className={styles.service_description}>
                <p className={styles.service_text_description}>La constancia, el manto de Saturno, no busca producir resultados inmediatos, sino mantener el calor del horno interior, el athanor donde se realiza la transmutación de todos los metales.
                    En los ritos thelemicos, los símbolos del Flagelo del Azufre, la Cadena de Sal, la Daga de Mercurio y el Aceite Sagrado representan operaciones internas descritas en el Libro ABA Magia en teoría y practica.
                    El azufre excita la voluntad dormida de la Nepesh, la sal estructura el pensamiento de la Ruach, el mercurio corta las ilusiones, y el aceite integra los elementos bajo la dirección del Ángel.
                    El Adepto, al conjugar estas fuerzas, organiza su microcosmos en correspondencia con el macrocosmos: encarna el principio hermético “como es arriba, es abajo”, haciendo de su cuerpo una extensión viva del orden universal. Alcanzado esa tan anhelada divinización. Ejerciendo su verdadera voluntad en medio de las gentes.
                    <br />
                    Visita nuestro sitio web haciendo clic en el siguiente enlace: &nbsp;
                    <a href="https://www.instagram.com/p/DQ0U5bKERAB/p"><em>Clic aquí</em></a>
                </p>
            </div>
            <div className={styles.description_img}>
                <img className={styles.description_img_main} src={gnosis} alt="Logo Danza de la Cabra" />
            </div>
        </div>
    );
}

function Publication_2() {
    return (
        <div className={styles.description}>
            <div className={styles.description_img}>
                <img className={styles.description_img_main} src={pharo} alt="Logo Pharo Nox" />
            </div>
            <div className={styles.service_description}>
                <p className={styles.service_text_description}>
                    VIERNES | 2:00 PM Col
                    🔴 En vivo con los Editores de la revista Revista Pharo-Nox
                    Estaremos hablando con los responsables de este proyecto esotérico contemporáneo, explorando sus inspiraciones, visiones y aportes. Estaremos hablando con Frater 444 y Soror 'Azm al-Nuhr

                    🕒 Horarios por país
                    <br />
                    ¡No te lo pierdas!
                    <br />
                    Visita nuestro sitio web haciendo clic en el siguiente enlace: &nbsp;
                    <a href="https://www.instagram.com/gnosisdethelema/"><em>Clic aquí</em></a>
                </p>
            </div>
        </div>
    );
}

function Publication_3() {
    return (
        <div className={styles.description}>
            <div className={styles.service_description}>
                <p className={styles.service_text_description}>En la Cábala thelémica, el Atu VII – El Carro – conecta Gueburah y Binah, abriendo el más elevado de los Caminos del Pilar de la Severidad. Es un sendero de conquista espiritual, pero también de oscuridad suprema, pues implica la travesía del Abismo hacia la conciencia de la Gran Madre.
                    <br />
                    Visita nuestro sitio web haciendo clic en el siguiente enlace: &nbsp;
                    <a href="https://www.instagram.com/p/DLSj0xfRImD/?img_index=1"><em>Clic aquí</em></a>
                </p>
            </div>
            <div className={styles.description_img}>
                <img className={styles.description_img_main} src={meditacion} alt="Carta de The Chariot" />
            </div>
        </div>
    );
}

export const Publicaciones = () => {
    return (
        <>
            <Image_main />
            <Separator height={50} />
            <Publication_1 />
            <Separator height={50} />
            <Publication_2 />
            <Separator height={50} />
            <Publication_3 />
            <Separator height={50} />
        </>
    )
}