import React from 'react'
import './footer.css'
const Footer = () =>{
    return(
        <>

<footer class="w-100 py-4 flex-shrink-0">
    <div class="container py-4">
        <div class="row gy-4 gx-5">
            <div class="col-lg-4 col-md-6">
                <h5 class="h1 text-white">AceJob</h5>
                <p class="small text-muted">Copyright notices are not required by law. However, having one helps protect your creative content so you should have one even though not required.</p>
                <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="#">AceJob.com</a></p>
            </div>
            <div class="col-lg-2 col-md-6">
                <h5 class="text-white mb-3">Quick links</h5>
                <ul class="list-unstyled text-muted">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-6">
                <h5 class="text-white mb-3">FAQ's</h5>
                <ul class="list-unstyled text-muted">
                    <li><a href="#">Contact manager</a></li>
                    <li><a href="#">KL University</a></li>
                    <li><a href="#">Vaddeshwaram</a></li>
                    <li><a href="#">Guntur</a></li>
                    <li><a href="#">Andhra Pradesh</a></li>
                </ul>
            </div>
            <div class="col-lg-4 col-md-6">
                <h5 class="text-white mb-3">Newsletter</h5>
                <p class="small text-muted">Further any help or any suggesstion to give you can dropdown your name and your Quires</p>
                <form action="#">
                    <div class="input-group mb-3">
                        <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
</footer>
        </>
    );
};
export default Footer;