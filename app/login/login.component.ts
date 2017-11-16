import { SessionService } from './../shared/session.service';
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "login",
  moduleId: module.id,
  templateUrl: "./login.component.html"
})

export class LoginComponent implements OnInit {
  isLoggingIn = true;
  username: string;
  password: string;
  
  @ViewChild("container") container: ElementRef;
  constructor(private router: Router, private sessionService:SessionService) {}

  ngOnInit() { }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      //this.logout();
    }
    this.isLoggingIn = !this.isLoggingIn;
  }
 
  login() {

    this.sessionService.login(this.username, this.password).then(() => {
      this.router.navigate(["/items"]);    
    });
  }
}