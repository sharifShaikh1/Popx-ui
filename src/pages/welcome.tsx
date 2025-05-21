import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F7F8F9]">
      <div className="w-full max-w-sm px-6 py-10 bg-white border border-[#E0E0E0] rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-[#1D2226] leading-tight">
          Welcome to PopX
        </h2>
        <p className="text-sm text-[#3A3A3A] mt-2 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="mt-6 space-y-4">
          <button
            onClick={() => navigate("/register")}
            className="w-full py-3 bg-[#6C25FF] text-white rounded-lg font-medium text-base hover:bg-[#5B21E6] transition-colors"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/login")}
            className="w-full py-3 bg-[#EEE5FF] text-[#6C25FF] rounded-lg font-medium text-base hover:bg-[#E0D5FF] transition-colors"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}