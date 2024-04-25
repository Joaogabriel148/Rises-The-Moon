import React from 'react';
import './home.css';
import Barranavigate from '../components/Barranavigate';
import Footer from '../components/Footer';

function Home() {

    return(
        <div className='tudo'>
            <Barranavigate/>
            {/*<div id='body'>
                 <div id="caixa">
                    <p>Opiniões</p>
                    <p>Digite sua opinião sobre a disciplina</p>
                    <textarea name="" id="" cols="60" rows="20"></textarea>
                </div> 
            </div>*/}
            <Footer/>
        </div>
        
    );
}




export default Home;