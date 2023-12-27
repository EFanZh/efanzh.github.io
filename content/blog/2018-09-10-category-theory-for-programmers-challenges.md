+++
extra.enable_mathjax = true
title = "Category Theory for Programmers Challenges"
+++

Glossary:

- [Category](https://en.wikipedia.org/wiki/Category_(mathematics))
- [Category of sets](https://en.wikipedia.org/wiki/Category_of_sets)
  - A category with sets as objects and total functions as morphisms.
- [Cocone](https://en.wikipedia.org/wiki/Cone_(category_theory))
  - A natural transformation.
- [Colimit](https://en.wikipedia.org/wiki/Limit_(category_theory))
  - A universal cone.
- [Cone](https://en.wikipedia.org/wiki/Cone_(category_theory))
  - A natural transformation.
- [Cospan](https://en.wikipedia.org/wiki/Span_(category_theory))
  - A diagram of shape 1 → 2 ← 3.
- [Diagram](https://en.wikipedia.org/wiki/Diagram_(category_theory))
  - A functor.
- [Equalizer](https://en.wikipedia.org/wiki/Equaliser_(mathematics)#In_category_theory)
  - A limit.
- [Free monoid](https://en.wikipedia.org/wiki/Free_monoid)
  - The monoid whose elements are all the finite sequences (or strings) of zero or more elements from that set, with
    string concatenation as the monoid operation and with the unique sequence of zero elements, often called the empty
    string and denoted by *ε* or *λ*, as the identity element.
- [Functor](https://en.wikipedia.org/wiki/Functor)
- [Homomorphism](https://en.wikipedia.org/wiki/Homomorphism)
- [Kleisli category](https://en.wikipedia.org/wiki/Kleisli_category)
- [Limit](https://en.wikipedia.org/wiki/Limit_(category_theory))
  - A universal cone.
- [Monoid](https://en.wikipedia.org/wiki/Monoid_(category_theory))
  - An object *M* together with two morphisms
    - *μ*: *M* ⊗ *M* → *M* called *multiplication*,
    - *η*: *I* → *M* called *unit*.
- [Monoidal category](https://en.wikipedia.org/wiki/Monoidal_category)
  - A category **C** equipped with a bifunctor ⊗: **C** × **C** → **C** that is associative up to a natural
    isomorphism, and an object *I* that is both a left and right identity for ⊗, again up to a natural isomorphism.
- [Natural transformation](https://en.wikipedia.org/wiki/Natural_transformation)
  - A family of morphisms.
- [Presheaf](https://en.wikipedia.org/wiki/Presheaf_(category_theory))
  - A contravariant functor from any category to the category of sets.
- [Product category](https://en.wikipedia.org/wiki/Product_category)
- [Pullback](https://en.wikipedia.org/wiki/Pullback_(category_theory))
  - A limit of a cospan.
- [Pushout](https://en.wikipedia.org/wiki/Pushout_(category_theory))
  - A colimit of a span.
- [Representable functor](https://en.wikipedia.org/wiki/Representable_functor)
- [Span](https://en.wikipedia.org/wiki/Span_(category_theory))
  - A diagram of shape 1 ← 2 → 3.

## Part One

### 1 Category: The Essence of Composition

#### 1.4 Challenges

##### 1.4 - 1

> Implement, as best as you can, the identity function in your favorite language (or the second favorite, if your
> favorite language happens to be Haskell).

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_01_04_01.rs).

##### 1.4 - 2

> Implement the composition function in your favorite language. It takes two functions as arguments and returns a
> function that is their composition.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_01_04_02.rs).

##### 1.4 - 3

> Write a program that tries to test that your composition function respects identity.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_01_04_03.rs).

##### 1.4 - 4

> Is the world-wide web a category in any sense? Are links morphisms?

The world-wide web is a category if we consider reachability relations as morphisms. Links are not morphisms because
they can not be composited. Having a link from *a* to *b* and *b* to *c*, does not mean there is a link from *a* to *c*.

##### 1.4 - 5

> Is Facebook a category, with people as objects and friendships as morphisms?

1. *Skipped.*

##### 1.4 - 6

> When is a directed graph a category?

When its [transitive closure](https://en.wikipedia.org/wiki/Transitive_closure#In_graph_theory) is it self.

### 2 Types and Functions

#### 2.7 Challenges

##### 2.7 - 1

> Define a higher-order function (or a function object) `memoize` in your favorite language. This function takes a pure
> function `f` as an argument and returns a function that behaves almost exactly like `f`, except that it only calls the
> original function once for every argument, stores the result internally, and subsequently returns this stored result
> every time it’s called with the same argument. You can tell the memoized function from the original by watching its
> performance. For instance, try to memoize a function that takes a long time to evaluate. You’ll have to wait for the
> result the first time you call it, but on subsequent calls, with the same argument, you should get the result
> immediately.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_02_07_01.rs).

##### 2.7 - 2

> Try to memoize a function from your standard library that you normally use to produce random numbers. Does it work?

No, it does not work. A function for generating random numbers needs to be able to generate different numbers for
different calls, which means it is not pure. Memoizing it will cause the first generated number being remembered, then
the subsequent calls will always return the same number, which changes the intended behavior.

##### 2.7 - 3

> Most random number generators can be initialized with a seed. Implement a function that takes a seed, calls the random
> number generator with that seed, and returns the result. Memoize that function. Does it work?

Yes it works. The output of the function is entirely determined by the seed, so it is a pure function, which means
memoizing will work.

##### 2.7 - 4

> Which of these C++ functions are pure? Try to memoize them and observe what happens when you call them multiple times:
> memoized and not.
>
> 1. The factorial function from the example in the text.
> 2. `std::getchar()`
> 3. ```c++
>    bool f() {
>        std::cout << "Hello!" << std::endl;
>        return true;
>    }
>    ```
> 4. ```c++
>    int f(int x) {
>        static int y = 0;
>        y += x;
>        return y;
>    }
>    ```

1. Pure.
2. Not pure, because different values could be returned depends on user input.
3. Not pure, because it has a side effect of printing texts.
4. Not pure, because the global variable `y` is accessed, which may cause the return value to be different even if the
   argument `x` is the same. For example, call `f` twice with `1`, the first time `f` will return `1`, and the second
   time `f` will return `2`.

##### 2.7 - 5

> How many different functions are there from `Bool` to `Bool`? Can you implement them all?

There are 4 different *pure* functions.
See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_02_07_05.rs).

##### 2.7 - 6

> Draw a picture of a category whose only objects are the types `Void`, `()` (unit), and `Bool`; with arrows
> corresponding to all possible functions between these types. Label the arrows with the names of the functions.

The graph is too complex to draw, so here are the edges described in text.

- `Void` → `()`: `absurd`.
- `Void` → `Bool`: `absurd`.
- `()` → `()`: `id`.
- `()` → `Bool`: `yes`.
- `()` → `Bool`: `no`.
- `Bool` → `()`: `unit`.
- `Bool` → `Bool`: `yes`.
- `Bool` → `Bool`: `no`.
- `Bool` → `Bool`: `id`.
- `Bool` → `Bool`: `not`.

Note: `yes` is a function that returns `True` for all inputs, `no` is a function that returns `False` for all inputs,
and `not` is a function that negates a boolean value.

### 3 Categories Great and Small

#### 3.6 Challenges

##### 3.6 - 1

> Generate a free category from:
>
> 1. A graph with one node and no edges
> 2. A graph with one node and one (directed) edge (hint: this edge can be composed with itself)
> 3. A graph with two nodes and a single arrow between them
> 4. A graph with a single node and 26 arrows marked with the letters of the alphabet: a, b, c … z.

1. Add the identity edge.
2. Do nothing.
3. For each node, add one identity edge.
4. For each string that only consists of the alphabet with length that is not 1, add one edge.

##### 3.6 - 2

> What kind of order is this?
>
> 1. A set of sets with the inclusion relation: *A* is included in *B* if every element of *A* is also an element of
>    *B*.
> 2. C++ types with the following subtyping relation: `T1` is a subtype of `T2` if a pointer to `T1` can be passed to a
>    function that expects a pointer to `T2` without triggering a compilation error.

1. Partial order.
2. Partial order.

##### 3.6 - 3

> Considering that `Bool` is a set of two values `True` and `False`, show that it forms two (set-theoretical) monoids
> with respect to, respectively, operator `&&` (AND) and `||` (OR).

- For `&&`:
  - Neutral value is `True`.
  - `a && True == True && a`.
  - `(a && b) && c == a && (b && c)`.
- For `||`:
  - Neutral value is `False`.
  - `a || False == False || a`.
  - `(a || b) || c == a || (b || c)`.

##### 3.6 - 4

> Represent the `Bool` monoid with the AND operator as a category: List the morphisms and their rules of composition.

Morphisms:

- `id`: `x && True`, The identity morphism.
- `no`: `x && False`, Returns `False` for all inputs.

Rules of composition:

- `id` ∘ `id` = `id`.
- `id` ∘ `no` = `no`.
- `no` ∘ `no` = `no`.
- `no` ∘ `id` = `no`.

##### 3.6 - 5

> Represent addition modulo 3 as a monoid category.

Morphisms:

- `plus_0`: `(x + 0) % 3`, The identity morphism.
- `plus_1`: `(x + 1) % 3`.
- `plus_2`: `(x + 2) % 3`.

Rules of composition:

- `plus_0` ∘ `plus_0` = `plus_0`.
- `plus_0` ∘ `plus_1` = `plus_1`.
- `plus_0` ∘ `plus_2` = `plus_2`.
- `plus_1` ∘ `plus_0` = `plus_1`.
- `plus_1` ∘ `plus_1` = `plus_2`.
- `plus_1` ∘ `plus_2` = `plus_0`.
- `plus_2` ∘ `plus_0` = `plus_2`.
- `plus_2` ∘ `plus_1` = `plus_0`.
- `plus_2` ∘ `plus_2` = `plus_1`.

### 4 Kleisli Categories

#### 4.4 Challenge

> A function that is not defined for all possible values of its argument is called a partial function. It’s not really a
> function in the mathematical sense, so it doesn’t fit the standard categorical mold. It can, however, be represented
> by a function that returns an embellished type `optional`:
>
> ```c++
> template<class A> class optional {
>     bool _isValid;
>     A _value;
> public:
>     optional()    : _isValid(false) {}
>     optional(A v) : _isValid(true), _value(v) {}
>     bool isValid() const { return _isValid; }
>     A value() const { return _value; }
> };
> ```
>
> For example, here’s the implementation of the embellished function `safe_root`:
>
> ```c++
> optional<double> safe_root(double x) {
>     if (x >= 0) return optional<double>{sqrt(x)};
>     else return optional<double>{};
> }
> ```
>
> Here’s the challenge:

##### 4.4 - 1

> Construct the Kleisli category for partial functions (define composition and identity).

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_04_04_01.rs).

##### 4.4 - 2

> Implement the embellished function `safe_reciprocal` that returns a valid reciprocal of its argument, if it’s
> different from zero.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_04_04_02.rs).

##### 4.4 - 3

> Compose the functions `safe_root` and `safe_reciprocal` to implement `safe_root_reciprocal` that calculates
> `sqrt(1/x)` whenever possible.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_04_04_03.rs).

### 5 Products and Coproducts

#### 5.8 Challenges

##### 5.8 - 1

> Show that the terminal object is unique up to unique isomorphism.

Suppose we have two terminal objects *t1* and *t2*. Since *t1* is terminal, there must exists an unique morphism *f*
from *t1* to *t2*. Similarly, there must exists an unique morphism *g* from *t2* to *t1*.

Now we show that *f* ∘ *g* is the identity morphism. First, since *f* is a morphism from *t1* to *t2*, and *g* is a
morphism from *t2* to *t1*, *f* ∘ *g* must be a morphism from *t1* to *t1*. Since *t1* is a terminal object, there must
be an unique morphism from *t1* to *t1*, and since we are in a category, there must be an identity morphism form *t1* to
*t1*. So we must have *f* ∘ *g* being the identity morphism.

Similarly, *g* ∘ *f* must also be the identity morphism from *t2* to *t2*. Now we have *t1* and *t2* are unique up to
isomorphism. Since *f* and *g* are unique, we further have *t1* and *t2* are unique up to unique isomorphism.

##### 5.8 - 2

> What is a product of two objects in a poset? Hint: Use the universal construction.

A product of two objects *a* and *b* in a poset is the object *c* that *c* ≤ *a* and *c* ≤ *b* such that for any other
object *c*′ that *c*′ ≤ *a* and *c*′ ≤ *b*, *c*′ ≤ *c*. In other words, the product of two objects is the largest object
that is smaller than both *a* and *b*.

##### 5.8 - 3

> What is a coproduct of two objects in a poset?

A coproduct of two objects *a* and *b* in a poset is the object *c* that *a* ≤ *c* and *b* ≤ *c* such that for any other
object *c*′ that *a* ≤ *c*′ and *b* ≤ *c*′, *c* ≤ *c*′. In other words, the coproduct of two objects is the smallest
object that is greater than both *a* and *b*.

##### 5.8 - 4

> Implement the equivalent of Haskell `Either` as a generic type in your favorite language (other than Haskell).

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_05_08_04.rs).

##### 5.8 - 5

> Show that `Either` is a “better” coproduct than `int` equipped with two injections:
>
> ```c++
> int i(int n) { return n; }
> int j(bool b) { return b ? 0: 1; }
> ```
>
> Hint: Define a function
>
> ```c++
> int m(Either const & e);
> ```
>
> that factorizes `i` and `j`.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_05_08_05.rs).

##### 5.8 - 6

> Continuing the previous problem: How would you argue that `int` with the two injections `i` and `j` cannot be “better”
> than `Either`?

If `int` were better than `Either`, there should exist a function `m` from `int` to `Either` that factorizes the `Left`
and `Right` function. Consider that the `Left` function maps `0` to `Left(0)` and the `Right` function maps `true` to
`Right(0)`, `m` ∘ `i` should behave like `Left` and `m` ∘ `j` should behave like `Right`. But that is not possible,
because `i` maps `0` to `0`, and `j` maps `true` to `0`, there is no way for `m` to map `0` to both `Left(0)` and
`Right(true)`, so `int` cannot be better than `Either`.

##### 5.8 - 7

> Still continuing: What about these injections?
>
> ```c++
> int i(int n) {
>     if (n < 0) return n;
>     return n + 2;
> }
>
> int j(bool b) { return b ? 0: 1; }
> ```

Still not better than `Either`. With `Left`, I can map `std::numeric_limits<int>::max()` to
`Left(std::numeric_limits<int>::max())` (sorry for mixing Rust and C++ grammar, but you get the idea), but
`i(std::numeric_limits<int>::max())` triggers signed integer overflow, which is undefined behavior. No `m` function
can map undefined behavior to `Left(std::numeric_limits<int>::max())`, so `Either` is still better.

##### 5.8 - 8

> Come up with an inferior candidate for a coproduct of `int` and `bool` that cannot be better than `Either` because it
> allows multiple acceptable morphisms from it to `Either`.

Consider the `(bool, i32)` tuple type with the following two injections:

```rust
fn left(n: i32) -> (bool, i32) {
   (false, n)
}

fn right(b: bool) -> (bool, i32) {
   (true, i32::from(b))
}
```

I can have two functions from `(bool, i32)` to `Either`:

```rust
fn m1(x: (bool, i32)) -> Either<i32, bool> {
   if x.0 {
      match x.1 {
         0 => Either::Right(false),
         1 => Either::Right(true),
         _ => Either::Left(77), // <-- See here.
      }
   } else {
      Either::Left(x.1)
   }
}

fn m2(x: (bool, i32)) -> Either<i32, bool> {
   if x.0 {
      match x.1 {
         0 => Either::Right(false),
         1 => Either::Right(true),
         _ => Either::Left(88), // <-- See here.
      }
   } else {
      Either::Left(x.1)
   }
}
```

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_05_08_08.rs).

### 6 Simple Algebraic Data Types

#### 6.5 Challenges

##### 6.5 - 1

> Show the isomorphism between `Maybe a` and `Either () a`.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_06_05_01.rs).

##### 6.5 - 2

> Here’s a sum type defined in Haskell:
>
> ```haskell
> data Shape = Circle Float
>            | Rect Float Float
> ```
>
> When we want to define a function like `area` that acts on a `Shape`, we do it by pattern matching on the two
> constructors:
>
> ```haskell
> area :: Shape -> Float
> area (Circle r) = pi * r * r
> area (Rect d h) = d * h
> ```
>
> Implement `Shape` in C++ or Java as an interface and create two classes: `Circle` and `Rect`. Implement `area` as a
> virtual function.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_06_05_02.rs).

##### 6.5 - 3

> Continuing with the previous example: We can easily add a new function `circ` that calculates the circumference of a
> `Shape`. We can do it without touching the definition of `Shape`:
>
> ```haskell
> circ :: Shape -> Float
> circ (Circle r) = 2.0 * pi * r
> circ (Rect d h) = 2.0 * (d + h)
> ```
>
> Add `circ` to your C++ or Java implementation. What parts of the original code did you have to touch?

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_06_05_03.rs).

I have to update the definition of the `Shape` interface and the implementation of `Shape` for both `Circle` and `Rect`
types.

##### 6.5 - 4

> Continuing further: Add a new shape, `Square`, to `Shape` and make all the necessary updates. What code did you have
> to touch in Haskell vs. C++ or Java? (Even if you’re not a Haskell programmer, the modifications should be pretty
> obvious.)

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_06_05_04.rs).

##### 6.5 - 5

> Show that *a* + *a* = 2 × *a* holds for types (up to isomorphism). Remember that 2 corresponds to `Bool`, according to
> our translation table.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_06_05_05.rs).

### 7 Functors

#### 7.4 Challenges

##### 7.4 - 1

> Can we turn the `Maybe` type constructor into a functor by defining:
>
> ```haskell
> fmap _ _ = Nothing
> ```
>
> which ignores both of its arguments? (Hint: Check the functor laws.)

No, because identity is not preserved. For example, `fmap id (Just 4)` = `Nothing`, while `id (Just 4)` = `Just 4`.

##### 7.4 - 2

> Prove functor laws for the reader functor. Hint: it’s really simple.

- Preserve of identity: `fmap id x` = `id . x` = `x`.
- Composition:

  We have:

  - `fmap (f . g) x` = `(f . g) . x`, and
  - `(fmap f . fmap g) x` \
    = `fmap f (fmap g x)` \
    = `fmap f (g . x)` \
    = `f . (g . x)` \
    = `(f . g) . x`.

  So `fmap (f . g) x` = `(fmap f . fmap g) x`.

##### 7.4 - 3

> Implement the reader functor in your second favorite language (the first being Haskell, of course).

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_07_04_03.rs).

##### 7.4 - 4

> Prove the functor laws for the list functor. Assume that the laws are true for the tail part of the list you’re
> applying it to (in other words, use *induction*).

- Preservation of identity:

  - `Nil` case:

    `fmap id Nil` = `Nil`.
  - `Cons x t` case:

    `fmap id (Cons x t)` \
    = `Cons (id x) (fmap id t)` \
    = `Cons x (fmap id t)` \
    = `Cons x t` (by induction).

    So `fmap id (Cons x t)` = `Cons x t`

  So `fmap id x` = `x`.
- Preservation of composition:

  - `Nil` case:

    We have

    - `fmap (f . g) Nil` = `Nil`, and
    - `(fmap f . fmap g) Nil` \
      = `fmap f (fmap g Nil)` \
      = `fmap f Nil` = `Nil`.

    So `fmap (f . g) Nil` = `(fmap f . fmap g) Nil`.
  - `Cons x t` case:

    We have:

    - `fmap (f . g) (Cons x t)` = `Cons ((f . g) x) (fmap (f . g) t)`, and
    - `(fmap f . fmap g) (Cons x t)` \
      = `fmap f (fmap g (Cons x t))` \
      = `fmap f (Cons (g x) (fmap g t))` \
      = `Cons (f (g x)) (fmap f (fmap g t))` \
      = `Cons ((f . g) x) ((fmap f . fmap g) t)` \
      = `Cons ((f . g) x) (fmap (f . g) t)` (by induction).

    So `fmap (f . g) (Cons x t)` = `(fmap f . fmap g) (Cons x t)`.

  So `fmap (f . g) x` = `(fmap f . fmap g) x`.

### 8 Functoriality

#### 8.9 Challenges

##### 8.9 - 1

> Show that the data type:
>
> ```haskell
> data Pair a b = Pair a b
> ```
>
> is a bifunctor. For additional credit implement all three methods of `Bifunctor` and use equational reasoning to show
> that these definitions are compatible with the default implementations whenever they can be applied.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_08_09_01.rs).

```haskell
instance Bifunctor Pair where
    bimap f g (a, b) = (f a, g b)
    first f (a, b) = (f a, b)
    second g (a, b) = (a, g b)
```

- Proof of `bimap f g (a, b)` = `(first f . second g) (a, b)`:

  - `bimap f g (a, b)` = `(f a, g b)`
  - `(first f . second g) (a, b)` = `first f (second g (a, b))` = `first f (a, g b)` = `(f a, g b)`
- Proof of `first f (a, b)` = `bimap f id (a, b)`:

  - `first f (a, b)` = `(f a, b)`
  - `bimap f id (a, b)` = `(f a, id b)` = `(f a, b)`
- Proof of `second g (a, b)` = `bimap id g (a, b)`:

  - `second g (a, b)` = `(a, g b)`
  - `bimap id g (a, b)` = `(id a, g b)` = `(a, g b)`

##### 8.9 - 2

> Show the isomorphism between the standard definition of `Maybe` and this desugaring:
>
> ```haskell
> type Maybe' a = Either (Const () a) (Identity a)
> ```
>
> Hint: Define two mappings between the two implementations. For additional credit, show that they are the inverse of
> each other using equational reasoning.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_08_09_02.rs).

```haskell
maybeToEither :: Maybe a -> Either (Const () a) (Identity a)
maybeToEither Nothing = Left (Const ())
maybeToEither (Just a) = Right a

eitherToMaybe :: Either (Const () a) (Identity a) -> Maybe a
eitherToMaybe Left (Const ()) = Nothing
eitherToMaybe Right a = Just a
```

Proofs of `maybeToEither` and `eitherToMaybe` are the inverse of each other.

- Proof of `maybeToEither (eitherToMaybe a)` = `a`:

  - `maybeToEither (eitherToMaybe (Left (Const ())))` = `maybeToEither Nothing` = `Left (Const ())`
  - `maybeToEither (eitherToMaybe (Right a))` = `maybeToEither (Just a))` = `Right a`
- Proof of `eitherToMaybe (maybeToEither a)` = `a`:

  - `eitherToMaybe (maybeToEither Nothing)` = `eitherToMaybe (Left (Const ()))` = `Nothing`
  - `eitherToMaybe (maybeToEither (Just a))` = `eitherToMaybe (Right a))` = `Just a`

##### 8.9 - 3

> Let’s try another data structure. I call it a `PreList` because it’s a precursor to a `List`. It replaces recursion
> with a type parameter `b`.
>
> ```haskell
> data PreList a b = Nil | Cons a b
> ```
>
> You could recover our earlier definition of a `List` by recursively applying `PreList` to itself (we’ll see how it’s
> done when we talk about fixed points).
>
> Show that `PreList` is an instance of `Bifunctor`.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_08_09_03.rs).

##### 8.9 - 4

> Show that the following data types define bifunctors in `a` and `b`:
>
> ```haskell
> data K2 c a b = K2 c
>
> data Fst a b = Fst a
>
> data Snd a b = Snd b
> ```
>
> For additional credit, check your solutions against Conor McBride’s paper
> [Clowns to the Left of me, Jokers to the Right](http://strictlypositive.org/CJ.pdf).

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_08_09_04.rs).

##### 8.9 - 5

> Define a bifunctor in a language other than Haskell. Implement `bimap` for a generic pair in that language.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_08_09_05.rs).

##### 8.9 - 6

> Should `std::map` be considered a bifunctor or a profunctor in the two template arguments `Key` and `T`? How would you
> redesign this data type to make it so?

Personal opinion: intuitively, a `map` is like a function that maps the key type to the value type, so like a function,
it would seem that `map` should be considered a profunctor. The problem is that the `map` type from the standard library
is a mutable data structure, and I am not sure what the semantic of mutating mapped value should be, such as insertion
and removing.

The best I can come up with is [this](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_08_09_06.rs),
only a getter is implemented.

### 9 Function Types

### 10 Natural Transformations

#### 10.6 Challenges

##### 10.6 - 1

> Define a natural transformation from the `Maybe` functor to the list functor. Prove the naturality condition for it.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_10_06_01.rs).

##### 10.6 - 2

> Define at least two different natural transformations between `Reader ()` and the list functor. How many different
> lists of `()` are there?

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_10_06_02.rs).

