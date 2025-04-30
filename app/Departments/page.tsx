import Image from "next/image";
import Link from "next/link";

export default function DepartmentsPage() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom z-0 opacity-60"
        style={{ backgroundImage: "url('/image/jj.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center p-6 sm:px-12 bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-800 shadow-lg">
          <div className="flex items-center space-x-4">
            <Image
              src="/image/salazar-removebg-preview.png"
              alt="Logo"
              width={100}
              height={40}
              className="object-contain"
            />
            <span className="text-3xl font-bold tracking-wide">SCSIT Departments</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-lg font-medium">
            <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link href="/gallery" className="hover:text-yellow-400 transition">Gallery</Link>
            <Link href="/aboutus" className="hover:text-yellow-400 transition">About Us</Link>
            <Link href="/login" className="hover:text-yellow-400 transition">Login</Link>
          </nav>
        </header>

        {/* Page Intro */}
        <section className="text-center py-12 px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4 animate__animated animate__fadeInDown">Explore Our Departments</h1>
          <p className="text-lg text-gray-300 animate__animated animate__fadeInUp animate__delay-1s">
            Each department is a hub of excellence, producing alumni who are leaders in their fields.
          </p>
        </section>

       
        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 pb-16 max-w-7xl mx-auto">
  {departments.map((dept, index) => (
    <div
      key={index}
      className="relative bg-gradient-to-br from-purple-800 to-indigo-700 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center group overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
    >
      {/* Centered Circle Image */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white group-hover:scale-110 transition-transform duration-300 animate-float mb-6">
        <Image
          src={dept.image}
          alt={dept.title}
          width={96}
          height={96}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="space-y-3 animate__animated animate__fadeInUp">
        <h2 className="text-xl font-bold text-white">{dept.title}</h2>
        <p className="text-sm text-gray-300">{dept.description}</p>
        <Link href={dept.link}>
          <button className="mt-3 bg-yellow-400 text-black py-2 px-5 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  ))}
</main>


        {/* Footer */}
        <footer className="bg-gradient-to-r from-purple-800 to-pink-700 text-center py-6 text-white">
          <p>&copy; 2025 Salazar Colleges of Science and Institute of Technology | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}

// Mock departments data
const departments = [
  {
    title: "College of Computer Studies",
    description: "Innovating the future through code, systems, and data.",
    image: "/image/c1.jpg",
    link: "/department/it",
  },
  {
    title: "College of Nursing",
    description: "Focusing on algorithms, theory, and computational solutions.",
    image: "/image/c4.jpg",
    link: "/department/cs",
  },
  {
    title: "College of Maritime",
    description: "Bridging business and technology through systems integration.",
    image: "/image/k.jpg",
    link: "/department/is",
  },
  {
    title: "College of Engineering",
    description: "Leading in service, tourism, and event management.",
    image: "/image/kk.jpg",
    link: "/department/hm",
  },
  {
    title: "College of Education",
    description: "Empowering future entrepreneurs and corporate leaders.",
    image: "/image/HH.jpg",
    link: "/department/ba",
  },
  {
    title: "College of Criminology",
    description: "Upholding justice through discipline and integrity.",
    image: "/image/J.jpg",
    link: "/department/crim",
  },
];
