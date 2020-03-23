import React, { Component } from "react";
import GoogleLogin from 'react-google-login';

import {Redirect} from 'react-router-dom';
export default class Login extends Component {


    render() {


       
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/home'}/>)
          }
     
      if(sessionStorage.getItem('userData')){
        return (<Redirect to={'/signup'}/>)
      }

       
          const responseGoogle = (response) => {
           
          }
   

        return (
            <form>
                        <img src={require('../img/ENSA-SAFI-300x141.png')} class="logo"/>

               
                <div className="form-group">
                    <label>Code Massar</label>
                    <input type="text" name="massar" className="form-control" placeholder="Enter le code massar" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" onChange={this.onChange} placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Enregistrer</label>
                    </div>
                </div>

                <input type="submit" className="btn btn-primary btn-block" value="Valider" onClick={this.login}/>
                <p className="forgot-password text-right">
                Le mot de passe <a href="#">oublié?</a>
                </p>
              
        <div className="App">
            <p>Login par Google</p>
       
        
    <GoogleLogin
                clientId="1095905497449-q99q5hbq04onaaf6r3eu6tt2vciphee0.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
    </div>

            </form>
        );
    }
}
