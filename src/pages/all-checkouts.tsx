import { GetServerSideProps } from 'next'

import styles from '../styles/all-checkouts.module.css'
import { Card } from '../components/card'
import { CheckoutModel } from '../types/checkout-model'

type Props = {
  checkouts: Array<CheckoutModel>
}

const AllCheckouts = ({ checkouts }: Props) => {
  if (!checkouts.length) {
    return (
      <div className={styles.warnZero}>
        <p>Ainda não há nenhum checkout adicionado.</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {
        checkouts.map((checkout, index) => (
          <Card key={index} checkout={checkout} />
        ))
      }
    </div>
  )
}

export default AllCheckouts

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:7000/checkouts')
  const data = await response.json()
  return {
    props: { checkouts: data }
  }
}
