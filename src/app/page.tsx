import Image from "next/image";
import { Hero } from "./components/hero";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";

export default function Home() {
  return (
    <section className="md:px-10">
      <Hero />

      <article className="px-3.5 md:px-0 my-10 mb:my-20">
        <h2 className="text-2xl font-bold mt-5 mb-8 md:my-5 text-center md:text-start">
          Shop By Category
        </h2>

        <div className="my-5 gap-3.5 place-content-center md:gap-0 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8">
          <CategoryCard
            title="Fresh Produce"
            bgColor="#E9F7E6"
            width={120}
            height={75}
            alt="cabbage"
            src="/cabage.webp"
            link="/fresh-produce"
          />
          <CategoryCard
            title="Meat & Eggs"
            bgColor="#F3E8F9"
            width={100}
            height={55}
            src="/meatandfish.png"
            alt="meat and fish"
            className="-translate-y-2.5"
            link="/meat-and-eggs"
          />

          <CategoryCard
            title="Foods"
            bgColor="#F9E8E0"
            width={90}
            height={90}
            src="/food.png"
            alt="eggs"
            link="/food"
          />

          <CategoryCard
            title="Bakery"
            bgColor="#FFF3E5"
            src="/bread.png"
            width={80}
            height={78}
            alt="bread"
            link="/backery"
          />

          <CategoryCard
            title="Pantry Essentials"
            bgColor="#FEF3D6"
            src="/rice.png"
            width={100}
            height={100}
            alt="rice"
            link="/pantry-essentials"
          />
          <CategoryCard
            title="Snacks & Beverages"
            bgColor="#FEECEF"
            src="/milk_biscuit.png"
            height={100}
            width={100}
            alt="Snack"
            link="snacks-and-beverages"
          />
          <CategoryCard
            title="Sachete goods"
            bgColor="#E9F6E9"
            src="/milo.png"
            width={100}
            height={100}
            link="/sachete-goods"
          />
          <CategoryCard
            title="Health & Personal Care"
            bgColor="#F0EAFB"
            src="/soap.png"
            width={100}
            height={100}
            link="/health-and-personal-care"
          />
        </div>
      </article>

      <section className="px-3.5 md:px-0 flex my-10 md:h-[300px] gap-8 flex-col md:flex-row">
        <article className="md:w-1/2 bg-[#ffd8a1] min-h-[320px] md:min-h-fit p-8 text-[#073114] overflow-hidden rounded-md md:rounded-2xl flex flex-col justify-center relative">
          <h5 className=" text-3xl font-bold">Everyday fresh &</h5>
          <h5 className="font-bold text-3xl">and clean with</h5>
          <h5 className="font-bold text-3xl">product</h5>
          <button className="text-white py-3 px-6 bg-[#ff5f2d] rounded-lg w-fit mt-8">
            Shop Now
          </button>

          <Image
            src="/img1.png"
            width={188}
            height={302}
            alt="holding"
            className="absolute -bottom-3 md:bottom-0 -right-2 md:right-10 translate-y-10"
          />
        </article>

        <article className="md:w-1/2 overflow-hidden bg-[#9bca3f] min-h-[320px] md:min-h-fit p-8 text-[#073114] rounded-2xl relative flex flex-col justify-center ">
          <h5 className=" text-3xl font-bold">Fast and on</h5>
          <h5 className="font-bold text-3xl">time delivery</h5>
          <h5 className="font-bold text-3xl">everywhere you are</h5>
          <Link
            href="/dashboard"
            className="text-white py-3 px-6 bg-[#ff5f2d] rounded-lg w-fit mt-8"
          >
            Shop Now
          </Link>

          <Image
            src="/img2.webp"
            width={250}
            height={280}
            alt="holding"
            className="absolute bottom-0 -right-15 md:right-0"
          />
        </article>
      </section>

      <article className="my-20 px-3.5 md:px-0 [&>article]:!px-0">
        <h2 className="text-2xl font-bold my-10 text-center md:text-start">
          Our All Products
        </h2>
        {/* <Sort /> */}

        <section className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </article>
    </section>
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

type CatoryCardProps = {
  bgColor: string;
  title: string;
  width: number;
  height: number;
  src: string;
  alt?: string;
  className?: string;
  link?: string;
};

function CategoryCard({
  bgColor,
  title,
  width = 0,
  height = 0,
  src = "",
  alt = "",
  className = "",
  link = "/",
}: CatoryCardProps) {
  return (
    <Link href={link} className="md:max-w-auto">
      <div
        className="w-full aspect-square md:size-[120px] bg-black rounded-md grid place-content-center overflow-hidden"
        style={{ backgroundColor: `${bgColor}` }}
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className={className}
        />
      </div>
      <h5 className="mt-2 text-sm">{title}</h5>
    </Link>
  );
}
