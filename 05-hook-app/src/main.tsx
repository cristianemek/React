import { createRoot } from 'react-dom/client'
import './index.css'
// import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'

createRoot(document.getElementById('root')!).render(
    <FormWithCustomHook />
)
