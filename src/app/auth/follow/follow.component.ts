import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-follow',
    templateUrl: './follow.component.html',
    styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {
    ngOnInit() {}

    constructor(private router: Router) {
    }

    next() {
        this.router.navigate(['/notifications']);
    }

}
