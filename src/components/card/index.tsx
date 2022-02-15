import { CheckoutModel } from '../../types/checkout-model'
import styles from './styles.module.css'

type Props = {
  checkout: CheckoutModel
}

export const Card = ({ checkout }: Props) => {
  function getDate() {
    const date = new Date(checkout.date)
    const datePurchase = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    return datePurchase
  }

  return (
    <div className={styles.card__container} >
      <div className={styles.card}>
        <div className={styles.card__content}>
          <h3 className={styles.card__header}>{checkout.productName}</h3>
          <p style={{ margin: 0 }}>Data da compra: {getDate()}</p>
          <div>
            <p style={{ margin: 0 }}>
              <strong>Preço:</strong> R$ {Number(checkout.productPrice).toFixed(2)}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Preço em dólar:</strong> R$ {Number(checkout.dollarPrice).toFixed(2)}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Quantidade comprada:</strong> {checkout.quantityProduct}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Valor da compra:</strong> R$ {Number(checkout.totalPurchase).toFixed(2)}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Cliente:</strong> {checkout.clientName}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Email:</strong> {checkout.clientEmail}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Endereço:</strong> {checkout.clientAddress}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
