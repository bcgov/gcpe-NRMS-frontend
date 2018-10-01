import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup-complete',
    templateUrl: './signup-complete.component.html',
    styleUrls: ['./signup-complete.component.scss']
})
export class SignupCompleteComponent implements OnInit {
    ngOnInit() {}

    constructor(private router: Router) {}
}