There are infinite countable number of lists of `()`.

##### 10.6 - 3

> Continue the previous exercise with `Reader Bool` and `Maybe`.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_10_06_03.rs).

##### 10.6 - 4

> Show that horizontal composition of natural transformation satisfies the naturality condition (hint: use components).
> It’s a good exercise in diagram chasing.

We need to prove that for any

- category **C**, **D** and **E**,
- functor *F*: **C** → **D**,
- functor *F*′: **C** → **D**,
- natural transformation *α*: *F* → *F*′,
- functor *G*: **D** → **E**,
- functor *G*′: **D** → **E**,
- natural transformation *β*: *G* → *G*′,
- objects *a* and *b* in **C**,
- morphism *f*: *a* → *b* in **C**,

(*β* ∘ *α*) is a natural transformation from (*G* ∘ *F*) to (*G*′ ∘ *F*′), that is:

\\[((G' ∘ F') f) ∘ (β ∘ α)_a = (β ∘ α)_b ∘ ((G ∘ F) f).\\]

Let *X* = *G* ∘ *F*, *Y* = *G*′ ∘ *F*′, and *γ* = *β* ∘ *α*, we need to prove that:

\\[(Y f) ∘ γ_a = γ_b ∘ X f\text{.}\\]

Proof:

First, We apply \\((Y f) ∘ γ_a\\) to *X* *a*:

