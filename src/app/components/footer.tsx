import { MdMailOutline } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { TiSocialFacebook } from "react-icons/ti";

export default function Footer() {
  const AboutLinks = ["About us", "Recipe", "Download", "Contact"];
  const ComapanyLinks = ["Our Recipe", "Subscribe Us", "FAQ"];
  const SupportLinks = [
    "Account",
    "Support Center",
    "Feedback",
    "Accessibility",
  ];
  const gitLinks = ["Unniversity of Mines and Technology", "Tarkwa", "KT Hall"];

  return (
    <footer className="bg-gray-100 p-5 py-10 md:p-20 text-gray-600">
      <section className="flex flex-col md:flex-row">
        <article className="w-full md:w-[380px] px-10 font-bold order-2 md:order-1">
          <div className="h-[150px] bg-white"></div>
          <div className="flex items-center gap-1 my-3">
            <MdMailOutline />
            <p>boazamakyeadjei@gmail.com</p>
          </div>
          <div className="flex items-center gap-1">
            <LuPhoneCall />
            <p>0556105095</p>
          </div>
          <div className="my-3 flex gap-2 ">
            <Icon className="bg-orange-500 text-white" />
            <Icon />
            <Icon />
          </div>
        </article>

        <article className="grid grid-cols-2 md:grid-cols-4 px-10 flex-1 mb-10 order-1 md:order-2">
          <FooterLinks title="About" links={AboutLinks} />
          <FooterLinks title="Company" links={ComapanyLinks} />
          <FooterLinks title="Support" links={SupportLinks} />
          <FooterLinks title="Get In Touch" links={gitLinks} />
        </article>
      </section>
      <hr className="my-4 bg-gray-400" />
      <h4 className="text-center text-gray-400">
        Copyright all rights reserved
      </h4>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="font-bold mb-6">{title}</h3>
      <ul className="text-gray-400">
        {links.map((data, index) => (
          <li key={index} className="mb-3">
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Icon({ className }: { className?: string }) {
  return (
    <div
      className={`${className} size-[40px] grid place-content-center rounded-full`}
    >
      <TiSocialFacebook />
    </div>
  );
}
