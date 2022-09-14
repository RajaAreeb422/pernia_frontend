
import { ArrowLeftOutlined, ArrowRightOutlined ,ArrowBackIosRounded} from "@material-ui/icons";
import deal from './deals.module.css'
const Left=()=>{
    return(
     
         <>
         <div  className={deal.showarrow}>
             <ArrowBackIosRounded style={{marginLeft:'12px',marginRight:'12px',marginTop:'13px',marginBottom:'10px'}}/>
         </div>
   
   <div  className={deal.notshowarrow}>
   
   </div>
   </>
    )
}
export default Left

// <div style={{backgroundColor:'whitesmoke',height:'50px',width:'50px',borderRadius:'50%',marginTop:'100px',marginBottom:'160px'}}>
// <ArrowBackIosRounded style={{marginLeft:'10px',marginRight:'10px',marginTop:'13px',marginBottom:'10px'}}/>
// </div>