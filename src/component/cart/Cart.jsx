import { useContext, useState } from "react";
import { AppContext } from "../../../context/appContext";
export const Cart = () => {
  const { cartItem, cart, setCart } = useContext(AppContext);
  const [subtotal, setSubtotal] = useState(500);
  const [discount, setDiscount] = useState(100);
  const [shipping, setShipping] = useState(75);
  return (
    <div className="w-full h-[calc(100vh-60px)] max-sm:h-full px-28 max-sm:px-2 py-8  z-10 bg-white flex max-sm:flex-col justify-between gap-8 max-sm:gap-4">
      <span
        className="max-sm:block hidden w-fit px-3 py-1 rounded-md my-0 border border-gray-300 cursor-pointer"
        onClick={() => setCart(!cart)}
      >
        <i className="bi bi-arrow-left"></i> back
      </span>
      <div className="flex-1 h-full border border-gray-300 rounded-lg overflow-auto">
        <div className="flex pt-3 text-lg max-sm:text-sm capitalize font-semibold border-b-2 border-gray-300">
          <p className="px-15 ">product</p>
          <div className=" flex-1 capitalize flex justify-between">
            <p></p>
            <p></p>
            <p>price</p>
            <p>quantity</p>
            <p>total price</p>
            <p></p>
          </div>
        </div>
        <div className="max-sm:min-h-48">
          {cartItem?.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="w-[350px] max-sm:w-full h-fit p-4  rounded-2xl bg-gray-50 flex flex-col justify-center">
        <p className="capitalize font-semibold text-3xl">order summary</p>
        <p className=" py-5 border-b-2 border-gray-300 text-lg capitalize">
          subtotal{" "}
          <span className="float-end">
            <i className="bi bi-currency-dollar"></i>
            {subtotal}
          </span>
        </p>
        <p className=" py-5 border-b-2 border-gray-300 text-lg capitalize">
          discount{" "}
          <span className="float-end">
            <i className="bi bi-dash "></i>
            <i className="bi bi-currency-dollar "></i>
            {discount}
          </span>
        </p>
        <div className=" py-5 border-b-2 border-gray-300 text-sm ">
          <p className="mb-4 text-lg capitalize">shipping</p>
          <div className="ml-8">
            <label htmlFor="">
              <input type="radio" className="mr-2 " />
              Normal shipping charge
              <span className="float-end">
                <i className="bi bi-plus "></i>
                <i className="bi bi-currency-dollar "></i>
                {shipping}
              </span>
            </label>

            <br />
            <label htmlFor="">
              <input type="radio" className="mr-2 " />
              Extra care shipping charge
              <span className="float-end">
                <i className="bi bi-plus "></i>
                <i className="bi bi-currency-dollar "></i>
                {shipping}
              </span>
            </label>
          </div>
        </div>
        <div>
          <div className="py-4 capitalize font-semibold text-3xl">
            Total{" "}
            <span className="float-end">
              <i className="bi bi-currency-dollar "></i>
              {subtotal + shipping - discount}
            </span>
          </div>
          <label className="py-2">
            <input type="radio" name="" id="" />I agree with the Terms And
            conditions
          </label>
          <button
            type="button"
            className="w-full my-8 py-2 capitalize rounded-full bg-black hover:bg-red-500 text-white"
          >
            proceed to checkout
          </button>
        </div>
      </div>
      {/* <div className="w-full h-28 border">footer</div> */}
    </div>
  );
};
const CartItem = ({ item }) => {
  const [itemCount, setItemCount] = useState(1);
  const handleRemoveProduct = () => [
    alert("id:" + item._id + " product will be remove soon!"),
  ];
  return (
    <div className="w-full h-32 max-sm:h-28 p-3 border-b-2 border-gray-300 flex">
      <div className="h-full max-sm:hidden aspect-square bg-gray-200 rounded-sm overflow-hidden">
        <img src={item?.image} alt="" />
      </div>
      <div className="flex-1 flex justify-between items-center">
        <div className="max-sm:grid max-sm:grid-cols-0">
          <p className="mx-2 my-2 text-xl max-sm:text-[18px] ">
            {item?.name || "product name"}
          </p>
          <div className="max-sm:flex">
            <select className="px-2 mx-2 py-1 max-sm:px-1 max-sm:py-0.5 max-sm:max-1 font-semibold border border-gray-300 rounded-sm">
              <option value="">Red</option>
              <option value="">Blue</option>
              <option value="">Green</option>
              <option value="">Yellow</option>
            </select>
            <select className="px-2 mx-2 py-1 max-sm:px-1 max-sm:py-0.5 max-sm:max-1 font-semibold border border-gray-300 rounded-sm">
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XL</option>
              <option value="">XXL</option>
            </select>
          </div>
        </div>
        <div className="  flex-1 flex justify-evenly items-center ">
          <div>
            <i className="bi bi-currency-dollar"></i>
            {item?.price || "456"}
          </div>
          <div className="w-fit flex  max-sm:flex-col max-sm:items-center border border-gray-300 rounded-full overflow-hidden">
            <span
              className="bi bi-dash mr-2 px-1  hover:bg-gray-100 cursor-pointer"
              onClick={() => setItemCount(itemCount - 1)}
            ></span>
            {itemCount}
            <span
              className="bi bi-plus ml-2 px-1 hover:bg-gray-100 cursor-pointer"
              onClick={() => setItemCount(itemCount + 1)}
            ></span>
          </div>

          <div>
            <i className="bi bi-currency-dollar"></i>
            {item?.price * itemCount || "0.00"}
          </div>
        </div>
        <div
          className="text-lg hover:text-red-500 cursor-pointer"
          onClick={() => handleRemoveProduct()}
        >
          <i className="bi bi-x-circle"></i>
        </div>
      </div>
    </div>
  );
};
