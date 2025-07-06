<template>
    <Label :for="id" class="mt-5 mb-2" :class="{'text-red-600': error}">{{ label }}</Label>
    <Input :id="id" :type="type" v-model="inputModel" class="w-full p-2 border" :class="{'text-red-600': error}" />
    <p v-if="error" class="text-red-600 text-sm mt-1">{{ error }}</p>
</template>

<script setup>
    import { computed } from 'vue';
    import { Label } from '@/components/ui/label';
    import { Input } from './ui/input';

    const props = defineProps({
        modelValue: String,
        label: String,
        id: String,
        type: String,
        error: String,
    })

    const emit = defineEmits(['update:modelValue'])

    const inputModel = computed({
        get: () => props.modelValue,
        set: val => emit('update:modelValue', val)
    })
</script>