import React, {useState, useEffect} from "react";
import Product from "../product/product";
import './productList.css'

const ProductList = () => {

    const [itens] = useState([['Pasta de dente', 'Shampoo', 'Sabonete'], ['Detergente']])
    const [itensCategoriaSelecionada, setItensCategoriaSelecionada] = useState([])
    const [categorias] = useState(['Produtos higiênicos', 'Produtos de Limpeza'])
    const [categoriasSelecionadas, setCategoriasSelecionadas] = useState('')

    useEffect(()=>{
        if(categoriasSelecionadas === categorias[0])
            setItensCategoriaSelecionada(itens[0])
        else
            setItensCategoriaSelecionada(itens[1])
    }, [categoriasSelecionadas])

    return(
        <>
            <select onChange={(event) => setCategoriasSelecionadas(event.target.value)}> {/* O evento 'onChange' é do React, ele recebe um evento como parâmetro */}
                {categorias.map((categoria) => (<option key={categoria} value={categoria}>{categoria}</option>))}
            </select>
            
            {itensCategoriaSelecionada.map( (item, index) => (<Product key={item} numero={index} nome={item} />))}
        </>
    )
}

export default ProductList;