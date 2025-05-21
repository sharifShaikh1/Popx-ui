import { useNavigate } from "react-router-dom"
import { useState } from "react"

type FormData = {
  fullName: string
  phone: string
  email: string
  password: string
  companyName: string
  agency: string
}

type FormErrors = {
  fullName?: string
  phone?: string
  email?: string
  password?: string
  companyName?: string
  agency?: string
}

export default function Register() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
    agency: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: undefined }) // Clear error on change
  }

  const validate = () => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"

    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Phone number must be 10 digits"

    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Invalid email address"

    if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters"

    if (!formData.agency) newErrors.agency = "Please select if you are an agency"

    if (formData.agency === "yes" && !formData.companyName.trim()) {
      newErrors.companyName = "Company name is required for agencies"
    }

    if (formData.agency === "no" && !formData.companyName.trim()) {
      newErrors.companyName = "Company name is required even if not an agency"
    }

    return newErrors
  }

  const handleSubmit = () => {
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    navigate("/account")
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Create your PopX account</h2>

      <form className="mt-6 space-y-4">
        {[
          { label: "Full Name", name: "fullName" },
          { label: "Phone number", name: "phone" },
          { label: "Email address", name: "email" },
          { label: "Password", name: "password" },
          { label: "Company name", name: "companyName" }
        ].map(({ label, name }) => (
          <div key={name}>
            <label className="text-sm text-purple-700 font-medium">
              {label} {(name !== "companyName") && "*"}
            </label>
            <input
              type={name === "password" ? "password" : "text"}
              name={name}
              value={formData[name as keyof FormData]}
              onChange={handleChange}
              placeholder={`Enter ${label.toLowerCase()}`}
              className="w-full border p-2 rounded mt-1"
            />
            {errors[name as keyof FormErrors] && (
              <p className="text-red-500 text-sm">{errors[name as keyof FormErrors]}</p>
            )}
          </div>
        ))}

        <div className="text-sm font-medium text-gray-700">Are you an Agency?*</div>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={formData.agency === "yes"}
              onChange={handleChange}
              className="text-purple-600"
            />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="agency"
              value="no"
              checked={formData.agency === "no"}
              onChange={handleChange}
              className="text-purple-600"
            />
            <span>No</span>
          </label>
        </div>
        {errors.agency && <p className="text-red-500 text-sm">{errors.agency}</p>}

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-purple-600 text-white py-3 rounded font-medium mt-4"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}
