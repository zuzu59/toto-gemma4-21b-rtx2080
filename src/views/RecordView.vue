<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-4xl font-extrabold text-white mb-4">
      <template v-if="isEditing">Modifier le Record</template>
      <template v-else>Nouveau Record</template>
    </h1>
    
    <p class="text-gray-400 mb-8">
      Remplissez les détails ci-dessous pour configurer votre service. Chaque champ est essentiel pour une configuration correcte.
    </p>

    <div class="space-y-6">
      <GeneralInfo :formData="formData" />
      <SSHAuth :formData="formData" />
      <HTMLAuth :formData="formData" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { db } from '../db'
import GeneralInfo from '../components/RecordView/GeneralInfo.vue'
import SSHAuth from '../components/RecordView/SSHAuth.vue'
import HTMLAuth from '../components/RecordView/HTMLAuth.vue'

const router = useRouter()
const route = useRoute()
const record = ref(null)
const isEditing = ref(false)

const formData = ref({
  serviceName: '',
  ip: '',
  url: '',
  description: '',
  note: '',
  ssh1User: '',
  ssh1String: '',
  ssh2User: '',
  ssh2String: '',
  html1User: '',
  html1String: '',
  html2User: '',
  html2String: '',
  createdAt: null,
  modifiedAt: null,
  tagIds: []
})

const save = async () => {
  try {
    if (isEditing.value) {
      const currentRecord = record.value
      await db.records.update(currentRecord.id, {
        ...formData.value,
        modifiedAt: new Date().toISOString()
      })
    } else {
      formData.value.createdAt = new Date().toISOString()
      formData.value.modifiedAt = new Date().toISOString()
      await db.records.add({
        ...formData.value,
        tagIds: []
      })
    }
    router.push('/')
  } catch (err) {
    console.error(err)
    alert('Erreur lors de l\'enregistrement.')
  }
}

const cancel = () => {
  router.push('/')
}

onMounted(async () => {
  const id = route.params.id
  const isNewRoute = route.name === 'NewRecord'
  
  if (isNewRoute) {
    isEditing.value = true
    Object.keys(formData.value).forEach(key => {
      if (key !== 'createdAt' && key !== 'modifiedAt' && key !== 'tagIds') {
        formData.value[key] = (key.includes('Ids') ? [] : key.includes('String') ? '' : '')
      }
    })
  } else if (id) {
    try {
      const fetchedRecord = await db.records.get(Number(id))
      if (fetchedRecord) {
        record.value = fetchedRecord
        Object.assign(formData.value, fetchedRecord)
      } else {
        router.push('/')
      }
    } catch (err) {
      console.error("Erreur lors du chargement du record:", err)
      router.push('/')
    }
  } else {
    router.push('/')
  }
})
</script>

<style scoped>
</style>
