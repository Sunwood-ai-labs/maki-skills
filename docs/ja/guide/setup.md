# セットアップ

この registry は、skill を `%USERPROFILE%\.codex\skills` に置く Windows Codex environment
を前提にしています。

## Registry を clone する

```powershell
git clone --recurse-submodules https://github.com/Sunwood-ai-labs/maki-skills.git "$env:USERPROFILE\.codex\skills"
git -C "$env:USERPROFILE\.codex\skills" submodule update --init --recursive
```

## 既存 checkout を更新する

```powershell
git -C "$env:USERPROFILE\.codex\skills" pull --ff-only
git -C "$env:USERPROFILE\.codex\skills" submodule update --init --recursive
```

## Local に残すもの

親 repository は、公開すべきでない folder を ignore します。

- `.system` のような bundled runtime folder
- private または machine-specific な skill
- `node_modules` のような dependency folder
- documentation の generated build output

local skill を portable にしたい場合は、先に skill repository を公開してから、意図した
`.gitmodules` entry として submodule に追加します。
