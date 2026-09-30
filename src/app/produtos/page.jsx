"use client";

import { useState, useEffect} from "react";
import CardProduto from "@/components/CardProduto";
import "./produtos.css"

export default function produtos() {
    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect(() => {
        async function buscarProdutos() {
            const resposta = await fetch("https://dummyjson.com/products");
            const dados = await resposta.json();
            setListaProdutos(dados.products)
        }
        buscarProdutos();
    }, [])

    return (
        <main>
            {listaProdutos.length > 0 && (
                <div className="container-produtos">
                    {listaProdutos.map((p) => {
                        return <CardProduto key={p.id} produto={p} />;
                    })}
                </div>
            )}
        </main>
    );
}