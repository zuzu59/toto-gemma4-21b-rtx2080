<template>
  <div class="p-4 max-w-4xl mx-auto">
    <h2 class="text-2xl font-bold mb-6">À propos</h2>
    
    <div class="space-y-8">
      <section>
        <h3 class="text-sm font-bold text-blue-400 mb-4 uppercase">Projet</h3>
        <div class="space-y-2">
          <p>Z-Services est une application PWA pour gérer vos services locaux.</p>
          <div class="flex flex-wrap gap-4">
            <a href="https://github.com/zuzu59" class="text-blue-500 hover:underline">GitHub Profile</a>
            <a href="#" class="text-blue-500 hover:underline">Repository</a>
          </div>
        </div>
      </section>

      <section>
        <h3 class="text-sm font-bold text-blue-400 mb-4 uppercase">Version</h3>
        <div class="flex items-center gap-4">
          <span class="text-xl font-mono">{{ version }}</span>
          <a :href="changelogUrl" class="text-blue-500 hover:underline">Changelog</a>
        </div>
        <div v-if="newRelease" class="mt-2 p-3 bg-blue-900/50 border border-blue-500 rounded text-sm">
          Une nouvelle version est disponible !
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const version = ref('0.0.1')
const changelogUrl = 'https://github.com/zuzu59/z-services/releases'
const newRelease = ref(false)

onMounted(async () => {
  try {
    // Simuler la vérification de release (il faudrait l'API GitHub réelle)
    // Pour le moment, on reste en local.
    newRelease.value = false
  } catch (e) {
    console.error(e)
  }
})
</script>

<style scoped>
</style>
