import { useContext } from "react";
import { AppContext } from "../../../context/appContext";

export const Product = () => {
  const products = [
    {
      _id: 1,
      name: "V-neck Cotton T-shirt",
      price: 599.99,
      color: ["gray-600", "blue-500", "white"],
      image: "https://images.pexels.com/photos/374574/pexels-photo-374574.jpeg",
    },
    {
      _id: 2,
      name: "Polarized Sunglasses",
      price: 79.99,
      color: ["red-500", "green-600", "blue-400"],
      image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
    },
    {
      _id: 3,
      name: "Ramie Shirt with Pockets",
      price: 89.99,
      color: ["indigo-500", "green-500", "blue-600"],
      image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
    },
    {
      _id: 4,
      name: "Slim Fit Jeans",
      price: 1299.99,
      color: ["blue-700", "black", "gray-700"],
      image:
        "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    },
    {
      _id: 5,
      name: "Casual Sneakers",
      price: 1499.0,
      color: ["white", "black", "gray-600"],
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    },
    {
      _id: 6,
      name: "Leather Wallet",
      price: 499.0,
      color: ["brown-600", "black"],
      image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
    },
    {
      _id: 7,
      name: "Digital Sports Watch",
      price: 999.99,
      color: ["black", "red-600", "green-600"],
      image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    },
    {
      _id: 8,
      name: "Denim Jacket",
      price: 1799.5,
      color: ["blue-800", "gray-500"],
      image:
        "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    },
    {
      _id: 9,
      name: "Aviator Sunglasses",
      price: 899.99,
      color: ["yellow-400", "gray-300"],
      image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
    },
    {
      _id: 10,
      name: "Canvas Backpack",
      price: 699.0,
      color: ["green-700", "black", "yellow-700"],
      image: "https://images.pexels.com/photos/374574/pexels-photo-374574.jpeg",
    },
  ];

  return (
    <div className="px-28 max-sm:px-2">
      <div className="my-4 flex justify-center">
        <ul className="flex gap-10 text-3xl max-sm:text-xl capitalize text-gray-600">
          <li className="py-1 border-b-2 active:text-black ">new arrival </li>
          <li>best sale</li>
          <li>on sale</li>
        </ul>
      </div>
      <div className="my-6 p-1 grid grid-cols-5 gap-8 max-sm:grid-cols-2">
        {products.slice(0, 10).map((item) => (
          <div key={item._id}>
            <ProductCard item={item} />
          </div>
        ))}
      </div>
      <div className="my-4 flex justify-center">
        <p className="w-fit py-2 text-xl max-sm:text-sm text-gray-600 capitalize border-b-2 hover:text-red-400 cursor-pointer">
          view allproducts
        </p>
      </div>
    </div>
  );
};
const ProductCard = ({ item }) => {
  const { cartItem, setCartItem } = useContext(AppContext);
  const handleAddCart = () => {
    setCartItem((prev) => [...prev, item]);
  };
  return (
    <div className="w-full h-fit  overflow-hidden ">
      <div className="w-full h-[350px] max-sm:h-[200px] bg-gray-100 relative border border-gray-300 rounded-xl overflow-hidden cursor-pointer">
        <img src={item.image} alt="" className="w-full h-full object-cover" />
        <div className="w-full h-full p-5 absolute top-0 right-0 hover:bg-white/30 flex justify-center items-end group">
          <div className="px-8 py-2 capitalize hover:bg-black hover:text-white opacity-0 scale-95 bg-white  transition-all duration-300  rounded-full  group-hover:opacity-100 group-hover:scale-100">
            <button onClick={() => handleAddCart()}>Add Cart</button>
          </div>
        </div>
      </div>
      <p className="mt-4 text-xl max-sm:text-lg">
        {item?.name || "product name"}
      </p>
      <p className="my-1 text-lg font-semibold">
        <i className="bi bi-currency-dollar"></i>
        {item?.price || "00.00"}
        <span
          className="py-1 px-2 rounded-lg float-end text-xl mr-2 hover:bg-gray-100 hover:text-2xl transition-transforms duration-200 ease-in-out cursor-pointer"
          onClick={() => handleAddCart()}
        >
          <i className="bi bi-cart3"></i>
        </span>
      </p>
      <ul className="my-1 flex gap-2">
        {item?.color.map((col, index) => (
          <li
            key={index}
            className="w-[25px] aspect-square border rounded-full flex justify-center items-center"
          >
            <p className={`w-[20px] h-[20px] rounded-full bg-${col}`}></p>
          </li>
        ))}
      </ul>
    </div>
  );
};
