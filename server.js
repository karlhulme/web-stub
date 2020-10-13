import { createApp } from './src/createApp.js'

const PORT = 31280

const app = createApp()

app.listen(PORT, () => {
  console.log(`🌏 Web-Stub is listening at http://localhost:${PORT}`)
})
