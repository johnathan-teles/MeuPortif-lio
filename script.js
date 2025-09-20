
			function contatoSelecionado(event) {
			    event.preventDefault();
			    document.querySelector("#contato").scrollIntoView({
			        behavior: "smooth" 
			    });
			}
			function portfolioSelecionado(event) {
			    event.preventDefault(); 
			    document.querySelector("#portfolio").scrollIntoView({
			        behavior: "smooth" 
			    });
			}
			function skillsSelecionado(event) {
			    event.preventDefault(); 
			    document.querySelector("#skills").scrollIntoView({
			        behavior: "smooth" 
			    });
			}
			function sobreSelecionado(event) {
			    event.preventDefault();
			    document.querySelector("#sobre").scrollIntoView({
			        behavior: "smooth" 
			    });
			}
			function homeSelecionado(event) {
			    event.preventDefault();
			    document.querySelector("#home").scrollIntoView({
			        behavior: "smooth" 
			    });
			}


			function redirectToWhatsApp() {
			    let telefone = '5562995552510';  
			    let mensagem = 'Olá Johnathan, vi seu portfólio e gostaria de saber mais sobre suas habilidades e projetos. Vamos conversar!';

			    let linkWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

			    // Abre o link em uma nova aba
			    window.open('_blank', linkWhatsApp );
			}


			function contatoSelecionado(event) {
			    event.preventDefault();
			    document.querySelector("#contato").scrollIntoView({
			        behavior: "smooth" 
			    });
			}
			function portfolioSelecionado(event) {
			    event.preventDefault(); 
			    document.querySelector("#portfolio").scrollIntoView({
			        behavior: "smooth" 
			    });
			}
			function skillsSelecionado(event) {
			    event.preventDefault(); 
			    document.querySelector("#skills").scrollIntoView({
			        behavior: "smooth" 
			    });
			}
			function sobreSelecionado(event) {
			    event.preventDefault();
			    document.querySelector("#sobre").scrollIntoView({
			        behavior: "smooth" 
			    });
			}
			function homeSelecionado(event) {
			    event.preventDefault();
			    document.querySelector("#home").scrollIntoView({
			        behavior: "smooth" 
			    });
			}


        function redirectToWhatsApp() {
            let telefone = '5562995552510';  
			let mensagem = 'Olá, vi seu portfólio e gostaria de saber mais sobre suas habilidades e projetos. Vamos conversar!';

            let linkWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
            
            window.location.href = linkWhatsApp;
        }


	//*************CARROSSEL
	let currentIndex = 0;

	function showSlide(index) {
	  const slides = document.querySelectorAll('.carousel-images img');
	  const totalSlides = slides.length;

	  if (index >= totalSlides) {
	    currentIndex = 0;
	  } else if (index < 0) {
	    currentIndex = totalSlides - 1;
	  } else {
	    currentIndex = index;
	  }

	  const slideWidth = document.querySelector('.carousel').offsetWidth;
	  const offset = -currentIndex * slideWidth;
	  document.getElementById('carouselImages').style.transform = `translateX(${offset}px)`;
	}

	function nextSlide() {
	  showSlide(currentIndex + 1);
	}

	function prevSlide() {
	  showSlide(currentIndex - 1);
	}

	window.onload = () => {
	  showSlide(currentIndex);
	};
	    console.log("Slide atual:", currentIndex);
	    