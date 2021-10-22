# Rust lints

For Rust version 1.56.0. References:

- <https://doc.rust-lang.org/1.56.0/rustc/lints/listing/allowed-by-default.html>
- <https://rust-lang.github.io/rust-clippy/rust-1.56.0/index.html>

## Allow by default lints

| Lint                                      | Verdict | Comment                            |
| ----------------------------------------- | ------- | ---------------------------------- |
| `absolute_paths_not_starting_with_crate`  | default |                                    |
| `box_pointers`                            | default |                                    |
| `elided_lifetimes_in_paths`               | default |                                    |
| `explicit_outlives_requirements`          | warn    |                                    |
| `keyword_idents`                          | default |                                    |
| `macro_use_extern_crate`                  | warn    |                                    |
| `meta_variable_misuse`                    | warn    |                                    |
| `missing_abi`                             | warn    |                                    |
| `missing_copy_implementations`            | default |                                    |
| `missing_debug_implementations`           | default |                                    |
| `missing_docs`                            | warn    |                                    |
| `non_ascii_idents`                        | default |                                    |
| `noop_method_call`                        | warn    |                                    |
| `pointer_structural_match`                | warn    |                                    |
| `rust_2021_incompatible_closure_captures` | default |                                    |
| `rust_2021_incompatible_or_patterns`      | default |                                    |
| `rust_2021_prefixes_incompatible_syntax`  | default |                                    |
| `rust_2021_prelude_collisions`            | default |                                    |
| `single_use_lifetimes`                    | warn    | Has false positives.               |
| `trivial_casts`                           | warn    |                                    |
| `trivial_numeric_casts`                   | warn    |                                    |
| `unreachable_pub`                         | default | See `clippy::redundant_pub_crate`. |
| `unsafe_code`                             | warn    |                                    |
| `unsafe_op_in_unsafe_fn`                  | warn    |                                    |
| `unstable_features`                       | default |                                    |
| `unused_crate_dependencies`               | warn    |                                    |
| `unused_extern_crates`                    | warn    |                                    |
| `unused_import_braces`                    | warn    |                                    |
| `unused_lifetimes`                        | warn    |                                    |
| `unused_qualifications`                   | warn    |                                    |
| `unused_results`                          | default |                                    |
| `variant_size_differences`                | warn    |                                    |
| `clippy::as_conversions`                  | default |                                    |
| `clippy::cargo_common_metadata`           | warn    |                                    |
| `clippy::clone_on_ref_ptr`                | warn    |                                    |
| `clippy::cognitive_complexity`            | warn    |                                    |
| `clippy::create_dir`                      | warn    |                                    |
| `clippy::dbg_macro`                       | warn    |                                    |
| `clippy::debug_assert_with_mut_call`      | warn    |                                    |
| `clippy::decimal_literal_representation`  | default |                                    |
| `clippy::default_numeric_fallback`        | default |                                    |
| `clippy::disallowed_method`               | default |                                    |
| `clippy::disallowed_script_idents`        | default |                                    |
| `clippy::disallowed_type`                 | default |                                    |
| `clippy::else_if_without_else`            | default |                                    |
| `clippy::empty_line_after_outer_attr`     | warn    |                                    |
| `clippy::exhaustive_enums`                | default |                                    |
| `clippy::exhaustive_structs`              | default |                                    |
| `clippy::exit`                            | default |                                    |
| `clippy::expect_used`                     | default |                                    |
| `clippy::fallible_impl_from`              | warn    |                                    |
| `clippy::filetype_is_file`                | warn    |                                    |
| `clippy::float_arithmetic`                | default |                                    |
| `clippy::float_cmp_const`                 | warn    |                                    |
| `clippy::future_not_send`                 | default |                                    |
| `clippy::get_unwrap`                      | warn    |                                    |
| `clippy::if_then_some_else_none`          | warn    |                                    |
| `clippy::implicit_return`                 | default |                                    |
| `clippy::imprecise_flops`                 | warn    |                                    |
| `clippy::indexing_slicing`                | default |                                    |
| `clippy::inline_asm_x86_att_syntax`       | default |                                    |
| `clippy::inline_asm_x86_intel_syntax`     | default |                                    |
| `clippy::integer_arithmetic`              | default |                                    |
| `clippy::integer_division`                | default |                                    |
| `clippy::let_underscore_must_use`         | warn    |                                    |
| `clippy::lossy_float_literal`             | warn    |                                    |
| `clippy::map_err_ignore`                  | default |                                    |
| `clippy::mem_forget`                      | default |                                    |
| `clippy::missing_const_for_fn`            | default |                                    |
| `clippy::missing_docs_in_private_items`   | default |                                    |
| `clippy::missing_enforced_import_renames` | default |                                    |
| `clippy::missing_inline_in_public_items`  | default |                                    |
| `clippy::modulo_arithmetic`               | default |                                    |
| `clippy::multiple_crate_versions`         | default |                                    |
| `clippy::multiple_inherent_impl`          | warn    |                                    |
| `clippy::mutex_integer`                   | warn    |                                    |
| `clippy::nonstandard_macro_braces`        | warn    |                                    |
| `clippy::panic`                           | default |                                    |
| `clippy::panic_in_result_fn`              | warn    |                                    |
| `clippy::path_buf_push_overwrite`         | warn    |                                    |
| `clippy::pattern_type_mismatch`           | default |                                    |
| `clippy::pedantic`                        | warn    |                                    |
| `clippy::print_stderr`                    | default |                                    |
| `clippy::print_stdout`                    | default |                                    |
| `clippy::rc_buffer`                       | warn    |                                    |
| `clippy::rc_mutex`                        | warn    |                                    |
| `clippy::redundant_pub_crate`             | default | See `unreachable_pub`.             |
| `clippy::rest_pat_in_fully_bound_structs` | warn    |                                    |
| `clippy::shadow_reuse`                    | default |                                    |
| `clippy::shadow_same`                     | default |                                    |
| `clippy::str_to_string`                   | default | To pair with `[T]::to_vec()`.      |
| `clippy::string_add`                      | default |                                    |
| `clippy::string_lit_as_bytes`             | warn    |                                    |
| `clippy::string_to_string`                | warn    |                                    |
| `clippy::suboptimal_flops`                | warn    |                                    |
| `clippy::suspicious_operation_groupings`  | warn    |                                    |
| `clippy::todo`                            | warn    |                                    |
| `clippy::trivial_regex`                   | warn    |                                    |
| `clippy::unimplemented`                   | warn    |                                    |
| `clippy::unnecessary_self_imports`        | warn    |                                    |
| `clippy::unneeded_field_pattern`          | warn    |                                    |
| `clippy::unreachable`                     | default |                                    |
| `clippy::unwrap_in_result`                | default |                                    |
| `clippy::unwrap_used`                     | default |                                    |
| `clippy::use_debug`                       | warn    |                                    |
| `clippy::use_self`                        | warn    |                                    |
| `clippy::useless_let_if_seq`              | warn    |                                    |
| `clippy::useless_transmute`               | warn    |                                    |
| `clippy::verbose_file_reads`              | warn    |                                    |
| `clippy::wildcard_dependencies`           | warn    |                                    |
| `clippy::wildcard_enum_match_arm`         | default |                                    |

