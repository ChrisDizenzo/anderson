<template>
  <div class="container relative mx-auto w-full" :class="from=='Home' ? '' : 'h-full'" id="contact">
        <div class="items-center flex flex-col h-full justify-center">
          <div class="rounded-md px-5 bg-white py-4 mx-auto" :class="from=='Home' ? '' : 'w-2/5'">
            <div class="flex flex-col text-center w-full mb-4">
              <h1
                class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
              >
                {{title}}
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-sm">
                {{description}}
              </p>
            </div>
            <div class="md:w-4/5 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-full">
                  <input
                    class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                    placeholder="Name"
                    type="text"
                    v-model="name"
                  />
                </div>
                <div class="p-2 w-full">
                  <input
                    class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                    placeholder="Email"
                    type="email"
                    v-model="email"
                  />
                </div>
                <div class="p-2 w-full">
                  <textarea
                    class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 resize-none block"
                    placeholder="Message"
                    v-model="message"
                  ></textarea>
                </div>
                <div class="p-2 w-full">
                  <button
                  @click="sendMessage"
                    class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded "
                  >
                    <div v-if="sending" class="loader"></div>
                    <span v-else>Send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    props: ['title', 'description', 'from'],
    data() {
        return {
            name: '',
            email: '',
            message: '',
            sending: false,
        }
    },
    computed: {
        isMessageEmpty() {
            if(this.name=='') return true
            if(this.email=='') return true
            if(this.message=='') return true
            return false
         },
    },
    methods: {
        sendMessage() {
            console.log('here it is')
            if(this.isMessageEmpty) return
            this.sending = true
            let out = {
                name: this.name,
                email: this.email,
                message: this.message,
                from: this.from,
                time: new Date().toTimeString(),
            }
            this.$store.dispatch('addMessage', out).then(() =>{
                this.sending = false
            })
        },
    },
}
</script>

<style>
.loader {
  border: 3px solid #f3f3f3; /* Light grey */
  border-top: 3px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>