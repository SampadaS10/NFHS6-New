import { Component, ElementRef, HostListener } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {
    // private sidebar!: HTMLElement;
    // private sidebarScrollPosition: number = 0;
    constructor(public layoutService: LayoutService, public el: ElementRef) { }

    // ngOnInit() {
    //     this.sidebar = this.el.nativeElement.querySelector('.layout-menu');
    //   }
    
    //   @HostListener('window:scroll')
    //   saveSidebarScrollPosition() {
    //     this.sidebarScrollPosition = this.sidebar.scrollTop;
    //   }
    
    //   ngAfterViewInit() {
    //     this.sidebar.scrollTop = this.sidebarScrollPosition;
    //   }
}

