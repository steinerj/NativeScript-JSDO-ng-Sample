//Utility functions for jsdo - needed for NativeScript shims 
//for jQ promises, localstorage and base64
import "progress-jsdo/src/progress.util";
import { progress } from "progress-jsdo";
import { Injectable } from "@angular/core";

@Injectable()
export class SessionService {
    public isLoggedIn:boolean = false;
    session: progress.data.JSDOSession;

    login(username, password) {
        //Scoping seems to be broken with the current JQueryPromiseShim
        var that = this;
        //Externalise into environment configuration
        return this.session = progress.data.getSession({
                "serviceURI": 'http://oemobiledemo.progress.com/OEMobileDemoServicesForm',
                "catalogURI": 'http://oemobiledemo.progress.com/OEMobileDemoServicesForm/static/CustomerService.json',
                "authenticationModel": 'form', //progress.data.Session.AUTH_TYPE_FORM,
                "authProviderAuthenticationModel":'form',// progress.data.Session.AUTH_TYPE_FORM,
                "authenticationURI": 'http://oemobiledemo.progress.com/OEMobileDemoServicesForm',
                "username": username, //'formuser'
                "password": password, //'formpassword'
                "name": 'Customer'
        }).done( (jsdoSession, result) => {
            that.isLoggedIn = true;
            console.log("Success getSession()");
        }).fail( function( result, info ) {
            that.isLoggedIn = false;
            console.log("getSession failed: " + JSON.stringify(result) + ', ' + JSON.stringify(info));            
            return null;
        });
    }
    logout() {
        //Logout is deprecated but no suitable way to access new AuthenticationProvider yet...
        this.session['logout']();
        this.isLoggedIn = false;        
    }
}