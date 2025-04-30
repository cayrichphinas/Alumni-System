import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Animated Zoom Background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom-slow"
        style={{ backgroundImage: "url('/image/jj.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-70 backdrop-blur-sm"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl w-full max-w-md text-center border border-white/20">
        <Image
          src="/image/salazar-removebg-preview.png"
          alt="SCSIT Logo"
          width={100}
          height={100}
          className="mx-auto mb-4"
        />
        <h2 className="text-3xl font-bold mb-2 text-yellow-400"> SCSIT ALUMNI LOGIN</h2>
        <p className="text-sm text-gray-300 mb-6">Welcome back! Please log in to connect.</p>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="bg-white/20 placeholder-gray-300 text-white px-4 py-3 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white/20 placeholder-gray-300 text-white px-4 py-3 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-sm">
          <p>
            Don't have an account?{" "}
            <Link href="/register" className="text-yellow-400 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center text-sm text-gray-400 py-4 z-10">
        © 2025 Salazar Colleges of Science and Institute of Technology - Alumni System
      </footer>

      
    </div>
  );
}
