+++
extra.enable_mathjax = true
enable_mathjax = true
title = "Essentials of Programming Languages Exercises"
+++

<!-- markdownlint-disable no-inline-html -->

## Preface

### Usage

#### Usage - X

##### Exercise 0.1 [★]

> We often use phrases like “some languages have property X.” For each such phrase, find one or more
> languages that have the property and one or more languages that do not have the property. Feel free to ferret out this
> information from any descriptive book on programming languages (say Scott (2005), Sebesta (2007), or Pratt & Zelkowitz
> (2001)).

*Skipped.*

## 1 Inductive Sets of Data

### 1.1 Recursively Specified Data

#### 1.1.1 Inductive Specification

##### Exercise 1.1 [★]

> Write inductive definitions of the following sets. Write each definition in all three styles
> (top-down, bottom-up, and rules of inference). Using your rules, show the derivation of some sample elements of each
> set.
>
> 1. {3*n* + 2 | *n* ∈ *N*}
> 2. {2*n* + 3*m* + 1 | *n*, *m* ∈ *N*}
> 3. {(*n*, 2*n* + 1) | *n* ∈ *N*}
> 4. {(*n*, *n*<sup>2</sup>) | *n* ∈ *N*} Do not mention squaring in your rules. As a hint, remember the equation
>    (*n* + 1)<sup>2</sup> = *n*<sup>2</sup> + 2*n* + 1.

1. {3*n* + 2 | *n* ∈ *N*}
   - Top-down:

     *n* ∈ *S* if

     - *n* = 2, or
     - *n* − 3 ∈ *S*
   - Bottom-up:

     *S* is the smallest set that satisfying the following two properties:

     - 2 ∈ *S*, and
     - If *n* ∈ *S*, then *n* + 3 ∈ *S*
   - Rules of inference:
     - \\(\dfrac{}{2 ∈ S}\\)
     - \\(\dfrac{n ∈ S}{n + 3 ∈ S}\\)
2. {2*n* + 3*m* + 1 | *n*, *m* ∈ *N*}
   - Top-down:

     *n* ∈ *S* if

     - *n* = 1, or
     - *n* − 2 ∈ *S*, or
     - *n* − 3 ∈ *S*
   - Bottom-up:

     *S* is the smallest set that satisfying the following two properties:

     - 1 ∈ *S*, and
     - If *n* ∈ *S*, then *n* + 2 ∈ *S*, and
     - If *n* ∈ *S*, then *n* + 3 ∈ *S*
   - Rules of inference:
     - \\(\dfrac{}{1 ∈ S}\\)
     - \\(\dfrac{n ∈ S}{n + 2 ∈ S}\\)
     - \\(\dfrac{n ∈ S}{n + 3 ∈ S}\\)
3. {(*n*, 2*n* + 1) | *n* ∈ *N*}
   - Top-down:

     (*m*, *n*) ∈ *S* if

     - *m* = 0 and *n* = 1, or
     - (*m* − 1, *n* − 2) ∈ *S*
   - Bottom-up:

     *S* is the smallest set that satisfying the following two properties:

     - (0, 1) ∈ *S*, and
     - If (*m*, *n*) ∈ *S*, then (*m* + 1, *n* + 2) ∈ *S*
   - Rules of inference:
     - \\(\dfrac{}{(0, 1) ∈ S}\\)
     - \\(\dfrac{(m, n) ∈ S}{(m + 1, n + 2) ∈ S}\\)
4. {(*n*, *n*<sup>2</sup>) | *n* ∈ *N*}

    - Top-down:

      (*m*, *n*) ∈ *S* if

      - *m* = 0 and *n* = 0, or
      - (*m* − 1, *n* − 2*m* + 1) ∈ *S*
    - Bottom-up:

      *S* is the smallest set that satisfying the following two properties:

      - (0, 0) ∈ *S*, and
      - If (*m*, *n*) ∈ *S*, then (*m* + 1, *n* + 2*m* + 1) ∈ *S*
    - Rules of inference:
      - \\(\dfrac{}{(0, 0) ∈ S}\\)
      - \\(\dfrac{(m, n) ∈ S}{(m + 1, n + 2m + 1) ∈ S}\\)

##### Exercise 1.2 [★★]

> What sets are defined by the following pairs of rules? Explain why.
>
> 1. \\((0, 1) ∈ S \quad \dfrac{(n, k) ∈ S}{(n + 1, k + 7) ∈ S}\\)
> 2. \\((0, 1) ∈ S \quad \dfrac{(n, k) ∈ S}{(n + 1, 2k) ∈ S}\\)
> 3. \\((0, 0, 1) ∈ S \quad \dfrac{(n, i, j) ∈ S}{(n + 1, j, i + j) ∈ S}\\)
> 4. [★★★] \\((0, 1, 0) ∈ S \quad \dfrac{(n, i, j) ∈ S}{(n + 1, i + 2, i + j) ∈ S}\\)

1. \\((0, 1) ∈ S \quad \dfrac{(n, k) ∈ S}{(n + 1, k + 7) ∈ S}\\)

   {(*n*, 7*n* + 1) | *n* ∈ *N*}
2. \\((0, 1) ∈ S \quad \dfrac{(n, k) ∈ S}{(n + 1, 2k) ∈ S}\\)

   {(*n*, 2<sup>*n*</sup>) | *n* ∈ *N*}
3. \\((0, 0, 1) ∈ S \quad \dfrac{(n, i, j) ∈ S}{(n + 1, j, i + j) ∈ S}\\)

   {(*n*, *f*(*n*), *f*(*n* + 1)) | *n* ∈ *N*, *f*(0) = 0, *f*(1) = 1, *f*(*n* + 2) = *f*(*n*) + *f*(*n* + 1)}
4. \\((0, 1, 0) ∈ S \quad \dfrac{(n, i, j) ∈ S}{(n + 1, i + 2, i + j) ∈ S}\\)

   {(*n*, 2*n* + 1, *n*<sup>2</sup>) | *n* ∈ *N*}

##### Exercise 1.3 [★★★]

> Find a set *T* of natural numbers such that 0 ∈ *T*, and whenever *n* ∈ *T*, then *n* + 3 ∈ *T*,
> but *T* ≠ *S*, where *S* is the set defined in definition 1.1.2.

Let *T* = *N*.

#### 1.1.2 Defining Sets Using Grammars

##### Exercise 1.4 [★]

> Write a derivation from *List-of-Int* to `(-7 . (3 . (14 . ())))`.

*List-of-Int*\
⇒ `(`*Int* `.` *List-of-Int*`)`\
⇒ `(-7 .` *List-of-Int*`)`\
⇒ `(-7 . (`*Int* `.` *List-of-Int*`))`\
⇒ `(-7 . (3 .` *List-of-Int*`))`\
⇒ `(-7 . (3 . (`*Int* `.` *List-of-Int*`)))`\
⇒ `(-7 . (3 . (14 .` *List-of-Int*`)))`\
⇒ `(-7 . (3 . (14 . ())))`

#### 1.1.3 Induction

##### Exercise 1.5 [★★]

> Prove that if *e* ∈ *LcExp*, then there are the same number of left and right parentheses in *e*.

By induction on the structure of *LcExp*.

If *e* is of *Identifier* form, it has 0 left parenthesis and 0 right parenthesis, the hypothesis holds.

If *e* is of `(lambda (`*Identifier*`)` *LcExp*`)` form, the *Identifier* has 0 parenthesis. By induction, *LcExp* has
the same number of left and right parentheses. Let the number be *n*, then *e* has *n* + 2 left parentheses and *n* + 2
right parentheses. The hypothesis holds.

If *e* is of `(`*LcExp* *LcExp*`)` form, let *m* be the number of left or right parentheses in the first *LcExp*, let
*n* be the number of left or right parentheses in the second *LcExp*, then *e* has *m* + *n* + 1 left parentheses and
*m* + *n* + 1 right parentheses. The hypothesis holds.

### 1.2 Deriving Recursive Programs

#### 1.2.2 `nth-element`

##### Exercise 1.6 [★]

> If we reversed the order of the tests in `nth-element`, what would go wrong?

`car` may be applied to empty list.

##### Exercise 1.7 [★★]

> The error message from `nth-element` is uninformative. Rewrite `nth-element` so that it produces a
> more informative error message, such as “`(a b c)` does not have 8 elements.”

```scm
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

#### 1.2.3 `remove-first`

##### Exercise 1.8 [★]

> In the definition of remove-first, if the last line were replaced by `(remove-first s (cdr los))`,
> what function would the resulting procedure compute? Give the contract, including the usage statement, for the revised
> procedure.

**remove-first** : *Sym* × *Listof*(*Sym*) → *Listof*(*Sym*)

**usage**: `(remove-first` *s* *los*`)` returns a sub of list from *los*, starting from the symbol after the first
*s*. If *los* doesn’t contain *s*, an empty list is returned.

```scm
(define remove-first
  (lambda (s los)
    (if (null? los)
        '()
        (if (eqv? (car los) s)
            (cdr los)
            (remove-first s (cdr los))))))
```

##### Exercise 1.9 [★★]

> Define `remove`, which is like `remove-first`, except that it removes all occurrences of a given
> symbol from a list of symbols, not just the first.

```scm
(define remove
  (lambda (s los)
    (if (null? los)
        '()
        (if (eqv? (car los) s)
            (remove s (cdr los))
            (cons (car los) (remove s (cdr los)))))))
```

#### 1.2.4 `occurs-free?`

##### Exercise 1.10 [★]

> We typically use “or” to mean “inclusive or”. What other meanings can “or” have?

Exclusive or.

#### 1.2.5 `subst`

##### Exercise 1.11 [★]

> In the last line of `subst-in-s-exp`, the recursion is on sexp and not a smaller substructure. Why
> is the recursion guaranteed to halt?

Because `subst` recurs on smaller substructure. We can replace the call to `subst-in-s-exp` with the body of
`subst-in-s-exp`, then `subst` becomes a normal recursive on a smaller substructure.

##### Exercise 1.12 [★]

> Eliminate the one call to `subst-in-s-exp` in `subst` by replacing it by its definition and
> simplifying the resulting procedure. The result will be a version of `subst` that does not need `subst-in-s-exp`. This
> technique is called *inlining*, and is used by optimizing compilers.

```scm
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

##### Exercise 1.13 [★★]

> In our example, we began by eliminating the Kleene star in the grammar for *S-list*. Write
> `subst` following the original grammar by using `map`.

