<template>
    <Label for="Country" class="block mb-2">Country</Label> 
    <Select v-model="countryModel">
        <SelectTrigger class="w-full flex items-center justify-between cursor-pointer">
            <span class="flex items-center space-x-2">
                    <img v-if="selectedCountry?.flag" :src="selectedCountry.flag" class="w-5 h-4">
                    <span>{{ selectedCountry?.name || 'Search your Country' }}</span>
            </span>
        </SelectTrigger>
        <SelectContent class="max-h-60 overflow-y-auto z-50">
            <SelectItem v-for="c in countries" :key="c.code" :value="c.code" class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100">
                <img :src="c.flag" class="w-5 h-4">
                {{ c.name }}
            </SelectItem>
        </SelectContent>
    </Select>
</template>

<script setup>
    import { Label } from '@/components/ui/label';
    import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select'
    import { computed } from 'vue';

    const props = defineProps ({
        modelValue: String,
        countries: Array
    })

    const emit = defineEmits(['update:modelValue'])

    const countryModel = computed({
        get: () => props.modelValue,
        set: val => emit('update:modelValue', val)
    })

    const selectedCountry = computed(() => 
        props.countries.find(c => c.code === countryModel.value)
    )
</script>