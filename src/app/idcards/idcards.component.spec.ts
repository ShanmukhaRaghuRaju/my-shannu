
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdcardsComponent } from './idcards.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IdcardService } from '../idcard.service'; // ✅ Correct path

describe('IdcardsComponent', () => {
  let component: IdcardsComponent;
  let fixture: ComponentFixture<IdcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdcardsComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ IdcardService ]
    }).compileComponents();

    fixture = TestBed.createComponent(IdcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

