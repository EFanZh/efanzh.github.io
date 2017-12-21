---
title: Some useful commands
---

## [aptitude](https://aptitude.alioth.debian.org/)

### Normalize package dependencies

```bash
aptitude search -F '%p' '~i !~M (~R~i | ~P~R~i)' | xargs -r aptitude markauto -y
```

### Remove recommended packages.

```bash
aptitude search -F '%p' '!~E ~M !(~R~i | ~P~R~i)' | xargs -r aptitude purge --purge-unused -y
```

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
