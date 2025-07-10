"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuSearch, LuShoppingCart } from "react-icons/lu";
import { Search } from "./search";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";

export default function Header() {
  const [toggleSmallNav, setToggleSmallNav] = useState(false);
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const pathname = usePathname();
  const hiddenHeaderPaths = ["/login", "/register"];
  const hide = Boolean(hiddenHeaderPaths.includes(pathname));

  const toggleNav = () => {
    setToggleSmallNav((curr) => !curr);
  };
  const toggleSearch = () => {
    setToggleSearchBar((curr) => !curr);
  };

  return (
    <>
      <header
        className={`${
          hide ? "hidden" : "block"
        } max-h-0 md:max-h-fit overflow-hidden md:overflow-visible  sticky top-0 px-10 bg-white z-50`}
      >
        <div className="md:grid md:grid-cols-3 py-4 md:py-3">
          <div className="w-[200px]">
            {" "}
            <Image
              src="/easy-mart-logo.png"
              width={160}
              height={29}
              alt="easy mart logo"
            />
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center justify-center h-full">
              <ul className="flex gap-6 justify-center items-center mt-2">
                <NavButton title="Home" link="/" />
                <NavButton title="Catalog" link="/catalog" hovable />
                <NavButton title="Shop" link="/shop" />
                <NavButton title="Contact" link="/contact" />
              </ul>
            </nav>
          </div>

          <div className="flex items-center justify-end gap-2">
            <Search />

            <Link
              href="/cart"
              className="p-3 text-sm rounded-full bg-orange-600 text-white"
            >
              <LuShoppingCart />
            </Link>
            <Link
              href="/login"
              className="text-white text-sm py-2 px-6 text-nowrap rounded-lg bg-green-600"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {!toggleSearchBar && (
        <header
          className={`${
            hide ? "hidden" : "block"
          } md:hidden py-5 sticky top-0 px-3.5 bg-white z-40 shadow`}
        >
          <div className="flex justify-between">
            <Link href="/" className="grid place-content-center">
              <Image
                src="/easy-mart-logo.png"
                width={170}
                height={39}
                alt="easy mart logo"
              />
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleSearch}
                className="border border-gray-200 rounded-md p-4"
              >
                <LuSearch />
              </button>

              <button
                onClick={toggleNav}
                className="border rounded-md p-4 bg-green-800 text-white"
              >
                <MdOutlineMenu />
              </button>
            </div>
          </div>
        </header>
      )}

      {toggleSearchBar && (
        <header className="md:hidden py-5 gap-3 sticky top-0 px-5 bg-white z-40 shadow flex">
          <input
            type="text"
            className="py-3 flex-1 px-2 rounded-md border border-gray-400"
            placeholder="Search ..."
          />
          <button
            onClick={toggleSearch}
            className="py-3  px-6 rounded-md border border-gray-400"
          >
            x
          </button>
        </header>
      )}

      <section
        className={`${
          toggleSmallNav ? "block" : "hidden"
        } z-50 md:hidden fixed top-0 right-0 w-full h-[100svh] bottom-full bg-black/40`}
      >
        <div className="h-full w-[90%] bg-green-800 text-white p-5 flex-col flex">
          <div className="flex justify-end">
            <button
              onClick={toggleNav}
              className="p-4 border border-gray-200 rounded-md"
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="w-full h-[100px]"></div>
          <div className="space-y-6 my-6">
            <SmallNavButton title="Home" toggleNav={toggleNav} link="/" />
            <SmallNavButton
              title="Catalog"
              toggleNav={toggleNav}
              link="/catalog"
            />
            <SmallNavButton title="Shop" toggleNav={toggleNav} link="/shop" />
            <SmallNavButton
              title="Contact"
              toggleNav={toggleNav}
              link="/contact"
            />
            <SmallNavButton
              title="My Account"
              toggleNav={toggleNav}
              link="/my-account"
            />
          </div>
          <div onClick={toggleNav} className="flex-1 flex items-end mb-10">
            <Link
              href="/login"
              className="flex items-center gap-3 text-xl font-bold border border-white w-full py-3 px-5 rounded-md"
            >
              <BsPersonCircle />
              <h4 className="">Login</h4>
            </Link>
          </div>
        </div>
      </section>
      <Link href="/cart" className="fixed bottom-0 m-4 right-0 z-50">
        <div className="relative">
          <button className="border rounded-full p-5  bg-orange-600 text-white">
            <LuShoppingCart />
          </button>

          <span className="absolute top-0 right-3 size-[10px] rounded-full bg-orange-800"></span>
        </div>
      </Link>
    </>
  );
}

