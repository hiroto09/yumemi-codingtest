import { test, expect } from '@playwright/test';

test('初期状態', async ({ page }) => {
    await page.goto('/');

    expect(await page.title()).toBe('都道府県別人口推移比較サイト');

    const heading1 = page.getByRole('heading', { name: '都道府県リスト' });
    await expect(heading1).toBeVisible();

    const heading2 = page.getByRole('heading', { name: '人口グラフ' });
    await expect(heading2).toBeVisible();

    const checkboxes = await page.$$('input[type="checkbox"]');
    expect(checkboxes.length).toBe(47);

    const prefectures = [
        '北海道',
        '青森県',
        '岩手県',
        '宮城県',
        '秋田県',
        '山形県',
        '福島県',
        '茨城県',
        '栃木県',
        '群馬県',
        '埼玉県',
        '千葉県',
        '東京都',
        '神奈川県',
        '新潟県',
        '富山県',
        '石川県',
        '福井県',
        '山梨県',
        '長野県',
        '岐阜県',
        '静岡県',
        '愛知県',
        '三重県',
        '滋賀県',
        '京都府',
        '大阪府',
        '兵庫県',
        '奈良県',
        '和歌山県',
        '鳥取県',
        '島根県',
        '岡山県',
        '広島県',
        '山口県',
        '徳島県',
        '香川県',
        '愛媛県',
        '高知県',
        '福岡県',
        '佐賀県',
        '長崎県',
        '熊本県',
        '大分県',
        '宮崎県',
        '鹿児島県',
        '沖縄県',
    ];

    for (const name of prefectures) {
        await expect(page.getByText(name)).toBeVisible();
    }

    const select = page.getByRole('combobox');
    await expect(select).toBeVisible();

    const message = page.getByText('都道府県を選択してください');
    await expect(message).toBeVisible();
});

test('チャートが表示されるかのテスト', async ({ page }) => {
    await page.goto('/');

    const tokyoLabel = await page.getByText('東京都');
    const tokyoCheckbox = await tokyoLabel.locator('input[type="checkbox"]');
    await tokyoCheckbox.check();

    await page.waitForSelector('canvas', { state: 'visible', timeout: 5000 });

    const canvas = await page.$('canvas');
    expect(canvas).not.toBeNull();
    expect(canvas).not.toBeNull();
    expect(await canvas!.isVisible()).toBe(true);
});

test('人口種を変更してもグラフが表示されるかのテスト', async ({ page }) => {
    await page.goto('/');

    const tokyoLabel = await page.getByText('東京都');
    const tokyoCheckbox = await tokyoLabel.locator('input[type="checkbox"]');
    await tokyoCheckbox.check();

    await page.waitForSelector('canvas', { state: 'visible', timeout: 5000 });
    const canvas = await page.$('canvas');
    expect(canvas).not.toBeNull();
    expect(await canvas!.isVisible()).toBe(true);

    const combobox = page.getByRole('combobox');
    await combobox.selectOption({ label: '年少人口' });

    await page.waitForTimeout(1000);
    expect(await canvas!.isVisible()).toBe(true);
});
