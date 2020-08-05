import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/62684121?s=460&u=751b0fcece8eeff4f831387b39fc752cb47c4538&v=4" alt="Matheus Silva" />
                <div>
                    <strong>Matheus Silva</strong>
                    <span>Química </span>
                </div>
            </header>
            <p>
                Entusiaste em experiência malucas
            <br /><br />
                Apaixonado em explodir Laboratório e consertar vida das pessoas através do método de ensino maluco!
        </p>

            <footer>
                <p>
                    Preço/hora
                <strong>R$ 50, 00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
            </button>
            </footer>

        </article>
    )
}

export default TeacherItem