function SmallNavButton({
  title,
  link = "/",
  toggleNav,
}: {
  title: string;
  link?: string;
  toggleNav: () => void;
}) {
  return (
    <Link
      href={link}
      onClick={toggleNav}
      className="flex justify-start font-bold text-xl w-full py-2"
    >
      {title}
    </Link>
  );
}

function NavButton({
  title,
  link,
  hovable,
}: {
  title: string;
  link: string;
  hovable?: boolean;
}) {
  const pathname = usePathname();
  const active = pathname == link;
  return (
    <li className="relative group">
      <Link href={link} className="text-sm flex gap-1">
        <div className="flex items-center gap-1 flex-col">
          <p className={`${active ? "font-bold" : "text-gray-400"}`}>{title}</p>

          <div
            className={`${
              active ? "bg-red-500" : "bg-transparent"
            } p-[1px] w-1/2`}
          ></div>
        </div>

        {hovable && <MdOutlineKeyboardArrowDown className="mt-0.5" />}
      </Link>
      {hovable && (
        <div className="absolute top-full hidden group-hover:flex flex-col bg-white border border-gray-400 rounded shadow-lg z-50 pointer-events-auto left-0 -translate-x-10">
          <Dropdown
            title="Fresh Produce"
            itemsFound="203"
            src="/cabage.webp"
            width={50}
            height={50}
            link="/fresh-produce"
          />
          <Dropdown
            title="Meat & Eggs"
            itemsFound="203"
            src="/meatandfish.png"
            width={40}
            height={40}
            link="/meat-and-eggs"
          />
          <Dropdown
            title="Foods"
            itemsFound="28"
            src="/food.png"
            width={40}
            height={40}
            link="/food"
          />
          <Dropdown
            title="Bakery"
            itemsFound="78"
            src="/bread.png"
            width={40}
            height={40}
            link="/bakery"
          />

          <Dropdown
            title="Pantery Essentials"
            itemsFound="78"
            src="/rice.png"
            width={40}
            height={40}
            link="/pantery-essentials"
          />
          <Dropdown
            title="Snacks & Beverages"
            itemsFound="78"
            src="/coke.png"
            width={35}
            height={35}
            link="snacks-and-beverages"
          />
          <Dropdown
            title="Sachet goods"
            itemsFound="78"
            src="/milo.png"
            width={35}
            height={35}
            link="/sachete-goods"
          />
          {/* <Dropdown title="i" itemsFound="0" /> */}
        </div>
      )}
    </li>
  );
}

type DropdownProps = {
  title: string;
  itemsFound: string;
  src: string;
  width: number;
  height: number;
  link: string;
};

function Dropdown({
  title,
  itemsFound,
  src,
  width,
  height,
  link,
}: DropdownProps) {
  return (
    <Link
      href={link}
      className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap flex gap-2 items-center text-sm"
    >
      <div className="size-[50px] rounded-md bg-gray-400 grid place-content-center">
        <Image src={src} width={width} height={height} alt="" />
      </div>
      <div className="pr-6">
        <h2>{title}</h2>
        <h2>{itemsFound} product found</h2>
      </div>
    </Link>
  );
}
