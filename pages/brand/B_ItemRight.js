import { ArrowLeftOutlined, ArrowRightOutlined ,ArrowForwardIosRounded} from "@material-ui/icons";
import brd from '../../styles/brand.module.css'
const B_ItemRight=()=>{
    return(
      <>
      <div className={brd.showRightArrow}>
          <ArrowForwardIosRounded style={{marginLeft:'12px',marginRight:'12px',marginTop:'13px',marginBottom:'10px'}}/>
      </div>
      <div className={brd.notshowArrow}>
      </div>
      </>
    )
}
export default B_ItemRight