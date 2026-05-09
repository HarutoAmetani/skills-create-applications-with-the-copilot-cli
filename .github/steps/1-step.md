## ステップ 1: Copilot CLI のインストールと Issue テンプレートの使用

Duck はターミナルでの作業を好み、そこで AI を活用したいと考えています。
Duck は新しい Node.js CLI 電卓アプリの開発に向けて準備を進めており、ターミナルからアプリケーションを構築するためにスタンドアロンの Copilot CLI をインストールする予定です。

### 📖 理論: GitHub Copilot CLI - スタンドアロンのターミナルアプリケーション

#### GitHub Copilot CLI とは？

GitHub Copilot CLI は、GitHub Copilot のパワーをコマンドラインに直接届ける**スタンドアロンのターミナルアプリケーション**です。npm でインストールでき、開発者に豊かなインタラクティブ体験を提供します。

<img width="60%" height="60%" alt="CopilotCLI" src="../images/copilot-cli.png" />

#### 主要な機能とオプション:

- OpenAI や Google の最新 AI モデルによるインテリジェントなコマンド提案
- ターミナル上でのコードスニペットやスクリプトの生成
- Git 操作や GitHub との連携をサポート
- 視覚的なコンテキストのために画像入力をペーストやドラッグ＆ドロップでサポート
- `--enable-all-github-mcp-tools` フラグを使うとすべての GitHub MCP（Model Context Protocol）ツールが有効になり、Issue の作成やリポジトリの管理など GitHub の機能に Copilot CLI がアクセスできます。
- Copilot CLI の設定によっては（例：`--allow-all` オプションを使わない場合）、セッション中に特定の機能を有効にするよう求められることがあります。これらのプロンプトにも **yes** と応答してください。
- `/session`: 現在のチャットセッションの詳細を表示します。
- `/context`: 現在のトークン使用量のビジュアル概要を提供します。
- `/usage`: セッション統計情報を表示します。以下が含まれます：
  - 現在のセッションで使用されたプレミアムリクエスト数
  - セッション時間
  - 編集されたコードの総行数
  - モデルごとのトークン使用量の内訳
- `/share [file|gist] [path]` - セッションを Markdown ファイルまたは GitHub Gist として共有
- 専門的なプロンプトとワークフローをエンコードする**カスタムエージェント**の作成
- `/delegate` コマンドを使用して**Copilot コーディングエージェント**にタスクを委任

#### グローバルショートカット

```text
 @             ファイルをメンション、コンテキストに内容を含める
 Esc           現在の操作をキャンセル
 !             ローカルシェルでコマンドを実行（Copilot をバイパス）
 ctrl+c        操作のキャンセル / 入力のクリア / 終了
 ctrl+d        シャットダウン
 ctrl+l        画面のクリア
 shift+tab     プランモードと通常のインタラクティブモードを切り替え
```

#### インストール要件

Copilot CLI をインストールするには以下が必要です：

- Node.js バージョン 22 以降
- npm バージョン 10 以降
- 有効な GitHub Copilot サブスクリプション（Pro、Pro+、Business、または Enterprise）

#### Issue テンプレート

Issue テンプレートは、チームメンバーが Issue を作成する際の一貫性を保つのに役立ちます。このリポジトリには既に `feature_request.md` テンプレートがあり、電卓アプリの Issue 作成に使用します。テンプレートにより以下が保証されます：

- 必要な情報が事前にすべて収集される
- Issue が標準フォーマットに従う
- チームが Issue をより効率的にトリアージして対応できる

#### 参考リンク

- [GitHub Copilot CLI のインストール](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli)
- [GitHub Copilot CLI の使い方](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)
- [GitHub Copilot CLI 101](https://github.blog/ai-and-ml/github-copilot-cli-101-how-to-use-github-copilot-from-the-command-line/)

> [!IMPORTANT]
> Codespace を再起動した場合は、`copilot --allow-all` を実行してから、ターミナルで `!gh auth login` を実行するか、Copilot CLI セッション内で `!gh auth login` を実行して GitHub に再度認証する必要があります。

### :keyboard: アクティビティ 1: 開発環境を知る

1. 下のボタンを右クリックして、新しいタブで **Create Codespace** ページを開きます。

   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/{{full_repo_name}}?quickstart=1)
   - すべての GitHub アカウントに含まれている Codespaces の無料枠で問題ありません（利用可能な時間が残っている場合）。
   - デフォルトの Codespace 設定で問題ありません。

> [!IMPORTANT]
> この Codespace の VS Code 環境は、ターミナルで Copilot CLI を使用することに集中できるように簡略化されています。VS Code のすべての機能よりも、主にターミナルコマンドを使って作業します。

