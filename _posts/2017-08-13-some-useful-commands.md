---
title: Some useful commands
---

## [Pacman](https://www.archlinux.org/pacman/)

### Normalize package dependencies

```sh
comm -23 <(pacman -Qeq) <(pacman -Qeqtt) | xargs sudo pacman -D --asdep
```