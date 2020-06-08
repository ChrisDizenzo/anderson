<template>
  <div id="app" style="font-family: 'Noto Sans',sans-serif">
    <div v-if="getUpdating.updatingDocument != ''" class="fixed h-screen flex items-center justify-center w-full" style="z-index:10000;">
      <div @click="cancelUpdating" class="absolute w-full h-screen bg-gray-500 opacity-75 z-0">

      </div>
      <section @keydown.esc="cancelUpdating"  class="text-gray-700 mb-20 bg-white rounded-md body-font relative">
        <div class="container pl-4 py-6 mx-auto">
          <div class="flex flex-col text-center w-full mb-6">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Edit Text</h1>
            <p class="mx-auto mb-1 leading-relaxed text-base">You are now editing the text as an administrator</p>
            <p class="leading-relaxed text-red-500 text-base">Your changes are PERMANENT.</p>
          </div>
          <div v-if="getUpdating.updatingDocument == 'Leadership'" class="w-full flex justify-end"> 
            <button @click="newLeader" class="text-sm px-2 py-1 text-black mr-6">Add Leader </button>
            <button @click="removeLeaderMode = !removeLeaderMode" class="cursor-pointer text-sm px-2 py-1 mr-4 text-black">Remove Leader Mode: {{removeLeaderMode ? 'ON' : 'OFF'}}</button>
          </div>
           <div class="w-full my-1 flex justify-between pr-6">
              <div class="w-1/12 h-full">
                <p class="text-left font-bold">Delete</p>
              </div>
              <p class="text-left font-bold w-1/12">Order</p>

              <div v-for="(leaderKey, ind) in Object.keys(leadershipHold[0])" :key="ind+1000" class="w-1/6">
                <p class="text-left font-bold">{{leaderKey.charAt(0).toUpperCase() + leaderKey.slice(1)}}</p>
              </div>
            </div>
          <div v-if="getUpdating.updatingDocument == 'Home'" class="lg:w-full md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-full">
                <textarea @input="updateValue($event.target.value)" :value="getUpdatingValue" class="w-full border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block" placeholder="Message"></textarea>
              </div>
              <div class="p-2 flex justify-end w-full">
                <button @click="pushToFirebase" class="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Confirm</button>
                <button @click="cancelUpdating" class="flex mx-auto text-gray-700 hover:text-black border border-gray-400 hover:border-gray-600 bg-white border-0 py-2 px-8 focus:outline-none rounded text-lg">Cancel</button>
              </div>
            </div>
          </div>
          
          <div v-else-if="getUpdating.updatingDocument == 'Leadership'" class="lg:w-full overflow-y-scroll md:w-2/3 mx-auto" style="max-height: 400px">
           
            <div v-for="(leader, ind) in leadershipHold" :key="ind" class="w-full my-1 flex justify-between pr-6">
              <div class="w-1/12 h-full bg-red-500">
                <p v-if="removeLeaderMode" @click="leadershipHold.splice(ind, 1)">X</p>
              </div>
              <select :value="ind" @change="changeSelect(ind, $event)" class="w-1/12">
                <option v-for="(val, ind3) in leadershipHold" :key="ind3" :value="ind3">{{ind3+1}}</option>
              </select>
              <div v-for="(leaderKey, ind2) in Object.keys(leader)" :key="ind2+100" class="w-1/6">
                <input @input="changeLeader(ind2, leaderKey, $event.target.value)" :value="leader[leaderKey]" class="w-full border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 resize-none block" placeholder="Input here">
              </div>
              
            </div>
            
          </div>
          <div v-if="getUpdating.updatingDocument == 'Leadership'" class="p-2 flex justify-end w-full">
                <button @click="pushToFirebase" class="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Confirm</button>
                <button @click="cancelUpdating" class="flex mx-auto text-gray-700 hover:text-black border border-gray-400 hover:border-gray-600 bg-white border-0 py-2 px-8 focus:outline-none rounded text-lg">Cancel</button>
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
              <a class="mr-8 font-medium uppercase cursor-pointer hover:text-white text-gray-200" >{{navItem.name}}</a>

            </router-link>
          </div>
            


        </div>
      </div>
    </header>
    <header v-else class="absolute top-0 z-10 w-full text-gray-700 body-font" >
      <div class="container mx-auto flex flex-wrap p-2 md:p-5 flex-col md:flex-row items-center">
        <router-link @mouseenter="dropdown = false" to="/">
          <img src="./assets/group11black.png" class="w-32 md:w-64 h-auto" alt="">


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
              <a class="mr-8 font-medium uppercase cursor-pointer hover:text-gray-800" :class="$router.currentRoute.path==navItem.route ? 'text-black' : 'text-gray-700'">{{navItem.name}}</a>

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
    changeLeader(ind, keyChanged, val) {
      this.leadershipHold[ind][keyChanged] = val
    },
    cancelUpdating() {
      this.$store.commit('cancelUpdating')
    },
    newLeader() {
      this.leadershipHold.push(
      {
        name: "",
        title: "",
        img: "",
        email: "",
        linkedin: "",
      }
      )
    },
    updateValue(val) {
      this.$store.commit('setUpdatingValue', val)
    }, 

    pushToFirebase() {
      this.$store.commit('pushToFirebase')
      this.$store.commit('pullFirebase')
    },
    changeSelect(prevInd, val) {
      let hold = this.leadershipHold.splice(prevInd,1)
      this.leadershipHold.splice(val.target.value, 0, hold[0])
    },
  },
  watch: {
    updatingVariable () {
      window.console.log('here i am', this.updatingVariable.updatingDocument)
      if(this.updatingVariable.updatingDocument == 'Leadership') {
        this.leadershipHold = this.leadership.slice(0)
        window.console.log('and mee')
      }
    },
  },
  computed: {
    tracking() {
      return this.$store.getters.tracking
    },
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
    leadership(){
      return this.$store.getters.getLeadership
    },
  },
  mounted () {
    this.$store.commit('pullFirebase')
  },
  data() {
    return {
      leadershipHold: [],
      removeLeaderMode: false,
      dropdown: false,
      modal: false,
      navItems: [
        {
          name: 'Home',
          route: '/'
        },
        // {
        //   name: 'About',
        //   dropdown: [
        //     {
        //       name: 'Mission',
        //       route: '/mission'
        //     },
        //     {
        //       name: 'Startups',
        //       route: '/startups'
        //     },
        //     {
        //       name: 'Team',
        //       route: '/team'
        //     },
        // ]
        // },
        {
          name: 'Startups',
          route: '/startups'
        },
        {
          name: 'Founders',
          route: '/founders'
        },
        {
          name: 'Leadership',
          route: '/leadership'
        },
        {
          name: 'VC',
          route: '/vc'
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
