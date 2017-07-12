import { SchedulrPage } from './app.po';

describe('schedulr App', () => {
  let page: SchedulrPage;

  beforeEach(() => {
    page = new SchedulrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
