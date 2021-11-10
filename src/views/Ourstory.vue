<template>
  <div class="ourstory">
    <Navigation />
    <main>
      <!-- founder -->
      <section class="container-founder">
        <div class="founder-list" data-aos="fade-up" data-aos-delay="200">
          <div class="founder">
            <img src="assets/img/founder1.png" alt="founder" />
            <div class="name-founder">
              <p>Vicky Aditya</p>
            </div>
          </div>
          <div class="founder">
            <img src="assets/img/founder2.png" alt="founder" />
            <div class="name-founder">
              <p>Eunike Adelia</p>
            </div>
          </div>
          <div class="founder">
            <img src="assets/img/founder3.png" alt="founder" />
            <div class="name-founder">
              <p>Joe Hansen</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="shadow-gradient"
        ></div>
      </section>

      <!-- story -->
      <section class="container-story">
        <h2 data-aos="fade-up">A LITTLE OUR STORY</h2>
        <hr data-aos="fade-up" data-aos-delay="100" />
        <p data-aos="fade-up" data-aos-delay="200">
          Starting from the Covid-19 pandemic that hit the whole world in 2019,
          <br />
          where the young generation had difficulty finding a comfortable and
          <br />
          safe place wo work or meet their friens. This is the beginning why
          <br />
          we want to create a meeting places that is worry-free, comfortable
          <br />
          and dominated with good air circulation spots. Starting from Tomang
          West Jakarta <br />
          we are ready to meet all of you around Indonesia and become <br />
          your new normal comfort place
        </p>
      </section>
    </main>
    <Chatus />
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Chatus from "@/components/Chatus.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Ourstory",
  components: {
    Navigation,
    Chatus,
    Footer,
  },
};
</script>

<style>
</style>