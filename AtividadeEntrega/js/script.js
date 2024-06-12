trocaTema = () => {
  // alert("Mudei o tema e você não viu.")
  //const html = document.documentElement;

  //document.querySelector("body").style.background = "Pink";

  document.documentElement.classList.toggle("light");

  const isLinght = document.documentElement.classList.contains("light");

  const imagem = isLinght ? "./img/dark.jpg" : "./img/light.jpg";

  document.querySelector("#perfil img").setAttribute("src", imagem);

  const trocaalt= isLinght ? "uma mulher de cabelo preto, ela esta maquiada,batom vermelho, seu olho tem um tom escuro e cara de brava" :  "Uma mulher loira, cabelos esvoaçantes, maquiada, batom forte, com traços fortes";

  document.querySelector("#perfil img").setAttribute("alt", trocaalt);

};
