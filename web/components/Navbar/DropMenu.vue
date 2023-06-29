<template>
    <div class="flex items-center flex-col">
        <NavbarButton class="py-2 px-3 font-semibold text-sm text-neutral-500 hover:text-neutral-950" @mouseover="showMenu = true" buttonName="Hesabım"/>
        <div v-if="showMenu" class="absolute top-14 border py-3 px-2 rounded-xl bg-white" @mouseleave="showMenu = false">
            <NuxtLink to="/auth/login" class="border py-1 px-2 text-sm bg-orange-500 text-white rounded-lg mr-1 hover:bg-orange-600">Giriş Yap</NuxtLink>
            <NuxtLink to="/auth/register" class="border py-1 px-2 text-sm text-orange-500 rounded-lg border-orange-500 ml-1 hover:border-orange-600 hover:text-orange-600">Kayıt Ol</NuxtLink>
        </div>
    </div>
</template>

<script setup>
const showMenu = ref(false);
</script>