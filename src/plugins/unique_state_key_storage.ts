export default defineNuxtPlugin(() => {
  const storage: string[] = []

  return {
    provide: {
      setUniqueKey: (key: string) => {
        if (storage.includes(key)) {
          throw new Error(`Duplicate state key error: "${key}" is already exists.`)
        }
        storage.push(key);
        return key
      }
    }
  }
})