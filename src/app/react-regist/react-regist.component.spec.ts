import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactRegistComponent } from './react-regist.component';

describe('ReactRegistComponent', () => {
  let component: ReactRegistComponent;
  let fixture: ComponentFixture<ReactRegistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactRegistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
