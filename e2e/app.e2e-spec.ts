import { CaveAdventurePage } from './app.po';

describe('cave-adventure App', () => {
  let page: CaveAdventurePage;

  beforeEach(() => {
    page = new CaveAdventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
