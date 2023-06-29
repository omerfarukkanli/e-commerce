<template>
    <div class="relative pb-2">
        <label class="AuthLabel" for="" v-if="props.label">{{ props.label }}</label>
        <input :value="props.modelValue" @input="event => emtis('update:modelValue', event.target.value)" :type="props.type"
            class="AuthInput">
    </div>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        default: null
    },
    modelValue: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})
const emtis = defineEmits(['update:modelValue'])
</script>
<style scoped>
.AuthInput {
    @apply border border-gray-400 outline-none p-3 rounded-2xl focus:border-gray-800 w-64 indent-1 text-sm mb-1
}

.AuthLabel {
    @apply absolute -top-2 left-4 bg-white text-xs py-0 px-1 font-bold text-gray-700
}
</style>