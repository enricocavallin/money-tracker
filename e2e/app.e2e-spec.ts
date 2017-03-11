import { MoneyTrackerPage } from './app.po';

describe('money-tracker App', () => {
  let page: MoneyTrackerPage;

  beforeEach(() => {
    page = new MoneyTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
