import increase from "@/assets/ViewInsights/increaseGraph.svg";
import decrease from "@/assets/ViewInsights/decreaseGraph.svg";

type IProps = {
  title: string;
  value: string;
  message?: string;
  status?: string;
  style?: string;
};

const ViewInsightGraphBox = ({
  title,
  value,
  message,
  status,
  style,
}: IProps) => {
  return (
    <div
      className={`h-full w-1/2 ${style} bg-white flex items-center justify-between border border-[#E0E0E0] p-5 gap-7 rounded-[10px]`}
    >
      <div>
        <p className='text-xl font-semibold'>{title}</p>
        <p className='text-5xl font-semibold mt-5'>{value}</p>
      </div>
      {status && (
        <div>
          {status === "increase" ? (
            <div className='relative w-fit'>
              <img src={increase} alt='increase graph' />
              <div className='after:absolute after:h-full after:bg-white chartAnimation after:top-0 after:right-0 '></div>
            </div>
          ) : (
            <div className='relative w-fit'>
              <img src={decrease} alt='decrease graph' />
              <div className='after:absolute after:h-full after:bg-white chartAnimation after:top-0 after:right-0 '></div>
            </div>
          )}
          <p
            className='whitespace-nowrap mt-4 flex items-center justify-center py-1 px-[10px] rounded-md'
            style={{
              backgroundColor: status === "increase" ? "#06985524" : "#FFEFE7",
            }}
          >
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default ViewInsightGraphBox;
