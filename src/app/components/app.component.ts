import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Get the md-sidenav from the html to perform actions on it
   * @param  {MdSidenav} 'sidenav' The sidenav html element from template
   */
  @ViewChild('sidenav') sidenav: MdSidenav;

  /**
   * Boolean to check if the screen is small enough to be considered "narrow"
   * @type {boolean}
   */
  private isNarrow:boolean;
  /**
   * Threshold of narrowness. Tweak if necessary
   * @type {number}
   */
  private narrowThreshold:number = 750;

  /**
  * @router: Used to navigate to the stats and shipments pages
  */
  constructor(private router: Router) { }

  /**
   * Function that closes the html md-sidenav
   */
  closeSidenav():void {
    this.sidenav.close();
  }

  /**
   * Grab the window resize event, and determine if the screen is
   * narrow enough to warrent changing page layout
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateSidenav();
  }

  /**
   * determine page layout onInit
   */
  ngOnInit(): void {
    this.updateSidenav();
  }

  /**
   * Check the screen width, and update the sidenav if necessary
   */
  updateSidenav(): void {
    this.isNarrow = (window.innerWidth < this.narrowThreshold);
    if(this.isNarrow){
      this.sidenav.close();
      this.sidenav.mode="over";
    }
    else {
      this.sidenav.open();
      this.sidenav.mode = "side";
    }
  }

  /**
   * navigate router to the home page
   */
  goHome(): void {
    let link = ['/home'];
    this.router.navigate(link);
  }

  /**
  * Navigate the router to page2
  */
  goToPage2(): void {
    // let link = ['/page2'];
    // this.router.navigate(link);
  }

  /**
   * Navigate router to page3
   */
  goToPage3(): void {
    // let link = ['/page3'];
    // this.router.navigate(link);
  }
}
