---
layout: home

hero:
  name: maki-skills
  text: Public Codex skill registry for Maki.
  tagline: Keep 29 portable, public skills synchronized without pulling private runtime state into Git.
  image:
    src: /logo.svg
    alt: maki-skills logo
  actions:
    - theme: brand
      text: Setup
      link: /guide/setup
    - theme: alt
      text: Skill Catalog
      link: /guide/catalog

features:
  - title: Public-only by design
    details: The parent repository tracks public GitHub-backed skill submodules and leaves local/private runtime folders untouched.
  - title: Windows-first onboarding
    details: Setup and update commands are written for the Codex skill directory on Windows.
  - title: Reviewable skill updates
    details: Skill changes land in their own repositories first, then the registry commits intentional submodule pointer updates.
---

## Registry At A Glance

`maki-skills` is a small parent repository for 29 portable Codex skills under
`%USERPROFILE%\.codex\skills`. It is not a mirror of every local folder in that
directory.

Use this site when you need to bootstrap a fresh machine, audit which public skills are
tracked, or update a submodule pointer after a skill repository changes.
