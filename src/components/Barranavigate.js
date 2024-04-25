import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { IoSettingsOutline } from "react-icons/io5";
import './barranavigate.css';

const Barranavigate = () => {

  const [temaEscuro, setTemaEscuro] = useState(false);

  const alternarTema = () => {
    setTemaEscuro(!temaEscuro);
    // Adicionar lógica adicional para alterar o tema na sua aplicação
  };

  return (
    <div>
      <nav>
      <h2 color='white'><a href='/'>Rises the Moon 🌙</a></h2>
        <ul class='nav-list'>
          <li><Link to="/">-------</Link></li>
          <li><Link to="/">-------</Link></li>

          
          <li className="dropdown"><Link to="/">Services</Link>
          <ul className="dropdown-menu">
                <li><a href="/services/service1">Service 1</a></li>
                <li><a href="/services/service2">Service 2</a></li>
                <li><a href="/services/service3">Service 3</a></li>
              </ul>
          </li>
        
          <li className="dropdown"><Link to="/">Options</Link>
          <ul className="dropdown-menu">
                <li><a href="/Option/Settings">Account Settings <IoSettingsOutline/></a></li>

                <li className='linha1'><p>Theme</p>
                  <div className={`configuracoes ${temaEscuro ? 'tema-escuro' : ''}`}>
                    <div className="opcao-configuracao">
                      <label className="switch">
                        <input type="checkbox" checked={temaEscuro} onChange={alternarTema} />
                        <span className="slider"></span>
                      </label>
                    </div>
                  </div>
                </li>

                <li className='linha1'><a href="https://github.com/Joaogabriel148/Rises-The-Moon"><FaGithub/> Github</a></li>
                <li ><a href="/">Support</a></li>
                <li className='linha1'><button class='logout'>Log Out</button></li>
              </ul>
          </li>
        </ul>
      </nav>


    </div>
  );
};

export default Barranavigate;