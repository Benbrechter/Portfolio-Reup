import Navbar from './componets/navbar';
import About from './componets/About'
import Footer from './componets/footer';
import background from '../pictures/collage.png'
import Contact from './componets/contact'


function Home(){
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div className='img-treyandI'> 
                <img src={background} alt="A cool graphic of trey and I" />
            </div>
            
            <div>
                <About/>
            </div>
            <div >
                <Contact/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home