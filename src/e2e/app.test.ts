import "expect-puppeteer";

describe("TicTacToeGame", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:8080");
  });

  it('should display "Nice to see you!" text on page', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain("Nice to see you! Lets ");
  });
});
