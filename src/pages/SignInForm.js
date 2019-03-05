import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SignInForm extends Component {

  render() {
      return (
         <section class="sigin_form" >
          <div class="container">
          <div class="col-lg-12 sign">
          <div class="row">
          <div class="col-lg-6">	
          <div class="signform">
          <h3>LOGO</h3>
          <div class="login-show">
          <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="form-group user">
          <i class="fa fa-user"></i>
          <input type="email" id="email" className="form-control userform" placeholder="Enter your Email " name="email"  />
          </div>
          <div className="form-group user">
          <i class="fa fa-lock"></i>
          <input type="password" id="password" className="form-control userform" placeholder="Enter your password " name="password"  />
          </div>
          <div class="checkbox keep">
          <label><input type="checkbox" name="remember" />Keep me logged in</label></div>
<div class="forget">
    <p>Forget password</p>
  </div>
<div class="signbtn">
  <button type="submit" class="subbtn">SIGN IN</button>
</div>
          </form>
          </div>
          <div class="line">
</div>
<p class="or">or</p>
<div class="line1">
</div>
<div class="social">
<div class="goog">	
<img alt="google" src={require('../images/gp.png')} />
</div>
<div class="fb">
<img alt="facebook" src={require('../images/fb.png')} />
</div>
</div>
<div class="clearfix"></div>
<div class="create"><Link to="/sign-up">Create an account</Link></div>         
</div>
          </div>
          
<div class="col-lg-6 aboutpage">
<div class="about">
<h2> About</h2>	
<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>	
</div>
</div>
          </div>
          </div>
          </div>
          </section>
          
          


  
   

    );
  }
}

export default SignInForm;