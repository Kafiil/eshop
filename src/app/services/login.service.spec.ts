import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import { AngularFireAuth } from 'angularfire2/auth';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService, AngularFireAuth]
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
