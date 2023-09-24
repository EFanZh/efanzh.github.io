+++
title = "Rust Lints"
+++

For Rust version 1.67.0. References:

- <https://doc.rust-lang.org/1.67.0/rustc/lints/listing/allowed-by-default.html>
- <https://rust-lang.github.io/rust-clippy/rust-1.67.0/index.html>

## Allow by default lints

| Lint                                      | Verdict | Comment                            |
| ----------------------------------------- | ------- | ---------------------------------- |
| `absolute_paths_not_starting_with_crate`  | warn    |                                    |
| `box_pointers`                            | default |                                    |
| `elided_lifetimes_in_paths`               | default |                                    |
| `explicit_outlives_requirements`          | warn    |                                    |
| `ffi_unwind_calls`                        | default |                                    |
| `fuzzy_provenance_casts`                  | warn    | Unstable                           |
| `keyword_idents`                          | default |                                    |
| `let_underscore_drop`                     | warn    |                                    |
| `lossy_provenance_casts`                  | warn    | Unstable                           |
| `macro_use_extern_crate`                  | warn    |                                    |
| `meta_variable_misuse`                    | warn    |                                    |
| `missing_abi`                             | warn    |                                    |
| `missing_copy_implementations`            | default |                                    |
| `missing_debug_implementations`           | default |                                    |
| `missing_docs`                            | warn    |                                    |
| `must_not_suspend`                        | warn    | Unstable                           |
| `non_ascii_idents`                        | default |                                    |
| `non_exhaustive_omitted_patterns`         | warn    | Unstable                           |
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
| `unused_macro_rules`                      | warn    |                                    |
| `unused_qualifications`                   | warn    |                                    |
| `unused_results`                          | default |                                    |
| `unused_tuple_struct_fields`              | warn    |                                    |
| `variant_size_differences`                | warn    |                                    |
| `clippy::alloc_instead_of_core`           | warn    |                                    |
| `clippy::allow_attributes_without_reason` | warn    |                                    |
| `clippy::arithmetic_side_effects`         | default |                                    |
| `clippy::as_conversions`                  | default |                                    |
| `clippy::as_ptr_cast_mut`                 | warn    |                                    |
| `clippy::as_underscore`                   | default |                                    |
| `clippy::assertions_on_result_states`     | default |                                    |
| `clippy::branches_sharing_code`           | warn    |                                    |
| `clippy::cargo_common_metadata`           | warn    |                                    |
| `clippy::clone_on_ref_ptr`                | warn    |                                    |
| `clippy::cognitive_complexity`            | warn    |                                    |
| `clippy::create_dir`                      | warn    |                                    |
| `clippy::dbg_macro`                       | warn    |                                    |
| `clippy::debug_assert_with_mut_call`      | warn    |                                    |
| `clippy::decimal_literal_representation`  | warn    |                                    |
| `clippy::default_numeric_fallback`        | default |                                    |
| `clippy::default_union_representation`    | default |                                    |
| `clippy::deref_by_slicing`                | warn    |                                    |
| `clippy::derive_partial_eq_without_eq`    | warn    |                                    |
| `clippy::disallowed_script_idents`        | default |                                    |
| `clippy::else_if_without_else`            | default |                                    |
| `clippy::empty_drop`                      | warn    |                                    |
| `clippy::empty_line_after_outer_attr`     | warn    |                                    |
| `clippy::empty_structs_with_brackets`     | warn    |                                    |
| `clippy::equatable_if_let`                | warn    |                                    |
| `clippy::exhaustive_enums`                | default |                                    |
| `clippy::exhaustive_structs`              | default |                                    |
| `clippy::exit`                            | default |                                    |
| `clippy::expect_used`                     | default |                                    |
| `clippy::fallible_impl_from`              | warn    |                                    |
| `clippy::filetype_is_file`                | warn    |                                    |
| `clippy::float_arithmetic`                | default |                                    |
| `clippy::float_cmp_const`                 | warn    |                                    |
| `clippy::fn_to_numeric_cast_any`          | default |                                    |
| `clippy::format_push_string`              | warn    |                                    |
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
| `clippy::iter_on_empty_collections`       | warn    |                                    |
| `clippy::iter_on_single_items`            | warn    |                                    |
| `clippy::iter_with_drain`                 | warn    |                                    |
| `clippy::large_include_file`              | warn    |                                    |
| `clippy::let_underscore_must_use`         | warn    |                                    |
| `clippy::lossy_float_literal`             | warn    |                                    |
| `clippy::manual_clamp`                    | warn    |                                    |
| `clippy::map_err_ignore`                  | warn    |                                    |
| `clippy::mem_forget`                      | default |                                    |
| `clippy::missing_const_for_fn`            | default |                                    |
| `clippy::missing_docs_in_private_items`   | default |                                    |
| `clippy::missing_enforced_import_renames` | default |                                    |
| `clippy::missing_inline_in_public_items`  | default |                                    |
| `clippy::missing_trait_methods`           | default |                                    |
| `clippy::mixed_read_write_in_expression`  | warn    |                                    |
| `clippy::mod_module_files`                | default |                                    |
| `clippy::modulo_arithmetic`               | default |                                    |
| `clippy::multiple_crate_versions`         | default |                                    |
| `clippy::multiple_inherent_impl`          | warn    |                                    |
| `clippy::multiple_unsafe_ops_per_block`   | default |                                    |
| `clippy::mutex_atomic`                    | warn    |                                    |
| `clippy::mutex_integer`                   | warn    |                                    |
| `clippy::needless_collect`                | warn    |                                    |
| `clippy::negative_feature_names`          | warn    |                                    |
| `clippy::non_ascii_literal`               | default |                                    |
| `clippy::non_send_fields_in_send_ty`      | warn    |                                    |
| `clippy::nonstandard_macro_braces`        | warn    |                                    |
| `clippy::option_if_let_else`              | warn    |                                    |
| `clippy::or_fun_call`                     | warn    |                                    |
| `clippy::panic`                           | warn    |                                    |
| `clippy::panic_in_result_fn`              | warn    |                                    |
| `clippy::partial_pub_fields`              | warn    |                                    |
| `clippy::path_buf_push_overwrite`         | warn    |                                    |
| `clippy::pattern_type_mismatch`           | default |                                    |
| `clippy::pedantic`                        | warn    |                                    |
| `clippy::print_stderr`                    | warn    |                                    |
| `clippy::print_stdout`                    | warn    |                                    |
| `clippy::pub_use`                         | default |                                    |
| `clippy::rc_buffer`                       | warn    |                                    |
| `clippy::rc_mutex`                        | warn    |                                    |
| `clippy::redundant_feature_names`         | warn    |                                    |
| `clippy::redundant_pub_crate`             | warn    | See `unreachable_pub`.             |
| `clippy::rest_pat_in_fully_bound_structs` | warn    |                                    |
| `clippy::same_name_method`                | warn    |                                    |
| `clippy::self_named_module_files`         | warn    |                                    |
| `clippy::semicolon_inside_block`          | default |                                    |
| `clippy::semicolon_outside_block`         | default |                                    |
| `clippy::separated_literal_suffix`        | default |                                    |
| `clippy::shadow_reuse`                    | default |                                    |
| `clippy::shadow_same`                     | default |                                    |
| `clippy::shadow_unrelated`                | default |                                    |
| `clippy::significant_drop_in_scrutinee`   | warn    |                                    |
| `clippy::single_char_lifetime_names`      | default |                                    |
| `clippy::std_instead_of_alloc`            | default |                                    |
| `clippy::std_instead_of_core`             | default |                                    |
| `clippy::str_to_string`                   | default | To pair with `[T]::to_vec()`.      |
| `clippy::string_add`                      | default |                                    |
| `clippy::string_lit_as_bytes`             | warn    |                                    |
| `clippy::string_slice`                    | default |                                    |
| `clippy::string_to_string`                | warn    |                                    |
| `clippy::suboptimal_flops`                | warn    |                                    |
| `clippy::suspicious_operation_groupings`  | warn    |                                    |
| `clippy::suspicious_xor_used_as_pow`      | default |                                    |
| `clippy::todo`                            | warn    |                                    |
| `clippy::trailing_empty_array`            | warn    |                                    |
| `clippy::trait_duplication_in_bounds`     | warn    |                                    |
| `clippy::transmute_undefined_repr`        | warn    |                                    |
| `clippy::trivial_regex`                   | warn    |                                    |
| `clippy::try_err`                         | warn    |                                    |
| `clippy::type_repetition_in_bounds`       | warn    |                                    |
| `clippy::undocumented_unsafe_blocks`      | warn    |                                    |
| `clippy::unimplemented`                   | warn    |                                    |
| `clippy::unnecessary_safety_comment`      | warn    |                                    |
| `clippy::unnecessary_safety_doc`          | warn    |                                    |
| `clippy::unnecessary_self_imports`        | warn    |                                    |
| `clippy::unneeded_field_pattern`          | warn    |                                    |
| `clippy::unreachable`                     | default |                                    |
| `clippy::unseparated_literal_suffix`      | default |                                    |
| `clippy::unused_peekable`                 | warn    |                                    |
| `clippy::unused_rounding`                 | warn    |                                    |
| `clippy::unwrap_in_result`                | default |                                    |
| `clippy::unwrap_used`                     | default |                                    |
| `clippy::use_debug`                       | warn    |                                    |
| `clippy::use_self`                        | warn    |                                    |
| `clippy::useless_let_if_seq`              | warn    |                                    |
| `clippy::verbose_file_reads`              | warn    |                                    |
| `clippy::wildcard_dependencies`           | warn    |                                    |
| `clippy::wildcard_enum_match_arm`         | default |                                    |

