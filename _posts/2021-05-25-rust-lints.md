# Rust lints

For Rust version 1.52.1. References:

- <https://doc.rust-lang.org/1.52.1/rustc/lints/listing/allowed-by-default.html>
- <https://rust-lang.github.io/rust-clippy/rust-1.52.0/index.html>

## Allow by default lints

| Lint                                      | Verdict     | Comment                       |
| ----------------------------------------- | ----------- | ----------------------------- |
| `absolute_paths_not_starting_with_crate`  | allow       |                               |
| `anonymous_parameters`                    | default     |                               |
| `box_pointers`                            | allow       |                               |
| `disjoint_capture_drop_reorder`           | check       |                               |
| `elided_lifetimes_in_paths`               | allow       |                               |
| `explicit_outlives_requirements`          | warn        |                               |
| `keyword_idents`                          | default     |                               |
| `macro_use_extern_crate`                  | warn        |                               |
| `meta_variable_misuse`                    | warn        |                               |
| `missing_abi`                             | warn        |                               |
| `missing_copy_implementations`            | check       |                               |
| `missing_debug_implementations`           | allow       |                               |
| `missing_docs`                            | production  |                               |
| `non_ascii_idents`                        | allow       |                               |
| `noop_method_call`                        | warn        |                               |
| `pointer_structural_match`                | warn        |                               |
| `semicolon_in_expressions_from_macros`    | warn        |                               |
| `single_use_lifetimes`                    | check       | Has false positives.          |
| `trivial_casts`                           | warn        |                               |
| `trivial_numeric_casts`                   | warn        |                               |
| `unaligned_references`                    | warn        |                               |
| `unreachable_pub`                         | default     | See `clippy::unreachable`.    |
| `unsafe_code`                             | conditional |                               |
| `unsafe_op_in_unsafe_fn`                  | warn        |                               |
| `unstable_features`                       | default     |                               |
| `unused_crate_dependencies`               | warn        |                               |
| `unused_extern_crates`                    | warn        |                               |
| `unused_import_braces`                    | warn        |                               |
| `unused_lifetimes`                        | warn        |                               |
| `unused_qualifications`                   | warn        |                               |
| `unused_results`                          | check       |                               |
| `variant_size_differences`                | warn        |                               |
| `clippy::as_conversions`                  | default     |                               |
| `clippy::cargo_common_metadata`           | production  |                               |
| `clippy::clone_on_ref_ptr`                | warn        |                               |
| `clippy::cognitive_complexity`            | warn        |                               |
| `clippy::create_dir`                      | check       |                               |
| `clippy::dbg_macro`                       | check       |                               |
| `clippy::debug_assert_with_mut_call`      | warn        |                               |
| `clippy::decimal_literal_representation`  | allow       |                               |
| `clippy::default_numeric_fallback`        | allow       |                               |
| `clippy::disallowed_method`               | default     |                               |
| `clippy::else_if_without_else`            | allow       |                               |
| `clippy::empty_line_after_outer_attr`     | warn        |                               |
| `clippy::exhaustive_enums`                | allow       |                               |
| `clippy::exhaustive_structs`              | allow       |                               |
| `clippy::exit`                            | allow       |                               |
| `clippy::expect_used`                     | check       |                               |
| `clippy::fallible_impl_from`              | warn        |                               |
| `clippy::filetype_is_file`                | check       |                               |
| `clippy::float_arithmetic`                | allow       |                               |
| `clippy::float_cmp_const`                 | default     |                               |
| `clippy::future_not_send`                 | allow       |                               |
| `clippy::get_unwrap`                      | warn        |                               |
| `clippy::implicit_return`                 | allow       |                               |
| `clippy::imprecise_flops`                 | warn        |                               |
| `clippy::indexing_slicing`                | allow       |                               |
| `clippy::inline_asm_x86_att_syntax`       | allow       |                               |
| `clippy::inline_asm_x86_intel_syntax`     | allow       |                               |
| `clippy::integer_arithmetic`              | check       |                               |
| `clippy::integer_division`                | allow       |                               |
| `clippy::let_underscore_must_use`         | warn        |                               |
| `clippy::lossy_float_literal`             | warn        |                               |
| `clippy::map_err_default`                 | check       |                               |
| `clippy::mem_forget`                      | check       |                               |
| `clippy::missing_const_for_fn`            | check       |                               |
| `clippy::missing_docs_in_private_items`   | allow       |                               |
| `clippy::missing_inline_in_public_items`  | allow       |                               |
| `clippy::modulo_arithmetic`               | allow       |                               |
| `clippy::multiple_crate_versions`         | check       |                               |
| `clippy::multiple_inherent_impl`          | warn        |                               |
| `clippy::mutex_integer`                   | warn        |                               |
| `clippy::needless_borrow`                 | warn        |                               |
| `clippy::panic`                           | warn        |                               |
| `clippy::panic_in_result_fn`              | warn        |                               |
| `clippy::path_buf_push_overwrite`         | warn        |                               |
| `clippy::pattern_type_mismatch`           | allow       |                               |
| `clippy::pedantic`                        | warn        |                               |
| `clippy::print_stderr`                    | check       |                               |
| `clippy::print_stdout`                    | check       |                               |
| `clippy::rc_buffer`                       | warn        |                               |
| `clippy::redundant_pub_crate`             | default     | See `unreachable_pub`.        |
| `clippy::rest_pat_in_fully_bound_structs` | warn        |                               |
| `clippy::semicolon_if_nothing_returned`   | warn        |                               |
| `clippy::shadow_reuse`                    | allow       |                               |
| `clippy::shadow_same`                     | allow       |                               |
| `clippy::str_to_string`                   | allow       | To pair with `[T]::to_vec()`. |
| `clippy::string_add`                      | allow       |                               |
| `clippy::string_lit_as_bytes`             | warn        |                               |
| `clippy::string_to_string`                | warn        |                               |
| `clippy::suboptimal_flops`                | warn        |                               |
| `clippy::todo`                            | warn        |                               |
| `clippy::trivial_regex`                   | warn        |                               |
| `clippy::unimplemented`                   | warn        |                               |
| `clippy::unneeded_field_pattern`          | warn        |                               |
| `clippy::unreachable`                     | allow       |                               |
| `clippy::unwrap_in_result`                | check       |                               |
| `clippy::unwrap_used`                     | check       |                               |
| `clippy::use_debug`                       | warn        |                               |
| `clippy::use_self`                        | warn        |                               |
| `clippy::useless_let_if_seq`              | warn        |                               |
| `clippy::useless_transmute`               | warn        |                               |
| `clippy::verbose_file_reads`              | warn        |                               |
| `clippy::wildcard_dependencies`           | production  |                               |
| `clippy::wildcard_enum_match_arm`         | check       |                               |
| `clippy::wrong_pub_self_convention`       | warn        |                               |

