
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuhDashComponent } from './muh-dash.component';

describe('MuhDashComponent', () => {
  let component: MuhDashComponent;
  let fixture: ComponentFixture<MuhDashComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MuhDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuhDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
