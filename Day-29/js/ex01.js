const dataSlide = [
  {
    id: 1,
    title: "Slide 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
    image: "https://placehold.co/800x400?text=Slide+1",
  },
  {
    id: 2,
    title: "Slide 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ratione?",
    image: "https://placehold.co/800x400?text=Slide+2",
  },
  {
    id: 3,
    title: "Slide 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, magnam.",
    image: "https://placehold.co/800x400?text=Slide+3",
  },
  {
    id: 4,
    title: "Slide 4",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, illum?",
    image: "https://placehold.co/800x400?text=Slide+4",
  },
  {
    id: 5,
    title: "Slide 5",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, magnam.",
    image: "https://placehold.co/800x400?text=Slide+5",
  },
];

const carouselInner = document.querySelector(".carousel-inner");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const progressDots = document.querySelector(".progress-dots");
const slideLength = dataSlide.length;
let crrSlide = 0;

function createDots() {
  for (let i = 0; i < dataSlide.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.dataset.index = i;
    dot.onclick = () => {
      crrSlide = i;
      newCarousel();
    };
    progressDots.appendChild(dot);
  }
}
createDots();

function slideShow(slide) {
  return `
      <div class="slide">
          <img src="${slide.image}" alt="${slide.title}" />
          <h2>${slide.title}</h2>
          <p>${slide.content}</p>
      </div>
  `;
}

function newCarousel() {
  const slide = dataSlide[crrSlide];
  carouselInner.innerHTML = slideShow(slide);

  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === crrSlide);
  });
}

function prev() {
  crrSlide--;
  if (crrSlide < 0) crrSlide = slideLength - 1;

  newCarousel();
}
function next() {
  crrSlide++;
  if (crrSlide >= slideLength) crrSlide = 0;
  newCarousel();
}
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

setInterval(() => {
  if (crrSlide + 1 < dataSlide.length) crrSlide++;
  newCarousel();
}, 3000);

newCarousel();
