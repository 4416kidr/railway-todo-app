# Station1

- package.json をアップデートしてから、`yarn install`
  - > 何回か`yarn install`してから`ucm -u` をしていた。これは`yarn install`が何たるかを理解していなかったため
  - `yarn`とは、`node.js`のパッケージマネージャーであり、`yarn`以外にも`npm`などがある
  - `yarn install`: プロジェクトすべての依存関係をインストールするのに使用される
    - つまり、`package.json`に基づいて、`node.js`のパッケージをインストールする
    - リンク: [yarn install](https://chore-update--yarnpkg.netlify.app/ja/docs/cli/install)
- react-router-dom v5 から v6 への対応
  - Redirect を Navigate に変更
  - Switch を Routes に変更
  - Route の中身を修正
    - exact の削除
    - content を element に修正
    - element の形を`関数名`から`<関数名 />`に変更
- ReactDOM.render is no longer supported
  - https://zenn.dev/kohski/articles/create-react-app-error-v18
- redirect 周りを修正
  - https://zenn.dev/longbridge/articles/61b05d8bdb014d
    - RouteAuthGuard を新たに定義して redirect させる
- [初心者向け Redux 講座](https://reffect.co.jp/react/react-redux-for-beginner#Store)
  - ログイン周りで用いられているパッケージ
- [React.VFC ってなに](https://qiita.com/tttocklll/items/c78aa33856ded870e843)
  - props を定義するもの

# Station2

- [ESLint の導入](https://eslint.org/docs/latest/use/getting-started)
  - yarn を用いた導入は[こっち](https://zenn.dev/manycicadas/books/b6f2d99b5208e9/viewer/c70a5d)
    1. `yarn add eslint --dev`
    2. `yarn run eslint --init`
  - 実行方法: `yarn run eslint .`
- [Prettier の導入](https://prettier.io/docs/en/install.html)
  - `yarn add --dev --exact prettier`
  - 実行方法: `yarn prettier --write .`
- [ESLint と Prettier の競合を解消する eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
  - 「Prettier の導入」の ESLint (and other linters)に記載がある
  - 競合設定を off にしてくれるらしい
  - `yarn add --dev eslint-config-prettier`
- [ESLint が出力する「React' must be in scope when using JSX」に対応する](https://zenn.dev/ryuu/scraps/583dad79532879)
  - `eslintrc.js`の`rules`に加筆する
    ```
    "rules": {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off"
    }
    ```
- [ERROR in Plugin "react" was conflicted between ".eslintrc.json" and "BaseConfig"](https://github.com/facebook/create-react-app/issues/11825)
  - [解決法](https://github.com/facebook/create-react-app/issues/11825#issuecomment-1002149573)
    - `.eslintrc`の`plugins`から`react`を削除する
    - `package.json`から`eslintConfig`を取り除く
    - スレッドでは一応の解決はなされているよう

# Station3

- [sass 公式ページ](https://sass-lang.com/install)
  - [sass の導入方法](https://sass-lang.com/guide)
- [yarn で sass を導入する方法(Qiita)](https://qiita.com/TK-C/items/422a9badee49ca798cc0)
  - `yarn add --dev sass`
  ```package.json
  "scripts": {
    "sass": "yarn sass src/scss:public/css", // scssファイルからcssファイルを生成
    "sass-watch": "yarn sass --watch src/scss:public/css" // 変更を検知して自動実行
  }
  ```
- [sass の記法(SCSS 構文)](https://qiita.com/takeshisakuma/items/1c40c42f61c6e751c0e3)
- 対応方法
  - `yarn add --dev sass`
  - `sh my_sass.sh` 
    - `my_sass.sh`: `scss`ファイルの生成から、`css`ファイルの生成までの手順を記したファイル
      - 既存の`css`ファイルは`scss`記法に包含されているので、そのまま使う
