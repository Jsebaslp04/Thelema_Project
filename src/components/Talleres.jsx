import styles from './Talleres.module.css'
import talleres1 from '../assets/Talleres1.png'
import talleres2 from '../assets/Talleres2.png'
import talleres3 from '../assets/Talleres3.png'
import talleres4 from '../assets/Talleres4.png'


const Separator = ({ height = 50 }) => {
    const separatorStyle = {
        height: `${height}px`,
        backgroundColor: '#000000',
    };

    return <span className={styles.separator} style={separatorStyle}></span>;
};

function Image_main() {
    return (
        <img className={styles.image_main} src={talleres1} alt="Imagen de una mano sobre las cartas del Tarot" />
    )
}

function Taller_1() {
    return (
        <div className={styles.description}>
            <div className={styles.description_img}>
                <img className={styles.description_img_main} src={talleres2} alt="Imagen de una mesa y las cartas del Tarot" />
            </div>
            <div className={styles.service_description}>
                <h1 className={styles.service_title_description}><strong>El Cuerpo de Luz: Práctica de Rituales Menores</strong></h1>
                <br />
                <p className={styles.service_text_description}> Entrenamiento paso a paso en los rituales básicos de la corriente: el Liber Resh vel Helios (adoraciones solares), el Ritual Menor del Pentagrama y la Estrella de Rubí. El objetivo es que el estudiante aprenda a consagrar su espacio personal, banir influencias dispersas y armonizar su energía con las mareas del sol, estableciendo una disciplina diaria sólida.</p>
            </div>
        </div>
    );
}

function Taller_2() {
    return (
        <div className={styles.description}>
            <div className={styles.service_description}>
                <h1 className={styles.service_title_description}><strong>El Despertar del Magus: Fundamentos de Liber AL vel Legis</strong></h1>
                <br />
                <p className={styles.service_text_description}> Un análisis profundo de los tres capítulos del Libro de la Ley. Exploraremos la naturaleza de Nuit (el espacio infinito), Hadit (el punto central de la experiencia) y Ra-Hoor-Khuit (el Señor del Eón). Los participantes aprenderán a interpretar las metáforas del texto para aplicarlas a su propio autoconocimiento y entender por qué "Todo hombre y toda mujer es una estrella"</p>
            </div>
            <div className={styles.description_img}>
                <img className={styles.description_img_main} src={talleres3} alt="Imagen de una persona sacando cartas del Tarot" />
            </div>
        </div>
    );
}

function Taller_3() {
    return (
        <div className={styles.description}>
            <div className={styles.description_img}>
                <img className={styles.description_img_main} src={talleres4} alt="Imagen de una mujer quemando incienso" />
            </div>
            <div className={styles.service_description}>
                <h1 className={styles.service_title_description}><strong>El Camino de la Verdadera Voluntad (Thelema en la Vida Diaria)</strong></h1>
                <br />
                <p className={styles.service_text_description}>
                    ¿Cómo identificar la True Will (Verdadera Voluntad) frente a los deseos caprichosos del ego? En este taller exploramos las implicaciones de "Amor es la ley, amor bajo voluntad". Analizaremos técnicas de introspección, el uso del diario mágico como herramienta de análisis de datos y cómo tomar decisiones alineadas con el propósito cósmico individual sin interferir en el camino de los demás.
                </p>
            </div>
        </div>
    );
}

export const Talleres = () => {
    return (
        <>
            <Image_main />
            <Separator height={50} />
            <Taller_1 />
            <Separator height={50} />
            <Taller_2 />
            <Separator height={50} />
            <Taller_3 />
            <Separator height={50} />
        </>
    )
}
