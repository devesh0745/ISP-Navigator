import { ispSelectorDetails } from "../../redux/reducers/ispReducer";
import { useSelector } from "react-redux";
import "./ISPDetails.css"

function ISPDetails(){

    
    const ispDetails=useSelector(ispSelectorDetails);
    console.log('isp details:',typeof(ispDetails));
    return(
        <div id="isp-main-details">
            <h1>ISP Details</h1>
            {ispDetails.map((isp,index)=>(
                <div>
                <div>
                    <h2>{isp.message.name}</h2>
                    <h4>{isp.message.description} </h4>
                </div>
                <div>
                    <h5>{isp.message.rating}</h5>
                    <h5>{isp.message.speed}</h5>
                    <h5>{isp.message.services}</h5>
                </div>
                <div>
                    <h5>{isp.message.email}</h5>
                    <h5>{isp.message.contact_number}</h5>
                    <h5>{isp.message.url}</h5>
                </div>
                </div>
            ))}
        </div>
    )
}
export default ISPDetails;