<template>
  <div class="home">
    <Navigation />
    <!-- main content -->
    <main>
      <slick class="slider-landing-page" ref="slick" :options="slickOptions">
        <div class="slider-wrapper">
          <!-- section wording -->
          <section class="section-wording">
            <img class="bg-section" src="assets/img/bg-tomang.png" alt="" />
            <div class="section-wrap">
              <div class="wording">
                <h1 data-aos="fade-right" data-aos-delay="50">
                  YOUR <br />
                  NEW NORMAL <br />
                  COMFORT PLACE
                </h1>
                <button data-aos="fade-right" data-aos-delay="150">
                  Read More
                </button>
                <div
                  class="btn-wording"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <button @click="prev()" class="prev">
                    <i class="fas fa-angle-double-left"></i>
                  </button>
                  <span>Tomang</span>
                  <button @click="next()" class="next">
                    <i class="fas fa-angle-double-right"></i>
                  </button>
                </div>
              </div>
              <img
                src="assets/img/pic-tomang.jpg"
                alt="tomang"
                data-aos="fade-left"
                data-aos-delay="300"
              />
            </div>
          </section>
          <!-- section gallery -->
          <section class="section-desc">
            <div class="describtion">
              <h2 data-aos="fade-up" data-aos-delay="150">TOMANG</h2>
              <p data-aos="fade-up" data-aos-delay="200">
                The hidden gem cafe is located in a residential area. Kopitagram
                Tomang has a very <br />
                aesthetic and instagramable cafe area design concept. Then there
                is a been bag that <br />
                is perfect for those of you who work or hang out while sioping.
              </p>
              <p data-aos="fade-up" data-aos-delay="200">
                Then, the plus thing there is a rooftop area that is really
                cool. The balinese concept, <br />
                unfinished build and there is a qoute on every staircase.
                Guaranteed to make you very <br />
                comfortable like at home.
              </p>
            </div>
            <hr data-aos="fade-up" data-aos-delay="250" />
            <!-- gallery -->
            <swiper
              class="gallery-desc"
              data-aos="fade-up"
              ref="mySwiper"
              :options="swiperOptions"
            >
              <swiper-slide class="swiper-list">
                <a href="assets/img/area1.jpg" target="_blank"
                  ><img src="assets/img/area1.jpg"
                /></a>
              </swiper-slide>
              <swiper-slide class="swiper-list">
                <a href="assets/img/area2.jpg" target="_blank"
                  ><img src="assets/img/area2.jpg"
                /></a>
              </swiper-slide>
              <swiper-slide class="swiper-list">
                <a href="assets/img/area3.jpg" target="_blank"
                  ><img src="assets/img/area3.jpg"
                /></a>
              </swiper-slide>
              <swiper-slide class="swiper-list">
                <a href="assets/img/area4.jpg" target="_blank"
                  ><img src="assets/img/area4.jpg"
                /></a>
              </swiper-slide>
              <swiper-slide class="swiper-list">
                <a href="assets/img/area5.jpg" target="_blank"
                  ><img src="assets/img/area5.jpg"
                /></a>
              </swiper-slide>
              <swiper-slide class="swiper-list">
                <a href="assets/img/area6.jpg" target="_blank"
                  ><img src="assets/img/area6.jpg"
                /></a>
              </swiper-slide>
              <swiper-slide class="swiper-list">
                <a href="assets/img/area7.jpg" target="_blank"
                  ><img src="assets/img/area7.jpg"
                /></a>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </section>
        </div>
        <div class="slider-wrapper">
          <!-- section wording -->
          <section class="section-wording">
            <img class="bg-section" src="assets/img/bg-gading.jpg" alt="" />
            <div class="section-wrap">
              <div class="wording">
                <h1 data-aos="fade-right" data-aos-delay="50">
                  YOUR <br />
                  NEW NORMAL <br />
                  COMFORT PLACE
                </h1>
                <button data-aos="fade-right" data-aos-delay="150">
                  Read More
                </button>
                <div
                  class="btn-wording"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <button @click="prev()" class="prev">
                    <i class="fas fa-angle-double-left"></i>
                  </button>
                  <span>Gading Serpong</span>
                  <button @click="next()" class="next">
                    <i class="fas fa-angle-double-right"></i>
                  </button>
                </div>
              </div>
              <img
                src="assets/img/pic-gading.jpg"
                alt="tomang"
                data-aos="fade-left"
                data-aos-delay="300"
              />
            </div>
          </section>
          <!-- section gallery -->
          <section class="section-desc">
            <div class="describtion">
              <h2 data-aos="fade-up" data-aos-delay="150">GADING SERPONG</h2>
              <p data-aos="fade-up" data-aos-delay="200">
                The hidden gem cafe is located in a residential area. Kopitagram
                Tomang has a very <br />
                aesthetic and instagramable cafe area design concept. Then there
                is a been bag that <br />
                is perfect for those of you who work or hang out while sioping.
              </p>
              <p data-aos="fade-up" data-aos-delay="200">
                Then, the plus thing there is a rooftop area that is really
                cool. The balinese concept, <br />
                unfinished build and there is a qoute on every staircase.
                Guaranteed to make you very <br />
                comfortable like at home.
              </p>
            </div>
            <hr data-aos="fade-up" data-aos-delay="250" />
            <!-- gallery -->
            <swiper
              data-aos="fade-up"
              class="gallery-desc"
              ref="mySwiper"
              :options="swiperOptions"
            >
              <swiper-slide class="swiper-list">
                <a href="assets/img/area1.jpg" target="_blank"
                  ><img src="assets/img/area1.jpg"
                /></a>
              </swiper-slide>
              <swiper-slide class="swiper-list">
                <a href="assets/img/area2.jpg" target="_blank"
                  ><img src="assets/img/area2.jpg"
                /></a>
              </swiper-slide>
              <swiper-slide class="swiper-list">
                <a href="assets/img/area3.jpg" target="_blank"
                  ><img src="assets/img/area3.jpg"
                /></a>
              </swiper-slide>
              <swiper-slide class="swiper-list">
                <a href="assets/img/area4.jpg" target="_blank"
                  ><img src="assets/img/area4.jpg"
                /></a>
              </swiper-slide>
              <swiper-slide class="swiper-list">
                <a href="assets/img/area5.jpg" target="_blank"
                  ><img src="assets/img/area5.jpg"
                /></a>
              </swiper-slide>
              <swiper-slide class="swiper-list">
                <a href="assets/img/area6.jpg" target="_blank"
                  ><img src="assets/img/area6.jpg"
                /></a>
              </swiper-slide>
              <swiper-slide class="swiper-list">
                <a href="assets/img/area7.jpg" target="_blank"
                  ><img src="assets/img/area7.jpg"
                /></a>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </section>
        </div>
        <div class="slider-wrapper">
          <!-- section wording -->
          <section class="section-wording">
            <img class="bg-section" src="assets/img/bg-cinere.jpg" alt="" />
            <div class="section-wrap">
              <div class="wording">
                <h1 data-aos="fade-right" data-aos-delay="50">
                  YOUR <br />
                  NEW NORMAL <br />
                  COMFORT PLACE
                </h1>
                <button data-aos="fade-right" data-aos-delay="150">
                  Read More
                </button>
                <div
                  class="btn-wording"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <button @click="prev()" class="prev">
                    <i class="fas fa-angle-double-left"></i>
                  </button>
                  <span>Cinere</span>
                  <button @click="next()" class="next">
                    <i class="fas fa-angle-double-right"></i>
                  </button>
                </div>
              </div>
              <img
                src="assets/img/pic-tomang.jpg"
                alt="tomang"
                data-aos="fade-left"
                data-aos-delay="300"
              />
            </div>
          </section>
          <!-- section gallery -->
          <section class="section-desc">
            <div class="describtion">
              <h2 data-aos="fade-up" data-aos-delay="150">CINERE</h2>
              <p data-aos="fade-up" data-aos-delay="200">
                The hidden gem cafe is located in a residential area. Kopitagram
                Tomang has a very <br />
                aesthetic and instagramable cafe area design concept. Then there
                is a been bag that <br />
                is perfect for those of you who work or hang out while sioping.
              </p>
              <p data-aos="fade-up" data-aos-delay="200">
                Then, the plus thing there is a rooftop area that is really
                cool. The balinese concept, <br />
                unfinished build and there is a qoute on every staircase.
                Guaranteed to make you very <br />
                comfortable like at home.
              </p>
            </div>
            <hr data-aos="fade-up" data-aos-delay="250" />
            <!-- gallery -->
            <swiper
              data-aos="fade-up"
              class="gallery-desc"
              ref="mySwiper"
              :options="swiperOptions"
            >
              <swiper-slide class="swiper-list">
                <a href="assets/img/area1.jpg" target="_blank"
                  ><img src="assets/img/area1.jpg"
                /></a>
              </swiper-slide>
              <swiper-slide class="swiper-list">
                <a href="assets/img/area2.jpg" target="_blank"
                  ><img src="assets/img/area2.jpg"
                /></a>
              </swiper-slide>
              <swiper-slide class="swiper-list">
                <a href="assets/img/area3.jpg" target="_blank"
                  ><img src="assets/img/area3.jpg"
                /></a>
              </swiper-slide>
              <swiper-slide class="swiper-list">
                <a href="assets/img/area4.jpg" target="_blank"
                  ><img src="assets/img/area4.jpg"
                /></a>
              </swiper-slide>
              <swiper-slide class="swiper-list">
                <a href="assets/img/area5.jpg" target="_blank"
                  ><img src="assets/img/area5.jpg"
                /></a>
              </swiper-slide>
              <swiper-slide class="swiper-list">
                <a href="assets/img/area6.jpg" target="_blank"
                  ><img src="assets/img/area6.jpg"
                /></a>
              </swiper-slide>
              <swiper-slide class="swiper-list">
                <a href="assets/img/area7.jpg" target="_blank"
                  ><img src="assets/img/area7.jpg"
                /></a>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </section>
        </div>
      </slick>

      <section class="section-market-place">
        <div class="wrapper-market-place" data-aos="fade-up">
          <h2>MARKET PLACE</h2>
          <div
            class="logo-market-place"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a href="https://www.tokopedia.com/kopitagram" target="_blank"
              ><img src="assets/img/Tokopedia.png" alt="tokopedia-kopitagram"
            /></a>
            <a href="https://shopee.co.id/kopitagram" target="_blank"
              ><img src="assets/img/Shopee.png" alt="shopee-kopitagram"
            /></a>
            <a href="https://gofood.link/u/91llN" target="_blank"
              ><img src="assets/img/Go-Food.png" alt="gofood-kopitagram"
            /></a>
            <a
              href="https://food.grab.com/id/en/restaurant/kopitagram-jatipulo-delivery/AWgJr3cQ5b9pQDOtN6Yw"
              target="_blank"
              ><img src="assets/img/Grab.png" alt="grab-kopitagram"
            /></a>
          </div>
        </div>
        <hr data-aos="fade-up" data-aos-delay="50" />
        <div
          class="wrapper-modern-trade"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2>MODERN TRADE</h2>
          <div
            class="logo-modern-trade"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <img
              src="assets/img/Market-City.png"
              alt="market-city-kopitagram"
            />
            <img src="assets/img/Megel.png" alt="megel-kopitagram" />
            <img src="assets/img/Mbloc.png" alt="mbloc-kopitagram" />
          </div>
        </div>
      </section>
    </main>
    <!-- end content -->
    <Chatus />
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Chatus from "@/components/Chatus.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navigation,
    Slick,
    Swiper,
    SwiperSlide,
    Chatus,
    Footer,
  },
  data() {
    return {
      slickOptions: {
        infinite: true,
        autoplay: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        speed: 800,
        autoplaySpeed: 5000,
        arrows: false,
        fade: true,
        cssEase: "linear",
      },
      swiperOptions: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 120,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  methods: {
    prev() {
      this.$refs.slick.prev();
    },
    next() {
      this.$refs.slick.next();
    },
  },
};
</script>
