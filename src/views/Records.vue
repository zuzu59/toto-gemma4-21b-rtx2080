<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-bold">Records</h2>
      <button @click="$router.push('/tags')" class="bg-blue-600 px-4 py-2 rounded">Tags</button>
      <button @click="$router.push('/records/create')" class="bg-green-600 px-4 py-2 rounded">New Record</button>
    </div>

    <div class="mb-4">
      <input 
        v-model="searchQuery" 
        placeholder="Rechercher (ex: ssh and ip)..." 
        class="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
      />
    </div>

    <table class="w-full text-left border-collapse">
      <thead class="bg-gray-900">
        <tr class="border-b border-gray-700">
          <th @click="setSort('serviceName')" class="p-2 cursor-pointer">Nom ↕</th>
          <th @click="setSort('ip')" class="p-2 cursor-pointer">IP ↕</th>
          <th @click="setSort('url')" class="p-2 cursor-pointer">URL ↕</th>
          <th @click="setSort('modifiedAt')" class="p-2 cursor-pointer">Modifié ↕</th>
          <th class="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="paginatedRecords.length > 0" v-for="record in paginatedRecords" :key="record.id" class="border-b border-gray-800 hover:bg-gray-900 transition-colors">
          <td class="p-3">{{ record.serviceName }}</td>
          <td class="p-3">{{ record.ip }}</td>
          <td class="p-3">{{ record.url }}</td>
          <td class="p-3">{{ formatDate(record.modifiedAt) }}</td>
          <td class="p-3">
            <button @click="$router.push(`/records/${record.id}`)" class="text-blue-400 hover:text-blue-300 mr-4">Edit</button>
            <button @click="deleteRecord(record.id)" class="text-red-400 hover:text-red-300">Delete</button>
          </td>
        </tr>
        <tr v-else>
          <td colspan="5" class="p-12 text-center">
            <div class="max-w-md mx-auto space-y-4">
              <h3 class="text-xl font-bold text-gray-200">Aucun record pour le moment</h3>
              <p class="text-gray-400">Commencez par ajouter vos premiers services pour les gérer efficacement.</p>
              <button @click="$router.push('/records/create')" class="bg-green-600 px-6 py-2 rounded font-bold hover:bg-green-700 transition-colors">
                + Créer un record
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="paginatedRecords.length > 0" class="mt-4 flex justify-center gap-2 items-center">
      <button @click="prevPage" :disabled="currentPage === 1" class="px-4 py-2 bg-gray-700 rounded disabled:opacity-50">Précédent</button>
      <span class="text-sm">Page {{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage * 10 >= filteredRecords.length" class="px-4 py-2 bg-gray-700 rounded disabled:opacity-50">Suivant</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { db } from '../db'
import { formatDate } from '../utils/helpers'

const searchQuery = ref('')
const currentPage = ref(1)
const records = ref([])
const sortBy = ref('modifiedAt')
const sortOrder = ref(-1)

const filteredRecords = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  if (!query) return records.value

  const terms = query.split(/\s+/)
  return records.value.filter(record => {
    const searchableFields = [
      record.serviceName,
      record.ip,
      record.url,
      record.description,
      record.ssh1String,
      record.ssh1User,
      record.ssh2String,
      record.ssh2User,
      record.html1String,
      record.html1User,
      record.html2String,
      record.html2User,
      record.note,
      record.tagIds?.map(id => id).join(', ')
    ].filter(Boolean).join(' ').toLowerCase()

    return terms.every(term => searchableFields.includes(term))
  })
})

const sortedRecords = computed(() => {
  return [...filteredRecords.value].sort((a, b) => {
    let valA = a[sortBy.value] || ''
    let valB = b[sortBy.value] || ''
    return valA.toString().localeCompare(valB.toString(), undefined, { numeric: true }) * sortOrder.value
  })
})

const paginatedRecords = computed(() => {
  const start = (currentPage.value - 1) * 10
  const end = start + 10
  return sortedRecords.value.slice(start, end)
})

onMounted(async () => {
  records.value = await db.records.toArray()
})

const nextPage = () => currentPage.value++
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const deleteRecord = async (id) => {
  if (confirm('Voulez-vous vraiment supprimer cet enregistrement ?')) {
    await db.records.delete(id)
    records.value = await db.records.toArray()
  }
}
</script>
