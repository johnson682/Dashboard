import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  id: number = 0;
  editMode = false;
  userDataForm!: FormGroup;

  constructor(private route: ActivatedRoute,
              private controlService:ControlService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.controlService.updateUserDatas(this.id, this.userDataForm.value);
    } else {
      this.controlService.addNewUserData(this.userDataForm.value);
    }
    this.router.navigate(['Dashboard']);
  }


  onClose() {
    this.router.navigate(['dashboard']);
  }

  private initForm() {
    let uname = '';
    let fName ='';
    let lName ='';
    let email = '';
    let date = '';
    let image = '';
    console.log(this.id)

    if (this.editMode) {
      const userData = this.controlService.getUserData(this.id);
      console.log(userData);
      uname = userData.name;
      fName = userData.fname;
      lName = userData.lname;
      email = userData.email;
      date = userData.date;
      image = userData.imagePath;
    }

    this.userDataForm = new FormGroup({
      'name': new FormControl(uname, Validators.required),
      'fname': new FormControl(fName, Validators.required),
      'lname': new FormControl(lName, Validators.required),
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'date': new FormControl(date, Validators.required),
      'imagePath': new FormControl(image, Validators.required),
    });
  }

}
