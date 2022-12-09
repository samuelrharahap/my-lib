const { exec } = require('child_process')
const testFolder = './src/components'
const fs = require('fs')

const components = fs.readdirSync(testFolder).filter((file) => {
  const excludeFiles = ['index.ts']
  const fileNameSplitByDot = file.split('.')
  const fileExtension = fileNameSplitByDot[fileNameSplitByDot.length - 1]

  return fileExtension === 'ts' && !excludeFiles.includes(file)
})

components.forEach((component) => {
  const componentName = component.replace('.ts', '')
  const buildCommand = `COMPONENT_NAME=${componentName} vite build -c vite.config-umd.ts`
  console.log(buildCommand)
  exec(buildCommand)
})
