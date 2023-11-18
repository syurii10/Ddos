<template>
  <div id="carouselExample" class="carousel slide w-50">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="./images/img.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="./images/img_2.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="./images/img_1.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="./images/img_3.png" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <h1 class="text-dark">News</h1>
  <div class="container">
    <div class="card">
      <figure class="card__thumb">
        <img src="https://source.unsplash.com/3THn0EN_Ydo/300x510" alt="Picture by David Monje" class="card__image">
        <figcaption class="card__caption">
          <h2 class="card__title">NASA Has Found Hundreds Of Potential New Planets</h2>
          <p class="card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space
            telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
          <a href="" class="card__button">Read more</a>
        </figcaption>
      </figure>
    </div>

    <div class="card">
      <figure class="card__thumb">
        <img src="https://source.unsplash.com/71u2fOofI-U/300x510" alt="Picture by Nathan Dumlao" class="card__image">
        <figcaption class="card__caption">
          <h2 class="card__title">This Is Your Body And Brain On Coffee</h2>
          <p class="card__snippet">Drinking more caffeine during the coronavirus lockdown? Here's how it can affect you
            over time and advice on making it better for you.</p>
          <a href="" class="card__button">Read more</a>
        </figcaption>
      </figure>
    </div>

    <div class="card">
      <figure class="card__thumb">
        <img src="https://source.unsplash.com/qXMpNtNp1uE/300x510" alt="Picture by Daniel Lincoln" class="card__image">
        <figcaption class="card__caption">
          <h2 class="card__title">Why You Should Bring Your Dog To Work</h2>
          <p class="card__snippet">On Friday, offices around the country celebrated the 15th annual Take Your Dog to
            Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact
            may be a slightly more relaxing work environment for any office choosing to participate.</p>
          <a href="" class="card__button">Read more</a>
        </figcaption>
      </figure>
    </div>
    <div class="card">
      <figure class="card__thumb">
        <img src="https://source.unsplash.com/qXMpNtNp1uE/300x510" alt="Picture by Daniel Lincoln" class="card__image">
        <figcaption class="card__caption">
          <h2 class="card__title">Why You Should Bring Your Dog To Work</h2>
          <p class="card__snippet">On Friday, offices around the country celebrated the 15th annual Take Your Dog to
            Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact
            may be a slightly more relaxing work environment for any office choosing to participate.</p>
          <a href="" class="card__button">Read more</a>
        </figcaption>
      </figure>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <figure class="card__thumb">
        <img src="https://source.unsplash.com/3THn0EN_Ydo/300x510" alt="Picture by David Monje" class="card__image">
        <figcaption class="card__caption">
          <h2 class="card__title">NASA Has Found Hundreds Of Potential New Planets</h2>
          <p class="card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space
            telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
          <a href="" class="card__button">Read more</a>
        </figcaption>
      </figure>
    </div>

    <div class="card">
      <figure class="card__thumb">
        <img src="https://source.unsplash.com/71u2fOofI-U/300x510" alt="Picture by Nathan Dumlao" class="card__image">
        <figcaption class="card__caption">
          <h2 class="card__title">This Is Your Body And Brain On Coffee</h2>
          <p class="card__snippet">Drinking more caffeine during the coronavirus lockdown? Here's how it can affect you
            over time and advice on making it better for you.</p>
          <a href="" class="card__button">Read more</a>
        </figcaption>
      </figure>
    </div>

    <div class="card">
      <figure class="card__thumb">
        <img src="https://source.unsplash.com/qXMpNtNp1uE/300x510" alt="Picture by Daniel Lincoln" class="card__image">
        <figcaption class="card__caption">
          <h2 class="card__title">Why You Should Bring Your Dog To Work</h2>
          <p class="card__snippet">On Friday, offices around the country celebrated the 15th annual Take Your Dog to
            Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact
            may be a slightly more relaxing work environment for any office choosing to participate.</p>
          <a href="" class="card__button">Read more</a>
        </figcaption>
      </figure>
    </div>
    <div class="card">
      <figure class="card__thumb">
        <img src="https://source.unsplash.com/71u2fOofI-U/300x510" alt="Picture by Nathan Dumlao" class="card__image">
        <figcaption class="card__caption">
          <h2 class="card__title">This Is Your Body And Brain On Coffee</h2>
          <p class="card__snippet">Drinking more caffeine during the coronavirus lockdown? Here's how it can affect you
            over time and advice on making it better for you.</p>
          <a href="" class="card__button">Read more</a>
        </figcaption>
      </figure>
    </div>
  </div>

</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped>
html {
  box-sizing: border-box;
  font-size: 62.5%
}

html *, html :after, html :before {
  box-sizing: inherit
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #e6e6e6
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 20px 0 80px
}

.card {
  width: 300px;
  margin: 10px;
  background-color: #fff;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .5)
}

.card:hover .card__caption {
  top: 50%;
  transform: translateY(-50%)
}

.card:hover .card__image {
  transform: translateY(-10px)
}

.card:hover .card__thumb::after {
  top: 0
}

.card:hover .card__snippet {
  margin: 20px 0
}

.card__thumb {
  position: relative;
  max-height: 400px;
  overflow: hidden
}

@media (min-width: 1024px) {
  .card__thumb {
    max-height: 500px
  }
}

.card__thumb::after {
  position: absolute;
  top: 0;
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, .5) 40%, rgba(255, 255, 255, 0) 100%);
  transition: .3s
}

@media (min-width: 1024px) {
  .card__thumb::after {
    top: calc(100% - 140px)
  }
}

.card__image {
  transition: .5s ease-in-out
}

.card__caption {
  position: absolute;
  top: 50%;
  z-index: 1;
  padding: 0 20px;
  color: #fff;
  transform: translateY(-50%);
  text-align: center;
  transition: .3s
}

@media (min-width: 1024px) {
  .card__caption {
    top: calc(100% - 110px);
    transform: unset
  }
}

.card__title {
  display: -webkit-box;
  max-height: 85px;
  overflow: hidden;
  font-family: "Playfair Display", serif;
  font-size: 23px;
  line-height: 28px;
  text-shadow: 0 1px 5px #000;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical
}

.card__snippet {
  display: -webkit-box;
  max-height: 150px;
  margin: 20px 0;
  overflow: hidden;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 20px;
  text-overflow: ellipsis;
  transition: .5s ease-in-out;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical
}

@media (min-width: 1024px) {
  .card__snippet {
    margin: 60px 0
  }
}

.card__button {
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  border: 1px solid #fff;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  transition: .3s
}

.card__button:hover {
  color: #000;
  background-color: #fff
}
</style>