```scm
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

### 1.3 Auxiliary Procedures and Context Arguments

#### 1.3.0

##### Exercise 1.14 [★★]

> Given the assumption 0 ≤ *n* < *length*(*v*), prove that `partial-vector-sum` is correct.

Since 0 ≤ *n* < *length*(*v*), we know that *length*(*v*) is at least 1, so that *v* contains at least one element. We
prove `partial-vector-sum` is correct by induction over *n*.

Base case: if *n* equals to 0, `(partial-vector-sum` *v* *n*`)` equals to `(vector-ref` *v* `0)`, which equals to
\\(\sum_{i = 0}^0 v_i\\), the claim holds.

Inductive case: if *n* ≠ 0, *n* `(partial-vector-sum` *v* *n*`)` equals to
`(add (vector-ref` *v* *n*`) (partial-vector-sum` *v* `(-` *n* `1)))`, which equals to
\\(v_n + \sum_{i = 0}^{n - 1} v_i\\), which equals to \\(\sum_{i = 0}^n v_i\\), the claim holds.

### 1.4 Exercises

#### 1.4.0

##### Exercise 1.15 [★]

> `(duple n x)` returns a list containing `n` copies of `x`.
>
> ```scm
> > (duple 2 3)
> (3 3)
> > (duple 4 '(ha ha))
> ((ha ha) (ha ha) (ha ha) (ha ha))
> > (duple 0 '(blah))
> ()
> ```

```scm
(define duple-helper
  (lambda (lst n x)
    (if (zero? n)
        lst
        (duple-helper (cons x lst) (- n 1) x))))

(define duple
  (lambda (n x)
    (duple-helper '() n x)))
```

##### Exercise 1.16 [★]

> `(invert lst)`, where lst is a list of 2-lists (lists of length two), returns a list with each
> 2-list reversed.
>
> ```scm
> > (invert '((a 1) (a 2) (1 b) (2 b)))
> ((1 a) (2 a) (b 1) (b 2))
> ```

```scm
(define invert
  (lambda (lst)
    (map (lambda (x) (list (cadr x) (car x)))
         lst)))
```

##### Exercise 1.17 [★]

> `(down lst)` wraps parentheses around each top-level element of `lst`.
>
> ```scm
> > (down '(1 2 3))
> ((1) (2) (3))
> > (down '((a) (fine) (idea)))
> (((a)) ((fine)) ((idea)))
> > (down '(a (more (complicated)) object))
> ((a) ((more (complicated))) (object))
> ```

```scm
(define down
  (lambda (lst)
    (map (lambda (x) (list x))
         lst)))
```

##### Exercise 1.18 [★]

> `(swapper s1 s2 slist)` returns a list the same as slist, but with all occurrences of `s1` replaced
> by `s2` and all occurrences of `s2` replaced by `s1`.
>
> ```scm
> > (swapper 'a 'd '(a b c d))
> (d b c a)
> > (swapper 'a 'd '(a d () c d))
> (d a () c a)
> > (swapper 'x 'y '((x) y (z (x))))
> ((y) x (z (y)))
> ```

```scm
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

##### Exercise 1.19 [★]

> `(list-set lst n x)` returns a list like `lst`, except that the `n`-th element, using zero-based
> indexing, is `x`.
>
> ```scm
> > (list-set '(a b c d) 2 '(1 2))
> (a b (1 2) d)
> > (list-ref (list-set '(a b c d) 3 '(1 5 10)) 3)
> (1 5 10)
> ```

```scm
(define list-set
  (lambda (lst n x)
    (if (zero? n)
        (cons x (cdr lst))
        (cons (car lst) (list-set (cdr lst) (- n 1) x)))))
```

##### Exercise 1.20 [★]

> `(count-occurrences s slist)` returns the number of occurrences of `s` in `slist`.
>
> ```scm
> > (count-occurrences 'x '((f x) y (((x z) x))))
> 3
> > (count-occurrences 'x '((f x) y (((x z) () x))))
> 3
> > (count-occurrences 'w '((f x) y (((x z) x))))
> 0
> ```

```scm
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

##### Exercise 1.21 [★★]

> `(product sos1 sos2)`, where `sos1` and `sos2` are each a list of symbols without repetitions,
> returns a list of 2-lists that represents the Cartesian product of `sos1` and `sos2`. The 2-lists may appear in any
> order.
>
> ```scm
> > (product '(a b c) '(x y))
> ((a x) (a y) (b x) (b y) (c x) (c y))
> ```

```scm
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

##### Exercise 1.22 [★★]

> `(filter-in pred lst)` returns the list of those elements in `lst` that satisfy the predicate
> `pred`.
>
> ```scm
> > (filter-in number? '(a 2 (1 3) b 7))
> (2 7)
> > (filter-in symbol? '(a (b c) 17 foo))
> (a foo)
> ```

```scm
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

##### Exercise 1.23 [★★]

> `(list-index pred lst)` returns the 0-based position of the first element of `lst` that satisfies
> the predicate `pred`. If no element of `lst` satisfies the predicate, then `list-index` returns `#f`.
>
> ```scm
> > (list-index number? '(a 2 (1 3) b 7))
> 1
> > (list-index symbol? '(a (b c) 17 foo))
> 0
> > (list-index symbol? '(1 2 (a b) 3))
> #f
> ```

```scm
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

##### Exercise 1.24 [★★]

> `(every? pred lst)` returns `#f` if any element of `lst` fails to satisfy `pred`, and returns
> `#t` otherwise.
>
> ```scm
> > (every? number? '(a b c 3 e))
> #f
> > (every? number? '(1 2 3 5 4))
> #t
> ```

```scm
(define every?
  (lambda (pred lst)
    (if (null? lst)
        #t
        (and (pred (car lst))
             (every? pred (cdr lst))))))
```

##### Exercise 1.25 [★★]

> `(exists? pred lst)` returns `#t` if any element of `lst` satisfies `pred`, and returns `#f`
> otherwise.
>
> ```scm
> > (exists? number? '(a b c 3 e))
> #t
> > (exists? number? '(a b c d e))
> #f
> ```

```scm
(define exists?
  (lambda (pred lst)
    (if (null? lst)
        #f
        (or (pred (car lst))
            (exists? pred (cdr lst))))))
```

##### Exercise 1.26 [★★]

> `(up lst)` removes a pair of parentheses from each top-level element of `lst`. If a top-level
> element is not a list, it is included in the result, as is. The value of `(up (down lst))` is equivalent to lst,
> but `(down (up lst))` is not necessarily `lst`. (See exercise 1.17.)
>
> ```scm
> > (up '((1 2) (3 4)))
> (1 2 3 4)
> > (up '((x (y)) z))
> (x (y) z)
> ```

```scm
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

##### Exercise 1.27 [★★]

> `(flatten slist)` returns a list of the symbols contained in `slist` in the order in which they
> occur when `slist` is printed. Intuitively, `flatten` removes all the inner parentheses from its argument.
>
> ```scm
> > (flatten '(a b c))
> (a b c)
> > (flatten '((a) () (b ()) () (c)))
> (a b c)
> > (flatten '((a b) c (((d)) e)))
> (a b c d e)
> > (flatten '(a b (() (c))))
> (a b c)
> ```

```scm
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

##### Exercise 1.28 [★★]

> `(merge loi1 loi2)`, where `loi1` and `loi2` are lists of integers that are sorted in ascending
> order, returns a sorted list of all the integers in `loi1` and `loi2`.
>
> ```scm
> > (merge '(1 4) '(1 2 8))
> (1 1 2 4 8)
> > (merge '(35 62 81 90 91) '(3 83 85 90))
> (3 35 62 81 83 85 90 90 91)
> ```

```scm
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

##### Exercise 1.29 [★★]

> `(sort loi)` returns a list of the elements of `loi` in ascending order.
>
> ```scm
> > (sort '(8 2 5 2 3))
> (2 2 3 5 8)
> ```

```scm
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

##### Exercise 1.30 [★★]

> `(sort/predicate pred loi)` returns a list of elements sorted by the predicate.
>
> ```scm
> > (sort/predicate < '(8 2 5 2 3))
> (2 2 3 5 8)
> > (sort/predicate > '(8 2 5 2 3))
> (8 5 3 2 2)
> ```

```scm
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

##### Exercise 1.31 [★]

> Write the following procedures for calculating on a bintree (definition 1.1.7): `leaf` and
> `interior-node`, which build bintrees, `leaf?`, which tests whether a bintree is a leaf, and `lson`, `rson`, and
> `contents-of`, which extract the components of a node. `contents-of` should work on both leaves and interior nodes.

```scm
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

##### Exercise 1.32 [★]

> Write a procedure `double-tree` that takes a bintree, as represented in definition 1.1.7, and
> produces another bintree like the original, but with all the integers in the leaves doubled.

```scm
(define double-tree
  (lambda (bin-tree)
    (if (leaf? bin-tree)
        (leaf (* (contents-of bin-tree) 2))
        (interior-node (contents-of bin-tree)
                       (double-tree (lson bin-tree))
                       (double-tree (rson bin-tree))))))
```

##### Exercise 1.33 [★★]

> Write a procedure `mark-leaves-with-red-depth` that takes a bintree (definition 1.1.7), and
> produces a bintree of the same shape as the original, except that in the new tree, each leaf contains the number of
> nodes between it and the root that contain the symbol `red`. For example, the expression
>
> ```scm
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
> ```scm
> (red
>  (bar 1 1)
>  (red 2 (quux 2 2)))
> ```

```scm
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

##### Exercise 1.34 [★★★]

> Write a procedure `path` that takes an integer `n` and a binary search tree `bst` (page 10)
> that contains the integer `n`, and returns a list of `left`s and `right`s showing how to find the node containing `n`.
> If `n` is found at the root, it returns the empty list.
>
> ```scm
> > (path 17 '(14 (7 () (12 () ()))
>                 (26 (20 (17 () ())
>                         ())
>                     (31 () ()))))
> (right left left)
> ```

```scm
(define path
  (lambda (n bst)
    (let ([head (car bst)])
      (if (< n head)
          (cons 'left (path n (cadr bst)))
          (if (= n head)
              '()
              (cons 'right (path n (caddr bst))))))))
```

##### Exercise 1.35 [★★★]

> Write a procedure `number-leaves` that takes a bintree, and produces a bintree like the
> original, except the contents of the leaves are numbered starting from 0. For example,
>
> ```scm
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
> ```scm
> (foo
>  (bar 0 1)
>  (baz
>   2
>   (quux 3 4)))
> ```

```scm
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

##### Exercise 1.36 [★★★]

> Write a procedure `g` such that `number-elements` from page 23 could be defined as
>
> ```scm
> (define number-elements
>   (lambda (lst)
>     (if (null? lst) '()
>         (g (list 0 (car lst)) (number-elements (cdr lst))))))
> ```

```scm
(define g
  (lambda (head tail)
    (cons head
          (map (lambda (item)
                 (list (+ (car item) 1) (cadr item)))
               tail))))
```

## 2 Data Abstraction

### 2.1 Specifying Data via Interfaces

#### 2.1.0

##### Exercise 2.1 [★]

> Implement the four required operations for bigits. Then use your implementation to calculate the
> factorial of 10. How does the execution time vary as this argument changes? How does the execution time vary as the
> base changes? Explain why.

```scm
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

##### Exercise 2.2 [★★]

> Analyze each of these proposed representations critically. To what extent do they succeed or fail
> in satisfying the specification of the data type?

1. Unary representation. Too much space consumed.
2. Scheme number representation. Not every language has native big integer support.
3. Bignum representation. Not easy to implement.

##### Exercise 2.3 [★★]

> Define a representation of all the integers (negative and nonnegative) as diff-trees, where a
> diff-tree is a list defined by the grammar
>
> *Diff-tree* ::= `(one)` | `(diff` *Diff-tree* *Diff-tree*`)`
>
> The list `(one)` represents 1. If *t*<sub>1</sub> represents *n*<sub>1</sub> and *t*<sub>2</sub> represents
> *n*<sub>2</sub>, then `(diff t1 t2)` is a representation of *n*<sub>1</sub> − *n*<sub>2</sub>.
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
   on. *n* can be represented as `(diff` *n* 0`)`, since 0 has infinitely many representations, *n* has infinitely
   many representations.
2. ```scm
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
3. ```scm
   (define diff-tree-plus
     (lambda (m n)
       (list 'diff m (list 'diff '(diff (one) (one)) n))))
   ```

### 2.2 Representation Strategies for Data Types

#### 2.2.1 The Environment Interface

##### Exercise 2.4 [★★]

> Consider the data type of *stacks* of values, with an interface consisting of the procedures
> `empty-stack`, `push`, `pop`, `top`, and `empty-stack?`. Write a specification for these operations in the style of
> the example above. Which operations are constructors and which are observers?

- `(empty-stack)` = ⌈∅⌉
- `(push` ⌈*f*⌉ *v*`)` = ⌈*g*⌉, where *g*(0) = *v*, and *g*(*n* + 1) = *f*(*n*)
- `(pop` ⌈*f*⌉`)` = *g*, where *g*(*n*) = *f*(*n* + 1)
- `(top` ⌈*f*⌉`)` = ⌈*f*(0)⌉
- `(empty-stack?` ⌈*f*⌉`)` = `#t` if *f* = ∅, `#f` otherwise

Constructors: `empty-stack`, `push` and `pop`.

Observers: `top` and `empty-stack?`.

#### 2.2.2 Data Structure Representation

##### Exercise 2.5 [★]

> We can use any data structure for representing environments, if we can distinguish empty
> environments from non-empty ones, and in which one can extract the pieces of a non-empty environment. Implement
> environments using a representation in which the empty environment is represented as the empty list, and in which
> `extend-env` builds an environment that looks like
>
> ```txt
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

```scm
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

##### Exercise 2.6 [★]

> Invent at least three different representations of the environment interface and implement them.

*Deferred.*

##### Exercise 2.7 [★]

> Rewrite `apply-env` in figure 2.1 to give a more informative error message.

```scm
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

##### Exercise 2.8 [★]

> Add to the environment interface an observer called `empty-env?` and implement it using the
> a-list representation.

`(empty-env?` ⌈*f*⌉`)` = `#t` if *f* = ∅, `#f` otherwise.

```scm
(define empty-env? null?)
```

##### Exercise 2.9 [★]

> Add to the environment interface an observer called `has-binding?` that takes an environment *env*
> and a variable *s* and tests to see if *s* has an associated value in *env*. Implement it using the a-list
> representation.

`(has-binding?` ⌈*f*⌉`)` = `#t` if *f*(*var*) = *val* for some *var* and *val*, `#f` otherwise.

```scm
(define has-binding?
  (lambda (env search-var)
    (cond [(null? env) #f]
          [(eqv? (caar env) search-var) #t]
          [else (has-binding? (cdr env) search-var)])))
```

##### Exercise 2.10 [★]

> Add to the environment interface a constructor `extend-env*`, and implement it using the a-list
> representation. This constructor takes a list of variables, a list of values of the same length, and an environment,
> and is specified by
>
> `(extend-env* (`*var*<sub>1</sub> … *var*<sub>*k*</sub>`) (`*val*<sub>1</sub> … *val*<sub>*k*</sub>`)` ⌈*f*⌉`)` = ⌈*g*⌉,
> where *g*(*var*) = *val*<sub>*i*</sub> if *var* = *var*<sub>*i*</sub> for some *i* such that 1 ≤ *i* ≤ *k*, *f*(*var*)
> otherwise.

```scm
(define extend-env*
  (lambda (vars vals env)
    (if (null? vars)
        env
        (extend-env* (cdr vars)
                     (cdr vals)
                     (cons (cons (car vars) (car vals)) env)))))
```

##### Exercise 2.11 [★★]

> A naïve implementation of `extend-env*` from the preceding exercise requires time proportional to
> *k* to run. It is possible to represent environments so that `extend-env*` requires only constant time: represent
> the empty environment by the empty list, and represent a non-empty environment by the data structure
>
> ```txt
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
> ```txt
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

```scm
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

#### 2.2.3 Procedural Representation

##### Exercise 2.12 [★]

> Implement the stack data type of exercise 2.4 using a procedural representation.

```scm
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

##### Exercise 2.13 [★★]

> Extend the procedural representation to implement `empty-env?` by representing the environment by
> a list of two procedures: one that returns the value associated with a variable, as before, and one that returns
> whether or not the environment is empty.

```scm
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

##### Exercise 2.14 [★★]

> Extend the representation of the preceding exercise to include a third procedure that implements
> `has-binding?` (see exercise 2.9).

```scm
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

### 2.3 Interfaces for Recursive Data Types

#### 2.3.0

##### Exercise 2.15 [★]

> Implement the lambda-calculus expression interface for the representation specified by the grammar
> above.

```scm
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

##### Exercise 2.16 [★]

> Modify the implementation to use a representation in which there are no parentheses around the
> bound variable in a `lambda` expression.

```scm
(define lambda-exp
  (lambda (bound-var body)
    `(lambda ,bound-var ,body)))

(define lambda-exp->bound-var cadr)
```

Remaining implementations are the same as the ones in exercise 2.15.

##### Exercise 2.17 [★]

> Invent at least two other representations of the data type of lambda-calculus expressions and
> implement them.

*Skipped.*

##### Exercise 2.18 [★]

> We usually represent a sequence of values as a list. In this representation, it is easy to move
> from one element in a sequence to the next, but it is hard to move from one element to the preceding one without the
> help of context arguments. Implement non-empty bidirectional sequences of integers, as suggested by the grammar
>
> *NodeInSequence* ::= `(`*Int* *Listof*`(`*Int*`)` *Listof*`(`*Int*`))`
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
> ```scm
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

```scm
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

##### Exercise 2.19 [★]

> A binary tree with empty leaves and with interior nodes labeled with integers could be represented
> using the grammar
>
> Bintree ::= `()` | `(`*Int* *Bintree* *Bintree*`)`
>
> In this representation, implement the procedure `number->bintree`, which takes a number and produces a binary tree
> consisting of a single node containing that number. Also implement `current-element`, `move-to-left-son`,
> `move-to-right-son`, `at-leaf?`, `insert-to-left`, and `insert-to-right`. For example,
>
> ```scm
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

```scm
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

##### Exercise 2.20 [★★★]

> In the representation of binary trees in exercise 2.19 it is easy to move from a parent node to
> one of its sons, but it is impossible to move from a son to its parent without the help of context arguments. Extend
> the representation of lists in exercise 2.18 to represent nodes in a binary tree. As a hint, consider representing the
> portion of the tree above the current node by a reversed list, as in exercise 2.18.
>
> In this representation, implement the procedures from exercise 2.19. Also implement `move-up` and `at-root?`.

```scm
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

### 2.4 A Tool for Defining Recursive Data Types

#### 2.4.0

##### Exercise 2.21 [★]

> Implement the data type of environments, as in section 2.2.2, using `define-datatype`. Then include
> `has-binding?` of exercise 2.9.

```scm
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

##### Exercise 2.22 [★]

> Using `define-datatype`, implement the stack data type of exercise 2.4.

```scm
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

##### Exercise 2.23 [★]

> The definition of `lc-exp` ignores the condition in definition 1.1.8 that says “*Identifier* is any
> symbol other than `lambda`.” Modify the definition of *identifier?* to capture this condition. As a hint, remember
> that any predicate can be used in `define-datatype`, even ones you define.

```scm
(define identifier?
  (lambda (value)
    (and (symbol? value)
         (not (eqv? value 'lambda)))))
```

##### Exercise 2.24 [★]

> Here is a definition of binary trees using `define-datatype`.
>
> ```scm
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
> ```scm
> (interior-node
>  a
>  (leaf-node 3)
>  (leaf-node 4))
> ```

```scm
(define bintree-to-list
  (lambda (tree)
    (cases bintree tree
      [leaf-node (num) `(leaf-node ,num)]
      [interior-node (key left right) (list 'interior-node
                                            key
                                            (bintree-to-list left)
                                            (bintree-to-list right))])))
```

##### Exercise 2.25 [★★]

> Use `cases` to write `max-interior`, which takes a binary tree of integers (as in the preceding
> exercise) with at least one interior node and returns the symbol associated with an interior node with a maximal leaf
> sum.
>
> ```scm
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

```scm
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

##### Exercise 2.26 [★★]

> Here is another version of exercise 1.33. Consider a set of trees given by the following grammar:
>
> *Red-blue-tree*    ::= *Red-blue-subtree*
>
> *Red-blue-subtree* ::= `(red-node` *Red-blue-subtree* *Red-blue-subtree*`)`\
> ::= `(blue-node` {*Red-blue-subtree*}<sup>∗</sup>`)`\
> ::= `(leaf-node Int)`
>
> Write an equivalent definition using `define-datatype`, and use the resulting interface to write a procedure that
> takes a tree and builds a tree of the same shape, except that each leaf node is replaced by a leaf node that contains
> the number of red nodes on the path between it and the root.

```scm
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

### 2.5 Abstract Syntax and Its Representation

#### 2.5.0

##### Exercise 2.27 [★]

> Draw the abstract syntax tree for the lambda calculus expressions
>
> ```scm
> ((lambda (a) (a b)) c)
>
> (lambda (x)
>   (lambda (y)
>     ((lambda (x)
>        (x y))
>      x)))
> ```

```scm
((lambda (a) (a b)) c)
```

```txt
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

```scm
(lambda (x)
  (lambda (y)
    ((lambda (x)
       (x y))
     x)))
```

```txt
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

##### Exercise 2.28 [★]

> Write an unparser that converts the abstract syntax of an lc-exp into a string that matches the
> second grammar in this section (page 52).

```scm
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

##### Exercise 2.29 [★]

> Where a Kleene star or plus (page 7) is used in concrete syntax, it is most convenient to use a
> *list* of associated subtrees when constructing an abstract syntax tree. For example, if the grammar for
> lambda-calculus expressions had been
>
> *Lc-exp* ::= *Identifier*\
> <span style="border: 1px solid">`var-exp (var)`</span>\
> ::= `(lambda (`{*Identifier*}<sup>∗</sup>`)` *Lc-exp*`)`\
> <span style="border: 1px solid">`lambda-exp (bound-vars body)`</span>\
> ::= `(`*Lc-exp* {*Lc-exp*}<sup>∗</sup>`)`\
> <span style="border: 1px solid">`app-exp (rator rands)`
>
> then the predicate for the `bound-vars` field could be `(list-of identifier?)`, and the predicate for the `rands`
> field could be `(list-of lc-exp?)`. Write a `define-datatype` and a parser for this grammar that works in this way.

```scm
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

##### Exercise 2.30 [★★]

> The procedure `parse-expression` as defined above is fragile: it does not detect several possible
> syntactic errors, such as `(a b c)`, and aborts with inappropriate error messages for other expressions, such as
> `(lambda)`. Modify it so that it is robust, accepting any s-exp and issuing an appropriate error message if the s-exp
> does not represent a lambda-calculus expression.

```scm
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

##### Exercise 2.31 [★★]

> Sometimes it is useful to specify a concrete syntax as a sequence of symbols and integers,
> surrounded by parentheses. For example, one might define the set of *prefix lists* by
>
> *Prefix-list* ::= `(`*Prefix-exp*`)`
>
> *Prefix-exp* ::= *Int*\
> ::= `-` *Prefix-exp* *Prefix-exp*
>
> so that `(- - 3 2 - 4 - 12 7)` is a legal prefix list. This is sometimes called *Polish prefix notation*, after its
> inventor, Jan Łukasiewicz. Write a parser to convert a prefix-list to the abstract syntax
>
> ```scm
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
> ```scm
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

```scm
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

## 3 Expressions

### 3.2 LET: A Simple Language

#### 3.2.4 Specifying the Behavior of Expressions

##### Exercise 3.1 [★]

> In figure 3.3, list all the places where we used the fact that ⌊⌈*n*⌉⌋ = *n*.

*Skipped.*

##### Exercise 3.2 [★★]

> Give an expressed value *val* ∈ *ExpVal* for which ⌈⌊*val*⌋⌉ ≠ *val*.

Not sure, but maybe when *val* is constructed using a *Bool*?

#### 3.2.8 Implementing the Specification of LET

##### Exercise 3.3 [★]

> Why is subtraction a better choice than addition for our single arithmetic operation?

One reason I can think of, is that subtraction is not commutative, that is \\(a - b\\) may not equal to \\(b - a\\). If
our implementation of subtraction is incorrect, we can discover the error quickly.

##### Exercise 3.4 [★]

> Write out the derivation of figure 3.4 as a derivation tree in the style of the one on page 5.

\\[ \dfrac{\dfrac{\dfrac{\dfrac{\texttt{(value-of «x» $ρ$)} = 33}
                               {\texttt{(value-of «-(x, 11)» $ρ$)} = 22}}
                        {\texttt{(value-of «zero?(-(x, 11))» $ρ$)} = \texttt{(bool-val #f)}}}
                 {\texttt{(value-of «if zero?(-(x, 11)) then -(y, 2) else -(y, 4)» $ρ$)} =
                      \texttt{(value-of «-(y, 4)» $ρ$)}} \quad
           \dfrac{\texttt{(value-of «y» $ρ$)} = 22}
                 {\texttt{(value-of «-(y, 4)» $ρ$)} = 18}}
          {\texttt{(value-of «if zero?(-(x, 11)) then -(y, 2) else -(y, 4)» $ρ$)} = 18} \\]

##### Exercise 3.5 [★]

> Write out the derivation of figure 3.5 as a derivation tree in the style of the one on page 5.

*Skipped.*

##### Exercise 3.6 [★]

> Extend the language by adding a new operator minus that takes one argument, *n*, and returns −*n*.
> For example, the value of `minus(-(minus(5), 9))` should be 14.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-let-lang.rkt).

##### Exercise 3.7 [★]

> Extend the language by adding operators for addition, multiplication, and integer quotient.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-let-lang.rkt).

##### Exercise 3.8 [★]

> Add a numeric equality predicate `equal?` and numeric order predicates `greater?` and `less?` to the
> set of operations in the defined language.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-let-lang.rkt).

##### Exercise 3.9 [★★]

> Add list processing operations to the language, including `cons`, `car`, `cdr`, `null?` and
> `emptylist`. A list should be able to contain any expressed value, including another list. Give the definitions of the
> expressed and denoted values of the language, as in section 3.2.2. For example,
>
> ```ml
> let x = 4
> in cons(x,
>         cons(cons(-(x,1),
>                   emptylist),
>              emptylist))
> ```
>
> should return an expressed value that represents the list `(4 (3))`.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-let-lang.rkt).

##### Exercise 3.10 [★★]

> Add an operation `list` to the language. This operation should take any number of arguments, and
> return an expressed value containing the list of their values. For example,
>
> ```ml
> let x = 4
> in list(x, -(x,1), -(x,3))
> ```
>
> should return an expressed value that represents the list `(4 3 1)`.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-let-lang.rkt).

##### Exercise 3.11 [★]

> In a real language, one might have many operators such as those in the preceding exercises.
> Rearrange the code in the interpreter so that it is easy to add new operators.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-let-lang.rkt).

##### Exercise 3.12 [★]

> Add to the defined language a facility that adds a `cond` expression. Use the grammar
>
> *Expression* ::= `cond` {*Expression* `==>` *Expression*}<sup>∗</sup> `end`
>
> In this expression, the expressions on the left-hand sides of the `==>`’s are evaluated in order until one of them
> returns a true value. Then the value of the entire expression is the value of the corresponding right-hand expression.
> If none of the tests succeeds, the expression should report an error.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-let-lang.rkt).

##### Exercise 3.13 [★]

> Change the values of the language so that integers are the only expressed values. Modify `if` so
> that the value 0 is treated as false and all other values are treated as true. Modify the predicates accordingly.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.13.rkt).

##### Exercise 3.14 [★★]

> As an alternative to the preceding exercise, add a new nonterminal *Bool-exp* of boolean
> expressions to the language. Change the production for conditional expressions to say
>
> *Expression* ::= `if` *Bool-exp* `then` *Expression* `else` *Expression*
>
> Write suitable productions for *Bool-exp* and implement `value-of-bool-exp`. Where do the predicates of exercise 3.8
> wind up in this organization?

*I’ll deal with this one later.*

##### Exercise 3.15 [★]

> Extend the language by adding a new operation `print` that takes one argument, prints it, and
> returns the integer 1. Why is this operation not expressible in our specification framework?

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-let-lang.rkt).

Because `print` cause a side effect while our specification framework does not have something to do this.

##### Exercise 3.16 [★★]

> Extend the language so that a `let` declaration can declare an arbitrary number of variables,
> using the grammar
>
> *Expression* ::= `let` {*Identifier* `=` *Expression*}<sup>∗</sup> `in` *Expression*
>
> As in Scheme’s `let`, each of the right-hand sides is evaluated in the current environment, and the body is evaluated
> with each new variable bound to the value of its associated right-hand side. For example,
>
> ```ml
> let x = 30
> in let x = -(x,1)
>        y = -(x,2)
>    in -(x,y)
> ```
>
> should evaluate to 1.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-let-lang.rkt).

##### Exercise 3.17 [★★]

> Extend the language with a `let*` expression that works like Scheme’s `let*`, so that
>
> ```ml
> let x = 30
> in let* x = -(x,1) y = -(x,2)
>    in -(x,y)
> ```
>
> should evaluate to 2.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-let-lang.rkt).

##### Exercise 3.18 [★★]

> Add an expression to the defined language:
>
> *Expression* ::= `unpack` {*Identifier*}<sup>∗</sup> `=` *Expression* `in` *Expression*
>
> so that `unpack x y z = lst in ...` binds `x`, `y`, and `z` to the elements of `lst` if `lst` is a list of exactly
> three elements, and reports an error otherwise. For example, the value of
>
> ```ml
> let u = 7
> in unpack x y = cons(u,cons(3,emptylist))
>    in -(x,y)
> ```
>
> should be 4.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-let-lang.rkt).

### 3.3 PROC: A Language with Procedures

#### 3.3.2 Representing Procedures

##### Exercise 3.19 [★]

> In many languages, procedures must be created and named at the same time. Modify the language of
> this section to have this property by replacing the `proc` expression with a `letproc` expression.

*Skipped.*

##### Exercise 3.20 [★]

> In PROC, procedures have only one argument, but one can get the effect of multiple argument
> procedures by using procedures that return other procedures. For example, one might write code like
>
> ```ml
> let f = proc (x) proc (y) ...
> in ((f 3) 4)
> ```
>
> This trick is called *Currying*, and the procedure is said to be *Curried*. Write a Curried procedure that takes two
> arguments and returns their sum. You can write *x* + *y* in our language by writing `-(`*x*`, -(0,` *y*`))`.

```ml
proc (x)
  proc (y)
    -(x, -(0, y))
```

##### Exercise 3.21 [★★]

> Extend the language of this section to include procedures with multiple arguments and calls with
> multiple operands, as suggested by the grammar
>
> *Expression* ::= `proc (`{*Identifier*}<sup>∗(`,`)</sup>`)` *Expression*\
> *Expression* ::= `(`*Expression* {*Expression*}<sup>∗</sup>`)`

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-proc-lang.rkt).

##### Exercise 3.22 [★★★]

> The concrete syntax of this section uses different syntax for a built-in operation, such as
> difference, from a procedure call. Modify the concrete syntax so that the user of this language need not know which
> operations are built-in and which are defined procedures. This exercise may range from very easy to hard, depending on
> the parsing technology being used.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.22.rkt).

##### Exercise 3.23 [★★]

> What is the value of the following PROC program?
>
> ```ml
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

```ml
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

##### Exercise 3.24 [★★]

> Use the tricks of the program above to write the pair of mutually recursive procedures, `odd` and
> `even`, as in exercise 3.32.

`odd`:

```ml
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

```ml
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

##### Exercise 3.25 [★]

> The tricks of the previous exercises can be generalized to show that we can define any recursive
> procedure in PROC. Consider the following bit of code:
>
> ```ml
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

```ml
proc (f)
  let maker = proc (maker)
                let recursive-proc = (maker maker)
                in (f recursive-proc)
  in ...
```

But the code would not work because once we call `(maker maker)`, it will first call `(maker maker)` which will cause
infinite recursion. We will fix this by wrapping `(maker maker)` inside another procedure:

```ml
proc (f)
  let maker = proc (maker)
                proc (x)
                  let recursive-proc = (maker maker)
                  in ((f recursive-proc) x)

  in ...
```

Now we get a `maker`, we call the `maker` with `maker`, we will get a recursive version of `f`:

```ml
proc (f)
  let maker = proc (maker)
                proc (x)
                  let recursive-proc = (maker maker)
                  in ((f recursive-proc) x)
  in (maker maker)
```

Let’s run the program:

```ml
let makerec = proc (f)
                let maker = proc (maker)
                              proc (x)
                                let recursive-proc = (maker maker)
                                in ((f recursive-proc) x)
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

##### Exercise 3.26 [★★]

> In our data-structure representation of procedures, we have kept the entire environment in the
> closure. But of course all we need are the bindings for the free variables. Modify the representation of procedures to
> retain only the free variables.

Here is a function that filters free variables in the environment:

```scm
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

##### Exercise 3.27 [★]

> Add a new kind of procedure called a `traceproc` to the language. A `traceproc` works exactly like
> a `proc`, except that it prints a trace message on entry and on exit.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-proc-lang.rkt).

##### Exercise 3.28 [★★]

> *Dynamic binding* (or *dynamic scoping*) is an alternative design for procedures, in which the
> procedure body is evaluated in an environment obtained by extending the environment at the point of call. For example
> in
>
> ```ml
> let a = 3
> in let p = proc (x) -(x,a)
>        a = 5
>    in -(a,(p 2))
> ```
>
> the `a` in the procedure body would be bound to 5, not 3. Modify the language to use dynamic binding. Do this twice,
> once using a procedural representation for procedures, and once using a data-structure representation.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-proc-lang.rkt).

Only data-structure representation is implemented.

##### Exercise 3.29 [★★]

> Unfortunately, programs that use dynamic binding may be exceptionally difficult to understand. For
> example, under lexical binding, consistently renaming the bound variables of a procedure can never change the behavior
> of a program: we can even remove all variables and replace them by their lexical addresses, as in section 3.6. But
> under dynamic binding, this transformation is unsafe.
>
> For example, under dynamic binding, the procedure `proc (z) a` returns the value of the variable `a` in its caller’s
> environment. Thus, the program
>
> ```ml
> let a = 3
> in let p = proc (z) a
>    in let f = proc (x) (p 0)
>       in let a = 5
>          in (f 2)
> ```
>
> returns 5, since `a`’s value at the call site is 5. What if `f`’s formal parameter were `a`?

The result should be 2.

### 3.4 LETREC: A Language with Recursive Procedures

#### 3.4.0

##### Exercise 3.30 [★]

> What is the purpose of the call to `proc-val` on the next-to-last line of `apply-env`?

When we are creating the desired recursive closure, we need an environment containing the closure, but we can not create
the environment directly because we need the closure in order to create the environment. So we delay the creation of
the closure in the environment so that we can create the environment without a closure. Then, when we need to use the
closure, we create it by calling `proc-val`.

##### Exercise 3.31 [★]

> Extend the language above to allow the declaration of a recursive procedure of possibly many
> arguments, as in exercise 3.21.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-letrec-lang.rkt).

##### Exercise 3.32 [★★]

> Extend the language above to allow the declaration of any number of mutually recursive unary
> procedures, for example:
>
> ```ml
> letrec
>   even(x) = if zero?(x) then 1 else (odd -(x,1))
>   odd(x) = if zero?(x) then 0 else (even -(x,1))
> in (odd 13)
> ```

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-letrec-lang.rkt).

##### Exercise 3.33 [★★]

> Extend the language above to allow the declaration of any number of mutually recursive procedures,
> each of possibly many arguments, as in exercise 3.21.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-letrec-lang.rkt).

##### Exercise 3.34 [★★★]

> Implement `extend-env-rec` in the procedural representation of environments from section 2.2.3.

*Skipped.*

##### Exercise 3.35 [★]

> The representations we have seen so far are inefficient, because they build a new closure every
> time the procedure is retrieved. But the closure is the same every time. We can build the closures only once, by putting
> the value in a vector of length 1 and building an explicit circular structure, like
>
> *TODO: Add this figure later.*
>
> Here’s the code to build this data structure.
>
> ```scm
> (define extend-env-rec
>   (lambda (p-name b-var body saved-env)
>     (let ((vec (make-vector 1)))
>       (let ((new-env (extend-env p-name vec saved-env)))
>         (vector-set! vec 0
>           (proc-val (procedure b-var body new-env)))
>         new-env))))
> ```
>
> Complete the implementation of this representation by modifying the definitions of the environment data type and
> `apply-env` accordingly. Be sure that `apply-env` always returns an expressed value.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-letrec-lang-circular.rkt).

##### Exercise 3.36 [★★]

> Extend this implementation to handle the language from exercise 3.32.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-letrec-lang-circular.rkt).

##### Exercise 3.37 [★]

> With dynamic binding (exercise 3.28), recursive procedures may be bound by `let`; no special
> mechanism is necessary for recursion. This is of historical interest; in the early years of programming language
> design other approaches to recursion, such as those discussed in section 3.4, were not widely understood. To
> demonstrate recursion via dynamic binding, test the program
>
> ```ml
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

*Skipped.*

### 3.7 Implementing Lexical Addressing

#### 3.7.2 The Nameless Interpreter

##### Exercise 3.38 [★]

> Extend the lexical address translator and interpreter to handle `cond` from exercise 3.12.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-lexaddr-lang.rkt).

##### Exercise 3.39 [★]

> Extend the lexical address translator and interpreter to handle `pack` and `unpack` from exercise
> 3.18.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-lexaddr-lang.rkt).

##### Exercise 3.40 [★★]

> Extend the lexical address translator and interpreter to handle `letrec`. Do this by modifying
> the context argument to `translation-of` so that it keeps track of not only the name of each bound variable, but also
> whether it was bound by `letrec` or not. For a reference to a variable that was bound by a `letrec`, generate a new
> kind of reference, called a `nameless-letrec-var-exp`. You can then continue to use the nameless environment
> representation above, and the interpreter can do the right thing with a `nameless-letrec-var-exp`.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-lexaddr-lang.rkt).

##### Exercise 3.41 [★★]

> Modify the lexical address translator and interpreter to handle `let` expressions, procedures, and
> procedure calls with multiple arguments, as in exercise 3.21. Do this using a nameless version of the ribcage
> representation of environments (exercise 2.11). For this representation, the lexical address will consist of two
> nonnegative integers: the lexical depth, to indicate the number of contours crossed, as before; and a position, to
> indicate the position of the variable in the declaration.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-lexaddr-lang.rkt).

##### Exercise 3.42 [★★★]

> Modify the lexical address translator and interpreter to use the trimmed representation of
> procedures from exercise 3.26. For this, you will need to translate the body of the procedure not
> `(extend-senv` *var* *senv*`)`, but in a new static environment that tells exactly where each variable will be kept
> in the trimmed representation.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-lexaddr-lang.rkt).

##### Exercise 3.43 [★★★]

> The translator can do more than just keep track of the names of variables. For example, consider
> the program
>
> ```ml
> let x = 3
> in let f = proc (y) -(y,x)
>    in (f 13)
> ```
>
> Here we can tell statically that at the procedure call, `f` will be bound to a procedure whose body is `-(y,x)`, where
> `x` has the same value that it had at the procedure-creation site. Therefore we could avoid looking up `f` in the
> environment entirely. Extend the translator to keep track of “known procedures” and generate code that avoids an
> environment lookup at the call of such a procedure.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-lexaddr-lang.rkt).

##### Exercise 3.44 [★★★]

> In the preceding example, the only use of `f` is as a known procedure. Therefore the procedure
> built by the expression proc `(y) -(y,x)` is never used. Modify the translator so that such a procedure is never
> constructed.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-3.x-lexaddr-lang.rkt).

## 4 State

### 4.2 EXPLICIT-REFS: A Language with Explicit References

#### 4.2.0

##### Exercise 4.1 [★]

> What would have happened had the program been instead
>
> ```ml
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

#### 4.2.1 Store-Passing Specifications

##### Exercise 4.2 [★]

> Write down the specification for a `zero?-exp`.

\\[ \dfrac{\texttt{(value-of $exp_1$ $ρ$ $σ_0$)} = (val_1, σ_1)}
          {\texttt{(value-of (zero?-exp $exp_1$) $ρ$ $σ_0$)} =
               \cases{(\texttt{(bool-val #t)}, σ_1) &if $\texttt{(expval->num $val_1$)} = 0$ \\\\
                      (\texttt{(bool-val #f)}, σ_1) &if $\texttt{(expval->num $val_1$)} ≠ 0$}} \\]

##### Exercise 4.3 [★]

> Write down the specification for a `call-exp`.

\\[ \dfrac{\eqalign{\texttt{(value-of $exp_1$ $ρ$ $σ_0$)} &= (val_1, σ_1) \\\\
                    \texttt{(value-of $exp_2$ $ρ$ $σ_1$)} &= (val_2, σ_2)}}
          {\texttt{(value-of (call-exp $exp_1$ $exp_2$) $ρ$ $σ_0$)} =
               \texttt{(apply-procedure $val_1$ $val_2$ $σ_2$)}} \\]

##### Exercise 4.4 [★★]

> Write down the specification for a `begin` expression.
>
> *Expression* ::= `begin` *Expression* {`;` *Expression*}<sup>∗</sup> `end`
>
> A `begin` expression may contain one or more subexpressions separated by semicolons. These are evaluated in order and
> the value of the last is returned.

\\[ \dfrac{\texttt{(value-of $exp_1$ $ρ$ $σ_0$)} = (val_1, σ_1)}
          {\eqalign{\texttt{(value-of (begin-exp $exp_1$ '()) $ρ$ $σ_0$)}                   &= (val_1, σ_1) \\\\
                    \texttt{(value-of (begin-exp $exp_1$ (cons $exp_2$ $exps$)) $ρ$ $σ_0$)} &=
                        \texttt{(value-of (begin-exp $exp_2$ $exps$) $ρ$ $σ_1$)}}} \\]

##### Exercise 4.5 [★★]

> Write down the specification for `list` (exercise 3.10).

\\[ \texttt{(value-of (list-exp '()))} = \texttt{(empty-list)} \\]

\\[ \dfrac{\eqalign{          \texttt{(value-of $exp_1$ $ρ$ $σ_0$)} &= (val_1, σ_1) \\\\
                    \texttt{(value-of (list-exp $exps$) $ρ$ $σ_1$)} &= (val_2, σ_2)}}
          {\texttt{(value-of (list-exp (cons $exp_1$ $exps$)))} = (\texttt{(pair-val $val_1$ $val_2$)}, σ_2)} \\]

#### 4.2.2 Specifying Operations on Explicit References

##### Exercise 4.6 [★]

> Modify the rule given above so that a `setref-exp` returns the value of the right-hand side.

\\[ \dfrac{\eqalign{\texttt{(value-of $exp_1$ $ρ$ $σ_0$)} &= (l, σ_1) \\\\
                    \texttt{(value-of $exp_2$ $ρ$ $σ_1$)} &= (val, σ_2)}}
          {\texttt{(value-of (setref-exp $exp_1$ $exp_2$ $ρ$ $σ_0$))} = (val, [l=val]σ_2)} \\]

##### Exercise 4.7 [★]

> Modify the rule given above so that a `setref-exp` returns the old contents of the location.

\\[ \dfrac{\eqalign{\texttt{(value-of $exp_1$ $ρ$ $σ_0$)} &= (l, σ_1) \\\\
                    \texttt{(value-of $exp_2$ $ρ$ $σ_1$)} &= (val, σ_2)}}
          {\texttt{(value-of (setref-exp $exp_1$ $exp_2$ $ρ$ $σ_0$))} = (σ_0(l), [l=val]σ_2)} \\]

#### 4.2.3 Implementation

##### Exercise 4.8 [★]

> Show exactly where in our implementation of the store these operations take linear time rather than
> constant time.

In `new-ref`, `length` and `append` take linear time, so `new-ref` takes linear time.

In `deref`, `list-ref` take linear time, so `deref` takes linear time.

In `setref!`, `setref-inner` loops through the store, which takes linear time, so `setref!` takes linear time.

##### Exercise 4.9 [★]

> Implement the store in constant time by representing it as a Scheme vector. What is lost by using
> this representation?

```scm
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
time on average by preallocating more locations in advance, but it is a little complicated, so I’ll just choose the easy
way to implement the store.

As for the disadvantages of using a Scheme vector to implement the store, may be sharing values between stores becomes
more difficult.

##### Exercise 4.10 [★]

> Implement the `begin` expression as specified in exercise 4.4.

*The reference implementation already implemented the `begin` expression, so I’ll just skip this one.*

##### Exercise 4.11 [★]

> Implement `list` from exercise 4.5.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.x-explicit-refs-lang.rkt).

##### Exercise 4.12 [★★★]

> Our understanding of the store, as expressed in this interpreter, depends on the meaning of
> effects in Scheme. In particular, it depends on us knowing *when* these effects take place in a Scheme program. We can
> avoid this dependency by writing an interpreter that more closely mimics the specification. In this interpreter,
> `value-of` would return both a value and a store, just as in the specification. A fragment of this interpreter appears
> in figure 4.6. We call this a *store-passing interpreter*. Extend this interpreter to cover all of the language
> EXPLICIT-REFS.
>
> Every procedure that might modify the store returns not just its usual value but also a new store. These are packaged
> in a data type called `answer`. Complete this definition of `value-of`.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.x-explicit-refs-lang.rkt).

*Also, what is `apply-store` in the reference implementation?*

##### Exercise 4.13 [★★★]

> Extend the interpreter of the preceding exercise to have procedures of multiple arguments.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.x-explicit-refs-lang.rkt).

