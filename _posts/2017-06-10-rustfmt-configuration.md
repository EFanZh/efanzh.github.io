---
title: EFanZh’s Rustfmt configuration
---

This is my [Rustfmt](https://github.com/rust-lang-nursery/rustfmt) configuration:

```toml
array_width = 120
chain_indent = "Visual"
chain_one_line_max = 120
closure_block_indent_threshold = -1
comment_width = 120
condense_wildcard_suffixes = true
control_brace_style = "AlwaysNextLine"
error_on_line_overflow = false
fn_args_paren_newline = false
fn_brace_style = "AlwaysNextLine"
fn_call_width = 120
fn_empty_single_line = false
force_format_strings = true
format_strings = true
impl_empty_single_line = false
item_brace_style = "AlwaysNextLine"
match_block_trailing_comma = true
max_width = 120
newline_style = "Native"
normalize_comments = true
reorder_imported_names = true
reorder_imports = true
reorder_imports_in_group = true
single_line_if_else_max_width = 0
struct_lit_multiline_style = "ForceMulti"
struct_lit_style = "Visual"
struct_lit_width = 0
struct_variant_width = 0
trailing_comma = "Never"
use_try_shorthand = true
wrap_comments = true
```