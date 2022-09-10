import { HiOutlineHome } from "react-icons/hi";
import { MdEventNote } from "react-icons/md";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FcAbout } from "react-icons/fc";

export const pages = [
  {
    name: "Home",
    href: "/",
    Icon: HiOutlineHome,
  },
  {
    name: "About",
    href: "#",
    Icon: FcAbout,
  },
  {
    name: "Events",
    href: "#",
    Icon: MdEventNote,
  },
  {
    name: "Contact Us",
    href: "#",
    Icon: MdOutlinePermContactCalendar,
  },
];
