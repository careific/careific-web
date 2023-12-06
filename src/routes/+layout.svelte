<script>
    import "../app.css";
    import { page } from '$app/stores';
</script>

<!-- <nav class="bg-white font-inter">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button type="button" class="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Open main menu</span>

                    <svg class="block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    
                    <svg class="hidden w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div class="flex items-center flex-shrink-0">
                    <a href="/">
                       <img class="w-auto h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
                    </a>
                </div>
                <div class="hidden sm:ml-6 sm:block">
                    <div class="flex space-x-4">
                        <a href="/about" class={$page.route.id === '/about' ? "bg-blue-600 text-white rounded-md px-3 py-2 text-sm font-medium" : "text-blue-600 hover:bg-blue-400 transition hover:text-white rounded-md px-3 py-2 text-sm font-medium"}>About</a>
                        <a href="/privacy-policy" class={$page.route.id === '/privacy-policy' ? "bg-blue-600 text-white rounded-md px-3 py-2 text-sm font-medium" : "text-blue-600 hover:bg-blue-400 transition hover:text-white rounded-md px-3 py-2 text-sm font-medium"}>Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="/about" class="block px-3 py-2 text-base font-medium text-white bg-blue-600 rounded-md">About</a>
            <a href="/privacy-policy" class="block px-3 py-2 text-base font-medium text-blue-600 transition rounded-md hover:bg-blue-400 hover:text-white">Privacy Policy</a>
        </div>
    </div>
</nav> -->
<!-- <main class="px-4 py-4"> -->
    <slot />
<!-- </main> -->
