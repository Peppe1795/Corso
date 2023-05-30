import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor() {}
async getData() {
  return ((await fetch('assets/db.json')).json())
}
}


