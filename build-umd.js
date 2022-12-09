import { exec } from 'child_process'
import fs from 'fs'

const testFolder = './src/components'

const components = fs.readdirSync(testFolder).filter((file) => {
  const fileNameSplitByDot = file.split('.')
  const fileExtension = fileNameSplitByDot[fileNameSplitByDot.length - 1]

  return fileExtension === 'vue'
})

components.forEach((component) => {
  const componentName = component.replace('.vue', '')
  const buildCommand = `COMPONENT_NAME=${componentName} vite build -c vite.config-umd.ts`
  console.log(buildCommand)
  exec(buildCommand)
})
