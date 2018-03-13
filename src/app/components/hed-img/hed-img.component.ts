import { Component, OnInit } from '@angular/core';
// import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-hed-img',
  templateUrl: './hed-img.component.html',
  styleUrls: ['../allcomp.css'],
  // providers: [NgbCarouselConfig]
})
export class HedImgComponent  {

    public myInterval = 3000;
    public activeSlideIndex = 0;
    public noWrapSlides = false;

    slides = [
        {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(18).jpg' , 'text': 'sadasfdsgfa'},
        {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg' , 'text': 'sadasfdsgfa'},
        {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg' , 'text': 'sadasfdsgfa'},
        {'image': 'https://img4.goodfon.com/wallpaper/big/2/81/garni-armenia-hayastan-garni-armenia.jpg' , 'text': 'sgjhkgfa'},
    ];



}
