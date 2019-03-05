import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SignUpForm extends Component {

    render() {
        return (
            <div class="container">
            <div class="row">
            <div class="bg-img">
            <div class="create_logo">
            <h2>LOGO</h2></div>
            <div class="account">
            <h1 class="create_account">Create an Account</h1>
            </div>
            <div class="login-show showlog">
            <form onSubmit={this.handleSubmit} className="FormFields">
    <div class="form-group first">
    <input type="text" class="form-control userform" id="firstname" placeholder="First Name" name="firstname" />
    </div>
    <div class="form-group last">
		
		<input type="text" class="form-control userform" id="lastname" placeholder="Last Name" name="lastname" />
    </div>
    <div class="clearfix"></div>
	<div class="form-group">
		<i class="fa fa-user"></i>
		<input type="email" class="form-control userform" id="username" placeholder="User name" name="username" />
    </div>
    <div class="form-group">
		<i class="fa fa-envelope"></i>
		<input type="email" class="form-control userform" id="email" placeholder="Email" name="Email" />
    </div>
    
    <div class="form-group">
     <i class="fa fa-lock"></i>
      <input type="password" class="form-control userform" id="pwd" placeholder="Enter password" name="pwd" />
    </div>
    <div class="form-group">
     <i class="fa fa-lock"></i>
      <input type="password" class="form-control userform" id="pwd" placeholder="Confirm password" name="confirmpwd" />
    </div>
    <div class="signbtn upbtn">
    <button type="submit" class="subbtn">SIGN UP</button>
</div>
  </form>
    </div>
    <div class="clearfix"></div>
    <div class="already_account">
    <p>Already have an account? <Link to="/">SIGN IN</Link></p>
</div>
</div>
            </div>
            </div>
        );
    }
}

export default SignUpForm;