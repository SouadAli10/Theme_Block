import React from 'react'
const Demo = () => (
    <section id="contact" className="section">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="heading">
                        <h3><span>Get in touch</span></h3>
                    </div>
                    <div className="sub-heading">
                        <p>
                            Lorem ipsum dolor sit amet, mutat paulo simul per no, assum fastidii vituperata eam no.
          </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h4><i className="icon-envelope"></i><strong>Contact form</strong></h4>
                    <p>
                        Want to work with us or just want to say hello? Don't hesitate to get in touch!
      </p>

                    <div className="cform" id="contact-form">
                        <div id="sendmessage">
                            Your message has been sent. Thank you!
                      </div>
                        <form action="contact/contact.php" method="post" role="form" className="contactForm">
                            <div className="form-group">
                                <label for="name">Your Name</label>
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="maxlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validation"></div>
                            </div>
                            <div className="form-group">
                                <label for="email">Your Email</label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validation"></div>
                            </div>
                            <div className="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="maxlen:4" data-msg="Please enter at least 8 chars of subject" />
                                <div className="validation"></div>
                            </div>
                            <div className="form-group">
                                <label for="message">Message</label>
                                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us"></textarea>
                                <div className="validation"></div>
                            </div>

                            <button type="submit" className="btn btn-lg btn-theme pull-left">Send Message</button>
                        </form>

                    </div>

                    <div className="clear"></div>
                </div>
                <div className="col-md-6">
                    <h4>Find our location</h4>
                    <p>View from google map</p>

                    <div id="section-map" className="clearfix">
                        <div id="map"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

)
export default Demo;