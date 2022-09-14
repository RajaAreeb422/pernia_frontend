import { ArrowLeftOutlined, ArrowRightOutlined ,ArrowForwardIosRounded} from "@material-ui/icons";
import deal from './deals.module.css'
const Right=()=>{
    return(
      
            <>
            <div  className={deal.showarrow}>
                <ArrowForwardIosRounded style={{marginLeft:'12px',marginRight:'12px',marginTop:'13px',marginBottom:'10px'}}/>
            </div>
      
      <div  className={deal.notshowarrow}>
      
      </div>
      </>
    )
}
export default Right;
{/* <div style={{backgroundColor:'whitesmoke',height:'50px',width:'50px',borderRadius:'50%',marginTop:'100px',marginBottom:'160px'}}>
          <ArrowForwardIosRounded style={{marginLeft:'12px',marginRight:'12px',marginTop:'13px',marginBottom:'10px'}}/>
      </div> */}