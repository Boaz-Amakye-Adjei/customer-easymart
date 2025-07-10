import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IconType } from "react-icons";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

export default function MyAccount() {
  return (
    <main className="p-5 space-y-4">
      <Button title="Orders" Icon={LuShoppingCart} />
      <Button title="Transactions" Icon={FaRegMoneyBillAlt} />
      <Button title="Saved" Icon={FiHeart} />
      <Button title="Settings" Icon={IoSettingsOutline} />
      <Button title="Logout" Icon={IoLogOutOutline} />
    </main>
  );
}

function Button({ title, Icon }: { title: string; Icon: IconType }) {
  return (
    <button className="py-3 px-4 w-full justify-between flex items-center text-md">
      <div className="justify-start flex gap-3 items-center">
        <Icon />
        {title}
      </div>
      <MdOutlineKeyboardArrowRight className="text-xl" />
    </button>
  );
}