\\(((Y f) ∘ γ_a) (X a)\\)\
= \\((Y f) (γ_a (X a))\\)\
= \\((Y f) (Y a)\\)\
= \\(Y b\\).

Then, we also apply \\(γ_b ∘ (X f)\\) to *X* *a*:

\\((γ_b ∘ (X f)) (X a)\\)\
= \\(γ_b ((X f) (X a))\\)\
= \\(γ_b (X b)\\)\
= \\(Y b\\).

So indeed \\((Y f) ∘ γ_a = γ_b ∘ X f\\), we have proved that composition of natural transformations satisfies the
naturality condition.

##### 10.6 - 5

> Write a short essay about how you may enjoy writing down the evident diagrams needed to prove the interchange law.

What?

##### 10.6 - 6

> Create a few test cases for the opposite naturality condition of transformations between different `Op` functors.
> Here’s one choice:
>
> ```haskell
> op :: Op Bool Int
> op = Op (\x -> x > 0)
> ```
>
> and
>
> ```haskell
> f :: String -> Int
> f x = read x
> ```

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_10_06_06.rs).

## Part Two

### 11 Declarative Programming

### 12 Limits and Colimits

#### 12.5 Challenges

##### 12.5 - 1

> How would you describe a pushout in the category of C++ classes?

