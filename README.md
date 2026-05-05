# maki-skills

Public Codex skill submodule registry for Maki.

[![Docs](https://img.shields.io/badge/docs-GitHub%20Pages-2f6fef)](https://sunwood-ai-labs.github.io/maki-skills/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Submodules](https://img.shields.io/badge/public%20skills-29-blue)](.gitmodules)

[日本語](README.ja.md) | [Documentation](https://sunwood-ai-labs.github.io/maki-skills/)

This repository is a submodule holder for public skills under `%USERPROFILE%\.codex\skills`.
It intentionally does not track local runtime folders, bundled skills, private skills, or
skills without a public GitHub origin.

This registry currently tracks 29 public skill repositories as submodules.

## 🚀 Quick Start

```powershell
git clone --recurse-submodules https://github.com/Sunwood-ai-labs/maki-skills.git "$env:USERPROFILE\.codex\skills"
git -C "$env:USERPROFILE\.codex\skills" submodule update --init --recursive
```

## 🔄 Update

```powershell
git -C "$env:USERPROFILE\.codex\skills" pull --ff-only
git -C "$env:USERPROFILE\.codex\skills" submodule update --init --recursive
```

## 🧩 Skill Catalog

| Skill | Repository |
| --- | --- |
| `android-termux-ssh-bootstrap` | `Sunwood-ai-labs/android-termux-ssh-bootstrap-skill` |
| `cc-orchestrator-cli-skill` | `Sunwood-ai-labs/cc-orchestrator-cli-skill` |
| `codex-spark-eclipse-legion` | `Sunwood-ai-labs/codex-spark-eclipse-legion` |
| `comfyui-workflow-node-dev` | `Sunwood-ai-labs/comfyui-workflow-node-dev` |
| `draw-io` | `Sunwood-ai-labs/draw-io-skill` |
| `frontend-design` | `Sunwood-ai-labs/frontend-design-skill` |
| `gas-slack-bot` | `Sunwood-ai-labs/gas-slack-bot-skill` |
| `gh-release-notes` | `Sunwood-ai-labs/gh-release-notes-skill` |
| `git-flow-skill` | `Sunwood-ai-labs/git-flow-skill` |
| `github-project` | `onizuka-agi-co/github-project-skill` |
| `gsap` | `Sunwood-ai-labs/gsap-skill` |
| `hyperframes` | `Sunwood-ai-labs/hyperframes-skill` |
| `hyperframes-cli` | `Sunwood-ai-labs/hyperframes-cli-skill` |
| `hyperframes-registry` | `Sunwood-ai-labs/hyperframes-registry-skill` |
| `jupytext-skill` | `Sunwood-ai-labs/jupytext-skill` |
| `logged-in-google-chrome` | `Sunwood-ai-labs/logged-in-google-chrome-skill` |
| `m5stack-arduino-cli` | `Sunwood-ai-labs/m5stack-arduino-cli-skill` |
| `midnight-memory` | `Sunwood-ai-labs/midnight-memory` |
| `playwright-interactive` | `Sunwood-ai-labs/playwright-interactive-skill` |
| `remotion` | `Sunwood-ai-labs/remotion-skill` |
| `render-svg-layouts` | `Sunwood-ai-labs/render-svg-layouts-skill` |
| `repository-polish` | `Sunwood-ai-labs/repository-polish-skill` |
| `skill-setup` | `Sunwood-ai-labs/skill-setup-skill` |
| `sourcesage-cli` | `Sunwood-ai-labs/SourceSage` |
| `svg-header-layout-checker` | `Sunwood-ai-labs/svg-header-layout-checker-skill` |
| `svg-header-layout-lint` | `Sunwood-ai-labs/svg-header-layout-lint` |
| `timberborn-modding` | `Sunwood-ai-labs/timberborn-modding-skill` |
| `topview-skill` | `Sunwood-ai-labs/topview-skill` |
| `website-to-hyperframes` | `Sunwood-ai-labs/website-to-hyperframes-skill` |

## 🛠️ Maintaining the Registry

To advance a skill, update that skill repository first, then commit only the changed
submodule pointer in this repository.

```powershell
git -C "$env:USERPROFILE\.codex\skills\<skill-name>" pull --ff-only
git -C "$env:USERPROFILE\.codex\skills" status --short
git -C "$env:USERPROFILE\.codex\skills" add <skill-name>
git -C "$env:USERPROFILE\.codex\skills" commit -m "🔧 Update <skill-name> submodule"
```

Before committing, confirm that `.gitignore` is still protecting local-only skills and
runtime directories. The parent repository should normally commit `.gitmodules`, README
and docs files, workflows, license metadata, or intentional submodule pointer updates.

## 🩺 Troubleshooting

If a skill directory is missing after clone, initialize submodules again.

```powershell
git -C "$env:USERPROFILE\.codex\skills" submodule update --init --recursive
```

If `git status --short` shows `M <skill-name>`, the local submodule checkout differs from
the pointer recorded by the parent repository. Commit that pointer only when the skill
advance is intentional; otherwise leave it out of unrelated registry commits.

Some entries in `.gitmodules` track non-`main` branches because the public skill source
currently lives there. Treat those branch pins as registry metadata and change them only
with the corresponding skill update.

## 📚 Documentation

The browsable documentation lives in `docs/` and is built with VitePress.

```powershell
Set-Location "$env:USERPROFILE\.codex\skills\docs"
npm install
npm run docs:build
```

GitHub Pages is deployed from `.github/workflows/deploy-docs.yml` after changes land on
`main`.

## 🧭 Repository Layout

```text
.
├─ .github/workflows/        # GitHub Pages deployment
├─ docs/                     # VitePress documentation
├─ <skill-name>/             # Public skill submodules
├─ .gitmodules               # Source repositories and tracked branches
├─ .gitignore                # Local runtime/private skill guardrails
├─ README.md                 # English overview
└─ README.ja.md              # Japanese overview
```

## 📄 License

This registry is released under the [MIT License](LICENSE). Individual skill
submodules retain the licenses declared in their own repositories.
