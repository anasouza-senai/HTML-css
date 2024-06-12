trocaTema = () => {
   // alert("Mudei o tema e você não viu.")
   //const html = document.documentElement;

   //document.querySelector("body").style.background = "Pink"; 

document.documentElement.classList.toggle("light");

const isLinght = document.documentElement.classList.contains("light");

const imagem = isLinght ? "./img/perfil.JPEG" : "./img/kylie.jpg";

document.querySelector("#pefil img").
setAttribute("src", imagem);
};