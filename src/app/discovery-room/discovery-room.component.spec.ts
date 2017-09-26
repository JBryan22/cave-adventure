import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryRoomComponent } from './discovery-room.component';

describe('DiscoveryRoomComponent', () => {
  let component: DiscoveryRoomComponent;
  let fixture: ComponentFixture<DiscoveryRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoveryRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
