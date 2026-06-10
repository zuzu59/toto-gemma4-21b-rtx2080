<template>
  <div class="p-4 max-w-md mx-auto mt-20">
    <h2 class="text-2xl font-bold mb-6">Déverrouillage</h2>
    <div class="space-y-4">
      <p class="text-gray-400">Entrez votre mot de passe maître pour accéder à vos services.</p>
      <input 
        v-model="password" 
        type="password" 
        placeholder="Mot de passe" 
        class="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
      />
      <button @click="handleUnlock" :disabled="loading" class="w-full p-3 bg-blue-600 rounded font-bold">
        {{ loading ? 'Déverrouillage...' : 'Déverrouiller' }}
      </button>
      <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { session } from '../store/session'
import { useRouter } from 'vue-router'

const password = ref('')
const loading = ref(false)
const error = ref('')
const router = useRouter()

const handleUnlock = async () => {
  loading.value = true
  error.value = ''
  const success = await session.unlock(password.value)
  loading.value = false
  
  if (success) {
    router.push('/')
  } else {
    error.value = 'Mot de passe incorrect.'
  }
}
</script>
<style scoped>
</style>
