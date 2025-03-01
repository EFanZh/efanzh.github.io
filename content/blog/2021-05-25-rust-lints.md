+++
title = "Rust Lints"
+++

For Rust version 1.85.0. References:

- <https://doc.rust-lang.org/1.85.0/rustc/lints/listing/allowed-by-default.html>
- <https://rust-lang.github.io/rust-clippy/rust-1.85.0/index.html>

## Allow by default lints

| Lint                                           | Verdict | Comment                            |
| ---------------------------------------------- | ------- | ---------------------------------- |
| `absolute-paths-not-starting-with-crate`       | default | Only applies to 2015 edition.      |
| `ambiguous-negative-literals`                  | warn    |                                    |
| `async-idents`                                 | default |                                    |
| `closure-returning-async-block`                | warn    |                                    |
| `deprecated-safe-2024`                         | default | Only applies to pre-2024 editions. |
| `disjoint-capture-migration`                   | default |                                    |
| `edition-2024-expr-fragment-specifier`         | default |                                    |
| `elided-lifetime-in-path`                      | default |                                    |
| `elided-lifetimes-in-paths`                    | default |                                    |
| `explicit-outlives-requirements`               | warn    |                                    |
| `ffi-unwind-calls`                             | default |                                    |
| `fuzzy-provenance-casts`                       | default |                                    |
| `if-let-rescope`                               | default |                                    |
| `impl-trait-overcaptures`                      | default |                                    |
| `impl-trait-redundant-captures`                | warn    |                                    |
| `keyword-idents`                               | default |                                    |
| `keyword-idents-2018`                          | default |                                    |
| `keyword-idents-2024`                          | default |                                    |
| `let-underscore-drop`                          | warn    |                                    |
| `lossy-provenance-casts`                       | default | Unstable.                          |
| `macro-use-extern-crate`                       | warn    |                                    |
| `meta-variable-misuse`                         | warn    |                                    |
| `missing-abi`                                  | warn    |                                    |
| `missing-copy-implementations`                 | default |                                    |
| `missing-debug-implementations`                | default |                                    |
| `missing-docs`                                 | warn    |                                    |
| `missing-unsafe-on-extern`                     | default |                                    |
| `multiple-supertrait-upcastable`               | default |                                    |
| `must-not-suspend`                             | default | Unstable.                          |
| `non-ascii-idents`                             | default |                                    |
| `non-exhaustive-omitted-patterns`              | default |                                    |
| `or-patterns-back-compat`                      | default |                                    |
| `redundant-imports`                            | warn    |                                    |
| `redundant-lifetimes`                          | warn    |                                    |
| `rust-2021-incompatible-closure-captures`      | default |                                    |
| `rust-2021-incompatible-or-patterns`           | default |                                    |
| `rust-2021-prefixes-incompatible-syntax`       | default |                                    |
| `rust-2021-prelude-collisions`                 | default |                                    |
| `rust-2024-guarded-string-incompatible-syntax` | default |                                    |
| `rust-2024-incompatible-pat`                   | default |                                    |
| `rust-2024-prelude-collisions`                 | default |                                    |
| `single-use-lifetime`                          | default |                                    |
| `single-use-lifetimes`                         | warn    |                                    |
| `tail-expr-drop-order`                         | default |                                    |
| `trivial-casts`                                | warn    |                                    |
| `trivial-numeric-casts`                        | warn    |                                    |
| `unit-bindings`                                | warn    |                                    |
| `unnameable-types`                             | warn    |                                    |
| `unqualified-local-imports`                    | default | Unstable.                          |
| `unreachable-pub`                              | default | See `clippy::redundant-pub-crate`. |
| `unsafe-attr-outside-unsafe`                   | default |                                    |
| `unsafe-code`                                  | warn    |                                    |
| `unsafe-op-in-unsafe-fn`                       | default |                                    |
| `unstable-features`                            | default |                                    |
| `unused-crate-dependencies`                    | warn    |                                    |
| `unused-extern-crates`                         | warn    |                                    |
| `unused-import-braces`                         | warn    |                                    |
| `unused-lifetimes`                             | warn    |                                    |
| `unused-macro-rules`                           | warn    |                                    |
| `unused-qualifications`                        | warn    |                                    |
| `unused-results`                               | default |                                    |
| `variant-size-differences`                     | warn    |                                    |
| `clippy::absolute-paths`                       | default |                                    |
| `clippy::alloc-instead-of-core`                | warn    |                                    |
| `clippy::allow-attributes`                     | warn    |                                    |
| `clippy::allow-attributes-without-reason`      | warn    |                                    |
| `clippy::arbitrary-source-item-ordering`       | default |                                    |
| `clippy::arithmetic-side-effects`              | default |                                    |
| `clippy::as-conversions`                       | warn    |                                    |
| `clippy::as-pointer-underscore`                | default |                                    |
| `clippy::as-underscore`                        | default |                                    |
| `clippy::assertions-on-result-states`          | warn    |                                    |
| `clippy::big-endian-bytes`                     | default |                                    |
| `clippy::cargo`                                | warn    | Group.                             |
| `clippy::cfg-not-test`                         | warn    |                                    |
| `clippy::clone-on-ref-ptr`                     | warn    |                                    |
| `clippy::create-dir`                           | default |                                    |
| `clippy::dbg-macro`                            | warn    |                                    |
| `clippy::decimal-literal-representation`       | default |                                    |
| `clippy::default-numeric-fallback`             | default |                                    |
| `clippy::default-union-representation`         | default |                                    |
| `clippy::deref-by-slicing`                     | warn    |                                    |
| `clippy::disallowed-script-idents`             | default |                                    |
| `clippy::doc-include-without-cfg`              | default |                                    |
| `clippy::else-if-without-else`                 | default |                                    |
| `clippy::empty-drop`                           | warn    |                                    |
| `clippy::empty-enum-variants-with-brackets`    | warn    |                                    |
| `clippy::empty-structs-with-brackets`          | warn    |                                    |
| `clippy::error-impl-error`                     | default |                                    |
| `clippy::exhaustive-enums`                     | default |                                    |
| `clippy::exhaustive-structs`                   | default |                                    |
| `clippy::exit`                                 | default |                                    |
| `clippy::expect-used`                          | default |                                    |
| `clippy::field-scoped-visibility-modifiers`    | warn    |                                    |
| `clippy::filetype-is-file`                     | default |                                    |
| `clippy::float-arithmetic`                     | default |                                    |
| `clippy::float-cmp-const`                      | default |                                    |
| `clippy::fn-to-numeric-cast-any`               | default |                                    |
| `clippy::format-push-string`                   | warn    |                                    |
| `clippy::get-unwrap`                           | warn    |                                    |
| `clippy::host-endian-bytes`                    | default |                                    |
| `clippy::if-then-some-else-none`               | warn    |                                    |
| `clippy::impl-trait-in-params`                 | default |                                    |
| `clippy::implicit-return`                      | default |                                    |
| `clippy::indexing-slicing`                     | default |                                    |
| `clippy::infinite-loop`                        | warn    |                                    |
| `clippy::inline-asm-x86-att-syntax`            | default |                                    |
| `clippy::inline-asm-x86-intel-syntax`          | default |                                    |
| `clippy::integer-division`                     | default |                                    |
| `clippy::integer-division-remainder-used`      | default |                                    |
| `clippy::iter-over-hash-type`                  | default |                                    |
| `clippy::large-include-file`                   | default |                                    |
| `clippy::let-underscore-must-use`              | default |                                    |
| `clippy::let-underscore-untyped`               | default |                                    |
| `clippy::little-endian-bytes`                  | default |                                    |
| `clippy::lossy-float-literal`                  | warn    |                                    |
| `clippy::map-err-ignore`                       | default |                                    |
| `clippy::map-with-unused-argument-over-ranges` | default |                                    |
| `clippy::mem-forget`                           | default |                                    |
| `clippy::min-ident-chars`                      | default |                                    |
| `clippy::missing-assert-message`               | default |                                    |
| `clippy::missing-asserts-for-indexing`         | default |                                    |
| `clippy::missing-docs-in-private-items`        | default |                                    |
| `clippy::missing-inline-in-public-items`       | default |                                    |
| `clippy::missing-trait-methods`                | default |                                    |
| `clippy::mixed-read-write-in-expression`       | default |                                    |
| `clippy::mod-module-files`                     | default |                                    |
| `clippy::module-name-repetitions`              | default |                                    |
| `clippy::modulo-arithmetic`                    | default |                                    |
| `clippy::multiple-inherent-impl`               | default |                                    |
| `clippy::multiple-unsafe-ops-per-block`        | default |                                    |
| `clippy::mutex-atomic`                         | warn    |                                    |
| `clippy::needless-raw-strings`                 | default |                                    |
| `clippy::non-ascii-literal`                    | default |                                    |
| `clippy::non-zero-suggestions`                 | warn    |                                    |
| `clippy::nursery`                              | warn    | Group.                             |
| `clippy::panic`                                | default |                                    |
| `clippy::panic-in-result-fn`                   | warn    |                                    |
| `clippy::partial-pub-fields`                   | default |                                    |
| `clippy::pathbuf-init-then-push`               | default |                                    |
| `clippy::pattern-type-mismatch`                | default |                                    |
| `clippy::pedantic`                             | warn    | Group.                             |
| `clippy::print-stderr`                         | warn    |                                    |
| `clippy::print-stdout`                         | warn    |                                    |
| `clippy::pub-use`                              | default |                                    |
| `clippy::pub-with-shorthand`                   | default |                                    |
| `clippy::pub-without-shorthand`                | default |                                    |
| `clippy::question-mark-used`                   | default |                                    |
| `clippy::rc-buffer`                            | warn    |                                    |
| `clippy::rc-mutex`                             | warn    |                                    |
| `clippy::redundant-type-annotations`           | warn    |                                    |
| `clippy::ref-patterns`                         | default |                                    |
| `clippy::renamed-function-params`              | warn    |                                    |
| `clippy::rest-pat-in-fully-bound-structs`      | warn    |                                    |
| `clippy::same-name-method`                     | warn    |                                    |
| `clippy::self-named-module-files`              | warn    |                                    |
| `clippy::semicolon-inside-block`               | default |                                    |
| `clippy::semicolon-outside-block`              | default |                                    |
| `clippy::separated-literal-suffix`             | default |                                    |
| `clippy::shadow-reuse`                         | default |                                    |
| `clippy::shadow-same`                          | default |                                    |
| `clippy::shadow-unrelated`                     | warn    |                                    |
| `clippy::single-call-fn`                       | default |                                    |
| `clippy::single-char-lifetime-names`           | default |                                    |
| `clippy::std-instead-of-alloc`                 | default |                                    |
| `clippy::std-instead-of-core`                  | default |                                    |
| `clippy::str-to-string`                        | default |                                    |
| `clippy::string-add`                           | default |                                    |
| `clippy::string-lit-chars-any`                 | warn    |                                    |
| `clippy::string-slice`                         | default |                                    |
| `clippy::string-to-string`                     | warn    |                                    |
| `clippy::suspicious-xor-used-as-pow`           | default |                                    |
| `clippy::tests-outside-test-module`            | warn    |                                    |
| `clippy::todo`                                 | warn    |                                    |
| `clippy::try-err`                              | warn    |                                    |
| `clippy::undocumented-unsafe-blocks`           | warn    |                                    |
| `clippy::unimplemented`                        | warn    |                                    |
| `clippy::unnecessary-safety-comment`           | warn    |                                    |
| `clippy::unnecessary-safety-doc`               | warn    |                                    |
| `clippy::unnecessary-self-imports`             | warn    |                                    |
| `clippy::unneeded-field-pattern`               | warn    |                                    |
| `clippy::unreachable`                          | default |                                    |
| `clippy::unseparated-literal-suffix`           | warn    |                                    |
| `clippy::unused-result-ok`                     | default |                                    |
| `clippy::unused-trait-names`                   | default |                                    |
| `clippy::unwrap-in-result`                     | default |                                    |
| `clippy::unwrap-used`                          | default |                                    |
| `clippy::use-debug`                            | warn    |                                    |
| `clippy::verbose-file-reads`                   | warn    |                                    |
| `clippy::wildcard-enum-match-arm`              | default |                                    |