### 4.3 IMPLICIT-REFS: A Language with Implicit References

#### 4.3.1 Specification

##### Exercise 4.14 [★]

> Write the rule for `let`.

\\[ \dfrac{\texttt{(value-of $exp_1$ $ρ$ $σ_0$)} = (val_1, σ_1)}
          {\texttt{(value-of (let-exp $var$ $exp_1$ $body$) $ρ$ $σ_0$)} =
               \texttt{(value-of $body$ $[var = l]ρ$ $[l = val_1]σ_1$)}} \\]

#### 4.3.2 The Implementation

##### Exercise 4.15 [★]

> In figure 4.8, why are variables in the environment bound to plain integers rather than expressed
> values, as in figure 4.5?

Because we know for sure that the denoted values will all be references, so plain integers are sufficient to represent
the location info we need.

##### Exercise 4.16 [★]

> Now that variables are mutable, we can build recursive procedures by assignment. For example
>
> ```ml
> letrec times4(x) = if zero?(x)
>                    then 0
>                    else -((times4 -(x,1)), -4)
> in (times4 3)
> ```
>
> can be replaced by
>
> ```ml
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

##### Exercise 4.17 [★★]

> Write the rules for and implement multiargument procedures and `let` expressions.

\\[ \eqalign{  &\texttt{(apply-procedure (procedure (list $var_1$ $var_2$ $…$ $var_n$) $body$ $ρ$) (list $val_1$ $val_2$ $…$ $val_n$) $σ$)} \\\\
             = &\texttt{(value-of $body$ $[var_n = l_n]…[var_2 = l_2][var_1 = l_1]ρ$ $[l_n = val_n]…[l_2 = val_2][l_1 = val_1]σ$)}} \\]

\\[ \dfrac{\eqalign{\texttt{(value-of $exp_1$ $ρ$ $σ_0$)} &= (val_1, σ_1) \\\\
                    \texttt{(value-of $exp_2$ $ρ$ $σ_1$)} &= (val_2, σ_2) \\\\
                                                          &… \\\\
              \texttt{(value-of $exp_n$ $ρ$ $σ_{n - 1}$)} &= (val_n, σ_n)}}
          {\eqalign{  &\texttt{(value-of (let-exp (list $var_1$ $var_2$ $…$ $var_n$) (list $exp_1$ $exp_2$ $…$ $exp_n$) $body$) $ρ$ $σ_0$)} \\\\
                    = &\texttt{(value-of $body$ $[var_n = l_n]…[var_2 = l_2][var_1 = l_1]ρ$ $[l_n = val_n]…[l_2 = val_2][l_1 = val_1]σ_n$)}}} \\]

##### Exercise 4.18 [★★]

> Write the rule for and implement multiprocedure `letrec` expressions.

\\[ \eqalign{  &\texttt{(value-of (letrec-exp (list $var_1$ $var_2$ $…$ $var_n$) (list $bvars_1$ $bvars_2$ $…$ $bvars_n$) (list $pbody_1$ $pbody_2$ $…$ $pbody_n$) $letrecbody$) $ρ$ $σ$)} \\\\
             = &\texttt{(let ([letrec-env $[var_n=l_n]…[var_2=l_2][var_1=l_1]ρ$])} \\\\
               &\quad \texttt{(value-of $letrecbody$ letrec-env $[l_n = \texttt{(procedure $bvars_n$ $pbody_n$ letrec-env)}]
                                                                 …
                                                                 [l_2 = \texttt{(procedure $bvars_2$ $pbody_2$ letrec-env)}]
                                                                 [l_1 = \texttt{(procedure $bvars_1$ $pbody_1$ letrec-env)}]σ$))}} \\]

##### Exercise 4.19 [★★]

> Modify the implementation of multiprocedure `letrec` so that each closure is built only once, and
> only one location is allocated for it. This is like exercise 3.35.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.x-implicit-refs-lang.rkt).

##### Exercise 4.20 [★★]

> In the language of this section, all variables are mutable, as they are in Scheme. Another
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
> *Expression* ::= `letmutable` *Identifier* `=` *Expression* `in` *Expression*

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.20.rkt).

##### Exercise 4.21 [★★]

> We suggested earlier the use of assignment to make a program more modular by allowing one
> procedure to communicate information to a distant procedure without requiring intermediate procedures to be aware of
> it. Very often such an assignment should only be temporary, lasting for the execution of a procedure call. Add to the
> language a facility for *dynamic assignment* (also called *fluid binding*) to accomplish this. Use the production
>
> *Expression* ::= `setdynamic` *Identifier* `=` *Expression* `during` *Expression*\
> <span style="border: 1px solid">`setdynamic-exp (`*var* *exp*<sub>1</sub> *body*`)`</span>
>
> The effect of the `setdynamic` expression is to assign temporarily the value of *exp*<sub>1</sub> to *var*, evaluate
> *body*, reassign *var* to its original value, and return the value of *body*. The variable *var* must already be
> bound. For example, in
>
> ```ml
> let x = 11
> in let p = proc (y) -(y,x)
>    in -(setdynamic x = 17 during (p 22),
>         (p 13))
> ```
>
> the value of `x`, which is free in procedure `p`, is 17 in the call `(p 22)`, but is reset to 11 in the call `(p 13)`,
> so the value of the expression is 5 − 2 = 3.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.x-implicit-refs-lang.rkt).

##### Exercise 4.22 [★★]

> So far our languages have been expression-oriented: the primary syntactic category of interest has
> been expressions and we have primarily been interested in their values. Extend the language to model the simple
> statement-oriented language whose specification is sketched below. Be sure to *Follow the Grammar* by writing separate
> procedures to handle programs, statements, and expressions.
>
> **Values** As in IMPLICIT-REFS.
>
> **Syntax** Use the following syntax:
>
> *Program* ::= *Statement*
>
> *Statement* ::= *Identifier* `=` *Expression*\
> ::= `print` *Expression*\
> ::= `{` {*Statement*}<sup>∗(`;`)</sup> `}`\
> ::= `if` *Expression* *Statement* *Statement*\
> ::= `while` *Expression* *Statement*\
> ::= `var` {*Identifier*}<sup>∗(`,`)</sup> `;` *Statement*
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
> \\[ \texttt{(result-of $stmt$ $ρ$ $σ_0$)} = σ_1 \\]
>
> **Examples** Here are some examples.
>
> ```scm
> (run "var x,y; {x = 3; y = 4; print +(x,y)}   % Example 1")
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

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.x-statement-oriented-implicit-refs-lang.rkt).

