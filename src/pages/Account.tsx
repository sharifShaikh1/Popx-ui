import { useEffect, useState } from "react"

type FormData = {
  fullName: string
  phone: string
  email: string
  password: string
  companyName: string
  agency: string
}

export default function Account() {
  const [data, setData] = useState<FormData | null>(null)

  useEffect(() => {
    const savedData = localStorage.getItem("accountData")
    if (savedData) {
      setData(JSON.parse(savedData))
    }
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
      <div className="flex items-start space-x-4">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="avatar"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-sm">{data?.fullName || "No name provided"}</h3>
          <p className="text-sm text-gray-500 mb-1">{data?.email || "No email provided"}</p>
         
             <p className="text-sm text-gray-600">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  )
}
