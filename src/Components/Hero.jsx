import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="relative bg-red-500 text-white">
        <div className="container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center h-screen text-center">
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Build Your Dream Website
              </h1>

              {/* Subheadline */}
              <p className="mt-4 text-lg sm:text-xl lg:text-2xl max-w-2xl">
                Tailored for your needs, designed to impress. Start building
                with modern tools and responsive design.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex space-x-4">
                <a
                  href="#"
                  className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="px-6 py-3 bg-white text-gray-800 text-lg font-medium rounded-md hover:bg-gray-100"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
