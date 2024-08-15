import React from 'react'
import "./footer.css"
import Swal from 'sweetalert2';
const Footer = () => {
    const[email, setEmail] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Thank you!',
            text:  `${email}, We will get back to you soon.`,
        });
        setEmail("");
    };

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

  return (
    <>
    <div className='footbody'>
        <footer className="new_footer_area bg_color">
            <div className="new_footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: "visible",animationDelay: "0.2s", animation: "fadeInLeft"}}>
                                <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                <p>You can contact us through mails</p>
                                      <form className="f_subscribe_two mailchimp"  _lpchecked="1" >
                                          <input type="email" name="email" className="form-control memail" placeholder="Email" value={email} onChange={onChangeEmail} />
                                          <button className="btn btn_get btn_get_two" type="submit" onClick={onSubmit} >Send</button>
                                    <p className="mchimp-errmessage" style={{display: "none"}}></p>
                                    <p className="mchimp-sucmessage" style= {{display: "none"}}></p>
                                </form>
                            </div>
                        </div>
                      
                        
                        <div className="col-lg-6 col-md-6">
                            <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{visibility: "visible", animationDelay:" 0.8s", animation: "fadeInLeft"}}>
                                <h3 className="f-title f_600 t_color f_size_18">Social Media</h3>
                                <div className="f_social_icon">
                                    <a href="https://www.facebook.com/aman.sah.397948"  className="fab fa-facebook sociallink" > </a>
                                    <a href="https://twitter.com/aman_sah1" className="fab fa-twitter sociallink"> </a>
                                          <a href="https://www.linkedin.com/in/amanpoddar10/" className="fab fa-linkedin sociallink"> </a>
                                          <a href="https://www.instagram.com/jr_cypher_ak/" className="fab fa-instagram sociallink"> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-6">
                            <p className="mb-0 f_400" style={{padding:0}}>©2024 All rights reserved.</p>
                        </div>
                        <div className="col-lg-6 col-sm-6 text-right">
                                  <p>Made with <i className="fa-solid fa-heart heart"> </i> by <a href="https://www.linkedin.com/in/amanpoddar10/" rel="noreferrer" target="_blank" style={{padding:"3px"}}> Aman Poddar</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    </>
  )
}

export default Footer