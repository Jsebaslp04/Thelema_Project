import estrella1 from '../assets/estrella1.png'
import tarot1 from '../assets/tarot1.png'
import tarot3 from '../assets/tarot3.png'
import styles from './Quienes_somos.module.css'

const Separator = ({ height = 50 }) => {
    const separatorStyle = {
        height: `${height}px`,
        backgroundColor: '#000000',
    };

    return <span className={styles.separator} style={separatorStyle}></span>;
};

function Image_main() {
    return (
        <img className={styles.imageFooter} src={estrella1} alt="Estrella Thelema" />
    )
}


function Description() {
    return (
        <div className={styles.description}>
            <div className={styles.service_description}>
                <h1 className={styles.service_title_description}>Nuestra Ley es la Voluntad:
                    Arquitectos del Destino Digital</h1>
                <br />
                <p className={styles.service_text_description}>En el mundo digital, la voluntad es la ley que nos guía. Somos arquitectos del destino digital, diseñando la realidad virtual que nos rodea.
                    Cada clic, cada decisión, cada creación forma el mundo que nos envuelve.
                    Somos los constructores de nuestro destino, creando un universo digital que refleja nuestras intenciones y valores.</p>
                <br />
                <h2 className={styles.service_title_description}>¿Quiénes Somos en el Servicio Web?</h2>
                <br />
                <p className={styles.service_text_description}>No somos una agencia convencional; somos Iniciados en la Ciencia y el Arte de la comunicación digital. Nos definimos bajo tres pilares fundamentales que rigen cada línea de código y cada estrategia de mercado:</p>
                <br />
                <ul className={styles.service_text_description}>
                    <li><strong>El Individuo es la Estrella:</strong> "Cada hombre y cada mujer es una estrella". Tratamos a cada marca como una entidad única, con su propia órbita y luz. No aplicamos plantillas; creamos ecosistemas digitales a medida que permiten que tu identidad brille sin interferencias.</li>
                    <br />
                    <li><strong>Magia en Acción (Marketing de Intención)</strong>: Definimos la Magick como "la Ciencia y el Arte de causar cambios en conformidad con la Voluntad". Nuestro marketing es Magick aplicada: cada campaña, cada diseño de UX y cada palabra de SEO es un acto intencional diseñado para transformar la realidad de tu negocio y atraer a quienes resuenan con tu propósito.</li>
                    <br />
                    <li><strong>Amor bajo Voluntad</strong>: Creemos en la conexión genuina. Nuestros servicios web se basan en el Amor (la pasión por la excelencia y la empatía con el usuario) bajo la Voluntad (el rigor técnico y la estrategia orientada a resultados).</li>
                </ul>
            </div>
            <div className={styles.description_img}>
                <img className={styles.description_img_main} src={tarot1} alt="Cartas del tarot" />
            </div>
        </div>
    );
}


function ImageFooter() {
    return (
        <img className={styles.imageFooter} src={tarot3} alt="" />
    )
}


export const Quienes_somos = () => {
    return (
        <>
            <Image_main />
            <Separator height={50} />
            <Description />
            <Separator height={50} />
            <ImageFooter />
        </>
    )
}