Assume morphisms are inheritance relation from subclasses to superclasses, if we have a diagram of class `A` inheriting
from both `B` and `C`, then the pushout is a class `D` that for any class `E` that is the superclass of both `B` and
`C`, it is the super class of `D`, that is, `D` is the maximally common superclass of `B` and `C`.

##### 12.5 - 2

> Show that the limit of the identity functor **Id** :: **C** → **C** is the initial object.

The image of **Id** is **C** itself, which contains all objects in **C**, so the limit is a natural transformation,
there exist a morphism from the limit to each object in  **C**, since the natural transformation is universal, the
morphisms from the limit to each object is unique, which satisfied the condition of the initial object.

##### 12.5 - 3

> Subsets of a given set form a category. A morphism in that category is defined to be an arrow connecting two sets if
> the first is the subset of the second. What is a pullback of two sets in such a category? What’s a pushout? What are
> the initial and terminal objects?

The pullback of two sets is their intersection set.

The pushout of two sets is their union set.

The initial object is the empty set.

The terminal object is the union set of all sets.

##### 12.5 - 4

> Can you guess what a coequalizer is?

The coequalizer is a colimit of a two-element category with two parallel morphisms going between them.

##### 12.5 - 5

> Show that, in a category with a terminal object, a pullback towards the terminal object is a product.

