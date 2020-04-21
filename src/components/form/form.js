import React from "react"
import "./form.css"


const Form = () => {

    return(
        <>
            <form>
                
                <h2>Entre em contato!</h2>

                <label for="nome">Nome: </label>
                <input type="text" id="nome" placeholder="Ex: Manoel"></input>

                <label for="email">Email: </label>
                <input type="email" id="email" placeholder="Ex: manoel@email.com"></input>

                <label for="assunto">Assunto: </label>
                <input type="text" id="assunto" placeholder="Ex: Programação"></input>

                <label for="mensagem">Mensagem</label>
                <textarea id="mensagem" placeholder="Mensagem"></textarea>

                <input className="btn" type="button" value="Enviar"></input>

            </form>
        </>

)}

export default Form