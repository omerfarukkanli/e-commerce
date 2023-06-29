<template>
    <div class="defaultNavContent">
        <NuxtLink class="navNuxtLink" to="/">TRENDİVA</NuxtLink>
        <div class="flex items-center">
            <NavbarDropMenu />
            <NavbarButton class="py-2 px-3 font-semibold text-sm text-neutral-500 hover:text-neutral-950"
                buttonName="Siparişlerim" />
            <NavbarButton class="py-2 px-3 font-semibold text-sm text-neutral-500 hover:text-neutral-950"
                buttonName="Favorilerim" />

        </div>
    </div>
</template>

<style scoped> .navNuxtLink {
     @apply font-black text-xl text-gray-500 transition hover:text-black
 }

 .defaultNavContent {
     @apply flex justify-between py-3 px-16 absolute w-full border-b bg-white
 }</style>