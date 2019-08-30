import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export function ThingFormGroup(formBuilder: FormBuilder){
  return formBuilder.group({
    id:[],
    name:[]
  });
}

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThingComponent {
  @Output() remove = new EventEmitter<FormGroup>();
  @Input() formGroup: FormGroup;

  constructor() {}
}
