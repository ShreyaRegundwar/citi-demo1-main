import { BreakpointObserver , Breakpoints} from '@angular/cdk/layout';
import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})

export class DefaultComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) {}

  sideBarMode: 'side' | 'over' = 'side';
  
  sideBarOpen = true;


  ngOnInit() {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((result) => {
      this.sideBarMode = result.matches ? 'over' : 'side';
    });
  }
  


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


}
