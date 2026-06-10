<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-6">Outils</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="p-4 border border-gray-800 rounded">
        <h3 class="text-xl mb-4">Export</h3>
        <div class="space-y-2">
          <button @click="exportCSV" class="w-full p-2 bg-gray-700 rounded">Exporter en CSV</button>
          <button @click="exportJSON" class="w-full p-2 bg-gray-700 rounded">Exporter en JSON</button>
        </div>
      </div>

      <div class="p-4 border border-gray-800 rounded">
        <h3 class="text-xl mb-4">Import</h3>
        <div class="space-y-2">
          <div class="text-sm text-gray-400 mb-2">Attention: L'import CSV réinitialise la base de données.</div>
          <input type="file" @change="importCSV" class="block w-full text-sm text-gray-400" />
          <input type="file" @change="importJSON" class="block w-full text-sm text-gray-400" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { db } from '../db'

const exportCSV = async () => {
  const records = await db.records.toArray()
  if (records.length === 0) return alert('Aucun record à exporter.')
  
  const headers = ['id', 'serviceName', 'ip', 'url', 'description', 'note']
  const csvRows = [headers.join(',')]
  
  records.forEach(r => {
    csvRows.push([r.id, r.serviceName, r.ip, r.url, r.description, r.note].join(','))
  })
  
  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('download', 'z-services-export.csv')
  a.click()
}

const exportJSON = async () => {
  const records = await db.records.toArray()
  const blob = new Blob([JSON.stringify(records, null, 2)], { type: 'application/json' })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('download', 'z-services-export.json')
  a.click()
}

const importCSV = async (event) => {
  const file = event.target.files[0]
  if (!file) return
  
  if (!confirm('L\'import CSV va réinitialiser la base de données. Continuer ?')) return

  const text = await file.text()
  const rows = text.split('\n').map(row => row.split(','))
  
  await db.records.clear()
  await db.tags.clear()
  
  // Skip header
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i]
    if (row.length >= 6) {
      await db.records.add({
        serviceName: row[1],
        ip: row[2],
        url: row[3],
        description: row[4],
        note: row[5]
      })
    }
  }
  alert('Importation terminée.')
}

const importJSON = async (event) => {
  const file = event.target.files[0]
  if (!file) return

  const text = await file.text()
  const data = JSON.parse(text)
  
  await db.records.clear()
  await db.tags.clear()
  
  for (const item of data) {
    await db.records.add(item)
  }
  alert('Importation JSON terminée.')
}
</script>
