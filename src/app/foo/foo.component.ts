import { Component, OnInit } from '@angular/core';
import { ClockService } from '../clock.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  constructor(public cs: ClockService) { }
  // private cs means you can't use it in the component template

  ngOnInit(): void {
    console.log(this.cs.tick);
  }

}
