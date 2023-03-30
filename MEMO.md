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
- css を利用しているすべてのファイルにおいて、新たに作成した`scss`ファイルを`import`するようにパスを変更する

# Staion4

- .env について
  - const.js から利用できるようになっている

## NewTask.jsx

- [react-datepicker のドキュメント](https://reactdatepicker.com/)
  - インストール: `yarn add react-datepicker`
- API について(`YYYY-MM-DDTHH:MM:SS`)
  - 下のほうを見ると`Models/taskCreateRequest`がある
  - そこの`limit`をみると指定されている型は`string`であることがわかる
  - また、`YYYY-MM-DDTHH:MM:SS`は ISO8601 形式であるので、js の`Date型`を ISO8601 形式の`string`に変換してくれる`Date.prototype.toISOString()`を使えばよい
- [React Datepicker 実装パターン](https://qiita.com/buto/items/c6e875aeb4d2c7e25969)
  - `<DatePicker />`を用いる
  - `import "react-datepicker/dist/react-datepicker.css"`も必要

## EditTask.jsx

- API から取得した時刻の文字列は`new Date()`で`date`型へ変換する

## Home.jsx

- [date-fns 公式](https://date-fns.org/)
  - `yarn add --dev date-fns`
- [date-fns を使って 日本語で「X 年 X ヶ月」を返す関数（コピペ用）](https://qiita.com/sota_yamaguchi/items/305374535aeb0ffd450a)
  - `formatInterval`と`formatDuration`を用いることで、自作せずに実装可能
- [デジタル時計の実装方法](https://feeld-uni.com/?p=2354)
  - `useState`で現在時刻を管理する
  - `useEffect`と`setInterval`で現在時刻を任意間隔で更新する
  - `useState`が更新されたら、それを用いているものすべてが更新される

# エラーへの対処

- [ERROR in Plugin "react" was conflicted between ".eslintrc.json" and "BaseConfig"](https://github.com/facebook/create-react-app/issues/11825)
  - [解決法](https://github.com/facebook/create-react-app/issues/11825#issuecomment-1002149573)
    - `.eslintrc`の`plugins`から`react`を削除する
    - `package.json`から`eslintConfig`を取り除く
    - スレッドでは一応の解決はなされているよう
- [ERROR in Plugin "react" was conflicted between ".eslintrc.json" and "BaseConfig"](https://github.com/reactjs/react.dev/issues/4186)
  - 対処法: `package.json`を再保存する
    - 効かない場合がある
  - `plugin:react/recommended`を`.eslintrc`から削除する
- 以上の対策を行った後以下の手順で、パッケージを再インストールした
  - `rm -r node_module`
  - `yarn install`
- `.eslintrc.js`の`extends`に`plugin:react/recommended`があるせいで上記のエラーが出ているように見える
  - 一方で、その行を削除すると以下のエラーが出る
    - `App.js`の 6 行目で`<`が`Unexpected token`だといわれる
- [conflict](https://github.com/jsx-eslint/eslint-plugin-react/issues/3128)
  - 解決方法として、`yarn.lock`を削除してから、`yarn install`をしろとあるので、実行してみた
    - 結果、いくつかエラーが出たが、うまく動作している
    - [`ERROR: is missing in props validation`](https://cpoint-lab.co.jp/article/202107/20531/)
      - `.eslintrc.js`の`rules`に`"react/prop-types": "off"`を追加すればよい

# Station5

## WAI-ARIA

- [WAI-ARIA(ウェイ・アリア)](https://developer.mozilla.org/ja/docs/Learn/Accessibility/WAI-ARIA_basics)はブラウザや支援技術が認識できる意味論を追加することで、アクセシビリティを向上させるもの
  - つまり、HTML をさらに進化させてアクセシビリティを向上させる
- [ARIA:tab ロール](https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/tab_role)
  - ![具体例](https://b-risk.jp/wp/wp-content/uploads/2021/05/Videotogif-1.gif)
    - [BRISK より引用](https://b-risk.jp/blog/2021/07/wai_aria/#i-4)
  - `role="tablist"`以下を利用した

# FEEDBACK

## Station2-4

- `.js`の`css`の`import`文を`scss`へ変更する
- Home.jsx
  - nowTime が使われていない
    - L137 の`MinFormat`内の`start`に`nowTime`を用いる
  - 関数`MinFormat`内の`start`と`end`を入れ替える
- public フォルダについて
  - native の js などでは.js ではないようなファイルを置く場所
    - `React`では、`css`などは`src`フォルダ内でよいが、`native`では`public`フォルダに入れる
  - 今回、`scss`の生成物を`public/css`フォルダに置いたが、`React`では不要