Exceptions:

| Lint                              | Verdict | Comment |
| --------------------------------- | ------- | ------- |
| `clippy::multiple-crate-versions` | allow   |         |

## Summary

Add the following configuration to `Cargo.toml`:

```toml
[lints.rust]
ambiguous-negative-literals = { level = "warn", priority = 1 }
closure-returning-async-block = { level = "warn", priority = 1 }
explicit-outlives-requirements = { level = "warn", priority = 1 }
impl-trait-redundant-captures = { level = "warn", priority = 1 }
let-underscore-drop = { level = "warn", priority = 1 }
macro-use-extern-crate = { level = "warn", priority = 1 }
meta-variable-misuse = { level = "warn", priority = 1 }
missing-abi = { level = "warn", priority = 1 }
missing-docs = { level = "warn", priority = 1 }
redundant-imports = { level = "warn", priority = 1 }
redundant-lifetimes = { level = "warn", priority = 1 }
single-use-lifetimes = { level = "warn", priority = 1 }
trivial-casts = { level = "warn", priority = 1 }
trivial-numeric-casts = { level = "warn", priority = 1 }
unit-bindings = { level = "warn", priority = 1 }
unnameable-types = { level = "warn", priority = 1 }
unsafe-code = { level = "warn", priority = 1 }
unused-crate-dependencies = { level = "warn", priority = 1 }
unused-extern-crates = { level = "warn", priority = 1 }
unused-import-braces = { level = "warn", priority = 1 }
unused-lifetimes = { level = "warn", priority = 1 }
unused-macro-rules = { level = "warn", priority = 1 }
unused-qualifications = { level = "warn", priority = 1 }
variant-size-differences = { level = "warn", priority = 1 }

[lints.clippy]
alloc-instead-of-core = { level = "warn", priority = 1 }
allow-attributes = { level = "warn", priority = 1 }
allow-attributes-without-reason = { level = "warn", priority = 1 }
as-conversions = { level = "warn", priority = 1 }
assertions-on-result-states = { level = "warn", priority = 1 }
cargo = "warn"
cfg-not-test = { level = "warn", priority = 1 }
clone-on-ref-ptr = { level = "warn", priority = 1 }
dbg-macro = { level = "warn", priority = 1 }
deref-by-slicing = { level = "warn", priority = 1 }
empty-drop = { level = "warn", priority = 1 }
empty-enum-variants-with-brackets = { level = "warn", priority = 1 }
empty-structs-with-brackets = { level = "warn", priority = 1 }
field-scoped-visibility-modifiers = { level = "warn", priority = 1 }
format-push-string = { level = "warn", priority = 1 }
get-unwrap = { level = "warn", priority = 1 }
if-then-some-else-none = { level = "warn", priority = 1 }
infinite-loop = { level = "warn", priority = 1 }
lossy-float-literal = { level = "warn", priority = 1 }
multiple-crate-versions = { level = "allow", priority = 1 }
mutex-atomic = { level = "warn", priority = 1 }
non-zero-suggestions = { level = "warn", priority = 1 }
nursery = "warn"
panic-in-result-fn = { level = "warn", priority = 1 }
pedantic = "warn"
print-stderr = { level = "warn", priority = 1 }
print-stdout = { level = "warn", priority = 1 }
rc-buffer = { level = "warn", priority = 1 }
rc-mutex = { level = "warn", priority = 1 }
redundant-type-annotations = { level = "warn", priority = 1 }
renamed-function-params = { level = "warn", priority = 1 }
rest-pat-in-fully-bound-structs = { level = "warn", priority = 1 }
same-name-method = { level = "warn", priority = 1 }
self-named-module-files = { level = "warn", priority = 1 }
shadow-unrelated = { level = "warn", priority = 1 }
string-lit-chars-any = { level = "warn", priority = 1 }
string-to-string = { level = "warn", priority = 1 }
tests-outside-test-module = { level = "warn", priority = 1 }
todo = { level = "warn", priority = 1 }
try-err = { level = "warn", priority = 1 }
undocumented-unsafe-blocks = { level = "warn", priority = 1 }
unimplemented = { level = "warn", priority = 1 }
unnecessary-safety-comment = { level = "warn", priority = 1 }
unnecessary-safety-doc = { level = "warn", priority = 1 }
unnecessary-self-imports = { level = "warn", priority = 1 }
unneeded-field-pattern = { level = "warn", priority = 1 }
unseparated-literal-suffix = { level = "warn", priority = 1 }
use-debug = { level = "warn", priority = 1 }
verbose-file-reads = { level = "warn", priority = 1 }
```

## `.clippy.toml` Configuration

```toml
avoid-breaking-exported-api = false
warn-on-all-wildcard-imports = true
```
