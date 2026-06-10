const ITERATIONS = 600000;
const SALT_SIZE = 16;
const IV_SIZE = 12;

/**
 * Derives a key from a master password.
 * @param {string} password 
 * @param {Uint8Array} salt 
 * @returns {Promise<CryptoKey>}
 */
export async function deriveKey(password, salt) {
  const encoder = new TextEncoder();
  const baseKey = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: ITERATIONS,
      hash: 'SHA-256',
    },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

/**
 * Encrypts a string.
 * @param {string} text 
 * @param {CryptoKey} key 
 * @returns {Promise<{ciphertext: ArrayBuffer, iv: Uint8Array}>}
 */
export async function encrypt(text, key) {
  const encoder = new TextEncoder();
  const iv = crypto.getRandomValues(new Uint8Array(IV_SIZE));
  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    encoder.encode(text)
  );

  return {
    ciphertext: encrypted,
    iv: iv
  };
}

/**
 * Decrypts a ciphertext.
 * @param {ArrayBuffer} ciphertext 
 * @param {Uint8Array} iv 
 * @param {CryptoKey} key 
 * @returns {Promise<string>}
 */
export async function decrypt(ciphertext, iv, key) {
  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    key,
    ciphertext
  );

  return new TextDecoder().decode(decrypted);
}

/**
 * Wipes a Uint8Array.
 * @param {Uint8Array} array 
 */
export function wipe(array) {
  array.fill(0);
}
