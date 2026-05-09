## ステップ 3: 電卓の機能を拡張する

Duck は新しい Issue を作成して Copilot CLI と共同作業することで、電卓に追加の操作を実装して機能を拡張したいと考えています。

### 📖 理論: Copilot CLI を使った反復的な開発

#### Copilot CLI で開発のモメンタムを維持する

スタンドアロンの Copilot CLI は以下によって開発のモメンタムを維持するのに役立ちます：

- 最新の AI モデルを使用して新機能のコードを素早く生成
- ベストプラクティスとパターンを提案
- 新機能のデバッグとテストを支援
- ターミナル内に留まることでコンテキストの切り替えを削減
- 長時間実行のシェルコマンドをより効率的に処理
- ヘッドレス `-p` モードによる改善された自動化をサポート

#### より大きなタスクの委任

より複雑なタスクには、以下の例のように `/delegate` コマンドを使って Copilot コーディングエージェントに作業を割り当てることができます：

> ```bash
> copilot
> ```
>
> ```text
> /delegate Add modulo, exponentiation, and square root functions to calculator.js with proper error handling
> ```

Copilot コーディングエージェントは以下を行います：

1. 自動的に新しいブランチを作成
2. ドラフトプルリクエストをオープン
3. タスクを自律的に実行
4. ターミナルに出力をストリーム
5. 完了したらレビューをリクエスト

> [!NOTE]
> `/delegate` コマンドを使って Copilot コーディングエージェント（CCA）を活用すると、GitHub Copilot サブスクリプションのプレミアムリクエストが消費されます。Copilot CLI はプレミアムリクエストを使用しない通常のモデルでも使用できます。

#### テストと改善のワークフロー

機能を追加するにあたって、Copilot CLI は以下をサポートします：

- 新しい操作のテストケースを生成
- 考慮すべきエッジケースを提案
- ドキュメントを作成
- より良いメンテナンス性のためにコードをリファクタリング
- `/share` を使って開発セッションを保存・共有

> [!IMPORTANT]
> Codespace を再起動した場合は、`copilot --allow-all --enable-all-github-mcp-tools` を実行してから、Copilot CLI セッション内で `!gh auth login` を実行して GitHub に再度認証する必要があります。

> [!NOTE]
> Copilot CLI の `--allow-all` オプションはすべての権限を一度に有効にします：
> `--allow-all-tools`、`--allow-all-paths`、`--allow-all-urls` と同等です。
> これにより CLI は確認なしに任意のファイルパスにアクセスし、任意のツールを使用し、任意の URL にアクセスできます。
> CLI に完全なアクセスと自動化機能が付与されるため、注意して使用してください。

### ⌨️ アクティビティ: 電卓に更なる操作を追加する

1. インタラクティブな Copilot CLI セッションを開始します（まだセッション中でない場合）：

   > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)
   >
   > ```bash
   > copilot --allow-all --enable-all-github-mcp-tools
   > ```

1. Copilot CLI に電卓を拡張するための別の Issue の作成を依頼します：

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Create a GitHub issue for a Node.js CLI calculator app using the feature_request.md template 
   > as the markdown format.
   > I want to request a feature to add more operations including 
   > - modulo
   > - exponentiation (power)
   > - square root
   > Create the issue directly for the current owner and repository in this session on github.com using the `gh` CLI commands.
   > List the issue link when complete
   > ```

1. Copilot CLI と共同作業して新しい操作を実装します：

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Add these functions to my existing calculator.js based on latest issue created:
   > 1. modulo(a, b) - returns the remainder of a divided by b
   > 2. power(base, exponent) - returns base raised to the exponent
   > 3. squareRoot(n) - returns the square root of n with error handling for negative numbers
   > ```

   1. 代替として、ヘッドレスモードを使用することもできます：

      > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
      >
      > ```prompt
      > copilot -p "Add these functions to my existing calculator.js based on latest issue created:
      > 1. modulo(a, b) - returns the remainder of a divided by b
      > 2. power(base, exponent) - returns base raised to the exponent
      > 3. squareRoot(n) - returns the square root of n with error handling for negative numbers"
      > ```

1. 新しい関数をテストし、テストを追加します：

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Add tests for the new calculator operations: 
   > - Expand tests based on the following example:
   >   - @images/calc-extended-operations.png
   > - Add new tests for the new operations to the existing src/tests/calculator.test.js file
   > - Use a popular Node.js testing framework if one isn't installed
   > - Make sure to include edge case tests like square root of negative numbers
   > - Make sure all tests run and pass
   > ```

1. 変更をコミットします：

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Add all calculator and test files to git.
   > Commit with message "Implemented additional calculator operations and tests: 
   > modulo, power, square root" 
   > Push the changes
   > ```

1. Mona が作業を確認してフィードバックと次のレッスンを共有するまで少し待ちます。

> [!TIP]
> Copilot CLI セッションで `/share gist` を使って、GitHub Skills 演習セッションを後から参照できるように GitHub Gist として保存しましょう！

<details>
<summary>うまくいかない場合は？ 🤷</summary><br/>

- Issue タイトルに「Calculator」または「Operations」が含まれているか確認してください
- calculator.js ファイルは require/import できる関数をエクスポートする必要があります
- Node.js REPL を使って手動で操作をテストできます：`node` を実行してコードを入力
- 負の数の平方根には `NaN` を返すかエラーをスローすることを検討してください
- コードの変更をコミットしてプッシュすることを忘れずに
- `copilot --help` で利用可能なすべてのコマンドオプションを確認できます

</details>
