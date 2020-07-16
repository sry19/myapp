import React, { Component } from 'react';
import './ContactMe.css';
import { Link, animateScroll as scroll } from "react-scroll";

class Contact extends Component {

   constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: "",
        color: 'white'
      };
      this.onHover = this.onHover.bind(this);
      this.noHover = this.noHover.bind(this);
      this.scrollToTop=this.scrollToTop.bind(this);
    }

    scrollToTop = () => {
      scroll.scrollToTop();
  };
  
  onHover() {
      this.setState({color: 'orange'});
  }
  
  noHover() {
      this.setState({color: 'white'});
  }

   submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({ status: "SUCCESS" });
        } else {
          this.setState({ status: "ERROR" });
        }
      };
      xhr.send(data);
    }

  render() {
   const { status } = this.state;
    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="https://formspree.io/xeqrrzzz" method="POST" onSubmit={this.submitForm}>
                  
						<label htmlFor="contactEmail">Email <span className="required">*</span></label>
						<input type="email" size="35" id="contactEmail" name="email"/>
                  
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols="50" rows="15" id="contactMessage" name="message"></textarea>
                  
                     {status === "SUCCESS" ? <p>Thanks!</p> : <button className="submit">Submit</button>}
                     {status === "ERROR" && <p>Ooops! There was an error.</p>}
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
