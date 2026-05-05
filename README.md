# maki-skills

Public Codex skill registry for Maki.

This repository is a submodule holder for public skills under `%USERPROFILE%\.codex\skills`.
It intentionally does not track local runtime folders, bundled skills, private skills, or
skills without a public GitHub origin.

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

To advance a skill, update the skill repository first, then commit the submodule pointer in this repository.
