import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';


describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ProductComponent } from './product.component';
// import userEvent from '@testing-library/user-event'
// import {render,screen} from "@testing-library/angular";

// describe('ProductComponent', () => {
//   let component: ProductComponent;
//   let fixture: ComponentFixture<ProductComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ ProductComponent ]
//     })
//     .compileComponents();
//     // return MockBuilder(ProductComponent);

//     fixture = TestBed.createComponent(ProductComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', async() => {
//     const user = userEvent.setup()
//     await render(ProductComponent);
//     expect(component).toBeTruthy();
//     // console.log(screen.getByText('Count: 0'));
    
//     // expect(screen.getByText('Count: 0')).toBeInTheDocument();
//   });
// });