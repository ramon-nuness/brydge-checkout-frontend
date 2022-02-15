import { FormEvent, useState } from "react"

export const useFunctions = () => {
  const [totalPurchase, setTotalPurchase] = useState(0)

  function calcTotalPurchase() {
    const productPrice = (document.getElementById("productPrice") as HTMLInputElement).value
    const quantityProduct = (document.getElementById("quantityProduct") as HTMLInputElement).value
    const inputTotalPurchase = (document.getElementById("totalPurchase") as HTMLInputElement)
    const total = Number(productPrice) * Number(quantityProduct)

    inputTotalPurchase.value = total.toString()
    setTotalPurchase(total)
    return total
  }

  function resetInputs() {
    (document.getElementById("productName") as HTMLInputElement).value = "";
    (document.getElementById("productPrice") as HTMLInputElement).value = "";
    (document.getElementById("quantityProduct") as HTMLInputElement).value = "";
    (document.getElementById("clientName") as HTMLInputElement).value = "";
    (document.getElementById("clientEmail") as HTMLInputElement).value = "";
    (document.getElementById("clientAddress") as HTMLInputElement).value = "";
    (document.getElementById("totalPurchase") as HTMLInputElement).value = "0";
    setTotalPurchase(0)
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const productName = (document.getElementById("productName") as HTMLInputElement).value
    const productPrice = (document.getElementById("productPrice") as HTMLInputElement).value
    const quantityProduct = (document.getElementById("quantityProduct") as HTMLInputElement).value
    const clientName = (document.getElementById("clientName") as HTMLInputElement).value
    const clientEmail = (document.getElementById("clientEmail") as HTMLInputElement).value
    const clientAddress = (document.getElementById("clientAddress") as HTMLInputElement).value

    const checkout = {
      productName,
      productPrice,
      quantityProduct,
      clientName,
      clientEmail,
      clientAddress,
      totalPurchase
    }
    const response = await fetch('http://localhost:7000/checkout', {
      body: JSON.stringify(checkout),
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    await response.json()
    resetInputs()
  }

  return {
    calcTotalPurchase,
    handleSubmit,
    totalPurchase
  }
}
