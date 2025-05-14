# 都道府県別の人口推移を見れるWebアプリケーション(ゆめみコーディングテスト)

## 技術スタック

- Next.js (App Router)
- TypeScript
- SCSS
- jotai
- Vitest
- TestingLibrary
- playwright

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

### esLint

```bash
npm run lint:fix
```

### prettier

```bash
npm run format:fix
```

### ユニットテスト

```bash
npm run test
```

### カバレッジテスト

```bash
npm run coverage
```

### e2eテスト

```bash
npm run test:e2e
```

## ディレクトリ構成

```
./src
├── app
│   ├── api
│   │   ├── populations
│   │   │   ├── fetchPopulations.ts
│   │   │   ├── route.test.ts
│   │   │   └── route.ts
│   │   └── prefectures
│   │       ├── fetchPrefectures.ts
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
│   │   ├── index.test.tsx
│   │   └── index.tsx
│   ├── Populations
│   │   ├── PopulationContent
│   │   │   ├── Chart
│   │   │   │   ├── ChartTemplate
│   │   │   │   │   ├── index.module.scss
│   │   │   │   │   ├── index.test.tsx
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── index.module.scss
│   │   │   │   ├── index.test.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── index.test.tsx
│   │   │   └── index.tsx
│   │   ├── index.test.tsx
│   │   └── index.tsx
│   ├── Prefectures
│   │   ├── List
│   │   │   ├── CheckBox
│   │   │   │   ├── index.tsx
│   │   │   │   └── route.test.tsx
│   │   │   ├── index.module.scss
│   │   │   ├── index.tsx
│   │   │   └── route.test.tsx
│   │   ├── index.test.tsx
│   │   └── index.tsx
│   └── layout
│       └── Section
│           ├── index.module.scss
│           ├── index.test.tsx
│           └── index.tsx
├── fetcher
│   ├── populations
│   └── prefectures
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
    - Headerコンポーネントの管理
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
