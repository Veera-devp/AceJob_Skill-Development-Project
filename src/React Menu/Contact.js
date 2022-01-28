import React from "react";
import img1 from '../React Images/7.jpg'

const Contact = () =>{
  return(
    <>
    <section>
    <div class="container">
			<div class="row">
				<div class="col-sm text-center">
				  <h1 class="div-heading display-4">Contact US</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<form>
					  <div class="form-group">
            <h6>Enter Your Name</h6>
						  <input type="name" class="form-control" id="exampleInputName" placeholder="Your Full Name"/>
					  </div>
            <div class="form-group">
              <h6>Enter Your Mail ID</h6>
						  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email Address"/>
					  </div>
					  <div class="form-group">
            <h6>Choose Your type</h6>
              <select class="form-control" id="exampleFormControlSelect1" placeholder="Select Services">
              <option>Select an option</option>
                <option>Student</option>
                <option>Educator</option>
                <option>Interner</option>
              </select>
					  </div>
            <div class="form-group">
              <h6>Type your Quires</h6>
              <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
					  <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
					</form>
			  </div>
			  <div  class="col-md-6">
         
          
          <div class="text-center">
            <img class="rounded" alt="Responsive image" src={img1} height={400} width={700} alt="Contact"/>
          </div>
         
	  		</div>
        
			</div>
		</div>
    </section>
    </>
    )
  };
export default Contact;

