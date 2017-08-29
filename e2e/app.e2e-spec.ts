import { EmblemaAppPage } from './app.po';

describe('emblema-app App', () => {
  let page: EmblemaAppPage;

  beforeEach(() => {
    page = new EmblemaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