Exceptions:

| Lint                        | Verdict | Comment                  |
| --------------------------- | ------- | ------------------------ |
| `clippy::non_ascii_literal` | allow   | From `clippy::pedantic`. |

## Summary

```rust
#![warn(
    explicit_outlives_requirements,
    macro_use_extern_crate,
    meta_variable_misuse,
    missing_abi,
    noop_method_call,
    pointer_structural_match,
    semicolon_in_expressions_from_macros,
    trivial_casts,
    trivial_numeric_casts,
    unaligned_references,
    unsafe_op_in_unsafe_fn,
    unused_crate_dependencies,
    unused_extern_crates,
    unused_import_braces,
    unused_lifetimes,
    unused_qualifications,
    variant_size_differences,
    clippy::clone_on_ref_ptr,
    clippy::cognitive_complexity,
    clippy::debug_assert_with_mut_call,
    clippy::empty_line_after_outer_attr,
    clippy::fallible_impl_from,
    clippy::get_unwrap,
    clippy::imprecise_flops,
    clippy::let_underscore_must_use,
    clippy::lossy_float_literal,
    clippy::multiple_inherent_impl,
    clippy::mutex_integer,
    clippy::needless_borrow,
    clippy::panic,
    clippy::panic_in_result_fn,
    clippy::path_buf_push_overwrite,
    clippy::pedantic,
    clippy::rc_buffer,
    clippy::rest_pat_in_fully_bound_structs,
    clippy::semicolon_if_nothing_returned,
    clippy::string_lit_as_bytes,
    clippy::string_to_string,
    clippy::suboptimal_flops,
    clippy::todo,
    clippy::trivial_regex,
    clippy::unimplemented,
    clippy::unneeded_field_pattern,
    clippy::use_debug,
    clippy::use_self,
    clippy::useless_let_if_seq,
    clippy::useless_transmute,
    clippy::verbose_file_reads,
    clippy::wrong_pub_self_convention
)]
#![allow(clippy::non_ascii_literal)]
```
