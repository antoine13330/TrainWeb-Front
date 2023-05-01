import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { User } from 'src/app/_models/User/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'tw-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.sass']
})
export class ProfilComponent implements OnInit {

  public user!: User;

  constructor(private userService: UserService) {}


  ngOnInit(): void {
    this.userService.getUserInfo().pipe(
      tap((usera: User) => {
        this.user = usera;
        console.log(this.user);
      })
    )
  }

}
