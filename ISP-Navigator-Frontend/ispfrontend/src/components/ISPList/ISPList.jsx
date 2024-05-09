import ISPDetails from "../ISPDetails/ISPDetails";
import { useEffect,useState } from "react";
import {getInitialStateAsync, ispSelector,getInitialStateAsyncDetails} from "../../redux/reducers/ispReducer";
import { useSelector,useDispatch } from "react-redux";
import "./ISPList.css"


function ISPList(){
  //  const [ispList,setISPList]=useState([]);

    const isps=useSelector(ispSelector);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getInitialStateAsync());
    },[])

    function handleGetDetails(id){
     //   console.log(" list id:",id);
        dispatch(getInitialStateAsyncDetails(id))
    }

    return(
        <div id="list-details">
            <div id="main-div">
            <h1 id="isp-list-heading" >ISP List</h1>
            {isps.map((isp,index)=>(
                <div key={index} id="isp-list">
                    <h4 id="isp-name" >{isp.name}</h4>
                    <div id="isp-price-details-btn">
                        <h4 id="isp-price" >Rs.{isp.pricing}</h4>
                        <button id="isp-details-btn" onClick={()=>{handleGetDetails(isp._id)}}>More</button>
                    </div>
                </div>
            ))}
            </div>
            <ISPDetails />
        </div>
    )
}
export default ISPList;