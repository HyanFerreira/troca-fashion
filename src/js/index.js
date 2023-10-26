function navigationHamburguer() {
  const hamburguer = document.querySelector('.hamburguer');
  const aside = document.querySelector('.aside-menu');
  const container = document.querySelector('.container');

  hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    aside.classList.toggle('active');
    container.classList.toggle('active');
  });
}

navigationHamburguer();

function favorite() {
  const favorite_svg = document.querySelector('.favorite svg');
  let isFavorite = false;

  favorite_svg.addEventListener('click', () => {
    if (isFavorite) {
      favorite_svg.style.fill = 'transparent';
      isFavorite = false;
    } else {
      favorite_svg.style.fill = 'red';
      isFavorite = true;
    }
  });
}

favorite();
