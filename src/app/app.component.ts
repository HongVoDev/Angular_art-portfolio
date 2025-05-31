import { Component, HostBinding  } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import * as AOS from 'aos';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { gsap } from "gsap";
import { MouseEvent, FunctionComponent, useEffect, useRef, useState } from 'react';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'borujuSpaceWebsite';

  ngOnInit() {
    AOS.init();
  }
}
