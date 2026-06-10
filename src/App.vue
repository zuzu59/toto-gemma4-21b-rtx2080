<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="navbar-left">
        <input 
          type="text" 
          placeholder="Rechercher..." 
          class="search-input" 
          @input="handleSearch"
        />
        <h1 class="title">
          <router-link to="/" style="text-decoration: none; color: inherit;">Z-Services</router-link>
        </h1>
      </div>
      <div class="hamburger" @click="toggleDrawer">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    
    <div v-if="drawerOpen" class="drawer open">
      <nav class="drawer-nav">
        <router-link to="/">Records</router-link>
        <router-link to="/tags">Tags</router-link>
        <router-link to="/tools">Tools</router-link>
        <router-link to="/help">Help</router-link>
        <router-link to="/about">About</router-link>
        <hr class="drawer-divider">
        <button @click="resetFactory" class="bg-red-900 px-4 py-2 rounded text-red-200 border border-red-700">Reset Factory</button>
      </nav>
    </div>

    <main>
      <router-view />
    </main>
    
    <footer class="p-2 text-center text-xs text-gray-500 border-t border-gray-800">
      Version {{ $appVersion }}
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { session } from './store/session'
import { db } from './db'

const drawerOpen = ref(false)
const router = useRouter()

const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value
}

const handleSearch = (e) => {
  // Placeholder for search logic
}

const resetFactory = async () => {
  if (confirm('Être sûr de vouloir réinitialiser complètement l\'application ? Cela supprimera tous les records, les tags et le mot de passe maître.')) {
    try {
      await db.records.clear()
      await db.tags.clear()
      await db.config.clear()
      session.wipeMemory()
      localStorage.clear()
      sessionStorage.clear()
      router.push('/')
      alert('Application réinitialisée avec succès.')
    } catch (e) {
      console.error(e)
      alert('Erreur lors de la réinitialisation.')
    }
  }
}

onMounted(() => {
  window.addEventListener('click', (e) => {
    if (drawerOpen.value && !e.target.closest('.hamburger') && !e.target.closest('.drawer')) {
      drawerOpen.value = false
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('click', (e) => {
    if (drawerOpen.value && !e.target.closest('.hamburger') && !e.target.closest('.drawer')) {
      drawerOpen.value = false
    }
  })
})

router.afterEach(() => {
  drawerOpen.value = false
})
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
  display: flex;
  flex-direction: column;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #111;
  border-bottom: 1px solid #333;
  position: sticky;
  top: 0;
  z-index: 50;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search-input {
  background-color: #222;
  border: 1px solid #444;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  width: 150px;
  max-width: 100%;
}

.title {
  margin: 0;
  white-space: nowrap;
  font-size: 1.25rem;
  font-weight: bold;
}

.hamburger {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 5px;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background-color: white;
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background-color: #111;
  border-left: 1px solid #333;
  transition: transform 0.3s ease;
  transform: translateX(100%);
  z-index: 100;
  padding: 2rem 1rem;
  box-shadow: -5px 0 15px rgba(0,0,0,0.5);
}

.drawer.open {
  transform: translateX(0);
}

.drawer-nav {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.drawer-nav a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
}

.drawer-nav a:hover {
  background-color: #222;
}

.drawer-divider {
  border: 0;
  border-top: 1px solid #333;
  margin: 1rem 0;
}

main {
  padding: 1rem;
  flex: 1;
}

footer {
  border-top: 1px solid #333;
}
</style>
