<template>
  <section class="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-sm">
    <h2 class="text-xl font-semibold mb-6 pb-2 border-b border-gray-800 text-blue-400">Informations Générales</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="md:col-span-2">
        <label class="block text-sm font-medium mb-2 text-gray-300">Nom du service</label>
        <input v-model="formData.serviceName" type="text" class="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:border-blue-500 outline-none transition-colors" placeholder="Ex: Serveur de Production" />
      </div>
      <div class="md:col-span-1">
        <label class="block text-sm font-medium mb-2 text-gray-300">Adresse IP</label>
        <input v-model="formData.ip" type="text" class="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:border-blue-500 outline-none transition-colors" placeholder="Ex: 192.168.1.100" />
      </div>
      <div class="md:col-span-1">
        <label class="block text-sm font-medium mb-2 text-gray-300">URL</label>
        <input v-model="formData.url" type="text" class="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:border-blue-500 outline-none transition-colors" placeholder="Ex: https://service.local" />
      </div>
      <div class="md:col-span-2">
        <label class="block text-sm font-medium mb-2 text-gray-300">Description</label>
        <textarea v-model="formData.description" rows="3" class="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:border-blue-500 outline-none transition-colors" placeholder="Décrivez le rôle de ce service..."></textarea>
      </div>
      <div class="md:col-span-2">
        <label class="block text-sm font-medium mb-2 text-gray-300">Note (Optionnel)</label>
        <input v-model="formData.note" type="text" class="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:border-blue-500 outline-none transition-colors" placeholder="Notes internes..." />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['formData']);
</script>
