import Image from "next/image";

export default function Catalog() {
  return (
    <section className="px-3.5 md:px-10">
      <Sort />
      <div className="my-5 mb-15">
        <h1 className="text-center mb-2 font-bold text-3xl pt-4 md:mt-0">
          View our all products
        </h1>
        <p className="text-center text-gray-400 text-xs">
          Start your daily shopping with Easymart
        </p>
      </div>

      <div className="md:hidden my-3">
        <div className=" overflow-x-auto">
          <div className="flex gap-2 w-max">
            <button className="bg-green-700 text-white px-4 py-3 rounded-md">
              Category
            </button>
            <button className="border border-gray-200 px-4 py-3 rounded-md text-nowrap">
              Fresh Produce
            </button>
            <button className="border border-gray-200 px-4 py-3 rounded-md text-nowrap">
              Meat & Eggs
            </button>
            <button className="border border-gray-200 px-4 py-3 rounded-md">
              Foods
            </button>
            <button className="border border-gray-200 px-4 py-3 rounded-md">
              Bakery
            </button>
          </div>
        </div>
      </div>

      <section className="flex">
        <article className="w-[290px] hidden md:block px-5 border-t border-r border-gray-200 py-5">
          <Aside />
          <TopRatedProducts />
          <AdCard />
        </article>
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

      <section className="flex my-10 h-[300px]">
        <article className="w-1/2 bg-blue-50/80 p-8">
          <h5 className="text-orange-400 text-lg py-3 font-bold">
            Organic Food
          </h5>
          <h5 className="font-bold text-3xl">Exclusive Packages</h5>
          <h5 className="font-bold text-3xl my-4">30% Off</h5>
          <button className="text-white py-3 px-6 bg-orange-400 rounded-lg">
            Shop Now
          </button>
        </article>
        <article className="w-1/2 bg-blue-400/50"></article>
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
        <p>Fresh Produce</p>
        <p>Meat and Eggs</p>
        <p>Foods</p>
        <p>Bakery</p>
        <p>Pantry Essentials</p>
        <p>Snacks and Beverages</p>
        <p>Sachete goods</p>
        <p>Health and Personal care</p>
      </div>
    </aside>
  );
}

function Card() {
  return (
    <div className="bg-gray-100 rounded-md w-full h-fit">
      <div className="h-[180px] grid place-content-center">
        <Image src="/soap.png" width={170} height={170} alt="Bread" />
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
    <div className="hidden md:block ">
      <article className="px-10 py-5 flex gap-3">
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
    </div>
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
