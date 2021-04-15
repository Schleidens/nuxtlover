<template>
  <header class="sticky top-0 left-0 main-menu z-50">
    <div class="container flex flex-wrap p-4 md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span class="ml-3 text-xl text-white font-bold">NuxtLover</span>
      </a>
      <nav class="md:ml-auto hidden md:flex flex-wrap items-center text-base justify-center text-white">
        <a class="mr-5 menu--list">First Link</a>
        <a class="mr-5 menu--list">Second Link</a>
        <a class="mr-5 menu--list">Fourth Link</a>
        <a class="mr-5 menu--list">Third Link</a>
      </nav>
      <button class="mobile-btn outline-none focus-none md:hidden focus:outline-none" @click="toogle">
        <div class="bar" />
        <div class="bar" />
        <div class="bar" />
      </button>
    </div>
    <div class="mobile-nav" :class="show ? 'visible' : ''">
      <div class="py-1" role="none">
        <a href="#" class="block px-4 menu--list" @click="toogle">Account settings</a>
        <a href="#" class="block px-4 menu--list" @click="toogle">Support</a>
        <a href="#" class="block px-4 menu--list" @click="toogle">License</a>
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
