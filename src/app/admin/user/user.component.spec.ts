import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BorderDirective } from 'src/app/directives/border.directive';
import { HighlightDirective } from 'src/app/directives/highlight.directive';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let element:any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UserComponent,HighlightDirective,BorderDirective ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check for the text not to be highlighted initially',()=>{
    const p: HTMLElement = fixture.nativeElement.querySelector('.directive p');
    const bgColor = p.style.backgroundColor;
    // p.triggerEventHandler('click', null);
    expect(bgColor).toBe('');
    let event = new Event('mouseenter');
    console.log("eve e: ",event);
    p.dispatchEvent(event);
    p.dispatchEvent(new MouseEvent('mouseenter'))

  let event1 = new Event('mouseleave');
  console.log("eve l: ",event1);
  p.dispatchEvent(event1);
  p.dispatchEvent(new MouseEvent('mouseleave'))
  })
  
  it('check for the text not to be bordered initially',()=>{
    const p: HTMLElement = fixture.nativeElement.querySelector('.directive span');
    const borderColor = p.style.borderColor;
    expect(borderColor).toBe('transparent');
    let event = new Event('mouseenter');
    console.log("eve e: ",event);
    p.dispatchEvent(event);
    p.dispatchEvent(new MouseEvent('mouseenter'))
    let event1 = new Event('mouseleave');
    console.log("eve l: ",event1);
    p.dispatchEvent(event1);
    p.dispatchEvent(new MouseEvent('mouseleave'))
  })
});
