<script>
    // features
    var selectedFeature = "tracker"
</script>

<nav class="flex items-center justify-between px-4 pt-4 pb-8 text-white lg:px-12 xl:px-24 bg-blue">
    <img src="%sveltekit.assets%/../img/logo-type-white.svg" alt="" class="h-8 md:h-12">
    <div class="flex gap-12">
        <a href="#what-is-careific">What is Careific</a>
        <a href="#features">Features</a>
        <a href="#connect">How to Connect</a>
        <a href="#story">Careific’s Story</a>
        <a href="#faq">FAQs</a>
    </div>
</nav>

<div class="items-center hidden grid-cols-3 gap-8 pt-8 text-white md:grid bg-blue">
    <div class="flex items-end justify-start mt-24">
        <img src="%sveltekit.assets%/../img/caregiver.svg" alt="" class="h-96">
    </div>
    
    <div class="flex items-start justify-center h-full mb-16">
        <div class="">
            <h1 class="mb-1 text-5xl font-bold text-center lg:text-7xl">Careific</h1>
            <p class="mb-8 text-lg text-center lg:text-2xl">Monitoring Health and Nurturing Hearts</p>
            <a href="https://apps.apple.com/id/app/careific-monitor-your-senior/id6471642474" target="_blank">
                <img src="%sveltekit.assets%/../img/app-store.svg" alt="" class="w-48 mx-auto">
            </a>
        </div>
    </div>
    
    <div class="flex items-end justify-end mt-24">
        <img src="%sveltekit.assets%/../img/senior.svg" alt="" class="h-96">
    </div>
</div>
<div class="items-center justify-center hidden mb-8 -mt-64 lg:flex">
    <div class="flex items-center justify-center gap-8">
        <img src="%sveltekit.assets%/../img/tracker-jumbotron.png" alt="" class="h-128">
        <img src="%sveltekit.assets%/../img/dashboard-jumbotron.png" alt="" class="h-128">
    </div>
</div>

<!-- Phone Only -->
<div class="px-4 text-white bg-blue md:hidden">
    <div class="flex items-start justify-center h-full mb-8">
        <div class="">
            <h1 class="mb-1 text-4xl font-bold text-center">Careific</h1>
            <p class="mb-4 text-center">Monitoring Health and Nurturing Hearts</p>
            <a href="https://apps.apple.com/id/app/careific-monitor-your-senior/id6471642474" target="_blank">
                <img src="%sveltekit.assets%/../img/app-store.svg" alt="" class="mx-auto w-36">
            </a>
        </div>
    </div>
    <div class="flex items-center justify-center">
        <img src="%sveltekit.assets%/../img/senior.svg" alt="" class="">
    </div>
</div>

<div class="grid items-center grid-cols-1 gap-4 px-4 py-8 lg:py-12 md:grid-cols-2 lg:gap-12 md:px-8 lg:px-12 xl:px-24" id="what-is-careific">
    <img src="%sveltekit.assets%/../img/all-in-one.png" alt="" class="">
    <div>
        <h1 class="text-3xl font-bold text-center lg:text-4xl text-blue md:text-left">All-in-One Caregiving App</h1>
        <p class="mt-4 mb-6 leading-relaxed text-center lg:mb-8 lg:text-xl md:text-left">Introducing our all-encompassing Caregiving App, a complete solution prioritizing your loved ones' well-being. Track their location in real-time, monitor heart rate and device status for health updates and reliability assurance. It includes a range of safety features: inactivity tracking, fall detection, SOS button, and a walkie-talkie for seamless communication. Set routines reminders and access AI-powered medical consultations, ensuring comprehensive care and peace of mind.</p>
        <div class="flex items-center justify-center md:justify-start">
            <a href="/about" class="px-4 py-2 text-lg font-semibold text-white transition rounded-md lg:px-6 lg:py-3 bg-blue hover:bg-darkblue">Learn more</a>
        </div>
    </div>
</div>

