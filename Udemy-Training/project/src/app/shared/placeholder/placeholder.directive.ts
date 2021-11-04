import { Directive, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appPLaceHolder]' })
export class PlaceholderDirective {

    constructor(public viewContainerRef: ViewContainerRef) { }
}