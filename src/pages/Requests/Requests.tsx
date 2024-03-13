import BaseLayout from '../../layouts/BaseLayout/BaseLayout'
import { IoIosArrowBack, IoIosArrowForward, IoMdArrowDropdown } from 'react-icons/io'
import { useEffect, useState } from 'react';
import download from '../../assets/Projects/Download.svg'
import DropDown from '../../components/DropDown/DropDown';
import Elm from '../../components/Requests/Elm';
import BtnCreate from '../../components/Buttons/BtnCreate';
import ReactPaginate from 'react-paginate';
import { useQuery } from '@tanstack/react-query';
import getAllRequests from '@/features/requests/all/services/getAllRequests';

const Requests = () => {

    const [uListEmp, setUlList] = useState(false)
    const [uListReq, setUListReq] = useState(false)
    const [uListRole, setUListRole] = useState(false)
    const [uListStat, setUListStat] = useState(false)

    function uListEmp1() {
        setUlList(!uListEmp)

        setUListReq(false)
        setUListRole(false)
        setUListStat(false)
    }
    function uListReq2() {
        setUListReq(!uListReq)

        setUlList(false)
        setUListRole(false)
        setUListStat(false)
    }
    function uListStat4() {
        setUListStat(!uListStat)

        setUlList(false)
        setUListReq(false)
        setUListRole(false)
    }
    function uListRole3() {
        setUListRole(!uListRole)

        setUlList(false)
        setUListReq(false)
        setUListStat(false)
    }


    // Get All Requests

    const { data } = useQuery<any>({
        queryKey: ['getAllRequests'],
        queryFn: getAllRequests
    })

    // const [currentPage, setCurrentPage] = useState(0)
    // const [filterDataReq, setFilterDataReq] = useState<any>()
    // const itemsNum = 6

    // useEffect(() => {
    //     setFilterDataReq(
    //         data?.filter((_: any, index: number) => {
    //             return (index >= currentPage * itemsNum) && (index < (currentPage + 1) * itemsNum);
    //         })
    //     );
    // }, [currentPage]);

    return (
        <BaseLayout>
            <div className='p-6 pb-3'>
                <div><p className='text-[#224886] text-[25px] font-bold '>Requests</p></div>
                <div className="Table bg-white rounded-[15px] w-full mt-6">
                    <div className="Header bg-primary py-7 rounded-tl-[15px] rounded-tr-[15px] px-6 text-white flex items-center gap-6 w-full">
                        <button onClick={uListEmp1} className="w-[18%] flex items-center mx-auto gap-1 relative">
                            <span className="absolute top-[50px] left-[-110px]">
                                <DropDown text1='All' text2='Stationary' text3='Loans' text4='Training' text5='Expenses' style={{ opacity: uListEmp ? '1' : '0', visibility: uListEmp ? 'visible' : 'hidden', border: "none", boxShadow: "0px 4px 4px 2px rgba(0, 0, 0, 0.25)", top: "0px", left: "100px" }} />
                            </span>
                            Employee Name
                            <IoMdArrowDropdown />
                        </button>
                        <button onClick={uListReq2} className=" flex items-center w-[18%] mx-auto gap-1 relative">
                            <span className="absolute top-[50px] left-[-110px]">
                                <DropDown text1='All' text2='Stationary' text3='Loans' text4='Training' text5='Expenses' style={{ opacity: uListReq ? '1' : '0', visibility: uListReq ? 'visible' : 'hidden', border: "none", boxShadow: "0px 4px 4px 2px rgba(0, 0, 0, 0.25)", top: "0px", left: "100px" }} />
                            </span>
                            Request Type
                            <IoMdArrowDropdown />
                        </button>
                        <p className="w-[15%] ">Employee ID</p>
                        <p className="w-[15%] ">Date</p>
                        <button onClick={uListRole3} className="w-[15%] flex items-center mx-auto gap-1 relative">
                            <span className="absolute top-[50px] left-[-110px]">
                                <DropDown styleLast={{ display: "none" }} text1='All' text2='SuperAdmin' text3='HR' text4='Office Manager' style={{ opacity: uListRole ? '1' : '0', visibility: uListRole ? 'visible' : 'hidden', border: "none", boxShadow: "0px 4px 4px 2px rgba(0, 0, 0, 0.25)", top: "0px", left: "100px" }} />
                            </span>
                            Role
                            <IoMdArrowDropdown />
                        </button>
                        <button onClick={uListStat4} className=" flex items-center w-[8%] mx-auto gap-1 relative">
                            <span className="absolute top-[50px] left-[-110px]">
                                <DropDown styleLast={{ display: "none" }} text1='All' text2='Active' text3='Declined' text4='Accepted' style={{ opacity: uListStat ? '1' : '0', visibility: uListStat ? 'visible' : 'hidden', border: "none", boxShadow: "0px 4px 4px 2px rgba(0, 0, 0, 0.25)", top: "0px", left: "100px" }} />
                            </span>
                            Status
                            <IoMdArrowDropdown />
                        </button>
                        <p className="w-[15%] ">Action</p>
                    </div>
                    <div className='Body w-full h-[calc(100vh-385px)] HideScroll overflow-y-auto '>
                        {
                            data?.map(({ employee, type, status }: any) => {
                                const { image, id, name, hiring_date, role } = employee
                                return <Elm
                                    key={id}
                                    photo={image}
                                    name={name}
                                    reqType={type}
                                    id={id}
                                    date={hiring_date}
                                    role={role}
                                    status={status} />
                            })
                        }
                    </div>
                    <div className='flex items-center justify-between px-6'>
                        {/* <div>
                            <ReactPaginate
                                containerClassName={"pagination flex items-center py-[14px] gap-[8px]"}
                                pageClassName={"size-[40px] rounded-lg flex items-center justify-center border border-[#D9D9DB]"}
                                activeClassName={"active border-primary"}
                                onPageChange={(event) => setCurrentPage(event.selected)}
                                pageCount={Math.ceil(RequestData.length / itemsNum)}
                                breakLabel="..."
                                previousLabel={
                                    <div className='border border-[#D9D9DB] size-[40px] flex items-center justify-center rounded-lg'>
                                        <IoIosArrowBack />
                                    </div>
                                }
                                nextLabel={
                                    <div className='border border-[#D9D9DB] size-[40px] flex items-center justify-center rounded-lg'>
                                        <IoIosArrowForward />
                                    </div>
                                }
                            />
                        </div> */}
                    </div>
                </div>
                <div className='w-fit ms-auto mt-4'>
                    <BtnCreate text='Export As PDF' icon={download} path='' />
                </div>
            </div>
        </BaseLayout>
    )
}


export default Requests