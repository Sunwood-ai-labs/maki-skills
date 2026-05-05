# 保守

親 repository は小さく、review しやすい状態を保ちます。ほとんどの skill 作業は、
個別の skill repository 側で行います。

## Skill を進める

```powershell
git -C "$env:USERPROFILE\.codex\skills\<skill-name>" pull --ff-only
git -C "$env:USERPROFILE\.codex\skills" status --short
git -C "$env:USERPROFILE\.codex\skills" add <skill-name>
git -C "$env:USERPROFILE\.codex\skills" commit -m "🔧 Update <skill-name> submodule"
```

commit するのは、意図した submodule pointer update だけにします。local runtime folder、
private skill、generated file は tracking しません。

## Dirty submodule を理解する

`git status --short` に `M <skill-name>` が出る場合、親 repository が記録している submodule commit
と、local checkout の commit が違っています。計画した skill update 中なら正しい状態ですが、
README、docs、workflow だけの commit へ混ぜてはいけません。

`git diff --submodule=short -- <skill-name>` で、記録済み pointer と現在の checkout を確認します。
意図した pointer change なら、その skill directory を専用 commit で stage します。無関係なら
unstaged のまま残し、signoff で local drift として明記します。

## 公開 skill を追加する

1. skill repository に `SKILL.md`、README、license を用意して公開します。
2. `%USERPROFILE%\.codex\skills` 配下に submodule として追加します。
3. `.gitignore` に、公開対象として意図した directory exception を追加します。
4. README と docs catalog を更新します。
5. `git submodule status --recursive` を確認します。

## Documentation を build する

```powershell
Set-Location "$env:USERPROFILE\.codex\skills\docs"
npm install
npm run docs:build
```

Pages workflow は `docs/` を build し、`docs/.vitepress/dist` を publish します。

## Branch pin

多くの submodule は `main` を tracking しますが、一部は public source of truth が feature branch
または maintenance branch にあるため、意図して別 branch を tracking しています。`.gitmodules` の
branch value は registry metadata として扱い、無関係な cleanup では書き換えません。
