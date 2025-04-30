import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Background Overlay */}
      <div
  className="absolute inset-0 bg-cover bg-center opacity-20 z-0 animate-zoom-slow"
  style={{ backgroundImage: "url('/image/c.jpg')" }}
></div>

      <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900 to-black opacity-80 z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center p-6 sm:px-12 bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-800 shadow-xl">
          <div className="flex items-center space-x-4">
            <Image
              src="/image/salazar-removebg-preview.png"
              alt="SCSIT Logo"
              width={100}
              height={40}
              className="object-contain"
            />
            <span className="text-3xl font-bold tracking-wide">About Us SCSIT</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-lg font-medium">
            <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link href="/gallery" className="hover:text-yellow-400 transition">Gallery</Link>
            <Link href="/aboutus" className="hover:text-yellow-400 transition">About Us</Link>
            <Link href="/login" className="hover:text-yellow-400 transition">Login</Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="text-center py-14 px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 animate__animated animate__fadeInDown">
            Welcome to SCSIT Alumni Network
          </h1>
          <p className="text-lg text-gray-300 animate__animated animate__fadeInUp animate__delay-1s">
            At Salazar Colleges of Science and Institute of Technology, our alumni remain a vital part of our legacy — carrying our values into the world. This platform celebrates your journeys, achievements, and connections.
          </p>
        </section>

        {/* Mission and Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-10 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-800 to-purple-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold mb-4">🎯 Our Mission</h2>
            <p className="text-gray-200">
              To foster lifelong engagement among alumni through events, programs, and a strong community that promotes SCSIT's values and excellence.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-700 to-purple-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold mb-4">🚀 Our Vision</h2>
            <p className="text-gray-200">
              To be a global network of empowered alumni contributing meaningfully to society, inspired by the education and spirit of SCSIT.
            </p>
          </div>
        </section>

        {/* Meet the Team / About SCSIT */}
        <section className="px-6 py-16 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About SCSIT</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            Salazar Colleges of Science and Institute of Technology is an institution driven by excellence in education, character formation, and professional training. Through decades of growth, SCSIT has produced alumni who lead in fields ranging from technology to healthcare, maritime, business, and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Image
              src="/image/c2-Picsart-AiImageEnhancer.jpg"
              alt="SCSIT Front"
              width={400}
              height={250}
              className="rounded-2xl shadow-xl object-cover"
            />
            <Image
              src="/image/m.jpg"
              alt="SCSIT Activity"
              width={400}
              height={250}
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-purple-800 to-pink-700 text-center py-6 text-white mt-auto">
          <p>&copy; 2025 Salazar Colleges of Science and Institute of Technology | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}
