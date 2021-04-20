<template>
  <header class="sticky top-0 left-0 main-menu z-50">
    <div class="container flex flex-wrap p-2 sm:p-4 sm:pb-0 sm:pb-6 md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span class="ml-3 text-xl text-white font-bold">
          <nuxt-link to="/">
            <img src="../assets/img/logo.png" alt="NuxtLover" class="h-8 w-full">
          </nuxt-link>
        </span>
      </a>
      <nav class="md:ml-auto mc hidden md:flex flex-wrap items-center text-base justify-center text-white uppercase">
        <nuxt-link class="mr-5 menu--list" to="/projects">
          Projects
        </nuxt-link>
        <nuxt-link class="mr-5 menu--list" to="/">
          Video
        </nuxt-link>
        <nuxt-link class="mr-5 menu--list" to="/">
          About
        </nuxt-link>
        <nuxt-link class="mr-5 menu--list" to="https://github.com/Schleidens/nuxtlover">
          github
        </nuxt-link>
      </nav>
      <button class="mobile-btn outline-none focus-none md:hidden focus:outline-none" @click="toogle">
        <div class="bar" />
        <div class="bar" />
        <div class="bar" />
      </button>
    </div>
    <div class="mobile-nav uppercase" :class="show ? 'visible' : ''">
      <div class="py-4 px-1" role="none">
        <nuxt-link to="/projects" class="block px-4 menu--list" @click="toogle">
          Projects
        </nuxt-link>
        <nuxt-link to="/" class="block px-4 menu--list" @click="toogle">
          Video
        </nuxt-link>
        <nuxt-link to="/" class="block px-4 menu--list" @click="toogle">
          About
        </nuxt-link>
        <nuxt-link to="https://github.com/Schleidens/nuxtlover" class="block px-4 menu--list" @click="toogle">
          github
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },

  methods: {
    toogle () {
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
.bar{
  border: 1px solid white;
  background-color: white;

  height: 3px;

  margin: 5px;
  width: 30px;
}

.mc{
  margin-top: 7px;
}

.bar:nth-child(1){
  width: 15px;
}

.bar:nth-child(3){
  width: 15px;
  margin-left: 20px;
}

.mobile-btn{
  right: 10px;
  position: absolute;
  top: 20px;
}

.mobile-nav{
  float: right;
  position: absolute;

  color:white;
  background-color: #11DCA3;

  top: 50px;
  right: 50px;

  clip-path: circle(0vmax at 50% 0%);
  transition: clip-path .5s ease-in-out, 0s opacity 1s;
}

.visible{
  display: flex;

  clip-path: circle(140vmax at 50% 0%);
  transition: clip-path .5s linear;
}

.menu--list:hover{
  color: #93ebd2;
}

.main-menu{
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);
  background-color: #00c58e;
}

</style>
