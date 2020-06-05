import { Component, OnInit } from '@angular/core';
import {NavbarserviceService} from '../service/navbarservice.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {
  showNav = false;
  constructor() { }

  ngOnInit(): void {
  }

}