Specification for statements:

\\[ \dfrac{\texttt{(value-of $exp$ $ρ$ $σ_0$)} = (val, σ_1)}
          {\texttt{(result-of (assign-statement $var$ $exp$) $ρ$ $σ_0$)} = [ρ(var) = val]σ_1} \\]

\\[ \dfrac{\texttt{(value-of $exp$ $ρ$ $σ_0$)} = (val, σ_1)}
          {\texttt{(result-of (print-statement $exp$) $ρ$ $σ_0$)} = σ_1} \\]

\\[ \dfrac{\eqalign{      \texttt{(result-of $stmt_1$ $ρ$ $σ_0$)} &= σ_1 \\\\
                          \texttt{(result-of $stmt_2$ $ρ$ $σ_1$)} &= σ_2 \\\\
                                                                  &… \\\\
                    \texttt{(result-of $stmt_n$ $ρ$ $σ_{n - 1}$)} &= σ_n}}
          {\texttt{(result-of (brace-statement (list $stmt_1$ $stmt_1$ $…$ $stmt_n$)) $ρ$ $σ_0$)} = σ_n} \\]

\\[ \dfrac{\texttt{(value-of $exp$ $ρ$ $σ_0$)} = (val, σ_1)}
          {\texttt{(result-of (if-statement $exp$ $stmt_1$ $stmt_2$) $ρ$ $σ_0$)} =
               \cases{\texttt{(result-of $stmt_1$  $ρ$ $σ_1$)} &if $\texttt{(expval->bool $val$)} = \texttt{#t}$ \\\\
                      \texttt{(result-of $stmt_2$  $ρ$ $σ_1$)} &if $\texttt{(expval->bool $val$)} = \texttt{#f}$}} \\]

\\[ \dfrac{\eqalign{  \texttt{(value-of $exp$ $ρ$ $σ_0$)} &= (val, σ_1) \\\\
                    \texttt{(result-of $stmt$ $ρ$ $σ_1$)} &= σ_2}}
          {\eqalign{  &\texttt{(result-of (while-statement $exp$ $stmt$) $ρ$ $σ_2$)} \\\\
                    = &\cases{\texttt{(result-of (while-statement $exp$ $stmt$) $ρ$ $σ_2$)} &if $\texttt{(expval->bool $val$)} = \texttt{#t}$ \\\\
                              σ_1                                                           &if $\texttt{(expval->bool $val$)} = \texttt{#f}$}}} \\]

\\[ \eqalign{  &\texttt{(result-of (block-statement (list $var_1$ $var_2$ $…$ $var_n$) $stmt$) $ρ$ $σ_0$)} \\\\
             = &\texttt{(result-of $stmt$ $[var_n = l_n]…[var_2 = l_2][var_1 = l_1]ρ$ $[l_n = undefined]…[l_2 = undefined][l_1 = undefined]σ_0$)}} \\]

##### Exercise 4.23 [★]

> Add to the language of exercise 4.22 `read` statements of the form `read` *var*. This statement
> reads a nonnegative integer from the input and stores it in the given variable.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.x-statement-oriented-implicit-refs-lang.rkt).

##### Exercise 4.24 [★]

> A `do-while` statement is like a `while` statement, except that the test is performed *after* the
> execution of the body. Add `do-while` statements to the language of exercise 4.22.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.x-statement-oriented-implicit-refs-lang.rkt).

##### Exercise 4.25 [★]

> Extend the block statement of the language of exercise 4.22 to allow variables to be initialized.
> In your solution, does the scope of a variable include the initializer for variables declared later in the same block
> statement?

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.25.rkt).

No, the scope of a variable does not include the initializer for variables declared later in the same block statement.

##### Exercise 4.26 [★★★]

> Extend the solution to the preceding exercise so that procedures declared in a single block
> are mutually recursive. Consider restricting the language so that the variable declarations in a block are followed by
> the procedure declarations.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.26.rkt).

##### Exercise 4.27 [★★]

> Extend the language of the preceding exercise to include *subroutines*. In our usage a subroutine
> is like a procedure, except that it does not return a value and its body is a statement, rather than an expression.
> Also, add subroutine calls as a new kind of statement and extend the syntax of blocks so that they may be used to
> declare both procedures and subroutines. How does this affect the denoted and expressed values? What happens if a
> procedure is referenced in a subroutine call, or vice versa?

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.27.rkt).

Denoted values does not change, expressed values now contains a `sub-val` variant.

Error will happen if procedure is referenced in a subroutine call, or vice versa.

### 4.4 MUTABLE-PAIRS: A Language with Mutable Pairs

#### 4.4.2 Another Representation ofMutable Pairs

##### Exercise 4.28 [★★]

> Write down the specification rules for the five mutable-pair operations.

\\[ \dfrac{\eqalign{\texttt{(value-of $exp_1$ $ρ$ $σ_0$)} &= (val_1, σ_1) \\\\
                    \texttt{(value-of $exp_2$ $ρ$ $σ_1$)} &= (val_2, σ_2)}}
          {\texttt{(value-of (newpair-exp $exp_1$ $exp_2$) $ρ$ $σ_0$)} =
               (\texttt{(mutpair-val (a-pair $l_1$ $l_2$))}, [l_2 = val_2][l_1 = val_1]σ_2)} \\]

\\[ \dfrac{\texttt{(value-of $exp_1$ $ρ$ $σ_0$)} = (\texttt{(mutpair-val (a-pair $l_1$ $l_2$))}, σ_1)}
          {\texttt{(value-of (left-exp $exp_1$) $ρ$ $σ_0$)} = (σ_1(l_1), σ_1)} \\]

\\[ \dfrac{\texttt{(value-of $exp_1$ $ρ$ $σ_0$)} = (\texttt{(mutpair-val (a-pair $l_1$ $l_2$))}, σ_1)}
          {\texttt{(value-of (right-exp $exp_1$) $ρ$ $σ_0$)} = (σ_1(l_2), σ_1)} \\]

\\[ \dfrac{\eqalign{\texttt{(value-of $exp_1$ $ρ$ $σ_0$)} &= (\texttt{(mutpair-val (a-pair $l_1$ $l_2$))}, σ_1) \\\\
                    \texttt{(value-of $exp_2$ $ρ$ $σ_1$)} &= (val_2, σ_2)}}
          {\texttt{(value-of (setleft-exp $exp_1$ $exp_2$) $ρ$ $σ_0$)} = (\texttt{(num-val 82)}, [l_1 = val_2]σ_2)} \\]

\\[ \dfrac{\eqalign{\texttt{(value-of $exp_1$ $ρ$ $σ_0$)} &= (\texttt{(mutpair-val (a-pair $l_1$ $l_2$))}, σ_1) \\\\
                    \texttt{(value-of $exp_2$ $ρ$ $σ_1$)} &= (val_2, σ_2)}}
          {\texttt{(value-of (setright-exp $exp_1$ $exp_2$) $ρ$ $σ_0$)} = (\texttt{(num-val 83)}, [l_2 = val_2]σ_2)} \\]

##### Exercise 4.29 [★★]

> Add arrays to this language. Introduce new operators `newarray`, `arrayref`, and `arrayset` that
> create, dereference, and update arrays. This leads to
>
> - *ArrVal* = (*Ref*(*ExpVal*))<sup>∗</sup>
> - *ExpVal* = *Int* + *Bool* + *Proc* + *ArrVal*
> - *DenVal* = *Ref*(*ExpVal*)
>
> Since the locations in an array are consecutive, use a representation like the second representation above. What
> should be the result of the following program?
>
> ```ml
> let a = newarray(2,-99)
>     p = proc (x)
>          let v = arrayref(x,1)
>          in arrayset(x,1,-(v,-1))
> in begin arrayset(a,1,0); (p a); (p a); arrayref(a,1) end
> ```
>
> Here `newarray(2,-99)` is intended to build an array of size 2, with each location in the array containing -99.
> `begin` expressions are defined in exercise 4.4. Make the array indices zero-based, so an array of size 2 has indices
> 0 and 1.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.x-mutable-pairs-lang.rkt).

The result of that program should be 2.

##### Exercise 4.30 [★★]

> Add to the language of exercise 4.29 a procedure `arraylength`, which returns the size of an
> array. Your procedure should work in constant time. Make sure that `arrayref` and `arrayset` check to make sure that
> their indices are within the length of the array.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.x-mutable-pairs-lang.rkt).

### 4.5 Parameter-Passing Variations

#### 4.5.1 CALL-BY-REFERENCE

##### Exercise 4.31 [★]

> Write out the specification rules for CALL-BY-REFERENCE.

*Skipped.*

##### Exercise 4.32 [★]

> Extend the language CALL-BY-REFERENCE to have procedures of multiple arguments.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.x-call-by-reference-lang.rkt).

##### Exercise 4.33 [★★]

> Extend the language CALL-BY-REFERENCE to support call-by-value procedures as well.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.x-call-by-reference-lang.rkt).

##### Exercise 4.34 [★]

> Add a call-by-reference version of `let`, called `letref`, to the language. Write the specification
> and implement it.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.x-call-by-reference-lang.rkt).

##### Exercise 4.35 [★★]

> We can get some of the benefits of call-by-reference without leaving the call-by-value framework.
> Extend the language IMPLICIT-REFS by adding a new expression
>
> *Expression* ::= `ref` *Identifier*\
> <span style="border: 1px solid">`ref-exp (var)`</span>
>
> This differs from the language EXPLICIT-REFS, since references are only of variables. This allows us to write familiar
> programs such as `swap` within our call-by-value language. What should be the value of this expression?
>
> ```ml
> let a = 3
> in let b = 4
>    in let swap = proc (x) proc (y)
>                   let temp = deref(x)
>                   in begin
>                       setref(x,deref(y));
>                       setref(y,temp)
>                      end
>       in begin ((swap ref a) ref b); -(a,b) end
> ```
>
> Here we have used a version of `let` with multiple declarations (exercise 3.16). What are the expressed and denoted
> values of this language?

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.x-implicit-refs-lang.rkt).

