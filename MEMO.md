# Station1
* package.jsonをアップデートしてから、`yarn install`
  * > 何回か`yarn install`してから`ucm -u` をしていた。これは`yarn install`が何たるかを理解していなかったため
  * `yarn`とは、`node.js`のパッケージマネージャーであり、`yarn`以外にも`npm`などがある
  * `yarn install`: プロジェクトすべての依存関係をインストールするのに使用される
    * つまり、`package.json`に基づいて、`node.js`のパッケージをインストールする
    * リンク: [yarn install](https://chore-update--yarnpkg.netlify.app/ja/docs/cli/install)
* react-router-dom v5からv6への対応
  * RedirectをNavigateに変更
  * SwitchをRoutesに変更
  * Routeの中身を修正
    * exactの削除
    * contentをelementに修正
    * elementの形を`関数名`から`<関数名 />`に変更
* ReactDOM.render is no longer supported
  * https://zenn.dev/kohski/articles/create-react-app-error-v18
