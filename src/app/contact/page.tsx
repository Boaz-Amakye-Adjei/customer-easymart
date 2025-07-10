import { TiLocation } from "react-icons/ti";
import { MdPhone } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

export default function Contact() {
  return (
    <main className="py-10 px-5 md:p-10">
      <div className="my-5 mb-10 md:mb-15 px-5">
        <h1 className="text-center mb-2 font-bold text-3xl">Get in touch!</h1>
        <p className="text-center text-gray-400 text-xs">
          Need a helping hand? Contact us for all issues related to your order.
        </p>
      </div>

      <div className="grid grid-cols-3 mx-auto w-full md:max-w-[600px] gap-2">
        <button className="p-5 flex justify-center items-center gap-4 flex-col hover:bg-green-800 hover:text-white rounded-lg transition-all duration-100">
          <TiLocation className="text-4xl" />

          <h5 className="w-fit text-sm">UMaT</h5>
        </button>

        <button className="p-5 flex justify-center items-center gap-4 flex-col hover:bg-orange-600 hover:text-white rounded-lg transition-all duration-100">
          <MdPhone className="text-4xl" />

          <h5 className="w-fit text-sm">+233 0556105095</h5>
        </button>

        <button className="p-5 flex justify-center items-center gap-4 flex-col hover:bg-green-800 hover:text-white rounded-lg transition-all duration-100">
          <RiWhatsappFill className="text-4xl" />

          <h5 className="w-fit text-sm">+233 0556105095</h5>
        </button>
      </div>

      <div className="my-10  border border-gray-400 rounded-lg max-w-[530px] mx-auto p-5">
        <h3 className="mb-8 md:text-sm">Contact form</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <Input />
            <Input />
            <Input />
          </div>
          <div>
            <div>
              <label className="mb-1 block text-sm">Message</label>
              <textarea className="w-full h-[200px] bg-gray-200 rounded-lg"></textarea>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <button className="mx-auto w-full md:w-fit px-6 py-4 md:py-3 bg-green-800 rounded-lg my-7 text-sm text-white">
            Send Message
          </button>
        </div>
      </div>
    </main>
  );
}

function Input() {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm">Label</label>
      <input
        type="text"
        className="border py-4 md:py-2 w-full border-gray-200 rounded-lg px-2 outline-0"
      />
    </div>
  );
}
