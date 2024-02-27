import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import ArrowLeft from "@/assets/CreateProjects/ArrowLeft.svg";
import { normalizeLink } from "@/utils/normalizeLink";
import { capitalize } from "@/utils/capitalize";

const Breadcrumb = () => {
  const crumbs = location.pathname.split("/").filter((path) => path != "");
  return (
    <div className='Header mb-6 flex items-center p-[20px]'>
      <img src={ArrowLeft} alt='ArrowLeft' className='mr-[17px]' />
      {crumbs.map((crumb, idx) => (
        <Link
          to={normalizeLink(crumb)}
          className='flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold '
        >
          {capitalize(crumb).replace("_", " ")}
          {crumbs.length - 1 == idx ? null : <BiChevronRight />}
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumb;
