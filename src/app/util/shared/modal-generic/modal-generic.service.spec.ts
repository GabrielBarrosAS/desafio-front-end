import { TestBed } from '@angular/core/testing';
import { ModalGenericService } from './modal-generic.service';


describe('ModalGenericService', () => {
  let service: ModalGenericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalGenericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
