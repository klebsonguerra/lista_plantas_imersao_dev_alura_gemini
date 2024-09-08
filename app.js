function pesquisar() {
    // Obtém o valor do campo de pesquisa, converte para minúsculas para facilitar a comparação.
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); 
  
    // Loga o valor da pesquisa no console para fins de depuração.
    console.log(campoPesquisa);
  
    // Obtém a seção onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
  
    // Valida se o campo de pesquisa está vazio.
    if (campoPesquisa == "") {
      // Se estiver vazio, exibe uma mensagem de erro.
      section.innerHTML = "<p>Campo de pesquisa vazio</p>";
      // Interrompe a função para não realizar mais processamento.
      return;
    };
  
    // Inicializa uma string para armazenar os resultados da pesquisa.
    let retornoPesquisa = "";
  
    // Itera sobre cada item (planta) na lista de plantas.
    for (let item of plantas) {
      // Verifica se o termo de pesquisa está presente no nome popular, descrição ou tags da planta.
      // O método .toLowerCase() garante que a comparação seja case-insensitive.
      // O método .includes() verifica se uma substring existe dentro de uma string.
      // O método .some() verifica se pelo menos um elemento de um array satisfaz uma condição.
      if (item.nomePopular.toLowerCase().includes(campoPesquisa) || 
          item.descricao.toLowerCase().includes(campoPesquisa) || 
          item.tags.some(tag => tag.toLowerCase().includes(campoPesquisa))) { 
        // Se o item corresponder à pesquisa, adiciona uma nova div com os detalhes da planta à string de resultados.
        retornoPesquisa += 
          `<div class="item-resultado">
            <h2>${item.nomePopular}</h2>
            <p class="descricao-meta">${item.descricao}</p>
            <a href=${item.link} target="_blank">Mais informações</a>
          </div>`;
      }
    };
  
    // Verifica se foram encontrados resultados.
    if (retornoPesquisa == "") {
      // Se não houver resultados, exibe uma mensagem de "não encontrado".
      section.innerHTML = "<p>Nenhum resultado encontrado</p>";
    } else {
      // Se houver resultados, atualiza a seção com os resultados.
      section.innerHTML = retornoPesquisa;
    }
  };



function mostrarTodos() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada planta no array 'plantas'
    for (let resultado of plantas) {
        // Cria uma nova div para cada resultado, formatando o nome popular, descrição e link
        resultados += `
            <div class="item-resultado">
                <h2>${resultado.nomePopular}</h2>
                <p class="descricao-meta">${resultado.descricao}</p>
                <a href=${resultado.link} target="_blank">Mais informações</a>
            </div>`;
    };

    // Atribui o conteúdo da string 'resultados' para o HTML da seção
    section.innerHTML = resultados;
};



// Tentativa de fazer com que a busca não considere o acento, porém sem sucesso
/* function normalizar() {
   // Normalizar e converter para minúsculas
   let textoPesquisa = "Café";
   let textoComparacao = "cafe";

   let pesquisaNormalizada = textoPesquisa.normalize('NFC').toLowerCase();
   let comparacaoNormalizada = textoComparacao.normalize('NFC').toLowerCase();

   // Comparar as strings normalizadas
   if (pesquisaNormalizada === comparacaoNormalizada) {
       console.log("Encontrado!");
   } else {
       console.log("Não encontrado.");
   }
}*/




