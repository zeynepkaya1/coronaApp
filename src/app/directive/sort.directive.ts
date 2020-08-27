import { Directive, Input, Renderer2, HostListener, ElementRef } from '@angular/core';
import { or } from '@amcharts/amcharts4/core';
import { Sort } from '../util/sort';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input() appSort: Array<any>;
  constructor(private rendered: Renderer2, private targetElem: ElementRef) { }

  @HostListener("click")
  sortData() {
    const sort = new Sort();

    const elem = this.targetElem.nativeElement;

    const order = elem.getAttribute("data-order");

    const type = elem.getAttribute("data-type");

    const property = elem.getAttribute("data-name");

    if (order === "desc") {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "asc");
    } else {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "desc");
    }
  }
}
