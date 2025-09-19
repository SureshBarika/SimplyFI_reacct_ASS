
import "./index.css"
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const ListItem =  (props) => {
    const {user,deleteUser,updateLike} = props
    const {id,	
    username,
    name,
    email,
    phone,
    website,
    like,
} = user



    return (
    <li className="list-item">
        <img className="img" src={`https://avatars.dicebear.com/v2/avataaars/${username}/svg?options[mood]=happy`} />
        <div className="data-div">
        <h1 className="name">{name}</h1>
        <div className="icons-cont">
            <MdOutlineEmail /> {email}
        </div>
        <div className="icons-cont">
            <IoCallOutline /> {phone}
        </div>
        <div className="icons-cont">
            <AiOutlineGlobal /> {website}
        </div>
        </div>
        <div className="btns-div">
           <button onClick={() => updateLike(id)}>{like ? <FcLike /> : <FaRegHeart/>}</button>
           <button ><CiEdit /></button>
           <button onClick={() => deleteUser(id)}><MdDelete /></button>
        </div>
    </li>
    )
}


export default ListItem