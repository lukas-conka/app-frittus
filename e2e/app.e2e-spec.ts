import { AppFrittusPage } from './app.po';

describe('app-frittus App', () => {
  let page: AppFrittusPage;

  beforeEach(() => {
    page = new AppFrittusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