> Here we have used a version of `let` with multiple declarations (exercise 3.16).

No, you have not.

The value of the given expression should be 1.

Expressed values now contains reference values, and denoted values still only contains references.

##### Exercise 4.36 [★]

> Most languages support arrays, in which case array references are generally treated like variable
> references under call-by-reference. If an operand is an array reference, then the location referred to, rather than
> its contents, is passed to the called procedure. This allows, for example, a swap procedure to be used in commonly
> occurring situations in which the values in two array elements are to be exchanged. Add array operators like those of
> exercise 4.29 to the call-by-reference language of this section, and extend `value-of-operand` to handle this case, so
> that, for example, a procedure application like
>
> ```ml
> ((swap arrayref(a, i)) arrayref(a, j))
> ```
>
> will work as expected. What should happen in the case of
>
> ```ml
> ((swap arrayref(a, arrayref(a, i))) arrayref(a, j))
> ```
>
> ?

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.x-call-by-reference-lang.rkt).

`((swap arrayref(a, arrayref(a, i))) arrayref(a, j))` will swap the element indexed by the value of `arrayref(a, i)`
with the element indexed by `j`.

##### Exercise 4.37 [★★]

> *Call-by-value-result* is a variation on call-by-reference. In call-by-value-result, the actual
> parameter must be a variable. When a parameter is passed, the formal parameter is bound to a new reference initialized
> to the value of the actual parameter, just as in call-by-value. The procedure body is then executed normally. When the
> procedure body returns, however, the value in the new reference is copied back into the reference denoted by the
> actual parameter. This may be more efficient than call-by-reference because it can improve memory locality. Implement
> call-by-value-result and write a program that produces different answers using call-by-value-result and
> call-by-reference.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.37.rkt).

This program produces 4 using call-by-value-result while it produces 3 using call-by-reference.

```ml
let f = proc (x)
          begin set x = 3;
                4
          end
in let x = 5
   in begin (f x);
            x
      end
```

#### 4.5.2 Lazy Evaluation: CALL-BY-NAME and CALL-BY-NEED

##### Exercise 4.38 [★]

> The example below shows a variation of exercise 3.25 that works under call-by-need. Does the
> original program in exercise 3.25 work under call-by-need? What happens if the program below is run under
> call-by-value? Why?
>
> ```ml
> let makerec = proc (f)
>                let d = proc (x) (f (x x))
>                in (f (d d))
> in let maketimes4 = proc (f)
>                      proc (x)
>                       if zero?(x)
>                       then 0
>                       else -((f -(x,1)), -4)
>    in let times4 = (makerec maketimes4)
>       in (times4 3)
> ```

Yes, the original program in exercise 3.25 works under call-by-need.

And the program above will loop infinitely under call-by-value, because in line 3, `(d d)` calls `d` with itself, and
when `d` is called, it calls its argument `x` with `x`, where `x` is `d` itself. So `(d d)` leads to another call to
`(d d)` which leads to infinite loop.

##### Exercise 4.39 [★]

> In the absence of effects, call-by-name and call-by-need always give the same answer. Construct an
> example in which call-by-name and call-by-need give different answers.

```ml
let x = 0
in let f = proc (y)
             begin y;
                   y
             end
   in (f begin set x = -(x, -1);
               x
         end)
```

The program above should produce 1 in call-by-need and 2 in call-by-name.

##### Exercise 4.40 [★]

> Modify `value-of-operand` so that it avoids making thunks for constants and procedures.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.x-call-by-need-lang.rkt).

##### Exercise 4.41 [★★]

> Write out the specification rules for call-by-name and call-by-need.

*Skipped.*

##### Exercise 4.42 [★★]

> Add a lazy `let` to the call-by-need interpreter.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-4.x-call-by-need-lang.rkt).

## 5 Continuation-Passing Interpreters

### 5.1 A Continuation-Passing Interpreter

#### 5.1.0

##### Exercise 5.1 [★]

> Implement this data type of continuations using the procedural representation.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.1.rkt).

##### Exercise 5.2 [★]

> Implement this data type of continuations using a data-structure representation.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.x-letrec-lang.rkt).

##### Exercise 5.3 [★]

> Add `let2` to this interpreter. A `let2` expression is like a `let` expression, except that it
> defines exactly two variables.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.x-letrec-lang.rkt).

##### Exercise 5.4 [★]

> Add `let3` to this interpreter. A `let3` expression is like a `let` expression, except that it
> defines exactly three variables.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.x-letrec-lang.rkt).

##### Exercise 5.5 [★]

> Add lists to the language, as in exercise 3.9.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.x-letrec-lang.rkt).

##### Exercise 5.6 [★★]

> Add a `list` expression to the language, as in exercise 3.10. As a hint, consider adding two new
> continuation-builders, one for evaluating the first element of the list and one for evaluating the rest of the list.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.x-letrec-lang.rkt).

##### Exercise 5.7 [★★]

> Add multideclaration `let` (exercise 3.16) to this interpreter.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.x-letrec-lang.rkt).

##### Exercise 5.8 [★★]

> Add multiargument procedures (exercise 3.21) to this interpreter.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.x-letrec-lang.rkt).

##### Exercise 5.9 [★★]

> Modify this interpreter to implement the IMPLICIT-REFS language. As a hint, consider including a
> new continuation-builder `(set-rhs-cont env var cont)`.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.x-implicit-refs-lang.rkt).

##### Exercise 5.10 [★★]

> Modify the solution to the previous exercise so that the environment is not kept in the
> continuation.

Not all environments can be removed from continuations. For example, I cannot think of a way to remove the environment
in the continuation of the bound expression.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.x-implicit-refs-lang.rkt).

##### Exercise 5.11 [★★]

> Add the `begin` expression of exercise 4.4 to the continuation-passing interpreter. Be sure that
> no call to `value-of` or `value-of-rands` occurs in a position that would build control context.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.x-implicit-refs-lang.rkt).

##### Exercise 5.12 [★]

> Instrument the interpreter of figures 5.4–5.6 to produce output similar to that of the calculation
> on page 150.

*Skipped.*

##### Exercise 5.13 [★]

> Translate the definitions of `fact` and `fact-iter` into the LETREC language. You may add a
> multiplication operator to the language. Then, using the instrumented interpreter of the previous exercise, compute
> `(fact 4)` and `(fact-iter 4)`. Compare them to the calculations at the beginning of this chapter. Find
> `(* 4 (* 3 (* 2 (fact 1))))` in the trace of `(fact 4)`. What is the continuation of `apply-procedure/k` for this call
> of `(fact 1)`?

The implementation of `fact` is:

```ml
letrec fact(n) = if zero?(n)
                 then 1
                 else *(n, (fact -(n, 1)))
in fact
```

The implementation of `fact-iter` is:

```ml
letrec fact-iter-acc(n) = proc (a)
                            if zero?(n)
                            then a
                            else ((fact-iter-acc -(n, 1)) *(n, a))
in proc (n)
     ((fact-iter-acc n) 1)
```

The continuation of `apply-procedure/k` for call of `(fact 1)` is:

```scm
(multiply2-cont (num-val 2)
                (multiply2-cont (num-val 3)
                                (multiply2-cont (num-val 4)
                                                (end-cont))))
```

##### Exercise 5.14 [★]

> The instrumentation of the preceding exercise produces voluminous output. Modify the
> instrumentation to track instead only the *size* of the largest continuation used during the calculation. We measure
> the size of a continuation by the number of continuation-builders employed in its construction, so the size of the
> largest continuation in the calculation on page 150 is 3. Then calculate the values of `fact` and `fact-iter` applied
> to several operands. Confirm that the size of the largest continuation used by `fact` grows linearly with its
> argument, but the size of the largest continuation used by `fact-iter` is a constant.

*Skipped.*

##### Exercise 5.15 [★]

> Our continuation data type contains just the single constant, `end-cont`, and all the other
> continuation-builders have a single continuation argument. Implement continuations by representing them as lists,
> where `(end-cont)` is represented by the empty list, and each other continuation is represented by a non-empty list
> whose car contains a distinctive data structure (called *frame* or *activation record*) and whose cdr contains the
> embedded continuation. Observe that the interpreter treats these lists like a stack (of frames).

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.15.rkt).

##### Exercise 5.16 [★★]

> Extend the continuation-passing interpreter to the language of exercise 4.22. Pass a continuation
> argument to `result-of`, and make sure that no call to `result-of` occurs in a position that grows a control context.
> Since a statement does not return a value, distinguish between ordinary continuations and continuations for
> statements; the latter are usually called *command continuations*. The interface should include a procedure
> `apply-command-cont` that takes a command continuation and invokes it. Implement command continuations both as data
> structures and as zero-argument procedures.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.16.rkt).

### 5.2 A Trampolined Interpreter

#### 5.2.0

##### Exercise 5.17 [★]

> Modify the trampolined interpreter to wrap `(lambda () ...)` around each call (there’s only one) to
> `apply-procedure/k`. Does this modification require changing the contracts?

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.17.rkt).

No, this modification does not require changing the contracts.

##### Exercise 5.18 [★]

> The trampoline systemin figure 5.7 uses a procedural representation of a *Bounce*. Replace this by
> a data structure representation.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.18.rkt).

##### Exercise 5.19 [★]

> Instead of placing the `(lambda () ...)` around the body of `apply-procedure/k`, place it around
> the body of `apply-cont`. Modify the contracts to match this change. Does the definition of *Bounce* need to change?
> Then replace the procedural representation of *Bounce* with a data-structure representation, as in exercise 5.18.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.19.rkt).

The definition of *Bounce* need not to change.

##### Exercise 5.20 [★]

> In exercise 5.19, the last bounce before `trampoline` returns a *FinalAnswer* is always something
> like `(apply-cont (end-cont)` *val*`)`, where `val` is some `ExpVal`. Optimize your representation of bounces in
> exercise 5.19 to take advantage of this fact.

*Skipped.*

##### Exercise 5.21 [★★]

> Implement a trampolining interpreter in an ordinary procedural language. Use a data structure
> representation of the snapshots as in exercise 5.18, and replace the recursive call to `trampoline` in its own body by
> an ordinary `while` or other looping construct.

*Skipped.*

##### Exercise 5.22 [★★★]

> One could also attempt to transcribe the environment-passing interpreters of chapter 3 in an
> ordinary procedural language. Such a transcription would fail in all but the simplest cases, for the same reasons as
> suggested above. Can the technique of trampolining be used in this situation as well?

I don’t think trampolining can be used in that situation. In the case of continuation-passing interpreters, every call
to `value-of` is a tail call, so we can simulate the process using a loop. But in the case of environment-passing
interpreters, not every call to `value-of` is a tail call, so we cannot convert the process using a loop. The
trampolining method will fail in such case.

### 5.3 An Imperative Interpreter

#### 5.3.0

##### Exercise 5.23 [★]

> What happens if you remove the “goto” line in one of the branches of this interpreter? Exactly how
> does the interpreter fail?

The interpreter will stop running at the position where the “goto” line should be.

##### Exercise 5.24 [★]

> Devise examples to illustrate each of the complications mentioned above.

*Skipped.*

##### Exercise 5.25 [★★]

> Registerize the interpreter for multiargument procedures (exercise 3.21).

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.x-letrec-lang-registers.rkt).

##### Exercise 5.26 [★]

> Convert this interpreter to a trampoline by replacing each call to `apply-procedure/k` with
> `(set! pc apply-procedure/k)` and using a driver that looks like
>
> ```scm
> (define trampoline
>   (lambda (pc)
>     (if pc (trampoline (pc)) val)))
> ```

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.26.rkt).

##### Exercise 5.27 [★]

> Invent a language feature for which setting the `cont` variable last requires a temporary variable.

*Skipped.*

##### Exercise 5.28 [★]

> Instrument this interpreter as in exercise 5.12. Since continuations are represented the same way,
> reuse that code. Verify that the imperative interpreter of this section generates *exactly* the same traces as the
> interpreter in exercise 5.12.

*Skipped.*

##### Exercise 5.29 [★]

> Apply the transformation of this section to `fact-iter` (page 139).

```scm
(define n1 'uninitialized)
(define a 'uninitialized)

(define (fact-iter-acc)
  (if (zero? n1)
      a
      (begin (set! a (* n1 a))
             (set! n1 (- n1 1))
             (fact-iter-acc))))

(define (fact-iter n)
  (set! n1 n)
  (set! a 1)
  (fact-iter-acc))
```

##### Exercise 5.30 [★★]

> Modify the interpreter of this section so that procedures rely on dynamic binding, as in exercise
> 3.28. As a hint, consider transforming the interpreter of exercise 3.28 as we did in this chapter; it will differ from
> the interpreter of this section only for those portions of the original interpreter that are different. Instrument the
> interpreter as in exercise 5.28. Observe that just as there is only one continuation in the state, there is only one
> environment that is pushed and popped, and furthermore, it is pushed and popped in parallel with the continuation. We
> can conclude that dynamic bindings have *dynamic extent*: that is, a binding to a formal parameter lasts exactly until
> that procedure returns. This is different from lexical bindings, which can persist indefinitely if they wind up in a
> closure.

*Skipped.*

##### Exercise 5.31 [★]

> Eliminate the remaining `let` expressions in this code by using additional global registers.

*Skipped.*

##### Exercise 5.32 [★★]

> Improve your solution to the preceding exercise by minimizing the number of global registers
> used. You can get away with fewer than 5. You may use no data structures other than those already used by the
> interpreter.

*Skipped.*

##### Exercise 5.33 [★★]

> Translate the interpreter of this section into an imperative language. Do this twice: once using
> zero-argument procedure calls in the host language, and once replacing each zero-argument procedure call by a `goto`.
> How do these alternatives perform as the computation gets longer?

*Skipped.*

##### Exercise 5.34 [★★]

> As noted on page 157, most imperative languages make it difficult to do this translation, because
> they use the stack for all procedure calls, even tail calls. Furthermore, for large interpreters, the pieces of code
> linked by `goto`’s may be too large for some compilers to handle. Translate the interpreter of this section into an
> imperative language, circumventing this difficulty by using the technique of trampolining, as in exercise 5.26.

*Skipped.*

### 5.4 Exceptions

#### 5.4.0

##### Exercise 5.35 [★★]

> This implementation is inefficient, because when an exception is raised, `apply-handler` must
> search linearly through the continuation to find a handler. Avoid this search by making the `try-cont` continuation
> available directly in each continuation.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.35.rkt).

##### Exercise 5.36 [★]

> An alternative design that also avoids the linear search in `apply-handler` is to use two
> continuations, a normal continuation and an exception continuation. Achieve this goal by modifying the interpreter of
> this section to take two continuations instead of one.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.36.rkt).

##### Exercise 5.37 [★]

> Modify the defined language to raise an exception when a procedure is called with the wrong number
> of arguments.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.37.rkt).

##### Exercise 5.38 [★]

> Modify the defined language to add a division expression. Raise an exception on division by zero.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.38.rkt).

##### Exercise 5.39 [★★]

> So far, an exception handler can propagate the exception by reraising it, or it can return a
> value that becomes the value of the `try` expression. One might instead design the language to allow the computation
> to resume from the point at which the exception was raised. Modify the interpreter of this section to accomplish this
> by running the body of the handler with the continuation from the point at which the `raise` was invoked.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.39.rkt).

##### Exercise 5.40 [★★★]

> Give the exception handlers in the defined language the ability to either return or resume. Do
> this by passing the continuation from the `raise` exception as a second argument. This may require adding
> continuations as a new kind of expressed value. Devise suitable syntax for invoking a continuation on a value.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.40.rkt).

##### Exercise 5.41 [★★★]

> We have shown how to implement exceptions using a data-structure representation of
> continuations. We can’t immediately apply the recipe of section 2.2.3 to get a procedural representation, because we
> now have two observers: `apply-handler` and `apply-cont`. Implement the continuations of this section as a pair of
> procedures: a one-argument procedure representing the action of the continuation under `apply-cont`, and a
> zero-argument procedure representing its action under `apply-handler`.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.41.rkt).

I had to use a one-argument procedure to represent the action under `apply-handler` instead of a zero-argument
procedure.

##### Exercise 5.42 [★★]

> The preceding exercise captures the continuation only when an exception is raised. Add to the
> language the ability to capture a continuation anywhere by adding the form `letcc` *Identifier* `in` *Expression* with
> the specification
>
> `(value-of/k (letcc` *var* *body*`)` *ρ* *cont*`)`<br />
> `= (value-of/k` *body* `(extend-env` *var* *cont* *ρ*`)` *cont*`)`
>
> Such a captured continuation may be invoked with `throw`: the expression `throw` *Expression* `to` *Expression*
> evaluates the two subexpressions. The second expression should return a continuation, which is applied to the value of
> the first expression. The current continuation of the throw expression is ignored.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.42.rkt).

##### Exercise 5.43 [★★]

> Modify `letcc` as defined in the preceding exercise so that the captured continuation becomes a
> new kind of procedure, so instead of writing `throw` *exp*<sub>1</sub> `to` *exp*<sub>2</sub>, one would write
> `(`*exp*<sub>2</sub> *exp*<sub>1</sub>`)`.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.43.rkt).

