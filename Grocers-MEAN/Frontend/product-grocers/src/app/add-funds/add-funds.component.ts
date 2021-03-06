import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class AddFundsComponent implements OnInit {

  constructor(public usrService: UserService, public route: Router) { }

  userId = JSON.parse(localStorage.getItem('userId'))
  funds:Number;
  
  ngOnInit(): void {
    console.log(this.userId);
    this.getUser(this.userId);
  }

  getUser(id: any) {
    this.usrService.retrieveUserById(id).subscribe(result => {
      console.log(result);
      this.funds = result[0].funds;
    })
  }

  addFunds(userRef:any){
    if(userRef.funds < 0){
      window.alert("Negative funds cannot be added!");
    }
    else{
     
      this.usrService.addFunds({userId: this.userId, funds: userRef.funds}).subscribe((result: string) => {
        window.alert("Funds successfully Added!");
        console.log(result);
        this.route.navigate(['/cart']);
      });
    }
    
  }

}
