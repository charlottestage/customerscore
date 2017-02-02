import { CustomerscorePage } from './app.po';

describe('customerscore App', function() {
  let page: CustomerscorePage;

  beforeEach(() => {
    page = new CustomerscorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
