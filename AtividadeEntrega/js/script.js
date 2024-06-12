trocaTema = () => {
  // alert("Mudei o tema e você não viu.")
  //const html = document.documentElement;

  //document.querySelector("body").style.background = "Pink";

  document.documentElement.classList.toggle("light");

  const isLinght = document.documentElement.classList.contains("light");

  const imagem = isLinght ? "./img/dark.jpg" : "./img/light.jpg";

  document.querySelector("#perfil img").setAttribute("src", imagem);
};
