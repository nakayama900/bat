import Button from "@components/button"
import { NotificationContext } from "@context/notifications"

const phoneCall = async (callback: (data: any) => void) => {
  const response = await fetch('/api/phone', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      phone: '+3475307972',
    }),
  })
  const data = await response.json()

  callback(data)
}

export default function () {
  const [_, { addNotification }] = useContext(NotificationContext)
  return (
    <Button onClick={() => {
      phoneCall(console.log)
      addNotification!('Phone call sent')
    }}>
      <div class="i-carbon-phone-voice w-6 h-6" />
    </Button>
  )
}