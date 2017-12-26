import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { equalValidator, mobileValidator, mobileAsyncValidator } from '../validator/validator';

@Component({
  selector: 'app-react-regist',
  templateUrl: './react-regist.component.html',
  styleUrls: ['./react-regist.component.css']
})
export class ReactRegistComponent implements OnInit {
  formModel: FormGroup;
  constructor(fb: FormBuilder) {
    // this.formModel = new FormGroup({
    //   username: new FormControl(),
    //   mobile: new FormControl(),
    //   passwordGroup: new FormGroup({
    //     password: new FormControl(),
    //     pconfirm: new FormControl()
    //   }),
    // });
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, {validator: equalValidator})
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    // let isValid: boolean, errors: any;
    // isValid = this.formModel.get('username').valid;
    // console.log('username ' + isValid);
    // errors = this.formModel.get('username').errors;
    // console.log('username has error: ' + JSON.stringify(errors));
    if (this.formModel.valid) {
      console.log(this.formModel);
    }
  }
}
