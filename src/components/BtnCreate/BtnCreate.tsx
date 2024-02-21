import React from 'react'
import { Link } from 'react-router-dom'


type Create = {
    icon : string ,
    path : string ,
    text : string
}

const BtnCreate = ({ icon , path , text } : Create ) => {
  return (
    <Link to={path} className="flex items-center gap-2 bg-[#105090] text-white py-3 px-6 rounded-[10px] ">
        <div>
        <img src={icon} alt="plus" />
        </div>
        {text}
    </Link>
  )
}

export default BtnCreate