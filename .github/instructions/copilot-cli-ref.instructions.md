---
applyTo: "**/**"
---

# プロンプトガイダンス

提供されたプロンプトとコンテキストに従ってください。先のステップに進まないでください。
ユーザーに指示されたときのみ、ファイルの追加、コミット、プッシュを行ってください。

# 新機能

calculator.js へのすべての新機能のリクエストには .github/ISSUE_TEMPLATE/feature_request.md を使用してください。

# グローバルショートカット

```
@             ファイルをメンション、コンテキストに内容を含める
Esc           現在の操作をキャンセル
!             ローカルシェルでコマンドを実行（Copilot をバイパス）
ctrl+c        操作のキャンセル / 入力のクリア / 終了
ctrl+d        シャットダウン
ctrl+l        画面のクリア
```

## タイムラインコンテンツの展開ショートカット

```
Ctrl+o - タイムラインをすべて展開/折りたたむ
Ctrl+r - 最近のタイムラインを展開/折りたたむ
```

## モーションショートカット

```
Ctrl+a - 行の先頭に移動
Ctrl+e - 行の末尾に移動
Ctrl+h - 前の文字を削除
Ctrl+w - 前の単語を削除
Ctrl+u - カーソルから行頭まで削除
Ctrl+k - カーソルから行末まで削除
Meta+←/→ - 単語単位でカーソルを移動
```

コマンド履歴のナビゲーションには ↑↓ キーを使用してください

## 指示のソース

以下の場所からの指示を尊重します：

- `.github/instructions/**/*.instructions.md`（git ルートおよび cwd）
- `.github/copilot-instructions.md`
- `AGENTS.md`（git ルートおよび cwd）
- `CLAUDE.md`
- `GEMINI.md`
- `$HOME/.copilot/copilot-instructions.md`
- `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` による追加ディレクトリ

## 詳細を学ぶ

できることについて：

- 「何ができますか？」と聞いてみてください
- または以下を参照してください：https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli

## 利用可能なコマンド

```
/add-dir <directory> - ファイルアクセスの許可リストにディレクトリを追加
/agent - 利用可能なエージェントを参照して選択（存在する場合）
/clear - 会話履歴をクリア
/compact - コンテキストウィンドウの使用を減らすために会話履歴を要約
/context - コンテキストウィンドウのトークン使用量と視覚化を表示
/cwd [directory] - 作業ディレクトリを変更または現在のディレクトリを表示
/delegate <prompt> - AI が生成した PR でリモートリポジトリに変更を委任
/exit, /quit - CLI を終了
/share [file|gist] [path] - セッションを Markdown ファイルまたは GitHub Gist として共有
/feedback - CLI についてフィードバックを提供
/help - インタラクティブコマンドのヘルプを表示
/list-dirs - ファイルアクセスの許可されたディレクトリをすべて表示
/login - Copilot にログイン
/logout - Copilot からログアウト
/mcp [show|add|edit|delete|disable|enable] [server-name] - MCP サーバー設定を管理
/model [model] - 使用する AI モデルを選択
/reset-allowed-tools - 許可されたツールのリストをリセット
/session - 現在の CLI セッションに関する情報を表示
/skills [list|info|add|remove|reload] [args...] - 拡張機能のためのスキルを管理
/terminal-setup - マルチライン入力サポートのためのターミナルを設定（Shift+Enter と Ctrl+Enter）
/theme [show|set|list] [auto|dark|light] - ターミナルテーマを表示または設定
/usage - セッション使用量のメトリクスと統計を表示
/user [show|list|switch] - GitHub ユーザーリストを管理
```
