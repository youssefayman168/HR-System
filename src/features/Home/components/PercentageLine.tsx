type IProps = {
    title: string,
    lineWidth: number,
    value: string,
    colorCondition: string,
}
const PercentageLine = ({ title, lineWidth, value, colorCondition }: IProps) => {
    return (
        <div className="flex items-center gap-7 mb-8">
            <p className="text-grayColor font-semibold text-ellipsis overflow-hidden whitespace-nowrap text-lg w-[175px]">{title}</p>
            <div className="flex-1 w-full h-[10px] rounded-lg bg-[#E8E8E8] overflow-hidden">
                <div className=" bg-transparent h-full rounded-lg overflow-hidden" style={{ width: `${lineWidth}%` }}>
                    <div
                        className="linePercentageAnimation h-full"
                        style={{
                            backgroundColor:
                                colorCondition === 'planning' ? '#FF793F' :
                                    colorCondition === 'progress' ? '#0764E6' :
                                        colorCondition === 'canceled' ? '#E03434' :
                                            colorCondition === 'done' ? '#34E045' : ''
                        }}
                    >
                    </div>
                </div>
            </div>
            <div className="font-semibold text-lg text-grayColor">{value}</div>
        </div>
    )
}

export default PercentageLine