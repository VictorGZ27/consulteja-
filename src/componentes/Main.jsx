import React, { useState } from "react";
import "../styles/Main.css";

function Main() {
    const [codigo, setCodigo] = useState("");
    const [produto, setProduto] = useState(null);
    const [erro, setErro] = useState("");

    const buscarProduto = async () => {
        try {
            const resposta = await fetch("/api/produtos.json");
            const data = await resposta.json();
            const encontrado = data.produtos.find(p => p.codigo === codigo);

            if (encontrado) {
                setProduto(encontrado);
                setErro("");
            } else {
                setErro("Produto não encontrado.");
                setProduto(null);
            }

        } catch {
            setErro("Erro ao acessar a API.");
        }
    };

    return (
        <main className="container">
            <h1>ConsulteJá — Produtos</h1>

            <div className="search-area">
                <input
                    type="text"
                    placeholder="Digite o código de barras..."
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                />
                <button onClick={buscarProduto}>Consultar</button>
            </div>

            {erro && <p className="erro">{erro}</p>}

            {produto && (
                <div className="card">
                    <img src={produto.imagem} alt={produto.nome} />
                    <h2>{produto.nome}</h2>
                    <p>{produto.descricao}</p>
                    <p className="preco">Preço: R$ {produto.preco.toFixed(2)}</p>
                </div>
            )}
        </main>
    );
}

export default Main;
