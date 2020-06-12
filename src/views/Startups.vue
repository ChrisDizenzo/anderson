<template>
    <div class="h-screen mt-16 bg-white w-full items-center flex flex-col">
        <section class="text-gray-700 body-font">
            <div class="container px-5 py-12 flex flex-col items-center mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <p class="text-2xl md:text-5xl font-light text-blue-500">Startups</p>
                    <p class="lg:w-3/5 mx-auto leading-relaxed text-base">Nullam vel dictum purus, nec accumsan velit. Nullam ac neque justo. Aenean tincidunt, justo et laoreet faucibus, lectus nibh molestie felis, sed maximus.</p>
                    <p class="lg:w-2/3 mx-auto leading-relaxed mt-4 text-sm" >Lorem ipsum dolor simet col <span class="text-blue-500 cursor-pointer hover:underline" v-scroll-to="'#contact'">Click here</span></p>
                    
                    <div class="w-32 mx-auto mt-6 h-1 bg-yellow-500"></div>
                
                </div>
                <div class="flex flex-wrap w-full -m-4">
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full" v-for="(company,ind) in companies" :key="ind">
                        <a class="block relative h-32 rounded overflow-hidden">
                        <div class="flex justify-center items-center w-full h-full relative">
                            <img v-if="company.site" alt="ecommerce" class="object-cover mx-auto object-center block" style="height: 75px; width: 75px;" :src="'//logo.clearbit.com/'+company.site">
                            <img v-else alt="ecommerce" class="object-cover mx-auto object-center block h-auto" style="height: 75px;" :src="company.url">
                            <div class="hover:opacity-0 cursor-pointer absolute top-0 left-0 bg-white h-full w-full opacity-25"></div>
                            
                            
                        </div>
                        </a>
                        <div class="mt-4">
                        </div>
                    </div>
                </div>
            </div>
            </section>

            <!-- <section class="text-gray-700 body-font relative" id="contact">
                <div class="w-full px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Nullam vel dictum purus, nec accumsan velit. Nullam ac neque justo. Aenean tincidunt, justo et laoreet faucibus.</p>
                    
                    
                    </div>
                    <div class="md:w-4/5 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                        <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Name" type="text">
                        </div>
                        <div class="p-2 w-1/2">
                        <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Email" type="email">
                        </div>
                        <div class="p-2 w-full">
                        <textarea class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block" placeholder="Message"></textarea>
                        </div>
                        <div class="p-2 w-full">
                        <button class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                        </div>
                    </div>
                    </div>
                </div>
            </section> -->

            <div class="relative flex content-center items-center justify-center w-full" style="min-height: 75vh;">
                <div class="absolute block top-0 w-full h-full bg-center bg-cover bg-image-1" >
                <span id="blackOverlay" class="left-0 w-full h-full absolute opacity-50 bg-black">
                </span>
                
                </div>

                <div class="absolute sm:hidden block top-0 w-full h-full bg-center bg-cover bg-image-1">
                <span id="blackOverlay" class="left-0 w-full h-full absolute opacity-50 bg-black">
                </span>
                </div>
                
                <div class="container relative mx-auto h-full">
                <div class="items-center flex flex-col h-full justify-center">
                    <div class="w-1/2 rounded-md px-5 bg-white py-4  mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Nullam vel dictum purus, nec accumsan velit. Nullam ac neque justo. Aenean tincidunt, justo et laoreet faucibus.</p>
                    
                    
                    </div>
                    <div class="md:w-4/5 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                        <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Name" type="text">
                        </div>
                        <div class="p-2 w-1/2">
                        <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Email" type="email">
                        </div>
                        <div class="p-2 w-full">
                        <textarea class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block" placeholder="Message"></textarea>
                        </div>
                        <div class="p-2 w-full">
                        <button class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                
                
                
            </div>


            <footer class="text-gray-700 body-font w-full">
            <div class="container px-5 mx-auto">
            </div>
            <div class="bg-teal-500">
                <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <img src="../assets/group11.png" class="w-48 h-auto" alt="">

                <!-- <button @click="flipAdmin" v-if="isAdmin" class="text-sm text-white sm:ml-6 text-green sm:mt-0 mt-4">Admin Mode: ON
                </button>
                <button @click="flipAdmin" v-if="!isAdmin" class="text-sm text-white sm:ml-6 sm:mt-0 mt-4">Admin Mode: OFF
                </button> -->
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a class="text-gray-200">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                    </a>
                    <a class="ml-3 text-gray-200">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                    </a>
                    <a class="ml-3 text-gray-200">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                    </a>
                    <a class="ml-3 text-gray-200">
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
    data() {
        return {
            companies: 
            [
            {
                name: 'Hiyo', 
                url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/hiyo.jpg'
            },
            {
                name: 'Wire', 
                url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/wire.jpg',
            },
            {
                name: 'Vhomes', 
                url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/vhomes.jpg'
            },
            {
                name: 'RealAppeal', 
                url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/real.jpg'
            },
            {
                name: 'Gen Beauty', 
                url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/gen.jpg'
            },
            {
                name: 'Sahara',
                url: 'https://i.imgur.com/QeYfrxi.png',
            },
            {
                name: 'Gucci', 
                site: 'Gucci.com'
            },
            
            ]
        }
    }
}
</script>

<style>
.bg-image-1 {
  background-image: url("../assets/business.jpg");
  left: 0px;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

</style>