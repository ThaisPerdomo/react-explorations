//::::::::::::::::::::::::::::::: AREA DOS IMPORTS :::::::::::::::::::::::::::::::

/*
 *  IMPORT 1. Importando o USESTATE: Descomentar para exemplo 1 e 2
*/
// import { useState } from 'react'; 
// Primeiro, importamos o useState do React, com a finalidade de alterar o valor de uma variável (que, agora, se chama state).

/*
 *  IMPORT 2. Importando o USESTATE e o TYPE REACT: Descomentar para exemplo 3
*/

import React, { useState } from 'react';
// Importamos o React, para que possamos usar o type React.FormEvent, que é um tipo de evento que o React reconhece.


//::::::::::::::::::::::::::::::: AREA DOS COMPONENTES :::::::::::::::::::::::::::::::

/*************************************
 * Exemplo 1: Criando um state com o useState. 
 * Orientações: Deixar o import 1 do useState (no início do código) e o export default (no final do código) descomentado
 * Comentar tudo que não seja o const App abaixo.
 **************************************
*/

// const App = () => {
  
//   const [ nome, alteraNomePara ] = useState('Stefani Germanotta');
//   // Aqui criamos um array que recebe: 1. Um nome qualquer para a variável e 2. Um nome para uma função que vai alterar o valor da variável. 
//   // Daí, atribuimos o valor inicial dessa variável criada com o useState.

//   const trocarNome = () => {
//     alteraNomePara('Lady Gaga')
//   }
//   // Aqui, criamos uma função que chama aquela função criada no array e que altera o valor da variável e definimos o novo valor.

//   return (
//     <div>
//       O nome da doidinha é {nome} <br/>
//       <button onClick={trocarNome}> Clique aqui</button>
//     </div>

//   ); 
//   // No return, chamamos a variável que foi criada com o useState e, também, o botão que chama a função que altera o valor da variável
//   // Isso deve ser feito sem colocar os parênteses, pois, se colocarmos, a função será executada assim que a página for carregada.
// };

//******************************************** */


/*************************************
 * Exemplo 2: Criando um state com o useState e fazendo um contador. 
 * Orientações: Deixar o import 1 do useState (no início do código) e o export default (no final do código) descomentado.
 * Comentar tudo que não seja o const App abaixo.
 **************************************
*/

// const App = () => {

//   const [ numero, alteraNumero ] = useState(0);

//   const incrementar = () => {
//     alteraNumero(numero + 1);
//   };

//   const decrementar = () => {
//     alteraNumero(numero - 1);
//   };

//   return(
//     <>
//       <h2>Contador</h2><br/>

//       <button onClick = {incrementar}> + </button> <br/>

//       {numero}<br/>

//       <button onClick = {decrementar}> - </button>
//     </>
//   )

// };

/*************************************
 * Exemplo 3: Pegando dados do input in real time com o state. 
 * Orientações: Deixar o import 2 do useState e React (no início do código) e o export default (no final do código) descomentado 
 * Comentar tudo que não seja o const App abaixo.
 **************************************
*/

const App = () => {

  const [ nome, insereNome ] = useState('');
  // Para explicações do useState, ver o exemplo 1.

  const valorDoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    insereNome(event.target.value);
  }
  // Aqui, criamos uma função que recebe um parâmetro "event" que vai receber o evento do input e, dentro dele, vamos pegar o valor do input. Consta nas anotações de JS
  // Porém, como estamos usando TS, precisamos colocar o type do parâmetro do evento, que é o FormEvent do React e, dentro dele, o tipo do input, que é o HTMLInputElement.
 // O FormEvent pode ser substituído por ChangeEvent, que é o evento que acontece quando o valor do input é alterado.
 // Depois, chamamos a função que altera o valor da variável e passamos o valor do input como parâmetro com event.target.value.


  return(
    <>  
      NOME: 
      <input type="text" value={nome} onChange={valorDoInput} />
      <hr/>
      Olá, {nome}!
    </>
  )
  // No input, colocamos o value={nome} para que o input receba o valor da variável nome.
  // No onChange, colocamos "valorDoInput", sem os parênteses, que é a função que vai pegar o valor do input e colocar na variável nome.

}


export default App;

