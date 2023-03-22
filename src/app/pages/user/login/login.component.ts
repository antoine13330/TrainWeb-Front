import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from "../../../_services/auth.service";
import {Exo} from "../../../_models/Exos/Exo";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'tw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public logoUrl : string = '/assets/img/logo/trainweb.png';
  public wave : string = '/assets/img/logo/wave.svg';
  username = '';
  password = '';
  email = '';
  validateForm!: FormGroup;
  registerForm!: FormGroup;

  constructor(
    private route : ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log(this.validateForm.value)
      this.authService.login(this.validateForm.value).subscribe({
        next : ( v ) => {
          this._router.navigate(['accueil'])
          localStorage.setItem('username', this.validateForm.value.email);
        },
        error : (err : HttpErrorResponse ) => {

        },
        complete : () => {

        }
      });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