<div class="px-4 py-8 lg:py-12 md:px-8 lg:px-12 xl:px-24" id="features">
    <div class="flex items-center justify-center mb-8">
        <div>
            <h1 class="mb-2 text-3xl font-bold text-center lg:text-4xl text-blue">Enchanced Caregiving Experience</h1>
            <p class="text-center md:text-lg md:px-32">Our caregiving app is designed with you in mind, offering a range of features to enhance your caregiving journey.</p>
        </div>
    </div>
    <div class="grid items-center grid-cols-2 gap-8">
        {#if selectedFeature == "tracker"}
            <img src="%sveltekit.assets%/../img/tracker.png" alt="" class="">
        {:else if selectedFeature == "emergency"}
            <img src="%sveltekit.assets%/../img/emergency.png" alt="" class="">
        {:else if selectedFeature == "walkie-talkie"}
            <img src="%sveltekit.assets%/../img/walkie-talkie.png" alt="" class="">
        {:else if selectedFeature == "routines"}
            <img src="%sveltekit.assets%/../img/routines.png" alt="" class="">
        {:else if selectedFeature == "ai-consultation"}
            <img src="%sveltekit.assets%/../img/ai-consultation.png" alt="" class="">
        {/if}

        <div class="flex flex-col gap-4">
            <button class="{selectedFeature == 'tracker' ? 'bg-blue' : 'bg-white'} border-2 border-blue p-4 rounded-lg cursor-pointer" on:click={() => (selectedFeature = "tracker")}>
                <h2 class="text-3xl font-bold text-left {selectedFeature == 'tracker' ? 'text-white' : 'text-blue'}">Tracker</h2>
                <p class="text-left {selectedFeature == 'tracker' ? 'text-white' : 'text-black'}">The capability to track essential information about their seniors, including location, heart rate, device state, and inactivity.</p>
            </button>
            <button class="{selectedFeature == 'emergency' ? 'bg-blue' : 'bg-white'} border-2 border-blue p-4 rounded-lg cursor-pointer" on:click={() => (selectedFeature = "emergency")}>
                <h2 class="text-3xl font-bold text-left  {selectedFeature == 'emergency' ? 'text-white' : 'text-blue'}">Emergency</h2>
                <p class="text-left {selectedFeature == 'emergency' ? 'text-white' : 'text-black'}">The emergency feature combines fall detection and an SOS button for immediate assistance, ensuring rapid response in critical situations.</p>
            </button>
            <button class="{selectedFeature == 'walkie-talkie' ? 'bg-blue' : 'bg-white'} border-2 border-blue p-4 rounded-lg cursor-pointer" on:click={() => (selectedFeature = "walkie-talkie")}>
                <h2 class="text-3xl font-bold text-left  {selectedFeature == 'walkie-talkie' ? 'text-white' : 'text-blue'}">Walkie-Talkie</h2>
                <p class="text-left {selectedFeature == 'walkie-talkie' ? 'text-white' : 'text-black'}">By simply pressing the button, it can transmit voice directly to the senior's phone, even if it's locked.</p>
            </button>
            <button class="{selectedFeature == 'routines' ? 'bg-blue' : 'bg-white'} border-2 border-blue p-4 rounded-lg cursor-pointer" on:click={() => (selectedFeature = "routines")}>
                <h2 class="text-3xl font-bold text-left  {selectedFeature == 'routines' ? 'text-white' : 'text-blue'}">Routines</h2>
                <p class="text-left {selectedFeature == 'routines' ? 'text-white' : 'text-black'}">Enhances the interactive display of seniors' schedules by adding medication and activity reminders in real-time. </p>
            </button>
            <button class="{selectedFeature == 'ai-consultation' ? 'bg-blue' : 'bg-white'} border-2 border-blue p-4 rounded-lg cursor-pointer" on:click={() => (selectedFeature = "ai-consultation")}>
                <h2 class="text-3xl font-bold text-left  {selectedFeature == 'ai-consultation' ? 'text-white' : 'text-blue'}">AI Medical Consultation</h2>
                <p class="text-left {selectedFeature == 'ai-consultation' ? 'text-white' : 'text-black'}">The provides suggestions and answers based on questions about senior’s condition.</p>
            </button>
        </div>
    </div>
</div>

<div class="px-4 py-8 lg:py-12 md:px-8 lg:px-12 xl:px-24" id="connect">
    <div class="flex items-center justify-center mb-4">
        <div>
            <h1 class="mb-2 text-3xl font-bold text-center lg:text-4xl text-blue">Stay Connected with Your Seniors</h1>
            <p class="text-center md:px-32 md:text-lg">Empower yourself to stay connected and safeguard the well-being of your beloved seniors.</p>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-4 lg:gap-8">
        <div class="rounded-xl h-128">
            <div class="bg-blue h-1/3 lg:h-1/2 rounded-t-xl">
                <div class="flex items-center justify-center h-full p-4 pb-10">
                    <img src="%sveltekit.assets%/../img/click.svg" alt="" class="max-h-48">
                </div>
            </div>
            <div class="border-b-2 border-x-2 h-1/2 border-gray rounded-b-xl">
                <div class="flex items-center justify-center">
                    <div class="flex items-center justify-center w-16 h-16 -mt-8 rounded-full bg-orange">
                        <h1 class="text-4xl font-bold text-white">1</h1>
                    </div>
                </div>
                <h2 class="mx-4 mt-4 mb-2 text-xl font-bold text-center lg:text-2xl text-blue">Click The Add Button</h2>
                <p class="mx-4 text-sm text-center lg:text-base">Navigate to the caregiver tracker view, select the senior's name at the top left, and then click 'Add' to effortlessly expand your caregiving network.</p>
            </div>
        </div>
        <div class="rounded-xl h-128">
            <div class="bg-blue h-1/3 lg:h-1/2 rounded-t-xl">
                <div class="flex items-center justify-center h-full p-4 pb-10">
                    <img src="%sveltekit.assets%/../img/enter.svg" alt="" class="max-h-48">
                </div>
            </div>
            <div class="border-b-2 border-x-2 h-1/2 border-gray rounded-b-xl">
                <div class="flex items-center justify-center">
                    <div class="flex items-center justify-center w-16 h-16 -mt-8 rounded-full bg-orange">
                        <h1 class="text-4xl font-bold text-white">2</h1>
                    </div>
                </div>
                <h2 class="mx-4 mt-4 mb-2 text-xl font-bold text-center lg:text-2xl text-blue">Enter Your Senior’s Email</h2>
                <p class="mx-4 text-sm text-center lg:text-base">Input your senior's email, initiating an invitation process within the caregiver's view to connect them to the caregiving network.</p>
            </div>
        </div>
        <div class="rounded-xl h-128">
            <div class="bg-blue h-1/3 lg:h-1/2 rounded-t-xl">
                <div class="flex items-center justify-center h-full p-4 pb-10">
                    <img src="%sveltekit.assets%/../img/accept.svg" alt="" class="max-h-48">
                </div>
            </div>
            <div class="border-b-2 border-x-2 h-1/2 border-gray rounded-b-xl">
                <div class="flex items-center justify-center">
                    <div class="flex items-center justify-center w-16 h-16 -mt-8 rounded-full bg-orange">
                        <h1 class="text-4xl font-bold text-white">3</h1>
                    </div>
                </div>
                <h2 class="mx-4 mt-4 mb-2 text-xl font-bold text-center lg:text-2xl text-blue">Accept Invitation</h2>
                <p class="mx-4 text-sm text-center lg:text-base">Seniors receive and can easily accept the invitation in their view, ensuring their active participation and connection within the caregiving network.</p>
            </div>
        </div>
    </div>
</div>

<div class="px-4 pt-12 pb-20 text-white md:px-8 lg:px-12 xl:px-24 bg-blue" id="story">
    <div class="flex items-center justify-center mb-8">
        <div>
            <h1 class="mb-2 text-3xl font-bold text-center lg:text-4xl">Story Behind Careific</h1>
            <p class="text-center md:px-32 md:text-lg">Discover additional details about Careific's functionalities and its development process.</p>
        </div>
    </div>
    <div class="flex items-center justify-center">
        <div class="w-full md:px-8 lg:px-12 xl:px-24">
            <iframe style="width: 100%; aspect-ratio: 16/9;" src="https://www.youtube.com/embed/yAezFvNB-WI?si=S-XbUr7einn80AU6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
</div>

<div class="px-4 py-8 lg:py-12 md:px-8 lg:px-12 xl:px-24" id="faq">
    <h1 class="mb-8 text-3xl font-bold text-center lg:text-4xl text-blue md:text-left">Frequently Asked Questions</h1>
    <div class="grid grid-cols-1 gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div>
            <h2 class="mb-2 text-xl font-bold lg:text-2xl text-blue">What devices do I need to use Careific?</h2>
            <p>To use Careific, seniors require an Apple Watch and an iPhone, while caregivers can utilize the app solely on an iPhone. The minimum requirements include iOS 17.0 for iPhones and WatchOS 10.0 for Apple Watches.</p>
        </div>
        <div>
            <h2 class="mb-2 text-xl font-bold lg:text-2xl text-blue">How does Careific detect falls and abnormal heart rates?</h2>
            <p>Careific utilizes Apple's fall detection API and seamlessly connects with Apple Health to detect falls and monitor abnormal heart rates.</p>
        </div>
        <div>
            <h2 class="mb-2 text-xl font-bold lg:text-2xl text-blue">Can multiple caregivers be connected to the same senior's profile on Careific?</h2>
            <p>Yes, multiple caregivers can be connected to the same senior's profile on Careific.</p>
        </div>
        <div>
            <h2 class="mb-2 text-xl font-bold lg:text-2xl text-blue">How does the app facilitate instant communication during emergencies?</h2>
            <p>Careific utilizes a walkie-talkie feature that functions even when the device is locked, enabling immediate communication during emergencies.</p>
        </div>
        <div>
            <h2 class="mb-2 text-xl font-bold lg:text-2xl text-blue">Are there any specific privacy measures in place to protect the data collected by Careific?</h2>
            <p>Industry-standard security measures are implemented to protect your data from unauthorized access or disclosure.</p>
        </div>
        <div>
            <h2 class="mb-2 text-xl font-bold lg:text-2xl text-blue">What type of alerts does Careific provide, and how are they delivered?</h2>
            <p>Careific delivers alerts for falls, SOS, inactivity, location (if the senior is outside the house), watch charging, and abnormal heart rates.</p>
        </div>
    </div>
</div>

<footer class="px-4 py-4 pt-12 md:px-8 lg:px-12 xl:px-24">
    <div class="flex flex-col items-center justify-between gap-4 md:items-end md:flex-row">
        <div class="flex flex-col items-center md:items-start">
            <img src="%sveltekit.assets%/../img/logo-type-blue.svg" alt="" class="h-12 mb-2 md:h-16">
            <div class="text-blue">
                <a href="/about" class="mr-8">About</a>
                <a href="/privacy-policy">Privacy Policy</a>
            </div>
        </div>
        <div class="flex items-center gap-4">
            <img src="%sveltekit.assets%/../img/qr-app-store.png" alt="" class="h-24">
            <div>
                <h2 class="mb-1 text-lg font-bold md:text-2xl text-blue">Download The App</h2>
                <p class="">Scan the QR code or <span class="text-blue"><a href="https://apps.apple.com/id/app/careific-monitor-your-senior/id6471642474" target="_blank">click here</a></span><br class="hidden md:block" /> to download the app.</p>
            </div>
        </div>
    </div>
    <hr class="my-4 border-blue" />
    <div class="flex justify-center">
        <p class="text-sm text-blue">© Copyright Careific 2023</p>
    </div>
</footer>