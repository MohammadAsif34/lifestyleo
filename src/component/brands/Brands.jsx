import { useEffect, useState } from "react";
const brand = [
  {
    _id: "1",
    name: "Zara",
    image: "/brands/zara.png",
  },
  {
    _id: "2",
    name: "adidas",
    image: "/brands/adidas.png",
  },
  {
    _id: "3",
    name: "burberry",
    image: "/brands/burberry.png",
  },
  {
    _id: "4",
    name: "ck",
    image: "/brands/ck.png",
  },
  {
    _id: "5",
    name: "d&g",
    image: "/brands/d&g.png",
  },
  {
    _id: "6",
    name: "dior",
    image: "/brands/dior.png",
  },
  {
    _id: "7",
    name: "lee",
    image: "/brands/lee.png",
  },
  {
    _id: "8",
    name: "levis",
    image: "/brands/levis.png",
  },
  {
    _id: "9",
    name: "lv",
    image: "/brands/lv.png",
  },
  {
    _id: "10",
    name: "raymond",
    image: "/brands/raymond.png",
  },
  {
    _id: "11",
    name: "versace",
    image: "/brands/versace.png",
  },
  {
    _id: "12",
    name: "balenciaga",
    image: "/brands/balenciaga.png",
  },
];

export const Brands = () => {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev < 550 ? prev + 150 : 0));
    }, 3000);
    return () => clearInterval(interval);
  });
  return (
    <div className="w-full my-4 py-3 bg-white flex overflow-hidden items-center ">
      <div className="flex  gap-6">
        {brand.map((brand) => (
          <div
            key={brand._id}
            className="min-w-[150px] h-[100px] aspect-[1/3] max-sm:min-w-[70px] transition-transform duration-1000 ease-linear "
            style={{ transform: `translateX(-${slide}px)` }}
          >
            <img
              className="w-full h-full object-contain "
              src={brand.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};
