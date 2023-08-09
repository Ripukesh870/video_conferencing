import styled from "@emotion/styled";
import { useSelector,useDispatch } from "react-redux";
// import {MdDeleteForever} from "react-icons";
import DeleteIcon from "@mui/icons-material/Delete";
import {removeUser} from "../store/slices/UserSlice";


const DisplayUsers=()=>{
    const dispatch=useDispatch();

    const data = useSelector((state)=>{
        return state.users;
    })

    const deleteUser=(id)=>{
        dispatch(removeUser(id));
    }


    // console.log(data);
    // console.log("ripukesh")
    return <Wrapper>
        {
            data.map((user,id)=>{
                return <li key={id}>
                    {user}
                    <button className="btn-delete" style={{border:"none"}} onClick={()=>deleteUser(id)}>
                        <DeleteIcon sx={{color:"red",fontSize:"22px"}}/>
                   </button>
                </li>
            })
        }
    </Wrapper> 
}

const Wrapper = styled.section`
    li{
        width:100%;
        display:flex;
        align-item:center;
        justify-content:space-between;
        padding:.5rem;
        border-bottom:1px solid #eee;
        &:first-child{
            border-top:1px solid #eee;
        }  
    }
`
export default DisplayUsers;
