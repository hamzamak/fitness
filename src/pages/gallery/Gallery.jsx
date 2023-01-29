import Header from '../../components/Header'
import './gallery.css'
import HeaderImage from '../../images/header_bg_3.jpg'

function Gallery() {
  const galleryLength = 11 ;
  const images = []

  for (let i=1 ; i< galleryLength ; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione mollitia dignissimos praesentium 
     earum veritatis expedita quos. Sed, assumenda adipisci.
    </Header>

    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image,index)=> {
            return <article key={index} >
            <img src={image} alt={`Gallery Image ${index + 1}`} />

            </article>
          })
        }
      </div>
    </section>

   

   
   </>
  )
}

export default Gallery