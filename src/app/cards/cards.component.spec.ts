import { TestBed } from '@angular/core/testing';
import { CardsService } from './cards.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ Add this

describe('CardsService', () => {
  let service: CardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // ✅ Fix: provides HttpClient
      providers: [CardsService]           // ✅ Optional, but good to include
    });
    service = TestBed.inject(CardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

