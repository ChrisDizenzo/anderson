<template>
  <div
    :class="showNavMenu ? ['nav-menu-2'] : ['nav-menu']"
    class="fixed bg-gray-200 z-50 top-0 shadow-lg w-full flex flex-col ml-auto items-center h-screen"
    :style="{ right: showNavMenu ? '0px' : '-100%' }"
  >
    <div class="flex w-full px-4 mt-4 justify-end items-center">
      <img src="../assets/group11black.png" class="mr-auto h-12 w-auto" alt="" />

      <div
        class="h-10 bg-gray-400 rounded-full w-10 flex justify-center items-center"
      >
        <svg
          class="w-4 h-4 fill-current text-gray-700 hover:text-blue-500"
          viewBox="0 0 329.26933 329"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
          />
        </svg>
      </div>
    </div>
    <div class="flex flex-col w-full px-4 mt-4 justify-start items-center">
      <div
        v-for="(navItem, ind) in navItems"
        class="w-full border-b border-gray-500 pt-4 pb-6"
        :key="ind"
        :to="navItem.route"
      >
        <router-link
          @mouseenter="dropdown = false"
          class="w-full"
          :to="navItem.route"
        >
          <p
            class="mr-4 select-none w-full lg:mr-10 font-medium text-4xl text-left cursor-pointer"
          >
            {{ navItem.name }}
          </p>
        </router-link>
      </div>
    </div>
    <div class="mt-auto mb-4 flex justify-start w-full px-4">
      <p class="text-sm font-normal">© Copyright 2020 MBA Anderson LLC</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['showNavMenu'],
  data() {
    return {
      navItems: [
        {
          name: "Startups",
          route: "/startups",
        },
        {
          name: "Founders",
          route: "/founders",
        },
        {
          name: "VC",
          route: "/vc",
        },
        {
          name: "Leadership",
          route: "/leadership",
        },
      ],
    };
  },
};
</script>

<style>


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

</style>