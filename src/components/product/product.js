import React from "react";
import './products.css'

const Product = ({/* Props = Parâmetros */ numero, nome }) => {

    function corrigeOrdem(numero){
        return numero+1
    }

    return(
    <>
        <li>Produto {corrigeOrdem(numero)} = {nome}</li>
    </>
)}

export default Product; // Sempre exporta a função, ela será o componente! *Obs(Componentes obrigatoriamente começa com letra Maiúscula)