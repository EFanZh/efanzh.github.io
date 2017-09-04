---
title: Essentials of Programming Languages Exercises
enable_mathjax: true
---

## Codes

Code for the exercises can be found [here](https://github.com/EFanZh/EFanZh/tree/master/Racket/eopl-exercises).

## Exercises

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

> Exercise 1.10 [🟉] We typically use “or” to mean “inclusive or”. What other meanings can “or” have?

Exclusive or.

> Exercise 1.11 [🟉] In the last line of `subst-in-s-exp`, the recursion is on sexp and not a smaller substructure. Why
> is the recursion guaranteed to halt?

Because `subst` recurs on smaller substructure. We can replace the call to `subst-in-s-exp` with the body of
`subst-in-s-exp`, then `subst` becomes a normal recursive on a smaller substructure.

> Exercise 1.12 [🟉] Eliminate the one call to `subst-in-s-exp` in subst by replacing it by its definition and
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

> Exercise 1.13 [🟉🟉] In our example, we began by eliminating the Kleene star in the grammar for *S-list*. Write
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

> Exercise 1.14 [🟉🟉] Given the assumption 0 ≤ *n* < *length*(*v*), prove that `partial-vector-sum` is correct.

Since 0 ≤ *n* < *length*(*v*), we know that *length*(*v*) is at leat 1, so that *v* contains at least one element. We
prove `partial-vector-sum` is correct by induction over *n*.

Base case: if *n* equals to 0, `(partial-vector-sum `*v*` `*n*`)` equals to `(vector-ref `*v*` 0)`, which equals to
$$ sum _ (i = 0) ^ (i = 0) v _ i $$, the claim holds.

Inductive case: if *n* ≠ 0, *n* `(partial-vector-sum `*v*` `*n*`)` equals to
`(add (vector-ref `*v*` `*n*`) (partial-vector-sum `*v*` (- `*n*` 1)))`, which equals to
$$ v _ n + sum _ (i = 0) ^ (i = n - 1) v _ i $$, which equals to $$ sum _ (i = 0) ^ (i = n) v _ i $$, the claim holds.

> Exercise 1.15 [🟉] `(duple n x)` returns a list containing `n` copies of `x`.
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

> Exercise 1.16 [🟉] `(invert lst)`, where lst is a list of 2-lists (lists of length two), returns a list with each
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

> Exercise 1.17 [🟉] `(down lst)` wraps parentheses around each top-level element of `lst`.
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

> Exercise 1.18 [🟉] `(swapper s1 s2 slist)` returns a list the same as slist, but with all occurrences of `s1` replaced
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

> Exercise 1.19 [🟉] `(list-set lst n x)` returns a list like `lst`, except that the `n`-th element, using zero-based
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

> Exercise 1.20 [🟉] `(count-occurrences s slist)` returns the number of occurrences of `s` in `slist`.
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

> Exercise 1.21 [🟉🟉] `(product sos1 sos2)`, where `sos1` and `sos2` are each a list of symbols without repetitions,
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

> Exercise 1.22 [🟉🟉] `(filter-in pred lst)` returns the list of those elements in `lst` that satisfy the predicate
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

> Exercise 1.23 [🟉🟉] `(list-index pred lst)` returns the 0-based position of the first element of `lst` that satisfies
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

> Exercise 1.24 [🟉🟉] `(every? pred lst)` returns `#f` if any element of `lst` fails to satisfy `pred`, and returns
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

> Exercise 1.25 [🟉🟉] `(exists? pred lst)` returns `#t` if any element of `lst` satisfies `pred`, and returns `#f`
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

> Exercise 1.26 [🟉🟉] `(up lst)` removes a pair of parentheses from each top-level element of `lst`. If a top-level
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

> Exercise 1.27 [🟉🟉] `(flatten slist)` returns a list of the symbols contained in `slist` in the order in which they
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

> Exercise 1.28 [🟉🟉] `(merge loi1 loi2)`, where `loi1` and `loi2` are lists of integers that are sorted in ascending
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

> Exercise 1.29 [🟉🟉] `(sort loi)` returns a list of the elements of `loi` in ascending order.
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

> Exercise 1.30 [🟉🟉] `(sort/predicate pred loi)` returns a list of elements sorted by the predicate.
>
> ```scheme
>  > (sort/predicate < '(8 2 5 2 3))
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

> Exercise 1.31 [🟉] Write the following procedures for calculating on a bintree (definition 1.1.7): `leaf` and
> `interior-node`, which build bintrees, `leaf?`, which tests whether a bintree is a leaf, and `lson`, `rson`, and
> `contents-of`, which extract the components of a node. `contents-of` should work on both leaves and interior nodes.

```scheme
(define leaf
  (lambda (int)
    int))

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

> Exercise 1.32 [🟉] Write a procedure `double-tree` that takes a bintree, as represented in definition 1.1.7, and
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

> Exercise 1.33 [🟉🟉] Write a procedure `mark-leaves-with-red-depth` that takes a bintree (definition 1.1.7), and
> produces a bintree of the same shape as the original, except that in the new tree, each leaf contains the integer of
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

> Exercise 1.34 [🟉🟉🟉] Write a procedure `path` that takes an integer `n` and a binary search tree `bst` (page 10)
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

> Exercise 1.35 [🟉🟉🟉] Write a procedure `number-leaves` that takes a bintree, and produces a bintree like the
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

> Exercise 1.36 [🟉🟉🟉] Write a procedure `g` such that `number-elements` from page 23 could be defined as
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

> Exercise 2.1 [🟉] Implement the four required operations for bigits. Then use your implementation to calculate the
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

> Exercise 2.2 [🟉🟉] Analyze each of these proposed representations critically. To what extent do they succeed or fail
> in satisfying the specification of the data type?

1. Unary representation. Too much space consumed.
2. Scheme number representation. Not every language has native big integer support.
3. Bignum representation. Not easy to implement.

> Exercise 2.3 [🟉🟉] Define a representation of all the integers (negative and nonnegative) as diff-trees, where a
> diff-tree is a list defined by the grammar
>
> *Diff-tree* ::= `(one)` | `(diff `*Diff-tree*` `*Diff-tree*`)`
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

> Exercise 2.4 [🟉🟉] Consider the data type of *stacks* of values, with an interface consisting of the procedures
> `empty-stack`, `push`, `pop`, `top`, and `empty-stack?`. Write a specification for these operations in the style of
> the example above. Which operations are constructors and which are observers?

- `(empty-stack)` = ⌈∅⌉
- `(push `⌈*f*⌉` `*v*`)` = ⌈*g*⌉, where *g*(0) = *v*, and *g*(*n* + 1) = *f*(*n*)
- `(pop `⌈*f*⌉`)` = *g*, where *g*(*n*) = *f*(*n* + 1)
- `(top `⌈*f*⌉`)` = ⌈*f*(0)⌉
- `(empty-stack? `⌈*f*⌉`)` = `#t` if *f* = ∅, `#f` otherwise

Constructors: `empty-stack`, `push` and `pop`.

Observers: `top` and `empty-stack?`.

> Exercise 2.5 [🟉] We can use any data structure for representing environments, if we can distinguish empty
> environments from non-empty ones, and in which one can extract the pieces of a non-empty environment. Implement
> environments using a representation in which the empty environment is represented as the empty list, and in which
> `extend-env` builds an environment that looks like
>
> ```
>      ┌───┬───┐
>      │ ╷ │ ╶─┼─► saved-env
>      └─┼─┴───┘
>        ▼
>      ┌───┬───┐
>      │ ╷ │ ╷ │
>      └─┼─┴─┼─┘
>     ┌──┘   └───┐
>     ▼          ▼
> saved-var  saved-val
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

> Exercise 2.6 [🟉] Invent at least three different representations of the environment interface and implement them.

*To be continued…*
