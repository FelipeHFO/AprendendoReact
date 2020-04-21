import React, {useState} from "react"
import "./form.css"
import InputLabel from "../inputLabel/inputLabel"


const Form = () => {

    // Só é necessário um estado quando terei que alterar alguma propriedade em algum momento.
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')

    function enviarFormulario(event){
        event.preventDefault();
        console.log(nome, email, assunto, mensagem)
    }

    return(
        <>
            <form onSubmit={(event) => enviarFormulario(event)}>
                
                <h2>Entre em contato!</h2>
                
                {/* As funções do React retornam uma função com um evento dentro */}
                <InputLabel handleOnChange={setNome} labelValue="Nome: " inputType="text" inputID="nome" inputPH="Ex: Manoel" value={nome}></InputLabel>

                <InputLabel handleOnChange={setEmail} labelValue="Email: " inputType="email" inputID="email" inputPH="Ex: felipe@email.com"></InputLabel>

                <InputLabel handleOnChange={setAssunto} labelValue="Assunto: " inputType="text" inputPH="Ex: Programação" inputID="assunto" value={assunto}></InputLabel>

                <label htmlFor="mensagem">Mensagem: </label>
                <textarea onChange={(event) => setMensagem(event.target.value)} id="mensagem" placeholder="Mensagem" value={mensagem}></textarea>

                <input className="btn" type="submit" value="Enviar"></input>

            </form>
        </>

)}

export default Form