Exceptions:

| Lint | Verdict | Comment |
| ---- | ------- | ------- |

## Summary

Add the following configuration to `.cargo/config.toml`:

```toml
[target.'cfg(feature = "cargo-clippy")']
rustflags = [
  "-Wabsolute_paths_not_starting_with_crate",
  "-Wexplicit_outlives_requirements",
  "-Wlet_underscore_drop",
  "-Wmacro_use_extern_crate",
  "-Wmeta_variable_misuse",
  "-Wmissing_abi",
  "-Wmissing_docs",
  "-Wnoop_method_call",
  "-Wpointer_structural_match",
  "-Wsingle_use_lifetimes",
  "-Wtrivial_casts",
  "-Wtrivial_numeric_casts",
  "-Wunsafe_code",
  "-Wunsafe_op_in_unsafe_fn",
  "-Wunused_crate_dependencies",
  "-Wunused_extern_crates",
  "-Wunused_import_braces",
  "-Wunused_lifetimes",
  "-Wunused_macro_rules",
  "-Wunused_qualifications",
  "-Wunused_tuple_struct_fields",
  "-Wvariant_size_differences",
  "-Wclippy::alloc_instead_of_core",
  "-Wclippy::allow_attributes_without_reason",
  "-Wclippy::as_ptr_cast_mut",
  "-Wclippy::branches_sharing_code",
  "-Wclippy::cargo_common_metadata",
  "-Wclippy::clone_on_ref_ptr",
  "-Wclippy::cognitive_complexity",
  "-Wclippy::create_dir",
  "-Wclippy::dbg_macro",
  "-Wclippy::debug_assert_with_mut_call",
  "-Wclippy::decimal_literal_representation",
  "-Wclippy::deref_by_slicing",
  "-Wclippy::derive_partial_eq_without_eq",
  "-Wclippy::empty_drop",
  "-Wclippy::empty_line_after_outer_attr",
  "-Wclippy::empty_structs_with_brackets",
  "-Wclippy::equatable_if_let",
  "-Wclippy::fallible_impl_from",
  "-Wclippy::filetype_is_file",
  "-Wclippy::float_cmp_const",
  "-Wclippy::format_push_string",
  "-Wclippy::get_unwrap",
  "-Wclippy::if_then_some_else_none",
  "-Wclippy::imprecise_flops",
  "-Wclippy::iter_on_empty_collections",
  "-Wclippy::iter_on_single_items",
  "-Wclippy::iter_with_drain",
  "-Wclippy::large_include_file",
  "-Wclippy::let_underscore_must_use",
  "-Wclippy::lossy_float_literal",
  "-Wclippy::manual_clamp",
  "-Wclippy::map_err_ignore",
  "-Wclippy::mixed_read_write_in_expression",
  "-Wclippy::multiple_inherent_impl",
  "-Wclippy::mutex_atomic",
  "-Wclippy::mutex_integer",
  "-Wclippy::needless_collect",
  "-Wclippy::negative_feature_names",
  "-Wclippy::non_send_fields_in_send_ty",
  "-Wclippy::nonstandard_macro_braces",
  "-Wclippy::option_if_let_else",
  "-Wclippy::or_fun_call",
  "-Wclippy::panic",
  "-Wclippy::panic_in_result_fn",
  "-Wclippy::partial_pub_fields",
  "-Wclippy::path_buf_push_overwrite",
  "-Wclippy::pedantic",
  "-Wclippy::print_stderr",
  "-Wclippy::print_stdout",
  "-Wclippy::rc_buffer",
  "-Wclippy::rc_mutex",
  "-Wclippy::redundant_feature_names",
  "-Wclippy::redundant_pub_crate",
  "-Wclippy::rest_pat_in_fully_bound_structs",
  "-Wclippy::same_name_method",
  "-Wclippy::self_named_module_files",
  "-Wclippy::significant_drop_in_scrutinee",
  "-Wclippy::string_lit_as_bytes",
  "-Wclippy::string_to_string",
  "-Wclippy::suboptimal_flops",
  "-Wclippy::suspicious_operation_groupings",
  "-Wclippy::todo",
  "-Wclippy::trailing_empty_array",
  "-Wclippy::trait_duplication_in_bounds",
  "-Wclippy::transmute_undefined_repr",
  "-Wclippy::trivial_regex",
  "-Wclippy::try_err",
  "-Wclippy::type_repetition_in_bounds",
  "-Wclippy::undocumented_unsafe_blocks",
  "-Wclippy::unimplemented",
  "-Wclippy::unnecessary_safety_comment",
  "-Wclippy::unnecessary_safety_doc",
  "-Wclippy::unnecessary_self_imports",
  "-Wclippy::unneeded_field_pattern",
  "-Wclippy::unused_peekable",
  "-Wclippy::unused_rounding",
  "-Wclippy::use_debug",
  "-Wclippy::use_self",
  "-Wclippy::useless_let_if_seq",
  "-Wclippy::verbose_file_reads",
  "-Wclippy::wildcard_dependencies",
]
```

