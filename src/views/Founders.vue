<template>
  <div class="h-screen mt-16 bg-white w-full items-center flex flex-col">
    <section class="text-gray-700 body-font w-full sm:w-3/4">
      <div class="w-full py-12 flex flex-col items-center mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <div class="w-full h-64 lg:h-84 overflow-hidden relative">
            <img
              class="min-h-64 min-w-full"
              style="
                top: 50%;
                transform: translateY(-37%);
                filter: brightness(40%);
              "
              src="https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"
              alt=""
            />
            <div
              class="absolute top-0 flex flex-col justify-center h-full w-full z-30"
            >
              <p class="text-3xl md:text-5xl font-bold text-white">Founders</p>
            </div>
          </div>
          <p class="lg:w-3/5 mt-6 mx-auto leading-relaxed text-base">
            {{ foundersData.heading }}
          </p>
          <div class="w-32 mx-auto mt-6 h-1 bg-yellow-500"></div>

          <div class="ml-auto" v-if="isAdmin">
            <button @click="createFounder" class="text-sm text-black">
              Add founder
            </button>
          </div>
        </div>
        <div class="flex flex-wrap w-full -m-4 mb-12">
          <div
            class="lg:w-1/4 md:w-1/2 p-4 w-full"
            v-for="(company, ind) in foundersData.arr"
            :key="ind"
            v-scroll-to="{ el: '#' + company.name.split(' ').join('') }"
          >
            <a class="block relative h-32 rounded overflow-hidden">
              <div
                class="flex justify-center items-center w-full h-full relative"
              >
                <img
                  v-if="company.site"
                  alt="ecommerce"
                  class="object-cover mx-auto object-center block"
                  style="height: 75px; width: 75px"
                  :src="'//logo.clearbit.com/' + company.site"
                />
                <img
                  v-else
                  alt="ecommerce"
                  class="object-cover mx-auto object-center block h-auto"
                  style="height: 75px"
                  :src="company.url"
                />
                <div
                  class="hover:opacity-0 cursor-pointer absolute top-0 left-0 bg-white h-full w-full opacity-25"
                ></div>
              </div>
            </a>
            <div class="mt-4"></div>
          </div>
        </div>

        <div class="w-32 mx-auto h-1 bg-yellow-500"></div>

        <section
          v-for="(company, ind) in foundersData.arr"
          :id="company.name.split(' ').join('')"
          :key="ind"
          class="text-gray-700 body-font"
        >
          <div
            class="container mx-auto flex px-5 py-16 border-b border-t border-gray-200 md:flex-row flex-col items-center relative"
          >
            <div class="md:w-1/4 w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded mx-auto"
                alt="hero"
                :src="company.url"
              />
            </div>
            <div
              class="md:flex-1 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
            >
              <h1
                class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
              >
                {{ company.name }}
              </h1>
              <p class="mb-4 leading-relaxed">
                <span class="font-bold text-gray-700">Description: </span>
                {{ company.desc }}
              </p>
              <p class="mb-4">
                <span class="font-bold text-gray-700">Team: </span>
                {{ company.team }}
              </p>
              <p class="mt-6 mb-2">
                <span class="font-bold p-1 rounded bg-blue-700 text-white"
                  >Looking for:</span
                >
                {{ company.looking }}
              </p>
              <div class="flex mt-12 justify-center">
                <button
                  class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                >
                  Learn More
                </button>
              </div>
            </div>
            <button
              v-if="isAdmin"
              @click="editFounder(ind)"
              class="absolute flex items-center top-0 right-0 px-3 py-2 m-2 rounded text-blue-500 hover:text-blue-700"
            >
              Edit
            </button>
          </div>
        </section>
        <section
          :class="founderEditor || founderCreator ? 'block' : 'hidden'"
          ref="editor"
          class="text-gray-700 body-font w-full"
        >
          <div
            class="container mx-auto w-full flex px-5 py-16 border-b border-t border-gray-200 md:flex-row flex-col items-center relative"
          >
            <div class="md:w-1/4 w-5/6 mb-10 md:mb-0 z-10">
              <div
                v-if="founderEditorInfo.url == ''"
                class="object-cover object-center bg-gray-200 hover:bg-gray-300 cursor-pointer rounded mx-auto h-64 flex items-center justify-center"
              >
                <input
                  type="file"
                  class="w-3/4"
                  accept="image/*"
                  @change="uploadImage($event)"
                  id="file-input"
                />
              </div>
              <div v-else class="flex flex-col items-center">
                <img
                  class="object-cover object-center rounded mx-auto"
                  alt="hero"
                  :src="founderEditorInfo.url"
                />
                <input
                  type="file"
                  class="w-3/4"
                  accept="image/*"
                  @change="uploadImage($event)"
                  id="file-input"
                />
              </div>
            </div>
            <div
              class="md:flex-1 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
            >
              <p class="mb-1 leading-relaxed text-gray-700">Name:</p>
              <input
                type="text"
                class="w-full border border-gray-200 hover:border-gray-300 focus:border-blue-400 px-2 py-1 outline-none rounded"
                v-model="founderEditorInfo.name"
              />
              <p class="mb-1 leading-relaxed text-gray-700">Description:</p>
              <textarea
                type="text"
                class="w-full border h-16 border-gray-200 hover:border-gray-300 focus:border-blue-400 px-2 py-1 outline-none rounded"
                v-model="founderEditorInfo.desc"
              />
              <p class="mb-1 leading-relaxed text-gray-700">Team:</p>
              <input
                type="text"
                class="w-full border border-gray-200 hover:border-gray-300 focus:border-blue-400 px-2 py-1 outline-none rounded"
                v-model="founderEditorInfo.team"
              />
              <p class="mt-1 leading-relaxed text-gray-700">Looking for:</p>
              <input
                type="text"
                class="w-full border border-gray-200 hover:border-gray-300 focus:border-blue-400 px-2 py-1 outline-none rounded"
                v-model="founderEditorInfo.looking"
              />
              <p class="mt-1 leading-relaxed text-gray-700">Learn More:</p>
              <input
                type="text"
                class="w-full border border-gray-200 hover:border-gray-300 focus:border-blue-400 px-2 py-1 outline-none rounded"
                v-model="founderEditorInfo.learnmore"
              />
            </div>
            <button
              v-if="isAdmin && founderEditor"
              @click="submitEditFounder"
              class="absolute flex items-center bottom-0 right-0 px-3 py-2 m-2 rounded text-white bg-blue-500"
            >
              Update
            </button>
            <button
              v-if="isAdmin && founderEditor"
              @click="removeFounder"
              class="absolute flex items-center bottom-0 left-0 px-3 py-2 m-2 rounded text-white bg-red-500"
            >
              Remove
            </button>
            <button
              v-if="isAdmin && founderCreator"
              @click="submitAddFounder"
              class="absolute flex items-center bottom-0 right-0 px-3 py-2 m-2 rounded text-white bg-blue-500"
            >
              Add
            </button>
          </div>
        </section>
      </div>
    </section>

    <footer class="text-gray-700 body-font w-full">
      <div class="container px-5 mx-auto"></div>
      <div class="bg-teal-500">
        <div
          class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col"
        >
          <img src="../assets/group11.png" class="w-48 h-auto" alt="" />

          <!-- <button @click="flipAdmin" v-if="isAdmin" class="text-sm text-white sm:ml-6 text-green sm:mt-0 mt-4">Admin Mode: ON
                </button>
                <button @click="flipAdmin" v-if="!isAdmin" class="text-sm text-white sm:ml-6 sm:mt-0 mt-4">Admin Mode: OFF
                </button> -->
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
export default {
  data() {
    return {
      founderEditor: false,
      founderEditorInd: -1,
      founderCreator: false,
      founderEditorInfo: {
        desc: "",
        looking: "",
        name: "",
        team: "",
        url: "",
      },
      img: undefined,
      founders: [
        //       {
        //       url: "https://i.imgur.com/QeYfrxi.png",
        //       name: 'Sahara',
        //       desc: 'Sahara is a SaaS platform that enables users to build physical products without downloading any software or purchasing any electronics, letting them prototype quickly and cheaply from anywhere. Our platform accomplishes this by allowing developers to connect to circuit boards, chips, and test equipment we host in the cloud.',
        //       team: "Andy Chang, UCLA Anderson 2021 Josh Kimmel, UCLA Anderson 2021 Annie Lu, UCLA Anderson 2021 Jama Mohamed, UCLA Anderson 2021 Elaine Park, UCLA Law 2021",
        //       looking: "",
        //   },
        //   {
        //       url: "http://d31hzlhk6di2h5.cloudfront.net/20200423/91/a8/3c/d0/4cbeafbed81f29bb61d0a391_262x130.jpg",
        //       name: 'RealAppeal',
        //       desc: 'For property owners who want to reduce their property taxes, realAppeal uses localized data and machine learning to file property tax appeals on your behalf, reducing your liability and in turn saving you money.',
        //       team: "Colton Pace (EMBA '21), Frank DiZenzo (EMBA '21), Maura Liebendorfer (EMBA '21)",
        //       looking: "Lawyer (real estate specialist)",
        //   },
        //   {
        //       url: "https://i.imgur.com/UosxPAK.png",
        //       name: 'Oya Apparel',
        //       desc: 'OYA Apparel is the first company to design health-inspired, direct-to-consumer leggings for a woman’s fit and lifestyle needs. Our pro-woman brand will normalize conversations around women’s health while increasing a woman’s confidence about her needs.',
        //       team: "Patrick Ayers, UCLA Anderson 2021 Mitchella Gilbert, UCLA Anderson 2021 Mac Seder, UCLA Anderson 2021 Ashley Sykora, UCLA Law 2021 Raylan Vaz, UCLA Anderson 2021",
        //       looking: "",
        //   },
        //   {
        //       url: "http://d31hzlhk6di2h5.cloudfront.net/20200423/2e/78/0f/d1/b9ec9b394d9ce5584aadb3fb_214x214.jpg",
        //       name: 'Socialite',
        //       desc: 'Socialite is an on-demand staffing platform for events and experiential marketing agencies, that uses matchmaking technology to fill shifts in real-time with promotional models, bartenders, servers and photographers. ',
        //       team: "Ania Puczylowska (EMBA '20), Matthew Cole (EMBA '20), Stephen A. Johnson (FEMBA '21), Naomi Chi (FEMBA '21)",
        //       looking: "",
        //   },
        //   {
        //       url: "http://d31hzlhk6di2h5.cloudfront.net/20200423/bb/fc/c5/20/8d98948bb19bf1b41c59e8fe_238x130.jpg",
        //       name: 'Gleam',
        //       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        //       team: "",
        //       looking: "",
        //   },
        //   {
        //       url: "http://d31hzlhk6di2h5.cloudfront.net/20200423/6a/d8/c5/6f/5e3daabd2875280bcbbb45e5_238x76.jpg",
        //       name: 'Outpace Cancer',
        //       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        //       team: "",
        //       looking: "",
        //   },
        //   {
        //       url: "http://d31hzlhk6di2h5.cloudfront.net/20200423/74/01/64/5c/f29563d13e806f8eba4a5f31_166x166.jpg",
        //       name: 'PDR Chemical',
        //       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        //       team: "",
        //       looking: "",
        //   },
        //   {
        //       url: "http://d31hzlhk6di2h5.cloudfront.net/20200423/e1/09/47/bb/51b9bcaa7b3a221f1f654df9_226x120.jpg",
        //       name: 'Protean',
        //       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        //       team: "",
        //       looking: "",
        //   },
        //   {
        //       url: "http://d31hzlhk6di2h5.cloudfront.net/20200423/4f/47/33/1e/85e04bb81b840a3d319c109b_250x88.jpg",
        //       name: 'Rest.',
        //       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        //       team: "",
        //       looking: "",
        //   },
        //   {
        //       url: "http://d31hzlhk6di2h5.cloudfront.net/20200423/93/db/e9/d5/0d760de193c6b1630a4fc61e_238x132.jpg",
        //       name: 'Wine Vision',
        //       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        //       team: "",
        //       looking: "",
        //   },
      ],
    };
  },
  methods: {
    uploadImage(event) {
      this.img = event.target.files[0];
    },
    editFounder(ind) {
      this.founderEditorInd = ind;
      this.founderEditor = true;
    },
    createFounder() {
      this.clearFounderEditor();
      this.founderCreator = true;
      setTimeout(() => {
        window.scrollTo(0, this.$refs.editor.getBoundingClientRect().top);
      }, 100);
    },
    removeFounder() {
      this.$store.commit("removeFounder", {
        ind: this.founderEditorInd,
      });
      this.clearFounderEditor();
      this.founderEditor = false;
    },
    submitEditFounder() {
      if (this.img !== undefined) {
        this.$store
          .dispatch("replaceFounderAndImage", {
            img: this.img,
            founderInfo: this.founderEditorInfo,
            ind: this.founderEditorInd
          })
          .then(() => {
            this.clearFounderEditor();
            this.founderEditor = false;
            this.img = "";
          });
      } else {
        this.$store
          .commit("editFounder", {
            founderData: this.founderEditorInfo,
            ind: this.founderEditorInd,
          })
            this.clearFounderEditor();
            this.founderEditor = false;
            this.img = "";
      }
    },
    submitAddFounder() {
      if (this.founderEditorInfoEmpty) {
        return;
      }
      this.$store
        .dispatch("addFounderAndImage", {
          img: this.img,
          founderInfo: this.founderEditorInfo,
        })
        .then(() => {
          this.clearFounderEditor();
          this.img = "";
        });
    },
    clearFounderEditor() {
      this.founderEditorInfo = {
        desc: "",
        looking: "",
        name: "",
        team: "",
        url: "",
        learnmore: "",
      };
    },
  },
  computed: {
    foundersData() {
      return this.$store.getters.getFounders;
    },
    isAdmin() {
      return this.$store.getters.getIsAdmin;
    },
    founderEditorInfoEmpty() {
      if (this.founderEditorInfo.desc == "") return true;
      if (this.founderEditorInfo.name == "") return true;
      return false;
    },
  },
  watch: {
    founderEditor() {
      if (this.founderCreator) this.founderCreator = false;
      if (this.founderEditor) {
        this.founderEditorInfo = {
          desc: this.foundersData.arr[this.founderEditorInd].desc,
          looking: this.foundersData.arr[this.founderEditorInd].looking,
          name: this.foundersData.arr[this.founderEditorInd].name,
          team: this.foundersData.arr[this.founderEditorInd].team,
          url: this.foundersData.arr[this.founderEditorInd].url,
        };
      }
    },
    founderCreator() {
      if (this.founderEditor) this.founderEditor = false;
      if (this.founderCreator) {
        this.clearFounderEditor();
      }
    },
  },
};
</script>

<style>
</style>