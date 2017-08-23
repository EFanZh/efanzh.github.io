---
title: Essentials of Programming Languages Exercises
enable_mathjax: true
---

> Exercise 0.1 [🟉] We often use phrases like “some languages have property X.” For each such phrase, find one or more
> languages that have the property and one or more languages that do not have the property. Feel free to ferret out this
> information from any descriptive book on programming languages (say Scott (2005), Sebesta (2007), or Pratt & Zelkowitz
> (2001)).

*Skipped for now.*

> Exercise 1.1 [🟉] Write inductive definitions of the following sets. Write each definition in all three styles
> (top-down, bottom-up, and rules of inference). Using your rules, show the derivation of some sample elements of each
> set.
>
> 1. \$$ {3n + 2 \| n in N } $$
> 2. \$$ {2n + 3m + 1 \| n, m in N} $$
> 3. \$$ {(n, 2n + 1) \| n in N} $$
> 4. $$ {(n, n ^ 2) \| n in N} $$ Do not mention squaring in your rules. As a hint, remember the equation
>    $$ (n + 1) ^ 2 = n ^ 2 + 2n + 1 $$.

1. \$$ {3n + 2 \| n in N } $$
   - Top-down:

     $$ n in S $$ if

     - $$ n = 2 $$, or
     - \$$ n - 3 in S $$
   - Bottom-up:

     $$ S $$ is the smallest set that satisfying the following two properties:

     - $$ 2 in S $$, and
     - If $$ n in S $$, then $$ n + 3 in S $$
   - Rules of inference:
     - \$$ () / (2 in S) $$
     - \$$ (n in S) / ((n + 3) in S) $$
2. \$$ {2n + 3m + 1 \| n, m in N} $$
   - Top-down:

     $$ n in S $$ if

     - $$ n = 1 $$, or
     - $$ n - 2 in S $$, or
     - \$$ n - 3 in S $$
   - Bottom-up:

     $$ S $$ is the smallest set that satisfying the following two properties:

     - $$ 1 in S $$, and
     - If $$ n in S $$, then $$ n + 2 in S $$, and
     - If $$ n in S $$, then $$ n + 3 in S $$
   - Rules of inference:
     - \$$ () / (1 in S) $$
     - \$$ (n in S) / ((n + 2) in S) $$
     - \$$ (n in S) / ((n + 3) in S) $$
3.  \$$ {(n, 2n + 1) \| n in N} $$
    - Top-down:

      $$ (m, n) in S $$ if

      - $$ m = 0 $$ and $$ n = 1 $$, or
      - \$$ (m - 1, n - 2) in S $$
    - Bottom-up:

      $$ S $$ is the smallest set that satisfying the following two properties:

      - $$ (0, 1) in S $$, and
      - If $$ (m, n) in S $$, then $$ (m + 1, n + 2) in S $$
    - Rules of inference:
      - \$$ () / ((0, 1) in S) $$
      - \$$ ((m, n) in S) / ((m + 1, n + 2) in S) $$
4. \$$ {(n, n ^ 2) \| n in N} $$

    - Top-down:

      $$ (m, n) in S $$ if

      - $$ m = 0 $$ and $$ n = 0 $$, or
      - \$$ (m - 1, n - 2m + 1) in S $$
    - Bottom-up:

      $$ S $$ is the smallest set that satisfying the following two properties:

      - $$ (0, 0) in S $$, and
      - If $$ (m, n) in S $$, then $$ (m + 1, n + 2m + 1) in S $$
    - Rules of inference:
      - \$$ () / ((0, 0) in S) $$
      - \$$ ((m, n) in S) / ((m + 1, n + 2m + 1) in S) $$

> Exercise 1.2 [🟉🟉] What sets are defined by the following pairs of rules? Explain why.
>
> 1. \$$ (0, 1) in S quad ((n, k) in S) / ((n + 1, k + 7) in S) $$
> 2. \$$ (0, 1) in S quad ((n, k) in S) / ((n + 1, 2k) in S) $$
> 3. \$$ (0, 0, 1) in S quad ((n, i, j) in S) / ((n + 1, j, i + j) in S) $$
> 4. [🟉🟉🟉] $$ (0, 1, 0) in S quad ((n, i, j) in S) / ((n + 1, i + 2, i + j) in S) $$

1. \$$ (0, 1) in S quad ((n, k) in S) / ((n + 1, k + 7) in S) $$

   \$$ {(n, 7n + 1) \| n in N} $$
