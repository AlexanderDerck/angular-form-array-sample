import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ThingFormGroup } from '../thing/thing.component';

@Component({
  selector: 'app-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThingsComponent implements OnDestroy {
  private _formArray: FormArray;
  @Input()
  set formArray(formArray: FormArray) {
    this._formArray = formArray;

    if (this.subscriptions.formArrayChanges) {
      this.subscriptions.formArrayChanges.unsubscribe();
    }

    this.subscriptions.formArrayChanges = this.formArray.valueChanges.subscribe(
      result => {
        this.changeDetectorRef.detectChanges();
      }
    );
  }
  get formArray() {
    return this._formArray;
  }

  private subscriptions: { [key: string]: Subscription } = {};

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private formBuilder: FormBuilder
  ) { }

  ngOnDestroy() {
    Object.keys(this.subscriptions).forEach(sk =>
      this.subscriptions[sk].unsubscribe()
    );
  }

  add() {
    this.formArray.controls.push(ThingFormGroup(this.formBuilder));
  }

  remove(formGroup: FormGroup) {
    this.formArray.removeAt(this.formArray.controls.indexOf(formGroup));
  }
}
