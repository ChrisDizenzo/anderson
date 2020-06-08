<template>
    <div class="h-screen mt-16 bg-white w-full items-center flex flex-col">
        <section class="text-gray-700 body-font">
            <div class="container px-5 py-12 flex flex-col items-center mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <p class="text-2xl md:text-5xl font-light text-blue-500">Venture Capital</p>
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

            <section class="text-gray-700 body-font relative" id="contact">
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
            </section>
            
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

</style>