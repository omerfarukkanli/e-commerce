<template>
    <div class="authpageCenter">
        <div class="authPageCard">
            <div class="flex justify-between w-full">
                <NuxtLink class="px-10 text-sm border  w-full p-2 bg-white " to="/auth/login">Giriş Yap</NuxtLink>
                <NuxtLink class="px-10 text-sm border w-full p-2 bg-gray-200" to="/auth/register">Kayıt Ol
                </NuxtLink>
            </div>
            <div class="flex items-center flex-col my-5">
                <h1 class=" text-xl font-semibold text-zinc-700 my-1">Merhaba,</h1>
                <h2 class=" my-2 text-xs"> Trendiva’ya giriş yap, indirimleri kaçırma!</h2>
                <div class=" h-64">
                    <AuthInput label="E-Postanız" type="email" v-model="data.email" />
                    <AuthInput label="Şifreniz" type="password" v-model="data.password" />
                </div>
                <AuthButton butonName="Giriş Yap" @buttonClick="handleLogin" />
            </div>

        </div>
    </div>
</template>

<script setup>

const data = reactive({
    email: ''.trim(),
    password: ''.trim(),
    loading: false
})
const handleLogin = async () => {
    console.log("deneme")
}
</script>
