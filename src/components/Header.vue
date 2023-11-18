<template>
  <nav class="navbar navbar-expand-lg w-100 bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand text-light">DDOS</router-link>
      <button class="navbar-toggler" style="background-color: white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon "></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active text-light" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/gallery" class="nav-link text-light">Gallery</router-link>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More
            </a>
            <ul class="dropdown-menu bg-dark">
              <li><router-link to="/about" class="dropdown-item text-light">About us</router-link></li>
              <li><router-link to="/contact" class="dropdown-item text-light">Contact us</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link to="/" class="dropdown-item text-light">Home</router-link></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>