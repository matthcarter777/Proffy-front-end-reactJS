import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
         <header>
           <img src="https://avatars0.githubusercontent.com/u/49701453?s=460&u=be314b35c1f48dba945a757e7558dbd8c42b451c&v=4" alt="Mateus henrique"/>
            <div>
              <strong>Mateus henrique</strong>
              <span>Filosofia</span>
            </div>
         </header>
         <p>
           texto
           <br />
           <br />
           Desenvolvedor full-stack apaixonado por tecnologia e desafios em constante aperfeiçoamento.
         </p>

         <footer>
           <p>
             Preço/hora
             <strong>R$ 20,00</strong>
           </p>
           <button type="button">
             <img src={whatsappIcon} alt="Whatsapp"/>
             Entrar em contato
           </button>
         </footer>
       </article>
  );
}

export default TeacherItem;