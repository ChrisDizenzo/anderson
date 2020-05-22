<template>
  <div>
    

    <div class="relative pb-32 flex content-center items-center justify-center" style="min-height: 75vh;">
      <div class="absolute top-0 w-full h-full bg-center bg-cover bg-image" :style="{'background-position-y': (scrollDist*-350)+'px'}">
        <span id="blackOverlay" class="left-0 w-full h-full absolute opacity-50 bg-black">
        </span>
        <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style="height: 70px; transform: translateZ(0px);">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0" class="absolute bottom-0 overflow-hidden">
        <polygon points="2560 0 2560 100 0 100" class="text-white fill-current">
          </polygon>
        </svg> -->
      </div>
      </div>
      
      <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-full px-4 ml-auto mr-auto text-center">
            <h1 class="text-white mb-12 font-black text-2xl md:text-5xl uppercase" style="font-weight: 800"> The Official ENTREPRENEURSHIP CLUB of UCLA Anderson </h1>
            </div>
        </div>
      </div>
      
    </div>
    <div class="w-full flex flex-col items-center">
      <section class="text-gray-700  body-font">
      <div class="container px-5 py-12 sm:py-24 mx-auto">
        <div class="lg:w-3/4 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Learn more about how we're using a business-minded approach to changing the world.</h1>
          <button v-scroll-to="'#learnmore'" class="flex-shrink-0 text-white border-0 mx-auto sm:x-0 py-2 px-8 bg-teal-500 focus:outline-none hover:bg-blue-700 rounded text-lg mt-10 sm:mt-0" >Learn More</button>
        </div>
      </div>
    </section>
    </div>

    <div id="learnmore" class="w-full flex bg-gray-100  flex-col items-center">
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-12 sm:py-24 mx-auto md:mx-0">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="text-3xl font-medium title-font mb-4 text-gray-900 uppercase">What we do</h1>
          <p class="lg:w-2/3 mx-auto text=gray-600 leading-relaxed">We're an ever-expanding group of like minded entrepreneurs. </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 mx-auto md:mx-0 lg:w-1/3 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img alt="team" class="flex-shrink-0 rounded-lg md:w-full h-56 object-cover object-center mb-4" src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80">
              <div class="w-full">
                <h2 class="title-font font-bold text-lg text-gray-900">Consulting</h2>
                <p class="text-gray-600 mt-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 mx-auto md:mx-0 lg:w-1/3 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://images.unsplash.com/photo-1563807894768-f28bee0d37b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80">
              <div class="w-full">
                <h2 class="title-font font-bold text-lg text-gray-900">Communication</h2>
                <p class="text-gray-600 mt-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 mx-auto md:mx-0 lg:w-1/3 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80">
              <div class="w-full">
                <h2 class="title-font font-bold text-lg text-gray-900">Project-based</h2>
                <p class="text-gray-600 mt-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>

    
    <div ref="img2" class="relative pb-32 flex content-center items-center justify-center" style="min-height: 75vh;">
      <div class="absolute block top-0 w-full h-full bg-center bg-cover bg-image-1" :style="{'background-position-y': ((scrollDist-1.5)*-350)+'px'}">
        <span id="blackOverlay" class="left-0 w-full h-full absolute opacity-50 bg-black">
        </span>
        <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style="height: 70px; transform: translateZ(0px);">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0" class="absolute bottom-0 overflow-hidden">
          <polygon points="2560 0 2560 100 0 100" class="text-white fill-current">
            </polygon>
          </svg> -->
        </div>
      
      </div>

      <div class="absolute sm:hidden block top-0 w-full h-full bg-center bg-cover bg-image-1" :style="{'background-position-y': ((scrollDist-2.7)*-350)+'px'}">
        <span id="blackOverlay" class="left-0 w-full h-full absolute opacity-50 bg-black">
        </span>
        <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style="height: 70px; transform: translateZ(0px);">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0" class="absolute bottom-0 overflow-hidden">
          <polygon points="2560 0 2560 100 0 100" class="text-white fill-current">
            </polygon>
          </svg> -->
        </div>
      
      </div>
      
      <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-full px-4 ml-auto mr-auto text-center">
            <h1 class="text-white font-black text-2xl sm:text-5xl uppercase" style="font-weight: 800"> Let's get this bread. <br> together </h1>
            <button v-scroll-to="'#joinus'" class="flex-shrink-0 text-white border-0 py-2 px-8 bg-teal-500 focus:outline-none hover:bg-blue-700 rounded-lg text-lg mt-4 sm:mt-8" >Join Us</button>
            
            </div>
        </div>
      </div>
      
      
      
    </div>

    <div id="joinus" class="py-32 w-full flex justify-center">
      <div class="container z-10 mx-auto px-5 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">Join our growing team of entrepreneurs</h1>
            <p class="leading-relaxed text-gray-600 mt-4">Fill out this simple form and we will be sure to contact you within 24 hours about the process of joining our team.</p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Join Us</h2>
            <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2 mb-4" placeholder="Full Name" type="text">
            <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2 mb-4" placeholder="Anderson ID" type="text">
            <button class="text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg">Submit</button>
            <a class="text-xs text-gray-700 cursor-pointer hover:underline mt-3">Not a student at Anderson? Click Here</a>
          </div>
          
        </div>
    </div>
    
    <footer class="text-gray-700 body-font">
  <div class="container px-5 mx-auto">
  </div>
  <div class="bg-gray-200">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <img src="../assets/group11black.png" class="w-48 h-auto" alt="">

      <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2020 UCLA Anderson College of Business Management
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      imgHeight: undefined,
      scrollDist: 0,
      img2Height: 0,
    }
  },
  methods: {
    onScroll() {
      this.scrollDist = window.scrollY/window.innerHeight
    }
  },
  computed: {

  },
  mounted() {
    window.scrollTo(0,0)
    window.addEventListener("scroll", this.onScroll)
    this.img2Height = this.$refs.img2.offsetTop
  },
}
</script>

<style scoped>

.wrap:before {
  content:"";
  position: absolute;
  top:0;
  left:0;
  height:100%;
  width:100%;
  background: rgba(0,0,0,0.5);
  z-index:999;
}

.bg-image {
  background-image: url("../assets/LA.jpeg");
  right: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.bg-image-1 {
  background-image: url("../assets/business.jpg");
  left: 0px;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

</style>