import { AngularMdcModule } from './angular-mdc.module';

describe('AngularMdcModule', () => {
  let angularMdcModule: AngularMdcModule;

  beforeEach(() => {
    angularMdcModule = new AngularMdcModule();
  });

  it('should create an instance', () => {
    expect(angularMdcModule).toBeTruthy();
  });
});
