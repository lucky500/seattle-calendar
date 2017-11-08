import { SeattleCalendarPage } from './app.po';

describe('seattle-calendar App', () => {
  let page: SeattleCalendarPage;

  beforeEach(() => {
    page = new SeattleCalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
