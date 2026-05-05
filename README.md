# maki-skills

Public Codex skill registry for Maki.

This repository is a submodule holder for public skills under `%USERPROFILE%\.codex\skills`.
It intentionally does not track local runtime folders, bundled skills, private skills, or
skills without a public GitHub origin.

This registry currently tracks 29 public skill repositories as submodules.

## Setup

```powershell
git clone --recurse-submodules https://github.com/Sunwood-ai-labs/maki-skills.git "$env:USERPROFILE\.codex\skills"
git -C "$env:USERPROFILE\.codex\skills" submodule update --init --recursive
```

## Update

```powershell
git -C "$env:USERPROFILE\.codex\skills" pull --ff-only
git -C "$env:USERPROFILE\.codex\skills" submodule update --init --recursive
```

## Skills

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

To advance a skill, update the skill repository first, then commit the submodule pointer in this repository.
