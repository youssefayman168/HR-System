import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import companyLogo from "../../assets/SEC_logo.svg";
import testImg from "../../assets/testImg.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { asideLinks } from ".";
import LogoutIcon from "@/assets/icons/LogoutIcon";
import { useMutation } from "@tanstack/react-query";
import globalServices from "@/utils/globals.services";

const BaseLayout = ({ children }: any) => {
  const refreshToken = localStorage.getItem("refresh")
    ? JSON.parse(localStorage.getItem("refresh") ?? "")
    : "";

  const navigate = useNavigate();

  const logout = useMutation({
    mutationFn: () => {
      return globalServices.logout(refreshToken);
    },
    onSuccess: () => {
      localStorage.clear();
      navigate("/");
      location.reload();
    },
  });
  return (
    <main>
      <div className='flex'>
        <aside className='w-[290px] bg-white h-[100vh]'>
          <img src={companyLogo} alt='SEC Logo' className='mt-8 ml-7' />
          <div className='mt-6'>
            <ul className=' flex items-center justify-between gap-2 flex-col'>
              {asideLinks.map(({ title, src, Icon }, index) => {
                return (
                  <NavLink
                    key={index}
                    className={
                      "text-[#797979] w-[90%] flex items-center gap-5 rounded-[15px] text-lg px-10 py-[8px]"
                    }
                    to={src}
                  >
                    <Icon />
                    {title}
                  </NavLink>
                );
              })}
              <li
                onClick={() => logout.mutate()}
                className='text-[#797979] w-[90%] flex items-center gap-5 rounded-[15px] text-lg px-10 py-3 cursor-pointer'
              >
                <LogoutIcon />
                Logout
              </li>
            </ul>
          </div>
        </aside>
        <div className='flex flex-col'>
          <nav className='bg-white h-[75px] w-[calc(100vw-290px)] flex items-center justify-end pr-6'>
            <button className=' flex items-center gap-2 font-bold text-lg'>
              <img
                src={testImg}
                alt=''
                className=' rounded-full w-[30px] h-[30px]'
              />
              Hi SEC, Welcome <IoIosArrowDown />
            </button>
          </nav>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className=' bg-[#E9EDF3] w-full h-[calc(100vh-75px)]'
          >
            {children}
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default BaseLayout;
