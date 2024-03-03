import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import ArrowLeft from "@/assets/CreateProjects/ArrowLeft.svg";
import { capitalize } from "@/utils/capitalize";
type IProps = {
  link: any
}
const Breadcrumb = ({ link }: IProps) => {
  const crumbs = location.pathname.split("/").filter((path) => path != "");
  return (
    <div className='Header flex items-center '>
      <Link
        to={link}
      >
        <img src={ArrowLeft} alt='ArrowLeft' className='mr-[17px]' />
      </Link>
      {crumbs.map((crumb, idx) => (
        <div className="flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold ">
          {capitalize(crumb).replace("_", " ")}
          {crumbs.length - 1 == idx ? null : <BiChevronRight />}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
