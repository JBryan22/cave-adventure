import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendlyRoomComponent } from './friendly-room.component';

describe('FriendlyRoomComponent', () => {
  let component: FriendlyRoomComponent;
  let fixture: ComponentFixture<FriendlyRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendlyRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendlyRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
