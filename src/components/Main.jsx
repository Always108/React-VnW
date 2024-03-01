
import terra from '../assets/Terra.jpeg'
import marte from '../assets/Marte.jpeg'
import telescopio from '../assets/Telescopio.jpeg'
import aurora from '../assets/Aurora.jpeg'
import buraco from '../assets/Buraco.jpg'
import carina from '../assets/Carina.jpg'
import gato from '../assets/Gato.jpg'
import { useState } from "react";



export default function Main() {

    const [terra1, setTerra1] = useState();
    const [descri, setDescri] = useState();

    const [marte1, setMarte1] = useState();
    const [descri2, setDescri2] = useState();

    const [gato1, setGato1] = useState();
    const [descri3, setDescri3] = useState();

    const [carina1, setCarina1] = useState();
    const [descri4, setDescri4] = useState();



    function Terra(){
        setTerra1("Terra")
        setDescri("Idade: 4,54 bilhões de anos")
    }

    function reset() {
        setTerra1();
        setDescri();
        setMarte1();
        setDescri2();
        setGato1();
        setDescri3();
        setCarina1();
        setDescri4();
    }

    function Marte(){
        setMarte1("Marte")
        setDescri2("Idade: 4,65 bilhões de anos")
    }

    function Gato(){
        setGato1("Olho de Gato")
        setDescri3("Distância da Terra: 3.262 anos-luz")
    }

    function Carina(){
        setCarina1("Carina")
        setDescri4("Distância da Terra: 7.500 anos-luz")
    }

    
 
    return (
    <main>
      <h1>Este projeto tem como objetivo incentivar a ciência. 
      A astronomia é a ciência natural que estuda os corpos celestes, incluindo estrelas, planetas, cometas, galáxias e nebulosas, bem como os fenômenos 
      que se originam fora da atmosfera da Terra, como a radiação cósmica de fundo em micro-ondas. A astronomia é uma das ciências mais antigas e as 
      primeiras civilizações registraram observações astronômicas. </h1>
     
     <section className='boxintro'>

     <img className='imageintro' src={telescopio} alt="" />

     <img className='imageintro' src={buraco} alt="" />    

     <img className='imageintro' src={aurora} alt="" />

     </section>

     <h3>Principais Planetas do Sistema Solar</h3> 

     
      <section className='boxplanetas'>

        <div>
        <img onClick={Terra} className="image" src={terra} alt="" />
        <h2 onClick={reset}>{terra1}</h2>
        <p>{descri}</p>
        </div>

        <div>
        <img onClick={Marte} className="image" src={marte} alt="" />
        <h2 onClick={reset}>{marte1}</h2>
        <p>{descri2}</p>
        </div>
        
      </section>

      <h3>Principais Nebulosas</h3> 

      <section className='boxplanetas'>

        <div>
        <img onClick={Carina} className="image" src={carina} alt="" />
        <h2 onClick={reset}>{carina1}</h2>
        <p>{descri4}</p>
        </div>

        <div>
        <img onClick={Gato} className="image" src={gato} alt="" />
        <h2 onClick={reset}>{gato1}</h2>
        <p>{descri3}</p>
        </div>
        
      </section>
        

    </main>
  );
}
