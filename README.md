# Find Model Circle サービスページ

インフルエンサーマッチングサービス「Find Model Circle」の企業向けのサービスページのソースコードです。

## 開発環境のセットアップ

### リポジトリのクローン

```bash
git clone https://github.com/hirokihayakawa-sw/find-model-circle-servicepage.git
cd find-model-circle-servicepage
```

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

これにより、開発サーバーが起動し、[http://localhost:3000](http://localhost:3000) でアプリケーションにアクセスできます。

## プロジェクト構造

- `src/`: ソースコード
  - `app/`: Next.js App Router のコンポーネント
  - `components/`: 再利用可能なコンポーネント
- `public/`: 静的ファイル（画像など）

## 技術スタック

- [Next.js](https://nextjs.org/) - React フレームワーク
- [React](https://reactjs.org/) - UI ライブラリ
- [TypeScript](https://www.typescriptlang.org/) - 型付き JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストの CSS フレームワーク
