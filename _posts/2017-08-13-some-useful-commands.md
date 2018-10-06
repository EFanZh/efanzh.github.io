---
---

# Some useful commands

## [aptitude](https://aptitude.alioth.debian.org/)

### Normalize package dependencies

```bash
aptitude search -F '%p' '~i !~M (~R~i | ~P~R~i)' | xargs -r aptitude markauto -y
```

### Remove recommended packages

```bash
aptitude search -F '%p' '!~E ~M !(~R~i | ~P~R~i)' | xargs -r aptitude purge --purge-unused -y
```

## [FFmpeg](https://www.ffmpeg.org)

### Remove remove sequentially duplicate frames

```bash
ffmpeg -i INPUT_FILE -vf mpdecimate,setpts=N/FRAME_RATE/TB OUTPUT_FILE
```

## [pacman](https://www.archlinux.org/pacman/)

### Normalize package dependencies

```bash
# For Bash.

comm -23 <(pacman -Qeq) <(pacman -Qeqtt) | xargs -r pacman -D --asdeps
```

```
# For Fish.

comm -23 (pacman -Qeq | psub) (pacman -Qeqtt | psub) | xargs -r pacman -D --asdeps
```

## Others

### Bring swap memories back online

```sh
# For sh.

swapoff -a && swapon -a
```

```
# For Fish.

swapoff -a; and swapon -a
```
