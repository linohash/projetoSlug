"use client";

import { useState, useEffect } from "react";
import dados from "@/filmes.json"
import { useParams } from "next/navigation";
import "./filme.css"

export default function Filme() {
    const [filme, setFilme] = useState(null);
    const params = useParams();

    useEffect(() => {
        const filmeEncontrado = dados.find(f => f.id == params.id);
        setFilme(filmeEncontrado);
    }, [])

    return(
        <main>
            {filme != null && <>

            <div className="content">
            <h1>Descrição do filme {filme.titulo}</h1>
            <img src={filme.imagem}/>
            <p>ano de lançamento: {filme.ano}</p>
            <p >duração: {filme.duracaoMinutos} Min</p>
            <p>{filme.genero}</p>
            <p>{filme.sinopse}</p>
            
            </div>
            
            

            </>}
        </main>
    )
}