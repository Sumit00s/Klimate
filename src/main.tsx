import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/layout'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Layout>Hello</Layout>
  </BrowserRouter>
)
