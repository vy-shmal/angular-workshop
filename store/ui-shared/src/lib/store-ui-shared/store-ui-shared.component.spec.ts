import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreUiSharedComponent } from './store-ui-shared.component';

describe('StoreUiSharedComponent', () => {
  let component: StoreUiSharedComponent;
  let fixture: ComponentFixture<StoreUiSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreUiSharedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreUiSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