The pullback of objects *a* and *c* with two morphisms:

- *f*: *a* → *b*
- *g*: *c* → *b*

is the object *d* with two morphisms:

- *p*: *d* → *a*
- *q*: *d* → *c*,

that for any object object *d*′ with two morphisms:

- *p*′: *d*′ → *a*
- *q*′: *d*′ → *c*

where *f* ∘ *p*′ = *g* ∘ *q*′, there is a unique morphism *h*: *d*′ → *d*, so that:

- *p*′: *p* ∘ *h*
- *q*′: *q* ∘ *h*

The trick is that *b* is a terminal object, both *f* ∘ *p*′ and *g* ∘ *q*′ must be the unique morphism from *d*′ → *b*,
so the *f* ∘ *p*′ = *g* ∘ *q*′ condition is always satisfied. Without the constraint, *d*′ can be any object with any
two morphisms:

- *p*′: *d*′ → *a*
- *q*′: *d*′ → *c*

Using the unique *h* morphism as the factoring morphism, we can satisfy the product condition, with *d* as the product
of *a* and *c*.

##### 12.5 - 6

> Similarly, show that a pushout from an initial object (if one exists) is the coproduct.

The pushout of objects *a* and *c* with two morphisms:

- *f*: *b* → *a*
- *g*: *b* → *c*

