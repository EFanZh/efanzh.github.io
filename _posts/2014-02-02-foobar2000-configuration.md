# EFanZh’s foobar2000 configuration

## Components

| Module               | Name                    | Link                                                              |
| -------------------- | ----------------------- | ----------------------------------------------------------------- |
| foo_playcount        | Playback Statistics     | <https://www.foobar2000.org/components/view/foo_playcount>        |
| foo_uie_lyrics3      | Lyric Show Panel 3      | <https://www.foobar2000.org/components/view/foo_uie_lyrics3>      |
| foo_verifier         | File Integrity Verifier | <https://www.foobar2000.org/components/view/foo_verifier>         |
| foo_wave_minibar_mod | Waveform Minibar (mod)  | <https://www.foobar2000.org/components/view/foo_wave_minibar_mod> |

## Display

### Default User Interface

- Theme management
  - Import Theme: [EFanZh’s foobar2000 theme](https://efanzh.org/resources/foobar2000-theme.fth)
  - System notification area
    - [x] Always show notification area icon
    - [x] Minimize to notification area

## Keyboard shortcuts

| Shortcut               | Global | Type      | Action                                    |
| ---------------------- | ------ | --------- | ----------------------------------------- |
| `Alt` + `0`            | No     | [context] | Playback Statistics / Rating / \<not set> |
| `Alt` + `1`            | No     | [context] | Playback Statistics / Rating / 1          |
| `Alt` + `2`            | No     | [context] | Playback Statistics / Rating / 2          |
| `Alt` + `3`            | No     | [context] | Playback Statistics / Rating / 3          |
| `Alt` + `4`            | No     | [context] | Playback Statistics / Rating / 4          |
| `Alt` + `5`            | No     | [context] | Playback Statistics / Rating / 5          |
| `Ctrl` + `Alt` + `F10` | Yes    | [main]    | Playback / Previous                       |
| `Ctrl` + `Alt` + `F11` | Yes    | [main]    | Playback / Next                           |
| `Ctrl` + `Alt` + `F12` | Yes    | [main]    | Playback / Play or pause                  |
| `J`                    | No     | [main]    | Playback / Next                           |
| `K`                    | No     | [main]    | Playback / Previous                       |
| `Left`                 | No     | [main]    | Playback / Seek / Back by 5 seconds       |
| `Right`                | No     | [main]    | Playback / Seek / Ahead by 5 seconds      |
| `Shift` + `Delete`     | No     | [context] | Delete file(s)                            |
| `Space`                | No     | [main]    | Playback / Play or pause                  |

## Media Library

- Library viewer selection playlist
  - [x] Enabled

## Playback

- Other
  - [x] Cursor follows playback

## Shell Integration

- [x] Always send new files to playlist: Default

## Custom column schemes

| Name             | Pattern                                                                                               | Alignment |
| ---------------- | ----------------------------------------------------------------------------------------------------- | --------- |
| Title // Artists | `>>>%title%<<<[ <<'//' %track artist%>>][ <<'//' %performer%>>]`                                      | Left      |
| Rating           | `$if2(%rating_stars_fixed%,☆☆☆☆☆)`                                                                    | Left      |
| Play Count       | `%play_count%`                                                                                        | Right     |
| Sort             | `%genre% / %album artist% / %date% / %album% / %discnumber% / %tracknumber% / %title%`                | Left      |
| Sort 2           | `%play_count% / %genre% / %album artist% / %date% / %album% / %discnumber% / %tracknumber% / %title%` | Left      |

## Custom grouping schemes

| Name                           | Pattern                                   |
| ------------------------------ | ----------------------------------------- |
| By Album Artist - Album [Date] | `%album artist% - %album%[ '['%date%']']` |

## Misc

| Name                       | Pattern                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------- |
| Standard file name pattern | `$if(%tracknumber%,[%discnumber%.]%tracknumber%. ,%artist% - )%title%`                                  |
| Standard file path pattern | `Artists\%album artist%\%album%\$if(%tracknumber%,[%discnumber%.]%tracknumber%. ,[%artist% - ])%title%` |
