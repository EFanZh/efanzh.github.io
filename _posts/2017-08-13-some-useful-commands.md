---
title: Some useful commands
---

## [pacman](https://www.archlinux.org/pacman/)

### Normalize package dependencies

```bash
comm -23 <(pacman -Qeq) <(pacman -Qeqtt) | xargs -r sudo pacman -D --asdeps
```

## Others

### Bring swap memories back online

```sh
sudo swapoff -a && sudo swapon -a
```