##### Exercise 5.44 [★★]

> An alternative to `letcc` and `throw` of the preceding exercises is to add a single procedure to
> the language. This procedure, which in Scheme is called `call-with-current-continuation`, takes a one-argument
> procedure, `p`, and passes to `p` a procedure that when invoked with one argument, passes that argument to the current
> continuation, `cont`. We could define `call-with-current-continuation` in terms of `letcc` and `throw` as follows:
>
> ```ml
> let call-with-current-continuation
>       = proc (p)
>           letcc cont
>           in (p proc (v) throw v to cont)
> in ...
> ```
>
> Add `call-with-current-continuation` to the language. Then write a translator that takes the language with `letcc` and
> `throw` and translates it into the language without `letcc` and `throw`, but with `call-with-current-continuation`.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.44.rkt).

To translate a language with `letcc` and `throw` into the language without `letcc` and `throw`, just do the following:

- Translate `letcc` *var* `in` *body* into `callcc(proc (`*var*`)` *body*`)`;
- Translate `throw` *exp*<sub>1</sub> `to` *exp*<sub>2</sub> into `(`*exp*<sub>2</sub> *exp*<sub>1</sub>`)`.

### 5.5 Threads

#### 5.5.0

##### Exercise 5.45 [★]

> Add to the language of this section a construct called `yield`. Whenever a thread executes a
> `yield`, it is placed on the ready queue, and the thread at the head of the ready queue is run. When the thread is
> resumed, it should appear as if the call to yield had returned the number 99.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.x-threads-lang.rkt). It is copied from
the reference implementation.

##### Exercise 5.46 [★★]

> In the system of exercise 5.45, a thread may be placed on the ready queue either because its time
> slot has been exhausted or because it chose to yield. In the latter case, it will be restarted with a full time slice.
> Modify the system so that the ready queue keeps track of the remaining time slice (if any) of each thread, and
> restarts the thread only with the time it has remaining.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.46.rkt).

##### Exercise 5.47 [★]

> What happens if we are left with two subthreads, each waiting for a mutex held by the other
> subthread?

The two subthreads will deadlock and never be executed.

##### Exercise 5.48 [★]

> We have used a procedural representation of threads. Replace this by a data-structure
> representation.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.48.rkt).

##### Exercise 5.49 [★]

> Do exercise 5.15 (continuations as a stack of frames) for THREADS.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.49.rkt).

##### Exercise 5.50 [★★]

> Registerize the interpreter of this section. What is the set of mutually tail-recursive procedures
> that must be registerized?

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.50.rkt).

Procedures that must be registerized are `apply-cont`, `apply-procedure`, `apply-unop`, `signal-mutex`, `value-of/k` and
`wait-for-mutex`.

##### Exercise 5.51 [★★★]

> We would like to be able to organize our program so that the consumer in figure 5.17 doesn’t have
> to busy-wait. Instead, it should be able to put itself to sleep and be awakened when the producer has put a value in
> the buffer. Either write a program with mutexes to do this, or implement a synchronization operator that makes this
> possible.

```ml
let buffer = 0
    in let mut = mutex()
       in let producer = proc (n)
                           letrec wait1(k) = if zero?(k)
                                             then begin set buffer = n;
                                                        signal(mut)
                                                  end
                                             else begin print(-(k, -200));
                                                        (wait1 -(k, 1))
                                                  end
                           in (wait1 5)
          in let consumer = proc (d)
                              begin wait(mut);
                                    buffer
                              end
             in begin wait(mut);
                      spawn(proc (d)
                              (producer 44));
                      print(300);
                      (consumer 86)
                end
```

##### Exercise 5.52 [★★★]

> Write a program using mutexes that will be like the program in figure 5.21, except that the main
> thread waits for all three of the subthreads to terminate, and then returns the value of `x`.

```ml
let x = 0
    in let mut = mutex()
       in let incr_x = proc (id)
                         let mut1 = mutex()
                         in begin wait(mut1);
                                  spawn(proc (dummy)
                                          begin wait(mut);
                                                set x = -(x, -1);
                                                signal(mut);
                                                signal(mut1)
                                          end);
                                  mut1
                            end
          in let mut1 = (incr_x 100)
             in let mut2 = (incr_x 200)
                in let mut3 = (incr_x 300)
                   in begin wait(mut1);
                            wait(mut2);
                            wait(mut3);
                            x
                      end
```

##### Exercise 5.53 [★★★]

> Modify the thread package to include *thread identifiers*. Each new thread is associated with a
> fresh thread identifier. When the child thread is spawned, it is passed its thread identifier as a value, rather than
> the arbitrary value 28 used in this section. The child’s number is also returned to the parent as the value of the
> `spawn` expression. Instrument the interpreter to trace the creation of thread identifiers. Check to see that the
> ready queue contains at most one thread for each thread identifier. How can a child thread know its parent’s
> identifier? What should be done about the thread identifier of the original program?

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.53.rkt).

We can pass both the parent’s thread number and the child’s thread number to the child.

##### Exercise 5.54 [★★]

> Add to the interpreter of exercise 5.53 a `kill` facility. The `kill` construct, when given a
> thread number, finds the corresponding thread on the ready queue or any of the waiting queues and removes it. In
> addition, `kill` should return a true value if the target thread is found and false if the thread number is not found
> on any queue.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.54.rkt).

##### Exercise 5.55 [★★]

> Add to the interpreter of exercise 5.53 an interthread communication facility, in which each
> thread can send a value to another thread using its thread identifier. A thread can receive messages when it chooses,
> blocking if no message has been sent to it.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-5.55.rkt).

##### Exercise 5.56 [★★]

> Modify the interpreter of exercise 5.55 so that rather than sharing a store, each thread has its
> own store. In such a language, mutexes can almost always be avoided. Rewrite the example of this section in this
> language, without using mutexes.

*Skipped.*

##### Exercise 5.57 [★★★]

> There are lots of different synchronization mechanisms in your favorite OS book. Pick three and
> implement them in this framework.

*Skipped.*

##### Exercise 5.58 [definitely

> ★] Go off with your friends and have some pizza, but make sure only one person at a time
> grabs a piece!

*Skipped.*

## 6 Continuation-Passing Style

### 6.1 Writing Programs in Continuation-Passing Style

#### 6.1.0

##### Exercise 6.1 [★]

> Consider figure 6.2 without `(set! pc fact/k)` in the definition of `fact/k` and without
> `(set! pc apply-cont)` in the definition of `apply-cont`. Why does the program still work?

Because when `fact/k` is called, the value of `pc` must be `fact/k`, so we don’t need to set `pc` to `fact/k` in order
to continue computation. Same for `apply-cont`.

##### Exercise 6.2 [★]

> Prove by induction on *n* that for any *g*, `(fib/k` *n* *g*`)` = `(`*g* `(fib` *n*`))`.

Base case: if *n* < 2, `(fib/k` *n* *g*`)` = `(`*g* 1`)` = `(`*g* `(fib` *n*`))`.

Inductive case: if *n* ≥ 2,

`(fib/k` *n* *g*`)`\
= `(fib/k (-` *n* `1) (lambda (val1) (fib/k (-` *n* `2) (lambda (val2) (`*g* `(+ val1 val2))))))`\
= `((lambda (val1) (fib/k (-` *n* `2) (lambda (val2) (`*g* `(+ val1 val2))))) (fib (-` *n* `1)))` (by induction)\
= `(fib/k (-` *n* `2) (lambda (val2) (`*g* `(+ (fib (-` *n* `1)) val2))))`\
= `((lambda (val2) (`*g* `(+ (fib (-` *n* `1)) val2))) (fib (-` *n* `2)))` (by induction)\
= `(`*g* `(+ (fib (-` *n* `1)) (fib (-` *n* `2))))`\
= `(`*g* `(fib` *n*`))`

##### Exercise 6.3 [★]

> Rewrite each of the following Scheme expressions in continuation-passing style. Assume that any
> unknown functions have also been rewritten in CPS.
>
> 1. `(lambda (x y) (p (+ 8 x) (q y)))`
> 2. `(lambda (x y u v) (+ 1 (f (g x y) (+ u v))))`
> 3. `(+ 1 (f (g x y) (+ u (h v))))`
> 4. `(zero? (if a (p x) (p y)))`
> 5. `(zero? (if (f a) (p x) (p y)))`
> 6. `(let ((x (let ((y 8)) (p y)))) x)`
> 7. `(let ((x (if a (p x) (p y)))) x)`

1. ```scm
   (lambda (x y cont)
     (q y
       (lambda (val)
         (p (+ 8 x) val cont))))
   ```
2. ```scm
   (lambda (x y u v cont)
     (g x
        y
        (lambda (val1)
          (f val1
             (+ u v)
             (lambda (val2)
               (cont (+ 1 val2)))))))
   ```
3. ```scm
   (g x
      y
      (lambda (val1)
        (h v
           (lambda (val2)
             (f val1
                (+ u val2)
                (lambda (val3)
                  (+ 1 val3)))))))
   ```
4. ```scm
   (if a
       (p x zero?)
       (p y zero?))
   ```
5. ```scm
   (f a
      (lambda (val)
        (if val
            (p x zero?)
            (p y zero?))))
   ```
6. ```scm
   (let ([y 8])
     (p y
        (lambda (val)
          (let ([x val])
            x))))
   ```
7. ```scm
   (let ([cont (lambda (val)
                 (let ([x val])
                   x))])
     (if a
         (p x cont)
         (p y cont)))
   ```

##### Exercise 6.4 [★★]

> Rewrite each of the following procedures in continuation-passing style. For each procedure, do
> this first using a data-structure representation of continuations, then with a procedural representation, and then
> with the inlined procedural representation. Last, write the registerized version. For each of these four versions,
> test to see that your implementation is tail-recursive by defining `end-cont` by
>
> ```scm
> (apply-cont (end-cont) val)
> = (begin
>     (eopl:printf "End of computation.~%")
>     (eopl:printf "This sentence should appear only once.~%")
>     val)
> ```
>
> as we did in chapter 5.
>
> 1. `remove-first` (section 1.2.3).
> 2. `list-sum` (section 1.3).
> 3. `occurs-free?` (section 1.2.4).
> 4. `subst` (section 1.2.5).

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.4.rkt).

##### Exercise 6.5 [★]

> When we rewrite an expression in CPS, we choose an evaluation order for the procedure calls in the
> expression. Rewrite each of the preceding examples in CPS so that all the procedure calls are evaluated from right to
> left.

*Skipped.*

##### Exercise 6.6 [★]

> How many different evaluation orders are possible for the procedure calls in
> `(lambda (x y) (+ (f (g x)) (h (j y))))`? For each evaluation order, write a CPS expression that calls the procedures
> in that order.

There are six different evaluation orders.

```scm
(lambda (x y cont)
  (g x
     (lambda (val1)
       (f val1
          (lambda (val2)
            (j y
               (lambda (val3)
                 (h val3
                    (lambda (val4)
                      (cont (+ val2 val4)))))))))))
```

```scm
(lambda (x y cont)
  (g x
     (lambda (val1)
       (j y
          (lambda (val2)
            (f val1
               (lambda (val3)
                 (h val2
                    (lambda (val4)
                      (cont (+ val3 val4)))))))))))
```

```scm
(lambda (x y cont)
  (g x
     (lambda (val1)
       (j y
          (lambda (val2)
            (h val2
               (lambda (val3)
                 (f val1
                    (lambda (val4)
                      (cont (+ val4 val3)))))))))))
```

```scm
(lambda (x y cont)
  (j y
     (lambda (val1)
       (g x
          (lambda (val2)
            (f val2
               (lambda (val3)
                 (h val1
                    (lambda (val4)
                      (cont (+ val3 val4)))))))))))
```

```scm
(lambda (x y cont)
  (j y
     (lambda (val1)
       (g x
          (lambda (val2)
            (h val1
               (lambda (val3)
                 (f val2
                    (lambda (val4)
                      (cont (+ val4 val3)))))))))))
```

```scm
(lambda (x y cont)
  (j y
     (lambda (val1)
       (h val1
          (lambda (val2)
            (g x
               (lambda (val3)
                 (f val3
                    (lambda (val4)
                      (cont (+ val4 val2)))))))))))
```

##### Exercise 6.7 [★★]

> Write out the procedural and the inlined representations for the interpreter in figures 5.4, 5.5,
> and 5.6.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.7-inlined.rkt)
and [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.7-procedural.rkt).

##### Exercise 6.8 [★★★]

> Rewrite the interpreter of section 5.4 using a procedural and inlined representation. This is
> challenging because we effectively have two observers, `apply-cont` and `apply-handler`. As a hint, consider modifying
> the recipe on page 6.1 so that we add to each procedure two extra arguments, one representing the behavior of the
> continuation under `apply-cont` and one representing its behavior under `apply-handler`.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.8-inlined.rkt)
and [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.8-procedural.rkt).

##### Exercise 6.9 [★]

> What property of multiplication makes this program optimization possible?

The [associative property](https://en.wikipedia.org/wiki/Associative_property).

##### Exercise 6.10 [★]

> For `list-sum`, formulate a succinct representation of the continuations, like the one for `fact/k`
> above.

```scm
(define list-sum/k
  (lambda (loi cont)
    (if (null? loi)
        cont
        (list-sum/k (cdr loi)
                    (+ cont (car loi))))))
```

### 6.2 Tail Form

#### 6.2.0

##### Exercise 6.11 [★]

> Complete the interpreter of figure 6.6 by writing `value-of-simple-exp`.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.x-cps-lang.rkt). This is copied from
the [reference implementation](https://github.com/mwand/eopl3/blob/master/chapter6/cps-lang/interp.scm).

##### Exercise 6.12 [★]

> Determine whether each of the following expressions is simple.
>
> 1. `-((f -(x,1)),1)`
> 2. `(f -(-(x,y),1))`
> 3. `if zero?(x) then -(x,y) else -(-(x,y),1)`
> 4. `let x = proc (y) (y x) in -(x,3)`
> 5. `let f = proc (x) x in (f 3)`

1. `-((f -(x,1)),1)` is not simple because `(f -(x,1))` is a procedure call.
2. `(f -(-(x,y),1))` is not simple because `(f -(-(x,y),1))` is a procedure call.
3. `if zero?(x) then -(x,y) else -(-(x,y),1)` is simple.
4. `let x = proc (y) (y x) in -(x,3)` is simple. although `(y x)` is procedural call, but it is in a procedure body so
   that’s OK.
5. `let f = proc (x) x in (f 3)` is not simple because `(f 3)` is a procedure call.

##### Exercise 6.13 [★]

> Translate each of these expressions in CPS-IN into continuation-passing style using the CPS recipe
> on page 200 above. Test your transformed programs by running them using the interpreter of figure 6.6. Be sure that
> the original and transformed versions give the same answer on each input.
>
> 1. `removeall`.
>    ```ml
>    letrec
>     removeall(n,s) =
>      if null?(s)
>      then emptylist
>      else if number?(car(s))
>           then if equal?(n,car(s))
>                then (removeall n cdr(s))
>                else cons(car(s),
>                          (removeall n cdr(s)))
>           else cons((removeall n car(s)),
>                     (removeall n cdr(s)))
>    ```
> 2. `occurs-in?`.
>    ```ml
>    letrec
>     occurs-in?(n,s) =
>      if null?(s)
>      then 0
>      else if number?(car(s))
>           then if equal?(n,car(s))
>                then 1
>                else (occurs-in? n cdr(s))
>      else if (occurs-in? n car(s))
>           then 1
>           else (occurs-in? n cdr(s))
>    ```
> 3. `remfirst`. This uses `occurs-in?` from the preceding example.
>    ```ml
>    letrec
>     remfirst(n,s) =
>      letrec
>       loop(s) =
>        if null?(s)
>        then emptylist
>        else if number?(car(s))
>             then if equal?(n,car(s))
>                  then cdr(s)
>                  else cons(car(s),(loop cdr(s)))
>             else if (occurs-in? n car(s))
>                  then cons((remfirst n car(s)),
>                            cdr(s))
>                  else cons(car(s),
>                            (remfirst n cdr(s)))
>      in (loop s)
>    ```
> 4. `depth`.
>    ```ml
>    letrec
>     depth(s) =
>      if null?(s)
>      then 1
>      else if number?(car(s))
>           then (depth cdr(s))
>           else if less?(add1((depth car(s))),
>                         (depth cdr(s)))
>                then (depth cdr(s))
>                else add1((depth car(s)))
>    ```
> 5. `depth-with-let`.
>    ```ml
>    letrec
>     depth(s) =
>      if null?(s)
>      then 1
>      else if number?(car(s))
>           then (depth cdr(s))
>           else let dfirst = add1((depth car(s)))
>                    drest = (depth cdr(s))
>                in if less?(dfirst,drest)
>                   then drest
>                   else dfirst
>    ```
> 6. `map`.
>    ```ml
>    letrec
>     map(f, l) = if null?(l)
>                 then emptylist
>                 else cons((f car(l)),
>                           (map f cdr(l)))
>     square(n) = *(n,n)
>    in (map square list(1,2,3,4,5))
>    ```
> 7. `fnlrgtn`. This procedure takes an n-list, like an s-list (page 9), but with numbers instead of symbols, and a
>    number `n` and returns the first number in the list (in left-to-right order) that is greater than `n`. Once the
>    result is found, no further elements in the list are examined. For example,
>    ```ml
>    (fnlrgtn list(1,list(3,list(2),7,list(9)))
>     6)
>    ```
>    finds 7.
> 8. `every`. This procedure takes a predicate and a list and returns a true value if and only if the predicate holds
>    for each list element.
>    ```ml
>    letrec
>     every(pred, l) =
>      if null?(l)
>      then 1
>      else if (pred car(l))
>           then (every pred cdr(l))
>           else 0
>    in (every proc(n) greater?(n,5) list(6,7,8,9))
>    ```

*Skipped.*

##### Exercise 6.14 [★]

> Complete the interpreter of figure 6.6 by supplying definitions for `value-of-program` and
> `apply-cont`.

Solution is implemented
[here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.x-cps-lang.rkt). This is copied from
the [reference implementation](https://github.com/mwand/eopl3/blob/master/chapter6/cps-lang/interp.scm).

##### Exercise 6.15 [★]

> Observe that in the interpreter of the preceding exercise, there is only one possible value for
> `cont`. Use this observation to remove the `cont` argument entirely.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.15.rkt).

##### Exercise 6.16 [★]

> Registerize the interpreter of figure 6.6.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.16.rkt).

