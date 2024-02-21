type Create = {
  icon: any,
  path?: any,
  text: string,
  onClick?: Function
}

const BtnCreate = ({ icon, text, onClick }: Create) => {
  return (
    <button onClick={() => onClick} className="flex items-center gap-2 bg-[#105090] text-white py-3 px-6 rounded-[10px] ">
      <div>
        <img src={icon} alt="plus" />
      </div>
      {text}
    </button>
  )
}

export default BtnCreate