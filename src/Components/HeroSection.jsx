import React, { useState } from 'react';

const slides = [
  {
    title: "Nike React",
    subtitle: "Rewriting sport's playbook for billions of athletes",
    image: "https://images.unsplash.com/photo-1615615228002-890bb61cac6e?q=80&w=1920&auto=format&fit=crop",
    label: "Read More",
  },
  {
    title: "CoolApps",
    subtitle: "From mobile apps to gaming consoles",
    image: "https://media.istockphoto.com/id/1453838542/photo/last-light-on-mount-sneffels.jpg?s=612x612&w=0&k=20&c=IBOZYpAjhV5hFEL8yKYmY2ZCyCaGEOrXR5VZI13NMRI=",
    label: "Read More",
  },
  {
    title: "Grumpy",
    subtitle: "Bringing Art to everything",
    image: "https://images.unsplash.com/photo-1629666451094-8908989cae90?q=80&w=1920&auto=format&fit=crop",
    label: "Read More",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-10 ">
      <div className="relative w-full h-[30rem] md:h-[calc(100vh-106px)] rounded-2xl overflow-hidden shadow-2xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-[30rem] md:h-[calc(100vh-106px)] bg-cover bg-center bg-no-repeat flex flex-col"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                <span className="block text-white">{slide.title}</span>
                <span className="block text-white text-xl md:text-3xl">{slide.subtitle}</span>
                <div className="mt-5">
                  <a
                    href="#"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white text-black hover:bg-gray-100"
                  >
                    {slide.label}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-5 p-2 bg-black bg-opacity-40 text-white rounded-full hover:bg-opacity-70 transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-5 p-2 bg-black backdrop-blur-3xl bg-opacity-10 text-white rounded-full hover:bg-opacity-70 transition"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
