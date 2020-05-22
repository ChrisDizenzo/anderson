<template>
  <div id="app" style="font-family: 'Noto Sans',sans-serif">
    <header v-if="$router.currentRoute.path== '/'" class="absolute top-0 z-10 w-full text-gray-700 body-font" >
      <div class="container mx-auto flex flex-wrap p-2 md:p-5 flex-col md:flex-row items-center">
        <img src="./assets/group11.png" class="w-48 h-auto" alt="">

        <div class="md:ml-auto hidden md:flex mt-2 items-end h-full justify-center">
          <div v-for="(navItem, ind) in navItems" :key="ind" :to="navItem.route">
            <div v-if="Array.isArray(navItem.dropdown)">
              <div @mouseleave="dropdown = false" @mouseenter="dropdown = true" class="relative ">
                <a :class="dropdown ? 'text-white' : ['text-gray-300', 'hover:text-white']" class="mr-8 font-medium uppercase cursor-pointer">{{navItem.name}}</a>
                
                <div v-show="dropdown" :class="dropdown ? ['pointer-events-auto'] : ['opacity-0', 'pointer-events-none', '-mt-2']" class="top-0 py-1 shadow-lg mt-6 absolute w-32 bg-white animatetest flex flex-col border border-gray-200 rounded">
                  <router-link :to="navInner.route" v-for="(navInner, ind2) in navItem.dropdown" :key="ind2">
                  <div class="py-4 px-4 text-gray-800 hover:text-blue-500 cursor-pointer">
                    <p class="text-sm uppercase" style="cursor: pointer !important">{{navInner.name}}</p>
                  </div>
                  </router-link>

                </div>

              </div>
              
            </div>
            <router-link @mouseenter="dropdown = false" v-else :to="navItem.route">
              <a class="mr-8 font-medium uppercase cursor-pointer hover:text-white text-gray-200">{{navItem.name}}</a>

            </router-link>
          </div>
            


        </div>
      </div>
    </header>
    <header v-else class="absolute top-0 z-10 w-full text-gray-700 body-font" >
      <div class="container mx-auto flex flex-wrap p-2 md:p-5 flex-col md:flex-row items-center">
        <router-link @mouseenter="dropdown = false" to="/">
          <img src="./assets/group11black.png" class="w-48 h-auto" alt="">


        </router-link>
        <div class="md:ml-auto hidden md:flex mt-2 items-end h-full justify-center">
          <div v-for="(navItem, ind) in navItems" :key="ind" :to="navItem.route">
            <div v-if="Array.isArray(navItem.dropdown)">
              <div @mouseleave="dropdown = false" @mouseenter="dropdown = true" class="relative ">
                <a :class="dropdown ? 'text-black' : ['text-gray-800', 'hover:text-black']" class="mr-8 font-medium uppercase cursor-pointer">{{navItem.name}}</a>
                
                <div v-show="dropdown" :class="dropdown ? ['pointer-events-auto'] : ['opacity-0', 'pointer-events-none', '-mt-2']" class="top-0 py-1 shadow-lg mt-6 absolute w-32 bg-white animatetest flex flex-col border border-gray-200 rounded">
                  <router-link :to="navInner.route" v-for="(navInner, ind2) in navItem.dropdown" :key="ind2">
                  <div class="py-4 px-4 text-gray-800 hover:text-blue-500 cursor-pointer">
                    <p class="text-sm uppercase" style="cursor: pointer !important">{{navInner.name}}</p>
                  </div>
                  </router-link>

                </div>

              </div>
              
            </div>
            <router-link @mouseenter="dropdown = false" v-else :to="navItem.route">
              <a class="mr-8 font-medium uppercase cursor-pointer hover:text-black text-gray-800">{{navItem.name}}</a>

            </router-link>
          </div>
            


        </div>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      dropdown: false,
      navItems: [
        {
          name: 'Home',
          route: '/'
        },
        {
          name: 'About',
          dropdown: [
            {
              name: 'Mission',
              route: '/mission'
            },
            {
              name: 'Startups',
              route: '/startups'
            },
            {
              name: 'Team',
              route: '/team'
            },
        ]
        },
        {
          name: 'VC',
          route: '/vc'
        },
        {
          name: 'Apply to Anderson',
          route: '/apply'
        },
        {
          name: 'EA',
          route: '/ea'
        },
        
      ]
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.animatetest {
    -webkit-transition: all 500ms ease-out;
    -moz-transition: all 500ms ease-out;
    -o-transition: all 500ms ease-out;
    transition: all 500ms ease-out;
}
</style>
