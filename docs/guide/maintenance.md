# Maintenance

The parent repository should stay small and reviewable. Most skill work happens inside
the individual skill repositories.

## Advance A Skill

```powershell
git -C "$env:USERPROFILE\.codex\skills\<skill-name>" pull --ff-only
git -C "$env:USERPROFILE\.codex\skills" status --short
git -C "$env:USERPROFILE\.codex\skills" add <skill-name>
git -C "$env:USERPROFILE\.codex\skills" commit -m "🔧 Update <skill-name> submodule"
```

Commit only the intended submodule pointer update. Leave unrelated local runtime folders,
private skills, and generated files untracked.

## Understand Dirty Submodules

When `git status --short` shows `M <skill-name>`, the parent repository sees a different
submodule commit than the one it has recorded. That can be correct during a planned skill
advance, but it should not leak into README, docs, or workflow-only commits.

Use `git diff --submodule=short -- <skill-name>` to see the recorded pointer and the
current checkout. If the pointer change is intentional, stage that skill directory in its
own commit. If it is unrelated, leave it unstaged and document the local drift in your
signoff.

## Add A Public Skill

1. Publish the skill repository with its own `SKILL.md`, README, and license.
2. Add it as a submodule under `%USERPROFILE%\.codex\skills`.
3. Add the directory to `.gitignore` as an intentional public exception.
4. Update the README and docs catalog.
5. Verify `git submodule status --recursive`.

## Build The Documentation

```powershell
Set-Location "$env:USERPROFILE\.codex\skills\docs"
npm install
npm run docs:build
```

The Pages workflow builds `docs/` and publishes `docs/.vitepress/dist`.

## Branch Pins

Most submodules track `main`, but a few intentionally track a feature or maintenance
branch while that is the public source of truth. Treat the branch value in `.gitmodules`
as reviewable registry metadata, not as a default to rewrite during unrelated cleanup.
