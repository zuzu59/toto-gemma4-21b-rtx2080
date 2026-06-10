<template>
  <section class="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-sm">
    <h2 class="text-xl font-semibold mb-6 pb-2 border-b border-gray-800 text-blue-400">Authentification HTML</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label class="block text-sm font-medium mb-2 text-gray-300">Utilisateur HTML 0</label>
        <input v-model="formData.html1User" type="text" class="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:border-blue-500 outline-none transition-colors" placeholder="Ex: user1" />
      </div>
      <div>
        <label class="block text-sm font-medium mb-2 text-gray-300">Mot de passe HTML 0</label>
        <input v-model="formData.html1String" type="password" class="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:border-blue-500 outline-none transition-colors" placeholder="••••••••" />
      </div>
      <div>
        <label class="block text-sm font-medium mb-2 text-gray-300">Utilisateur HTML 1</label>
        <input v-model="formData.html2User" type="text" class="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:border-blue-500 outline-none transition-colors" placeholder="Ex: user2" />
      </div>
      <div>
        <label class="block text-sm font-medium mb-2 text-gray-300">Mot de passe HTML 1</label>
        <input v-model="formData.html2String" type="password" class="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:border-blue-500 outline-none transition-colors" placeholder="••••••••" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['formData']);
</script>