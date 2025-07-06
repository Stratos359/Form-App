<template>
    <div class="w-full max-w-[530px] mx-auto space-y-6 py-10">
        <div class="space-y-1">
            <div class="text-sm font-medium text-gray-600">Step {{ step }}/2</div>
            <div class="flex items-center justify-between">
                <div @click="$router.push('/form-step-1')" class="w-80 h-3 rounded-xl mt-6 mr-4" :class="step>1 ? 'bg-gray-700 cursor-pointer': 'bg-gray-200'"></div>
                <div class="w-80 h-3 rounded-xl mt-6" :class="step===2 && formSuccess ? 'bg-gray-700' : 'bg-gray-200'"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        step: Number,
        formSuccess: Boolean
    })
</script>