import { test, expect } from '@playwright/test';

test('初期表示の確認', async ({ page }) => {
    await page.goto('/');

    // ページタイトルが正しいことを確認
    await expect(page).toHaveTitle('都道府県別人口推移比較サイト');
});
