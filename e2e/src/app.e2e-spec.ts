import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have CropChat title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('CropChat');
  });
});
