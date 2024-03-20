import dropFile from '@/assets/CreateProjects/DropFiles.svg'
import SecondaryBorderBtn from '@/components/Buttons/SecondaryBorderBtn'

type IProps = {
    document: string,
    documentType: string
    onReplaceClick?: any,
    type?: string,
    href?: string
}

const EmployeeAttachment = ({ document, documentType, onReplaceClick, type, href }: IProps) => {
    const patName = location.pathname

    return (<>
        {href === null ? '' :
            <div className='flex items-center justify-between'>
                <div className="flex items-center gap-4">
                    <img src={dropFile} alt="File Drop" className='size-[24px]' />
                    <div className="flex flex-col">
                        <p className="font-bold  text-ellipsis overflow-hidden text-nowrap w-[165px]">{document}</p>
                        <p className="text-#B2BBC6]">{documentType}</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    {
                        patName === '/all_employees/view_employee' ?
                            <a href={`https://sec-system-apis.up.railway.app${href}`} download={type} className='p-[10px] rounded-md border border-primary text-primary gap-[10px] h-[32px] flex items-center justify-center w-[80px]'>View</a>
                            :
                            <div className='flex items-center gap-5'>
                                <SecondaryBorderBtn onClick={() => onReplaceClick} style={{ height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} text='Replace' />
                                <a href={`https://sec-system-apis.up.railway.app${href}`} download={type} className='p-[10px] rounded-md border border-primary text-primary gap-[10px] h-[32px] flex items-center justify-center w-[80px]'>View</a>
                            </div>
                    }
                </div>
            </div>
        }
    </>
    )
}

export default EmployeeAttachment