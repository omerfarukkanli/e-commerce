<template>
    <button @click.prevent="handleClicked" class="login-button">
        {{ butonName }}
    </button>
</template>

<script setup>
const { butonName } = defineProps({
    butonName: String
})
const emit = defineEmits(["buttonClick"])

const handleClicked = () => {
    emit("buttonClick")
}

</script>

<style scoped>
.login-button {
    @apply bg-orange-500 text-white py-2 rounded-2xl font-bold hover:bg-orange-600 w-64
}
</style>
