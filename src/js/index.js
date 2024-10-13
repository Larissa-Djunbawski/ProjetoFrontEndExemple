//window.alert("oi")
//passo 1 trsbalhar com a listagem de pokedevs
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev"); //seleciona todos os itens de pokedev

//evento de clique em cada elemento da listagem
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        //remover a classe aberto so do cartão que esta aberto
        esconderCartaoPokedev();
        //ao clicar em um pokedev da listagem pegamos o id desse pokedev para saber qual abrir
        const idPokedevSelecionado = mostrarCartaopokedev(pokedev);

        //remover a classe ativo que marca o pokedev selecionado na listagem
        desativarPokedevSelecionadoNaListagem();
        
        //adicionar a classe ativo no pokedev selecionado na listagem
        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);

    })
})

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevSelecionadoNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaopokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
