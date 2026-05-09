# Copilot CLI でアプリケーションを作成する

_スタンドアロンのターミナルアプリケーションである GitHub Copilot CLI を使って、Issue の管理と Node.js 電卓アプリの開発を学びましょう。_

## ようこそ

- **対象者**: スタンドアロンの GitHub Copilot CLI を使って開発ワークフローを効率化したい開発者
- **学べること**: GitHub Copilot CLI をスタンドアロンのターミナルツールとしてインストールし、Issue の作成、コードの生成、コマンドラインでの対話的なコラボレーションに活用する方法
- **作るもの**: Copilot CLI を使ってプロジェクトのセットアップ、Issue の管理、共同開発を行う Node.js 電卓アプリ
- **前提条件**:
  - 基本的なコマンドライン（CLI）操作の知識
  - GitHub リポジトリの基本的な知識
  - Node.js バージョン 22 以降（Copilot CLI のインストールに必要）
  - GitHub Copilot サブスクリプション（Pro、Pro+、Business、または Enterprise）

- **所要時間**: この演習は 60 分以内で完了できます。

この演習では、以下のことを行います：

1. スタンドアロンの Copilot CLI のインストール方法と Issue テンプレートの使い方を学ぶ
1. Copilot CLI を使って既存のテンプレートから Node.js 電卓アプリの Issue を作成する
1. コマンドラインで Copilot と協力しながら反復的な開発を実践する

### Copilot CLI の新機能

GitHub Copilot CLI は、以下の魅力的な機能を持つスタンドアロンのターミナルアプリケーションです：
- **最新の AI モデル**: OpenAI や Google の最新モデルにアクセス可能
- **カスタムエージェント**: `.github/agents/` を使用してワークフロー専用のエージェントペルソナを作成
- **`/delegate` コマンド**: 自律的に動作する Copilot コーディングエージェントにタスクを委任
- **`/share` コマンド**: チャットセッションを Markdown ファイルまたは GitHub Gist として保存
- **強化された画像サポート**: ペーストやドラッグ＆ドロップで画像を追加
- **MCP サーバーサポート**: Model Context Protocol ツールとの統合
- **信頼性の向上**: 長時間実行コマンドの処理改善およびヘッドレス `-p` モードによる自動化の強化


### 演習の開始方法

演習をあなたのアカウントにコピーするだけです。その後、お気に入りの Octocat（Mona）が最初のレッスンを準備するのに **約 20 秒** 待ってから、**ページを更新**してください。

[![](https://img.shields.io/badge/Copy%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/new?template_owner=joshjones-jp&template_name=create-applications-with-the-copilot-cli-JP&owner=%40me&name=skills-create-applications-with-the-copilot-cli&description=Exercise:+Create+Applications+with+the+Copilot+CLI&visibility=public)

<details>
<summary>うまくいかない場合は？ 🤷</summary><br/>

演習をコピーする際には、以下の設定を推奨します：

- オーナーには、リポジトリをホストする個人アカウントまたは組織を選択してください。

- プライベートリポジトリは Actions の使用時間を消費するため、パブリックリポジトリの作成を推奨します。

20 秒経っても演習の準備ができていない場合は、[Actions](../../actions) タブを確認してください。

- ジョブが実行中かどうか確認してください。時間がかかる場合もあります。

- ページに失敗したジョブが表示されている場合は、Issue を送信してください。バグを発見しましたね！ 🐛

</details>

---

&copy; 2026 GitHub &bull; [行動規範](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT ライセンス](https://gh.io/mit)
