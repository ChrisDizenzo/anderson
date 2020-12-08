<template>
  <div class="h-screen mt-16 bg-white w-full items-center flex flex-col">
    <section class="text-gray-700 body-font w-full sm:w-3/4">
      <div
        class="w-full py-12 h-screen mb-12 flex flex-col items-center mx-auto"
      >
        <div class="flex flex-col text-center w-full mb-12">
          <div class="w-full h-64 lg:h-84 overflow-hidden relative">
            <img
              class="min-w-full"
              style="top: 50%; transform: translateY(-30%)"
              src="https://images.unsplash.com/photo-1526554850534-7c78330d5f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80"
              alt=""
            />
            <div
              class="absolute top-0 flex flex-col justify-center h-full w-full z-30"
            >
              <p class="text-3xl md:text-5xl font-bold text-white">Messages</p>
            </div>
            <div class="absolute top-0 w-full h-full bg-black opacity-50"></div>
          </div>

          <div class="w-32 mx-auto mt-6 h-1 bg-yellow-500"></div>

          <div class="w-full mt-3 flex justify-center">
            Sending messages is currently:
            <button @click="flipMessageSending" class="ml-2 text-white px-1 rounded" :class="messageObj.isOn ? 'bg-blue-500' : 'bg-red-500'">{{ messageObj.isOn ? "ON" : "OFF" }}</button>
          </div>
        </div>
        <div class="flex flex-wrap w-full -m-4 mb-12">
          <div
            v-for="(msg, ind) in reversedMessage"
            :key="ind"
            class="flex flex-col shadow-lg w-1/4 pr-12 pb-12 pl-2 pt-2"
          >
            <h1 class="w-full text-left pl-1">
              {{ msg.name }} at {{ msg.time }}
            </h1>
            <h1 class="w-full text-left text-sm pl-1 mb-2">{{ msg.email }}</h1>
            <h1 class="w-full text-left text-sm pl-1">{{ msg.message }}</h1>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vcEditor: false,
      vcEditorInfo: {
        url: "",
      },
      vcEditorInd: -1,
      vcCreator: false,
    };
  },
  methods: {
      flipMessageSending() {
          this.$store.dispatch('flipMessageSending')
      },
  },
  computed: {
    messages() {
      return this.$store.getters.getMessages.arr;
    },
    messageObj() {
      return this.$store.getters.getMessages;
    },
    reversedMessage() {
      return this.messages.slice().reverse();
    },
  },
  watch: {},
};
</script>

<style>
.bg-image-1 {
  background-image: url("../assets/business.jpg");
  left: 0px;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>