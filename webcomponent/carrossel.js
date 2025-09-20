class MeuCarrossel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.currentIndex = 0;

    this.shadowRoot.innerHTML = `
      <style>
        .carousel {
          position: relative;
          width: 100%;
          max-width: 600px;
          overflow: hidden;
          border-radius: 10px;
          margin: auto;
        }

        .carousel-images {
          display: flex;
          transition: transform 0.5s ease;
        }

        .carousel-images img {
          width: 100%;
          flex-shrink: 0;
          border-radius: 0px;
        }

        .button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          border-radius: 5px;
        }

        .button.prev {
          left: 5px;
        }

        .button.next {
          right: 5px;
        }
      </style>

      <div class="carousel">
        <div class="carousel-images" id="carouselImages"></div>
        <button class="button prev">&#10094;</button>
        <button class="button next">&#10095;</button>
      </div>
    `;
  }

  connectedCallback() {
    const slots = this.querySelectorAll('img');
    const imagesContainer = this.shadowRoot.querySelector('#carouselImages');

    // Clona as imagens e adiciona ao shadow DOM
    slots.forEach(img => {
      const clone = img.cloneNode();
      imagesContainer.appendChild(clone);
    });

    this.images = imagesContainer.querySelectorAll('img');
    this.prevButton = this.shadowRoot.querySelector('.prev');
    this.nextButton = this.shadowRoot.querySelector('.next');

    this.prevButton.addEventListener('click', () => this.showSlide(this.currentIndex - 1));
    this.nextButton.addEventListener('click', () => this.showSlide(this.currentIndex + 1));

    window.addEventListener('resize', () => this.showSlide(this.currentIndex));
    this.showSlide(this.currentIndex);
  }

  showSlide(index) {
    const totalSlides = this.images.length;

    if (index >= totalSlides) {
      this.currentIndex = 0;
    } else if (index < 0) {
      this.currentIndex = totalSlides - 1;
    } else {
      this.currentIndex = index;
    }

    const slideWidth = this.shadowRoot.querySelector('.carousel').offsetWidth;
    const offset = -this.currentIndex * slideWidth;
    this.shadowRoot.querySelector('#carouselImages').style.transform = `translateX(${offset}px)`;
  }
}

customElements.define('meu-carrossel', MeuCarrossel);