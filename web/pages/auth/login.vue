
<template>
    <form class="loginContainer">
        <div class="loginCard">
        </div>
    </form>
</template>

<script setup>

function deneme() {
    console.log(inputValue)
}

let inputValue = ref("")

</script>

<style scoped>
.loginContainer {
    @apply flex justify-center items-center h-screen
}

.loginCard {
    @apply border border-solid border-gray-300 py-7 px-3 rounded-md flex flex-col w-80 text-center;

}
</style>