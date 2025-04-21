import { useState } from "react";

const reviews = [
  {
    _id: 1,
    name: "Daniel",
    mssg: "Amazing product! The quality exceeded my expectations.",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    rating: "5",
    product: "Cotton T-Shirt",
    price: "599",
  },
  {
    _id: 2,
    name: "Priya",
    mssg: "Looks great and fits perfectly. Will buy again!",
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    rating: "4",
    product: "Denim Jacket",
    price: "1999",
  },
  {
    _id: 3,
    name: "Ahmed",
    mssg: "Good value for the price. Delivery was fast too.",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    rating: "4",
    product: "Running Shoes",
    price: "2499",
  },
  {
    _id: 4,
    name: "Sara",
    mssg: "Not bad, but expected better packaging.",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: "3",
    product: "Handbag",
    price: "1499",
  },
  {
    _id: 5,
    name: "Rohit",
    mssg: "Loved it! Soft material and stylish look.",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: "5",
    product: "Ramie Shirt",
    price: "899",
  },
];
export const Review = () => {
  const [reviewToggle, setReviewToggle] = useState(0);
  const slideNext = () => {
    if (reviewToggle < 300) setReviewToggle(reviewToggle + 109);
    else setReviewToggle(0);
  };
  const slidePrev = () => {
    if (reviewToggle > 0) setReviewToggle(reviewToggle - 109);
    else setReviewToggle(315);
  };

  return (
    <div className="w-full my-16 px-28 max-sm:px-2">
      <h1 className="my-2 text-5xl max-sm:text-3xl text-center capitalize ">
        customer says!
      </h1>
      <p className="text-center max-sm:text-[12px] text-gray-500 ">
        Our customers adore our products, and we constly aims to delight them.
      </p>
      <div className=" w-full mb-2 mt-8 flex justify-evenly overflow-hidden gap-8 ">
        {reviews.map((review) => (
          <div
            key={review._id}
            className={`min-w-[48%] max-w-[48%] max-sm:min-w-[100%] h-72 max-sm:h-48 border border-gray-300 rounded-lg overflow-hidden flex gap-4 transition-transform duration-700 ease-in-out `}
            style={{ transform: `translateX(-${reviewToggle}%)` }}
          >
            <div className="min-w-2/5 max-sm:min-w-1/3 h-full bg-gray-100">
              <img
                src={review.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-full">
              <div className="w-full h-[calc(100%-80px)] max-sm:h-[calc(100%-60px)] py-2 flex flex-col ">
                <div> # # # # #{review.rating}</div>
                <div className="flex-1 pr-2 text-lg max-sm:text-sm text-wrap text-gray-400 truncate line-clamp-3 overflow-hidden">
                  {
                    review.mssg
                    // " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eumea eos aliquid expedita recusandae possimus sed aliquam id undeorumquid expedita recusandae possimus sed."
                  }
                </div>
                <div className="py-2 max-sm:py-0 text-xl max-sm:text-sm">
                  {review.name || "name"}{" "}
                  <i className="bi bi-check-circle text-green-500 text-sm"></i>
                </div>
              </div>
              <div className="h-20 max-sm:h-14  flex items-center border-t border-gray-400">
                <div className="w-16 max-sm:w-12 h-16 max-sm:h-12 border rounded-full overflow-hidden">
                  <img
                    src={review.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-6">
                  <p className="text-xl max-sm:text-sm">
                    {review.product || "product name"}
                  </p>
                  <p className="font-semibold">
                    <i className="bi bi-currency-dollar"></i>
                    {review.price || "price"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center relative ">
        <button
          type="button"
          className="absolute top-[-200px] max-sm:top-0 left-[-20px] max-sm:left-0 px-3 py-2 rounded-full bg-black/60 hover:bg-black text-white cursor-pointer"
          onClick={() => slidePrev()}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <button
          className="absolute top-[-200px] max-sm:top-0 right-0 px-3 py-2 rounded-full bg-black/60 hover:bg-black text-white cursor-pointer"
          onClick={() => slideNext()}
        >
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
      <ul></ul>
    </div>
  );
};
