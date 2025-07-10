import Image from "next/image";

export default function FreshProduce() {
  return (
    <section className="px-3.5 md:px-10">
      <Sort />
      <div className="my-5 mb-15">
        <h1 className="text-center mb-2 font-bold text-3xl">Fresh Produce</h1>
        <p className="text-center text-gray-400 text-xs">
          Get your fresh green vegetables and other produce
        </p>
      </div>

      <section className="md:flex">
        <article className="w-[290px] hidden md:block px-5 border-t border-r border-gray-200 py-5">
          <Aside />
          <TopRatedProducts />
          <AdCard />
        </article>

        <div className="md:hidden my-3">
          <div className=" overflow-x-auto">
            <div className="flex gap-2 w-max">
              <button className="bg-green-700 text-white px-4 py-3 rounded-md">
                All
              </button>
              <button className="border border-gray-200 px-4 py-3 rounded-md text-nowrap">
                Vegetables
              </button>
              <button className="border border-gray-200 px-4 py-3 rounded-md text-nowrap">
                Fruits
              </button>
              <button className="border border-gray-200 px-4 py-3 rounded-md">
                Herbs & Spices
              </button>
              <button className="border border-gray-200 px-4 py-3 rounded-md">
                Organic produce
              </button>
            </div>
          </div>
        </div>

        <article className="border-t border-gray-200 flex-1 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 md:p-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </article>
      </section>
    </section>
  );
}

import { IoMenu } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

function Aside() {
  return (
    <aside className="w-full rounded-md">
      <div className="bg-green-500 text-white p-2 text-sm rounded-md mb-3 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <IoMenu />
          Category
        </div>
        <MdOutlineKeyboardArrowUp />
      </div>
      <div className="text-sm font-bold text-gray-400 [&>p]:border-b [&>p]:py-2 [&>p]:border-gray-200">
        <p>All</p>
        <p>Vegetables</p>
        <p>Fruits</p>
        <p>Herbs & Spices</p>
        <p>Organic produce</p>
      </div>
    </aside>
  );
}

function Card() {
  return (
    <div className="bg-gray-100 rounded-md w-full h-fit">
      <div className="h-[180px] grid place-content-center">
        <Image src="/banana.png" width={150} height={150} alt="Bread" />
      </div>

      <div className="p-3">
        <div>
          <h2>Organic Red Pepper</h2>
        </div>

        <div className="my-2 flex justify-between items-center w-full text-xs">
          <p className="text-gray-400">1000gm</p>
          <StarRating rating={3} />
        </div>

        <div className="flex items-center justify-between">
          <h4 className="font-bold text-xl">GHc 50</h4>
          <button className="text-white bg-green-950 rounded-full size-[34px]">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Sort() {
  const data = ["All", "Price", "Preview", "Color", "Offer", "Brands"];
  return (
    <article className="hidden md:block px-10 py-5 flex gap-3">
      {data.map((data, index) => (
        <button
          key={index}
          className="bg-gray-100 py-1 px-3 rounded-md text-sm flex gap-2 items-center"
        >
          {data}
          <MdOutlineKeyboardArrowDown />
        </button>
      ))}
    </article>
  );
}

function TopRatedProducts() {
  return (
    <aside className="w-full rounded-md mt-10">
      <div className="bg-gray-100 p-2 text-sm rounded-md mb-3 flex justify-between items-center">
        Top Rated Products
        <MdOutlineKeyboardArrowUp />
      </div>
      <div className="text-sm font-bold text-gray-400 [&>p]:border-b [&>p]:py-2 [&>p]:border-gray-200 my-2">
        <div className="flex gap-2 my-5">
          <div className="size-[55px]">
            <Image src="/pepper.jfif" width={53} height={59} alt="image" />
          </div>
          <div>
            <h3>Organic Fresh Red Pepper bantama</h3>
            <div className="text-xs font-bold text-black flex items-center">
              <div className="pr-3">
                <StarRating rating={3} />
              </div>
              <p>GHc 12.00</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

import { IoIosStar } from "react-icons/io";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex text-yellow-500">
      {Array.from({ length: 5 }, (_, i) => (
        <IoIosStar
          key={i}
          className={i < rating ? "opacity-100" : "opacity-30"}
        />
      ))}
    </div>
  );
};

function AdCard() {
  return (
    <section className="rounded-md h-[280px] my-10 bg-orange-200"></section>
  );
}
