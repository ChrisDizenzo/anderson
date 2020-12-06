<template>
  <div id="app" style="font-family: 'Noto Sans',sans-serif">
    <!-- This is the sidebar for mobile -->
    <div :class="showNavMenu ? ['nav-menu-2'] : ['nav-menu']" class="fixed bg-gray-200 z-50 top-0 shadow-lg w-full flex flex-col ml-auto items-center h-screen" :style="{right: showNavMenu ? '0px' : '-100%'}">
      <div  class="flex w-full px-4 mt-4 justify-end items-center">
        <img src="./assets/group11black.png" class=" mr-auto h-12 w-auto" alt="">

      <div @click="showNavMenu = false"  class="h-10 bg-gray-400 rounded-full w-10 flex justify-center items-center">

        <svg  class="w-4 h-4 fill-current text-gray-700 hover:text-blue-500" viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg">
          <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/>
        </svg>
      </div>
      </div>
      <div class="flex flex-col w-full px-4 mt-4 justify-start items-center">
        <div v-for="(navItem, ind) in navItems" class="w-full border-b border-gray-500 pt-4 pb-6" :key="ind" :to="navItem.route">
        <router-link @mouseenter="dropdown = false" class="w-full" :to="navItem.route">
          <p class="mr-4 w-full lg:mr-10 font-medium text-4xl text-left cursor-pointer" >{{navItem.name}}</p>

        </router-link>
        </div>
      </div>
      <div class="mt-auto mb-4 flex justify-start w-full px-4">
        <p class='text-sm font-normal'>© Copyright 2020 MBA Anderson LLC</p>
      </div>
    </div>
    <!-- This is the screen that appears when you click on editable text -->
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
          <div v-if="getUpdating.updatingDocument != 'Home'" class="w-full flex justify-end"> 
            <button @click="newValue" class="text-sm px-2 bg-blue-500 text-white py-1 rounded mr-6"> + Add Value </button>
            <button @click="removeLeaderMode = !removeLeaderMode" class="cursor-pointer text-sm px-2 py-1 mr-4 text-black">Delete Entry Mode: {{removeLeaderMode ? 'ON' : 'OFF'}}</button>
          </div>
          <p v-if="getUpdating.updatingDocument != 'Home'" class="text-sm text-left w-full font-bold">Heading</p>
          <input v-if="getUpdating.updatingDocument != 'Home'" v-model="heading" class="border border-gray-400 focus:outline-none w-3/4 focus:border-indigo-500 text-base px-4 py-2 mb-2 resize-none block" placeholder="Input here">
          <p v-if="getUpdating.updatingDocument=='startup' || getUpdating.updatingDocument == 'VentureCapital'" class="text-sm text-left w-full font-bold">Contact Us heading</p>
          <input v-if="getUpdating.updatingDocument=='startup' || getUpdating.updatingDocument == 'VentureCapital'" v-model="contactHeading" class="border border-gray-400 focus:outline-none w-3/4 focus:border-indigo-500 text-base px-4 py-2 mb-2 resize-none block" placeholder="Input here">

           <div v-if="getUpdating.updatingDocument != 'Home'" class="w-full my-1 flex justify-between pr-6">
              <div class="flex-1 flex h-full">
                <p v-if="removeLeaderMode" class="text-left font-bold">Delete</p>
                <p class="text-left font-bold w-1/12">Order</p>

              </div>

              <div v-for="(leaderKey, ind) in Object.keys(changeArray[0]).sort()" :key="ind+1000" class="flex-1">
                <p class="text-left font-bold">{{leaderKey.charAt(0).toUpperCase() + leaderKey.slice(1)}}</p>
              </div>
            </div>

          <div v-if="getUpdating.updatingDocument == 'Home'" class="lg:w-full md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-full">
                <textarea @change="updateValue($event.target.value)" :value="getUpdatingValue" class="w-full border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block" placeholder="Message"></textarea>
              </div>
              <div class="p-2 flex justify-end w-full">
                <button @click="pushToFirebase" class="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Confirm</button>
                <button @click="cancelUpdating" class="flex mx-auto text-gray-700 hover:text-black border-gray-400 hover:border-gray-600 bg-white border-0 py-2 px-8 focus:outline-none rounded text-lg">Cancel</button>
              </div>
            </div>
          </div>
          
          <div v-else-if="getUpdating.updatingDocument != 'Home'" class="lg:w-full overflow-y-scroll md:w-2/3 mx-auto" style="max-height: 400px">
            <div v-for="(leader, ind) in changeArray" :key="ind" class="w-full my-1 flex justify-between pr-6">
              <div class="w-1/12 h-full bg-red-500">
                <p v-if="removeLeaderMode" @click="changeArray.splice(ind, 1)">X</p>
              </div>
              <select :value="ind" @change="changeSelect(ind, $event)" class="w-1/12">
                <option v-for="(val, ind3) in changeArray" :key="ind3" :value="ind3">{{ind3+1}}</option>
              </select>
              <div v-for="(leaderKey, ind4) in Object.keys(leader).sort()" :key="ind4+100" class="flex-1">
                <input @input="changeLeader(ind, leaderKey, $event.target.value)" :value="leader[leaderKey]" class="w-full border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 resize-none block" placeholder="Input here">
              </div>
              
            </div>
            
          </div>
          <div v-if="getUpdating.updatingDocument != 'Home'" class="p-2 flex justify-end w-full">
                <button @click="pushToFirebase" class="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Confirm</button>
                <button @click="cancelUpdating" class="flex mx-auto text-gray-700 hover:text-black border-gray-400 hover:border-gray-600 bg-white border-0 py-2 px-8 focus:outline-none rounded text-lg">Cancel</button>
              </div>
        </div>
      </section>

    </div>
    <!-- This is the navbar that appears at the top of the site and responds to scrolling -->
    <header style="z-index: 10000;" :class="($router.currentRoute.path=='/' && scrollDist<10) ? ['bw-white'] : scrollDist<10 ? '' : ['shadow-md', 'bg-white']" class="fixed top-0 z-10 transition duration-200 w-full text-gray-700 body-font" >
      <div class="w-full md:w-3/4 mx-auto flex flex-wrap py-5 flex-row items-center">
      <router-link to="/"> 
        <img v-if="$router.currentRoute.path=='/' && scrollDist<10" src="./assets/group11.png" class="h-12 w-auto" alt="">
        <img v-else-if="$router.currentRoute.path=='/'" src="./assets/group11black.png" class="h-12 w-auto" alt="">
        <img v-else src="./assets/group11black.png" class="h-12 w-auto" alt="">
      </router-link>
        <div @click="showNavMenu = true" class="ml-auto sm:hidden block flex justify-center items-center">
          <svg  version="1.1" class="fill-current w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g>
              <g>
                <path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20
                  C512,404.954,503.046,396,492,396z"/>
              </g>
            </g>
          </svg>
        </div>
        <div class="md:ml-auto hidden md:flex mt-2 items-end h-full justify-center">
          <div v-for="(navItem, ind) in navItems" :key="ind" :to="navItem.route">
            <div v-if="Array.isArray(navItem.dropdown)">
              <div @mouseleave="dropdown = false" @mouseenter="dropdown = true" class="relative ">
                <a :class="dropdown ? 'text-white' : ['text-gray-300', 'hover:text-white']" class="mr-8 transition duration-200 font-medium uppercase cursor-pointer">{{navItem.name}}</a>
                
                <div v-show="dropdown" :class="dropdown ? ['pointer-events-auto'] : ['opacity-0', 'pointer-events-none', '-mt-2']" class="top-0 py-1 shadow-lg mt-6 absolute w-32 bg-white animatetest flex flex-col border border-gray-200 rounded">
                  <router-link :to="navInner.route" v-for="(navInner, ind2) in navItem.dropdown" :key="ind2">
                  <div class="py-4 px-4 text-black hover:text-blue-500 cursor-pointer">
                    <p class="text-sm" style="cursor: pointer !important">{{navInner.name}}</p>
                  </div>
                  </router-link>

                </div>

              </div>
              
            </div>
            
            <router-link @mouseenter="dropdown = false" v-else :to="navItem.route">
              <a :class="$router.currentRoute.path==navItem.route ? 'text-blue-500' : ($router.currentRoute.path=='/' && scrollDist<10) ? [['text-gray-200', 'hover:text-white']] : ['text-black']" class="mr-4 lg:mr-10 transition duration-200 font-medium cursor-pointer" >{{navItem.name}}</a>

            </router-link>
            
          </div>
          <a href="https://uclaanderson.campusgroups.com/entrepreneur/club_signup" target="_blank" :class="($router.currentRoute.path=='/' && scrollDist<10) ? [['text-gray-200', 'hover:text-white']] : ['text-black']" class="mr-4 transition duration-200 lg:mr-10 font-medium cursor-pointer" >Apply to EA</a>
          
            


        </div>
      </div>
    </header>
    <!-- This is the section that loads whichever page the viewer is visiting -->
    <router-view/>
  </div>
