---
title: Essentials of Programming Languages Exercises
enable_mathjax: true
---

## Codes

Code for the exercises can be found [here](https://github.com/EFanZh/EOPL-Exercises).

## Exercises

> Exercise 0.1 [★] We often use phrases like “some languages have property X.” For each such phrase, find one or more
> languages that have the property and one or more languages that do not have the property. Feel free to ferret out this
> information from any descriptive book on programming languages (say Scott (2005), Sebesta (2007), or Pratt & Zelkowitz
> (2001)).

*Skipped for now.*

> Exercise 1.1 [★] Write inductive definitions of the following sets. Write each definition in all three styles
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

> Exercise 1.2 [★★] What sets are defined by the following pairs of rules? Explain why.
>
> 1. \$$ (0, 1) in S quad ((n, k) in S) / ((n + 1, k + 7) in S) $$
> 2. \$$ (0, 1) in S quad ((n, k) in S) / ((n + 1, 2k) in S) $$
> 3. \$$ (0, 0, 1) in S quad ((n, i, j) in S) / ((n + 1, j, i + j) in S) $$
> 4. [★★★] $$ (0, 1, 0) in S quad ((n, i, j) in S) / ((n + 1, i + 2, i + j) in S) $$

1. \$$ (0, 1) in S quad ((n, k) in S) / ((n + 1, k + 7) in S) $$

   \$$ {(n, 7n + 1) \| n in N} $$
2. \$$ (0, 1) in S quad ((n, k) in S) / ((n + 1, 2k) in S) $$

   \$$ {(n, 2 ^ n) \| n in N} $$
3. \$$ (0, 0, 1) in S quad ((n, i, j) in S) / ((n + 1, j, i + j) in S) $$

   \$$ {(n, f(n), f(n + 1)) \| n in N, f(0) = 0, f(1) = 1, f(n + 2) = f(n) + f(n + 1)} $$
4. \$$ (0, 1, 0) in S quad ((n, i, j) in S) / ((n + 1, i + 2, i + j) in S) $$

   \$$ {(n, 2n + 1, n ^ 2) \| n in N} $$

> Exercise 1.3 [★★★] Find a set $$ T $$ of natural numbers such that $$ 0 in T $$, and whenever $$ n in T $$, then
> $$ n + 3 in T $$, but $$ T != S $$, where $$ S $$ is the set defined in definition 1.1.2.

Let $$ T = N $$.

> Exercise 1.4 [★] Write a derivation from *List-of-Int* to `(-7 . (3 . (14 . ())))`.

*List-of-Int* \\
⇒ `(`*Int*` . `*List-of-Int*`)` \\
⇒ `(-7 . `*List-of-Int*`)` \\
⇒ `(-7 . (`*Int*` . `*List-of-Int*`))` \\
⇒ `(-7 . (3 . `*List-of-Int*`))` \\
⇒ `(-7 . (3 . (`*Int*` . `*List-of-Int*`)))` \\
⇒ `(-7 . (3 . (14 . `*List-of-Int*`)))` \\
⇒ `(-7 . (3 . (14 . ())))`

> Exercise 1.5 [★★] Prove that if *e* ∈ *LcExp*, then there are the same number of left and right parentheses in *e*.

By induction on the structre of *LcExp*.

If *e* is of *Identifier* form, it has $$ 0 $$ left parenthesis and $$ 0 $$ right parenthesis, the hypothesis holds.

If *e* is of `(lambda (`*Identifier*`) `*LcExp*`)` form, the *Identifier* has $$ 0 $$ parenthese. By induction, *LcExp*
has the same number of left and right parentheses. Let the number be $$ n $$, then *e* has $$ n + 2 $$ left parentheses
and $$ n + 2 $$ right parentheses. The hypothesis holds.

If *e* is of `(`*LcExp*` `*LcExp*`)` form, let $$ m $$ be the number of left or right parentheses in the first *LcExp*,
let $$ n $$ be the number of left or right parentheses in the second *LcExp*, then *e* has $$ m + n + 1 $$ left
parentheses and $$ m + n + 1 $$ right parentheses. The hypothesis holds.

> Exercise 1.6 [★] If we reversed the order of the tests in `nth-element`, what would go wrong?

`car` may be applied to empty list.

> Exercise 1.7 [★★] The error message from `nth-element` is uninformative. Rewrite `nth-element` so that it produces a
> more informative error message, such as “`(a b c)` does not have 8 elements.”

```scheme
(define report-list-too-short
  (lambda (lst n)
    (eopl:error 'nth-element
                "~s does not have ~s elements.~%" lst (+ n 1))))

(define nth-element-helper
  (lambda (lst n current-list i)
    (if (null? current-list)
        (report-list-too-short lst n)
        (if (zero? i)
            (car current-list)
            (nth-element-helper lst n (cdr current-list) (- i 1))))))

(define nth-element
  (lambda (lst n)
    (nth-element-helper lst n lst n)))
```

> Exercise 1.8 [★] In the definition of remove-first, if the last line were replaced by `(remove-first s (cdr los))`,
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

> Exercise 1.9 [★★] Define `remove`, which is like `remove-first`, except that it removes all occurrences of a given
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

> Exercise 1.10 [★] We typically use “or” to mean “inclusive or”. What other meanings can “or” have?

Exclusive or.

> Exercise 1.11 [★] In the last line of `subst-in-s-exp`, the recursion is on sexp and not a smaller substructure. Why
> is the recursion guaranteed to halt?

Because `subst` recurs on smaller substructure. We can replace the call to `subst-in-s-exp` with the body of
`subst-in-s-exp`, then `subst` becomes a normal recursive on a smaller substructure.

> Exercise 1.12 [★] Eliminate the one call to `subst-in-s-exp` in subst by replacing it by its definition and
> simplifying the resulting procedure. The result will be a version of subst that does not need `subst-in-s-exp`. This
> technique is called *inlining*, and is used by optimizing compilers.

```racket
(define subst
  (lambda (new old slist)
    (if (null? slist)
        '()
        (cons (let ([sexp (car slist)])
                (if (symbol? sexp)
                    (if (eqv? sexp old) new sexp)
                    (subst new old sexp)))
              (subst new old (cdr slist))))))
```

> Exercise 1.13 [★★] In our example, we began by eliminating the Kleene star in the grammar for *S-list*. Write
> `subst` following the original grammar by using `map`.

```scheme
(define subst-in-s-exp
  (lambda (new old sexp)
    (if (symbol? sexp)
        (if (eqv? sexp old) new sexp)
        (subst new old sexp))))

(define subst
  (lambda (new old slist)
    (map (lambda (sexp) (subst-in-s-exp new old sexp))
         slist)))
```

> Exercise 1.14 [★★] Given the assumption 0 ≤ *n* < *length*(*v*), prove that `partial-vector-sum` is correct.

Since 0 ≤ *n* < *length*(*v*), we know that *length*(*v*) is at leat 1, so that *v* contains at least one element. We
prove `partial-vector-sum` is correct by induction over *n*.

Base case: if *n* equals to 0, `(partial-vector-sum `*v*` `*n*`)` equals to `(vector-ref `*v*` 0)`, which equals to
$$ sum _ (i = 0) ^ (i = 0) v _ i $$, the claim holds.

Inductive case: if *n* ≠ 0, *n* `(partial-vector-sum `*v*` `*n*`)` equals to
`(add (vector-ref `*v*` `*n*`) (partial-vector-sum `*v*` (- `*n*` 1)))`, which equals to
$$ v _ n + sum _ (i = 0) ^ (i = n - 1) v _ i $$, which equals to $$ sum _ (i = 0) ^ (i = n) v _ i $$, the claim holds.

> Exercise 1.15 [★] `(duple n x)` returns a list containing `n` copies of `x`.
>
> ```scheme
> > (duple 2 3)
> (3 3)
> > (duple 4 '(ha ha))
> ((ha ha) (ha ha) (ha ha) (ha ha))
> > (duple 0 '(blah))
> ()
> ```

```scheme
(define duple-helper
  (lambda (lst n x)
    (if (zero? n)
        lst
        (duple-helper (cons x lst) (- n 1) x))))

(define duple
  (lambda (n x)
    (duple-helper '() n x)))
```

> Exercise 1.16 [★] `(invert lst)`, where lst is a list of 2-lists (lists of length two), returns a list with each
> 2-list reversed.
>
> ```scheme
> > (invert '((a 1) (a 2) (1 b) (2 b)))
> ((1 a) (2 a) (b 1) (b 2))
> ```

```scheme
(define invert
  (lambda (lst)
    (map (lambda (x) (list (cadr x) (car x)))
         lst)))
```

> Exercise 1.17 [★] `(down lst)` wraps parentheses around each top-level element of `lst`.
>
> ```scheme
> > (down '(1 2 3))
> ((1) (2) (3))
> > (down '((a) (fine) (idea)))
> (((a)) ((fine)) ((idea)))
> > (down '(a (more (complicated)) object))
> ((a) ((more (complicated))) (object))
> ```

```scheme
(define down
  (lambda (lst)
    (map (lambda (x) (list x))
         lst)))
```

> Exercise 1.18 [★] `(swapper s1 s2 slist)` returns a list the same as slist, but with all occurrences of `s1` replaced
> by `s2` and all occurrences of `s2` replaced by `s1`.
>
> ```scheme
> > (swapper 'a 'd '(a b c d))
> (d b c a)
> > (swapper 'a 'd '(a d () c d))
> (d a () c a)
> > (swapper 'x 'y '((x) y (z (x))))
> ((y) x (z (y)))
> ```

```scheme
(define swapper
  (lambda (s1 s2 slist)
    (map (lambda (sexp)
           (if (symbol? sexp)
               (if (eqv? sexp s1)
                   s2
                   (if (eqv? sexp s2)
                       s1
                       sexp))
               (swapper s1 s2 sexp)))
         slist)))
```

> Exercise 1.19 [★] `(list-set lst n x)` returns a list like `lst`, except that the `n`-th element, using zero-based
> indexing, is `x`.
>
> ```scheme
> > (list-set '(a b c d) 2 '(1 2))
> (a b (1 2) d)
> > (list-ref (list-set '(a b c d) 3 '(1 5 10)) 3)
> (1 5 10)
> ```

```scheme
(define list-set
  (lambda (lst n x)
    (if (zero? n)
        (cons x (cdr lst))
        (cons (car lst) (list-set (cdr lst) (- n 1) x)))))
```

> Exercise 1.20 [★] `(count-occurrences s slist)` returns the number of occurrences of `s` in `slist`.
>
> ```scheme
> > (count-occurrences 'x '((f x) y (((x z) x))))
> 3
> > (count-occurrences 'x '((f x) y (((x z) () x))))
> 3
> > (count-occurrences 'w '((f x) y (((x z) x))))
> 0
> ```

```scheme
(define count-occurrences-sexp
  (lambda (s sexp)
    (if (symbol? sexp)
        (if (eqv? sexp s) 1 0)
        (count-occurrences s sexp))))

(define count-occurrences
  (lambda (s slist)
    (if (null? slist)
        0
        (+ (count-occurrences-sexp s (car slist))
           (count-occurrences s (cdr slist))))))
```

> Exercise 1.21 [★★] `(product sos1 sos2)`, where `sos1` and `sos2` are each a list of symbols without repetitions,
> returns a list of 2-lists that represents the Cartesian product of `sos1` and `sos2`. The 2-lists may appear in any
> order.
>
> ```scheme
> > (product '(a b c) '(x y))
> ((a x) (a y) (b x) (b y) (c x) (c y))
> ```

```scheme
(define product-symbol
  (lambda (tail s sos)
    (if (null? sos)
        tail
        (product-symbol (cons (list s (car sos)) tail) s (cdr sos)))))

(define product-helper
  (lambda (tail sos1 sos2)
    (if (null? sos1)
        tail
        (product-helper (product-symbol tail (car sos1) sos2)
                        (cdr sos1)
                        sos2))))

(define product
  (lambda (sos1 sos2)
    (product-helper '() sos1 sos2)))
```

> Exercise 1.22 [★★] `(filter-in pred lst)` returns the list of those elements in `lst` that satisfy the predicate
> `pred`.
>
> ```scheme
> > (filter-in number? '(a 2 (1 3) b 7))
> (2 7)
> > (filter-in symbol? '(a (b c) 17 foo))
> (a foo)
> ```

```racket
(define filter-in
  (lambda (pred lst)
    (if (null? lst)
        '()
        (let ([element (car lst)]
              [tail (filter-in pred (cdr lst))])
          (if (pred element)
              (cons element tail)
              tail)))))
```

> Exercise 1.23 [★★] `(list-index pred lst)` returns the 0-based position of the first element of `lst` that satisfies
> the predicate `pred`. If no element of `lst` satisfies the predicate, then `list-index` returns `#f`.
>
> ```scheme
> > (list-index number? '(a 2 (1 3) b 7))
> 1
> > (list-index symbol? '(a (b c) 17 foo))
> 0
> > (list-index symbol? '(1 2 (a b) 3))
> #f
> ```

```scheme
(define list-index-helper
  (lambda (n pred lst)
    (if (null? lst)
        #f
        (if (pred (car lst))
            n
            (list-index-helper (+ n 1) pred (cdr lst))))))

(define list-index
  (lambda (pred lst)
    (list-index-helper 0 pred lst)))
```

> Exercise 1.24 [★★] `(every? pred lst)` returns `#f` if any element of `lst` fails to satisfy `pred`, and returns
> `#t` otherwise.
>
> ```scheme
> > (every? number? '(a b c 3 e))
> #f
> > (every? number? '(1 2 3 5 4))
> #t
> ```

```scheme
(define every?
  (lambda (pred lst)
    (if (null? lst)
        #t
        (and (pred (car lst))
             (every? pred (cdr lst))))))
```

> Exercise 1.25 [★★] `(exists? pred lst)` returns `#t` if any element of `lst` satisfies `pred`, and returns `#f`
> otherwise.
>
> ```scheme
> > (exists? number? '(a b c 3 e))
> #t
> > (exists? number? '(a b c d e))
> #f
> ```

```scheme
(define exists?
  (lambda (pred lst)
    (if (null? lst)
        #f
        (or (pred (car lst))
            (exists? pred (cdr lst))))))
```

> Exercise 1.26 [★★] `(up lst)` removes a pair of parentheses from each top-level element of `lst`. If a top-level
> element is not a list, it is included in the result, as is. The value of `(up (down lst))` is equivalent to lst,
> but `(down (up lst))` is not necessarily `lst`. (See exercise 1.17.)
>
> ```scheme
> > (up '((1 2) (3 4)))
> (1 2 3 4)
> > (up '((x (y)) z))
> (x (y) z)
> ```

```scheme
(define extend-head
  (lambda (tail head)
    (if (null? head)
        tail
        (cons (car head) (extend-head tail (cdr head))))))

(define up-element
  (lambda (tail element)
    (if (list? element)
        (extend-head tail element)
        (cons element tail))))

(define up
  (lambda (lst)
    (if (null? lst)
        '()
        (up-element (up (cdr lst)) (car lst)))))
```

> Exercise 1.27 [★★] `(flatten slist)` returns a list of the symbols contained in `slist` in the order in which they
> occur when `slist` is printed. Intuitively, `flatten` removes all the inner parentheses from its argument.
>
> ```scheme
> > (flatten '(a b c))
> (a b c)
> > (flatten '((a) () (b ()) () (c)))
> (a b c)
> > (flatten '((a b) c (((d)) e)))
> (a b c d e)
> > (flatten '(a b (() (c))))
> (a b c)
> ```

```scheme
(define flatten-element
  (lambda (tail element)
    (if (list? element)
        (flatten-helper tail element)
        (cons element tail))))

(define flatten-helper
  (lambda (tail slist)
    (if (null? slist)
        tail
        (flatten-element (flatten-helper tail (cdr slist))
                         (car slist)))))

(define flatten
  (lambda (slist)
    (flatten-helper '() slist)))
```

> Exercise 1.28 [★★] `(merge loi1 loi2)`, where `loi1` and `loi2` are lists of integers that are sorted in ascending
> order, returns a sorted list of all the integers in `loi1` and `loi2`.
>
> ```scheme
> > (merge '(1 4) '(1 2 8))
> (1 1 2 4 8)
> > (merge '(35 62 81 90 91) '(3 83 85 90))
> (3 35 62 81 83 85 90 90 91)
> ```

```racket
(define merge-helper
  (lambda (loi1 loi2)
    (if (null? loi1)
        loi2
        (let ([i1 (car loi1)]
              [i2 (car loi2)])
          (if (< i1 i2)
              (cons i1 (merge-helper (cdr loi1) loi2))
              (cons i2 (merge-helper (cdr loi2) loi1)))))))

(define merge
  (lambda (loi1 loi2)
    (if (null? loi1)
        loi2
        (merge-helper loi2 loi1))))
```

> Exercise 1.29 [★★] `(sort loi)` returns a list of the elements of `loi` in ascending order.
>
> ```scheme
> > (sort '(8 2 5 2 3))
> (2 2 3 5 8)
> ```

```racket
(define get-run
  (lambda (loi)
    (let ([head1 (car loi)]
          [tail1 (cdr loi)])
      (if (null? tail1)
          (cons loi '())
          (let ([head2 (car tail1)])
            (if (<= head1 head2)
                (let ([tail-run (get-run tail1)])
                  (cons (cons head1 (car tail-run)) (cdr tail-run)))
                (cons (list head1) tail1)))))))

(define merge
  (lambda (run1 run2)
    (let ([head1 (car run1)]
          [head2 (car run2)])
      (if (<= head1 head2)
          (let ([tail1 (cdr run1)])
            (if (null? tail1)
                (cons head1 run2)
                (cons head1 (merge tail1 run2))))
          (let ([tail2 (cdr run2)])
            (if (null? tail2)
                (cons head2 run1)
                (cons head2 (merge run1 tail2))))))))

(define collapse-all
  (lambda (stack run)
    (if (null? stack)
        run
        (collapse-all (cdr stack) (merge (cdar stack) run)))))

(define collapse
  (lambda (stack level run)
    (if (null? stack)
        (list (cons level run))
        (let ([top (car stack)])
          (if (= (car top) level)
              (collapse (cdr stack) (+ level 1) (merge (cdr top) run))
              (cons (cons level run) stack))))))

(define sort-helper
  (lambda (stack loi)
    (let* ([run-and-tail (get-run loi)]
           [run (car run-and-tail)]
           [tail (cdr run-and-tail)])
      (if (null? tail)
          (collapse-all stack run)
          (sort-helper (collapse stack 0 run) tail)))))

(define sort
  (lambda (loi)
    (if (null? loi)
        '()
        (sort-helper '() loi))))
```

> Exercise 1.30 [★★] `(sort/predicate pred loi)` returns a list of elements sorted by the predicate.
>
> ```scheme
> > (sort/predicate < '(8 2 5 2 3))
> (2 2 3 5 8)
> > (sort/predicate > '(8 2 5 2 3))
> (8 5 3 2 2)
> ```

```racket
(define get-run
  (lambda (pred loi)
    (let ([head1 (car loi)]
          [tail1 (cdr loi)])
      (if (null? tail1)
          (cons loi '())
          (let ([head2 (car tail1)])
            (if (pred head2 head1)
                (cons (list head1) tail1)
                (let ([tail-run (get-run pred tail1)])
                  (cons (cons head1 (car tail-run)) (cdr tail-run)))))))))

(define merge
  (lambda (pred run1 run2)
    (let ([head1 (car run1)]
          [head2 (car run2)])
      (if (pred head2 head1)
          (let ([tail2 (cdr run2)])
            (if (null? tail2)
                (cons head2 run1)
                (cons head2 (merge pred run1 tail2))))
          (let ([tail1 (cdr run1)])
            (if (null? tail1)
                (cons head1 run2)
                (cons head1 (merge pred tail1 run2))))))))

(define collapse-all
  (lambda (pred stack run)
    (if (null? stack)
        run
        (collapse-all pred (cdr stack) (merge pred (cdar stack) run)))))

(define collapse
  (lambda (pred stack level run)
    (if (null? stack)
        (list (cons level run))
        (let ([top (car stack)])
          (if (= (car top) level)
              (collapse pred (cdr stack) (+ level 1) (merge pred (cdr top) run))
              (cons (cons level run) stack))))))

(define sort-helper
  (lambda (pred stack loi)
    (let* ([run-and-tail (get-run pred loi)]
           [run (car run-and-tail)]
           [tail (cdr run-and-tail)])
      (if (null? tail)
          (collapse-all pred stack run)
          (sort-helper pred (collapse pred stack 0 run) tail)))))

(define sort/predicate
  (lambda (pred loi)
    (if (null? loi)
        '()
        (sort-helper pred '() loi))))
```

> Exercise 1.31 [★] Write the following procedures for calculating on a bintree (definition 1.1.7): `leaf` and
> `interior-node`, which build bintrees, `leaf?`, which tests whether a bintree is a leaf, and `lson`, `rson`, and
> `contents-of`, which extract the components of a node. `contents-of` should work on both leaves and interior nodes.

```scheme
(define leaf
  (lambda (num)
    num))

(define interior-node
  (lambda (symbol left-child right-child)
    (cons symbol (cons left-child right-child))))

(define leaf? integer?)

(define lson cadr)

(define rson cddr)

(define contents-of
  (lambda (bin-tree)
    (if (leaf? bin-tree)
        bin-tree
        (car bin-tree))))
```

> Exercise 1.32 [★] Write a procedure `double-tree` that takes a bintree, as represented in definition 1.1.7, and
> produces another bintree like the original, but with all the integers in the leaves doubled.

```scheme
(define double-tree
  (lambda (bin-tree)
    (if (leaf? bin-tree)
        (leaf (* (contents-of bin-tree) 2))
        (interior-node (contents-of bin-tree)
                       (double-tree (lson bin-tree))
                       (double-tree (rson bin-tree))))))
```

> Exercise 1.33 [★★] Write a procedure `mark-leaves-with-red-depth` that takes a bintree (definition 1.1.7), and
> produces a bintree of the same shape as the original, except that in the new tree, each leaf contains the number of
> nodes between it and the root that contain the symbol `red`. For example, the expression
>
> ```scheme
> (mark-leaves-with-red-depth
>  (interior-node 'red
>                 (interior-node 'bar
>                                (leaf 26)
>                                (leaf 12))
>                 (interior-node 'red
>                                (leaf 11)
>                                (interior-node 'quux
>                                               (leaf 117)
>                                               (leaf 14)))))
> ```
>
> which is written using the procedures defined in exercise 1.31, should return the bintree
>
> ```scheme
> (red
>  (bar 1 1)
>  (red 2 (quux 2 2)))
> ```

```racket
(define mark-leaves-with-red-depth-helper
  (lambda (bin-tree red-num)
    (if (leaf? bin-tree)
        (leaf red-num)
        (let* ([content (contents-of bin-tree)]
               [new-red-num (if (eqv? content 'red) (+ red-num 1) red-num)])
          (interior-node content
                         (mark-leaves-with-red-depth-helper (lson bin-tree) new-red-num)
                         (mark-leaves-with-red-depth-helper (rson bin-tree) new-red-num))))))

(define mark-leaves-with-red-depth
  (lambda (bin-tree)
    (mark-leaves-with-red-depth-helper bin-tree 0)))
```

> Exercise 1.34 [★★★] Write a procedure `path` that takes an integer `n` and a binary search tree `bst` (page 10)
> that contains the integer `n`, and returns a list of `left`s and `right`s showing how to find the node containing `n`.
> If `n` is found at the root, it returns the empty list.
>
> ```scheme
> > (path 17 '(14 (7 () (12 () ()))
>                 (26 (20 (17 () ())
>                         ())
>                     (31 () ()))))
> (right left left)
> ```

```racket
(define path
  (lambda (n bst)
    (let ([head (car bst)])
      (if (< n head)
          (cons 'left (path n (cadr bst)))
          (if (= n head)
              '()
              (cons 'right (path n (caddr bst))))))))
```

> Exercise 1.35 [★★★] Write a procedure `number-leaves` that takes a bintree, and produces a bintree like the
> original, except the contents of the leaves are numbered starting from 0. For example,
>
> ```scheme
> (number-leaves
>  (interior-node 'foo
>                 (interior-node 'bar
>                                (leaf 26)
>                                (leaf 12))
>                 (interior-node 'baz
>                                (leaf 11)
>                                (interior-node 'quux
>                                               (leaf 117)
>                                               (leaf 14)))))
> ```
>
> should return
>
> ```scheme
> (foo
>  (bar 0 1)
>  (baz
>   2
>   (quux 3 4)))
> ```

```racket
(define number-leaves-helper
  (lambda (bin-tree n)
    (if (leaf? bin-tree)
        (cons (leaf n) (+ n 1))
        (let* ([left-result (number-leaves-helper (lson bin-tree) n)]
               [right-result (number-leaves-helper (rson bin-tree) (cdr left-result))])
          (cons (interior-node (contents-of bin-tree)
                               (car left-result)
                               (car right-result))
                (cdr right-result))))))

(define number-leaves
  (lambda (bin-tree)
    (car (number-leaves-helper bin-tree 0))))
```

> Exercise 1.36 [★★★] Write a procedure `g` such that `number-elements` from page 23 could be defined as
>
> ```scheme
> (define number-elements
>   (lambda (lst)
>     (if (null? lst) '()
>         (g (list 0 (car lst)) (number-elements (cdr lst))))))
> ```

```scheme
(define g
  (lambda (head tail)
    (cons head
          (map (lambda (item)
                 (list (+ (car item) 1) (cadr item)))
               tail))))
```

> Exercise 2.1 [★] Implement the four required operations for bigits. Then use your implementation to calculate the
> factorial of 10. How does the execution time vary as this argument changes? How does the execution time vary as the
> base changes? Explain why.

```racket
(define *base* 10)
(define *base-sub-1* (- *base* 1))

(define zero
  (lambda ()
    '()))

(define is-zero? null?)

(define successor
  (lambda (n)
    (if (null? n)
        '(1)
        (let ([lowest-digit (car n)])
          (if (= lowest-digit *base-sub-1*)
              (cons 0 (successor (cdr n)))
              (cons (+ lowest-digit 1) (cdr n)))))))

(define predecessor
  (lambda (n)
    (let ([lowest-digit (car n)]
          [rest-digits (cdr n)])
      (if (= lowest-digit 0)
          (cons *base-sub-1* (predecessor rest-digits))
          (if (and (= lowest-digit 1) (null? rest-digits))
              '()
              (cons (- lowest-digit 1) (cdr n)))))))

(define plus
  (lambda (m n)
    (if (is-zero? n)
        m
        (plus (successor m) (predecessor n)))))

(define multiply-helper
  (lambda (base m n)
    (if (is-zero? n)
        base
        (multiply-helper (plus base m) m (predecessor n)))))

(define multiply
  (lambda (m n)
    (multiply-helper (zero) m n)))

(define factorial-helper
  (lambda (base n)
    (if (is-zero? n)
        base
        (factorial-helper (multiply base n) (predecessor n)))))

(define factorial
  (lambda (n)
    (factorial-helper (successor (zero)) n)))
```

When the argument of `factorial` becomes larger, the execution time becomes longer. Obviously.

The execution time becomes shorter when the base becomes larger. I think that’s because fewer allocations are needed
when the base becomes larger.

> Exercise 2.2 [★★] Analyze each of these proposed representations critically. To what extent do they succeed or fail
> in satisfying the specification of the data type?

1. Unary representation. Too much space consumed.
2. Scheme number representation. Not every language has native big integer support.
3. Bignum representation. Not easy to implement.

> Exercise 2.3 [★★] Define a representation of all the integers (negative and nonnegative) as diff-trees, where a
> diff-tree is a list defined by the grammar
>
> *Diff-tree* ::= `(one)` \| `(diff `*Diff-tree*` `*Diff-tree*`)`
>
> The list `(one)` represents 1. If $$ t _ 1 $$ represents $$ n _ 1 $$ and $$ t _ 2 $$ represents $$ n _ 2 $$, then
> `(diff t1 t2)` is a representation of $$ n _ 1 - n _ 2 $$.
>
> So both `(one)` and `(diff (one) (diff (one) (one)))` are representations of 1; `(diff (diff (one) (one)) (one))` is a
> representation of -1.
>
> 1. Show that every number has infinitely many representations in this system.
> 2. Turn this representation of the integers into an implementation by writing `zero`, `is-zero?`, `successor`, and
>    `predecessor`, as specified on page 32, except that now the negative integers are also represented. Your procedures
>    should take as input any of the multiple legal representations of an integer in this scheme. For example, if your
>    `successor` procedure is given any of the infinitely many legal representations of 1, it should produce one of the
>    legal representations of 2. It is permissible for different legal representations of 1 to yield different legal
>    representations of 2.
> 3. Write a procedure `diff-tree-plus` that does addition in this representation. Your procedure should be optimized
>    for the diff-tree representation, and should do its work in a constant amount of time (independent of the size of
>    its inputs). In particular, it should not be recursive.

1. 0 has infinitely many representations: `(diff (one) (one))`, `(diff (diff (one) (one)) (diff (one) (one)))`, and so
   on. *n* can be represented as `(diff `*n*` `0`)`, since 0 has infinitely many representations, *n* has infinitely
   many representations.
2. ```scheme
   (define zero
     (lambda ()
       '(diff (one) (one))))

   (define interpret
     (lambda (n)
       (if (eqv? (car n) 'one)
           1
           (- (interpret (cadr n))
              (interpret (caddr n))))))

   (define is-zero?
     (lambda (n)
       (zero? (interpret n))))

   (define successor
     (lambda (n)
       (list 'diff n '(diff (diff (one) (one)) (one)))))

   (define predecessor
     (lambda (n)
       (list 'diff n '(one))))
   ```
3. ```scheme
   (define diff-tree-plus
     (lambda (m n)
       (list 'diff m (list 'diff '(diff (one) (one)) n))))
   ```

> Exercise 2.4 [★★] Consider the data type of *stacks* of values, with an interface consisting of the procedures
> `empty-stack`, `push`, `pop`, `top`, and `empty-stack?`. Write a specification for these operations in the style of
> the example above. Which operations are constructors and which are observers?

- `(empty-stack)` = ⌈∅⌉
- `(push `⌈*f*⌉` `*v*`)` = ⌈*g*⌉, where *g*(0) = *v*, and *g*(*n* + 1) = *f*(*n*)
- `(pop `⌈*f*⌉`)` = *g*, where *g*(*n*) = *f*(*n* + 1)
- `(top `⌈*f*⌉`)` = ⌈*f*(0)⌉
- `(empty-stack? `⌈*f*⌉`)` = `#t` if *f* = ∅, `#f` otherwise

Constructors: `empty-stack`, `push` and `pop`.

Observers: `top` and `empty-stack?`.

> Exercise 2.5 [★] We can use any data structure for representing environments, if we can distinguish empty
> environments from non-empty ones, and in which one can extract the pieces of a non-empty environment. Implement
> environments using a representation in which the empty environment is represented as the empty list, and in which
> `extend-env` builds an environment that looks like
>
> ```
>       ┌───┬───┐
>       │ ╷ │ ╶─┼─► saved-env
>       └─┼─┴───┘
>         ▼
>       ┌───┬───┐
>       │ ╷ │ ╷ │
>       └─┼─┴─┼─┘
>     ┌───┘   └───┐
>     ▼           ▼
> saved-var   saved-val
> ```
>
> This is called an *a-list* or *association-list* representation.

```racket
(define empty-env
  (lambda ()
    '()))

(define apply-env
  (lambda (env search-var)
    (let ([head (car env)])
      (if (eqv? (car head) search-var)
          (cdr head)
          (apply-env (cdr env) search-var)))))

(define extend-env
  (lambda (var val env)
    (cons (cons var val) env)))
```

> Exercise 2.6 [★] Invent at least three different representations of the environment interface and implement them.

*Deferred.*

> Exercise 2.7 [★] Rewrite `apply-env` in figure 2.1 to give a more informative error message.

```racket
(define empty-env
  (lambda ()
    '(empty-env)))

(define extend-env
  (lambda (var val env)
    (list 'extend-env var val env)))

(define apply-env
  (lambda (env search-var)
    (let loop ([env1 env])
      (cond
        [(eqv? (car env1) 'empty-env) (report-no-binding-found search-var env)]
        [(eqv? (car env1) 'extend-env) (let ([saved-var (cadr env1)]
                                             [saved-val (caddr env1)]
                                             [saved-env (cadddr env1)])
                                         (if (eqv? search-var saved-var)
                                             saved-val
                                             (loop saved-env)))]
        [else (report-invalid-env env1)]))))

(define collect-bindings
  (lambda (env)
    (let loop ([base '()]
               [env env])
      (let ([tag (car env)])
        (cond [(eqv? tag 'empty-env) base]
              [(eqv? tag 'extend-env) (let ([saved-var (cadr env)]
                                            [saved-val (caddr env)]
                                            [saved-env (cadddr env)])
                                        (loop (if (assv saved-var base)
                                                  base
                                                  (cons (cons saved-var saved-val) base))
                                              saved-env))])))))

(define report-no-binding-found
  (lambda (search-var env)
    (eopl:error 'apply-env "No binding for ~s. All bindings: ~s" search-var (collect-bindings env))))

(define report-invalid-env
  (lambda (env)
    (eopl:error 'apply-env "Bad environment: ~s" env)))
```

> Exercise 2.8 [★] Add to the environment interface an observer called `empty-env?` and implement it using the
> a-list representation.

`(emtpy-env? `⌈*f*⌉`)` = `#t` if *f* = ∅, `#f` otherwise.

```scheme
(define empty-env? null?)
```

> Exercise 2.9 [★] Add to the environment interface an observer called `has-binding?` that takes an environment *env*
> and a variable *s* and tests to see if *s* has an associated value in *env*. Implement it using the a-list
> representation.

`(has-binding? `⌈*f*⌉`)` = `#t` if *f*(*var*) = *val* for some *var* and *val*, `#f` otherwise.

```racket
(define has-binding?
  (lambda (env search-var)
    (cond [(null? env) #f]
          [(eqv? (caar env) search-var) #t]
          [else (has-binding? (cdr env) search-var)])))
```

> Exercise 2.10 [★] Add to the environment interface a constructor `extend-env*`, and implement it using the a-list
> representation. This constructor takes a list of variables, a list of values of the same length, and an environment,
> and is specified by
>
> `(extend-env* (`*var*<sub>1</sub> … *var*<sub>*k*</sub>`) (`*val*<sub>1</sub> … *val*<sub>*k*</sub>`) `⌈*f*⌉`)` = ⌈*g*⌉,
> where *g*(*var*) = *val*<sub>*i*</sub> if *var* = *var*<sub>*i*</sub> for some *i* such that 1 ≤ *i* ≤ *k*, *f*(*var*)
> otherwise.

```scheme
(define extend-env*
  (lambda (vars vals env)
    (if (null? vars)
        env
        (extend-env* (cdr vars)
                     (cdr vals)
                     (cons (cons (car vars) (car vals)) env)))))
```

> Exercise 2.11 [★★] A naive implementation of `extend-env*` from the preceding exercise requires time proportional to
> *k* to run. It is possible to represent environments so that `extend-env*` requires only constant time: represent
> the empty environment by the empty list, and represent a non-empty environment by the data structure
>
> ```
>       ┌───┬───┐
>       │ ╷ │ ╶─┼─► saved-env
>       └─┼─┴───┘
>         ▼
>       ┌───┬───┐
>       │ ╷ │ ╷ │
>       └─┼─┴─┼─┘
>     ┌───┘   └───┐
>     ▼           ▼
> saved-vars  saved-vals
> ```
>
> Such an environment might look like
>
> ```
>                backbone
>                   │
>     ┌───┬───┐     ▼     ┌───┬───┐           ┌───┬───┐
>     │ ╷ │ ╶─┼──────────►│ ╷ │ ╶─┼──────────►│ ╷ │ ╶─┼──────────► rest of environment
>     └─┼─┴───┘           └─┼─┴───┘           └─┼─┴───┘
>       ▼                   ▼                   ▼
>     ┌───┬───┐           ┌───┬───┐           ┌───┬───┐
>     │ ╷ │ ╷ │           │ ╷ │ ╷ │           │ ╷ │ ╷ │
>     └─┼─┴─┼─┘           └─┼─┴─┼─┘           └─┼─┴─┼─┘
>    ┌──┘   └──┐         ┌──┘   └──┐         ┌──┘   └──┐
>    ▼         ▼         ▼         ▼         ▼         ▼
> (a b c)  (11 12 13)  (x z)    (66 77)    (x y)    (88 99)
> ```
>
> This is called the *ribcage* representation. The environment is represented as a list of pairs called *ribs*; each
> left rib is a list of variables and each right rib is the corresponding list of values.
>
> Implement the environment interface, including `extend-env*`, in this representation.

```racket
(define empty-env
  (lambda ()
    '()))

(define apply-env
  (lambda (env search-var)
    (let loop ([env env])
      (let ([rib (car env)])
        (let apply-rib ([vars (car rib)]
                        [vals (cdr rib)])
          (cond [(null? vars) (loop (cdr env))]
                [(eqv? (car vars) search-var) (car vals)]
                [else (apply-rib (cdr vars) (cdr vals))]))))))

(define extend-env*
  (lambda (vars vals env)
    (cons (cons vars vals) env)))

(define extend-env
  (lambda (var val env)
    (extend-env* (list var) (list val) env)))
```

> Exercise 2.12 [★] Implement the stack data type of exercise 2.4 using a procedural representation.

```racket
(define empty-stack
  (lambda ()
    (lambda (command)
      (cond [(eqv? command 'empty?) #t]))))

(define push
  (lambda (stack val)
    (lambda (command)
      (cond [(eqv? command 'empty?) #f]
            [(eqv? command 'pop) stack]
            [(eqv? command 'top) val]))))

(define pop
  (lambda (stack)
    (stack 'pop)))

(define top
  (lambda (stack)
    (stack 'top)))

(define empty-stack?
  (lambda (stack)
    (stack 'empty?)))
```

> Exercise 2.13 [★★] Extend the procedural representation to implement `empty-env?` by representing the environment by
> a list of two procedures: one that returns the value associated with a variable, as before, and one that returns
> whether or not the environment is empty.

```scheme
(define report-no-binding-found
  (lambda (search-var)
    (eopl:error 'apply-env "No binding for ~s" search-var)))

(define empty-env
  (lambda ()
    (list (lambda (search-var)
            (report-no-binding-found search-var))
          (lambda ()
            #t))))

(define empty-env?
  (lambda (env)
    ((cadr env))))

(define extend-env
  (lambda (saved-var saved-val saved-env)
    (list (lambda (search-var)
            (if (eqv? search-var saved-var)
                saved-val
                (apply-env saved-env search-var)))
          (lambda ()
            #f))))

(define apply-env
  (lambda (env search-var)
    ((car env) search-var)))
```

> Exercise 2.14 [★★] Extend the representation of the preceding exercise to include a third procedure that implements
> `has-binding?` (see exercise 2.9).

```scheme
(define report-no-binding-found
  (lambda (search-var)
    (eopl:error 'apply-env "No binding for ~s" search-var)))

(define empty-env
  (lambda ()
    (list (lambda (search-var)
            (report-no-binding-found search-var))
          (lambda ()
            #t)
          (lambda (search-var)
            #f))))

(define empty-env?
  (lambda (env)
    ((cadr env))))

(define extend-env
  (lambda (saved-var saved-val saved-env)
    (list (lambda (search-var)
            (if (eqv? search-var saved-var)
                saved-val
                (apply-env saved-env search-var)))
          (lambda ()
            #f)
          (lambda (search-var)
            (or (eqv? saved-var search-var)
                (has-binding? saved-env search-var))))))

(define apply-env
  (lambda (env search-var)
    ((car env) search-var)))

(define has-binding?
  (lambda (env search-var)
    ((caddr env) search-var)))
```

> Exercise 2.15 [★] Implement the lambda-calculus expression interface for the representation specified by the grammar
> above.

```scheme
(define var-exp
  (lambda (var)
    var))

(define lambda-exp
  (lambda (bound-var body)
    `(lambda (,bound-var)
       ,body)))

