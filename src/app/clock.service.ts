import { Injectable } from '@angular/core';
// this class can be injected into the constructor of a component

@Injectable({
  providedIn: 'root' // instantiated once at root, so any component can see the value at any time
})
export class ClockService {

  tick = 0;

  constructor() {
    setInterval(() => this.tick++, 1000);

  }

}