Exceptions:

| Lint                        | Verdict | Comment                  |
| --------------------------- | ------- | ------------------------ |
| `clippy::non_ascii_literal` | allow   | From `clippy::pedantic`. |

## Summary

Personal projects:

```rust
#![warn(
    explicit_outlives_requirements,
    macro_use_extern_crate,
    meta_variable_misuse,
    missing_abi,
    missing_docs,
    noop_method_call,
    pointer_structural_match,
    single_use_lifetimes,
    trivial_casts,
    trivial_numeric_casts,
    unsafe_code,
    unsafe_op_in_unsafe_fn,
    unused_crate_dependencies,
    unused_extern_crates,
    unused_import_braces,
    unused_lifetimes,
    unused_qualifications,
    variant_size_differences,
    clippy::cargo_common_metadata,
    clippy::clone_on_ref_ptr,
    clippy::cognitive_complexity,
    clippy::create_dir,
    clippy::dbg_macro,
    clippy::debug_assert_with_mut_call,
    clippy::empty_line_after_outer_attr,
    clippy::fallible_impl_from,
    clippy::filetype_is_file,
    clippy::float_cmp_const,
    clippy::get_unwrap,
    clippy::if_then_some_else_none,
    clippy::imprecise_flops,
    clippy::let_underscore_must_use,
    clippy::lossy_float_literal,
    clippy::multiple_inherent_impl,
    clippy::mutex_integer,
    clippy::nonstandard_macro_braces,
    clippy::panic_in_result_fn,
    clippy::path_buf_push_overwrite,
    clippy::pedantic,
    clippy::rc_buffer,
    clippy::rc_mutex,
    clippy::rest_pat_in_fully_bound_structs,
    clippy::string_lit_as_bytes,
    clippy::string_to_string,
    clippy::suboptimal_flops,
    clippy::suspicious_operation_groupings,
    clippy::todo,
    clippy::trivial_regex,
    clippy::unimplemented,
    clippy::unnecessary_self_imports,
    clippy::unneeded_field_pattern,
    clippy::use_debug,
    clippy::use_self,
    clippy::useless_let_if_seq,
    clippy::useless_transmute,
    clippy::verbose_file_reads,
    clippy::wildcard_dependencies,
)]
#![allow(clippy::non_ascii_literal)]
```