(define app-exp
  (lambda (operator operand)
    `(,operator ,operand)))

(define var-exp? symbol?)

(define lambda-exp?
  (lambda (exp)
    (and (pair? exp)
         (eqv? (car exp) 'lambda))))

(define app-exp?
  (lambda (exp)
    (and (pair? exp)
         (not (eqv? (car exp) 'lambda)))))

(define var-exp->var
  (lambda (exp)
    exp))

(define lambda-exp->bound-var caadr)

(define lambda-exp->body caddr)

(define app-exp->rator car)

(define app-exp->rand cadr)
```

> Exercise 2.16 [★] Modify the implementation to use a representation in which there are no parentheses around the
> bound variable in a `lambda` expression.

```scheme
(define lambda-exp
  (lambda (bound-var body)
    `(lambda ,bound-var ,body)))

(define lambda-exp->bound-var cadr)
```

Remaining implementations are the same as the ones in exercise 2.15.

> Exercise 2.17 [★] Invent at least two other representations of the data type of lambda-calculus expressions and
> implement them.

*Skipped for now.*

> Exercise 2.18 [★] We usually represent a sequence of values as a list. In this representation, it is easy to move
> from one element in a sequence to the next, but it is hard to move from one element to the preceding one without the
> help of context arguments. Implement non-empty bidirectional sequences of integers, as suggested by the grammar
>
> *NodeInSequence* ::= `(`*Int*` `*Listof*`(`*Int*`) `*Listof*`(`*Int*`))`
>
> The first list of numbers is the elements of the sequence preceding the current one, in reverse order, and the second
> list is the elements of the sequence after the current one. For example, `(6 (5 4 3 2 1) (7 8 9))` represents the list
> `(1 2 3 4 5 6 7 8 9)`, with the focus on the element 6.
>
> In this representation, implement the procedure `number->sequence`, which takes a number and produces a sequence
> consisting of exactly that number. Also implement `current-element`, `move-to-left`, `move-to-right`,
> `insert-to-left`, `insert-to-right`, `at-left-end?`, and `at-right-end?`.
>
> For example:
>
> ```scheme
> > (number->sequence 7)
> (7 () ())
> > (current-element '(6 (5 4 3 2 1) (7 8 9)))
> 6
> > (move-to-left '(6 (5 4 3 2 1) (7 8 9)))
> (5 (4 3 2 1) (6 7 8 9))
> > (move-to-right '(6 (5 4 3 2 1) (7 8 9)))
> (7 (6 5 4 3 2 1) (8 9))
> > (insert-to-left 13 '(6 (5 4 3 2 1) (7 8 9)))
> (6 (13 5 4 3 2 1) (7 8 9))
> > (insert-to-right 13 '(6 (5 4 3 2 1) (7 8 9)))
> (6 (5 4 3 2 1) (13 7 8 9))
> ```
>
> The procedure `move-to-right` should fail if its argument is at the right end of the sequence, and the procedure
> `move-to-left` should fail if its argument is at the left end of the sequence.

```racket
(define number->sequence
  (lambda (num)
    (list num '() '())))

(define current-element car)

(define move-to-left
  (lambda (node)
    (let ([before (cadr node)])
      (if (null? before)
          (eopl:error 'move-to-left "Cannot move to left when at left end.")
          (let ([num (car node)]
                [after (caddr node)])
            (list (car before) (cdr before) (cons num after)))))))

(define move-to-right
  (lambda (node)
    (let ([after (caddr node)])
      (if (null? after)
          (eopl:error 'move-to-right "Cannot move to right when at right end.")
          (let ([num (car node)]
                [before (cadr node)])
            (list (car after) (cons num before) (cdr after)))))))

(define insert-to-left
  (lambda (num node)
    (let ([current (car node)]
          [before (cadr node)]
          [after (caddr node)])
      (list current (cons num before) after))))

(define insert-to-right
  (lambda (num node)
    (let ([current (car node)]
          [before (cadr node)]
          [after (caddr node)])
      (list current before (cons num after)))))

(define at-left-end?
  (lambda (node)
    (null? (cadr node))))

(define at-right-end?
  (lambda (node)
    (null? (caddr node))))
```

> Exercise 2.19 [★] A binary tree with empty leaves and with interior nodes labeled with integers could be represented
> using the grammar
>
> Bintree ::= `()` \| `(`*Int*` `*Bintree*` `*Bintree*`)`
>
> In this representation, implement the procedure `number->bintree`, which takes a number and produces a binary tree
> consisting of a single node containing that number. Also implement `current-element`, `move-to-left-son`,
> `move-to-right-son`, `at-leaf?`, `insert-to-left`, and `insert-to-right`. For example,
>
> ```scheme
> > (number->bintree 13)
> (13 () ())
> > (define t1 (insert-to-right 14
>                               (insert-to-left 12
>                                               (number->bintree 13))))
> > t1
> (13
>  (12 () ())
>  (14 () ()))
> > (move-to-left-son t1)
> (12 () ())
> > (current-element (move-to-left-son t1))
> 12
> > (at-leaf? (move-to-right-son (move-to-left-son t1)))
> #t
> > (insert-to-left 15 t1)
> (13
>  (15
>   (12 () ())
>   ())
>  (14 () ()))
> ```

```racket
(define number->bintree
  (lambda (num)
    `(,num () ())))

(define current-element car)

(define move-to-left-son cadr)

(define move-to-right-son caddr)

(define at-leaf? null?)

(define insert-to-left
  (lambda (num bintree)
    (let ([root-value (car bintree)]
          [left-child (cadr bintree)]
          [right-child (caddr bintree)])
      `(,root-value (,num ,left-child ()) ,right-child))))

(define insert-to-right
  (lambda (num bintree)
    (let ([root-value (car bintree)]
          [left-child (cadr bintree)]
          [right-child (caddr bintree)])
      `(,root-value ,left-child (,num () ,right-child)))))
```

> Exercise 2.20 [★★★] In the representation of binary trees in exercise 2.19 it is easy to move from a parent node to
> one of its sons, but it is impossible to move from a son to its parent without the help of context arguments. Extend
> the representation of lists in exercise 2.18 to represent nodes in a binary tree. As a hint, consider representing the
> portion of the tree above the current node by a reversed list, as in exercise 2.18.
>
> In this representation, implement the procedures from exercise 2.19. Also implement `move-up` and `at-root?`.

```racket
(define number->bintree
  (lambda (num)
    (cons `(,num () ()) '())))

(define current-element caar)

(define move-to-left-son
  (lambda (bintree)
    (let* ([current (car bintree)]
           [value (car current)]
           [left-son (cadr current)]
           [right-son (caddr current)]
           [parents (cdr bintree)])
      (cons left-son
            (cons (list value 'right right-son)
                  parents)))))

(define move-to-right-son
  (lambda (bintree)
    (let* ([current (car bintree)]
           [value (car current)]
           [left-son (cadr current)]
           [right-son (caddr current)]
           [parents (cdr bintree)])
      (cons right-son
            (cons (list value 'left left-son)
                  parents)))))

(define at-leaf?
  (lambda (bintree)
    (null? (car bintree))))

(define insert-to-left
  (lambda (num bintree)
    (let* ([current (car bintree)]
           [value (car current)]
           [left-son (cadr current)]
           [right-son (caddr current)]
           [parents (cdr bintree)])
      (cons `(,value (,num ,left-son ()) ,right-son)
            parents))))

(define insert-to-right
  (lambda (num bintree)
    (let* ([current (car bintree)]
           [value (car current)]
           [left-son (cadr current)]
           [right-son (caddr current)]
           [parents (cdr bintree)])
      (cons `(,value ,left-son (,num () ,right-son))
            parents))))

(define move-up
  (lambda (bintree)
    (let* ([current (car bintree)]
           [parents (cdr bintree)]
           [parent (car parents)]
           [parent-value (car parent)]
           [parent-other-branch (cadr parent)]
           [parent-other-son (caddr parent)]
           [rest-parents (cdr parents)])
      (if (eqv? parent-other-branch 'left)
          (cons (list parent-value parent-other-son current)
                rest-parents)
          (cons (list parent-value current parent-other-son)
                rest-parents)))))

(define at-root?
  (lambda (bintree)
    (null? (cdr bintree))))
```

> Exercise 2.21 [★] Implement the data type of environments, as in section 2.2.2, using `define-datatype`. Then include
> `has-binding?` of exercise 2.9.

```racket
(define-datatype env-type env?
  (empty-env)
  (extend-env [var symbol?]
              [val always?]
              [env env?]))

(define apply-env
  (lambda (env search-var)
    (cases env-type env
      [empty-env () (eopl:error 'apply-env "No binding for ~s" search-var)]
      [extend-env (var val env) (if (eqv? var search-var)
                                    val
                                    (apply-env env search-var))])))

(define has-binding?
  (lambda (env search-var)
    (cases env-type env
      [empty-env () #f]
      [extend-env (var val env) (or (eqv? var search-var)
                                    (has-binding? env search-var))])))
```

> Exercise 2.22 [★] Using `define-datatype`, implement the stack data type of exercise 2.4.

```racket
(define-datatype stack-type stack?
  (empty-stack)
  (push [saved-stack stack?]
        [val always?]))

(define pop
  (lambda (stack)
    (cases stack-type stack
      [empty-stack () (eopl:error 'pop "Can not pop an empty stack.")]
      [push (saved-stack val) saved-stack])))

(define top
  (lambda (stack)
    (cases stack-type stack
      [empty-stack () (eopl:error 'pop "Can not top an empty stack.")]
      [push (saved-stack val) val])))

(define empty-stack?
  (lambda (stack)
    (cases stack-type stack
      [empty-stack () #t]
      [push (saved-stack val) #f])))
```

> Exercise 2.23 [★] The definition of `lc-exp` ignores the condition in definition 1.1.8 that says “*Identifier* is any
> symbol other than `lambda`.” Modify the definition of *identifier?* to capture this condition. As a hint, remember
> that any predicate can be used in `define-datatype`, even ones you define.

```scheme
(define identifier?
  (lambda (value)
    (and (symbol? value)
         (not (eqv? value 'lambda)))))
```

> Exercise 2.24 [★] Here is a definition of binary trees using `define-datatype`.
>
> ```scheme
> (define-datatype bintree bintree?
>   (leaf-node
>    (num integer?))
>   (interior-node
>    (key symbol?)
>    (left bintree?)
>    (right bintree?)))
> ```
>
> Implement a `bintree-to-list` procedure for binary trees, so that
> `(bintree-to-list (interior-node 'a (leaf-node 3) (leaf-node 4)))` returns the list
>
> ```scheme
> (interior-node
>  a
>  (leaf-node 3)
>  (leaf-node 4))
> ```

```racket
(define bintree-to-list
  (lambda (tree)
    (cases bintree tree
      [leaf-node (num) `(leaf-node ,num)]
      [interior-node (key left right) (list 'interior-node
                                            key
                                            (bintree-to-list left)
                                            (bintree-to-list right))])))
```

> Exercise 2.25 [★★] Use `cases` to write `max-interior`, which takes a binary tree of integers (as in the preceding
> exercise) with at least one interior node and returns the symbol associated with an interior node with a maximal leaf
> sum.
>
> ```scheme
> > (define tree-1
>     (interior-node 'foo (leaf-node 2) (leaf-node 3)))
> > (define tree-2
>     (interior-node 'bar (leaf-node -1) tree-1))
> > (define tree-3
>     (interior-node 'baz tree-2 (leaf-node 1)))
> > (max-interior tree-2)
> foo
> > (max-interior tree-3)
> baz
> ```
>
> The last invocation of `max-interior` might also have returned `foo`, since both the `foo` and `baz` nodes have a leaf
> sum of 5.

```racket
(define-datatype bintree-info bintree-info?
  [leaf-info [num integer?]]
  [interior-info [sum integer?]
                 [max-sum integer?]
                 [max-key symbol?]])

(define max-interior-helper
  (lambda (tree)
    (cases bintree tree
      [leaf-node (num)
                 (leaf-info num)]
      [interior-node (key left right)
                     (let ([left-info (max-interior-helper left)]
                           [right-info (max-interior-helper right)])
                       (cases bintree-info left-info
                         [leaf-info (left-num)
                                    (cases bintree-info right-info
                                      [leaf-info (right-num)
                                                 (let ([sum (+ left-num right-num)])
                                                   (interior-info sum
                                                                  sum
                                                                  key))]
                                      [interior-info (right-sum right-max-sum right-max-key)
                                                     (let ([sum (+ left-num right-sum)])
                                                       (if (< sum right-max-sum)
                                                           (interior-info sum
                                                                          right-max-sum
                                                                          right-max-key)
                                                           (interior-info sum
                                                                          sum
                                                                          key)))])]
                         [interior-info (left-sum left-max-sum left-max-key)
                                        (cases bintree-info right-info
                                          [leaf-info (right-num)
                                                     (let ([sum (+ left-sum right-num)])
                                                       (if (< sum left-max-sum)
                                                           (interior-info sum
                                                                          left-max-sum
                                                                          left-max-key)
                                                           (interior-info sum
                                                                          sum
                                                                          key)))]
                                          [interior-info (right-sum right-max-sum right-max-key)
                                                         (let* ([sum (+ left-sum right-sum)]
                                                                [max-sum-and-key (if (< left-max-sum right-max-sum)
                                                                                     (cons right-max-sum right-max-key)
                                                                                     (cons left-max-sum left-max-key))]
                                                                [max-sum (car max-sum-and-key)]
                                                                [max-key (cdr max-sum-and-key)])
                                                           (if (< sum max-sum)
                                                               (interior-info sum
                                                                              max-sum
                                                                              max-key)
                                                               (interior-info sum
                                                                              sum
                                                                              key)))])]))])))

(define max-interior
  (lambda (tree)
    (cases bintree-info (max-interior-helper tree)
      [leaf-info (num) (eopl:error 'max-interior "~s is not an interior node" tree)]
      [interior-info (sum max-sum max-key) max-key])))
```

> Exercise 2.26 [★★] Here is another version of exercise 1.33. Consider a set of trees given by the following grammar:
>
> | *Red-blue-tree*    | ::= *Red-blue-subtree*                                     |
> | *Red-blue-subtree* | ::= `(red-node `*Red-blue-subtree*` `*Red-blue-subtree*`)` |
> |                    | ::= `(blue-node `{*Red-blue-subtree*}<sup>∗</sup>`)`       |
> |                    | ::= `(leaf-node Int)`                                      |
>
> Write an equivalent definition using `define-datatype`, and use the resulting interface to write a procedure that
> takes a tree and builds a tree of the same shape, except that each leaf node is replaced by a leaf node that contains
> the number of red nodes on the path between it and the root.

```racket
(define-datatype red-blue-tree red-blue-tree?
  [red-node [lson red-blue-tree?]
            [rson red-blue-tree?]]
  [blue-node [sons (list-of red-blue-tree?)]]
  [leaf-node [num integer?]])

(define mark-leaves-with-red-depth-helper
  (lambda (tree red-num)
    (cases red-blue-tree tree
      [red-node (lson rson) (let ([new-red-num (+ red-num 1)])
                              (red-node (mark-leaves-with-red-depth-helper lson new-red-num)
                                        (mark-leaves-with-red-depth-helper rson new-red-num)))]
      [blue-node (sons) (blue-node (map (lambda (son)
                                          (mark-leaves-with-red-depth-helper son red-num))
                                        sons))]
      [leaf-node (_) (leaf-node red-num)])))

(define mark-leaves-with-red-depth
  (lambda (tree)
    (mark-leaves-with-red-depth-helper tree 0)))
```

> Exercise 2.27 [★] Draw the abstract syntax tree for the lambda calculus expressions
>
> ```scheme
> ((lambda (a) (a b)) c)
>
> (lambda (x)
>   (lambda (y)
>     ((lambda (x)
>        (x y))
>      x)))
> ```

```scheme
((lambda (a) (a b)) c)
```

```
           ┌─────────┐
           │ app-exp │
           └────┬────┘
         ┌──────┴───────┐
       rator           rand
   ┌─────┴──────┐  ┌────┴────┐
   │ lambda-exp │  │ var-exp │
   └─────┬──────┘  └────┬────┘
    ┌────┴────┐         │
bound-var    body      var
  ┌─┴─┐  ┌────┴────┐  ┌─┴─┐
  │ a │  │ app-exp │  │ c │
  └───┘  └────┬────┘  └───┘
        ┌─────┴──────┐
      rator         rand
   ┌────┴────┐  ┌────┴────┐
   │ var-exp │  │ var-exp │
   └────┬────┘  └────┬────┘
        │            │
       var          var
      ┌─┴─┐        ┌─┴─┐
      │ a │        │ b │
      └───┘        └───┘
```

```scheme
(lambda (x)
  (lambda (y)
    ((lambda (x)
       (x y))
     x)))
```

```
   ┌────────────┐
   │ lambda-exp │
   └─────┬──────┘
    ┌────┴─────┐
bound-var     body
  ┌─┴─┐  ┌─────┴──────┐
  │ x │  │ lambda-exp │
  └───┘  └─────┬──────┘
          ┌────┴────┐
      bound-var    body
        ┌─┴─┐  ┌────┴────┐
        │ y │  │ app-exp │
        └───┘  └────┬────┘
             ┌──────┴───────┐
           rator           rand
       ┌─────┴──────┐  ┌────┴────┐
       │ lambda-exp │  │ var-exp │
       └─────┬──────┘  └────┬────┘
        ┌────┴────┐         │
    bound-var    body      var
      ┌─┴─┐  ┌────┴────┐  ┌─┴─┐
      │ x │  │ app-exp │  │ x │
      └───┘  └────┬────┘  └───┘
            ┌─────┴──────┐
          rator         rand
       ┌────┴────┐  ┌────┴────┐
       │ var-exp │  │ var-exp │
       └────┬────┘  └────┬────┘
            │            │
           var          var
          ┌─┴─┐        ┌─┴─┐
          │ x │        │ y │
          └───┘        └───┘
```

> Exercise 2.28 [★] Write an unparser that converts the abstract syntax of an lc-exp into a string that matches the
> second grammar in this section (page 52).

```racket
(define identifier? symbol?)

(define-datatype lc-exp lc-exp?
  [var-exp [var identifier?]]
  [lambda-exp [bound-var identifier?]
              [body lc-exp?]]
  [app-exp [rator lc-exp?]
           [rand lc-exp?]])

(define unparse-lc-exp
  (lambda (exp)
    (cases lc-exp exp
      [var-exp (var) (symbol->string var)]
      [lambda-exp (bound-var body)
                  (string-append "(lambda ("
                                 (symbol->string bound-var)
                                 ") "
                                 (unparse-lc-exp body)
                                 ")")]
      [app-exp (rator rand)
               (string-append "("
                              (unparse-lc-exp rator)
                              " "
                              (unparse-lc-exp rand)
                              ")")])))
```

> Exercise 2.29 [★] Where a Kleene star or plus (page 7) is used in concrete syntax, it is most convenient to use a
> *list* of associated subtrees when constructing an abstract syntax tree. For example, if the grammar for
> lambda-calculus expressions had been
>
> | *Lc-exp* | ::= | *Identifier*                                                          |
> |          |     | <span style="border: 1px solid">`var-exp (var)`</span>                |
> |          | ::= | `(lambda (`{*Identifier*}<sup>∗</sup>`) `*Lc-exp*`)`                  |
> |          |     | <span style="border: 1px solid">`lambda-exp (bound-vars body)`</span> |
> |          | ::= | `(`*Lc-exp* {*Lc-exp*}<sup>∗</sup>`)`                                 |
> |          |     | <span style="border: 1px solid">`app-exp (rator rands)`               |
>
> then the predicate for the `bound-vars` field could be `(list-of identifier?)`, and the predicate for the `rands`
> field could be `(list-of lc-exp?)`. Write a `define-datatype` and a parser for this grammar that works in this way.

```racket
(define identifier?
  (lambda (x)
    (and (symbol? x)
         (not (eqv? x 'lambda)))))

(define-datatype lc-exp lc-exp?
  [var-exp [var identifier?]]
  [lambda-exp [bound-vars (list-of identifier?)]
              [body lc-exp?]]
  [app-exp [rator lc-exp?]
           [rands (list-of lc-exp?)]])

(define parse-expression
  (lambda (datum)
    (cond [(identifier? datum) (var-exp datum)]
          [(pair? datum) (if (eqv? (car datum) 'lambda)
                             (lambda-exp (cadr datum)
                                         (parse-expression (caddr datum)))
                             (app-exp (parse-expression (car datum))
                                      (map parse-expression (cdr datum))))]
          [else (eopl:error 'parse-expression "Invalid expression: ~s" datum)])))
```

> Exercise 2.30 [★★] The procedure `parse-expression` as defined above is fragile: it does not detect several possible
> syntactic errors, such as `(a b c)`, and aborts with inappropriate error messages for other expressions, such as
> `(lambda)`. Modify it so that it is robust, accepting any s-exp and issuing an appropriate error message if the s-exp
> does not represent a lambda-calculus expression.

```racket
(define identifier?
  (lambda (x)
    (and (symbol? x)
         (not (eqv? x 'lambda)))))

(define-datatype lc-exp lc-exp?
  [var-exp (var identifier?)]
  [lambda-exp [bound-var identifier?]
              [body lc-exp?]]
  [app-exp [rator lc-exp?]
           [rand lc-exp?]])

(define report-error
  (lambda (expected datum)
    (eopl:error 'parse-expression "Expect ~a, but got ~s." expected datum)))

(define parse-lambda-expression
  (lambda (datum)
    (let ([after-lambda (cdr datum)])
      (if (pair? after-lambda)
          (let ([bound-var-list (car after-lambda)]
                [after-bound-var-list (cdr after-lambda)])
            (if (pair? bound-var-list)
                (let ([bound-var (car bound-var-list)]
                      [after-bound-var (cdr bound-var-list)])
                  (if (identifier? bound-var)
                      (if (null? after-bound-var)
                          (if (pair? after-bound-var-list)
                              (let ([body (car after-bound-var-list)]
                                    [after-body (cdr after-bound-var-list)])
                                (if (null? after-body)
                                    (lambda-exp bound-var (parse-expression body))
                                    (report-error "null after body" after-body)))
                              (report-error "a pair after bound var list" after-bound-var-list))
                          (report-error "null after bound var" after-bound-var))
                      (report-error "an identifier" bound-var)))
                (report-error "a pair" bound-var-list)))
          (report-error "a pair after lambda" after-lambda)))))

(define parse-application-expression
  (lambda (datum)
    (let ([rator (car datum)]
          [after-rator (cdr datum)])
      (if (pair? after-rator)
          (let ([rand (car after-rator)]
                [after-rand (cdr after-rator)])
            (if (null? after-rand)
                (app-exp (parse-expression rator) (parse-expression rand))
                (report-error "null after rand" after-rand)))
          (report-error "a pair after rator" after-rator)))))

(define parse-expression
  (lambda (datum)
    (cond [(symbol? datum) (if (eqv? datum 'lambda)
                               (report-error "an identifier" datum)
                               (var-exp datum))]
          [(pair? datum) (if (eqv? (car datum) 'lambda)
                             (parse-lambda-expression datum)
                             (parse-application-expression datum))]
          [else (report-error "a symbol or pair" datum)])))
```

> Exercise 2.31 [★★] Sometimes it is useful to specify a concrete syntax as a sequence of symbols and integers,
> surrounded by parentheses. For example, one might define the set of *prefix lists* by
>
> | *Prefix-list* | ::= `(`*Prefix-exp*`)`              |
> | *Prefix-exp*  | ::= *Int*                           |
> |               | ::= `- `*Prefix-exp*` `*Prefix-exp* |
>
> so that `(- - 3 2 - 4 - 12 7)` is a legal prefix list. This is sometimes called *Polish prefix notation*, after its
> inventor, Jan Łukasiewicz. Write a parser to convert a prefix-list to the abstract syntax
>
> ```scheme
> (define-datatype prefix-exp prefix-exp?
>   (const-exp
>    (num integer?))
>   (diff-exp
>    (operand1 prefix-exp?)
>    (operand2 prefix-exp?)))
> ```
>
> so that the example above produces the same abstract syntax tree as the sequence of constructors
>
> ```scheme
> (diff-exp
>  (diff-exp
>   (const-exp 3)
>   (const-exp 2))
>  (diff-exp
>   (const-exp 4)
>   (diff-exp
>    (const-exp 12)
>    (const-exp 7))))
> ```
>
> As a hint, consider writing a procedure that takes a list and produces a `prefix-exp` and the list of leftover list
> elements.

```racket
(define-datatype prefix-exp prefix-exp?
  [const-exp [num integer?]]
  [diff-exp [operand1 prefix-exp?]
            [operand2 prefix-exp?]])

(define parse-prefix-exp
  (lambda (prefix-list)
    (let ([head (car prefix-list)]
          [tail (cdr prefix-list)])
      (cond [(integer? head) (cons (const-exp head) tail)]
            [(eqv? head '-) (let* ([operand-1-and-rest-1 (parse-prefix-exp tail)]
                                   [operand-1 (car operand-1-and-rest-1)]
                                   [rest-1 (cdr operand-1-and-rest-1)]
                                   [operand-2-and-rest-2 (parse-prefix-exp rest-1)]
                                   [operand-2 (car operand-2-and-rest-2)]
                                   [rest-2 (cdr operand-2-and-rest-2)])
                              (cons (diff-exp operand-1 operand-2) rest-2))]
            [else (eopl:error 'parse-prefix-exp "Bad syntax: ~s." prefix-list)]))))

(define parse-prefix-list
  (lambda (prefix-list)
    (let* ([exp-and-rest (parse-prefix-exp prefix-list)]
           [exp (car exp-and-rest)]
           [rest (cdr exp-and-rest)])
      (if (null? rest)
          exp
          (eopl:error 'parse-prefix-list "Expect null after prefix-exp, but got: ~s." rest)))))
```

> Exercise 3.1 [★] In figure 3.3, list all the places where we used the fact that ⌊⌈*n*⌉⌋ = *n*.

*Skipped for now.*

> Exercise 3.2 [★★] Give an expressed value *val* ∈ *ExpVal* for which ⌈⌊*val*⌋⌉ ≠ *val*.

Not sure, but maybe when *val* is constructed using a *Bool*?

> Exercise 3.3 [★] Why is subtraction a better choice than addition for our single arithmetic operation?

One reason I can think of, is that subtraction is not commutative, that is $$ a - b $$ may not equal to $$ b - a $$. If
our implementation of subtraction is incorrect, we can discover the error quickly.

> Exercise 3.4 [★] Write out the derivation of figure 3.4 as a derivation tree in the style of the one on page 5.

\$$ (((((tt "value-of" quad «tt x» quad ρ) = 33) / ((tt "value-of" quad «tt "-(x, 11)"» quad ρ) = 22)) /
      ((tt "value-of" quad «tt "zero?(-(x, 11))"» quad ρ) = (tt "bool-val" quad tt "#f"))) /
     ((tt "value-of" quad «tt "if zero?(-(x, 11)) then -(y, 2) else -(y, 4)"» quad ρ) =
      (tt "value-of" quad «tt "-(y, 4)"» quad ρ))
     quad quad
     ((tt "value-of" quad «tt y» quad ρ) = 22) / ((tt "value-of" quad «tt "-(y, 4)"» quad ρ) = 18)) /
    ((tt "value-of" quad «tt "if zero?(-(x, 11)) then -(y, 2) else -(y, 4)"» quad ρ) = 18) $$

> Exercise 3.5 [★] Write out the derivation of figure 3.5 as a derivation tree in the style of the one on page 5.

*Skipped for now.*

> Exercise 3.6 [★] Extend the language by adding a new operator minus that takes one argument, *n*, and returns -*n*.
> For example, the value of `minus(-(minus(5), 9))` should be 14.

*Solution is too long, see the code repository.*

> Exercise 3.7 [★] Extend the language by adding operators for addition, multiplication, and integer quotient.

*Solution is too long, see the code repository.*

> Exercise 3.8 [★] Add a numeric equality predicate `equal?` and numeric order predicates `greater?` and `less?` to the
> set of operations in the defined language.

*Solution is too long, see the code repository.*

> Exercise 3.9 [★★] Add list processing operations to the language, including `cons`, `car`, `cdr`, `null?` and
> `emptylist`. A list should be able to contain any expressed value, including another list. Give the definitions of the
> expressed and denoted values of the language, as in section 3.2.2. For example,
>
> ```
> let x = 4
> in cons(x,
>         cons(cons(-(x,1),
>                   emptylist),
>              emptylist))
> ```
>
> should return an expressed value that represents the list `(4 (3))`.

*Solution is too long, see the code repository.*

> Exercise 3.10 [★★] Add an operation `list` to the language. This operation should take any number of arguments, and
> return an expressed value containing the list of their values. For example,
>
> ```
> let x = 4
> in list(x, -(x,1), -(x,3))
> ```
>
> should return an expressed value that represents the list `(4 3 1)`.

*Solution is too long, see the code repository.*

> Exercise 3.11 [★] In a real language, one might have many operators such as those in the preceding exercises.
> Rearrange the code in the interpreter so that it is easy to add new operators.

*Solution is too long, see the code repository.*

> Exercise 3.12 [★] Add to the defined language a facility that adds a `cond` expression. Use the grammar
>
> *Expression* ::= `cond `{*Expression*` ==> `*Expression*}<sup>∗</sup>` end`
>
> In this expression, the expressions on the left-hand sides of the `==>`’s are evaluated in order until one of them
> returns a true value. Then the value of the entire expression is the value of the corresponding right-hand expression.
> If none of the tests succeeds, the expression should report an error.

*Solution is too long, see the code repository.*

> Exercise 3.13 [★] Change the values of the language so that integers are the only expressed values. Modify `if` so
> that the value 0 is treated as false and all other values are treated as true. Modify the predicates accordingly.

*Solution is too long, see the code repository.*

> Exercise 3.14 [★★] As an alternative to the preceding exercise, add a new nonterminal *Bool-exp* of boolean
> expressions to the language. Change the production for conditional expressions to say
>
> *Expression* ::= `if `*Bool-exp*` then `*Expression*` else `*Expression*
>
> Write suitable productions for *Bool-exp* and implement `value-of-bool-exp`. Where do the predicates of exercise 3.8
> wind up in this organization?

*Solution is too long, see the code repository.*

> Exercise 3.15 [★] Extend the language by adding a new operation `print` that takes one argument, prints it, and
> returns the integer 1. Why is this operation not expressible in our specification framework?

*See the code repository for implementation.*

Because `print` cause a side effect while our specification framework does not have something to do this.

> Exercise 3.16 [★★] Extend the language so that a `let` declaration can declare an arbitrary number of variables,
> using the grammar
>
> *Expression* ::= `let `{*Identifier*` = `*Expression*}<sup>∗</sup>` in `*Expression*
>
> As in Scheme’s `let`, each of the right-hand sides is evaluated in the current environment, and the body is evaluated
> with each new variable bound to the value of its associated right-hand side. For example,
>
> ```
> let x = 30
> in let x = -(x,1)
>        y = -(x,2)
>    in -(x,y)
> ```
>
> should evaluate to 1.

*Solution is too long, see the code repository.*

> Exercise 3.17 [★★] Extend the language with a `let*` expression that works like Scheme’s `let*`, so that
>
> ```
> let x = 30
> in let* x = -(x,1) y = -(x,2)
>    in -(x,y)
> ```
>
> should evaluate to 2.

*Solution is too long, see the code repository.*

> Exercise 3.18 [★★] Add an expression to the defined language:
>
> *Expression* ::= `unpack `{*Identifier*}<sup>∗</sup>` = `*Expression*` in `*Expression*
>
> so that `unpack x y z = lst in ...` binds `x`, `y`, and `z` to the elements of `lst` if `lst` is a list of exactly
> three elements, and reports an error otherwise. For example, the value of
>
> ```
> let u = 7
> in unpack x y = cons(u,cons(3,emptylist))
>    in -(x,y)
> ```
>
> should be 4.

*Solution is too long, see the code repository.*

> Exercise 3.19 [★] In many languages, procedures must be created and named at the same time. Modify the language of
> this section to have this property by replacing the `proc` expression with a `letproc` expression.

*Skipped for now.*

> Exercise 3.20 [★] In PROC, procedures have only one argument, but one can get the effect of multiple argument
> procedures by using procedures that return other procedures. For example, one might write code like
>
> ```
> let f = proc (x) proc (y) ...
> in ((f 3) 4)
> ```
>
> This trick is called *Currying*, and the procedure is said to be *Curried*. Write a Curried procedure that takes two
> arguments and returns their sum. You can write *x* + *y* in our language by writing `-(`*x*`, -(0, `*y*`))`.

```
proc (x)
  proc (y)
    -(x, -(0, y))
```

> Exercise 3.21 [★★] Extend the language of this section to include procedures with multiple arguments and calls with
> multiple operands, as suggested by the grammar
>
> *Expression* ::= `proc (`{*Identifier*}<sup>∗(`,`)</sup>`) `*Expression* \\
> *Expression* ::= `(`*Expression*` `{*Expression*}<sup>∗</sup>`)`

*Solution is too long, see the code repository.*

> Exercise 3.22 [★★★] The concrete syntax of this section uses different syntax for a built-in operation, such as
> difference, from a procedure call. Modify the concrete syntax so that the user of this language need not know which
> operations are built-in and which are defined procedures. This exercise may range from very easy to hard, depending on
> the parsing technology being used.

*Solution is too long, see the code repository.*

> Exercise 3.23 [★★] What is the value of the following PROC program?
>
> ```
> let makemult = proc (maker)
>                 proc (x)
>                  if zero?(x)
>                  then 0
>                  else -(((maker maker) -(x,1)), -4)
> in let times4 = proc (x) ((makemult makemult) x)
>    in (times4 3)
> ```
>
> Use the tricks of this program to write a procedure for factorial in PROC. As a hint, remember that you can use
> Currying (exercise 3.20) to define a two-argument procedure `times`.

Value of given program is 12.

The procedure of factorial:

```
let maketimes = proc (maker)
                  proc (x)
                    proc (y)
                      if zero?(x)
                      then 0
                      else -((((maker maker) -(x, 1)) y), -(0, y))
in let times = (maketimes maketimes)
   in let makefact = proc (maker)
                       proc (x)
                         if zero?(x)
                         then 1
                         else ((times x) ((maker maker) -(x, 1)))
      in (makefact makefact)
```

> Exercise 3.24 [★★] Use the tricks of the program above to write the pair of mutually recursive procedures, `odd` and
> `even`, as in exercise 3.32.

`odd`:

```
let false = zero?(1)
in let true = zero?(0)
   in let makeeven = proc (makeeven)
                       proc (makeodd)
                         proc (x)
                           if zero?(x)
                           then true
                           else (((makeodd makeeven) makeodd) -(x, 1))
      in let makeodd = proc (makeeven)
                         proc (makeodd)
                           proc (x)
                             if zero?(x)
                             then false
                             else (((makeeven makeeven) makeodd) -(x, 1))
         in ((makeodd makeeven) makeodd)
```

`even`:

```
let false = zero?(1)
in let true = zero?(0)
   in let makeeven = proc (makeeven)
                       proc (makeodd)
                         proc (x)
                           if zero?(x)
                           then true
                           else (((makeodd makeeven) makeodd) -(x, 1))
      in let makeodd = proc (makeeven)
                         proc (makeodd)
                           proc (x)
                             if zero?(x)
                             then false
                             else (((makeeven makeeven) makeodd) -(x, 1))
         in ((makeeven makeeven) makeodd)
```

> Exercise 3.25 [★] The tricks of the previous exercises can be generalized to show that we can define any recursive
> procedure in PROC. Consider the following bit of code:
>
> ```
> let makerec = proc (f)
>                let d = proc (x)
>                         proc (z) ((f (x x)) z)
>                in proc (n) ((f (d d)) n)
> in let maketimes4 = proc (f)
>                      proc (x)
>                       if zero?(x)
>                       then 0
>                       else -((f -(x,1)), -4)
>    in let times4 = (makerec maketimes4)
>       in (times4 3)
> ```
>
> Show that it returns 12.

`maketimes4` is a procedure that takes a `times4` procedure and returns a `times4` procedure. First we convert
`maketimes4` to a procedure `maker` that takes a `maker` and returns a `times4` procedure (assume we use `f` to
represent `maketimes4`):

```
proc (f)
  let maker = proc (maker)
                let recurive-proc = (maker maker)
                in (f recurive-proc)
  in ...
```

But the code would not work because once we call `(maker maker)`, it will first call `(maker maker)` which will cause
infinite recursion. We will fix this by wrapping `(maker maker)` inside another procedure:

```
proc (f)
  let maker = proc (maker)
                proc (x)
                  let recurive-proc = (maker maker)
                  in ((f recurive-proc) x)

  in ...
```

Now we get a `maker`, we call the `maker` with `maker`, we will get a recursive version of `f`:

```
proc (f)
  let maker = proc (maker)
                proc (x)
                  let recurive-proc = (maker maker)
                  in ((f recurive-proc) x)
  in (maker maker)
```

Let’s run the program:

```
let makerec = proc (f)
                let maker = proc (maker)
                              proc (x)
                                let recurive-proc = (maker maker)
                                in ((f recurive-proc) x)
                in (maker maker)
in let maketimes4 = proc (f)
                      proc (x)
                        if zero?(x)
                        then 0
                        else -((f -(x, 1)), -4)
   in let times4 = (makerec maketimes4)
      in (times4 3)
```

Yep, the result is also 12. Although it is a little different than the original one.

> Exercise 3.26 [★★] In our data-structure representation of procedures, we have kept the entire environment in the
> closure. But of course all we need are the bindings for the free variables. Modify the representation of procedures to
> retain only the free variables.

Here is a function that filters free variables in the environment:

```racket
(define (filter-env env bound-vars exp)
  (let loop ([result (empty-env)]
             [bound-vars bound-vars]
             [exp exp])
    (cases expression exp
      [const-exp (num) result]
      [var-exp (var) (if (memv var bound-vars)
                         result
                         (extend-env var (apply-env env var) result))]
      [diff-exp (exp1 exp2) (loop (loop result bound-vars exp1) bound-vars exp2)]
      [zero?-exp (exp1) (loop result bound-vars exp1)]
      [if-exp (exp1 exp2 exp3) (loop (loop (loop result
                                                 bound-vars
                                                 exp1)
                                           bound-vars
                                           exp2)
                                     bound-vars
                                     exp3)]
      [let-exp (var exp1 body) (loop (loop result bound-vars exp1)
                                     (cons var bound-vars)
                                     body)]
      [proc-exp (vars body) (loop result (append vars bound-vars) body)]
      [call-exp (rator rands) (let loop2 ([result (loop result bound-vars rator)]
                                          [rands rands])
                                (if (null? rands)
                                    result
                                    (loop2 (loop result bound-vars (car rands))
                                           (cdr rands))))])))
```

> Exercise 3.27 [★] Add a new kind of procedure called a `traceproc` to the language. A `traceproc` works exactly like
> a `proc`, except that it prints a trace message on entry and on exit.

*Solution is too long, see the code repository.*

> Exercise 3.28 [★★] *Dynamic binding* (or *dynamic scoping*) is an alternative design for procedures, in which the
> procedure body is evaluated in an environment obtained by extending the environment at the point of call. For example
> in
>
> ```
> let a = 3
> in let p = proc (x) -(x,a)
>        a = 5
>    in -(a,(p 2))
> ```
>
> the `a` in the procedure body would be bound to 5, not 3. Modify the language to use dynamic binding. Do this twice,
> once using a procedural representation for procedures, and once using a data-structure representation.

*Solution is too long, see the code repository. Also, only data-structure representation is implemented.*

> Exercise 3.29 [★★] Unfortunately, programs that use dynamic binding may be exceptionally difficult to understand. For
> example, under lexical binding, consistently renaming the bound variables of a procedure can never change the behavior
> of a program: we can even remove all variables and replace them by their lexical addresses, as in section 3.6. But
> under dynamic binding, this transformation is unsafe.
>
> For example, under dynamic binding, the procedure `proc (z) a` returns the value of the variable `a` in its caller’s
> environment. Thus, the program
>
> ```
> let a = 3
> in let p = proc (z) a
>    in let f = proc (x) (p 0)
>       in let a = 5
>          in (f 2)
> ```
>
> returns 5, since `a`’s value at the call site is 5. What if `f`’s formal parameter were `a`?

The result should be 2.

> Exercise 3.30 [★] What is the purpose of the call to `proc-val` on the next-to-last line of `apply-env`?

When we are creating the desired recursive closure, we need an environment containing the closure, but we can not create
the environment directly because we need the closure in order to create the environment. So we delay the creation of
the closure in the environment so that we can create the environment without a closure. Then, when we need to use the
closure, we create it by calling `proc-val`.

> Exercise 3.31 [★] Extend the language above to allow the declaration of a recursive procedure of possibly many
> arguments, as in exercise 3.21.

*Solution is too long, see the code repository.*

> Exercise 3.32 [★★] Extend the language above to allow the declaration of any number of mututally recursive unary
> procedures, for example:
>
> ```
> letrec
>   even(x) = if zero?(x) then 1 else (odd -(x,1))
>   odd(x) = if zero?(x) then 0 else (even -(x,1))
> in (odd 13)
> ```

*Solution is too long, see the code repository.*

> Exercise 3.33 [★★] Extend the language above to allow the declaration of any number of mutually recursive procedures,
> each of possibly many arguments, as in exercise 3.21.

*Solution is too long, see the code repository.*

> Exercise 3.34 [★★★] Implement `extend-env-rec` in the procedural representation of environments from section 2.2.3.

*Skipped for now.*

> Exercise 3.35 [★] The representationswe have seen so far are inefficient, because they build a new closure every time
> the procedure is retrieved. But the closure is the same every time. We can build the closures only once, by putting
> the value in a vector of length 1 and building an explicit circular structure, like
>
> *TODO: Add this figure later.*
>
> Here’s the code to build this data structure.
>
> ```scheme
> (define extend-env-rec
>   (lambda (p-name b-var body saved-env)
>     (let ((vec (make-vector 1)))
>       (let ((new-env (extend-env p-name vec saved-env)))
>         (vector-set! vec 0
>           (proc-val (procedure b-var body new-env)))
>         new-env))))
> ```
> Complete the implementation of this representation by modifying the definitions of the environment data type and
> `apply-env` accordingly. Be sure that `apply-env` always returns an expressed value.

*Solution is too long, see the code repository.*

> Exercise 3.36 [★★] Extend this implementation to handle the language from exercise 3.32.

*Solution is too long, see the code repository.*

> Exercise 3.37 [★] With dynamic binding (exercise 3.28), recursive procedures may be bound by `let`; no special
> mechanism is necessary for recursion. This is of historical interest; in the early years of programming language
> design other approaches to recursion, such as those discussed in section 3.4, were not widely understood. To
> demonstrate recursion via dynamic binding, test the program
>
> ```
> let fact = proc (n) add1(n)
> in let fact = proc (n)
>                if zero?(n)
>                then 1
>                else *(n,(fact -(n,1)))
>    in (fact 5)
> ```
>
> using both lexical and dynamic binding. Write the mutually recursive procedures `even` and `odd` as in section 3.4 in
> the defined language with dynamic binding.

*Skipped for now.*

> Exercise 3.38 [★] Extend the lexical address translator and interpreter to handle `cond` from exercise 3.12.

*Solution is too long, see the code repository.*

> Exercise 3.39 [★] Extend the lexical address translator and interpreter to handle `pack` and `unpack` from exercise
> 3.18.

*Solution is too long, see the code repository.*

> Exercise 3.40 [★★] Extend the lexical address translator and interpreter to handle `letrec`. Do this by modifying
> the context argument to `translation-of` so that it keeps track of not only the name of each bound variable, but also
> whether it was bound by `letrec` or not. For a reference to a variable that was bound by a `letrec`, generate a new
> kind of reference, called a `nameless-letrec-var-exp`. You can then continue to use the nameless environment
> representation above, and the interpreter can do the right thing with a `nameless-letrec-var-exp`.

*Solution is too long, see the code repository.*

> Exercise 3.41 [★★] Modify the lexical address translator and interpreter to handle `let` expressions, procedures, and
> procedure calls with multiple arguments, as in exercise 3.21. Do this using a nameless version of the ribcage
> representation of environments (exercise 2.11). For this representation, the lexical address will consist of two
> nonnegative integers: the lexical depth, to indicate the number of contours crossed, as before; and a position, to
> indicate the position of the variable in the declaration.

*Solution is too long, see the code repository.*

> Exercise 3.42 [★★★] Modify the lexical address translator and interpreter to use the trimmed representation of
> procedures from exercise 3.26. For this, you will need to translate the body of the procedure not
> `(extend-senv `*var*` `*senv*`)`, but in a new static environment that tells exactly where each variable will be kept
> in the trimmed representation.

*Solution is too long, see the code repository.*

> Exercise 3.43 [★★★] The translator can do more than just keep track of the names of variables. For example, consider
> the program
>
> ```
> let x = 3
> in let f = proc (y) -(y,x)
>    in (f 13)
> ```
>
> Here we can tell statically that at the procedure call, `f` will be bound to a procedure whose body is `-(y,x)`, where
> `x` has the same value that it had at the procedure-creation site. Therefore we could avoid looking up `f` in the
> environment entirely. Extend the translator to keep track of “known procedures” and generate code that avoids an
> environment lookup at the call of such a procedure.

*Solution is too long, see the code repository.*

> Exercise 3.44 [★★★] In the preceding example, the only use of `f` is as a known procedure. Therefore the procedure
> built by the expression proc `(y) -(y,x)` is never used. Modify the translator so that such a procedure is never
> constructed.

*Solution is too long, see the code repository.*

> Exercise 4.1 [★] What would have happened had the program been instead
>
> ```
> let g = proc (dummy)
>          let counter = newref(0)
>          in begin
>              setref(counter, -(deref(counter), -1));
>              deref(counter)
>             end
> in let a = (g 11)
>    in let b = (g 11)
>       in -(a,b)
> ```

The result would been 0. Because `counter` rebinds to a new location that has the value 0 every time g is called, the
final value that referenced by `counter` will be the same.

> Exercise 4.2 [★] Write down the specification for a `zero?-exp`.

\$$ {(tt "value-of" quad e\xp_1 quad ρ quad σ_0) = (val_1, σ_1)} /
    {(tt "value-of" quad (tt "zero?-exp" quad e\xp_1) quad ρ quad σ_0) =
         {(((tt "bool-val" quad tt "#t"), σ_1), if (tt "expval->num" quad val_1) = 0),
          (((tt "bool-val" quad tt "#f"), σ_1), if (tt "expval->num" quad val_1) ≠ 0):}} $$

> Exercise 4.3 [★] Write down the specification for a `call-exp`.

\$$ {:((tt "value-of" quad e\xp_1 quad ρ quad σ_0) = (val_1, σ_1)),
      ((tt "value-of" quad e\xp_2 quad ρ quad σ_1) = (val_2, σ_2)):} /
    {(tt "value-of" quad (tt "call-exp" quad e\xp_1 quad e\xp_2) quad ρ quad σ_0) = 
     (tt "apply-procedure" quad val_1 quad val_2 quad σ_2)} $$

> Exercise 4.4 [★★] Write down the specification for a `begin` expresssion.
>
> *Expression* ::= `begin `*Expression*` `{`; `*Expression*}<sup>∗</sup>` end`
>
> A `begin` expression may contain one or more subexpressions separated by semicolons. These are evaluated in order and
> the value of the last is returned.

\$$ ((tt "value-of" quad e\xp_1 quad ρ quad σ_0) = (val_1, σ_1)) /
    {:((tt "value-of" quad (tt "begin-exp" quad e\xp_1 quad tt "'" ()) quad ρ quad σ_0) = (val_1, σ_1)),
      ((tt "value-of" quad (tt "begin-exp" quad e\xp_1 quad (tt "cons" quad e\xp_2 quad e\xps)) quad ρ quad σ_0) =
       (tt "value-of" quad (tt "begin-exp" quad e\xp_2 quad e\xps) quad ρ quad σ_1)):} $$

> Exercise 4.5 [★★] Write down the specification for `list` (exercise 3.10).

\$$ (tt "value-of" quad (tt "list-exp" quad tt "'()")) = (tt "empty-list") $$

\$$ {:((tt "value-of" quad e\xp_1 quad ρ quad σ_0) = (val_1, σ_1)),
      ((tt "value-of" quad (tt "list-exp" quad e\xps) quad ρ quad σ_1) = (val_2, σ_2)):} /
    ((tt "value-of" quad (tt "list-exp" quad (tt "cons" quad e\xp_1 quad e\xps))) =
     ((tt "pair-val" quad val_1 quad val_2), σ_2)) $$

> Exercise 4.6 [★] Modify the rule given above so that a `setref-exp` returns the value of the right-hand side.

\$$ {:((tt "value-of" quad e\xp_1 quad ρ quad σ_0) = (l, σ_1)),
      ((tt "value-of" quad e\xp_2 quad ρ quad σ_1) = (val, σ_2)):} /
    (tt "value-of" quad (tt "setref-exp" quad e\xp_1 quad e\xp_2 quad ρ quad σ_0) = (val, [l=val]σ_2)) $$

> Exercise 4.7 [★] Modify the rule given above so that a `setref-exp` returns the old contents of the location.

\$$ {:((tt "value-of" quad e\xp_1 quad ρ quad σ_0) = (l, σ_1)),
      ((tt "value-of" quad e\xp_2 quad ρ quad σ_1) = (val, σ_2)):} /
    (tt "value-of" quad (tt "setref-exp" quad e\xp_1 quad e\xp_2 quad ρ quad σ_0) = (σ_0(l), [l=val]σ_2)) $$

> Exercise 4.8 [★] Show exactly where in our implementation of the store these operations take linear time rather than
> constant time.

In `new-ref`, `length` and `append` take linear time, so `new-ref` takes linear time.

In `deref`, `list-ref` take linear time, so `deref` takes linear time.

In `setref!`, `setref-inner` loops through the store, which takes linear time, so `setref!` takes linear time.

> Exercise 4.9 [★] Implement the store in constant time by representing it as a Scheme vector. What is lost by using
> this representation?

```racket
(define (empty-store)
  (vector))

(define the-store 'uninitialized)

(define (get-store)
  the-store)

(define (initialize-store!)
  (set! the-store (empty-store)))

(define (reference? v)
  (and (integer? v)
       (not (negative? v))))

(define (extend-store store val)
  (let* ([store-size (vector-length store)]
         [new-store (make-vector (+ store-size 1))])
    (let loop ([i 0])
      (if (< i store-size)
          (let ([val (vector-ref store i)])
            (vector-set! new-store i val)
            (loop (+ i 1)))
          (vector-set! new-store i val)))
    (cons new-store store-size)))

(define (newref val)
  (let* ([new-store-info (extend-store the-store val)]
         [new-store (car new-store-info)]
         [new-ref (cdr new-store-info)])
    (set! the-store new-store)
    new-ref))

(define (deref ref)
  (vector-ref the-store ref))

(define (report-invalid-reference ref store)
  (eopl:error 'setref
              "illegal reference ~s in store ~s"
              ref
              store))

(define (setref! ref val)
  (if (and (reference? ref)
           (< ref (vector-length the-store)))
      (vector-set! the-store ref val)
      (report-invalid-reference ref the-store)))
```

Note that `newref` still takes linear time. It is possible to implement the store that allocates locations in constant
time on average by preallocating more locations in advance, but it is a little complecated, so I’ll just choose the easy
way to implement the store.

As for the disadvantages of using a Scheme vector to implement the store, may be sharing values between stores becomes
more difficult.

> Exercise 4.10 [★] Implement the `begin` expression as specified in exercise 4.4.

*The reference implementation already implemented the `begin` expression, so I’ll just skip this one.*

> Exercise 4.11 [★] Implement `list` from exercise 4.5.

*Solution is too long, see the code repository.*

> Exercise 4.12 [★★★] Our understanding of the store, as expressed in this interpreter, depends on themeaning of
> effects in Scheme. In particular, it depends on us knowing *when* these effects take place in a Scheme program. We can
> avoid this dependency by writing an interpreter that more closely mimics the specification. In this interpreter,
> `value-of` would return both a value and a store, just as in the specification. A fragment of this interpreter appears
> in figure 4.6. We call this a *store-passing interpreter*. Extend this interpreter to cover all of the language
> EXPLICIT-REFS.
>
> Every procedure that mightmodify the store returns not just its usual value but also a new store. These are packaged
> in a data type called `answer`. Complete this definition of `value-of`.

*Solution is too long, see the code repository.*

*Also, what is `apply-store` in the reference implementation?*

> Exercise 4.13 [★★★] Extend the interpreter of the preceding exercise to have procedures of multiple arguments.

*Solution is too long, see the code repository.*

> Exercise 4.14 [★] Write the rule for `let`.

\$$ {(tt "value-of" quad e\xp_1 quad ρ quad σ_0) = (val_1, σ_1)} /
    {(tt "value-of" quad (tt "let-exp" quad var quad e\xp_1 quad body) quad ρ quad σ_0) =
     (tt "value-of" quad body quad [var = l]ρ quad [l = val_1]σ_1)} $$

> Exercise 4.15 [★] In figure 4.8, why are variables in the environment bound to plain integers rather than expressed
> values, as in figure 4.5?

Because we know for sure that the denoted values will all be references, so plain integers are sufficient to represent
the location info we need.

> Exercise 4.16 [★] Now that variables are mutable, we can build recursive procedures by assignment. For example
>
> ```
> letrec times4(x) = if zero?(x)
>                    then 0
>                    else -((times4 -(x,1)), -4)
> in (times4 3)
> ```
>
> can be replaced by
>
> ```
> let times4 = 0
> in begin
>     set times4 = proc (x)
>                   if zero?(x)
>                   then 0
>                   else -((times4 -(x,1)), -4);
>     (times4 3)
>    end
> ```
>
> Trace this by hand and verify that this translation works.

First we allocate a new location for the number 0, then we bind `times4` to the location. After we setting `times4` to
the procedure, the location pointed by `times4` contains the procedure closure. In the enclosed environment of the
procedure, `times4` also points to the procedure so the procedure can call itself recursively.

> Exercise 4.17 [★★] Write the rules for and implement multiargument procedures and `let` expressions.

\$$ {:(,
       (tt "apply-procedure" quad (tt "procedure" quad (tt "list" quad var_1 quad var_2 quad … quad var_n)
                                                  quad body
                                                  quad ρ)
                             quad (tt "list" quad val_1 quad val_2 quad … quad val_n)
                             quad σ)),
      (=,
       (tt "value-of" quad body
                      quad [var_n = l_n]…[var_2 = l_2][var_1 = l_1]ρ
                      quad [l_n = val_n]…[l_2 = val_2][l_1 = val_1]σ)):} $$

\$$ {:((tt "value-of" quad e\xp_1 quad ρ quad σ_0) = (val_1, σ_1)),
      ((tt "value-of" quad e\xp_2 quad ρ quad σ_1) = (val_2, σ_2)),
      (…),
      ((tt "value-of" quad e\xp_n quad ρ quad σ_(n - 1)) = (val_n, σ_n)):} /
    {:(,
       (tt "value-of" quad (tt "let-exp" quad (tt "list" quad var_1 quad var_2 quad … quad var_n)
                                         quad (tt "list" quad e\xp_1 quad e\xp_2 quad … quad e\xp_n)
                                         quad body)
                      quad ρ
                      quad σ_0)),
      (=,
       (tt "value-of" quad body
                      quad [var_n = l_n]…[var_2 = l_2][var_1 = l_1]ρ
                      quad [l_n = val_n]…[l_2 = val_2][l_1 = val_1]σ_n)):} $$

> Exercise 4.18 [★★] Write the rule for and implement multiprocedure `letrec` expressions.

\$$ {:(,
       (tt "value-of" quad (tt "letrec-exp" quad (tt "list" quad var_1 quad var_2 quad … quad var_n)
                                         quad (tt "list" quad bvars_1 quad bvars_2 quad … quad bvars_n)
                                         quad (tt "list" quad pbody_1 quad pbody_2 quad … quad pbody_n)
                                         quad l\etrecbody)
                   quad ρ
                   quad σ)),
      (=,
       (tt "let" quad ([tt "body-env" quad [var_n = l_n]…[var_2 = l_2][var_1 = l_1]ρ])
                 quad (tt "value-of" quad l\etrecbody
                                     quad tt "body-env"
                                     quad [l_n = (tt "procedure" quad bvars_n quad pbody_n quad tt "body-env")]
                                          …
                                          [l_2 = (tt "procedure" quad bvars_2 quad pbody_2 quad tt "body-env")]
                                          [l_1 = (tt "procedure" quad bvars_1 quad pbody_1 quad tt "body-env")]σ))):} $$

> Exercise 4.19 [★★] Modify the implementation of multiprocedure `letrec` so that each closure is built only once, and
> only one location is allocated for it. This is like exercise 3.35.

*Solution is too long, see the code repository.*

> Exercise 4.20 [★★] In the language of this section, all variables are mutable, as they are in Scheme. Another
> alternative is to allow both mutable and immutable variable bindings:
>
> - *ExpVal* = *Int* + *Bool* + *Proc*
> - *DenVal* = *Ref*(*ExpVal*) + *ExpVal*
>
> Variable assignment should work only when the variable to be assigned to has a mutable binding. Dereferencing occurs
> implicitly when the denoted value is a reference.
>
> Modify the language of this section so that `let` introduces immutable variables, as before, but mutable variables are
> introduced by a `letmutable` expression, with syntax given by
>
> *Expression* ::= `letmutable `*Identifier*` = `*Expression*` in `*Expression*

*Solution is too long, see the code repository.*

> Exercise 4.21 [★★] We suggested earlier the use of assignment to make a program more modular by allowing one
> procedure to communicate information to a distant procedure without requiring intermediate procedures to be aware of
> it. Very often such an assignment should only be temporary, lasting for the execution of a procedure call. Add to the
> language a facility for *dynamic assignment* (also called *fluid binding*) to accomplish this. Use the production
>
> | *Expression* ::= | `setdynamic `*Identifier*` = `*Expression*` during `*Expression*                               |
> |                  | <span style="border: 1px solid">`setdynamic-exp (`*var*` `*exp*<sub>1</sub>` `*body*`)`</span> |
>
> The effect of the `setdynamic` expression is to assign temporarily the value of *exp*<sub>1</sub> to *var*, evaluate
> *body*, reassign *var* to its original value, and return the value of *body*. The variable *var* must already be
> bound. For example, in
>
> ```
> let x = 11
> in let p = proc (y) -(y,x)
>    in -(setdynamic x = 17 during (p 22),
>         (p 13))
> ```
>
> the value of `x`, which is free in procedure `p`, is 17 in the call `(p 22)`, but is reset to 11 in the call `(p 13)`,
> so the value of the expression is 5 - 2 = 3.

*Solution is too long, see the code repository.*

> Exercise 4.22 [★★] So far our languages have been expression-oriented: the primary syntactic category of interest has
> been expressions and we have primarily been interested in their values. Extend the language to model the simple
> statement-oriented language whose specification is sketched below. Be sure to *Follow the Grammar* by writing separate
> procedures to handle programs, statements, and expressions.
>
> **Values** As in IMPLICIT-REFS.
>
> **Syntax** Use the following syntax:
>
> | *Program*   | ::= *Statement*                                           |
> | *Statement* | ::= *Identifier*` = `*Expression*                         |
> |             | ::= `print `*Expression*                                  |
> |             | ::= `{ `{*Statement*}<sup>∗(`;`)</sup>` }`                |
> |             | ::= `if `*Expression*` `*Statement*` `*Statement*         |
> |             | ::= `while `*Expression*` `*Statement*                    |
> |             | ::= `var `{*Identifier*}<sup>∗(`,`)</sup>` ; `*Statement* |
>
> The nonterminal *Expression* refers to the language of expressions of IMPLICIT-REFS, perhaps with some extensions.
>
> **Semantics** A program is a statement. A statement does not return a value, but acts by modifying the store and by
> printing.
>
> Assignment statements work in the usual way. A print statement evaluates its actual parameter and prints the result.
> The `if` statement works in the usual way. A block statement, defined in the last production for *Statement*, binds
> each of the declared variables to an uninitialized reference and then executes the body of the block. The scope of
> these bindings is the body.
>
> Write the specification for statements using assertions like
>
> \$$ (tt "result-of" quad stmt quad ρ quad σ_0) = σ_1 $$
>
> **Examples** Here are some examples.
>
> ```
> (run "var x,y; {x = 3; y = 4; print +(x,y)}") % Example 1
> 7
> (run "var x,y,z; {x = 3;                      % Example 2
>                   y = 4;
>                   z = 0;
>                   while not(zero?(x))
>                     {z = +(z,y); x = -(x,1)};
>                   print z}")
> 12
> (run "var x; {x = 3;                          % Example 3
>               print x;
>               var x; {x = 4; print x};
>               print x}")
> 3
> 4
> 3
> (run "var f,x; {f = proc(x,y) *(x,y);         % Example 4
>                 x = 3;
>                 print (f 4 x)}")
> 12
> ```
>
> Example 3 illustrates the scoping of the block statement.
>
> Example 4 illustrates the interaction between statements and expressions. A procedure value is created and stored in
> the variable `f`. In the last line, this procedure is applied to the actual parameters 4 and `x`; since `x` is bound
> to a reference, it is dereferenced to obtain 3.

The implementation is at the code repository.

Specification for statements:

\$$ {(tt "value-of" quad e\xp quad ρ quad σ_0) = (val, σ_1)} /
    {(tt "result-of" quad (tt "assign-statement" quad var quad e\xp) quad ρ quad σ_0) = [ρ(var) = val]σ_1} $$

\$$ {(tt "value-of" quad e\xp quad ρ quad σ_0) = (val, σ_1)} /
    {(tt "result-of" quad (tt "print-statement" quad e\xp) quad ρ quad σ_0) = σ_1} $$

\$$ {:((tt "result-of" quad stmt_1 quad ρ quad σ_0) = σ_1),
      ((tt "result-of" quad stmt_2 quad ρ quad σ_1) = σ_2),
      (…),
      ((tt "result-of" quad stmt_n quad ρ quad σ_(n - 1)) = σ_n):} /
    {(tt "result-of" quad (tt "brace-statement" quad (tt "list" quad stmt_1 quad stmt_1 quad … quad stmt_n))
                     quad ρ
                     quad σ_0) = σ_n} $$

\$$ {(tt "value-of" quad e\xp quad ρ quad σ_0) = (val, σ_1)} /
    {(tt "result-of" quad (tt "if-statement" quad e\xp quad stmt_1 quad stmt_2) quad ρ quad σ_0) =
     {((tt "result-of" quad stmt_1 quad ρ quad σ_1), if (tt "expval->bool" quad val) = tt "#t"),
      ((tt "result-of" quad stmt_2 quad ρ quad σ_1), if (tt "expval->bool" quad val) = tt "#f"):}} $$

\$$ {:((tt "value-of" quad e\xp quad ρ quad σ_0) = (val, σ_1)),
      ((tt "result-of" quad stmt quad ρ quad σ_1) = σ_2):} /
    {(tt "result-of" quad (tt "while-statement" quad e\xp quad stmt) quad ρ quad σ_0) =
     {((tt "result-of" quad (tt "while-statement" quad e\xp quad stmt) quad ρ quad σ_2),
       if (tt "expval->bool" quad val) = tt "#t"),
      (σ_1, if (tt "expval->bool" quad val) = tt "#f"):}} $$

\$$ (tt "result-of" quad (tt "block-statement" quad (tt "list" quad var_1 quad var_2 quad … quad var_n) quad stmt)
                    quad ρ
                    quad σ_0) =
    (tt "result-of" quad stmt
                    quad [var_n = l_n]…[var_2 = l_2][var_1 = l_1]ρ
                    quad [l_n = undefi\n\ed]…[l_2 = undefi\n\ed][l_1 = undefi\n\ed]σ_0)$$

> Exercise 4.23 [★] Add to the language of exercise 4.22 `read` statements of the form `read `*var*. This statement
> reads a nonnegative integer from the input and stores it in the given variable.

*Solution is too long, see the code repository.*

> Exercise 4.24 [★] A `do-while` statement is like a `while` statement, except that the test is performed *after* the
> execution of the body. Add `do-while` statements to the language of exercise 4.22.

*Solution is too long, see the code repository.*

> Exercise 4.25 [★] Extend the block statement of the language of exercise 4.22 to allow variables to be initialized.
> In your solution, does the scope of a variable include the initializer for variables declared later in the same block
> statement?

*Solution is too long, see the code repository.*

No, the scope of a variable does not include the initializer for variables declared later in the same block statement.
