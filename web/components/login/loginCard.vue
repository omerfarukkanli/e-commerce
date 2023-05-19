<template>
    <form class="loginContainer">
        <div class="loginCard">
            <h2 class="my-12">Trendiva'ya hoşgeldiniz</h2>
            <LoginInput placeholder="E-mail" type="text" />
            <LoginInput placeholder="Şifre" type="password" />
            <LoginButton buton-name="GİRİŞ YAP" />
        </div>
    </form>
</template>

<style scoped>
.loginContainer {
    @apply flex justify-center items-center h-screen
}

.loginCard {
    @apply border border-solid border-gray-300 py-7 px-3 rounded-md flex flex-col w-80 text-center;

}
</style>