Or add the following code to the top of `lib.rs` or `main.rs`:

```rust
#![warn(
    absolute_paths_not_starting_with_crate,
    explicit_outlives_requirements,
    let_underscore_drop,
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
    unused_macro_rules,
    unused_qualifications,
    unused_tuple_struct_fields,
    variant_size_differences,
    clippy::alloc_instead_of_core,
    clippy::allow_attributes_without_reason,
    clippy::as_ptr_cast_mut,
    clippy::branches_sharing_code,
    clippy::cargo_common_metadata,
    clippy::clone_on_ref_ptr,
    clippy::cognitive_complexity,
    clippy::create_dir,
    clippy::dbg_macro,
    clippy::debug_assert_with_mut_call,
    clippy::decimal_literal_representation,
    clippy::deref_by_slicing,
    clippy::derive_partial_eq_without_eq,
    clippy::empty_drop,
    clippy::empty_line_after_outer_attr,
    clippy::empty_structs_with_brackets,
    clippy::equatable_if_let,
    clippy::fallible_impl_from,
    clippy::filetype_is_file,
    clippy::float_cmp_const,
    clippy::format_push_string,
    clippy::get_unwrap,
    clippy::if_then_some_else_none,
    clippy::imprecise_flops,
    clippy::iter_on_empty_collections,
    clippy::iter_on_single_items,
    clippy::iter_with_drain,
    clippy::large_include_file,
    clippy::let_underscore_must_use,
    clippy::lossy_float_literal,
    clippy::manual_clamp,
    clippy::map_err_ignore,
    clippy::mixed_read_write_in_expression,
    clippy::multiple_inherent_impl,
    clippy::mutex_atomic,
    clippy::mutex_integer,
    clippy::needless_collect,
    clippy::negative_feature_names,
    clippy::non_send_fields_in_send_ty,
    clippy::nonstandard_macro_braces,
    clippy::option_if_let_else,
    clippy::or_fun_call,
    clippy::panic,
    clippy::panic_in_result_fn,
    clippy::partial_pub_fields,
    clippy::path_buf_push_overwrite,
    clippy::pedantic,
    clippy::print_stderr,
    clippy::print_stdout,
    clippy::rc_buffer,
    clippy::rc_mutex,
    clippy::redundant_feature_names,
    clippy::redundant_pub_crate,
    clippy::rest_pat_in_fully_bound_structs,
    clippy::same_name_method,
    clippy::self_named_module_files,
    clippy::significant_drop_in_scrutinee,
    clippy::string_lit_as_bytes,
    clippy::string_to_string,
    clippy::suboptimal_flops,
    clippy::suspicious_operation_groupings,
    clippy::todo,
    clippy::trailing_empty_array,
    clippy::trait_duplication_in_bounds,
    clippy::transmute_undefined_repr,
    clippy::trivial_regex,
    clippy::try_err,
    clippy::type_repetition_in_bounds,
    clippy::undocumented_unsafe_blocks,
    clippy::unimplemented,
    clippy::unnecessary_safety_comment,
    clippy::unnecessary_safety_doc,
    clippy::unnecessary_self_imports,
    clippy::unneeded_field_pattern,
    clippy::unused_peekable,
    clippy::unused_rounding,
    clippy::use_debug,
    clippy::use_self,
    clippy::useless_let_if_seq,
    clippy::verbose_file_reads,
    clippy::wildcard_dependencies,
)]
```

## `.clippy.toml` Configuration

```toml
avoid-breaking-exported-api = false
warn-on-all-wildcard-imports = true
```
