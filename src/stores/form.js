import { defineStore } from "pinia";
import { ref } from "vue";

export const useFormStore = defineStore('form', ()=> {
    const Country = ref('')
    const vatNumber = ref('')
    const taxOffice = ref('')
    const Name = ref('')
    const email = ref('')
    const countries = ref([])

    const errors = ref({})

    return {
        Country,
        vatNumber,
        taxOffice,
        Name,
        email,
        errors,
        countries
    }
})