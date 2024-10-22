const MostrarProduto = ({ produto }) => {
    return (
        <div>
            <h3><u>{produto.marca}</u></h3>
            <p>Preço: R$ {produto.preco.toFixed(2)}</p>
            <p>Estoque: {produto.estoque} unidades</p>
        </div>
    );
};

export default MostrarProduto;