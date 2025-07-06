<template>
    <ProgressBar :step="2" :formSuccess />
    <div class="flex items-center justify-center mt-20">
        <FormCard :formSuccess>
            <div v-if="!formSuccess">
                <FormTitle title="What is your name and your personal email?" subtitle="This will help us to contact with you just in case!" />
            </div>
            <div class="flex flex-col gap-1 w-full items-center">
                <div class="flex flex-col w-full max-w-xs">
                    <div v-if="!formSuccess">
                        <InputField id="Name" label="Full Name" v-model="Name" :error="errors.Name" />
                        <InputField id="Email" label="Email" v-model="email" :error="errors.email" />
                    </div>
                </div>
            </div>
            <div v-if="!formSuccess" class="flex justify-end pr-6">
                <button class="mt-6 bg-white text-black py-2 px-5 border rounded-md mr-3 cursor-pointer hover:bg-gray-100" @click="onBack">Back</button>
                <button class="mt-6 bg-black text-white rounded-md py-2 px-4 disabled:bg-gray-400 cursor-pointer hover:bg-gray-800" :disabled="!isValid" @click="onSubmit">Confirm</button>
            </div>
            <div v-else class="mb-12">
                <FormTitle title="Your form has been submitted!" subtitle="" />
            </div> 
        </FormCard>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import { ref, computed, watch,} from 'vue'
    import { useFormStore } from '@/stores/form';
    import FormCard  from '@/components/FormCard.vue'
    import FormTitle from './FormTitle.vue';
    import ProgressBar from './ProgressBar.vue';
    import InputField from './InputField.vue';

    const router = useRouter()

    const formStore = useFormStore()
    const formSuccess = ref(false)

    const Name = computed({
        get: () => formStore.Name,
        set: (val) => (formStore.Name = val)
    })

    const email = computed({
        get: () => formStore.email,
        set: (val) => (formStore.email = val)
    })

    const errors = ref({
        Name: '',
        email: ''
    })

    watch([Name, email], () => {
        errors.value.Name = isNameValid() ? '' : 'Must be first and last name'
        errors.value.email = isEmailValid() ? '' : 'Must be a valid email address'
    })

    function isNameValid() {
        const fullNameRegex = /^[A-ZΆ-ΩΑ-ώ][a-zά-ώα-ωA-ZΆ-ΩΑ-Ω'-]+(?:\s[A-ZΆ-ΩΑ-ώ][a-zά-ώα-ωA-ZΆ-ΩΑ-Ω'-]+)+$/;
        return fullNameRegex.test(Name.value.trim())
    }

    function isEmailValid() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return emailRegex.test(email.value.trim())
    }

    const isValid = computed(() => {
        return isNameValid() && isEmailValid()
    })

    function onBack() {
        router.push('./form-step-1')
    }

    function onSubmit() {
        if(isValid.value){
            console.log('Success')
            formSuccess.value = true
        }
    }
</script>