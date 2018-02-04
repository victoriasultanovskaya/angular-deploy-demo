import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    navBarColor = environment.navBarBackgroundColor;

    constructor() {
    }

    ngOnInit() {
    }

}
