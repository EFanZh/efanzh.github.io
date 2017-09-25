---
title: Some useful commands
---

## [pacman](https://www.archlinux.org/pacman/)

### Normalize package dependencies

```bash
# For Bash.

comm -23 <(pacman -Qeq) <(pacman -Qeqtt) | xargs -r sudo pacman -D --asdeps
```

```fish
# For Fish.

comm -23 (pacman -Qeq | psub) (pacman -Qeqtt | psub) | xargs -r sudo pacman -D --asdeps
```

## Others

### Bring swap memories back online

```sh
# For sh.

sudo swapoff -a && sudo swapon -a
```

```fish
# For Fish.

sudo swapoff -a; and sudo swapon -a
```
