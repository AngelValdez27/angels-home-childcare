import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {
  public variable = new BehaviorSubject<string>('');

  constructor() { }

}
