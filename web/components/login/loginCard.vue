<template>
    <form class="loginContainer">
        <div class="loginCard">
            <h2 class="my-3">Trendiva</h2>
            <LoginInput placeholder="E-mail" type="text" />
            <LoginInput placeholder="Şifre" type="password" />
            <LoginButton buton-name="Giriş Yap" />
        </div>
    </form>
</template>

<style scoped>
.loginContainer {
    @apply flex justify-center items-center h-screen
}

.loginCard {
    @apply border border-solid border-gray-300 py-7 px-3 pb-14 rounded-xl flex flex-col w-80 text-center;

}
</style>