</template>

<script>

export default {
  methods: {
    changeLeader(ind, keyChanged, val) {
      window.console.log(ind, keyChanged, val)
      this.changeArray[ind][keyChanged] = val
    },
    updateScroll() {
      this.scrollDist = window.top.scrollY
    },
    cancelUpdating() {
      this.$store.commit('cancelUpdating')
      this.changeArray = []
    },
    newValue() {
      if(this.updatingVariable.updatingDocument == 'Leadership') {
        this.changeArray.push(
      {
        name: "",
        title: "",
        img: "",
        email: "",
        quote: "",
        linkedin: "",
      }
      )
      } else if(this.updatingVariable.updatingDocument == 'startup') {
        this.changeArray.push(
      {
        name: "",
        url: "",
      }
      )
      } else if(this.updatingVariable.updatingDocument == 'Founders') {
        this.changeArray.push(
      {
        url: "",
        name: '',
        desc: '',
        team: "",
        looking: "",
      }
      )
      } else if(this.updatingVariable.updatingDocument == 'VentureCapital') {
        this.changeArray.push(
      {
        name: "",
        url: "",
      }
      )
      }
      
    },
    updateValue(val) {
      this.$store.commit('setUpdatingValue', val)
    }, 

    pushToFirebase() {
      //check to see that data is ok
      window.console.log(this.changeArray, this.heading, 'now sending!')
      this.$store.commit('pushToFirebase', {val: this.changeArray, val2: this.heading, val3: this.contactHeading})
    },
    changeSelect(prevInd, val) {
      let hold = this.changeArray.splice(prevInd,1)
      this.changeArray.splice(val.target.value, 0, hold[0])
    },
  },
  watch: {
    updatingVariable () {
      if(this.updatingVariable.updatingDocument == 'Leadership') {
        this.changeArray = this.leadership.arr.slice(0)
        this.heading = this.leadership.heading
        this.contactHeading = this.leadership.contactHeading
      } else if(this.updatingVariable.updatingDocument == 'startup') {
        this.changeArray = this.startUps.arr.slice(0)
        this.heading = this.startUps.heading
        this.contactHeading = this.startUps.contactHeading
      } else if(this.updatingVariable.updatingDocument == 'Founders') {
        this.changeArray = this.founders.arr.slice(0)
        this.heading = this.founders.heading
        this.contactHeading = this.founders.contactHeading
      } else if(this.updatingVariable.updatingDocument == 'VentureCapital') {
        this.changeArray = this.ventureCapital.arr.slice(0)
        this.heading = this.ventureCapital.heading
        this.contactHeading = this.ventureCapital.contactHeading
      }
    },
    $route (){
        this.showNavMenu = false
        window.scrollTo(0,0)
    }
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
    ventureCapital(){
      return this.$store.getters.getVentureCapital
    },
    startUps(){
      return this.$store.getters.getStartUps
    },
    founders(){
      return this.$store.getters.getFounders
    },
  },
  mounted () {
    this.$store.commit('pullFirebase')
    window.addEventListener('scroll', this.updateScroll);
  },
  data() {
    return {
      changeArray: [],
      heading: '',
      scrollDist: 0,
      contactHeading: '',
      removeLeaderMode: false,
      dropdown: false,
      modal: false,
      showNavMenu: false,
      navItems: [
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
          name: 'VC',
          route: '/vc'
        },
        {
          name: 'Leadership',
          route: '/leadership'
        },
        
      ]
    }
  }
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Inter');

  #app {
    font-family: 'Inter', Helvetica, Arial, sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

#nav {
  padding: 30px;
}

.nav-menu {
  transition: right 0.3s ease;
}

.nav-menu-2 {
  transition: right 0.3s ease;
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

.transition {
  transition-property: all;
}

.duration-200 {
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
