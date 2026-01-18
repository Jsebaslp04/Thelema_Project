import styles from './Nuestros_servicios.module.css'
import libro from '../assets/libro.png'
import service_2 from '../assets/service_2.png'
import libro_2 from '../assets/libro_2.png'
import tarot_4 from '../assets/tarot_4.png'


const Separator = ({ height = 50 }) => {
    const separatorStyle = {
        height: `${height}px`,
        backgroundColor: '#000000',
    };

    return <span className={styles.separator} style={separatorStyle}></span>;
};

function Description() {
    return (
        <div className={styles.description}>
            <div className={styles.service_description}>
                <h1 className={styles.service_title_description}>Consultoría para el Descubrimiento de la Verdadera Voluntad</h1>
                <br />
                <p className={styles.service_text_description}><strong>Encuentra tu propósito cósmico.</strong> El pilar fundamental de Thelema es el descubrimiento de la Verdadera Voluntad: el camino único y auténtico de cada individuo. A través de sesiones personalizadas de análisis existencial, técnicas de introspección y el estudio de tu mapa natal bajo una óptica telémica, te brindamos las herramientas para identificar esa inercia divina que da sentido a tu vida. No se trata de lo que "deberías" hacer, sino de lo que tu naturaleza más profunda demanda que hagas.</p>
            </div>
            <div className={styles.description_img}>
                <img className={styles.description_img_main} src={libro} alt="Imagen de libro" />
            </div>
        </div>
    );
}

function Description1() {
    return (
        <div className={styles.description}>
            <div className={styles.description_img}>
                <img className={styles.description_img_main} src={service_2} alt="Imagen de un libro con una vela" />
            </div>
            <div className={styles.service_description}>
                <h1 className={styles.service_title_description}>Entrenamiento en Magia Ritual y Teúrgia</h1>
                <br />
                <p className={styles.service_text_description}><strong>Domina las fuerzas de tu propio universo.</strong> Ofrecemos formación práctica en los rituales fundamentales de la A∴A∴ y la O.T.O., adaptados para el practicante moderno. Desde el dominio del Ritual Menor del Pentagrama hasta la creación de ceremonias personalizadas de invocación y destierro. Este servicio se enfoca en el desarrollo de la disciplina mental, la visualización creativa y el uso ético del poder ritual para equilibrar el microcosmos y manifestar cambios en conformidad con la voluntad.</p>
            </div>
        </div>
    );
}

function Description2() {
    return (
        <div className={styles.description}>
            <div className={styles.service_description}>
                <h1 className={styles.service_title_description}>Mentoría en Yoga y Control del Cuerpo-Mente</h1>
                <br />
                <p className={styles.service_text_description}><strong>La base científica de la iluminación.</strong> Tal como se enseña en el Libro 4 (Liber ABA), no hay magia sin el control absoluto de la mente y el cuerpo. Ofrecemos programas de entrenamiento en Asana (postura), Pranayama (regulación de la energía vital) y Dharana (concentración profunda). Aprenderás a silenciar el ruido mental y a fortalecer tu vehículo físico, preparando el terreno para la comunicación con tu Santo Ángel Guardián y estados elevados de conciencia.</p>
            </div>
            <div className={styles.description_img}>
                <img className={styles.description_img_main} src={libro_2} alt="Imagen de las cartas de Tarot" />
            </div>
        </div>
    );
}

function Description3() {
    return (
        <div className={styles.description}>
            <div className={styles.description_img}>
                <img className={styles.description_img_main} src={tarot_4} alt="Imagen de libro de ocultismo" />
            </div>
            <div className={styles.service_description}>
                <h1 className={styles.service_title_description}>Análisis Simbólico y Tarot de Thoth</h1>
                <br />
                <p className={styles.service_text_description}><strong>Cartografía del alma y el destino.</strong> Utilizamos el Tarot de Thoth como una herramienta de diagnóstico psicológico y espiritual, no como una simple adivinación. Este servicio consiste en lecturas profundas que analizan las corrientes energéticas actuales de tu vida, utilizando la correspondencia de la Cábala y el Árbol de la Vida. Es una guía estratégica para resolver conflictos internos, entender ciclos kármicos y tomar decisiones alineadas con tu crecimiento espiritual.</p>
            </div>
        </div>
    );
}

export const Nuestros_servicios = () => {
    return (
        <>
            <Separator height={50} />
            <Description />
            <Separator height={50} />
            <Description1 />
            <Separator height={50} />
            <Description2 />
            <Separator height={50} />
            <Description3 />
            <Separator height={50} />
        </>
    )
}