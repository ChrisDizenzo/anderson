<template>
  <div>
    <div
      class="relative pb-16 flex content-center items-center justify-center"
      style="min-height: 75vh"
    >
      <div
        class="absolute block top-0 w-full h-full bg-center bg-cover bg-image"
        :style="{ 'background-position-y': scrollDist * -350 - 50 + 'px' }"
      >
        <span
          id="blackOverlay"
          class="left-0 w-full h-full absolute opacity-50 bg-black"
        >
        </span>
      </div>
      <!-- <div class="absolute sm:hidden block top-0 w-full h-full overflow-x-hidden bg-center bg-cover bg-image">
        <span id="blackOverlay" class="left-0 w-full h-full absolute opacity-50 bg-black">
        </span>
        <img src="../assets/ucla_anderson.jpg" class="h-full w-auto " alt="">
      </div> -->

      <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div
            class="w-full lg:w-full px-4 ml-auto mr-auto flex flex-col items-center text-center"
          >
            <p
              class="mb-2 text-2xl md:text-4xl text-white font-bold border-b-2 border-white lg:w-72"
              @click="updateVariable('title')"
            >
              <span v-html="home.title"></span>
            </p>
            <p
              class="text-2xl md:text-5xl text-white font-bold"
              @click="updateVariable('titleSub')"
            >
              <span v-html="home.titleSub"></span>
            </p>
            <a
              href="https://www.anderson.ucla.edu/apply"
              class="text-lg mt-8 text-white bg-blue-600 hover:bg-blue-700 rounded px-8 py-2"
              >Apply to Anderson</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="w-full flex flex-col items-center">
      <section class="text-gray-700  body-font">
      <div class="container px-5 py-12 sm:py-24 mx-auto">
        <div class="lg:w-3/4 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900" @click="updateVariable('learn')">{{home.learn}}</h1>
          <button v-scroll-to="'#learnmore'" class="flex-shrink-0 text-white border-0 mx-auto sm:x-0 py-2 px-8 bg-teal-500 focus:outline-none hover:bg-blue-700 rounded text-lg mt-10 sm:mt-0" >Learn More</button>
        </div>
      </div>
    </section>
    </div> -->

    <section class="text-gray-700 bg-gray-200 body-font">
      <div
        class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center"
      >
        <div
          class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center items-center"
        >
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="../assets/EA_logo.png"
          />
        </div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900"
            @click="updateVariable('betterTitle')"
          >
            {{ home.betterTitle }}
          </h1>
          <p
            class="mb-8 text-gray-900 leading-relaxed"
            @click="updateVariable('betterDesc')"
          >
            <span v-html="home.betterDesc"></span>
          </p>
        </div>
      </div>
    </section>

    <div
      id="learnmore"
      class="w-full flex bg-gray-100 pt-16 flex-col justify-center items-center"
    >
      <section class="text-gray-700 body-font">
        <div class="container px-5 pt-12 pb-24 mx-auto md:mx-0">
          <div class="flex flex-col text-center w-full mb-20">
            <h1
              class="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900"
              @click="updateVariable('whatWeDoTitle')"
            >
              {{ home.whatWeDoTitle }}
            </h1>
            <p
              class="lg:w-2/3 mx-auto text=gray-600 leading-relaxed"
              @click="updateVariable('whatWeDoDesc')"
            >
              {{ home.whatWeDoDesc }}
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 mx-auto md:mx-0 lg:w-1/3 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg md:w-full h-56 object-cover object-center mb-4"
                  src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                />
                <div class="w-full">
                  <h2
                    class="title-font font-bold text-lg text-gray-900"
                    @click="updateVariable('whatWeDoTitle1')"
                  >
                    {{ home.whatWeDoTitle1 }}
                  </h2>
                  <p
                    class="text-gray-600 mt-4"
                    @click="updateVariable('whatWeDoDesc1')"
                  >
                    {{ home.whatWeDoDesc1 }}
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                        ></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                        ></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                        ></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 mx-auto md:mx-0 lg:w-1/3 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://images.unsplash.com/photo-1563807894768-f28bee0d37b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                />
                <div class="w-full">
                  <h2
                    class="title-font font-bold text-lg text-gray-900"
                    @click="updateVariable('whatWeDoTitle2')"
                  >
                    {{ home.whatWeDoTitle2 }}
                  </h2>
                  <p
                    class="text-gray-600 mt-4"
                    @click="updateVariable('whatWeDoDesc2')"
                  >
                    {{ home.whatWeDoDesc2 }}
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                        ></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                        ></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                        ></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 mx-auto md:mx-0 lg:w-1/3 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                />
                <div class="w-full">
                  <h2
                    class="title-font font-bold text-lg text-gray-900"
                    @click="updateVariable('whatWeDoTitle3')"
                  >
                    {{ home.whatWeDoTitle3 }}
                  </h2>
                  <p
                    class="text-gray-600 mt-4"
                    @click="updateVariable('whatWeDoDesc3')"
                  >
                    {{ home.whatWeDoDesc3 }}
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                        ></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                        ></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                        ></path>
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

    <div
      ref="img2"
      class="relative pb-32 flex content-center items-center justify-center"
      style="min-height: 75vh"
    >
      <div
        class="absolute block top-0 w-full h-full bg-center bg-cover bg-image-1"
        :style="{ 'background-position-y': (scrollDist - 2) * -50 + 'px' }"
      >
        <span
          id="blackOverlay"
          class="left-0 w-full h-full absolute opacity-50 bg-black"
        >
        </span>
      </div>

      <div
        class="absolute sm:hidden block top-0 w-full h-full bg-center bg-cover bg-image-1"
      >
        <span
          id="blackOverlay"
          class="left-0 w-full h-full absolute opacity-50 bg-black"
        >
        </span>
      </div>

      <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-full px-4 ml-auto mr-auto text-center">
            <h1
              class="text-white font-bold text-2xl sm:text-5xl uppercase"
              @click="updateVariable('title2')"
            >
              <span v-html="home.title2"></span>
            </h1>
            <button
              v-scroll-to="'#contact'"
              class="flex-shrink-0 text-white border-0 py-2 px-8 bg-teal-500 focus:outline-none hover:bg-blue-700 rounded-lg text-lg mt-4 sm:mt-8"
              @click="updateVariable('title2Button')"
            >
              {{ home.title2Button }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- <section class="text-gray-700 mb-12 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex items-center lg:w-full mx-auto border-b pb-16 mb-16 border-gray-200 sm:flex-row flex-col">
          <div class="w-3/4 sm:w-3/4 sm:hidden lg:inline-flex items-center justify-center rounded-full text-teal-500">
            <img alt="team" class="rounded-lg md:w-auto w-full md:h-56 object-cover object-center mb-4" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">

          </div>
          <div class="flex-grow lg:w-1/2 sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-xl title-font font-bold mb-2" @click="updateVariable('benefits1Title')">{{home.benefits1Title}}</h2>
            <p class="leading-relaxed text-base" @click="updateVariable('benefits1Desc')"> {{home.benefits1Desc}}</p>
          
          </div>
        </div>
        <div class="flex flex-col-reverse sm:flex-row items-center lg:w-full mx-auto border-b pb-16 mb-16 border-gray-200">
          <div class="flex-grow lg:w-1/2 sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-xl title-font font-bold mb-2" @click="updateVariable('benefits2Title')">{{home.benefits2Title}}</h2>
            <p class="leading-relaxed text-base" @click="updateVariable('benefits2Desc')"><span v-html="home.benefits2Desc"></span>  </p>
          </div>
          <div class="w-3/4 sm:w-3/4 sm:hidden lg:inline-flex items-center justify-center rounded-full text-teal-500">
            <img alt="team" class="flex-shrink-0 rounded-lg w-auto h-56 object-cover object-center mb-4" src="https://images.unsplash.com/photo-1559589689-577aabd1db4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">

          </div>
        </div>
        <div class="flex items-center lg:w-full mx-auto sm:flex-row flex-col">
          <div class="w-3/4 sm:w-3/4 sm:hidden lg:inline-flex items-center justify-center rounded-full text-teal-500">
            <img alt="team" class="flex-shrink-0 rounded-lg w-auto h-56 object-cover object-center mb-4" src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">

          </div>
          <div class="flex-grow lg:w-1/2 sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-xl title-font font-bold mb-2" @click="updateVariable('benefits3Title')">{{home.benefits3Title}}</h2>
            <p class="leading-relaxed text-base" @click="updateVariable('benefits3Desc')"> <span v-html="home.benefits3Desc"></span> </p>
            
          </div>
        </div>
      </div>
    </section> -->

    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1
            class="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900"
            @click="updateVariable('eventsTitle')"
          >
            {{ home.eventsTitle }}
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div
              class="h-full w-full sm:w-auto border-2 border-gray-200 rounded-lg overflow-hidden"
            >
              <a
                onclick="window.open(this.href); return false;"
                href="https://uclaanderson.campusgroups.com/entrepreneur/rsvp?event_uid=a0d3dedaec0263f6e21866e1e38db58e"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://uclaanderson.campusgroups.com/upload/uclaanderson/2020/r1_image_upload_996149_DoorDash1jpg_514122819.jpeg"
                  alt="blog"
                />
              </a>

              <div class="p-6">
                <p
                  class="leading-relaxed mb-1 text-sm"
                  @click="updateVariable('event1Time')"
                >
                  {{ home.event1Time }}
                </p>

                <a
                  onclick="window.open(this.href); return false;"
                  href="https://uclaanderson.campusgroups.com/entrepreneur/rsvp?event_uid=a0d3dedaec0263f6e21866e1e38db58e"
                  class="hover:underline title-font text-xl font-bold text-teal-500 mb-3"
                  >{{ home.event1Title }}</a
                >
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div
              class="h-full border-2 border-gray-200 rounded-lg overflow-hidden"
            >
              <a
                onclick="window.open(this.href); return false;"
                href="https://uclaanderson.campusgroups.com/entrepreneur/rsvp?event_uid=79997a59d521ebdea0c8ebcd6374a1f9"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://uclaanderson.campusgroups.com/upload/uclaanderson/2020/r1_image_upload_996343_Screen_Shot_20200515_at_10742_AM_51513571.png"
                  alt="blog"
                />
              </a>

              <div class="p-6">
                <p
                  class="leading-relaxed mb-1 text-sm"
                  @click="updateVariable('event2Time')"
                >
                  {{ home.event2Time }}
                </p>

                <a
                  onclick="window.open(this.href); return false;"
                  href="https://uclaanderson.campusgroups.com/entrepreneur/rsvp?event_uid=79997a59d521ebdea0c8ebcd6374a1f9"
                  class="hover:underline title-font text-xl font-bold text-teal-500 mb-3"
                  >{{ home.event2Title }}</a
                >
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div
              class="h-full border-2 border-gray-200 rounded-lg overflow-hidden"
            >
              <a
                onclick="window.open(this.href); return false;"
                href="https://uclaanderson.campusgroups.com/entrepreneur/rsvp?event_uid=f176124975303f8e05321d5089b63de9"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://uclaanderson.campusgroups.com/upload/uclaanderson/2020/r1_image_upload_1208018_Screenshot_20200519_203609_519233828.png"
                  alt="blog"
                />
              </a>

              <div class="p-6">
                <p
                  class="leading-relaxed mb-1 text-sm"
                  @click="updateVariable('event3Time')"
                >
                  {{ home.event3Time }}
                </p>

                <a
                  onclick="window.open(this.href); return false;"
                  href="https://uclaanderson.campusgroups.com/entrepreneur/rsvp?event_uid=f176124975303f8e05321d5089b63de9"
                  class="hover:underline title-font text-xl font-bold text-teal-500 mb-3"
                  >{{ home.event3Title }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="text-gray-700 body-font relative">
      <div class="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?q=110%20Westwood%20Plaza%20Los%20Angeles%2C%20CA%2C%2090095&t=&z=15&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
      <div class="container px-5 py-32 mx-auto flex">
        <div
          class="lg:w-1/3 md:w-1/2 bg-white hover:shadow-xl shadow-lg rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10"
        >
          <Contact :from="'Home'" :title="home.contactTitle" :description="home.contactDesc" />
          
        </div>
      </div>
      
    </section>

    <section class="text-gray-700 body-font flex flex-col">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-wrap shadow-xl -m-4 text-center">
          <div class="p-4 border-r md:w-1/4 sm:w-1/2 w-full">
            <div class="px-4 py-2 flex items-center justify-center rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-teal-500 mr-10 w-12 h-12 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <div class="flex flex-col items-start">
                <h2
                  class="title-font font-bold text-4xl text-blue-600"
                  @click="updateVariable('val1Value')"
                >
                  {{ home.val1Value }}
                </h2>
                <p
                  class="leading-relaxed -mt-2 text-blue-700"
                  @click="updateVariable('val1Title')"
                >
                  {{ home.val1Title }}
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 border-r md:w-1/4 sm:w-1/2 w-full">
            <div class="px-4 py-2 flex items-center justify-center rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-teal-500 mr-10 w-12 h-12 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <div class="flex flex-col items-start">
                <h2
                  class="title-font font-bold text-4xl text-blue-600"
                  @click="updateVariable('val2Value')"
                >
                  {{ home.val2Value }}
                </h2>
                <p
                  class="leading-relaxed -mt-2 text-blue-700"
                  @click="updateVariable('val2Title')"
                >
                  {{ home.val2Title }}
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 border-r md:w-1/4 sm:w-1/2 w-full">
            <div class="px-4 py-2 flex items-center justify-center rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-teal-500 mr-10 w-12 h-12 inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"
                ></path>
              </svg>
              <div class="flex flex-col items-start">
                <h2
                  class="title-font font-bold text-4xl text-blue-600"
                  @click="updateVariable('val3Value')"
                >
                  {{ home.val3Value }}
                </h2>
                <p
                  class="leading-relaxed -mt-2 text-blue-700"
                  @click="updateVariable('val3Title')"
                >
                  {{ home.val3Title }}
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="px-4 py-2 flex items-center justify-center rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-teal-500 mr-10 w-12 h-12 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                <path
                  d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
                ></path>
              </svg>
              <div class="flex flex-col items-start">
                <h2
                  class="title-font font-bold text-4xl text-blue-600"
                  @click="updateVariable('val4Value')"
                >
                  {{ home.val4Value }}
                </h2>
                <p
                  class="leading-relaxed -mt-2 text-blue-700"
                  @click="updateVariable('val4Title')"
                >
                  {{ home.val4Title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="text-gray-700 body-font">
      <div class="container px-5 mx-auto"></div>
      <div class="bg-teal-500">
        <div
          class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col"
        >
          <img src="../assets/group11.png" class="w-48 h-auto" alt="" />

          <button
            @click="flipAdmin"
            v-if="isAdmin"
            class="text-sm text-white sm:ml-6 text-green sm:mt-0 mt-4"
          >
            Admin Mode: ON
          </button>
          <button
            @click="flipAdmin"
            v-if="!isAdmin"
            class="text-sm text-white sm:ml-6 sm:mt-0 mt-4"
          >
            Admin Mode: OFF
          </button>
          <span
            class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
          >
            <a class="text-gray-200">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-200">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-200">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-200">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
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
import firebase from "firebase";
import Contact from '../components/Contact'

export default {
  components: {
    Contact
  },
  name: "Home",
  data() {
    return {
      imgHeight: undefined,
      scrollDist: 0,
      img2Height: 0,
      // home: {
      //   title: 'Anderson Entrepreneur Association',
      //   titleSub: 'The official entrepreneur assoication website for UCLA Anderson'
      //   learn: 'Learn more about how we\'re using a business-minded approach to changing the world',
      //   whatWeDoTitle: 'WHAT WE DO',
      //   whatWeDoDesc: 'We\'re an ever-expanding group of like minded entrepreneurs.',
      //   betterTitle: 'Better than ever before',
      //   betterDesc: 'With more than 600 members, the Entrepreneur Association (EA) is among the largest student organizations at UCLA Anderson. <br> <br> The EA fosters the entrepreneurial and venture community on campus through a wide range of initiatives. The organization works closely with the Harold and Pauline Price Center for Entrepreneurship & Innovation, which provides curriculum, mentoring relationships and educational programs that prepare MBA candidates for the challenges of management in entrepreneurial environments. <br> <br> The EA takes advantage of its vast resources to hold over 50 events each year, including hands-on workshops, intimate networking events with successful entrepreneurs and local startups, and a world-class business plan competition',
      //   whatWeDoTitle1: 'Founders',
      //   whatWeDoDesc1: 'Do you have a burning passion for an idea? Be a part of a community of founders tackling a diverse set of exciting problems spanning every industry. Access resources to help with fundraising, building a team, achieving growth, and managing your startup operations. Join the startup tribe!',
      //   whatWeDoTitle2: 'Startups',
      //   whatWeDoDesc2: 'Do you have a burning passion for an idea? Be a part of a community of founders tackling a diverse set of exciting problems spanning every industry. Access resources to help with fundraising, building a team, achieving growth, and managing your startup operations. Join the startup tribe!',
      //   whatWeDoTitle3: 'VC',
      //   whatWeDoDesc3: 'Do you have a burning passion for an idea? Be a part of a community of founders tackling a diverse set of exciting problems spanning every industry. Access resources to help with fundraising, building a team, achieving growth, and managing your startup operations. Join the startup tribe!',
      //   benefits1Title: 'Get in the loop',
      //   benefits1Desc: 'We provide members with direct access to successful entrepreneurs, startups, venture capititalists, and potential partners in both the UCLA Anderson alumni community and the broader Los Angeles entrepreneurial ecosystem through regular dinners for eight, speaker series, ELabs workshops, and our flagship annual event, the create conference.',
      //   benefits2Title: 'Expanded investment opportunities',
      //   benefits2Desc: 'Members of the Entrepreneur Association are consistently successful when seeking investment during their time at Anderson through our strong connection to private investors in our alumni community. Together, EA and the Price Center facilitate formal opportunities for you to gain exposure to your growing businesses and you as a developing entrepreneur. <br> <br> Two primary examples are our annual Knapp Business Plan Competition and various fellowships provided through generous alumni and Anderson affiliates which provide essential early-stage capital for students. ',
      //   benefits3Title: 'Experience Not Required',
      //   benefits3Desc: 'Even if you come to UCLA Anderson without a fully developed business idea, EA will coordinate workshops and mentorship programs so that you can take your idea from scratch to a completed business plan - not to mention the possibility of getting some funding to give you a real shot at starting your business. <br> <br> No matter what stage you are in your entrepreneurial career, EA will support you and will connect you to the right people and resoures to catalyze your business and entrepreneurial growth.',
      //   eventsTitle: 'Upcoming Events',
      //   event1Time: 'May 28 | 11:30am - 12:30pm',
      //   event1Title: 'Virtual DOJ w/ Max Nimaroff @ Doordash',
      //   event1Img: 'https://uclaanderson.campusgroups.com/upload/uclaanderson/2020/r1_image_upload_996149_DoorDash1jpg_514122819.jpeg',
      //   event2Time: 'May 28 | 7:30pm - 9:30pm',
      //   event2Title: '[EA x AWC] - Wine Tasting Experience with Eliqs',
      //   event2Img: 'https://uclaanderson.campusgroups.com/upload/uclaanderson/2020/r1_image_upload_996343_Screen_Shot_20200515_at_10742_AM_51513571.png',
      //   event3Time: 'Jun 16 | 6:30pm - 8:30pm',
      //   event3Img: 'https://uclaanderson.campusgroups.com/upload/uclaanderson/2020/r1_image_upload_1208018_Screenshot_20200519_203609_519233828.png',
      //   event3Title: '[FEMBA] BCO Digital Mixer',
      //   title2: 'LET\'S GET THIS BREAD. <br> TOGETHER',
      //   title2Button: 'Join Us',
      //   contactTitle: 'Contact Us',
      //   contactDesc: 'If you\'re a student, VC, or faculty member. Fill out the form below and we will get back to you within 24 hours.',
      //   contactButton: 'Send Message',
      //   membersTitle: 'Members Benefits',
      //   val1Title: 'Officers',
      //   val1Value: '56',
      //   val2Title: 'Members',
      //   val2Value: '444',
      //   val3Title: 'Email/News Letters ',
      //   val3Value: '541',
      //   val4Title: 'Events',
      //   val4Value: '211',

      // }
    };
  },
  methods: {
    onScroll() {
      this.scrollDist = window.scrollY / window.innerHeight;
    },
    updateVariable(val) {
      if (this.isAdmin)
        this.$store.commit("updateVariable", {
          documentName: "Home",
          variable: val,
          value: this.home[val],
        });
    },
    flipAdmin() {
      if (!this.isAdmin) {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope("profile");
        provider.addScope("email");
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            // var user = result.user
            if (result.user.email == "achang326@gmail.com" || result.user.email == "andrewdizenzojhu@gmail.com" ) {
              this.$store.commit("flipAdmin");
            }

            // ...
          })
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
          });
      } else {
        this.$store.commit("flipAdmin");
      }
    },
  },
  computed: {
    isAdmin() {
      return this.$store.getters.getIsAdmin;
    },
    home() {
      return this.$store.getters.getHome;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.onScroll);
    // this.img2Height = this.$refs.img2.offsetTop
  },
};
</script>

<style scoped>
.wrap:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.bg-image {
  background-image: url("../assets/ucla_anderson.jpg");
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