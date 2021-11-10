<template>
  <div class="gallery">
    <Navigation />
    <!-- main content -->
    <slick ref="slick" :options="slickOptions" class="slider-gallery-page">
      <div class="container-gallery">
        <img class="bg-gallery" src="assets/img/tmg1.png" alt="kopitagram" />
        <div class="pics-gallery">
          <div
            class="gallery-wording"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <img src="assets/img/tmg11.jpg" alt="" />
            <h3>
              FEELS GOOD <br />
              LIKE IN BALI
            </h3>
          </div>
          <img
            src="assets/img/tmg12.jpg"
            alt="kopitagram"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="800"
          />
          <img
            src="assets/img/tmg13.jpg"
            alt="kopitagram"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          />
        </div>
      </div>
      <div class="container-gallery">
        <img class="bg-gallery" src="assets/img/tmg2.png" alt="kopitagram" />
        <div class="pics-gallery">
          <div
            class="gallery-wording"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <img src="assets/img/tmg21.jpg" alt="" />
            <h3>
              RELAXING <br />
              SITTING <br />
              AREA
            </h3>
          </div>
          <img
            src="assets/img/tmg22.jpg"
            alt="kopitagram"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="800"
          />
          <img
            src="assets/img/tmg23.jpg"
            alt="kopitagram"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          />
        </div>
      </div>
      <div class="container-gallery">
        <img class="bg-gallery" src="assets/img/tmg3.png" alt="kopitagram" />
        <div class="pics-gallery">
          <div
            class="gallery-wording"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <img src="assets/img/tmg31.jpg" alt="" />
            <h3>
              EXPLORE <br />
              MORE OF <br />
              YOUR STYLE
            </h3>
          </div>
          <img
            src="assets/img/tmg32.jpg"
            alt="kopitagram"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="800"
          />
          <img
            src="assets/img/tmg33.jpg"
            alt="kopitagram"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </slick>
    <!-- end main content -->
    <Chatus />
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
import Chatus from "@/components/Chatus.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Gallery",
  components: {
    Navigation,
    Footer,
    Chatus,
    Slick,
  },
  data() {
    return {
      slickOptions: {
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 5000,
        arrows: false,
        pauseOnHover: false,
        fade: true,
      },
    };
  },
};
</script>

<style>
</style>