import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ourstory from "../views/Ourstory.vue";
import Location from '../views/Location.vue';
import Menu from '../views/Menu.vue';
import Gallery from '../views/Gallery.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ourstory",
    name: "Ourstory",
    component: Ourstory,
  },
  {
    path: "/location",
    name: "Location",
    component: Location,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  }
];


const router = new VueRouter({
  routes,
});

// dynamic title
router.beforeEach((to, from, next) => {
  document.title = `${ process.env.VUE_APP_TITLE } - ${ to.name }`
  next()
})

export default router;