2. \$$ (0, 1) in S quad ((n, k) in S) / ((n + 1, 2k) in S) $$

   \$$ {(n, 2 ^ n) \| n in N} $$
3. \$$ (0, 0, 1) in S quad ((n, i, j) in S) / ((n + 1, j, i + j) in S) $$

   \$$ {(n, f(n), f(n + 1)) \| n in N, f(0) = 0, f(1) = 1, f(n + 2) = f(n) + f(n + 1)} $$
4. \$$ (0, 1, 0) in S quad ((n, i, j) in S) / ((n + 1, i + 2, i + j) in S) $$

   \$$ {(n, 2n + 1, n ^ 2) \| n in N} $$

> Exercise 1.3 [🟉🟉🟉] Find a set $$ T $$ of natural numbers such that $$ 0 in T $$, and whenever $$ n in T $$, then
> $$ n + 3 in T $$, but $$ T != S $$, where $$ S $$ is the set defined in definition 1.1.2.

Let $$ T = N $$.

> Exercise 1.4 [🟉] Write a derivation from *List-of-Int* to `(-7 . (3 . (14 . ())))`.

*List-of-Int* \\
⇒ `(`*Int*` . `*List-of-Int*`)` \\
⇒ `(-7 . `*List-of-Int*`)` \\
⇒ `(-7 . (`*Int*` . `*List-of-Int*`))` \\
⇒ `(-7 . (3 . `*List-of-Int*`))` \\
⇒ `(-7 . (3 . (`*Int*` . `*List-of-Int*`)))` \\
⇒ `(-7 . (3 . (14 . `*List-of-Int*`)))` \\
⇒ `(-7 . (3 . (14 . ())))`

> Exercise 1.5 [🟉🟉] Prove that if *e* ∈ *LcExp*, then there are the same number of left and right parentheses in *e*.

By induction on the structre of *LcExp*.

If *e* is of *Identifier* form, it has $$ 0 $$ left parenthesis and $$ 0 $$ right parenthesis, the hypothesis holds.

If *e* is of `(lambda (`*Identifier*`) `*LcExp*`)` form, the *Identifier* has $$ 0 $$ parenthese. By induction, *LcExp*
has the same number of left and right parentheses. Let the number be $$ n $$, then *e* has $$ n + 2 $$ left parentheses
and $$ n + 2 $$ right parentheses. The hypothesis holds.

If *e* is of `(`*LcExp*` `*LcExp*`)` form, let $$ m $$ be the number of left or right parentheses in the first *LcExp*,
let $$ n $$ be the number of left or right parentheses in the second *LcExp*, then *e* has $$ m + n + 1 $$ left
parentheses and $$ m + n + 1 $$ right parentheses. The hypothesis holds.

> Exercise 1.6 [🟉] If we reversed the order of the tests in `nth-element`, what would go wrong?

`car` may be applied to empty list.

> Exercise 1.7 [🟉🟉] The error message from `nth-element` is uninformative. Rewrite `nth-element` so that it produces a
> more informative error message, such as “`(a b c)` does not have 8 elements.”

```scheme
(define nth-element
  (lambda (lst n)
    (define helper
      (lambda (lst1 n1)
        (if (null? lst1)
            (report-list-too-short lst n)
            (if (zero? n1)
                (car lst1)
                (helper (cdr lst1) (- n1 1))))))
    (helper lst n)))

(define report-list-too-short
  (lambda (lst n)
    (eopl:error 'nth-element
                "~s does not have ~s elements.~%" lst (+ n 1))))
```

> Exercise 1.8 [🟉] In the definition of remove-first, if the last line were replaced by `(remove-first s (cdr los))`,
> what function would the resulting procedure compute? Give the contract, including the usage statement, for the revised
> procedure.

**remove-first** : *Sym* × *Listof*(*Sym*) → *Listof*(*Sym*)

**usage**: `(remove-first `*s*` `*los*`)` returns a sub of list from *los*, starting from the symbol after the first
*s*. If *los* doesn’t contain *s*, an empty list is returned.

```scheme
(define remove-first
  (lambda (s los)
    (if (null? los)
        '()
        (if (eqv? (car los) s)
            (cdr los)
            (remove-first s (cdr los))))))
```

> Exercise 1.9 [🟉🟉] Define `remove`, which is like `remove-first`, except that it removes all occurrences of a given
> symbol from a list of symbols, not just the first.

```scheme
(define remove
  (lambda (s los)
    (if (null? los)
        '()
        (if (eqv? (car los) s)
            (remove s (cdr los))
            (cons (car los) (remove s (cdr los)))))))
```
