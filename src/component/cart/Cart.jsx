import { useContext, useState } from "react";
import { AppContext } from "../../context/appContext";
export const Cart = () => {
  const { cartItem } = useContext(AppContext);
  const [subtotal, setSubtotal] = useState(500);
  const [discount, setDiscount] = useState(100);
  const [shipping, setShipping] = useState(75);
  return (
    <div className="w-full h-[calc(100vh-60px)] px-28 py-8 border z-10 bg-white flex justify-between gap-8">
      <div className="flex-1 h-full border border-gray-300 rounded-lg overflow-auto">
        <div className="flex pt-3 text-lg capitalize font-semibold">
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
        <div>
          {cartItem?.map((item, index) => (
            // <p>{JSON.stringyfy(item)}</p>
            <CartItem key={index} item={item} />
          ))}
          {JSON.stringify(cartItem)}

          {/* {[1, 11, 1].map((item, index) => (
            <CartItem />
          ))} */}
        </div>
      </div>
      <div className="w-[350px] h-fit p-4  rounded-2xl bg-gray-100 flex flex-col justify-center">
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
  const price = 463;
  const [itemCount, setItemCount] = useState(1);
  return (
    <div className="w-full h-32 p-3 border-b-2 border-gray-300 flex">
      <div className="h-full aspect-square bg-gray-200 rounded-sm overflow-hidden">
        <img src={item?.image} alt="" />
      </div>
      <div className="flex-1 flex justify-between items-center">
        <div className="">
          <p className="mx-2 my-2 text-xl">{item?.name || "product name"}</p>
          <div>
            <select className="px-2 mx-2 py-1 font-semibold border border-gray-300 rounded-sm">
              <option value="">Red</option>
              <option value="">Blue</option>
              <option value="">Green</option>
              <option value="">Yellow</option>
            </select>
            <select className="px-2 mx-2 py-1 font-semibold border border-gray-300 rounded-sm">
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XL</option>
              <option value="">XXL</option>
            </select>
          </div>
        </div>
        <div>
          <i className="bi bi-currency-dollar"></i>
          {item?.price || "456"}
        </div>
        <div>
          <div className="w-fit border border-gray-300 rounded-full overflow-hidden">
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
        </div>
        <div>
          <i className="bi bi-currency-dollar"></i>
          {item?.price * itemCount || "0.00"}
        </div>
        <div className="text-lg hover:text-red-500 cursor-pointer">
          <i className="bi bi-x-circle"></i>
        </div>
      </div>
    </div>
  );
};
