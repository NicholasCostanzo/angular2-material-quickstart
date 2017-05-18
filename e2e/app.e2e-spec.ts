import { Angular2MaterialQuickstartPage } from './app.po';

describe('angular2-material-quickstart App', () => {
  let page: Angular2MaterialQuickstartPage;

  beforeEach(() => {
    page = new Angular2MaterialQuickstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
