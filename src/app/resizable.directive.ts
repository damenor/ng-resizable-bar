import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  AfterViewInit,
  OnChanges,
  EventEmitter,
  Output
} from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[resizable]'
})
export class ResizableDirective implements AfterViewInit, OnChanges {

  @Input() rDirections: string[] = ['top'];

  @Input() minHeight?: number;
  @Input() maxHeight?: number;
  @Input() initialHeight?: number;

  @Input() minWidth?: number;
  @Input() maxWidth?: number;

  @Output() onChangeHeight: EventEmitter<number> = new EventEmitter<number>()

  private oldY = 0;
  private oldX = 0;

  private isGrabber = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    const parent = this.el.nativeElement.parentNode;

    const grabber: HTMLElement = this.renderer.createElement('div');
    this.renderer.addClass(grabber, 'grabber');

    const span = this.renderer.createElement('span');

    for (const direction of this.rDirections) {
      this.renderer.addClass(grabber, 'rg-' + direction);
    }

    grabber.addEventListener('mouseup', (e) => this.onMouseUp(e));
    grabber.addEventListener('mousemove', (e) => this.onMouseMoveGrabber(e));
    grabber.addEventListener('mousedown', (e) => this.onMouseDownGrabber(e));

    this.renderer.appendChild(grabber, span);
    this.renderer.insertBefore(parent, grabber, this.el.nativeElement);

  }

  ngOnChanges(changes) {
    if (changes.initialHeight) {
      this.el.nativeElement.style.height = `${changes.initialHeight.currentValue}px`;
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isGrabber) this.resizerHeight(event);
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.isGrabber = false;
  }

  onMouseMoveGrabber = (event: MouseEvent) => {
    if (!this.isGrabber) return;
    this.resizerHeight(event);
  };

  onMouseDownGrabber = (event: MouseEvent) => {
    this.isGrabber = true;
    this.oldY = event.clientY;
  };

  private resizerHeight = (event: any): void => {
    const oldHeight = this.el.nativeElement.offsetHeight;
    const offsetY = this.oldY - event.clientY;
    const height = oldHeight + offsetY;

    if (this.isValidLimits(this.minHeight, this.maxHeight, height)) {
      this.renderer.setStyle(this.el.nativeElement, 'height', height);
      this.el.nativeElement.style.height = `${height}px`;
      this.onChangeHeight.emit(height)
      this.oldY = event.clientY;
    }
  };

  private isValidLimits = (
    minValue: any,
    maxValue: any,
    value: any
  ): boolean => {
    let validLimits = true;
    if (minValue) validLimits = minValue < value;
    if (maxValue && validLimits) validLimits = maxValue > value;
    return validLimits;
  };

  private resizerDiretion = (event: any): void => {
    for (const direction of this.rDirections)
      switch (direction) {
        case 'top':
          this.resizerHeight(event);
          break;
        // case 'bottom':
        //   this.resizerHeight(event);
        //   break;
        // case 'left':
        //   this.resizerWidth(event);
        //   break;
        // case 'right':
        //   this.resizerWidth(event);
        //   break;
      }
  };

  private resizerWidth = (event: any): void => {
    const oldWidth = this.el.nativeElement.offsetWidth;
    const offsetX = this.oldX + event.clientX;
    const width = oldWidth - offsetX;

    if (this.isValidLimits(this.minWidth, this.maxWidth, width)) {
      this.renderer.setStyle(this.el.nativeElement, 'width', width);
      this.el.nativeElement.style.width = width + 'px';
      this.oldX = event.clientX;
    }
  };
}
