import { Component, OnInit } from '@angular/core';
import { UserAddService } from './../services/user-add.service';
import { user } from '../data-types/data-type';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private user:UserAddService) { }

  ngOnInit(): void {
  }
  /* add datatype as parameter */
  submit(data: user) {
    console.log(data);
    /* data  is being passed*/
    this.user.addUser(data).subscribe((result) => {
 /* if result 200 show message */
      if(result){
        console.log("done")
      }
    });
}
}
