import React, { FC } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)
console.log(fullConfig.theme.colors.primary)

const App = document.getElementById('root')
const Root: FC = () => {
  return (
    <div className="absolute h-full w-full flex items-center justify-center bg-gray-600">
      <span className="text-3xl">Hello, world</span>
    </div>
  )
}

createRoot(App!).render(<Root />)
