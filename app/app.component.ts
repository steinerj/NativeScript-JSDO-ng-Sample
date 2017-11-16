import { Component } from "@angular/core";
import { progress } from 'progress-jsdo';
import "progress-jsdo/src/progress.util";


@Component({
  selector: "ns-app",
  template: "<page-router-outlet></page-router-outlet>"
})

export class AppComponent {
  

  ngOnInit() {
    //Trying to suppress an error related to the NativeScript livesync lifecycle and remnant JSDO state
    
    //console.log('SESSIONS', JSON.stringify(progress.data['ServicesManager']._jsdosessions));
    //progress.data['AuthenticationProvider'].logout();
    //progress.data['ServicesManager']._jsdosessions.forEach(session => session.invalidate());
  }
}