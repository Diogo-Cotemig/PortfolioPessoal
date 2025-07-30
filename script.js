const checkbox =
document.getElementById('toggle--daynight');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})


 /*Codigo para o Modal (com as abas)*/
    
 // Ativa a primeira aba por padrão
   document.getElementsByClassName("tablink")[0].click();

    function openCity(evt, cityName) {
      var i, x, tablinks;
      x = document.getElementsByClassName("city");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < x.length; i++) {
        tablinks[i].classList.remove("w3-light-grey");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.classList.add("w3-light-grey");
    }

    function closeOnOutsideClick(event, modalId) {
      var modal = document.getElementById(modalId);
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
/*Fim do Codigo para o Modal (com as abas)*/

/*Efeito no Texto*/
 
/*Efeito no Texto*/

function abrirModalEscolas() {
    document.getElementById('modalEscolas').style.display = 'block';
  }

  function fecharModalEscolas() {
    document.getElementById('modalEscolas').style.display = 'none';
  }


  /*Slide Show*/
let slideIndex = 0;
const slides = document.getElementsByClassName("slide-visite");
const descricoes = [
  "Code Club 2024",
  "As salas de aula são amplas e equipadas com tecnologia moderna para apoiar o ensino.",
  "A biblioteca oferece um espaço tranquilo para leitura, pesquisa e desenvolvimento intelectual.",
  "Nosso pátio é arborizado e ideal para momentos de lazer e convivência entre os estudantes.",
  "A quadra esportiva incentiva práticas saudáveis, promovendo integração e bem-estar."
];

function mostrarSlide(n) {
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  document.getElementById("descricao-slide").innerText = descricoes[slideIndex];
}

function mudarSlide(n) {
  slideIndex += n;
  mostrarSlide(slideIndex);
}

function abrirModalVisite() {
  document.getElementById("modalVisite").style.display = "block";
  slideIndex = 0;
  mostrarSlide(slideIndex);
}

function fecharModalVisite(event) {
  if (event?.target?.id === "modalVisite" || event === undefined) {
    document.getElementById("modalVisite").style.display = "none";
  }
}


 // Codigo do Menu

   /*
   document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("Menu");
  let lastScrollY = window.scrollY;

  function animateMenu() {
    const currentScrollY = window.scrollY;

    // Movimenta o menu suavemente com o scroll
    const newTop = currentScrollY + 10;
    menu.style.top = `${newTop}px`;

    lastScrollY = currentScrollY;
    requestAnimationFrame(animateMenu);
  }

  animateMenu();
});
   */



