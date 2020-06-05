import { Component, OnInit } from '@angular/core';
import {NavbarserviceService} from '../../../service/navbarservice.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css'],
  providers: [NavbarserviceService ]
})
export class HeaderNavComponent implements OnInit {
  showNav = false;
  constructor(public nav: NavbarserviceService) { }

  ngOnInit(): void {
  }

}
