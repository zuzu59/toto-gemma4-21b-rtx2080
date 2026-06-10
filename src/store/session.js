import { reactive } from 'vue'
import { deriveKey } from '../crypto'
import { db } from '../db'

export const session = reactive({
  isLocked: true,
  masterKey: null,
  salt: null,
  
  async unlock(password) {
    try {
      let storedSalt = await db.config.get('salt')
      
      if (!storedSalt) {
        const newSalt = crypto.getRandomValues(new Uint8Array(16))
        await db.config.put({ id: 'salt', value: newSalt })
        this.salt = newSalt
        return false
      }

      this.salt = newSalt.value
      this.masterKey = await deriveKey(password, this.salt)
      this.isLocked = false
      return true
    } catch (e) {
      console.error(e)
      return false
    }
  },
  
  lock() {
    this.wipeMemory()
    this.isLocked = true
  },

  wipeMemory() {
    this.masterKey = null
    this.salt = null
  }
})
