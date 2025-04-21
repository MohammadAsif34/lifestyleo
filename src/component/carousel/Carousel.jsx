import { useEffect, useState } from "react";

export const Carousel = () => {
  const slider = [
    {
      _id: 1,
      img: "https://images.pexels.com/photos/954599/pexels-photo-954599.jpeg",
    },
    {
      _id: 2,
      img: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg",
    },
    {
      _id: 3,
      img: "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg",
    },
    {
      _id: 4,
      img: "https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg",
    },
    {
      _id: 5,
      img: "https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const total = slider.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrent((prev) => (prev + 1) % total);
  //     }, 5000);
  //     return () => clearInterval(interval);
  //   }, [total]);

  return (
    <div className="w-full h-[calc(100vh-72px)] max-sm:h-[300px] flex justify-center items-center">
      <div className="w-full h-full relative flex justify-center items-center overflow-hidden  shadow-lg">
        <div
          className="w-full h-full bg-red-400  overflow-hodden flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`, // Sliding effect
          }}
        >
          {slider.map((slide, index) => (
            <div className="min-w-[calc(100vw-15px)] max-h-full bg-gray-400 z-10 ">
              <img
                key={index}
                src={slide.img}
                alt={`Slide ${slide._id}`}
                className="w-full  h-full obj-cover "
              />
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="z-20 absolute left-2 top-1/2  bg-black/50 text-white text-xl px-3 py-2 rounded-full hover:bg-black"
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2  bg-black/50 text-white text-xl px-3 py-2 rounded-full hover:bg-black"
        >
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};
