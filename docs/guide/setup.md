# Setup

This registry is designed for Windows Codex environments where skills live under
`%USERPROFILE%\.codex\skills`.

## Clone The Registry

```powershell
git clone --recurse-submodules https://github.com/Sunwood-ai-labs/maki-skills.git "$env:USERPROFILE\.codex\skills"
git -C "$env:USERPROFILE\.codex\skills" submodule update --init --recursive
```

## Update An Existing Checkout

```powershell
git -C "$env:USERPROFILE\.codex\skills" pull --ff-only
git -C "$env:USERPROFILE\.codex\skills" submodule update --init --recursive
```

## What Stays Local

The parent repository ignores folders that should not be published:

- bundled runtime folders such as `.system`
- private or machine-specific skills
- dependency folders such as `node_modules`
- generated documentation build output

If a local skill should become portable, publish the skill repository first, then add it
as a submodule with an intentional `.gitmodules` entry.
