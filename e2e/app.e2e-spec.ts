import { AngularRecipePage } from './app.po';

describe('angular-recipe App', () => {
  let page: AngularRecipePage;

  beforeEach(() => {
    page = new AngularRecipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
