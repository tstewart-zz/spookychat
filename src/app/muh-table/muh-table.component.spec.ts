
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuhTableComponent } from './muh-table.component';

describe('MuhTableComponent', () => {
  let component: MuhTableComponent;
  let fixture: ComponentFixture<MuhTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MuhTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuhTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
