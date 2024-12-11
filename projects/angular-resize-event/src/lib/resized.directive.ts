import { Directive, ElementRef, NgZone, OnDestroy, OnInit, output } from '@angular/core';
import { ResizedEvent } from './resized.event';

@Directive({
  selector: '[resized]',
  standalone: true
})
export class ResizedDirective implements OnInit, OnDestroy {
  private observer: ResizeObserver = new ResizeObserver(entries => this.zone.run(() => this.observe(entries)));
  private oldRect?: DOMRectReadOnly;

  public readonly resized = output<ResizedEvent>();

  public constructor(
    private readonly element: ElementRef,
    private readonly zone: NgZone
  )
  { }

  public ngOnInit(): void {
    this.observer.observe(this.element.nativeElement)
  }

  public ngOnDestroy(): void {
    this.observer.disconnect();
  }

  private observe(entries: ResizeObserverEntry[]): void {
    const domSize = entries[0];
    const resizedEvent = new ResizedEvent(domSize.contentRect, this.oldRect);
    this.oldRect = domSize.contentRect;
    this.resized.emit(resizedEvent);
  }
}

