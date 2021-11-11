import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrosDialogComponent } from './erros-dialog.component';

describe('ErrosDialogComponent', () => {
  let component: ErrosDialogComponent;
  let fixture: ComponentFixture<ErrosDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrosDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
