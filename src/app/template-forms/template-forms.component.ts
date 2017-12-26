import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/_@angular_forms@5.1.2@@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})

// 处理复杂逻辑, 建议使用响应式表单
export class TemplateFormsComponent implements OnInit {

  usernameValid = true;
  usernameUntouched = true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any, valid: boolean) {
    console.log(value);
    console.log('valid is ' + valid);
  }

  onUsernameInput(form: NgForm) {
    if (form) {
      this.usernameValid = form.form.get('username').valid;
      this.usernameUntouched = form.form.get('username').untouched;
    }
  }
}
