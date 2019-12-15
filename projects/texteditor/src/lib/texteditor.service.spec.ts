import { TestBed } from '@angular/core/testing';

import { TexteditorService } from './texteditor.service';

describe('TexteditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TexteditorService = TestBed.get(TexteditorService);
    expect(service).toBeTruthy();
  });
});