##### Exercise 6.17 [★]

> Trampoline the interpreter of figure 6.6.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.17.rkt).

##### Exercise 6.18 [★★]

> Modify the grammar of CPS-OUT so that a simple `diff-exp` or `zero?-exp` can have only a constant
> or variable as an argument. Thus in the resulting language `value-of-simple-exp` can be made nonrecursive.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.18.rkt).

##### Exercise 6.19 [★★]

> Write a Scheme procedure `tail-form?` that takes the syntax tree of a program in CPS-IN,
> expressed in the grammar of figure 6.3, and determines whether the same string would be in tail form according to the
> grammar of figure 6.5.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.19.rkt).

```scm
(define all
  (lambda (pred items)
    (let loop ([items items])
      (or (null? items)
          (and (pred (car items))
               (loop (cdr items)))))))

(define simple-exp?
  (lambda (exp)
    (cases expression exp
      [const-exp (num) #t]
      [diff-exp (exp1 exp2) (and (simple-exp? exp1)
                                 (simple-exp? exp2))]
      [zero?-exp (exp1) (simple-exp? exp1)]
      [var-exp (var) #t]
      [proc-exp (vars body) (tail-form-exp? body)]
      [else #f])))

(define tail-form-exp?
  (lambda (exp)
    (cases expression exp
      [const-exp (num) #t]
      [diff-exp (exp1 exp2) (and (simple-exp? exp1)
                                 (simple-exp? exp2))]
      [zero?-exp (exp1) (simple-exp? exp1)]
      [if-exp (exp1 exp2 exp3) (and (simple-exp? exp1)
                                    (tail-form-exp? exp2)
                                    (tail-form-exp? exp3))]
      [var-exp (var) #t]
      [let-exp (var exp1 body) (and (simple-exp? exp1)
                                    (tail-form-exp? body))]
      [letrec-exp (p-names b-varss p-bodies letrec-body) (and (all tail-form-exp? p-bodies)
                                                              (tail-form-exp? letrec-body))]
      [proc-exp (vars body) (tail-form-exp? body)]
      [call-exp (rator rands) (and (simple-exp? rator) (all simple-exp? rands))])))

(define tail-form?
  (lambda (pgm)
    (cases program pgm
      [a-program (exp) (tail-form-exp? exp)])))
```

### 6.3 Converting to Continuation-Passing Style

#### 6.3.0

##### Exercise 6.20 [★]

> Our procedure `cps-of-exps` causes subexpressions to be evaluated from left to right. Modify
> `cps-of-exps` so that subexpressions are evaluated from right to left.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.20.rkt).

##### Exercise 6.21 [★]

> Modify `cps-of-call-exp` so that the operands are evaluated from left to right, followed by the
> operator.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.21.rkt).

##### Exercise 6.22 [★]

> Sometimes, when we generate `(`*K* *simp*`)`, *K* is already a `proc-exp`. So instead of
> generating
>
> ```scm
> (proc (var1) ... simp)
> ```
>
> we could generate
>
> ```ml
> let var1 = simp
> in ...
> ```
>
> This leads to CPS code with the property that it never contains a subexpression of the form
>
> ```scm
> (proc (var) exp1
>  simp)
> ```
>
> unless that subexpression was in the original expression.
>
> Modify `make-send-to-cont` to generate this better code. When does the new rule apply?

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.22.rkt).

The new rule applies when transform a expression on a operand position.

##### Exercise 6.23 [★★]

> Observe that our rule for `if` makes two copies of the continuation *K*, so in a nested `if` the
> size of the transformed program can grow exponentially. Run an example to confirm this observation. Then show how this
> may be avoided by changing the transformation to bind a fresh variable to `K`.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.23.rkt).

##### Exercise 6.24 [★★]

> Add lists to the language (exercise 3.10). Remember that the arguments to a list are not in tail
> position.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.24.rkt).

##### Exercise 6.25 [★★]

> Extend CPS-IN so that a `let` expression can declare an arbitrary number of variables
> (exercise 3.16).

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.25.rkt).

##### Exercise 6.26 [★★]

