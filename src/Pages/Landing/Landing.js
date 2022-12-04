import React from "react";
import HomeNavbar from "../../components/Homepage/homeNavbar";
import "./landing.css";
import phoneimg from "../../assets/hero-section.png"
import buyerimg from "../../assets/image-buyer.png"
import sellerimg from "../../assets/image-seller.png"
import { Link } from "react-router-dom";
import {AiOutlineArrowRight} from "react-icons/ai"
import {FaShieldAlt} from "react-icons/fa";
import castle from "../../assets/01.png"
import spiral from "../../assets/spiral.png"


const Landing= ()=>{
    return(
        <div className="whole_homepage">
            <HomeNavbar/>
            <div>
            <section className="first_section">
                <div className="sec1_firstsection">
                    <p className="secTransactions">Secure Your Transactions With Escrow That Works For Everyone.</p>
                    <p className="sacTransactions_text">Sanwo's easy-to-use escrow service allows you to gain your customers' trust and transact 
                        online safely, whether you are a small business or a fortune 500.
                    </p>
                    <div className="sec1_signuplogin" style={{marginTop:"40px"}}>
                    <Link className="sec1_signup" style={{marginLeft: "0", marginRight:"20px"}}>Sign Up For Free <AiOutlineArrowRight/></Link>
                    <Link className="sec1_start">Login <AiOutlineArrowRight/></Link>
                    </div>
                    <p className="trusted_ecommerce">Trusted by over <span className="text_ecommerce">150 e-commerce businesses</span> across Nigeria.</p>
                </div>
                <img src={phoneimg} className="phone_img"/>
            </section>
            <section className="sec2_landing">
                <p className="howitworks">How it works</p>
                <div className="howitworks_seller">
                    <img className="img_sellerimg" src={sellerimg}/>
                    <div className="buyer_text">
                    <p className="arebuyer_howitworks">Are You a buyer?</p>
                    <p className="sacTransactions_text">Use our Sanwo express service to create one-off transactions.
                     No need to set up an account.
                     Just input your email address to get started.</p>
                     <Link className="sec1_signup" style={{marginLeft: "0", width:"280px"}}>Start An Express Transaction <AiOutlineArrowRight/></Link>
                     </div>
                </div>
                <div className="howitworks_seller2">
                    <div className="buyer_text">
                    <p className="arebuyer_howitworks">Are You a buyer?</p>
                    <p className="sacTransactions_text">Manage multiple escrow transactions at once. Just input the transaction details Buyer pays  
                     <AiOutlineArrowRight/>You deliver the product/service
                    <AiOutlineArrowRight/> Buyer confirms <AiOutlineArrowRight/> Sanwo pays you.</p>
                     <Link className="sec1_signup" style={{marginLeft: "0", width:"280px"}}>Open An Account Now <AiOutlineArrowRight/></Link>
                     </div>
                    <img className="img_sellerimg" src={buyerimg}/>
                </div>
            </section>

            <section className="sec3_landing">

                <div className="sec3_landing_sec1">

                    <p className="sec3_landing_sec1_p1">MORE FEATURES</p>

                    <p className="sec3_landing_sec1_p2">Do more with your business on Sanwo.</p>

                    <Link className="sec1_signup" style={{marginLeft: "0", marginRight:"20px"}}>Sign Up For Free <AiOutlineArrowRight/></Link>
                  
                </div>

                <div className="sec3_landing_sec2">

                    <div className="sec2_shield_phone">
                    <div className="sec3_landing_sec2_sec1">
                        <FaShieldAlt style={{color:"#917AEB", fontSize:"40px"}} />
                    </div>

                    <div className="shield_text">
                        <p className="details_shield">Not quite ready for escrow? Set up a virtual business account.</p>

                        <p className="sacTransactions_text">Set up a virtual account for your business so you can send and receive money with ease! -<span className="text_ecommerce" style={{fontWeight:"bold"}}> Coming soon</span></p>

                    </div>
                    </div>

                    <div className="sec2_shield_phone2">
                    <div className="sec3_landing_sec2_sec1">
                        <FaShieldAlt style={{color:"#917AEB", fontSize:"40px"}} />
                    </div>

                    <div className="shield_text">
                        <p className="details_shield">Not quite ready for escrow? Set up a virtual business account.</p>

                        <p className="sacTransactions_text">Set up a virtual account for your business so you can send and receive money with ease! -<span className="text_ecommerce" style={{fontWeight:"bold"}}> Coming soon</span></p>

                    </div>
                    </div>
                </div>


            </section>
            
            <section className="sec4_landing">
                <p  className="text_ecommerce" style={{fontWeight:"bold", textAlign:"center"}}>OUR SERVICE HOLDERS</p>
                <p className="sec4_trusted">Trusted by over 150 e-commerce businesses across Nigeria</p>
                <div className="cust_comm">
                    <div className="first_comment">
                        <p className="sacTransactions_text">I would recommend sanwo to everyone out there because
                             it’s easier to use and help build trust between 
                             vendors and client. I’ve used it for numerous 
                             transactions and guess what ? It doesn’t require
                              any serious teaching before one could access it. 
                              Love the e-receipt package and the fact that I can 
                            get my money once I’ve delivered the package.</p>
                            <div className="baker_col">
                                <img src={castle} width="50px" height="55px" className="baker_colimg"/>
                                <div className="name_comp">
                                    <p className="name_bakercol">Busyo Adeseun</p>
                                    <p className="sacTransactions_text">CEO, Baker's castle</p>
                                    </div>
                            </div>
                    </div>
                    <div className="section4sec_comment">
                        <p className="sacTransactions_text">The process of using Sanwo was very 
                        easy and filled with great user 
                        experience, I will recommend Sanwo to vendors
                         and buyers on my timeline. Great product!</p>
                            <div className="baker_col">
                                <img src={castle} width="50px" height="55px" className="baker_colimg"/>
                                <div className="name_comp">
                                    <p className="name_bakercol">Busyo Adeseun</p>
                                    <p className="sacTransactions_text">CEO, Baker's castle</p>
                                    </div>
                            </div>
                    </div>
                </div>
            </section>

            <section className="sec5_landing">
                <div className="sec5_content">
                <div className="sec5_innerdetails">
                    <p className="sec5_whyshould">Why should you use Sanwo?</p>
                    <p  className="sacTransactions_text">We reduce fraud between online buyers and 
                        sellers by providing a safe platform for them to 
                        transact without fear of being duped..</p>
                </div>
                <div className="sec5_innerdetails2">
                <div className="sec5_landing_sec2_sec1">
                        <p style={{fontWeight:"bold", color:"#917AEB", fontSize:"22px", marginBottom:"0"}}>01</p>
                    </div>
                    <p className="sec5_headline">Corporate Banking</p>
                    <p  className="sacTransactions_text">We reduce fraud between online buyers and 
                        sellers by providing a safe platform for them to 
                        transact without fear of being duped..</p>
                </div>
                <div className="sec5_innerdetails2">
                <div className="sec5_landing_sec2_sec1" style={{backgroundColor:"rgba(81, 181, 109, 0.2)"}}>
                        <p style={{fontWeight:"bold", color:"#19B500", fontSize:"22px", marginBottom:"0",}}>02</p>
                    </div>
                    <p className="sec5_headline">Corporate Banking</p>
                    <p  className="sacTransactions_text">We reduce fraud between online buyers and 
                        sellers by providing a safe platform for them to 
                        transact without fear of being duped..</p>
                </div>
                </div>
                <div className="sec5_content">
                
                <div className="sec5_innerdetails2">
                <div className="sec5_landing_sec2_sec1">
                        <p style={{fontWeight:"bold", color:"#917AEB", fontSize:"22px", marginBottom:"0"}}>01</p>
                    </div>
                    <p className="sec5_headline">Corporate Banking</p>
                    <p  className="sacTransactions_text">We reduce fraud between online buyers and 
                        sellers by providing a safe platform for them to 
                        transact without fear of being duped..</p>
                </div>
                <div className="sec5_innerdetails2">
                <div className="sec5_landing_sec2_sec1" style={{backgroundColor:"rgba(81, 181, 109, 0.2)"}}>
                        <p style={{fontWeight:"bold", color:"#19B500", fontSize:"22px", marginBottom:"0",}}>02</p>
                    </div>
                    <p className="sec5_headline">Corporate Banking</p>
                    <p  className="sacTransactions_text">We reduce fraud between online buyers and 
                        sellers by providing a safe platform for them to 
                        transact without fear of being duped..</p>
                </div>
                <div className="sec5_innerdetails2"></div>
                </div>
                <div className="spiral_sec">
                    <img src={spiral}/>
                    <div className="spiral_ready" >
                        <p className="sec5_whyshould">Ready to get started with Sanwo?</p>
                        <div className="button_secc5signup">
                        <Link className="sec1_signup" style={{marginLeft: "0", width:"280px"}}>Start An Express Transaction <AiOutlineArrowRight/></Link>
                        <Link className="sec1_signup" style={{marginLeft: "0", width:"280px",display:"flex", justifyContent:"center", alignItems:"center"}}>Signup for free <AiOutlineArrowRight/></Link>
                        </div>
                    </div>
                </div>
            </section>

    

            </div>
        </div>
    )
}

export default Landing;