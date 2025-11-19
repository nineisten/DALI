import './style.css'
import 'htmx.org'
import { setupCounter } from './counter'

setupCounter(document.querySelector('#counter') as HTMLButtonElement)