> A continuation variable introduced by `cps-of-exps` will only occur once in the continuation.
> Modify `make-send-to-cont` so that instead of generating
>
> ```ml
> let var1 = simp1
> in T
> ```
>
> as in exercise 6.22, it generates *T*[*simp*<sub>1</sub>/*var*<sub>1</sub>], where the notation
> *E*<sub>1</sub>[*E*<sub>2</sub>/*var*] means expression *E*<sub>1</sub> with every free occurrence of the variable
> *var* replaced by *E*<sub>2</sub>.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.26.rkt).

##### Exercise 6.27 [★★]

> As it stands, `cps-of-let-exp` will generate a useless `let` expression. (Why?) Modify this
> procedure so that the continuation variable is the same as the let variable. Then if *exp*<sub>1</sub> is nonsimple,
>
> `(cps-of-exp <<let` *var*<sub>1</sub> `=` *exp*<sub>1</sub> `in` *exp*<sub>2</sub>`>>` *K*`)`\
> `= (cps-of-exp` *exp*<sub>1</sub> `<<proc (`*var*<sub>1</sub>`) (cps-of-exp` *exp*<sub>2</sub> *K*`)>>`

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.27.rkt).

##### Exercise 6.28 [★]

> Food for thought: imagine a CPS transformer for Scheme programs, and imagine that you apply it to
> the first interpreter from chapter 3. What would the result look like?

It would look like a continuation-passing interpreter.

##### Exercise 6.29 [★★]

> Consider this variant of `cps-of-exps`.
>
> ```scm
> (define cps-of-exps
>   (lambda (exps builder)
>     (let cps-of-rest ((exps exps) (acc '()))
>       cps-of-rest : Listof(InpExp) × Listof(SimpleExp) → TfExp
>       (cond
>         ((null? exps) (builder (reverse acc)))
>         ((inp-exp-simple? (car exps))
>          (cps-of-rest (cdr exps)
>            (cons
>              (cps-of-simple-exp (car exps))
>               acc)))
>         (else
>          (let ((var (fresh-identifier 'var)))
>            (cps-of-exp (car exps)
>              (cps-proc-exp (list var)
>                (cps-of-rest (cdr exps)
>                  (cons
>                    (cps-of-simple-exp (var-exp var))
>                    acc))))))))))
> ```
>
> Why is this variant of cps-of-exp more efficient than the one in figure 6.8?

Because this variant only scan `exps` once without looking back, the original one will scan `exps` multiple times if
there are multiple non-simple expressions in `exps`.

##### Exercise 6.30 [★★]

> A call to `cps-of-exps` with a list of expressions of length one can be simplified as follows:
>
> `(cps-of-exps (list` *exp*`)` *builder*`)`\
> = `(cps-of-exp/ctx` *exp* `(lambda (simp) (`*builder* `(list simp))))`
>
> where
>
> **cps-of-exp/ctx** : *InpExp* × (*SimpleExp* → *TfExp*) → *TfExp*
>
> ```scm
> (define cps-of-exp/ctx
>   (lambda (exp context)
>     (if (inp-exp-simple? exp)
>       (context (cps-of-simple-exp exp))
>       (let ((var (fresh-identifier 'var)))
>         (cps-of-exp exp
>           (cps-proc-exp (list var)
>             (context (cps-var-exp var))))))))
> ```
>
> Thus, we can simplify occurrences of `(cps-of-exps (list ...))`, since the number of arguments to list is known.
> Therefore the definition of, for example, `cps-of-diff-exp` could be defined with `cps-of-exp/ctx` instead of with
> `cps-of-exps`.
>
> ```scm
> (define cps-of-diff-exp
>   (lambda (exp1 exp2 k-exp)
>     (cps-of-exp/ctx exp1
>       (lambda (simp1)
>         (cps-of-exp/ctx exp2
>           (lambda (simp2)
>             (make-send-to-cont k-exp
>               (cps-diff-exp simp1 simp2))))))))
> ```
>
> For the use of `cps-of-exps` in `cps-of-call-exp`, we can use `cps-of-exp/ctx` on the `rator`, but we still need
> `cps-of-exps` for the rands. Remove all other occurrences of `cps-of-exps` from the translator.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.30.rkt).

##### Exercise 6.31 [★★★]

> Write a translator that takes the output of `cps-of-program` and produces an equivalent program
> in which all the continuations are represented by data structures, as in chapter 5. Represent data structures like
> those constructed using `define-datatype` as lists. Since our language does not have symbols, you can use an integer
> tag in the car position to distinguish the variants of a data type.

*Skipped.*

##### Exercise 6.32 [★★★]

> Write a translator like the one in exercise 6.31, except that it represents all procedures by
> data structures.

*Skipped.*

##### Exercise 6.33 [★★★]

> Write a translator that takes the output from exercise 6.32 and converts it to a register
> program like the one in figure 6.1.

*Skipped.*

##### Exercise 6.34 [★★]

> When we convert a program to CPS, we do more than produce a program in which the control contexts
> become explicit. We also choose the exact order in which the operations are done, and choose names for each
> intermediate result. The latter is called *sequentialization*. If we don’t care about obtaining iterative behavior, we
> can sequentialize a program by converting it to *A-normal form* or *ANF*. Here’s an example of a program in ANF.
>
> ```scm
> (define fib/anf
>   (lambda (n)
>     (if (< n 2)
>       1
>       (let ((val1 (fib/anf (- n 1))))
>         (let ((val2 (fib/anf (- n 2))))
>           (+ val1 val2))))))
> ```
>
> Whereas a program in CPS sequentializes computation by passing continuations that name intermediate results, a
> program in ANF sequentializes computation by using `let` expressions that name all of the intermediate results.
>
> Retarget `cps-of-exp` so that it generates programs in ANF instead of CPS. (For conditional expressions occurring in
> nontail position, use the ideas in exercise 6.23.) Then, show that applying the revised `cps-of-exp` to, e.g., the
> definition of `fib` yields the definition of `fib/anf`. Finally, show that given an input program which is already in
> ANF, your translator produces the same program except for the names of bound variables.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.34.rkt).

##### Exercise 6.35 [★]

> Verify on a few examples that if the optimization of exercise 6.27 is installed, CPS-transforming
> the output of your ANF transformer (exercise 6.34) on a program yields the same result as CPS-transforming the
> program.

*Skipped.*

### 6.4 Modeling Computational Effects

#### 6.4.0

##### Exercise 6.36 [★★]

> Add a `begin` expression (exercise 4.4) to CPS-IN. You should not need to add anything to
> CPS-OUT.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.36.rkt).

##### Exercise 6.37 [★★★]

> Add implicit references (section 4.3) to CPS-IN. Use the same version of CPS-OUT, with explicit
> references, and make sure your translator inserts allocation and dereference where necessary. As a hint, recall that
> in the presence of implicit references, a `var-exp` is no longer simple, since it reads from the store.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.37.rkt).

##### Exercise 6.38 [★★★]

> If a variable never appears on the left-hand side of a `set` expression, then it is immutable,
> and could be treated as simple. Extend your solution to the preceding exercise so that all such variables are treated
> as simple.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.38.rkt).

##### Exercise 6.39 [★]

> Implement `letcc` and `throw` in the CPS translator.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.39.rkt).

##### Exercise 6.40 [★★]

> Implement `try/catch` and `throw` from section 5.4 by adding them to the CPS translator. You
> should not need to add anything to CPS-OUT. Instead, modify `cps-of-exp` to take two continuations: a success
> continuation and an error continuation.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-6.40.rkt).

## 7 Types

### 7.1 Values and Their Types

#### 7.1.0

##### Exercise 7.1 [★]

> Below is a list of closed expressions. Consider the value of each expression. For each value, what
> type or types does it have? Some of the values may have no type that is describable in our type language.
>
> 1. ```ml
>    proc (x) -(x,3)
>    ```
> 2. ```ml
>    proc (f) proc (x) -((f x), 1)
>    ```
> 3. ```ml
>    proc (x) x
>    ```
> 4. ```ml
>    proc (x) proc (y) (x y)
>    ```
> 5. ```ml
>    proc (x) (x 3)
>    ```
> 6. ```ml
>    proc (x) (x x)
>    ```
> 7. ```ml
>    proc (x) if x then 88 else 99
>    ```
> 8. ```ml
>    proc (x) proc (y) if x then y else 99
>    ```
> 9. ```ml
>    (proc (p) if p then 88 else 99
>     33)
>    ```
> 10. ```ml
>     (proc (p) if p then 88 else 99
>      proc (z) z)
>     ```
> 11. ```ml
>     proc (f)
>      proc (g)
>       proc (p)
>        proc (x) if (p (f x)) then (g 1) else -((f x),1)
>     ```
> 12. ```ml
>     proc (x)
>      proc(p)
>       proc (f)
>        if (p x) then -(x,1) else (f p)
>     ```
> 13. ```ml
>     proc (f)
>      let d = proc (x)
>               proc (z) ((f (x x)) z)
>      in proc (n) ((f (d d)) n)
>     ```

1. ```ml
   proc (x) -(x,3)
   ```

   `int -> int`
2. ```ml
   proc (f) proc (x) -((f x), 1)
   ```

   `(`*t* `-> int) -> (`*t* `-> int)`
3. ```ml
   proc (x) x
   ```

   *t* `->` *t*
4. ```ml
   proc (x) proc (y) (x y)
   ```

   `(`*t*<sub>1</sub> `->` *t*<sub>2</sub>`) -> (`*t*<sub>1</sub> `->` *t*<sub>2</sub>`)`
5. ```ml
   proc (x) (x 3)
   ```

   `(int ->` *t*`) ->` *t*
6. ```ml
   proc (x) (x x)
   ```

   Not describable
7. ```ml
   proc (x) if x then 88 else 99
   ```

   `bool -> int`
8. ```ml
   proc (x) proc (y) if x then y else 99
   ```

   `bool -> (int -> int)`
9. ```ml
   (proc (p) if p then 88 else 99
    33)
   ```

   Type error
10. ```ml
    (proc (p) if p then 88 else 99
     proc (z) z)
    ```

    Type error
11. ```ml
    proc (f)
     proc (g)
      proc (p)
       proc (x) if (p (f x)) then (g 1) else -((f x),1)
    ```

    `(`*t* `-> int) -> ((int -> int) -> ((int -> bool) -> (`*t* `-> int)))`
12. ```ml
    proc (x)
     proc(p)
      proc (f)
       if (p x) then -(x,1) else (f p)
    ```

    `int -> ((int -> bool) -> (((int -> bool) -> int) -> int))`
13. ```ml
    proc (f)
     let d = proc (x)
              proc (z) ((f (x x)) z)
     in proc (n) ((f (d d)) n)
    ```

    `((`*t*<sub>1</sub> `->` *t*<sub>2</sub>`) -> (`*t*<sub>1</sub> `->` *t*<sub>2</sub>`)) -> (`*t*<sub>1</sub> `->` *t*<sub>2</sub>`)`
    *(Not sure about this one)*

##### Exercise 7.2 [★★]

> Are there any expressed values that have exactly two types according to definition 7.1.1?

No, I don’t think so.

##### Exercise 7.3 [★★]

> For the language LETREC, is it decidable whether an expressed value *val* is of type *t*?

*Not sure about this one.*

### 7.2 Assigning a Type to an Expression

#### 7.2.0

##### Exercise 7.4 [★]

> Using the rules of this section, write derivations, like the one on page 5, that assign types for
> `proc (x) x` and `proc (x) proc (y) (x y)`. Use the rules to assign at least two types for each of these terms. Do the
> values of these expressions have the same types?

\\[ \dfrac{\texttt{(type-of «x» $[\texttt{x}=t]tenv$)} = t}
          {\texttt{(type-of «proc (x) x» $tenv$)} = \texttt{($t$ -> $t$)}} \\]

\\[ \dfrac{\dfrac{\dfrac{\eqalign{\texttt{(type-of «x» $[\texttt{y}=t_1][\texttt{x}=\texttt{($t_1$ -> $t_2$)}]tenv$)} &=
                                      \texttt{($t_1$ -> $t_2$)} \\\\
                                  \texttt{(type-of «y» $[\texttt{y}=t_1][\texttt{x}=\texttt{($t_1$ -> $t_2$)}]tenv$)} &=
                                      t_1}}
                        {\texttt{(type-of «(x y)» $[\texttt{y}=t_1][\texttt{x}=\texttt{($t_1$ -> $t_2$)}]tenv$)} = t_2}}
                 {\texttt{(type-of «proc (y) (x y)» $[\texttt{x}=\texttt{($t_1$ -> $t_2$)}]tenv$)} =
                              \texttt{($t_1$ -> $t_2$)}}}
          {\texttt{(type-of «proc (x) proc (y) (x y)» $tenv$)} = \texttt{($t_1$ -> $t_2$) -> ($t_1$ -> $t_2$)}} \\]

The values of these expressions do not necessarily have the same types. According to the actual type of *t*, the result
type may be different.

### CHECKED: A Type-Checked Language

#### 7.3.1 The Checker

##### Exercise 7.5 [★★]

> Extend the checker to handle multiple `let` declarations, multiargument procedures, and multiple
> `letrec` declarations. You will need to add types of the form
> `(`*t*<sub>1</sub> `*` *t*<sub>2</sub> `* ... *` *t*<sub>*n*</sub> `->` *t*`)` to handle multiargument procedures.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.5.rkt).

##### Exercise 7.6 [★]

> Extend the checker to handle assignments (section 4.3).

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.6.rkt).

##### Exercise 7.7 [★]

> Change the code for checking an `if-exp` so that if the test expression is not a boolean, the other
> expressions are not checked. Give an expression for which the new version of the checker behaves differently from the
> old version.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.7.rkt).

This expression behaves differently in the new version of checker:

```ml
if 1 then -(zero?(1), 4) else 2
```

##### Exercise 7.8 [★★]

> Add `pairof` types to the language. Say that a value is of type
> `pairof` *t*<sub>1</sub> `*` *t*<sub>2</sub> if and only if it is a pair consisting of a value of type *t*<sub>1</sub>
> and a value of type *t*<sub>2</sub>. Add to the language the following productions:
>
> *Type* ::= `pairof` *Type* `*` *Type*\
> <span style="border: 1px solid">`pair-type (ty1 ty2)`</span>
>
> *Expression* ::= `newpair (`*Expression* `,` *Expression*`)`\
> <span style="border: 1px solid">`pair-exp (exp1 exp2)`</span>
>
> *Expression* ::= `unpair` *Identifier* *Identifier* `=` *Expression*\
> `in` *Expression*\
> <span style="border: 1px solid">`unpair-exp (var1 var2 exp body)`</span>
>
> A `pair` expression creates a pair; an `unpair` expression (like exercise 3.18) binds its two variables to the two
> parts of the expression; the scope of these variables is `body`. The typing rules for `pair` and `unpair` are:
>
> \\[ \dfrac{\eqalign{\texttt{(type-of $e_1$ $tenv$)} &= t_1 \\\\
> \texttt{(type-of $e_1$ $tenv$)} &= t_2}}
> {\texttt{(type-of (pair-exp $e_1$ $e_2$) $tenv$)} = \texttt{pairof $t_1$ * $t_2$}} \\]
>
> \\[ \dfrac{\eqalign{                      \texttt{(type-of $e_{pair}$ $tenv$)} &= \texttt{pairof $t_1$ $t_2$} \\\\
> \texttt{(type-of $e_{body}$ $[var_1=t_1][var_2=t_2]tenv$)} &= t_{body}}}
> {\texttt{(type-of (unpair-exp $var_1$ $var_2$ $e_1$ $e_{body}$) $tenv$)} = t_{body}} \\]
>
> Extend CHECKED to implement these rules. In `type-to-external-form`, produce the list
> `(pairof` *t*<sub>1</sub> *t*<sub>2</sub>`)` for a pair type.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.8.rkt).

##### Exercise 7.9 [★★]

> Add `listof` types to the language, with operations similar to those of exercise 3.9. A value is of
> type `listof` *t* if and only if it is a list and all of its elements are of type *t*. Extend the language with the
> productions
>
> *Type* ::= `listof` *Type*\
> <span style="border: 1px solid">`list-type (ty)`</span>
>
> *Expression* ::= `list (`*Expression* {`,` *Expression*}<sup>∗</sup>`)`\
> <span style="border: 1px solid">`list-exp (exp1 exps)`</span>
>
> *Expression* ::= `cons (`*Expression* `,` *Expression*`)`\
> <span style="border: 1px solid">`cons-exp (exp1 exp2)`</span>
>
> *Expression* ::= `null? (`*Expression*`)`\
> <span style="border: 1px solid">`null-exp (exp1)`</span>
>
> *Expression* ::= `emptylist [`*Type*`]`\
> <span style="border: 1px solid">`emptylist-exp (ty)`</span>
>
> with types given by the following four rules:
>
> \\[ \dfrac{\eqalign{\texttt{(type-of $e_1$ $tenv$)} &= t \\\\
> \texttt{(type-of $e_2$ $tenv$)} &= t \\\\
> &⋮ \\\\
> \texttt{(type-of $e_n$ $tenv$)} &= t}}
> {\texttt{(type-of (list-exp $e_1$ ($e_2$ $…$ $e_n$)) $tenv$)} = \texttt{listof $t$}} \\]
>
> \\[ \dfrac{\eqalign{\texttt{(type-of $e_1$ $tenv$)} &= t \\\\
> \texttt{(type-of $e_2$ $tenv$)} &= \texttt{listof $t$}}}
> {\texttt{(type-of «cons($e_1$, $e_2$)» $tenv$)} = \texttt{listof $t$}} \\]
>
> \\[ \dfrac{\texttt{(type-of $e_1$ $tenv$)} = \texttt{listof $t$}}
> {\texttt{(type-of «null?($e_1$)» $tenv$)} = \texttt{bool}} \\]
>
> \\[ \texttt{(type-of «emptylist[$t$]» $tenv$)} = \texttt{listof $t$} \\]
>
> Although `cons` is similar to `pair`, it has a very different typing rule.
>
> Write similar rules for `car` and `cdr`, and extend the checker to handle these as well as the other expressions. Use
> a trick similar to the one in exercise 7.8 to avoid conflict with `proc-type-exp`. These rules should guarantee that
> `car` and `cdr` are applied to lists, but they should not guarantee that the lists be non-empty. Why would it be
> unreasonable for the rules to guarantee that the lists be non-empty? Why is the type parameter in `emptylist`
> necessary?

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.9.rkt).

Because a list may be dynamic generated, we have no way to know the length of the list statically, so we can not
guarantee a list is non-empty.

Because our implementation must know the exact type of every expression. If we omit the type parameter, we couldn’t
determine the type the expression `emptylist`.

##### Exercise 7.10 [★★]

> Extend the checker to handle EXPLICIT-REFS. You will need to do the following:
>
> - Add to the type system the types `refto` *t*, where *t* is any type. This is the type of references to locations
>   containing a value of type *t*. Thus, if *e* is of type *t*, `(newref` *e*`)` is of type `refto` *t*.
> - Add to the type system the type `void`. This is the type of the value returned by `setref`. You can’t apply any
>   operation to a value of type `void`, so it doesn’t matter what value `setref` returns. This is an example of types
>   serving as an information-hiding mechanism.
> - Write down typing rules for `newref`, `deref`, and `setref`.
> - Implement these rules in the checker.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.10.rkt).

##### Exercise 7.11 [★★]

> Extend the checker to handle MUTABLE-PAIRS.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.11.rkt).

### 7.4 INFERRED: A Language with Type Inference

#### 7.4.0

##### Exercise 7.12 [★]

> Using the methods in this section, derive types for each of the expressions in exercise 7.1, or
> determine that no such type exists. As in the other examples of this section, assume there is a `?` attached to each
> bound variable.

Turns out most of my solutions are correct, except for the last one. I think the last one

```ml
proc (f)
 let d = proc (x)
          proc (z) ((f (x x)) z)
 in proc (n) ((f (d d)) n)
```

is a [fixed-point combinator](https://en.wikipedia.org/wiki/Fixed-point_combinator), and should have the type
`((`*t*<sub>1</sub> `->` *t*<sub>2</sub>`) -> (`*t*<sub>1</sub> `->` *t*<sub>2</sub>`)) -> (`*t*<sub>1</sub> `->` *t*<sub>2</sub>`)`.
But due to our limited type system, we couldn’t assign a concrete type to `d` or `x`, so we failed to infer the who
program.

In fact, the following program in [Typed Racket](https://docs.racket-lang.org/ts-guide/index.html) type checks.

```scm
#lang typed/racket/base

(: fix (∀ (𝑡₁ 𝑡₂) ((𝑡₁ → 𝑡₂) → (𝑡₁ → 𝑡₂)) → (𝑡₁ → 𝑡₂)))

(define fix
  (λ (f)
    (let ([d : ((Rec r (r → (𝑡₁ → 𝑡₂))) → (𝑡₁ → 𝑡₂))
             (λ (x)
               (λ (z)
                 ((f (x x)) z)))])
      (λ (n)
        ((f (d d)) n)))))
```

##### Exercise 7.13 [★]

> Write down a rule for doing type inference for `let` expressions. Using your rule, derive types for
> each of the following expressions, or determine that no such type exists.
>
> 1. `let x = 4 in (x 3)`
> 2. `let f = proc (z) z in proc (x) -((f x), 1)`
> 3. `let p = zero?(1) in if p then 88 else 99`
> 4. `let p = proc (z) z in if p then 88 else 99`

\\[ \begin{alignat}{2}
        \texttt{(let-exp $var$ $e_1$ $body$)} &: & t_{var}  &= t_{e_1} \\\\
                                              &  & t_{body} &= t_\texttt{(let-exp $var$ $e_1$ $body$)}
    \end{alignat} \\]

1. `let x = 4 in (x 3)`

   Type error.
2. `let f = proc (z) z in proc (x) -((f x), 1)`

   `int -> int`
3. `let p = zero?(1) in if p then 88 else 99`

   `int`
4. `let p = proc (z) z in if p then 88 else 99`

   Type error.

##### Exercise 7.14 [★]

> What is wrong with this expression?
>
> ```ml
> letrec
>  ? even(odd : ?) =
>     proc (x : ?)
>      if zero?(x) then 1 else (odd -(x,1))
> in letrec
>     ? odd(x : bool) =
>        if zero?(x) then 0 else ((even odd) -(x,1))
>    in (odd 13)
> ```

The parameter `x` of `odd` should be of type `int`.

##### Exercise 7.15 [★★]

> Write down a rule for doing type inference for a `letrec` expression. Your rule should handle
> multiple declarations in a `letrec`. Using your rule, derive types for each of the following expressions, or determine
> that no such type exists:
>
> 1. ```ml
>    letrec ? f (x : ?)
>            = if zero?(x) then 0 else -((f -(x,1)), -2)
>    in f
>    ```
> 2. ```ml
>    letrec ? even (x : ?)
>              = if zero?(x) then 1 else (odd -(x,1))
>           ? odd (x : ?)
>              = if zero?(x) then 0 else (even -(x,1))
>    in (odd 13)
>    ```
> 3. ```ml
>    letrec ? even (odd : ?)
>              = proc (x) if zero?(x)
>                         then 1
>                         else (odd -(x,1))
>    in letrec ? odd (x : ?) =
>                 if zero?(x)
>                 then 0
>                 else ((even odd) -(x,1))
>       in (odd 13)
>    ```

\\[ \begin{alignat}{2}
        \texttt{(letrec-exp $pnames$ $bvars$ $pbodies$ $letrecbody$)} &: & t_{pname_1}    &= \texttt{($t_{bvar_1}$ -> $t_{pbody_1}$)} \\\\
                                                                      &  & t_{pname_2}    &= \texttt{($t_{bvar_2}$ -> $t_{pbody_2}$)} \\\\
                                                                      &  &                &⋮ \\\\
                                                                      &  & t_{pname_n}    &= \texttt{($t_{bvar_n}$ -> $t_{pbody_n}$)} \\\\
                                                                      &  & t_{letrecbody} &= t_\texttt{(letrec-exp $pnames$ $bvars$ $pbodies$ $letrecbody$)}
    \end{alignat} \\]

1. ```ml
   letrec ? f (x : ?)
           = if zero?(x) then 0 else -((f -(x,1)), -2)
   in f
   ```

   `(int -> int)`
2. ```ml
   letrec ? even (x : ?)
             = if zero?(x) then 1 else (odd -(x,1))
          ? odd (x : ?)
             = if zero?(x) then 0 else (even -(x,1))
   in (odd 13)
   ```

   `int`
3. ```ml
   letrec ? even (odd : ?)
             = proc (x : ?) if zero?(x)
                            then 1
                            else (odd -(x,1))
   in letrec ? odd (x : ?) =
                if zero?(x)
                then 0
                else ((even odd) -(x,1))
      in (odd 13)
   ```

   `int`

##### Exercise 7.16 [★★★]

> Modify the grammar of INFERRED so that missing types are simply omitted, rather than marked with
> `?`.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.16.rkt).

#### 7.4.1 Substitutions

##### Exercise 7.17 [★★]

> In our representation, `extend-subst` may do a lot of work if *σ* is large. Implement an alternate
> representation in which `extend-subst` is implemented as
>
> ```scm
> (define extend-subst
>   (lambda (subst tvar ty)
>     (cons (cons tvar ty) subst)))
> ```
>
> and the extra work is shifted to `apply-subst-to-type`, so that the property
> *t*(*σ*[*tv* = *t*′]) = \(*tσ*)[*tv* = *t*′] is still satisfied. For this definition of `extend-subst`, is the
> no-occurrence invariant needed?

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.17.rkt).

The no-occurrence invariant is not needed for this definition of `extend-subst`.

##### Exercise 7.18 [★★]

> Modify the implementation in the preceding exercise so that `apply-subst-to-type` computes the
> substitution for any type variable at most once.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.18.rkt).

#### 7.4.2 The Unifier

##### Exercise 7.19 [★]

> We wrote: “If `ty1` is an unknown type, then the no-occurrence invariant tells us that it is not
> bound in the substitution.” Explain in detail why this is so.

Because `ty1` is the result type after applying the substitution, if it is an unknown type, either it is not bound in
the substitution, or it is on the right hand side of the substitution. Since the no-occurrence invariant forbids bounded
variable occurs on the right hand side of the substitution, `ty1` is not bound in the substitution.

##### Exercise 7.20 [★★]

> Modify the unifier so that it calls `apply-subst-to-type` only on type variables, rather than on
> its arguments.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.20.rkt).

##### Exercise 7.21 [★★]

> We said the substitution is like a store. Implement the unifier, using the representation of
> substitutions from exercise 7.17, and keeping the substitution in a global Scheme variable, as we did in figures 4.1
> and 4.2.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.21.rkt).

##### Exercise 7.22 [★★]

> Refine the implementation of the preceding exercise so that the binding of each type variable can
> be obtained in constant time.

The best I can do is linear time look up, I think I’ll need hash table to implement constant time look up. Still, in my
implementation, faster look up time is at the cost of slower extension.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.22.rkt).

#### 7.4.3 Finding the Type of an Expression

##### Exercise 7.23 [★★]

> Extend the inferencer to handle pair types, as in exercise 7.8.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.23.rkt).

##### Exercise 7.24 [★★]

> Extend the inferencer to handle multiple `let` declarations, multiargument procedures, and
> multiple `letrec` declarations.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.24.rkt).

##### Exercise 7.25 [★★]

> Extend the inferencer to handle list types, as in exercise 7.9. Modify the language to use the
> production
>
> *Expression* ::= `emptylist`
>
> instead of
>
> *Expression* ::= `emptylist_`*Type*
>
> As a hint, consider creating a type variable in place of the missing `_`*t*.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.25.rkt).

##### Exercise 7.26 [★★]

> Extend the inferencer to handle EXPLICIT-REFS, as in exercise 7.10.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.26.rkt).

##### Exercise 7.27 [★★]

> Rewrite the inferencer so that it works in two phases. In the first phase it should generate a set
> of equations, and in the second phase, it should repeatedly call `unify` to solve them.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.27.rkt).

##### Exercise 7.28 [★★]

> Our inferencer is very useful, but it is not powerful enough to allow the programmer to define
> procedures that are polymorphic, like the polymorphic primitives `pair` or `cons`, which can be used at many types.
> For example, our inferencer would reject the program
>
> ```ml
> let f = proc (x : ?) x
> in if (f zero?(0))
>    then (f 11)
>    else (f 22)
> ```
>
> even though its execution is safe, because `f` is used both at type `(bool -> bool)` and at type `(int -> int)`. Since
> the inferencer of this section is allowed to find at most one type for `f`, it will reject this program.
>
> For a more realistic example, one would like to write programs like
>
> ```ml
> letrec
>  ? map (f : ?) =
>     letrec
>      ? foo (x : ?) = if null?(x)
>                      then emptylist
>                      else cons((f car(x)),
>                                ((map f) cdr(x)))
>     in foo
> in letrec
>     ? even (y : ?) = if zero?(y)
>                      then zero?(0)
>                      else if zero?(-(y,1))
>                           then zero?(1)
>                           else (even -(y,2))
>    in pair(((map proc(x : int)-(x,1))
>            cons(3,cons(5,emptylist))),
>            ((map even)
>             cons(3,cons(5,emptylist))))
> ```
>
> This expression uses `map` twice, once producing a list of `int`s and once producing a list of `bool`s. Therefore it
> needs two different types for the two uses. Since the inferencer of this section will find at most one type for `map`,
> it will detect the clash between `int` and `bool` and reject the program.
>
> One way to avoid this problem is to allow polymorphic values to be introduced only by `let`, and then to treat
> `(let-exp` *var* *e*<sub>1</sub> *e*<sub>2</sub>`)` differently from
> `(call-exp (proc-exp` *var* *e*<sub>2</sub>`)` *e*<sub>1</sub>`)` for type-checking purposes.
>
> Add polymorphic bindings to the inferencer by treating `(let-exp var` *e*<sub>1</sub> *e*<sub>2</sub>`)` like the
> expression obtained by substituting *e*<sub>1</sub> for each free occurrence of `var` in *e*<sub>2</sub>. Then, from
> the point of view of the inferencer, there are many different copies of *e*<sub>1</sub> in the body of the `let`, so
> they can have different types, and the programs above will be accepted.

Solution is implemented [here](https://github.com/EFanZh/EOPL-Exercises/blob/master/solutions/exercise-7.27.rkt).

##### Exercise 7.29 [★★★]

> The type inference algorithm suggested in the preceding exercise will analyze *e*<sub>1</sub>
> many times, once for each of its occurrences in *e*<sub>2</sub>. Implement Milner’s Algorithm W, which analyzes
> *e*<sub>1</sub> only once.

*Skipped.*

##### Exercise 7.30 [★★★]

> The interaction between polymorphism and effects is subtle. Consider a program starting
>
> ```ml
> let p = newref(proc (x : ?) x)
> in ...
> ```
>
> 1. Finish this program to produce a program that passes the polymorphic inferencer, but whose evaluation is not safe
>    according to the definition at the beginning of the chapter.
> 2. Avoid this difficulty by restricting the right-hand side of a let to have no effect on the store. This is called
>    the *value restriction*.

*Skipped.*
