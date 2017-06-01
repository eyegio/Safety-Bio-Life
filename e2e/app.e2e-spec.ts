import { OnePageProjectPage } from './app.po';

describe('one-page-project App', function() {
  let page: OnePageProjectPage;

  beforeEach(() => {
    page = new OnePageProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
