import { ExamService } from './../../Service/exam.service';

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/model/User';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  //Global Variables

  signupForm: FormGroup;
  showPassword = false;

  constructor(
    private formbuilder: FormBuilder,
    private examservice: ExamService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
          ),
        ],
      ],
      phone: ['', Validators.required],
    });
  }

  signUp() {
    if (
      this.signupForm.value.username == null ||
      this.signupForm.value.username == ''
    ) {
      // alert("Usename Required")
      this.snack.open('Username Required', 'ok', {
        duration: 2000,
      });
    } else {
      const formdata: User = this.signupForm.value;

      this.examservice.RegisterUser(formdata).subscribe(
        (data) => {
          console.log('Checking the Submited user', data);

          Swal.fire(data.firstname + ' We Registerd you', 'Success', 'success');
          this.resetForm();
        },
        (err) => {
          this.snack.open('Something Went wrong', 'ok', {
            duration: 2000,
          });

          console.log('error occured', err);
        }
      );
    }

    //  console.log(formdata)
  }

  resetForm() {
    this.signupForm.reset();
  }
}
