import { Component, OnInit } from '@angular/core';
import {NavbarserviceService} from '../../service/navbarservice.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor(public nav: NavbarserviceService) { }
  ngOnInit(): void {
  }

}
