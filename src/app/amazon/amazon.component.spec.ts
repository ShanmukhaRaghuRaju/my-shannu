import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmazonComponent } from './amazon.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ Import this

describe('AmazonComponent', () => {
  let component: AmazonComponent;
  let fixture: ComponentFixture<AmazonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonComponent ],
      imports: [ HttpClientTestingModule ] // ✅ Use testing module for mocking HTTP
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
