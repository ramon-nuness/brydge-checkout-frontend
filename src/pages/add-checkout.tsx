import router from 'next/router'

import styles from '../styles/add-checkout.module.css'
import { useFunctions } from '../functions'

const AddCheckout = () => {
  const { calcTotalPurchase, handleSubmit, totalPurchase } = useFunctions()
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" id="productName" placeholder="Nome do produto" className={styles.input} autoComplete="no" />
          <input type="text" id="productPrice" placeholder="Preço do produto" className={styles.input} autoComplete="no" />
          <input type="text" id="quantityProduct" placeholder="Quantidade do produto" onChange={calcTotalPurchase} className={styles.input} autoComplete="no" />
          <input type="text" id="clientName" placeholder="Nome do cliente" className={styles.input} autoComplete="no" />
          <input type="email" id="clientEmail" placeholder="Nome do email" className={styles.input} autoComplete="no" />
          <input type="text" id="clientAddress" placeholder="Endereço do cliente" className={styles.input} autoComplete="no" />
          <input type="text" readOnly defaultValue={totalPurchase} id="totalPurchase" placeholder="Total de compras" className={styles.input} />
          <button type="submit" className={styles.button}>Adicionar Checkout</button>
          <button type="button" className={styles.back} onClick={() => router.push('/')}>Voltar</button>
        </form>
      </div>
    </div>
  )
}

export default AddCheckout
