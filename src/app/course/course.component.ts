import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    course = [
      {'id':1,'name':'Learn Angular','Description':'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.','image':'../../assets/angular.jpg'},
      {'id':2,'name':'Learn Typescript','Description':'TypeScript is a programming language developed by Microsoft. It is a strict syntactical superset of JavaScript ','image':'../../assets/typescript.jpg'},
      {'id':3,'name':'Learn Nodejs','Description':'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine.','image':'../../assets/nodejs.jpg'},
      {'id':4,'name':'Learn Reactjs','Description':'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. ',
      'image':'../../assets/reactjs.jpg'}
    ]
}
