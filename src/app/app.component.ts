import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ThingFormGroup } from './thing/thing.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      things: this.formBuilder.array([])
    });
  }

  ngOnInit() {
  }

  load() {
    const things = [{
      id: 1,
      name: 'one'
    }, {
      id: 2,
      name: 'two'
    }, {
      id: 3,
      name: 'three'
    }];

    things.forEach(thing => {
      (this.formGroup.get('things') as FormArray).controls.push(
        ThingFormGroup(this.formBuilder)
      );
    });

    this.formGroup.patchValue({
      things
    });
  }

  toggleDisable() {
    this.formGroup.disabled
      ? this.formGroup.enable()
      : this.formGroup.disable();
  }

  reset() {
    this.formGroup.reset();
    (this.formGroup.get('things') as FormArray).clear();
  }
}
