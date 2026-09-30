"use client"

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Produto() {
    const [produto, setProduto] = useState(null);
    const params = useParams();

    useEffect(() => {
        async function buscarProduto() {
            const resposta = await fetch(`https://dummyjson.com/products/${params.id}`);
            if (!resposta.ok) return;
            setProduto(await resposta.json());
        }
        buscarProduto();
    }, [params.id]);

    return (
        <main>
            {produto != null && (
                <div className="detalhe-produto">
                <img src={produto.thumbnail} />
                <div className="info">
                    <h1>{produto.title}</h1>
                    <p>{produto.description}</p>
                    <ul>
                        <li>Categoria: {produto.category}</li>
                        <li>Marca: {produto.brand ?? "Sem marca"}</li>
                        <li>Preço: US${produto.price}</li>
                        <li>Desconto: {produto.discountPercentage}%</li>
                        <li>Avaliação: {produto.rating}*</li>
                        <li>Estoque: {produto.stock}</li>
                        <li>Disponibilidade: {produto.availabilityStatus}</li>
                        <li>Garantia: {produto.warrantyInformation}</li>
                        <li>Envio: {produto.shippingInformation}</li>
                    </ul>
                </div>
            </div>
            )}
            
        </main>
    )
}