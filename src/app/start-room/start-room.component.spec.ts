import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRoomComponent } from './start-room.component';

describe('StartRoomComponent', () => {
  let component: StartRoomComponent;
  let fixture: ComponentFixture<StartRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
