import React, { useContext, useState } from "react";

import { BsSearch } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "./Layout";
import Image from "next/image";
import ItemsHistory from "../header/ItemsHistory";
import Link from "next/link";
import Menu from "../header/Menu";
import { RiUserLine } from "react-icons/ri";
import RightSidebar from "../header/RightSidebar";
import Search from "../header/Search";
import { UserButton } from "@clerk/nextjs";
import logo from "../../public/images/logo.png";
import { useSelector } from "react-redux";
import { useUser } from "@clerk/nextjs";

// import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const [icon, setIcon] = useContext(IconContext);
  const [toggle, setToggle] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  // const { data: session, status } = useSession();
  const items = useSelector((state) => state.cart.items);
  const { isLoaded, isSignedIn, user } = useUser();

  if (typeof document !== "undefined") {
    if (icon.search) {
      document.body.classList = "overflow-hidden";
    } else {
      document.body.classList = "";
    }
  }

  return (
    <header className="p-5 z-10 fixed max-w-[1600px] left-0 right-0 mx-auto bg-[#F4F4F4] shadow-md flex justify-between items-center">
      <div className="flex items-center gap-3 md:gap-5">
        <div className="ml-1">
          <FiMenu
            onClick={() => setIcon({ menu: !icon.menu })}
            className="text-3xl lg:hidden text-gray-700 hover:text-[#045868] duration-300 cursor-pointer"
          />
          <RightSidebar />
        </div>
        <div>
          <div className="relative" onClick={() => setToggleCart(!toggleCart)}>
            <CgShoppingCart className="text-2xl text-gray-700 hover:text-[#045868] duration-300 cursor-pointer" />
            <span className="absolute -top-3 -right-2 font-bold text-red-600">
              {items.length}
            </span>
          </div>
          <ItemsHistory toggleCart={toggleCart} />
        </div>
        {user ? (
          <div className="flex items-center gap-2">
            <UserButton afterSignOutUrl="/" />
            <p className="pt-2 font-semibold text-gray-800">
              {user?.firstName} {user?.lastName}
            </p>
          </div>
        ) : (
          <Link href="/sign-in">
            <RiUserLine className="text-gray-700 hover:text-[#045868] duration-300 text-lg font-bold" />
          </Link>
        )}
      </div>
      <Link href="/">
        <Image alt="logo" width={90} height={30} src={logo} />
      </Link>
      <div className="flex items-center">
        <Menu />
        <div>
          <BsSearch
            onClick={() => setIcon({ search: !icon.search })}
            className="text-xl text-gray-700 hover:text-[#045868] duration-300 cursor-pointer"
          />
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
