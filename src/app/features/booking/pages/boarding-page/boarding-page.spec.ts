import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingPage } from './boarding-page';

describe('BoardingPage', () => {
  let component: BoardingPage;
  let fixture: ComponentFixture<BoardingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