is the object *d* with two morphisms:

- *p*: *a* → *d*
- *q*: *c* → *d*,

that for any object object *d*′ with two morphisms:

- *p*′: *a* → *d*′
- *q*′: *c* → *d*′

where *p*′ ∘ *f* = *q*′ ∘ *g*, there is a unique morphism *h*: *d* → *d*′, so that:

- *p*′: *h* ∘ *p*
- *q*′: *h* ∘ *q*

The trick is that *b* is an initial object, both *p*′ ∘ *f* and *q*′ ∘ *g* must be the unique morphism from *b* → *d*′,
so the *p*′ ∘ *f* = *q*′ ∘ *g* condition is always satisfied. Without the constraint, *d*′ can be any object with any
two morphisms:

- *p*′: *a* → *d*′
- *q*′: *c* → *d*′

Using the unique *h* morphism as the factoring morphism, we can satisfy the coproduct condition, with *d* as the
coproduct of *a* and *c*.

### 13 Free Monoids

#### 13.3 Challenges

##### 13.3 - 1

> You might think (as I did, originally) that the requirement that a homomorphism of monoids preserve the unit is
> redundant. After all, we know that for all *a*
>
> ```haskell
> h a * h e = h (a * e) = h a
> ```
>
> So *h* *e* acts like a right unit (and, by analogy, as a left unit). The problem is that *h* *a*, for all *a* might
> only cover a sub-monoid of the target monoid. There may be a “true” unit outside of the image of *h*. Show that an
> isomorphism between monoids that preserves multiplication must automatically preserve unit.

