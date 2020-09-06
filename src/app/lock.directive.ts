import {Directive, ElementRef, HostBinding, Renderer2} from '@angular/core';

@Directive({
  selector: '[appLock]',
})
export class LockDirective {
  condition = true;
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  )
    {
      const checkbox = this.renderer.createElement('input');
      this.renderer.setAttribute(checkbox, 'type', 'checkbox');
      this.renderer.listen(checkbox, 'click', this.changeCondition);
      this.renderer.appendChild(element.nativeElement, checkbox);
    }
  @HostBinding('disabled') get isDisabled(): string { return this.condition ? 'disabled' : null; }
  @HostBinding('class.mat-button-disabled') get addClass(): boolean {return this.condition; }

  changeCondition = () => {
  this.condition = !this.condition;
  }

}
