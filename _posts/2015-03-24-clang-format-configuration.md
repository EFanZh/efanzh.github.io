---
---

# EFanZh’s Clang-Format configuration

This is my [Clang-Format](https://clang.llvm.org/docs/ClangFormat.html) configuration:

```yaml
# Language: Cpp
# # BasedOnStyle: Microsoft
AccessModifierOffset: -4
AlignAfterOpenBracket: Align
AlignConsecutiveAssignments: false
AlignConsecutiveBitFields: false
AlignConsecutiveDeclarations: false
AlignConsecutiveMacros: false
# AlignEscapedNewlines: Right
# AlignOperands: Align
# AlignTrailingComments: true
# AllowAllArgumentsOnNextLine: true
# AllowAllConstructorInitializersOnNextLine: true
# AllowAllParametersOfDeclarationOnNextLine: true
AllowShortBlocksOnASingleLine: Never
AllowShortCaseLabelsOnASingleLine: false
AllowShortEnumsOnASingleLine: false
AllowShortFunctionsOnASingleLine: None
AllowShortIfStatementsOnASingleLine: Never
AllowShortLambdasOnASingleLine: All
AllowShortLoopsOnASingleLine: false
AlwaysBreakAfterDefinitionReturnType: None
AlwaysBreakAfterReturnType: None
# AlwaysBreakBeforeMultilineStrings: false
AlwaysBreakTemplateDeclarations: Yes
BinPackArguments: false
BinPackParameters: false
# BraceWrapping:
#     AfterCaseLabel: false
#     AfterClass: true
#     AfterControlStatement: Always
#     AfterEnum: true
#     AfterExternBlock: true
#     AfterFunction: true
#     AfterNamespace: true
#     AfterObjCDeclaration: true
#     AfterStruct: true
#     AfterUnion: false
#     BeforeCatch: true
#     BeforeElse: true
#     BeforeLambdaBody: false
#     BeforeWhile: false
#     IndentBraces: false
#     SplitEmptyFunction: true
#     SplitEmptyNamespace: true
#     SplitEmptyRecord: true
# BreakAfterJavaFieldAnnotations: false
# BreakBeforeBinaryOperators: None
BreakBeforeBraces: Attach
# BreakBeforeTernaryOperators: true
BreakConstructorInitializers: BeforeColon
BreakInheritanceList: BeforeColon
# BreakStringLiterals: true
ColumnLimit: 120
# CommentPragmas: '^ IWYU pragma:'
CompactNamespaces: false
ConstructorInitializerAllOnOneLineOrOnePerLine: true
ConstructorInitializerIndentWidth: 4
ContinuationIndentWidth: 4
Cpp11BracedListStyle: true
DeriveLineEnding: true
DerivePointerAlignment: false
DisableFormat: false
ExperimentalAutoDetectBinPacking: false
FixNamespaceComments: true
# ForEachMacros:
#   - foreach
#   - Q_FOREACH
#   - BOOST_FOREACH
IncludeBlocks: Merge
# IncludeCategories:
#   - Regex: '^"(llvm|llvm-c|clang|clang-c)/'
#     Priority: 2
#     SortPriority: 0
#   - Regex: '^(<|"(gtest|gmock|isl|json)/)'
#     Priority: 3
#     SortPriority: 0
#   - Regex: '.*'
#     Priority: 1
#     SortPriority: 0
# IncludeIsMainRegex: '(Test)?$'
# IncludeIsMainSourceRegex: ''
IndentCaseBlocks: false
IndentCaseLabels: true
# IndentExternBlock: AfterExternBlock
IndentGotoLabels: false
IndentPPDirectives: None
IndentWidth: 4
# IndentWrappedFunctionNames: false
InsertTrailingCommas: Wrapped
# JavaImportGroups: []
# JavaScriptQuotes: Leave
# JavaScriptWrapImports: true
KeepEmptyLinesAtTheStartOfBlocks: false
# MacroBlockBegin: ''
# MacroBlockEnd: ''
MaxEmptyLinesToKeep: 1
NamespaceIndentation: All
# NamespaceMacros: []
# ObjCBinPackProtocolList: Auto
# ObjCBlockIndentWidth: 2
# ObjCBreakBeforeNestedBlockParam: true
# ObjCSpaceAfterProperty: false
# ObjCSpaceBeforeProtocolList: true
# PenaltyBreakAssignment: 2
# PenaltyBreakBeforeFirstCallParameter: 19
# PenaltyBreakComment: 300
# PenaltyBreakFirstLessLess: 120
# PenaltyBreakString: 1000
# PenaltyBreakTemplateDeclaration: 10
# PenaltyExcessCharacter: 1000000
# PenaltyReturnTypeOnItsOwnLine: 1000
PointerAlignment: Right
# RawStringFormats: []
# ReflowComments: true
SortIncludes: true
SortUsingDeclarations: true
SpaceAfterCStyleCast: false
SpaceAfterLogicalNot: false
SpaceAfterTemplateKeyword: true
SpaceBeforeAssignmentOperators: true
SpaceBeforeCpp11BracedList: false
# SpaceBeforeCtorInitializerColon: true
# SpaceBeforeInheritanceColon: true
# SpaceBeforeParens: ControlStatements
SpaceBeforeRangeBasedForLoopColon: true
SpaceBeforeSquareBrackets: false
SpaceInEmptyBlock: false
SpaceInEmptyParentheses: false
# SpacesBeforeTrailingComments: 1
SpacesInAngles: false
SpacesInCStyleCastParentheses: false
SpacesInConditionalStatement: false
SpacesInContainerLiterals: false
SpacesInParentheses: false
SpacesInSquareBrackets: false
Standard: Latest
# StatementMacros:
#   - Q_UNUSED
#   - QT_REQUIRE_VERSION
TabWidth: 4
# TypenameMacros: []
# UseCRLF: false
UseTab: Never
# WhitespaceSensitiveMacros:
#   - STRINGIZE
#   - PP_STRINGIZE
#   - BOOST_PP_STRINGIZE
```
