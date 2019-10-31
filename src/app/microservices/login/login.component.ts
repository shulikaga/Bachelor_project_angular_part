import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor( private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isInvalid(field: string){
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  login() : void {
   if (this.isInvalid(this.username) && this.isInvalid(this.password)){
    this.router.navigate(["/"]);
   }
  }

}
