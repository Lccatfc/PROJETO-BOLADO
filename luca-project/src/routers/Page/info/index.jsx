import axios from "axios";
import { useEffect } from "react";

const Info = () => {
  useEffect(() => {
    // Função assíncrona para fazer a requisição
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/oi');
        console.log(response, "success");
        // Manipula a resposta bem-sucedida aqui
      } catch (error) {
        console.error('Erro na requisição:', error);
        console.log("falha")
        // Manipula erros aqui
      }
    };

    // Chama a função assíncrona dentro do useEffect
    fetchData();
  }, []); // O segundo argumento (um array vazio) indica que este useEffect será executado apenas uma vez, sem depender de variáveis.
  return (
    <div>oi</div>
  )
}


export default Info
