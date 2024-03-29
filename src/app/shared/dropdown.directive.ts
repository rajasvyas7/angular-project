import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective { 
  // openFlag: boolean = true;
  // If we bind openFlag var like following (original solution), then we will not need the if else condition in the toggleDropdown function & also won't need the arguments used in the constructor
  @HostBinding('class.open') openFlag: boolean = false;

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('document:click', ['$event']) toggleDropdown(eventData: Event) {
    // if (this.openFlag) {
    //   this.renderer.addClass(this.elemRef.nativeElement, 'open');
    // }
    // else {
    //   this.renderer.removeClass(this.elemRef.nativeElement, 'open');
    // }

    // this.openFlag = !this.openFlag;

    /**
     * above line works only if we click on the drop down, to close it if we click anywhere on the dropdown use following 
     * (also changing @Hostlistner('click') to @HostListner('document:click', ['$event']))
     */
    this.openFlag = this.elemRef.nativeElement.contains(eventData.target) ? !this.openFlag : false;
  }

}
