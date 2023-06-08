<template>
    <div class="flex items-center justify-center h-screen">
        <div class="flex flex-col w-60">
            <AuthInput label="Adınız" type="text" v-model="data.firstName" />
            <AuthInput label="Soyadınız" type="text" v-model="data.lastName" />
            <AuthInput label="E-Postanız" type="email" v-model="data.email" />
            <AuthInput label="Şifreniz" type="password" v-model="data.password" />
            <AuthButton butonName="KayıtOl" @buttonClick="handleLogin" />
        </div>
    </div>
</template>



<script setup>


const data = reactive({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    loading: false
})

const login = async ({ firstName, lastName, email, password }) => {
    try {
        const data = await $fetch("http://localhost:5000/api/signup", {
            method: 'POST',
            body: {
                firstName,
                lastName,
                email,
                password
            }
        })
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}



const handleLogin = async () => {

    data.loading = true
    try {
        await login({
            firstName: data.username,
            lastName: data.lastName,
            email: data.email,
            password: data.password
        })
    } catch (error) {
        console.log(error)
    } finally {
        data.loading = false
    }

}








</script>
