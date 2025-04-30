import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: "url('/image/c.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900 to-black opacity-70 z-0"></div>

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
            <span className="text-3xl font-bold tracking-wide">SCSIT Gallery</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-lg font-medium">
            <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link href="/gallery" className="hover:text-yellow-400 transition">Gallery</Link>
            <Link href="/aboutus" className="hover:text-yellow-400 transition">About Us</Link>
            <Link href="/login" className="hover:text-yellow-400 transition">Login</Link>
          </nav>
        </header>

        {/* Page Intro */}
        <section className="text-center py-12 px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeInDown">
            SCSIT Memories in Frames
          </h1>
          <p className="text-lg text-gray-300 animate__animated animate__fadeInUp animate__delay-1s">
            A look back at the vibrant campus life, academic achievements, and cherished memories at Salazar Colleges.
          </p>
        </section>

        {/* Gallery Grid */}
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 pb-20 max-w-7xl mx-auto">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-3xl shadow-2xl border border-gray-700 hover:scale-105 transition-transform duration-500"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={500}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-purple-800 to-pink-700 text-center py-6 text-white mt-auto">
          <p>&copy; 2025 Salazar Colleges of Science and Institute of Technology | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}

// Gallery Data
const galleryImages = [
  { title: "IT ", src: "/image/c1.jpg", alt: "Foundation Event" },
  { title: "Nursing ", src: "/image/ll.jpg", alt: "Culture Show" },
  { title: "Maritime ", src: "/image/l2-Picsart-AiImageEnhancer.jpg", alt: "Maritime Event" },
  { title: "Engineering ", src: "/image/p.jpg", alt: "Engineering Exhibit" },
  { title: "Education ", src: "/image/HH-Picsart-AiImageEnhancer.jpg", alt: "Seminar" },
  { title: "Criminology ", src: "/image/c11.jpg", alt: "Criminology" },
];
