import brd from '../../../styles/brand.module.css'
import { ArrowLeftOutlined, ArrowRightOutlined ,ArrowBackIosRounded} from "@material-ui/icons";
const B_ItemLeft=()=>{
    return(
      <>
      <div className={brd.showleftArrow}>
          <ArrowBackIosRounded style={{marginLeft:'10px',marginRight:'10px',marginTop:'13px',marginBottom:'10px'}}/>
      </div>

      <div className={brd.notshowArrow} >
      </div>
      </>
    )
}
export default B_ItemLeft