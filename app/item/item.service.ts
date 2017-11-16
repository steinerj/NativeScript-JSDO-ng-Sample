import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';

import { Item } from "./item";

//Utility functions for jsdo - needed for NativeScript shims 
//for jQ promises, localstorage and base64
import "progress-jsdo/src/progress.util";
import { progress } from "progress-jsdo";

@Injectable()
export class ItemService {
    private jsdo;
    private fill(){
        if(!this.jsdo){
            this.jsdo = new progress.data.JSDO({ name: 'Customer' });
            return this.jsdo.fill("CustNum < 100").then( () => { 
                console.log('data received');
                return Array.from(this.jsdo.getData());
            });
        } else {
            return Promise.resolve(this.jsdo.getData());
        }
    }

    getItem(id):Observable<Item>{
        return Observable.create((observer: Observer<Item>) => {
            this.fill().then(() => {
                observer.next(this.jsdo.find(function(jsrecord) {
                    return (jsrecord.data.CustNum == id);
                }).data as Item);
                observer.complete();
            });
        });
    }

    getItems():Observable<Item[]> {
        return Observable.fromPromise(this.fill());
    }
}