An isomorphism between monoids *A* and *B* is a pair of morphisms

- *f*: *A* → *B*
- *g*: *B* → *A*

so that:

- *g* ∘ *f* is the identity morphism on *A*
- *f* ∘ *g* is the identity morphism on *B*

If *f* and *g* preserve multiplication, we have: for all *a*, *b* in *A*, *f* *a* × *f* *b* = *f* (*a* × *b*).

Assume *e* is the unit element in *A*, we need to prove that *f* *e* is the unit element in *B*, which means for all *c*
in *B*, we need to have:

- *f* *e* × *c* = *c*
- *c* × *f* *e* = *c*

*f* *e* × *c*\
= *f* *e* × (*f* ∘ *g*) *c* (Since *f* ∘ *g* is the identity morphism on *B*.)\
= *f* *e* × *f* (*g* *c*)\
= *f* (*e* × *g* *c*) (Since multiplication is preserved.)\
= *f* (*g* *c*)\
= (*f* ∘ *g*) *c*\
= *c* (Since *f* ∘ *g* is the identity morphism on *B*.)

Similarly, we can prove that *c* × *f* *e* = *c*, so we provide that *f* *e* is the unit element in *B*, so unit is
preserved.

##### 13.3 - 2

> Consider a monoid homomorphism from lists of integers with concatenation to integers with multiplication. What is the
> image of the empty list `[]`? Assume that all singleton lists are mapped to the integers they contain, that is `[3]`
> is mapped to 3, etc. What’s the image of `[1, 2, 3, 4]`? How many different lists map to the integer 12? Is there any
> other homomorphism between the two monoids?

