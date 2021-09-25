# Some useful commands

## [aptitude](https://wiki.debian.org/Aptitude)

### Normalize package dependencies

```sh
aptitude markauto '~i !~M (~R~i | ~P~R~i)'
```

### Remove recommended packages

```sh
aptitude purge --purge-unused '!~E ~M !(~R~i | ~P~R~i)'
```

## [FFmpeg](https://www.ffmpeg.org)

### Remove sequentially duplicate frames

```sh
ffmpeg -i INPUT_FILE -vf mpdecimate,setpts=N/FRAME_RATE/TB OUTPUT_FILE
```

## [pacman](https://www.archlinux.org/pacman/)

### Normalize package dependencies

```sh
# For Bash.

comm -23 <(pacman -Qeq | sort) <(pacman -Qeqtt | sort) | xargs -r pacman -D --asdeps
```

```
# For Fish.

comm -23 (pacman -Qeq | sort | psub) (pacman -Qeqtt | sort | psub) | xargs -r pacman -D --asdeps
```

### Find packages containing wallpapers

```sh
pacman -Fl | grep -oP '^\S+ (?=usr/share/(wallpapers|backgrounds)/)' | sort -u
```

## [OpenSSL](https://www.openssl.org)

### Generate self-signed certificate

```sh
openssl req \
     -out cert.pem \
     -newkey rsa:4096 \
     -keyout key.pem \
     -nodes \
     -subj /CN=localhost \
     -x509 \
     -days 36500 \
     -addext 'subjectAltName = DNS:localhost'
```

### Create [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) file

```sh
openssl pkcs12 \
    -export \
    -out cert.pfx \
    -in cert.pem \
    -inkey key.pem
```

## [TeXmacs](https://www.texmacs.org)

### Import external fonts

```sh
texmacs -x '(set-preference "imported fonts" "/usr/share/fonts/adobe-source-code-pro:/usr/share/fonts/adobe-source-han-sans:/usr/share/fonts/adobe-source-han-serif:/usr/share/fonts/adobe-source-sans-pro:/usr/share/fonts/adobe-source-serif-pro")
            (font-database-build-local)
            (quit-TeXmacs)'
```

## Others

### Bring swap memories back online

```sh
swapoff -a && swapon -a
```
