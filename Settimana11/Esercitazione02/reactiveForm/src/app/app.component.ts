import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'reactiveForm';
  formContainer!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.formContainer = this.fb.group({
      name: [],
      alterEgo: [],
      powers: this.fb.array([]),
      enemy: [],
      planet: [],
      weakness: this.fb.array([]),
    });
  }

  getErrorControl(name: string, error: string) {
    return this.formContainer.get(name)?.errors![error];
  }

  getFormControl(name: string) {
    return this.formContainer.get(name) as FormControl;
  }

  addPower() {
    const controllo = new FormControl(null);
    (this.formContainer.get('powers') as FormArray).push(controllo);
  }

  getFormArray(name: string) {
    return (this.formContainer.get(name) as FormArray).controls
  }

  addWeakness() {
    const controllo2 = new FormControl(null);
    (this.formContainer.get('weakness') as FormArray).push(controllo2)
  }

  sumbitForm() {
    console.log(this.formContainer);
    console.log('Form inviato correttamente');
    this.formContainer.reset();
  }
}
