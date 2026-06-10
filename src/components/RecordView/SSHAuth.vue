<template>
  <section class="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-sm">
    <h2 class="text-xl font-semibold mb-6 pb-2 border-b border-gray-800 text-blue-400">Authentification SSH</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label class="block text-sm font-medium mb-2 text-gray-300">Utilisateur SSH 0</label>
        <input v-model="formData.ssh1User" type="text" class="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:border-blue-500 outline-none transition-colors" placeholder="Ex: root" />
      </div>
      <div>
        <label class="block text-sm font-medium mb-2 text-gray-300">Mot de passe SSH 0</label>
        <input v-model="formData.ssh1String" type="password" class="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:border-blue-500 outline-none transition-colors" placeholder="••••••••" />
      </div>
      <div>
        <label class="block text-sm font-medium mb-2 text-gray-300">Utilisateur SSH 1</label>
        <input v-model="formData.ssh2User" type="text" class="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:border-blue-500 outline-none transition-colors" placeholder="Ex: admin" />
      </div>
      <div>
        <label class="block text-sm font-medium mb-2 text-gray-300">Mot de passe SSH 1</label>
        <input v-model="formData.ssh2String" type="password" class="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:border-blue-500 outline-none transition-colors" placeholder="••••••••" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['formData']);
</script>