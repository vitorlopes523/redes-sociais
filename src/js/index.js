const buttonTrocarFundo = document.querySelector(".trocar-fundo")

buttonTrocarFundo.addEventListener('click', () =>{
  const fundoProjeto = document.querySelector("body")

  if(fundoProjeto.classList.value !== 'dark-pink') {
    fundoProjeto.classList.add("dark-pink")
  } else {
    fundoProjeto.classList.remove('dark-pink')
  }
})