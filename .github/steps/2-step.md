## ステップ 2: Copilot CLI を使って電卓の Issue に取り組む

Issue が作成されたので、Duck はスタンドアロンの Copilot CLI と対話的に作業して電卓アプリの構築を開始します。

### 📖 理論: Copilot CLI を使った共同開発

#### Copilot CLI を使ったインタラクティブな開発

スタンドアロンの Copilot CLI（`copilot` コマンド）は、開発のための豊かなインタラクティブ体験を提供します：

- ターミナルで `copilot` を実行するだけでセッションを開始
- コードについて自然な会話をしてインテリジェントな提案を得る
- 要件に基づいてボイラープレートコードを生成
- 最先端のレスポンスのために最新の AI モデルを使用
- `/share [file|gist] [path]` - セッションを Markdown ファイルまたは GitHub Gist として共有

#### カスタムエージェント

Copilot CLI はリポジトリで定義できるカスタムエージェントをサポートしています：

- `.github/agents/` ディレクトリにエージェントプロファイルを作成
- 専門的なプロンプト、ツール選択、ワークフローをエンコード
- `/agent <name>` コマンドでエージェントを呼び出す
- ドキュメント、インフラ、セキュリティ、ドメイン固有のタスクに最適

#### タスクの委任

より大きなタスクがある場合は、Copilot コーディングエージェントに委任できます：

- `/delegate タスクの説明` を使用して作業を割り当て
- Copilot が新しいブランチとドラフトプルリクエストを作成
- コーディングエージェントがバックグラウンドで自律的に作業
- 完了したら変更をレビュー

> [!NOTE]
> 参考リンク:
>
> - [GitHub Copilot CLI の使い方](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)
> - [Copilot CLI のカスタムエージェント](https://github.blog/changelog/2025-10-28-github-copilot-cli-use-custom-agents-and-delegate-to-copilot-coding-agent/)
> - [カスタムエージェントについて](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-custom-agents)

> [!IMPORTANT]
> Codespace を再起動した場合は、`copilot --allow-all --enable-all-github-mcp-tools` を実行してから、Copilot CLI 内で `!gh auth login` を実行して GitHub に再度認証する必要があります。

### ⌨️ アクティビティ: 電卓アプリ用の新しいブランチを作成する

1. 新しいインタラクティブ Copilot CLI セッションを開始します（`/exit` で前のセッションを閉じます）：

   > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)
   >
   > ```bash
   > copilot --allow-all --enable-all-github-mcp-tools
   > ```

> [!NOTE]
> Copilot CLI の `--allow-all` オプションはすべての権限を一度に有効にします：
> `--allow-all-tools`、`--allow-all-paths`、`--allow-all-urls` と同等です。
> これにより CLI は確認なしに任意のファイルパスにアクセスし、任意のツールを使用し、任意の URL にアクセスできます。
> CLI に完全なアクセスと自動化機能が付与されるため、注意して使用してください。

2. `create-calc-app` という名前の新しいブランチを作成してプッシュします：

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Create and push a new branch called 'create-calc-app'
   > ```

<details>
<summary>うまくいかない場合は？ 🤷</summary><br/>

Copilot CLI の `!` コマンドを使ってチャットセッションを離れずにシェルコマンドを直接実行できます。例えば、チャットからブランチを作成してプッシュするには：

 ```prompt
 !git checkout -b create-calc-app && git push -u origin create-calc-app
 ```

 その後、現在のブランチを確認します：

 ```prompt
 !git branch --show-current
 ```
</details>

### ⌨️ アクティビティ: 画像を基に Copilot CLI で電卓コードを生成する

1. Copilot CLI に画像と以前に作成した GitHub Issue を基に電卓関数の作成を依頼します：

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > @images/js-calculator.png help me create a Node.js CLI calculator app 
   > based only on the four basic math operations in this image and outlined
   > in the latest issue in this owner/repository.
   > Create the code and put it in the 'src' directory.
   > Make sure the calculator is commented with the operations it supports.
   > ```

   1. 代替として、プロンプト付きのヘッドレスモードを使用することもできます：

      > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)
      >
      > ```bash
      > copilot -p "@images/js-calculator.png help me create a Node.js CLI calculator app 
      > based only on the four basic math operations in this image and outlined
      > in the latest issue in this owner/repository.
      > Create the code and put it in the 'src' directory.
      > Make sure the calculator is commented with the operations it supports."
      > ```

> [!NOTE]
> この例では Web JavaScript 電卓の画像を使用していますが、Copilot CLI でファイル（画像を含む）を使ってリクエストにコンテキストを提供する方法を示しています。

2. Copilot CLI に電卓関数の実行とテストを依頼します：

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Run and test the calculator functions with some example operations 
   > shown in the image @images/calc-basic-operations.png.
   > ```

3. Copilot CLI に電卓関数の包括的なテストの作成を依頼します：

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Create comprehensive unit tests for all the calculator functions:
   > - Expand tests based on the following example:
   >   - @images/calc-basic-operations.png
   > - Add these tests to a src/tests/calculator.test.js file
   > - Use a popular Node.js testing framework if one isn't installed
   > - addition, subtraction, multiplication, and division
   > - test edge cases like division by zero
   > - Make sure all tests run and pass
   > ```

> [!NOTE]
> ctrl+o を押すと Copilot CLI が実行したテストの出力を確認できます！
  
4. コードに満足したら、Copilot CLI を通じて変更をコミットします：

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Add all calculator and test files to git.
   > Commit with message "Implement basic calculator operations and tests: 
   > addition, subtraction, multiplication, division"
   > Push the changes
   > ```

5. Mona が作業を確認してフィードバックと次のレッスンを共有するまで少し待ちます。

> [!TIP]
> 画像をペーストしたりドラッグ＆ドロップして Copilot CLI に視覚的なコンテキストを提供できます！

> [!NOTE]
> 変更をプッシュすると、作業を確認して次のステップを準備するワークフローがトリガーされます！

<details>
<summary>うまくいかない場合は？ 🤷</summary><br/>

- コマンドを実行するときはリポジトリのディレクトリにいることを確認してください
- `copilot` コマンドには Node.js 22 以降のインストールが必要です
- 認証に失敗した場合は、`copilot` を実行してログインプロンプトに従ってください
- Copilot の提案を基に calculator.js ファイルを手動で編集することもできます
- `module.exports` を使って関数をエクスポートすることを忘れずに

</details>
