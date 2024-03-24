import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import companyLogo from "../../assets/SEC_logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { asideLinks } from ".";
import LogoutIcon from "@/assets/icons/LogoutIcon";
import { useMutation, useQuery } from "@tanstack/react-query";
import globalServices from "@/utils/globals.services";
import { useState } from "react";
import { pathList } from "@/routes/routesPaths";
import getProfileData from "@/features/profile/services/getProfileData";

const BaseLayout = ({ children }: any) => {
  const [userProfile, setUserProfile] = useState(false);

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

  const { data: profileData } = useQuery<any>({
    queryKey: ['getProfileData'],
    queryFn: getProfileData
  })

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
                      "text-[#797979] w-[90%] flex items-center gap-5 rounded-[15px] xxl:my-[3.8px] xxxl:my-[8.7px] text-[17px] px-10 py-[8px]"
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
            <div className='relative'>
              <button
                onClick={() => {
                  setUserProfile(!userProfile);
                }}
                className={`flex items-center gap-2 font-bold text-lg  `}
              >
                <img
                  src={`https://sec-system-apis.up.railway.app${profileData?.image}`}
                  alt='UserImg'
                  className='rounded-full object-cover w-[30px] h-[30px]'
                />
                Hi {profileData?.name}, Welcome <IoIosArrowDown />
              </button>

              <div
                className={`${userProfile ? "h-[120px]" : "h-0"
                  } overflow-hidden bg-white duration-300 font-[600] absolute rounded-[15px] z-[9000000] top-full shadow-lg left-[-22px] w-[220px] text-start`}
              >
                <ul className='ps-5'>
                  <li>
                    <Link className='py-[7px] pt-3 block' to={pathList.profile}>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className='py-[7px] block' to={pathList.new_employee}>
                      Add account
                    </Link>
                  </li>
                  <li>
                    <Link className='py-[7px] block text-[#FF5151]' to={'/'}>
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
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
