
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuhNavComponent } from './muh-nav.component';

describe('MuhNavComponent', () => {
  let component: MuhNavComponent;
  let fixture: ComponentFixture<MuhNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MuhNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuhNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
