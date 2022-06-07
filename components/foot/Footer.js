import React from "react";

import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css'
import styled from "styled-components";
import fot from "../../styles/footer.module.css"
const Footer = () => {
return (

	<div className={fot.box}>
	<div className={fot.container}>
		<div className={fot.row}>
		<div className={fot.column} style={{marginTop:'20px', marginLeft:'20px'}}>
			{/* <Heading>About Us</Heading> */}
			
			<div className={fot.footlink} ><Link href='/sellAt' as={`/sellAt`}>Become a Partner</Link></div>
			<div className={fot.footlink} > <Link href='/blog' as={`/blog`}>Editorial Blog</Link></div>
			<div className={fot.footlink} > <Link href='/rewards' as={`/rewards`}>Pernia Rewards</Link></div>
			<div className={fot.footlink} > <Link href='/rewards' as={`/rewards`}>Pernia Disclaimers</Link></div>
		</div>
		<div className={fot.column}>
			<div className={fot.heading}>Help center</div>
			<div className={fot.footlink}><Link href='/track' as={`/track`}>Track your Order</Link></div>
			<div className={fot.footlink}><Link href='/shipanddlv' as={`/shipanddlv`}>Shipping and Delivery</Link></div>
			<div className={fot.footlink} ><Link href='/cancellation' as={`/cancellation`}>Cancellations</Link></div>
			<div className={fot.cootlink} >FAQs</div>
			<div className={fot.footlink}><Link href='/exchange' as={`/exchange`}>Returns</Link></div>
			<div className={fot.footlink}><Link href='/refund' as={`/refund`}>Refund Policy</Link></div>
		</div>
		<div className={fot.column}>
			{/* <Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink> */}

			<div className={fot.heading}>Contact Us</div>
			<div className={fot.footlink} href="#">Whatsapp: +090078601</div>
			<div className={fot.footlink} href="#">Email: customercare@pernia.pk</div>
			
			<div className={fot.heading}>Partner with Pernia</div>
			<div className={fot.footlink} ><Link href='/sellAt' as={`/sellAt`}>Sell at Pernia</Link></div>
			<div className={fot.footlink}><Link href='/connect' as={`/connect`} >Connect with us</Link></div>
		</div>
		<div className={fot.column}>
			{/* <Heading>Social Media</Heading> */}
			<div className={fot.footlink} href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				<img src="./fb.svg" alt="" style={{ width: "30px",marginLeft:'20px' }} />
				<img src="./you.svg" alt="" style={{ width: "30px",marginLeft:'20px' }} />
				<img src="./insta.svg" alt="" style={{ width: "30px" ,marginLeft:'20px'}} />
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
				paddingBottom: "10px",
				marginLeft:'20px',
				paddingTop: "10px", }}>
		©️ 2022 Pernia Technologies. All Rights Reserved.
	</span>
	<span style={{ color: "white",
				float:'right',
				marginRight:'20px' }}>
		Term of Sale Terms | Conditions Privacy | Cookie Disclaimers

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

