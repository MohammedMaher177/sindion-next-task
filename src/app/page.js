import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import styles from './page.module.css'
import Testimonials from '../components/Testimonials/Testimonials.jsx'

export default function Home() {
  return (
    <main>
     <Testimonials />
    </main>
  )
}
