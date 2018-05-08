import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css'],
})
export class QuienSoyComponent implements OnInit {

  constructor() { }
  edad = (new Date()).getFullYear() - 1991;
  
  
  
  ngOnInit() {
  }

}
