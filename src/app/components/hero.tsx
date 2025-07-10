import Image from "next/image";
import { IoIosStar } from "react-icons/io";

export function Hero() {
  return (
    <article className="rounded-t-3xl md:rounded-lg bg-green-800 px-5 py-10 md:p-10 min-h-[420px] text-center md:text-start">
      <div className="text-[#a0d35d]">
        <p className="mb-8 md:mb-4 text-sm">Fast Delivery Service</p>
        <h3 className="text-5xl mb-3 ">Fastest</h3>

        <h3 className="text-5xl mb-3 ">
          <span className="font-bold text-[#f9e748]">Delivery</span> &
        </h3>
        <h3 className="text-5xl mb-3 ">
          Easy
          <span className="font-bold text-[#97cb3e]"> PickUp</span>
        </h3>
        <button className="text-white my-5 md:my-3 py-3 px-8 bg-orange-400 rounded-lg">
          Shop Now
        </button>

        <div className="my-4 flex justify-center md:justify-start">
          <div className="flex">
            <div className="size-[40px] rounded-full bg-gray-300 border-3 border-white"></div>
            <div className="size-[40px] rounded-full bg-gray-300 border-3 border-white -translate-x-6"></div>
            <div className="size-[40px] rounded-full bg-gray-300 border-3 border-white -translate-x-11"></div>
          </div>

          <div className="-translate-x-8 text-white/20  text-sm text-start">
            <h4 className="text-white text-sm text-nowrap">
              Our Happy Customers
            </h4>
            <div className="flex items-center gap-1">
              <IoIosStar className="flex text-yellow-500 text-sm" />
              <p>4.5</p>
              <p className="">12.5k Review</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[200px] md:h-0 grid place-content-center md:hidden">
        <Image
          src="/delivery-image.png"
          width={285}
          height={285}
          alt="delivery image"
        />
      </div>
    </article>
  );
}
