<template>
    <ProgressBar :step="1" />
    <div class="flex items-center justify-center mt-20">
        <FormCard>
            <FormTitle title="Where is your Company registered?" subtitle="This will help us personallise your experience" />
            <div class="flex flex-col gap-1 w-full items-center">
                <div class="flex flex-col w-full max-w-xs">
                    <CountrySelect v-model="selectedCode" :countries="Countries" />
                    <VatInput v-model="vatNumber" :code="selectedCode" :error="errors.vatNumber" :showVat="selectedCode == 'GR' || isEuropean(selectedCode)" />
                    <div v-if="selectedCode === 'GR'">
                        <InputField id="tax" label="Tax office*" v-model="taxOffice" :error="errors.taxOffice" />
                    </div>
                </div>
            </div>
            <div class="flex justify-end pr-6">
                <button type="submit"  class="mt-6 bg-black text-white rounded-md py-2 px-4 disabled:bg-gray-400 z-1 cursor-pointer hover:bg-gray-800" :disabled="!isValid" @click="onSubmit">Confirm</button>
            </div>
        </FormCard>
    </div>
</template>

<script setup>
    import { ref, computed, watch, onMounted} from 'vue'
    import axios from 'axios'
    import { useFormStore } from '@/stores/form';
    import { useRouter } from 'vue-router';
    import FormCard from '@/components/FormCard.vue'
    import FormTitle from '@/components/FormTitle.vue'
    import VatInput from '@/components/vatInput.vue'
    import CountrySelect from './CountrySelect.vue';
    import ProgressBar from './ProgressBar.vue';
    import InputField from './InputField.vue';

    const router = useRouter()

    const formStore = useFormStore()
    const Countries = computed(() => formStore.countries)

    const selectedCode = computed({
        get: () => formStore.Country,
        set: (val) => (formStore.Country = val)
    })

    const vatNumber = computed({
        get: () => formStore.vatNumber,
        set: (val) => (formStore.vatNumber = val),
    })

    const taxOffice = computed({
        get: () => formStore.taxOffice,
        set: (val) => (formStore.taxOffice = val),
    })

    const errors = ref({
        vatNumber: '',
        taxOffice: ''
    })


    onMounted(async () => {
        if(formStore.countries.length === 0){
            try {
                const res = await axios.get('https://restcountries.com/v3.1/all?fields=name,cca2,flags,region')
                formStore.countries = res.data
                    .map(c => ({
                        code: c.cca2,
                        name: c.name.common,
                        flag: c.flags.svg || c.flags.png,
                        region: c.region
                    }))
                    .sort((a,b) => a.name.localeCompare(b.name))
            } catch (err) {
                console.error('Failed to fetch Countries', err)
            }
        }
    })

    function isEuropean(code) {
        const c = Countries.value.find(c => c.code === code)
        return c ? c.region === 'Europe' : false
    }

    function isVatValid() {
        const vatNumberRegex = /^[A-Za-z]{2}\d{8}$/
        return vatNumberRegex.test(vatNumber.value.trim())
    }

    function isTaxOfficeValid() {
        if(taxOffice.value.trim().length < 5){
            return false
        }
        return true
    }

    watch([selectedCode, vatNumber, taxOffice], () => {
        if (selectedCode.value === 'GR'){
            errors.value.vatNumber = isVatValid() ? '' : 'Must start with 2 letters followed by 8 digits'
            errors.value.taxOffice = isTaxOfficeValid() ? '' : 'Must be at least 5 characters long'
        }else if(isEuropean(selectedCode.value)){
            errors.value.vatNumber = isVatValid() ? '' : 'Must start with 2 letters followed by 8 digits'
        } else {
            errors.value.vatNumber = ''
            errors.value.taxOffice = ''
        }
    } )

    const isValid = computed(() => {
       if(!selectedCode.value) return false

       if(selectedCode.value === 'GR'){
        return isVatValid() && isTaxOfficeValid()
       }

       if(isEuropean(selectedCode.value)){
        return isVatValid()
       }

       return true
    })

    function onSubmit() {
        if(isValid.value){
            router.push('form-step-2')
        }
    }
</script>