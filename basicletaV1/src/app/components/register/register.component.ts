import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


function symbolValidator(control) {
  // console.log(control);

  if(control.hasError('required')) return null;
  if (control.hasError('minlength')) return null;

  if (control.value.indexOf('@') > -1) {
    return null
  } else {
    return { symbol: true }
  }
}

function passwordMatchValidator(form) {
  const password = form.get('password');
  const confirmpassword = form.get('confirmPassword');

  if (password.value !== confirmpassword.value) {
    confirmpassword.setErrors({ passwordMatch: true });
  } else {
    confirmpassword.setErrors(null)
  }

  return null;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
      confirmPassword: ''
    }, {
      validators: passwordMatchValidator
    });
  }

  register() {
    console.log(this.registerForm.value);
    
  }

}
