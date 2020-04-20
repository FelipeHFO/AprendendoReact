import React, {useState, useEffect} from "react";
import Product from "../product/product";
import './productList.css'

const ProductList = () => {

    const [itens] = useState([['Pasta de dente', 'Shampoo', 'Sabonete'], ['Detergente'], ['Doritos', 'Ruffles']])
    const [itensCategoriaSelecionada, setItensCategoriaSelecionada] = useState([])
    const [categorias] = useState(['Produtos higiênicos', 'Produtos de Limpeza', 'Salgadinhos'])
    const [categoriasSelecionadas, setCategoriasSelecionadas] = useState('')

    useEffect(()=>{
        if(categoriasSelecionadas === categorias[0])
            setItensCategoriaSelecionada(itens[0])
        else if(categoriasSelecionadas === categorias[1])
            setItensCategoriaSelecionada(itens[1])
        else if(categoriasSelecionadas === categorias[2])
            setItensCategoriaSelecionada(itens[2])
        else
            setItensCategoriaSelecionada([])
    }, [categoriasSelecionadas]); {/* Segundo parâmetro do 'useEffect' é uma lista de dependências */}

    return(
        <>
            <select onChange={(event) => setCategoriasSelecionadas(event.target.value)}> {/* O evento 'onChange' é do React, ele recebe um evento como parâmetro */}
                <option value=""></option>
                {categorias.map((categoria) => (<option key={categoria} value={categoria}>{categoria}</option>))}
            </select>
            {(itensCategoriaSelecionada && itensCategoriaSelecionada.length != 0) ? (<ul>{itensCategoriaSelecionada.map( (item, index) => (<Product key={item} numero={index} nome={item} />))}</ul>) : null}
            
        </>
    )
}

export default ProductList;