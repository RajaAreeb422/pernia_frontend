import { ArrowLeftOutlined, ArrowRightOutlined ,ArrowForwardIosRounded} from "@material-ui/icons";
import deal from './Deals_of_Day/deals.module.css'
const ItemRight=()=>{
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
export default ItemRight