1. **Repository** フィールドが演習のコピー（オリジナルではない）であることを確認し、緑色の **Create Codespace** ボタンをクリックします。
   - ✅ あなたのコピー: `/{{full_repo_name}}`
   - ❌ オリジナル: `/arilivigni/create-applications-with-the-copilot-CLI`

1. Visual Studio Code が読み込まれるまでしばらく待ちます。

1. これはすべて CLI に関するものなので、ターミナルウィンドウ全体に集中します。

### ⌨️ アクティビティ 2: スタンドアロン Copilot CLI のインストール

1. Codespace を開きます（まだ開いていない場合）

1. ターミナルウィンドウで以下を実行して、スタンドアロンの GitHub Copilot CLI をインストールします：

   > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)

   > ```bash
   > npm install -g @github/copilot
   > ```

1. 以下を実行してインストールを確認します：

   > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)

   > ```bash
   > copilot --version
   > ```

> [!TIP]
> インストール後は、ターミナルのどこでも `copilot` コマンドを使ってインタラクティブセッションを開始できます！

### ⌨️ アクティビティ 3: Copilot CLI を使って Issue を作成する

1. インタラクティブな Copilot CLI セッションを開始します：

   > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)
   >
   > ```bash
   > copilot --enable-all-github-mcp-tools
   > ```

> [!NOTE]
> Copilot CLI を起動すると、このフォルダーを信頼済みフォルダーリストに追加するよう求められたり、キーバインドの設定を求められることがあります。両方のプロンプトに **yes** と応答して続行してください。

<img width="60%" height="60%" alt="CopilotCLIAddDir" src="../images/copilot-cli-add-directory.png" />
<br />
<img width="60%" height="60%" alt="CopilotCLITerminalBindings" src="../images/copilot-cli-terminal-bindings.png" />


2. Copilot CLI で GitHub に認証します（まだ認証していない場合）：

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > /login
   > ```

> [!NOTE]
> `!gh auth login` を実行すると、リンクと認証コードが表示されます。リンクをクリックしてブラウザで GitHub を開き、コードを入力して認証プロセスを完了してください。

3. Copilot CLI の便利なスラッシュコマンドを探索します：
   - 現在のセッション情報を表示する：

     > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
     >
     > ```prompt
     > /session
     > ```

   - 現在のコンテキスト情報を表示する：

     > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
     >
     > ```prompt
     > /context
     > ```

   - 現在の使用情報を表示する：

     > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
     >
     > ```prompt
     > /usage
     > ```

> [!NOTE]
>
> - `/session`: 現在のチャットセッションの詳細を表示するコマンドです。
> - `/context`: 現在のトークン使用量のビジュアル概要を提供します。
> - `/usage`: セッション統計情報を表示します。以下が含まれます：
>   - 現在のセッションで使用されたプレミアムリクエスト数
>   - セッション時間
>   - 編集されたコードの総行数
>   - モデルごとのトークン使用量の内訳

4. Copilot CLI に電卓アプリの機能リクエスト Issue の作成を依頼します：

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Create a GitHub issue for a Node.js CLI calculator app using the following template
   > .github/ISSUE_TEMPLATE/feature_request.md template and make sure the issue is in a
   > markdown format that contains "calculator" in the title and follows the format of
   > the issue template.
   > I want to request a feature for basic arithmetic operations including
   > - addition
   > - subtraction
   > - multiplication
   > - division
   > The calculator should be implemented in calculator.js
   > Create the issue directly in the current owner in this session
   > and repository on github.com using the `gh` CLI commands.
   > List the issue link when complete
   > ```

5. Mona はすでにあなたの作業を確認しています。少し待ってコメントを注視してください。進捗情報と次のレッスンが届きます。

> [!NOTE]
> Copilot CLI が Issue の作成と `gh issue` および `git config` の使用確認を求めることがあります。
> Issue の作成には **yes** と応答し、
> **「はい、残りのセッション中も `gh issue` または `git config` を承認します」** と応答してください。

<img width="60%" height="60%" alt="CopilotCLIPerms" src="../images/copilot-cli-permissions.png" />

<details>
<summary>うまくいかない場合は？ 🤷</summary><br/>

- Node.js 22 以降がインストールされているか確認してください：`node --version`
- npm install が失敗する場合は、`sudo npm install -g @github/copilot` を試してください
- アカウントで GitHub Copilot アクセスが有効になっているか確認してください
- 認証に失敗した場合は、`copilot` を実行して `!gh auth login` を実行してください
- 必要に応じて GitHub UI から Issue を作成することもできます

</details>
