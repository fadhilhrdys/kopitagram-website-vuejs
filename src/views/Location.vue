<template>
  <div class="location">
    <Navigation />
    <!-- main content -->
    <main>
      <div class="container-location">
        <div class="wrapper-location">
          <div class="title">
            <h1 data-aos="fade-up" data-aos-delay="100">
              FIND US ON GOOGLE MAPS
            </h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Here is more of comfort place for you
            </p>
          </div>
          <div class="box-location" data-aos="fade-up" data-aos-delay="300">
            <gmap-map
              ref="mymap"
              :center="mapCenter"
              :zoom="11"
              class="maps"
              id="maps"
            >
              <gmap-info-window
                :options="infoOptions"
                :position="infoPosition"
                :opened="infoOpened"
                @closeclick="infoOpened = false"
              >
                <div v-html="infoContent"></div>
              </gmap-info-window>

              <gmap-marker
                v-for="(item, key) in stores"
                :key="key"
                :position="getPosition(item)"
                :clickable="true"
                :icon="markerOptions"
                @click="toggleInfo(item, key)"
              >
              </gmap-marker>
            </gmap-map>
            <div class="location">
              <h3>ALL SHOPS</h3>
              <div class="box-location-list">
                <div class="location-list">
                  <div class="location-desc">
                    <h5>KOPITAGRAM - TOMANG</h5>
                    <p>
                      Jl. Katsuri No.22, RT.8/RW.1, Jatipulo, Kec. Palmerah,
                      Jakarta Barat, 11430
                    </p>
                    <a href="https://g.page/KopitagramTomang?share"
                      >Direction</a
                    >
                  </div>
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="location-list">
                  <div class="location-desc">
                    <h5>KOPITAGRAM - GADING SERPONG</h5>
                    <p>
                      Jl. Kelapa Gading Barat Block CB3, No.5, Tangerang,
                      Banten, 15810
                    </p>
                    <a href="https://g.page/KopitagramGadingSerpong?share"
                      >Direction</a
                    >
                  </div>
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="location-list">
                  <div class="location-desc">
                    <h5>KOPITAGRAM - DEPOK</h5>
                    <p>Jl. Jawa No.182, Cinere, Depok City, West Java, 16514</p>
                    <a href="https://g.page/KopitagramCinere?share"
                      >Direction</a
                    >
                  </div>
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="location-list">
                  <div class="location-desc">
                    <h5>KOPITAGRAM - CIBUBUR</h5>
                    <p>
                      Ruko Maison Avenue, Kota Wisata Cibubur, Limus Nunggal,
                      Cileungsi, Bogor, West Java, 16820
                    </p>
                    <a href="https://goo.gl/maps/GKrNhkCF1NBbNLCt6"
                      >Direction</a
                    >
                  </div>
                  <i class="fas fa-map-marker-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- end main content -->
    <Chatus />
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Chatus from "@/components/Chatus.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Location",
  components: {
    Navigation,
    Chatus,
    Footer,
  },
  data() {
    return {
      mapCenter: { lat: -6.2295712, lng: 106.759478 },
      stores: {
        0: {
          name: "KOPITAGRAM TOMANG",
          lat: "-6.1791992",
          lng: "106.7988153",
        },
        1: {
          name: "KOPITAGRAM GADING SERPONG",
          lat: "-6.2330607",
          lng: "106.6254673",
        },
        2: {
          name: "KOPITAGRAM CINERE",
          lat: "-6.3497775",
          lng: "106.776242",
        },
      },
      infoPosition: null,
      infoContent: "",
      infoOpened: false,
      infoCurrentKey: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
      markerOptions: {
        url: "../assets/img/logo.png",
        scaledSize: {
          width: 36,
          height: 36,
        },
      },
    };
  },
  methods: {
    getPosition: (marker) => {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng),
      };
    },
    toggleInfo: function (marker, key) {
      this.infoPosition = this.getPosition(marker);
      this.infoContent = this.getInfoWindowContent(marker);
      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    },
    getInfoWindowContent: function (marker) {
      return `<strong style="color:#000">${marker.name}</strong>
              <br>
              <a style="color:#000; font-size:12px" href ="https://g.page/KopitagramTomang?share">Get Directions</a>`;
    },
  },
};
</script>

<style>
</style>