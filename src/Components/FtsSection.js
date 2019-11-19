import React from 'react';
import '../Styles/FtsSection.css';

class FtsSection extends React.Component {

	// componentWillMount() {
	// 	const s = document.createElement('script');
	// 	s.type = 'text/javascript';
	// 	s.async = true;
	// 	s.innerHTML = ` $().ready(function(){$('.slick-carousel').slick({arrows: true,	centerPadding: '0px',	dots: false,slidesToShow: 1,		infinite: false		});		});`;
	// 	document.body.appendChild(s);
	//   }

	  
    render() {

        return (


<div className="wrapper">
			<h2 className="co-orange-dk">EVENTS</h2>
			<div className="wrapper-inner box-shadow mb-5">
				<div className="">
					<h2>Name of the event</h2>
					<div className="section-title co-grey">Organized by Sport Club</div>
				</div>
				<div className="slick-carousel">

					<div><div className="slide-content"><img className="img-fluid" src='..\Assets\Images\banner-1.png' alt="banner-1"/></div></div>
					{/* <div><div className="slide-content"><img className="img-fluid" src="..\Assets\Images\banner-2.png" alt="banner-2"/></div></div>
					<div><div className="slide-content"><img className="img-fluid" src="..\Assets\Images\banner-3.png" alt="banner-3"/></div></div>
					<div><div className="slide-content"><img className="img-fluid" src="..\Assets\Images\banner-4.png" alt="banner-4"/></div></div> */}
				</div>
				<div className="">
					<h3 className="co-orange">Tell your friends about us in social media!</h3>
					<div className="">
						<ul className="social-grp clear co-grey">
							<li><span>26784 registrations</span></li>
							<li><span>26784 views</span></li>
							<li><span>26784 shares</span></li>
							<li className="social-icon-grp"><a href="#"><img className="img-fluid" src="..\Assets\Images\multi-social.png" alt="" /></a></li>
						</ul>
						<div className="social-invite clear">
							<div className="float-lt sec-label co-orange">Invite your friends!</div>
							<ul className="float-lt ">
								<li><a className="social-icon wh" href="#"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
								<li><a className="social-icon fb" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
								<li><a className="social-icon mail-g" href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li>
								<li><a className="social-icon mail-r" href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li>
							</ul>
						</div>
						<div className="">
							<div className="section-title co-grey">Name of the complex</div>
							<div className="dir-loc"><a href=""><img src="..\Assets\Images\direction.png" alt=""/>Get Directions</a></div>
							<div className="co-grey address txt-l">Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</div>
						</div>
						<div className="event-sch clear">
							
							<ul>
								<li><span>City:</span>Nagpur</li>
								<li><span>Sport:</span>Football</li>
							</ul>
							<ul>
								<li><span>Start date:</span>17.02.2019</li>
								<li><span>Start time:</span>18:00 pm</li>
							</ul>
							<ul>
								<li><span>End date:</span>17.02.2019</li>
								<li><span>End time:</span>21:00 pm</li>
							</ul>
						</div>
						<div className="">
							<div className="section-title mb-5">Pricing Details</div>
							<div className="pricing-detail co-grey">
								<div className="pricing-detail-item clear">
									<div className="pricing-detail-col">
										<h5 className="txt-xl">Category name</h5>
										<p className="txt-l">There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour.</p>
									</div>
									<div className="pricing-detail-col">
										<div className="txt-xl text-center">Price</div>
									</div>
									<div className="pricing-detail-col float-right">
										<a href="#" className="org-btn">Register</a>
									</div>
								</div>
								<div className="pricing-detail-item clear">
									<div className="pricing-detail-col">
										<h5 className="txt-xl">Category name</h5>
										<p className="txt-l">There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour.</p>
									</div>
									<div className="pricing-detail-col">
										<div className="txt-xl text-center">Price</div>
									</div>
									<div className="pricing-detail-col float-right">
										<a href="#" className="org-btn">Register</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="box-shadow tab-box">
				<div className="tabset">
					<input type="radio" name="tabset" id="tab1" aria-controls="event-details" checked />
					<label for="tab1">Event details</label>
					<input type="radio" name="tabset" id="tab2" aria-controls="previous-event"/>
					<label for="tab2">Previous event</label>
					<input type="radio" name="tabset" id="tab3" aria-controls="contact-us"/>
					<label for="tab3">Contact us</label>
					<input type="radio" name="tabset" id="tab4" aria-controls="terms" />
					<label for="tab4">Terms and conditions</label>
					<div className="tab-panels">
						<section id="event-details" className="tab-panel">
							<h2>Event Details</h2>
							<p>There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour.There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour. There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour.</p>
							<p>There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour.There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour. There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour.</p>
						</section>
						<section id="previous-event" className="tab-panel">
							<h2>Previous Event</h2>
							<p>There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour.There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour. There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour.</p>
							<p>There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour.There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour. There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour.</p>
						</section>
						<section id="contact-us" className="tab-panel">
							<h2>Contact Us</h2>
							<p>There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour.There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour. There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour.</p>
							<p>There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour.There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour. There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour.</p>
						</section>
						<section id="terms" className="tab-panel">
							<h2>Terms and Conditions</h2>
							<p>There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour.There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour. There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour.</p>
							<p>There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour.There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour. There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour.</p>
						</section>
					</div>
					
				</div>
			</div>
			
			<footer id="footer">
			<div class="foo-tri"><img src="..\Assets\Images\footer-layer.png" alt=""/></div>

			<div class="foo-wrap clear">
				<div class="wrapper">
				<div class="foo-1">
					<div>
						<a href="#"><img class="img-fluid" src="..\Assets\Images\fts8.png" alt="logo"/></a>
						<p>There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
					</div>
					
				</div>
				<div class="foo">
					<ul>
						<li><a href="#">About Us</a></li>
						<li><a href="#">Partner With Us</a></li>
						<li><a href="#">Reward Points</a></li>
						<li><a href="#">Contact Us</a></li>
						<li><a href="#">Terms and Conditions</a></li>
						<li><a href="#">Policy</a></li>
					</ul>
					
				</div>
				<div class="foo">
					<ul class="social-foo">
						<li class="cont"><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i>ftssupport@gmail.com</a></li>
						<li class="cont"><a href="#"><i class="fa fa-phone" aria-hidden="true"></i>895233123</a></li>
						<li>
							<ul class="social-link clear">
								<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
							</ul>
						</li>
						<li>
							<div class="subscribe"><input class="" type="email" placeholder="Your Email"/><button type="submit">Subscribe Now</button></div>
						</li>
					</ul>
				</div>
			</div>

			</div>
			<div class="foo-bottom">© 2018 ftsgroup All rights reserved</div>
		</footer>
		</div>


      );
    }
}
export default FtsSection;



