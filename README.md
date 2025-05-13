# 都道府県別の人口推移を見れるWebアプリケーション(ゆめみコーディングテスト)

## 技術スタック

- Next.js (App Router)
- TypeScript
- SCSS
- jotai
- Vitest
- TestingLibrary

## セットアップ

### インストール

```bash
npm install
```

## スクリプト

### 開発サーバーの起動

```bash
npm run dev
```

### テストの実行

```bash
npm run test
```

### カバレッジテストの実行

```bash
npm run coverage
```

## ディレクトリ構成

```
./src
├── app
│   ├── api
│   │   ├── populations
│   │   │   ├── route.test.ts
│   │   │   └── route.ts
│   │   └── prefectures
│   │       ├── route.test.ts
│   │       └── route.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.module.scss
│   └── page.tsx
├── components
│   ├── Header
│   │   ├── index.module.scss
│   │   ├── index.tsx
│   │   └── route.test.tsx
│   ├── Populations
│   │   ├── PopulationContent
│   │   │   ├── Chart
│   │   │   │   ├── ChartTemplate
│   │   │   │   │   ├── index.module.scss
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── route.test.tsx
│   │   │   │   ├── index.module.scss
│   │   │   │   ├── index.tsx
│   │   │   │   └── route.test.tsx
│   │   │   ├── index.tsx
│   │   │   └── route.test.tsx
│   │   ├── index.tsx
│   │   └── route.test.tsx
│   ├── Prefectures
│   │   ├── List
│   │   │   ├── CheckBox
│   │   │   │   ├── index.tsx
│   │   │   │   └── route.test.tsx
│   │   │   ├── index.module.scss
│   │   │   ├── index.tsx
│   │   │   └── route.test.tsx
│   │   ├── index.tsx
│   │   └── route.test.tsx
│   └── layout
│       └── Section
│           ├── index.module.scss
│           ├── index.tsx
│           └── route.test.tsx
├── store
│   └── index.ts
├── test
│   └── vitest-setup.ts
└── types
    ├── populations.ts
    └── prefectures.ts
```

### app

ルーティングを管理
- `api`
    - apiの管理

### components
- `Header`
    - Header要素の管理
- `layout/Section`
    - セクションごとのレイアウトを管理
- `Populations`
    - Populationsセクションを管理
- `Prefectures`
    - Prefecturesセクションを管理

### store
- atom を管理
    - `PopulationList`グラフの描画に必要な情報と状態を管理

### test

- `vitest-setup.ts`
    - テストのセットアップを行う

### types
- 複数のファイルを跨ぐ型を管理
