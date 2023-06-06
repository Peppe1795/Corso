import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    title = 'two type form';

    @ViewChild('formContainer', { static: true }) formContainer!: NgForm;

    heroForm: any = {
        name: '',
        alterEgo: '',
        power: '',
        enemy: '',
        planet: '',
        weakness: '',
    };
    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        /*this.formContainer = this.fb.group({heroForm: this.fb.group({
    enemy: this.fb.control('', [Validators.maxLength(10)]),
    planet: this.fb.control(null, [Validators.minLength(5)])
})})*/

        this.formContainer.statusChanges?.subscribe((status) => {
            console.log(this.formContainer);
            console.log(`Stato from: ${status}`);
        });
    }
    submitForm() {
        console.log(`Form inviato: ${this.formContainer}`);
        this.heroForm.name = this.formContainer.value.heroInfo.name;
        this.heroForm.alterEgo = this.formContainer.value.heroInfo.alterEgo;
        this.heroForm.power = this.formContainer.value.heroInfo.power;
        this.heroForm.enemy = this.formContainer.value.heroInfo.enemy;
        this.heroForm.planet = this.formContainer.value.heroInfo.planet;
        this.heroForm.weakness = this.formContainer.value.heroInfo.weakness;
        console.log(this.heroForm);
        this.formContainer.reset();
    }
}
