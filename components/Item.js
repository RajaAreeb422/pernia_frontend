
import { ArrowLeftOutlined, ArrowRightOutlined ,ArrowBackIosRounded} from "@material-ui/icons";
import deal from './Deals_of_Day/deals.module.css'
const ItemLeft=()=>{
    return(
      <>
      <div  className={deal.showarrow}>
          <ArrowBackIosRounded style={{marginLeft:'10px',marginRight:'10px',marginTop:'13px',marginBottom:'10px'}}/>
      </div>
   <div className={deal.nothowarrow} 
   style={{backgroundColor:'whitesmoke',height:'0px',width:'0px'}}>
      
  </div>
  </>
    )
}
export default ItemLeft