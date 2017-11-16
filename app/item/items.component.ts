import { SessionService } from './../shared/session.service';
import { Component, OnInit, OnDestroy } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import "progress-jsdo/src/progress.util";
import { progress } from "progress-jsdo";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit, OnDestroy {
    items:Item[];

   constructor(private itemService: ItemService, private sessionService: SessionService) { }
    
    ngOnInit(): void {
        this.itemService.getItems().subscribe(res => {
            this.items = res;
        });        
    }
    ngOnDestroy(): void {
        this.sessionService.logout();
    }
}