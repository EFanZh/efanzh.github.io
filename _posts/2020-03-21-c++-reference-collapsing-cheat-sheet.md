# C++ reference collapsing cheat sheet

| `T`          | `const T`    | `T &`       | `const T &` | `T &&`       | `const T &&` |
|--------------|--------------|-------------|-------------|--------------|--------------|
| `X`          | `const X`    | `X &`       | `const X &` | `X &&`       | `const X &&` |
| `X &`        | `X &`        | `X &`       | `X &`       | `X &`        | `X &`        |
| `X &&`       | `X &&`       | `X &`       | `X &`       | `X &&`       | `X &&`       |
| `const X`    | `const X`    | `const X &` | `const X &` | `const X &&` | `const X &&` |
| `const X &`  | `const X &`  | `const X &` | `const X &` | `const X &`  | `const X &`  |
| `const X &&` | `const X &&` | `const X &` | `const X &` | `const X &&` | `const X &&` |

Proof: <https://gcc.godbolt.org/z/5HRbX3>.
