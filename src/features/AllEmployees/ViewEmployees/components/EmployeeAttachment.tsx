import dropFile from '@/assets/CreateProjects/DropFiles.svg'
import SecondaryBorderBtn from '@/components/Buttons/SecondaryBorderBtn'

type IProps = {
    document: string,
    documentType: string
    onViewClick?: any,
    onDownloadClick?: any
    onReplaceClick?: any
}

const EmployeeAttachment = ({ document, documentType, onViewClick, onDownloadClick, onReplaceClick }: IProps) => {
    const patName = location.pathname

    return (
        <div className='flex items-center justify-between'>
            <div className="flex items-center gap-4">
                <img src={dropFile} alt="File Drop" className='size-[24px]' />
                <div className="flex flex-col">
                    <p className="font-bold">{document}</p>
                    <p className="text-#B2BBC6]">{documentType}</p>
                </div>
            </div>
            <div className="flex items-center gap-5">
                {
                    patName === '/all_employees/view_employee' ?
                        <SecondaryBorderBtn onClick={() => onViewClick} style={{ height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} text='View' />
                        :
                        <SecondaryBorderBtn onClick={() => onReplaceClick} style={{ height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} text='Replace' />
                }
                <SecondaryBorderBtn onClick={() => onDownloadClick} style={{ height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} text='Download' />
            </div>
        </div>
    )
}

export default EmployeeAttachment