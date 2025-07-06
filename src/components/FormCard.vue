<template>
    <div class="w-full max-w-[530px] max-h-full bg-white border border-[#E2E8F0] rounded-md shadow-md py-10  gap-12 flex flex-col justify-between" :class="{'min-h-[398px]' : success}">
        <slot></slot>
    </div>
</template>

<script setup>
    defineProps({
        success: Boolean
    })
</script>