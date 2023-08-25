import React from 'react'
import HeaderImage from '../../images/header_bg_3.jpg'
import Header from '../../components/Header'
import './index.css'

export default function Gallery() {

  // Note: data.js没有提供相关的数据（估计是太麻烦了，所以我们在这里直接展示）
  
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  // console.log(images);

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Our gallery exhibitions and residency opportunities are programmed through annual calls for submissions, in addition to invited and curated exhibitions.
      </Header>
      <section className='gallery'>
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index} >
                <img src={image} alt="gallery image" />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}
