import { Link } from "react-router-dom"

type Create = {
  icon: any,
  path: string,
  text: string,
  onClick?: Function
}

const BtnCreate = ({ icon, text, onClick , path }: Create) => {
  return (
    <Link to={path} onClick={() => onClick} className="flex items-center gap-2 bg-[#105090] text-white py-3 px-6 rounded-[10px] ">
      <div>
        <img src={icon} alt="plus" />
      </div>
      {text}
    </Link>
  )
}

export default BtnCreate