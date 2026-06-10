<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Tags</h2>
      <button @click="addNewTag" class="bg-blue-600 px-4 py-2 rounded">+ Nouveau Tag</button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="tag in tags" :key="tag.id" class="p-4 border border-gray-800 rounded flex justify-between items-center">
        <span>{{ tag.name }}</span>
        <button @click="deleteTag(tag.id)" class="text-red-500">Supprimer</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db } from '../db'

const tags = ref([])

onMounted(async () => {
  tags.value = await db.tags.toArray()
})

const addNewTag = async () => {
  const name = prompt('Nom du tag ?')
  if (name) {
    await db.tags.add({ name })
    tags.value = await db.tags.toArray()
  }
}

const deleteTag = async (id) => {
  if (confirm('Supprimer ce tag ?')) {
    await db.tags.delete(id)
    tags.value = await db.tags.toArray()
  }
}
</script>
