import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from "../../../_services/auth.service";

@Component({
  selector: 'tw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public pageMode : 'in' | 'out' = 'in';
  public logoUrl : string = '/assets/img/logo/trainweb.png';
  public wave : string = '/assets/img/logo/wave.svg';
  username = '';
  password = '';
  email = '';



  constructor(
    private route : ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService,
    private Router: Router
  ) {
    this.route.params.subscribe( pr => {
      this.pageMode = pr['mode'];
    })
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

    this.registerForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      username: [null, [Validators.required]]
    });
  }

  validateForm!: FormGroup;
  registerForm!: FormGroup;
  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.registerForm.controls['checkPassword'].updateValueAndValidity());
  }
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registerForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };






  submitForm(): void {
    if (this.validateForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(result=>{
        this.Router.navigate(['sign/in'])
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  submitRegisterForm(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(result=>{
        this.Router.navigate(['sign/in'])})
    } else {
      Object.values(this.registerForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