1. The image of the empty list `[]` is 1 since homomorphism preserves unit.
2. The image of `[1, 2, 3, 4]` is 24 since homomorphism preserves multiplication.
3. There lists map to integer 12 are lists that have total product of 12. There are infinite countable number of lists
   that have product of 12, since you can add 1 to the list any times you want without changing the product.
4. We can also map lists of integers concatenation to integers with addition.

#### 13.3 - 3

> What is the free monoid generated by a one-element set? Can you see what it’s isomorphic to?

It is lists that only contain that one-element zero or more times. It’s isomorphic to natural numbers with addition
where we map list to the length of the list.

### 14 Representable Functors

#### 14.3 Challenges

##### 14.3 - 1

> Show that the hom-functors map identity morphisms in *C* to corresponding identity functions in **Set**.

For functor **C**(*a*, -), it maps a morphism *f* to a function that precomposes *f* on its argument:

(**C**(*a*, -) *f*) *g* = *f* ∘ *g*

So when applied to the identity morphism:

(**C**(*a*, -) **id**) *g* = **id** ∘ *g* = *g*

So the identity morphism is mapped to a function that just returns the argument, which is the identity function.

For contravariant functor **C**(-, *a*), it maps a morphism *f* to a function that composes *f* to its argument:

(**C**(-, *a*) *f*) *g* = *g* ∘ *f*

So when applied to the identity morphism:

(**C**(-, *a*) **id**) *g* = *g* ∘ **id** = *g*

So the identity morphism is mapped to a function that just returns the argument, which is the identity function.

##### 14.3 - 2

> Show that `Maybe` is not representable.

For `Maybe` to be representable, we need for create a function *a* → `x` from a `Maybe x` value for some representing
type *a*. The problem is that a `Maybe x` value could be `Nothing`, from which we are not able to create a function that
returns an `x` value, so `Maybe` is not representable.

##### 14.3 - 3

> Is the `Reader` functor representable?

Yes, trivially.

##### 14.4 - 4

> Using `Stream` representation, memoize a function that squares its argument.

Not sure if I understand the challenge correctly, but here is my attempt:

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_14_03_04.rs).

##### 14.4 - 5

> Show that `tabulate` and `index` for `Stream` are indeed the inverse of each other. (Hint: use induction.)

Wwe prove that both `tabulate` ∘ `index` and `index` ∘ `tabulate` are the identity function.

Let `f = tabulate . index`, we have:

`f (Cons x y)`\
= `(tabulate . index) (Cons x y)`\
= `tabulate (index (Cons x y))`\
= `Cons (index (Cons x y) 0) (tabulate ((index (Cons x y)) . (+1)))`\
= `Cons x (tabulate ((index (Cons x y)) . (+1)))`\
= `Cons x (tabulate ((index (Cons x y)) . (+1)))`\
= `Cons x (tabulate ((\n -> if n == 0 then x else index y (n - 1)) . (+1)))`\
= `Cons x (tabulate (\n -> if n + 1 == 0 then x else index y (n + 1 - 1)))`\
= `Cons x (tabulate (\n -> index y n))`\
= `Cons x (tabulate (index y))`\
= `Cons x (f y)`

we know `f` will preserve the first value, thus by induction on `f y`, we know that it will also preserve the second
value, and also the third value, etc. So `f` will preserve all values in a `Stream` object, which means it is the
identity function.

Let `g = index . tabulate`, we need to prove for any `h`, `g h = h`, which means for any x, `g h x = h x`. We use proof
by induction on `x`:

Base case, if `x = 0`:

`g h 0`\
= `((index . tabulate) h) 0`\
= `index (tabulate h) 0`\
= `index (Cons (h 0) (tabulate (h . (+1)))) 0`\
= `(h 0)`

Inductive cases, if `x > 0`:

`g h x`\
= `(index . tabulate) h x`\
= `index (tabulate h) x`\
= `index (Cons (h 0) (tabulate (h . (+1)))) x`\
= `index (tabulate (h . (+1))) (x - 1)` (since x > 0)\
= `(index . tabulate) (h . (+1)) (x - 1)`\
= `g (h . (+1)) (x - 1)`\
= `(h . (+1)) (x - 1)` (by induction)\
= `h ((+1) (x - 1))`\
= `h x`

So for any `x`, `g h x = h x`, thus for any `h`, `g h = h`, which means `g` is the identity function.

##### 14.4 - 6

> The functor:
>
> ```haskell
> Pair a = Pair a a
> ```
>
> is representable. Can you guess the type that represents it? Implement `tabulate` and `index`.

The `bool` type represents the `Pair` functor.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_14_03_06.rs).
