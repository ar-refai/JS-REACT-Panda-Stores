import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'panda-stores-ecommerce',

  projectId: 'nmh18v7y',
  dataset: 'panda-stores',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
