import { useState } from "react";
const categories = [
  {
    _id: 1,
    name: "production",
    item: 35,
    image:
      "https://images.pexels.com/photos/3965546/pexels-photo-3965546.jpeg ", // Factory/production
  },
  {
    _id: 2,
    name: "clothing",
    item: 15,
    image:
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg ", // Hanging clothes
  },
  {
    _id: 3,
    name: "bags",
    item: 85,
    image: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg ", // Stylish handbag
  },
  {
    _id: 4,
    name: "watches",
    item: 45,
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg", // Watch close-up
  },
  {
    _id: 5,
    name: "gogles",
    item: 54,
    image:
      "https://images.pexels.com/photos/1578884/pexels-photo-1578884.jpeg ", // Sunglasses
  },
  {
    _id: 6,
    name: "shoes",
    item: 15,
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg ", // Sneakers
  },
  {
    _id: 7,
    name: "Shirts",
    item: 85,
    image:
      "https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg ", // Fashionable new item
  },
  {
    _id: 8,
    name: "new item",
    item: 85,
    image:
      "https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg ", // Fashionable new item
  },
];

const CategoryCard = ({ item }) => {
  return (
    <div className="w-fit h-fit px-4 py-6 ">
      <div className="w-42 aspect-square border border-gray-300 rounded-full overflow-hidden cursor-pointer">
        <img
          alt=""
          src={item.image || "/banner_img-2.jpg"}
          className="w-full h-full rouded-full border-none object-cover hover:scale-110 duration-700"
        />
      </div>
      <p className="mt-3 text-gray-800 font-semibold text-center text-xl capitalize">
        {item.name || "name"}
      </p>
      <p className=" my-1 text-center  text-gray-500">
        {item.item || "item"} items
      </p>
    </div>
  );
};
export const Categories = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => setSlide((prev) => prev + 17);
  const prevSlide = () => setSlide((prev) => prev - 17);

  return (
    <div className="w-full h-fit my-8 relative px-20 max-sm:px-2">
      <div className="py-2  flex justify-between items-center">
        <h1 className="text-[40px] max-sm:text-2xl">Categories</h1>
        <button
          type="button"
          className="text-lgtext-[12px] max-sm: py-1 border-b cursor-pointer hover:text-red-500 rtl transition-transform duration-300 "
        >
          view all collection
        </button>
      </div>
      <div className="w-full relative overflow-hidden">
        {!(slide <= 0) && (
          <button
            onClick={() => prevSlide()}
            className="z-20 absolute left-4 top-1/3 -translate-x-4 bg-white border-2 text-xl px-3 py-2 rounded-full hover:bg-black hover:text-white"
          >
            <i className="bi bi-arrow-left"></i>
          </button>
        )}
        {slide < 20 && (
          <button
            onClick={() => nextSlide()}
            className="z-20 absolute right-4 top-1/3 translate-x-4 bg-white border-2 text-xl px-3 py-2 rounded-full hover:bg-black hover:text-white"
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        )}
        <div
          className={`z-20 flex justify-evenly transition-transform duration-700 ease-in-out `}
          style={{ transform: `translateX(-${slide}%)` }}
        >
          {categories.map((item) => (
            <div
              key={item._id}
              className="min-w-1/6 max-sm:min-w-1/2 flex justify-center"
            >
              <CategoryCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
