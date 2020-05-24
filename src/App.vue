<template>
  <div id="app" style="font-family: 'Noto Sans',sans-serif">
    <div v-if="getUpdating.updatingDocument != ''" class="fixed h-screen flex items-center justify-center w-full" style="z-index:10000;">
      <div @click="cancelUpdating" class="absolute w-full h-full bg-gray-500 opacity-75 z-0">

      </div>
      <section @keydown.esc="cancelUpdating"  class="text-gray-700 mb-20 bg-white rounded-md body-font relative">
        <div class="container px-32 py-12 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Edit Text</h1>
            <p class="mx-auto mb-1 leading-relaxed text-base">You are now editing the text as an administrator</p>
            <p class="leading-relaxed text-red-500 text-base">Your changes are PERMANENT.</p>
          </div>
          <div class="lg:w-full md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-full">
                <textarea @input="updateValue($event.target.value)" :value="getUpdatingValue" class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block" placeholder="Message"></textarea>
              </div>
              <div class="p-2 flex justify-end w-full">
                <button @click="pushToFirebase" class="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Confirm</button>
                <button @click="cancelUpdating" class="flex mx-auto text-gray-700 hover:text-black border border-gray-400 hover:border-gray-600 bg-white border-0 py-2 px-8 focus:outline-none rounded text-lg">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    <header v-if="$router.currentRoute.path== '/'" class="absolute top-0 z-10 w-full text-gray-700 body-font" >
      <div class="container mx-auto flex flex-wrap p-2 md:p-5 flex-col md:flex-row items-center">
        <img src="./assets/group11.png" class="w-32 md:w-64 h-auto" alt="">

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
  methods: {
    cancelUpdating() {
      this.$store.commit('cancelUpdating')
    },
    updateValue(val) {
      this.$store.commit('setUpdatingValue', val)
    }, 
    pushToFirebase() {
      this.$store.commit('pushToFirebase')
      this.$store.commit('pullFirebase')
    },
  },
  computed: {
    updatingVariable () {
      return this.$store.getters.getUpdating
    },
    isSending() {
      return this.$store.getters.getIsSending
    },
    getUpdating () {
      return this.$store.getters.getUpdating
    },
    getUpdatingValue () {
      return this.$store.getters.getUpdatingValue
    },
  },
  mounted () {
    this.$store.commit('pullFirebase')
  },
  data() {
    return {
      dropdown: false,
      modal: false,
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
