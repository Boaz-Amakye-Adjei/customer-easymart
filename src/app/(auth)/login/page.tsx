import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Login() {
  return (
    <section className="p-10 not-first:md:p-15 flex-1 flex justify-center items-center bg-gray-200 md:bg-transparent">
      <div className="flex flex-col justify-center w-full border rounded-lg border-gray-200 p-5 max-w-[350px] md:max-w-fit bg-white">
        <div className="hidden md:block">
          <Link
            href="/"
            className="rounded-full size-[45px] md:size-[30px] border border-gray-400 grid place-content-center"
          >
            <IoMdArrowRoundBack />
          </Link>
        </div>
        <h1 className="font-bold text-4xl my-8">Login</h1>

        <div className="space-y-4">
          <input
            placeholder="Email"
            type="text"
            className="border border-gray-400 py-4 md:py-2 px-3 w-full rounded-md text-sm"
          />
          <input
            placeholder="Password"
            type="text"
            className="border border-gray-400 py-4 md:py-2 px-3 w-full rounded-md text-sm"
          />
          <p className="text-gray-400 text-end text-sm">Forget password?</p>
          <button className="py-4 md:py-2 rounded-md w-full bg-green-500 text-white">
            Login
          </button>
          <p className="text-gray-400 text-sm">
            Don&#39;t have an account?{" "}
            <Link href="/register" className="underline py-2 md:py-0">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
