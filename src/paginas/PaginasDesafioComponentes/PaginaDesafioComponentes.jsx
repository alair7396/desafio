
import Principal from '../../comum/componentes/Principal/Principal';
import MostrarDivisao from './MostrarDivisao/MostrarDivisao';
import MostrarMeuNomeCompleto from './MostrarMeuNomeCompleto/MostrarMeuNomeCompleto';
import MostrarMultiplicacao from './MostrarMultiplicacao/MostrarMultiplicacao';
import MostrarNumerosPares from './MostrarNumerosPares/MostrarNumerosPares';
import MostrarProduto from './MostrarProduto/MostrarProduto';
import MostrarSoma from "./MostrarSoma/MostrarSoma";
import MostrarSubtracao from './MostrarSubtracao/MostrarSubtracao';
const produto = {
    marca: 'TV Samsung 55"',
    preco: 2999.90,
    estoque: 345,
};
const numeros = [1, 8, 13, 16, 21, 24, 29, 32, 37, 40, 45, 48];
const PaginaDesafioComponentes = () => {
    return (
        <Principal titulo="Desafio" voltarPara="/">
            <MostrarSoma />
            <MostrarSubtracao subtracao={10 - 2} />
            <MostrarDivisao divisao={50 / 10} />
            <MostrarMultiplicacao multiplicacao={10 * 10} />
            <MostrarMeuNomeCompleto nome={'Alair Luiz'} sobre={ 'Cousseau Neres Costa'} />
            <MostrarProduto produto={produto} />
            <MostrarNumerosPares numeros={numeros} />
        </Principal>
    );
};

export default PaginaDesafioComponentes;