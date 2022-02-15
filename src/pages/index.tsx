import styles from '../styles/Home.module.css'
import router from 'next/router'

const Home = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => router.push('/add-checkout')}>Adicionar um checkout</button>
      <button className={styles.button} onClick={() => router.push('/all-checkouts')}>Listar todos os checkouts</button>
    </div>
  )
}

export default Home
