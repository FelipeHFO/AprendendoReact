import React from "react";
import './products.css'

const Produto = ({/* Props = Parâmetros */ teste }) => {
    return(
    <>
        <li>Produto = {teste}</li>
    </>
)}

export default Produto; // Sempre exporta a função, ela será o componente! *Obs(Componentes obrigatoriamente começa com letra Maiúscula)