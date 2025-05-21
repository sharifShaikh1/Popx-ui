import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Signin to your PopX account</h2>
      <p className="text-sm text-gray-500 mt-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form className="mt-6 space-y-4">
        <div>
          <label className="text-sm text-purple-700 font-medium">Email Address</label>
          <input type="email" placeholder="Enter email address"
            className="w-full border p-2 rounded mt-1" />
        </div>
        <div>
          <label className="text-sm text-purple-700 font-medium">Password</label>
          <input type="password" placeholder="Enter password"
            className="w-full border p-2 rounded mt-1" />
        </div>

        <button type="button" onClick={() => navigate("/account")}
          className="w-full bg-gray-300 text-white py-3 rounded font-medium cursor-pointer">
          Login
        </button>
      </form>
    </div>
  )
}
