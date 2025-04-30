import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Animated Background with Zoom Effect */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-70 animate-zoom"
        style={{ backgroundImage: "url('/image/jj.jpg')" }}
      ></div>

      {/* Image Overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-1"></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center p-6 sm:px-10 bg-gradient-to-r border-b shadow-lg">
          <div className="flex items-center space-x-4">
            {/* Animated Logo */}
            <Image
              src="/image/salazar-removebg-preview.png"
              alt="Alumni Logo"
              width={120}
              height={40}
              className="object-contain animate__animated animate__fadeIn animate__delay-1s"
            />
            <span className="text-4xl font-bold text-white">SCSIT</span>
          </div>
          <div className="hidden sm:flex gap-6 text-lg text-white">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/Departments" className="hover:underline">Departments</Link>
            <Link href="/gallery" className="hover:underline">Gallery</Link>
            <Link href="/aboutus" className="hover:underline">About Us</Link>
            <Link href="/login" className="hover:underline">Login</Link>
          </div>
        </header>

        <section className="bg-gradient-to-r text-center py-5 animate__animated animate__fadeIn">
          <p className="text-lg sm:text-2xl font-medium mb-4">
            Welcome to the Alumni Salazar Colleges of Science and Institute of Technology! 🎓 Connect, Collaborate, and Celebrate Success with your peers.
          </p>
          <p className="text-sm sm:text-lg">
            Our alumni are making a difference all around the world. Explore the network and stay engaged!
          </p>
        </section>

        <main className="flex-1 flex justify-center items-center overflow-hidden py-6">
          <div className="flex w-full gap-8 sm:w-[1000px]">

            {/* Alumni Departments Section */}
            <div className="flex flex-col w-1/2 gap-8">
              <div className="w-full flex flex-col items-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform transform hover:shadow-2xl">
                <div className="relative w-full">
                  <Image
                    src="/image/c1.jpg"
                    alt="Department"
                    className="w-full h-[300px] object-cover"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="absolute bottom-6 left-6 flex flex-col text-white">
                  <p className="text-lg mb-4">Explore Alumni Departments & Programs</p>
                  <Link href="/department">
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-400 transition">
                      View Departments
                    </button>
                  </Link>
                </div>
              </div>

              {/* Alumni Gallery Section */}
              <div className="w-full flex flex-col items-center bg-gradient-to-r from-green-500 to-teal-500 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform transform hover:shadow-2xl">
                <div className="relative w-full">
                  <Image
                    src="/image/c5-Picsart-AiImageEnhancer.jpg"
                    alt="Gallery"
                    className="w-full h-[300px] object-cover"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="absolute bottom-6 left-6 flex flex-col text-white">
                  <p className="text-lg mb-4">Discover Alumni Memories & Events</p>
                  <Link href="/gallery">
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-400 transition">
                      View Gallery
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Alumni News and Updates Section */}
            <div className="flex flex-col w-1/2 gap-8">
              <div className="w-full flex flex-col items-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform transform hover:shadow-2xl">
                <div className="relative w-full">
                  <Image
                    src="/image/c3-Picsart-AiImageEnhancer.jpg"
                    alt="News"
                    className="w-full h-[300px] object-cover"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="absolute bottom-6 left-6 flex flex-col text-white">
                  <p className="text-lg mb-4">Stay Updated with the Latest Alumni News</p>
                  <Link href="/news">
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-400 transition">
                      Activity Program
                    </button>
                  </Link>
                </div>
              </div>

              {/* Upcoming Alumni Events Section */}
              <div className="w-full flex flex-col items-center bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform transform hover:shadow-2xl">
                <div className="relative w-full">
                  <Image
                    src="/image/c4-Picsart-AiImageEnhancer.jpg"
                    alt="Events"
                    className="w-full h-[300px] object-cover"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="absolute bottom-6 left-6 flex flex-col text-white">
                  <p className="text-lg mb-4">Join Upcoming Alumni Events & Reunions</p>
                  <Link href="/events">
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-400 transition">
                      Alumni Achievements
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-center py-10 text-white">
          <p>&copy; 2025 Salazar Colleges of Science and Institute of Technology | All Rights Reserved</p>
        </footer>
      </div>

      
    </div>
  );
}
