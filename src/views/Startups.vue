<template>
    <div class="h-screen mt-16 bg-white w-full items-center flex flex-col">
        <section class="text-gray-700 body-font">
            <div class="container px-5 py-12 flex flex-col items-center mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <p class="text-2xl md:text-5xl font-black">Startups</p>

                    <p class="lg:w-3/5 mx-auto leading-relaxed text-base">Members from UC Anderson entrepreneurship organization have gone on to do some incredible things. Here are just a few of the startups that originated right here at Anderson.</p>
                </div>
                <div class="flex flex-wrap w-full -m-4">
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full" v-for="(company,ind) in companies" :key="ind">
                        <a class="block relative h-32 rounded overflow-hidden">
                        <div class="flex justify-center items-center w-full h-full">
                            <img alt="ecommerce" class="object-cover mx-auto object-center block" style="height: 75px; width: 75px;" :src="'//logo.clearbit.com/'+company.site">
                        </div>
                        </a>
                        <div class="mt-4">
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
                name: 'Facebook', 
                site: 'Facebook.com'
            },
            {
                name: 'Google', 
                site: 'Google.com'
            },
            {
                name: 'Amazon', 
                site: 'Amazon.com'
            },
            {
                name: 'Uber', 
                site: 'Uber.com'
            },
            {
                name: 'Gucci', 
                site: 'Gucci.com'
            },
            {
                name: 'Walmart', 
                site: 'Walmart.com'
            },
            {
                name: 'Doordash', 
                site: 'Doordash.com'
            },
            {
                name: 'Netflix', 
                site: 'Netflix.com'
            },
            {
                name: 'Myspace', 
                site: 'Myspace.com'
            },
            {
                name: 'MyFitnessPal', 
                site: 'MyFitnessPal.com'
            },
            
            ]
        }
    }
}
</script>

<style>

</style>