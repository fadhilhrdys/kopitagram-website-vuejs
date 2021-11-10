<template>
  <nav>
    <div class="container-nav" data-aos="fade-down">
      <div class="logo">
        <a href="#">
          <img src="assets/img/logo.png" alt="kopitagram" />
        </a>
      </div>
      <ul class="nav-link">
        <li><router-link to="/" class="nav-list">Home</router-link></li>
        <li>
          <router-link to="/ourstory" class="nav-list">Our Story</router-link>
        </li>
        <li>
          <router-link to="/location" class="nav-list">Locations</router-link>
        </li>
        <li class="dropdown nav-list">
          <a href="#">Menu <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-list">
            <a
              href="https://drive.google.com/file/d/1xxHQp_1Wg45k1gyuW4rrjxYxE2fZi-LD/view"
              >At Cafe</a
            >
            <router-link to="/menu">Ready To Drink</router-link>
          </div>
        </li>
        <li class="dropdown nav-list">
          <a href="#">Gallery <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-list">
            <router-link to="/gallery">Tomang</router-link>
            <a href="#">Cinere</a>
            <a href="#">Gading Serpong</a>
          </div>
        </li>
        <li class="dropdown nav-list">
          <a href="#">Shop <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-list">
            <a href="https://shopee.co.id/kopitagram">Shopee</a>
            <a
              href="https://www.blibli.com/brand/kopitagram?page=1&start=0&intent=false&brandName=kopitagram&multiCategory=true&sort=7&category=53400"
              >Blibli</a
            >
            <a href="https://www.tokopedia.com/kopitagram">Tokopedia</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style>
</style>