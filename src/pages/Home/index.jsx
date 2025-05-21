import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import imagem1 from '/img1.svg'

function Home() {
return (

    <>
      <Header />
      
      <section className='container'>
            <div className='apresentacao'>
                <p>
                    Olá, somos <br />
                    <span>Raul e Nicolas</span> <br />
                    Devs Full Stack
                </p>
                <button className='btn btn-red'>
                    Saiba mais sobre nós!
                </button>
            </div>
            <figure>
                <img className='img-home' src={imagem1} alt="Imagem1" />
            </figure>
        </section>
      
      <Footer />
    </>
)
}
export default Home