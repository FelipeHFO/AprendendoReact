import React, {useState} from "react";
import Product from "../product/product";

const ProductList = () => {

    const [itens] = useState(['Pasta de dente', 'Shampoo', 'Sabonete', 'Detergente'])
    const [categoria] = useState(['Produtos higiênicos', 'Produtos de Limpeza'])

    return(
        <>
            {itens.map( (item, index) => (<Product numero={index} nome={item} />))}
        </>
    )
}

export default ProductList;