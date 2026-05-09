## ステップ 4: プルリクエストの作成、レビュー、マージ

Duck は、プルリクエストの作成、両方の Issue へのリンク、Copilot によるレビューの取得、変更のマージ—これらすべてを Copilot CLI を使ってコマンドラインから行うことで、開発作業を完成させる準備が整いました。

### 📖 理論: Copilot CLI を使ったプルリクエストとコードレビュー

#### プルリクエスト（PR）について

プルリクエストは共同開発で変更を提案する標準的な方法です：

- チームメンバーがマージ前にコードをレビューできる
- 変更と決定の履歴を維持する
- プロジェクト追跡の改善のために Issue にリンクできる
- CI/CD による自動テストと検証を可能にする

#### PR を Issue に接続する

プルリクエストを Issue にリンクすることはプロジェクト管理に役立ちます：

- PR がマージされると Issue を自動的にクローズする
- 作業項目とコードの変更間のトレーサビリティを提供する
- 開発ライフサイクルを通じた進捗の追跡を助ける
- 何が構築されているかについてのチームコミュニケーションを改善する

#### AI を活用したコードレビュー

GitHub Copilot はレビュアーとして以下を行えます：

- コード品質の改善を提案
- 潜在的なバグやエッジケースを特定
- ベストプラクティスとデザインパターンを推奨
- 実装に対して建設的なフィードバックを提供

Copilot CLI を使うと以下が可能になります：

- ターミナルから直接プルリクエストを作成
- Copilot またはチームメンバーにレビューをリクエスト
- CLI を離れることなく変更をマージ
- より速い反復のためにワークフロー全体を自動化

#### 参考リンク

- [GitHub CLI でプルリクエストを作成する](https://cli.github.com/manual/gh_pr_create)
- [Issue と PR のリンク](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)
- [コードレビュアーとしての GitHub Copilot](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)

> [!IMPORTANT]
> Codespace を再起動した場合は、`copilot --allow-all` を実行してから、ターミナルで `!gh auth login` を実行するか、Copilot CLI セッション内で `!gh auth login` を実行して GitHub に再度認証する必要があります。

### ⌨️ アクティビティ: プルリクエストワークフローを完了する

1. インタラクティブな Copilot CLI セッションを開始します（まだセッション中でない場合）：

   > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)
   >
   > ```bash
   > copilot --allow-all --enable-all-github-mcp-tools
   > ```

2. 変更のプルリクエストを作成し、Copilot をレビュアーとして追加します：

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Create a pull request from the current branch with a title "Add calculator enhancements" 
   > and description that includes the main changes: basic calculator operations and expanded 
   > functionality with modulo, power, and square root. Make sure to add @copilot as a reviewer 
   > and request a review on the PR.
   > List the PR link when it is completely created
   > ```

3. プルリクエストを以前に作成した両方の Issue に紐付けます：

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Link the pull request I just created to both the "Create a calculator" and 
   > "Add more operations" issues so they close automatically when merged.
   > ```

1. Copilot のレビューが完了したらプルリクエストをマージします：

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Merge the pull request and close the attached issues
   > ```

> [!NOTE]
> "Closes #<issue-number>" を使って Issue にリンクされた PR をマージすると、
> GitHub はそれらの Issue を自動的にクローズします。スカッシュマージオプションを使うと
> メインブランチの履歴がきれいに保たれます。

4. 両方の Issue が現在クローズされていることを確認します：

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > List the closed issues in the repository to confirm both the "Create a calculator" 
   > and "Add more operations" issues are now closed.
   > ```

5. Mona が作業を確認してフィードバックと次のレッスンを共有するまで少し待ちます。

> [!TIP]
> Copilot CLI セッションで `/share gist` を使って、GitHub Skills 演習セッションを
> ドキュメントと将来の参照のために GitHub Gist として保存しましょう！

<details>
<summary>うまくいかない場合は？ 🤷</summary><br/>

- PR を作成する前にすべての変更をコミットしてプッシュしたか確認してください
- `gh auth status` または Copilot CLI 内で `!gh auth status` を使って GitHub 認証を確認してください
- PR の作成に失敗する場合は、main/master とは異なるブランチにいることを確認してください
- Issue を手動でリンクするには、PR の説明を編集して「Closes #<issue-number>」を含めてください
- `!gh pr view` または `!gh pr list` で PR の詳細を確認できます
- 自動的にクローズされない Issue は GitHub の Web インターフェースで手動でリンクしてください
- マージ前に Copilot のレビューが送信されたことを確認してください
- `!gh pr merge --squash` を使うときれいな履歴でマージできます

</details>
