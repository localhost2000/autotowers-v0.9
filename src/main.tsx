import { ViteReactSSG } from 'vite-react-ssg/single-page'
import App from './App'
import './global.css'

export const createRoot = ViteReactSSG(<App />)
