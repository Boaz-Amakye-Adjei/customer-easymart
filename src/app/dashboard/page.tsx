import { IconType } from "react-icons";
import { FiHome } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

export default function Dashboard() {
  return (
    <main className="h-screen flex">
      <div className="w-[250px] h-full p-5 pt-0 text-sm space-y-4">
        <NavButton active title="Dashboard" Icon={FiHome} />
        <NavButton title="My Orders" Icon={LuShoppingCart} />
        <NavButton title="Transaction" Icon={FaRegMoneyBillAlt} />
        <NavButton title="Saved" Icon={FiHeart} />
        <NavButton title="Settings" Icon={IoSettingsOutline} />
        <NavButton title="Logout" Icon={IoLogOutOutline} />
      </div>
      <div className="flex-1 bg-gray-100"></div>
    </main>
  );
}

function NavButton({
  active,
  title,
  Icon,
}: {
  Icon: IconType;
  title: string;
  active?: boolean;
}) {
  return (
    <div
      className={`${
        active ? "border bg-green-600 text-white" : ""
      } py-2 px-4  w-full rounded-md flex items-center gap-2 `}
    >
      <div>
        <Icon />
      </div>
      <p>{title}</p>
    </div>
  );
}
