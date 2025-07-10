import Image from "next/image";

export default function Cart() {
  const data = [
    {
      id: 1,
      image: "https://via.placeholder.com/60",
      title: "Garden Frozen Chicken Leg Cut",
      price: 70,
      quantity: 1,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/60",
      title: "Organic Red Big Capsicum",
      price: 30,
      quantity: 1,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/60",
      title: "Organic Red Big Capsicum",
      price: 30,
      quantity: 1,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/60",
      title: "Organic Red Big Capsicum",
      price: 30,
      quantity: 1,
    },
  ];

  return (
    <main className="px-5 md:px-10 mb-10">
      <h1 className="font-bold text-3xl py-6 md:my-10 px-10 text-center">
        My Cart
      </h1>
      <div className="md:flex relative">
        <div className="flex-1 md:px-10 p-4 bg-white rounded-xl">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="text-gray-600 uppercase text-sm">
                <tr>
                  <th className="w-[90px]"></th>
                  <th className="px-4 py-5">Product</th>
                  <th className="px-4 py-5">Price</th>
                  <th className="px-4 py-5">Quantity</th>
                  <th className="px-4 py-5">Subtotal</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {data.map((item) => (
                  <CartItem
                    key={item.id}
                    // image={item.image}
                    // title={item.title}
                    // price={item.price}
                    // quantity={item.quantity}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* Coupon and Action Buttons */}
          <div className="flex flex-wrap justify-between items-center mt-6 gap-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon code"
                className="border px-4 py-4 md:py-2 rounded-md bg-gray-100 outline-0 border-none text-sm"
              />
              <button className="bg-green-800 text-white px-3 py-2 rounded-md text-sm">
                Apply coupon
              </button>
            </div>
            <button className="text-red-600 border px-4 py-4 md:py-2 rounded-md  text-sm">
              Remove All
            </button>
          </div>
        </div>

        <CartSummary />
      </div>
    </main>
  );
}

const CartItem = () => {
  return (
    <tr className="border-t border-gray-200 ">
      <td className="">
        <div className="size-[80px] border border-white bg-gray-100 my-2 rounded-md">
          <Image src="/soap.png" width={90} height={90} alt="Bread" />
        </div>
      </td>
      <td className="gap-4 px-4 py-3">
        <p className="font-medium">Organic Red Big Capsicum</p>
      </td>
      <td className="px-4 py-3">$30.00</td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-2 border border-gray-200 rounded w-fit">
          <button className="px-2 py-1 rounded">-</button>
          <span className="text-xs">1</span>
          <button className="px-2 py-1 rounded">+</button>
        </div>
      </td>
      <td className="px-4 py-3">$30.00</td>
    </tr>
  );
};

const CartSummary = () => {
  return (
    <div className="sticky px-5 mt-5 md:mt-0 top-[80px] w-full h-fit md:w-70 p-4 bg-white border border-gray-200 rounded-md shadow">
      <h3 className="text-lg font-semibold mb-4 border-b border-gray-200">
        Cart totals
      </h3>

      <div className="space-y-3 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$100</span>
        </div>

        <div className="flex justify-between">
          <span>Flat rate:</span>
          <span>$100</span>
        </div>

        <div className="flex justify-between">
          <span>Local pickup</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Shipping to</span>
          <span className="text-gray-500">KT Hall</span>
        </div>

        <button className="text-blue-600 text-sm underline">
          Change address
        </button>

        <hr className="border border-gray-200" />

        <div className="flex justify-between font-semibold text-base">
          <span>Total</span>
          <span>$100</span>
        </div>
      </div>

      <button className="w-full mt-4 text-sm bg-green-600 text-white py-4 md:py-2 px-4 rounded-md hover:bg-green-700 transition">
        Pay with Paystack
      </button>
    </div>
  );
};

// function CartItem() {
//   return (
//     <article className="flex gap-3">
//       <div className="size-[120px]  rounded-md border-2 border-white"></div>
//       <div className="flex justify-between py-4 flex-1">
//         <div className=" flex flex-col justify-between">
//           <div>
//             <h3>Organic Fresh Pepper</h3>
//             <h3>Red Pepper</h3>
//           </div>

//           <div className="flex gap-2 items-center">
//             <h4 className="text-gray-400">Quantity</h4>
//             <div className="flex border border-gray-400 [&>button]:px-4 [&>button]:py-1 rounded-md">
//               <button className="border-r border-gray-400">-</button>
//               <button className="text-xs border-r border-gray-400">1</button>
//               <button className="">+</button>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col justify-between py-5">
//           <h2 className="font-bold">GHc 200</h2>

//           <div className="flex gap-2 justify-center">
//             <IoIosHeartEmpty />
//             <MdOutlineDelete />
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }
