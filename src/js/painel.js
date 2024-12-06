const imagemPainel = document.querySelectorAll('.imagem-painel');
const setaVoltar = document.getElementById('btn-voltar');
const setaAvancar = document.getElementById('btn-avancar');
let imagemAtual = 0;

function esconderImagem() {
  imagemPainel.forEach((imagem) => {
    imagem.classList.remove('mostrar');
  });
}

function mostrarImagem() {
  imagemPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', () => {
  const totalImagens = imagemPainel.length - 1;
  if (imagemAtual === totalImagens) {
    return;
  }

  imagemAtual++;
  esconderImagem();
  mostrarImagem();
});

setaVoltar.addEventListener('click', () => {
  if (imagemAtual === 0) {
    return;
  }

  imagemAtual--;
  esconderImagem();
  mostrarImagem();
});
