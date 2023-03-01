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
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  validateForm!: FormGroup;
}
