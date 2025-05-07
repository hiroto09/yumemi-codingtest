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
npm test
```
## ディレクトリ構成
```
./src
├── app
│ 
├── components
│   ├── layout
│   ├── PopulationSection
│   ├── PrefectureSection
│
├── const
│   ├── ChartTemplate
│   
├── store
│  
├── test
```

### app
ルーティングを管理する

### api 
apiの管理を行う

### components
コンポーネントを管理する

### const
- ChartTemplate
 - チャートの宣言を行う

### stores
jotai の atom を管理する

### test
テスト用のファイルを管理する
- vitest-setup.ts
  - テストのセットアップを行う

### types
複数のファイルを跨ぐ型を管理


