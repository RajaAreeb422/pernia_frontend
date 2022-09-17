import React from "react";
import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css'
import styled from "styled-components";
import fot from "../../styles/footer.module.css"
import ReactWhatsapp from 'react-whatsapp';
const Footer = () => {
return (

	<div className={fot.box}>
	<div className={fot.container}>
		<div className={fot.row}>
		<div className={fot.columnS} style={{marginTop:'20px',marginLeft:'3px'}}>
			{/* <Heading>About Us</Heading> */}
			
			<div className={fot.footlink} ><Link href='/sellAt' as={`/sellAt`}><p className={fot.footlink}>Become a Partner</p></Link></div>
			<div className={fot.footlink} > <Link href='/blog' as={`/blog`}><p className={fot.footlink}>Editorial Blog</p></Link></div>
			<div className={fot.footlink} > <Link href='/rewards' as={`/rewards`}><p className={fot.footlink}>Pernia Rewards</p></Link></div>
			<div className={fot.footlink} > <Link href='/rewards' as={`/rewards`}><p className={fot.footlink}>Pernia Disclaimers</p></Link></div>
		</div>
		<div className={fot.column}>
			<div className={fot.heading}>Help center</div>
			<div className={fot.footlink}><Link href='/track' as={`/track`}><p className={fot.footlink}>Track your Order</p></Link></div>
			<div className={fot.footlink}><Link href='/shipandlv' as={`/shipandlv`}><p className={fot.footlink}>Shipping and Delivery</p></Link></div>
			<div className={fot.footlink} ><Link href='/cancellation' as={`/cancellation`}><p className={fot.footlink}>Cancellations</p></Link></div>
			<div className={fot.cootlink} >FAQs</div>
			</div>
		<div className={fot.column}>
			

			<div  className={fot.heading}>Contact Us</div>
			<ReactWhatsapp className={fot.footlinkS} 
			 number="+090078601" message="Chat with US" > 
		
			<p className={fot.footlink}>Whatsapp: +090078601</p></ReactWhatsapp>
		
			<Link href='mailto:customercare@pernia.pk<?subject=SendMail&body=Description'>
			<div className={fot.footlink} href="#">
				<p className={fot.footlink}>Email: customercare@pernia.pk</p>
			</div>
			</Link>
			<div style={{marginTop:'10px'}} className={fot.heading}>Partner with Pernia</div>
			<div className={fot.footlink} ><Link href='/sellAt' as={`/sellAt`}><p className={fot.footlink}>Sell at Pernia</p></Link></div>
			</div>
		<div className={fot.column}>
			{/* <Heading>Social Media</Heading> */}
			<div className={fot.footlink} href="#" >
			<div  className={fot.footlinkS}><p className={fot.footlink}>Connect with us</p></div>
		
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				<Image src="/fb.svg" height='30' width="60" alt="" style={{ marginLeft:'20px' }} />
				<Image src="/you.svg"  height='30' width="60"alt="" style={{ marginLeft:'20px' }} />
				<Image src="/insta.svg" height='30' width="60"alt="" style={{marginLeft:'20px'}} />
				<Link href='https://cyberxstudio.com/' >
				<Image src="/CXS-logo-150.png" height='30' width="40"alt="" style={{marginLeft:'20px'}} />
				</Link>
				</span>
			</i>
			</div>
			
		</div>
		</div>
	</div>
	
	<div style={{borderTop:'1px solid white',
				backgroundColor:'black',
				paddingBottom: "10px",
				marginBottom:'-18px',
				paddingTop: "10px"}}>
	<span style={{ color: "white",
				textAlign: "left",
				height:'30px',
				paddingBottom: "10px",
				marginLeft:'20px',
				paddingTop: "10px", }}>
		©️ 2022 Pernia Couture. All Rights Reserved.
	</span>
	<span className={fot.spn} style={{ color: "white",
				float:'right',
				marginRight:'20px' }}>
		Term of Sale | Terms {'&'} Conditions | Privacy {'&'} Cookie | Disclaimers

	</span>
	</div>
	</div>
	
);
};
export default Footer;



 const Box = styled.div`
padding: 20px 0px;
background: #1B252D;
bottom: 0;
width: 100%;
background:red ;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

 const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	
	margin: 0 auto;
	padding-top:20px;
	padding-bottom:40px;
	
`

 const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;

`;

 const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(285px, 1fr));
grid-gap: 60px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;
const FootLink = styled.div`
color: #fff;

text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

const Heading = styled.p`
color: #fff;
text-decoration: underline;
`;

