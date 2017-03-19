import { DsaMediacontrollerRemotePage } from './app.po';

describe('dsa-mediacontroller-remote App', () => {
  let page: DsaMediacontrollerRemotePage;

  beforeEach(() => {
    page = new DsaMediacontrollerRemotePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
