<template>
    <div class="authpageCenter">
        <div class="authPageCard">
            <div class="flex justify-between w-full">
                <NuxtLink class="px-10 text-sm border  w-full p-2 bg-gray-200 " to="/auth/login">Giriş Yap</NuxtLink>
                <NuxtLink class="px-10 text-sm border w-full p-2 bg-white" to="/auth/register">Kayıt Ol
                </NuxtLink>
            </div>
            <div class="flex items-center flex-col my-5">
                <h1 class=" text-xl font-semibold text-zinc-700 my-1">Merhaba,</h1>
                <h2 class=" my-2 text-xs"> Trendiva’da hesap oluştur, indirimleri kaçırma!</h2>
                <div class=" h-64">
                    <AuthInput label="Adınız" type="text" v-model="data.firstName" />
                    <AuthInput label="Soyadınız" type="text" v-model="data.lastName" />
                    <AuthInput label="E-Postanız" type="email" v-model="data.email" />
                    <AuthInput label="Şifreniz" type="password" v-model="data.password" />
                </div>
                <AuthButton butonName="Kayıt Ol" @buttonClick="handleLogin" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { register } from '~/composables/useAuth';
const data = reactive({
    firstName: ''.trim(),
    lastName: ''.trim(),
    email: ''.trim(),
    password: ''.trim(),
    loading: false
})
const handleLogin = async () => {

    data.loading = true
    try {
        const token = await register({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password
        })
        if (token) {
            const router = useRouter()
            router.push({ path: "/" })
        }
    } catch (error) {
        console.log(error)
    } finally {
        data.loading = false
    }
}
</script>
