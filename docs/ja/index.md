---
layout: home

hero:
  name: maki-skills
  text: Maki 向けの公開 Codex skill registry。
  tagline: private runtime state を Git に混ぜず、29 個の portable な公開 skill だけを同期します。
  image:
    src: /logo.svg
    alt: maki-skills logo
  actions:
    - theme: brand
      text: セットアップ
      link: /ja/guide/setup
    - theme: alt
      text: Skill カタログ
      link: /ja/guide/catalog

features:
  - title: Public-only by design
    details: 親 repository は公開 GitHub-backed skill submodule だけを tracking し、local/private runtime folder は触りません。
  - title: Windows-first onboarding
    details: setup と update の command は Windows の Codex skill directory 前提です。
  - title: Reviewable skill updates
    details: skill の変更は各 repository に先に入れ、registry では意図した submodule pointer update だけを commit します。
---

## Registry 概要

`maki-skills` は `%USERPROFILE%\.codex\skills` 配下の 29 個の portable な公開 skill を管理する
小さな親 repository です。この directory にある全 folder の mirror ではありません。

新しい PC の bootstrap、公開 skill の確認、skill repository 更新後の submodule pointer 反映に
使います。
