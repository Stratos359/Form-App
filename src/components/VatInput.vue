<template>
    <div v-if="showVat">
        <Label for="vat" class="mt-5 mb-2" :class="{'text-red-600': error}">VAT number*</Label>
        <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 pr-2 border-r">{{ code }}</span>
            <Input id="vat" v-model="vatModel" class="w-full p-2 pl-12 border" :class="{'border-red-600': error}" />
        </div>
        <p v-if="error" class="text-red-600 text-sm mt-1">{{ error }}</p>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { Input } from './ui/input';
    import { Label } from './ui/label';

    const props = defineProps({
        modelValue: String,
        code: String,
        error: String,
        showVat: Boolean
    })

    const emit = defineEmits(['update:modelValue'])

    const vatModel = computed ({
        get: () => props.modelValue,
        set: val => emit('update:modelValue', val)
    })
</script>