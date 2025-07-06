<template>
    <div> 
        <h1 class="text-2xl font-bold text-center mb-1">{{ title }}</h1>
        <h3 class="text-gray-500 text-center">{{ subtitle }}</h3>
    </div>
</template>

<script setup>
    defineProps({
        title: String,
        subtitle: String
    })
</script>