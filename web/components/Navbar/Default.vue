<template>
    <div class="defaultNavContent">
        <NuxtLink class="navNuxtLink" to="/">TRENDİVA</NuxtLink>
        <div>
            <NavbarButton buttonName="Giriş Yap" to="/auth/login" />
            <NavbarButton buttonName="Kayıt ol" to="/auth/register" />
        </div>
    </div>
</template>

<style scoped> .navNuxtLink {
     @apply font-black text-xl text-gray-500 transition hover:text-black
 }

 .defaultNavContent {
     @apply flex justify-between py-3 px-10 absolute w-full border-b
 }
</style>