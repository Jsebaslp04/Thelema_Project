import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { images } from '../data/images'
import gnosis from '../assets/gnosis.png'
import tarot from '../assets/tarot.png'
import styles from './Inicio.module.css'

const Separator = ({ height = 50 }) => {
  const separatorStyle = {
    height: `${height}px`,
    backgroundColor: '#000000',
  };

  return <span className={styles.separator} style={separatorStyle}></span>;
};

function Gallery({ items }) {
  return (
    <div className={styles.galleryContainer}>
      <ImageGallery
        items={items}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showBullets={true}
        autoPlay={true}
        showNav={false}
        slideInterval={4000}
      />
    </div>
  )
}

function Description() {
  return (
    <div className={styles.description}>
      <div className={styles.description_img}>
        <img className={styles.description_img_main} src={gnosis} alt="Imagen de gnosis" />
      </div>
      <div className={styles.service_description}>
        <h1 className={styles.service_title_description}>Gnosis de Thelema</h1>
        <br />
        <p className={styles.service_text_description}>Gnosis de Thelema es un espacio de exploración espiritual profunda, donde convergen la psicología transpersonal, la filosofía hermética y la práctica ritual.
          <br /><br /> Nos dedicamos al estudio y la vivencia del sendero espiritual como una vía de transformación interior, reconociendo el símbolo como herramienta de acceso al inconsciente y al Misterio.</p>
      </div>
    </div>
  );
}

function ImageFooter() {
  return (
    <img className={styles.imageFooter} src={tarot} alt="Imagen de tarot" />
  )
}

export const Inicio = () => {
  return (
    <>
      <Separator height={50} />
      <Gallery items={images} />
      <Separator height={50} />
      <Description />
      <Separator height={50} />
      <ImageFooter />
    </>
  )
}