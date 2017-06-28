import { JeopardyAngularPage } from './app.po';

describe('jeopardy-angular App', () => {
  let page: JeopardyAngularPage;

  beforeEach(() => {
    page = new JeopardyAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
