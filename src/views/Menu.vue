<template>
  <div class="menu">
    <Navigation />
    <!-- main content -->
    <div class="container-menu">
      <slick ref="slick" :options="slickOptions" class="slider-menu">
        <div class="menu-list">
          <button @click="prev()" class="prevMenu">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div v-if="size == false" class="menu-wrapper">
            <div data-aos="fade-right" data-aos-delay="100" class="menu-desc">
              <h1>
                KOPI <br />
                SUSU
              </h1>
              <p>
                Espresso, Brown Sugar, & <br />
                Freshmilk
              </p>
            </div>
            <img data-aos="zoom-in-up" src="assets/img/kosu.png" alt="" />
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              class="price-size-menu"
            >
              <h2>IDR 85K</h2>
              <div class="size">
                <div class="title-size">
                  SIZE <i class="fas fa-caret-down"></i>
                </div>
                <ul class="size-list">
                  <li>1 Liter</li>
                  <li @click="selectedSize(true)">250mL</li>
                </ul>
                <p class="size-selected">1 Liter</p>
              </div>
              <a
                href="https://www.tokopedia.com/kopitagram/kopi-susu-1-liter-kopiter-kopi-seliter-kopitagram-normal-sugar"
                >BUY NOW</a
              >
            </div>
          </div>
          <div v-else class="menu-wrapper">
            <div class="menu-desc">
              <h1>
                KOPI <br />
                SUSU
              </h1>
              <p>
                Espresso, Brown Sugar, & <br />
                Freshmilk
              </p>
            </div>
            <img src="assets/img/kosu-250mL.png" alt="" />
            <div class="price-size-menu">
              <h2>IDR 22K</h2>
              <div class="size">
                <div class="title-size">
                  SIZE <i class="fas fa-caret-down"></i>
                </div>
                <ul class="size-list">
                  <li @click="selectedSize(false)">1 Liter</li>
                  <li>250mL</li>
                </ul>
                <p class="size-selected">250 mL</p>
              </div>
              <a
                href="https://www.tokopedia.com/kopitagram/kopiter-mini-kopi-susu-250ml"
                >BUY NOW</a
              >
            </div>
          </div>
          <button @click="next()" class="nextMenu">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
        <div class="menu-list">
          <button @click="prev()" class="prevMenu">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div v-if="size == false" class="menu-wrapper">
            <div class="menu-desc">
              <h1>BANAMI</h1>
              <p>Fresh Milk with Real Banana</p>
            </div>
            <img src="assets/img/banami.png" alt="" />
            <div class="price-size-menu">
              <h2>IDR 100K</h2>
              <div class="size">
                <div class="title-size">
                  SIZE <i class="fas fa-caret-down"></i>
                </div>
                <ul class="size-list">
                  <li>1 Liter</li>
                  <li @click="selectedSize(true)">250mL</li>
                </ul>
                <p class="size-selected">1 Liter</p>
              </div>
              <a
                href="https://www.tokopedia.com/kopitagram/banami-susu-pisang-seliter-1000ml"
                >BUY NOW</a
              >
            </div>
          </div>
          <div v-else class="menu-wrapper">
            <div class="menu-desc">
              <h1>BANAMI</h1>
              <p>Fresh Milk with Real Banana</p>
            </div>
            <img src="assets/img/banami-250mL.png" alt="" />
            <div class="price-size-menu">
              <h2>IDR 30K</h2>
              <div class="size">
                <div class="title-size">
                  SIZE <i class="fas fa-caret-down"></i>
                </div>
                <ul class="size-list">
                  <li @click="selectedSize(false)">1 Liter</li>
                  <li>250mL</li>
                </ul>
                <p class="size-selected">250 mL</p>
              </div>
              <a
                href="https://www.tokopedia.com/kopitagram/banami-susu-pisang-250ml"
                >BUY NOW</a
              >
            </div>
          </div>
          <button @click="next()" class="nextMenu">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
        <div class="menu-list">
          <button @click="prev()" class="prevMenu">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div class="menu-wrapper">
            <div class="menu-desc">
              <h1>
                BANAMI <br />
                SPRAY
              </h1>
              <p>Fresh Milk with Real Banana</p>
            </div>
            <img src="assets/img/banami-spray.png" alt="" />
            <div class="price-size-menu">
              <h2>IDR 35K</h2>
              <div class="size">
                <div class="title-size">SIZE</div>
                <p class="size-selected">250 mL</p>
              </div>
              <a href="https://www.tokopedia.com/kopitagram/banami-spray-250ml"
                >BUY NOW</a
              >
            </div>
          </div>
          <button @click="next()" class="nextMenu">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </slick>
    </div>
    <!-- mend main content -->
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
  name: "Menu",
  components: {
    Navigation,
    Slick,
    Chatus,
    Footer,
  },
  data() {
    return {
      slickOptions: {
        arrows: false,
        infinite: true,
        autoplay: false,
      },
      size: false,
    };
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    selectedSize(param1) {
      // conditional size
      if (param1 == true) {
        this.size = true;
      } else {
        this.size = false;
      }
    },
  },
};
</script>

<style>
</style>