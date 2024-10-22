const MostrarNumerosPares = ({ numeros }) => {
   
    const numerosPares = numeros.filter(numero => numero % 2 === 0);
  
    return (
      <ul>
        {numerosPares.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
    );
  };
export default MostrarNumerosPares;