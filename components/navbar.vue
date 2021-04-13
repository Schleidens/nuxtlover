<template>
  <header class="sticky top-0 left-0 main-menu">
    <div class="container flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span class="ml-3 text-xl text-white font-bold">NuxtLover</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center menu">
        <a class="mr-5 menu--list">First Link</a>
        <a class="mr-5 menu--list">Second Link</a>
        <a class="mr-5 menu--list">Fourth Link</a>
        <a class="mr-5 menu--list">Third Link</a>
      </nav>
      <div class="mobile-btn">
        <div class="bar" />
        <div class="bar" />
        <div class="bar" />
      </div>
    </div>
    <div class="mobile-nav">
      <div class="py-1" role="none">
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Account settings</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Support</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">License</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.text-white{
  color: white;
}

.bar{
  color: white;
  border: 1px solid white;
  height: 1px;
  margin: 5px;
  width: 30px;
}

.mobile-nav{
  float: right;
}

.menu--list:hover{
  color: #93ebd2;
}

.menu{
  color: white;
}

.main-menu{
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);
  background-color: #00c58e;
}

</style>
