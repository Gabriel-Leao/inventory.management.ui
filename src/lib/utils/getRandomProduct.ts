export const getRandomProduct = () => {
  const productIndex = Math.floor(Math.random() * 3) + 1

  return `/assets/Product${productIndex}.png`
}
