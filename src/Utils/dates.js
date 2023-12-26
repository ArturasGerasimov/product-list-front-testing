export const getFiveDaysFromNowFormatted = () => {
  const today = new Date()
  const fiveDaysLater = new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000) // Adding 5 days

  const year = fiveDaysLater.getFullYear()
  const month = String(fiveDaysLater.getMonth() + 1).padStart(2, "0")
  const day = String(fiveDaysLater.getDate()).padStart(2, "0")
  const hours = String(fiveDaysLater.getHours()).padStart(2, "0")
  const minutes = String(fiveDaysLater.getMinutes()).padStart(2, "0")

  return `${year}-${month}-${day} ${hours}:${minutes}`
}

export const getCurrentTimeFormatted = () => {
  const now = new Date()

  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, "0") // Months are 0-indexed
  const day = String(now.getDate()).padStart(2, "0")
  const hours = String(now.getHours()).padStart(2, "0")
  const minutes = String(now.getMinutes()).padStart(2, "0")

  return `${year}-${month}-${day} ${hours}:${minutes}`
}
