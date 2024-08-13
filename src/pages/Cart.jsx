import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="flex justify-center items-center h-[80vh] ]">
  {
    cart.length > 0  ? 
    (<div className="flex">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div>

        <div >
          <div>Your Cart</div>
          <div>Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p>Total Amount: ${totalAmount}</p>
          <button>
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col gap-4 text-center font-semibold">
      <h1 className="text-gray-700 text-[1.05rem]">Your Cart is Empty!</h1>
      <Link to={"/"}>
        <button className="bg-green-600 px-10 py-3 rounded-md text-white text-sm hover:bg-white hover:border-2 hover:border-green-600 hover:text-green-600 transition-all duration-200 ease-linear">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
