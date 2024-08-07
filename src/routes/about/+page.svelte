<script lang="ts">
    import { fly } from 'svelte/transition'
    import AnimatedHamburger from '$lib/AnimatedHamburger.svelte'
    import { onMount } from 'svelte';

    export let open = false
    export let onClick = (): void => {
        open = !open
    }

    let ready = false;
    onMount(() => ready = true);
</script>

<nav class="flex items-center justify-between px-2 py-2 text-white md:py-4 md:px-8 lg:px-12 xl:px-24 bg-blue">
    <a href="/">
        <img src="https://juju.sgp1.cdn.digitaloceanspaces.com/careific/logo-type-white.webp" alt="" class="h-8 transition md:h-12 ms-2 md:ms-0 hover:scale-105">
    </a>
    <div class="hidden gap-12 lg:flex">
        <a href="#vision" class="transition hover:scale-105">Vision</a>
        <a href="#mission" class="transition hover:scale-105">Mission</a>
        <a href="#team" class="transition hover:scale-105">Team</a>
    </div>
    <div class="lg:hidden">
        <AnimatedHamburger {open} {onClick}/>
    </div>
</nav>
<div class="px-4 text-white bg-blue">
    {#if open}
        <div transition:fly={{ y: -200, duration: 400 }} class="">
            <div class="flex justify-center w-full mb-1">
                <a href="#vision" on:click={() => (open = false)}>Vision</a><br/>
            </div>
            <div class="flex justify-center w-full mb-1">
                <a href="#mission" on:click={() => (open = false)}>Mission</a><br/>
            </div>
            <div class="flex justify-center w-full mb-1">
                <a href="#team" on:click={() => (open = false)}>Team</a>
            </div>
            <hr class="mt-2"/>
        </div>
    {/if}
</div>

<div class="always-visible">
    {#if ready}
        <div class="visible-on-mount">
            <div class="flex flex-col items-center gap-8 px-8 pt-8 pb-12 text-white md:flex-row lg:gap-16 lg:px-12 xl:px-48 bg-blue">
                <img src="https://juju.sgp1.cdn.digitaloceanspaces.com/careific/logo-white.webp" alt="" class="w-64 lg:w-80 reveal-rotate">
                <div class="reveal-right">
                    <h1 class="mb-4 text-4xl font-bold text-center lg:text-5xl md:text-left">Careific</h1>
                    <p class="text-center lg:text-xl md:text-left">Careific is the ultimate solution for caregivers like you, providing simple, practical, and user-friendly features. It’s the all-in-one app designed to monitor your seniors effectively using an iPhone and an Apple Watch. Careific detects falls and abnormal heart rates, sends reminders for routines and medications, enables instant communication in emergencies, allows real-time location checking, and provides prompt alerts.</p>
                </div>
            </div>

            <div class="grid items-center grid-cols-1 gap-8 px-8 py-8 md:py-12 md:grid-cols-2 lg:gap-16 lg:px-12 xl:px-24" id="vision">
                <img src="https://juju.sgp1.cdn.digitaloceanspaces.com/careific/vision.webp" alt="" class="reveal-left">
                <div class="reveal-right">
                    <h1 class="mb-4 text-3xl font-bold text-center lg:text-4xl text-blue md:text-left">Our Vision</h1>
                    <p class="text-center lg:text-lg md:text-left">Our vision at Careific is to redefine caregiving through innovation and technology. We envision a future where caregivers feel empowered and confident in their ability to care for seniors. Careific aspires to be the go-to solution, setting the standard for comprehensive caregiving support. We envision a seamless integration of user-friendly features that not only monitor seniors but also create a sense of security and connectivity within the caregiving ecosystem. Through continuous advancements and a commitment to user-centric design, Careific aims to be the forefront of caregiving technology, ensuring a safer, more connected, and supportive environment for both caregivers and seniors.</p>
                </div>
            </div>

            <div class="grid items-center grid-cols-1 gap-8 px-8 py-8 md:py-12 md:grid-cols-2 lg:gap-16 lg:px-12 xl:px-24" id="mission">
                <img src="https://juju.sgp1.cdn.digitaloceanspaces.com/careific/mission.webp" alt="" class="md:hidden reveal-left">
                <div class="md:hidden reveal-right">
                    <h1 class="mb-4 text-3xl font-bold text-center lg:text-4xl text-blue md:text-left">Our Mission</h1>
                    <p class="text-center lg:text-lg md:text-left">Careific is driven by a mission to revolutionize caregiving by empowering caregivers with a comprehensive and intuitive solution. Our mission is to provide caregivers with simple, practical, and user-friendly features, ensuring the well-being and safety of seniors. By leveraging technology through the all-in-one app, we aim to facilitate efficient monitoring using accessible devices like the iPhone and Apple Watch. Careific is dedicated to enhancing the caregiving experience by detecting falls, monitoring heart rates, managing routines and medications, facilitating instant communication during emergencies, enabling real-time location tracking, and delivering timely alerts.</p>
                </div>
                <div class="hidden md:block reveal-left">
                    <h1 class="mb-4 text-3xl font-bold text-center lg:text-4xl text-blue md:text-left">Our Mission</h1>
                    <p class="text-center lg:text-lg md:text-left">Careific is driven by a mission to revolutionize caregiving by empowering caregivers with a comprehensive and intuitive solution. Our mission is to provide caregivers with simple, practical, and user-friendly features, ensuring the well-being and safety of seniors. By leveraging technology through the all-in-one app, we aim to facilitate efficient monitoring using accessible devices like the iPhone and Apple Watch. Careific is dedicated to enhancing the caregiving experience by detecting falls, monitoring heart rates, managing routines and medications, facilitating instant communication during emergencies, enabling real-time location tracking, and delivering timely alerts.</p>
                </div>
                <img src="https://juju.sgp1.cdn.digitaloceanspaces.com/careific/mission.webp" alt="" class="hidden md:block reveal-right">
            </div>

            <div class="px-4 py-8 md:py-12 lg:px-12 xl:px-24" id="team">
                <div class="flex items-center justify-center mb-8">
                    <div>
                        <h1 class="mb-2 text-3xl font-bold text-center lg:text-4xl text-blue">Meet The Team</h1>
                        <p class="text-center md:px-32 lg:text-lg">Get to know the Careific team, a dedicated group of passionate individuals committed to revolutionizing caregiving with innovation and empathy.</p>
                    </div>
                </div>
                <div class="grid items-start grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-16 reveal-bottom">
                    <div class="flex flex-col items-center justify-center">
                        <img src="https://juju.sgp1.cdn.digitaloceanspaces.com/careific/justin.webp" alt="" class="w-48">
                        <h2 class="mt-4 mb-1 text-2xl font-bold text-center xl:text-3xl text-blue">Yap Justin</h2>
                        <p class="text-center">Project Manager & Developer</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <img src="https://juju.sgp1.cdn.digitaloceanspaces.com/careific/max.webp" alt="" class="w-48">
                        <h2 class="mt-4 mb-1 text-2xl font-bold text-center xl:text-3xl text-blue">Maximus Aurelius W.</h2>
                        <p class="text-center">Developer & UX Designer</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <img src="https://juju.sgp1.cdn.digitaloceanspaces.com/careific/kenny.webp" alt="" class="w-48">
                        <h2 class="mt-4 mb-1 text-2xl font-bold text-center xl:text-3xl text-blue">Kenny Jinhiro Wibowo</h2>
                        <p class="text-center">Developer</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <img src="https://juju.sgp1.cdn.digitaloceanspaces.com/careific/kevin.webp" alt="" class="w-48">
                        <h2 class="mt-4 mb-1 text-2xl font-bold text-center xl:text-3xl text-blue">Kevin Sander Utomo</h2>
                        <p class="text-center">Developer</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <img src="https://juju.sgp1.cdn.digitaloceanspaces.com/careific/diaz.webp" alt="" class="w-48">
                        <h2 class="mt-4 mb-1 text-2xl font-bold text-center xl:text-3xl text-blue">Diaz Abiyaksa Putra</h2>
                        <p class="text-center">UI/UX Designer & Illustrator</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <img src="https://juju.sgp1.cdn.digitaloceanspaces.com/careific/jeremy.webp" alt="" class="w-48">
                        <h2 class="mt-4 mb-1 text-2xl font-bold text-center xl:text-3xl text-blue">Jeremy Ernesto S. W.</h2>
                        <p class="text-center">UI/UX Designer</p>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>


<footer class="px-4 py-4 pt-12 md:px-8 lg:px-12 xl:px-24">
    <div class="flex flex-col items-center justify-between gap-4 md:items-end md:flex-row">
        <div class="flex flex-col items-center md:items-start">
            <img src="https://juju.sgp1.cdn.digitaloceanspaces.com/careific/logo-type-blue.webp" alt="" class="h-12 mb-2 md:h-16">
            <div class="text-blue">
                <a href="/" class="mr-8">Home</a>
                <a href="/privacy-policy">Privacy Policy</a>
            </div>
        </div>
        <div class="flex items-center gap-4">
            <img src="https://juju.sgp1.cdn.digitaloceanspaces.com/careific/qr-app-store.webp" alt="" class="h-24">
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