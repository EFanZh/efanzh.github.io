---
enable_mathjax: true
---

# Category Theory for Programmers Challenges

Glossary:

- [Category](https://en.wikipedia.org/wiki/Category_(mathematics))
- [Monoid](https://en.wikipedia.org/wiki/Monoid_(category_theory))
- [Kleisli category](https://en.wikipedia.org/wiki/Kleisli_category)

## Part One

### 1 Category: The Essence of Composition

#### 1.4 Challenges

##### 1.4 - 1

> Implement, as best as you can, the identity function in your favorite language (or the second favorite, if your
> favorite language happens to be Haskell).

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_1_4_1.rs).

##### 1.4 - 2

> Implement the composition function in your favorite language. It takes two functions as arguments and returns a
> function that is their composition.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_1_4_2.rs).

##### 1.4 - 3

> Write a program that tries to test that your composition function respects identity.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_1_4_3.rs).

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

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_2_7_1.rs).

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
See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_2_7_5.rs).

##### 2.7 - 6

> Draw a picture of a category whose only objects are the types `Void`, `()` (unit), and `Bool`; with arrows
> corresponding to all possible functions between these types. Label the arrows with the names of the functions.

The graph is too complex to draw, so here are the edges described in text.

- `Void` -> `()`: `absurd`.
- `Void` -> `Bool`: `absurd`.
- `()` -> `()`: `id`.
- `()` -> `Bool`: `yes`.
- `()` -> `Bool`: `no`.
- `Bool` -> `()`: `unit`.
- `Bool` -> `Bool`: `yes`.
- `Bool` -> `Bool`: `no`.
- `Bool` -> `Bool`: `id`.
- `Bool` -> `Bool`: `not`.

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

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_4_4_1.rs).

##### 4.4 - 2

> Implement the embellished function `safe_reciprocal` that returns a valid reciprocal of its argument, if it’s
> different from zero.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_4_4_2.rs).

##### 4.4 - 3

> Compose the functions `safe_root` and `safe_reciprocal` to implement `safe_root_reciprocal` that calculates
> `sqrt(1/x)` whenever possible.

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_4_4_3.rs).

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

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_5_8_4.rs).

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

See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_5_8_5.rs).

##### 5.8 - 6

> Continuing the previous problem: How would you argue that `int` with the two injections `i` and `j` cannot be “better”
> than `Either`?

If `int` were better than `Either`, there should exist a function `m` from `int` to `Either` that factorizes the `Left`
and `Right` function. Consider that the `Left` function maps `0` to `Left(0)` and the `Right` function maps `true` to
`Right(0)`, `m` ∘ `i` should behave like `Left` and `m` ∘ `j` should behave like `Right`. But that is not possible,
because `i` maps `0` to `0`, and `j` maps `true` to `0`, there is no way for `m` to map `0` to both `Left(0)` and
`Right(true)`, so `int` cannot be better than `Either`.

------------------------------------------------------------------------------------------------------------------------

### 5 Products and Coproducts

1. > Show that the terminal object is unique up to unique isomorphism.

   Suppose that we have two terminal objects *t1* and *t2*. Since *t1* is terminal, there is a unique morphism *f* from
   *t2* to *t1*. By the same token, since *t2* is terminal, there is a unique morphism *g* from *t1* to *t2*. The
   composition *g* ∘ *f* must be a morphism from *t2* to *t2*. But *t2* is terminal so there can only be one morphism
   going from *t2* to *t2*. Since we are in a category, we know that there is an identity morphism from *t2* to *t2*,
   and since there is room from only one, that must be it. Therefore *g* ∘ *f* is equal to identity. Similarly,
   *f* ∘ *g* must be equal to identity, because there can be only one morphism from *t1* back to *t1*. This proves that
   *f* and *g* must be the inverse of each other. Therefore any two terminal objects are isomorphic.
2. > What is a product of two objects in a poset? Hint: Use the universal construction.

   A product of two objects *a* and *b* in a poset is the object *c* that *c* ≤ *a* and *c* ≤ *b* such that for any
   other object *c*′ that *c*′ ≤ *a* and *c*′ ≤ *b*, *c*′ ≤ *c*.
3. > What is a coproduct of two objects in a poset?

   A coproduct of two objects *a* and *b* in a poset is the object *c* that *a* ≤ *c* and *b* ≤ *c* such that for any
   other object *c*′ that *a* ≤ *c*′ and *b* ≤ *c*′, *c* ≤ *c*′.
4. > Implement the equivalent of Haskell `Either` as a generic type in your favorite language (other than Haskell).

   See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_5_8_4.rs).
5. > Show that `Either` is a “better” coproduct than `int` equipped with two injections:
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

   See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_5_8_5.rs).
6. > Continuing the previous problem: How would you argue that `int` with the two injections `i` and `j` cannot be
   > “better” than `Either`?

   If `int` with the two injections `i` and `j` is better than `Either`, there should be a function `f` that maps `int`
   to `Either` where `f` ∘ `i` == `Left` and `f` ∘ `j` == `Right`. But after applying `i` or `j`, We can not know the
   origin object is `int` or `bool`, so we can not determine whether to use `Left` or `Right` to construct `Either`.
7. > Still continuing: What about these injections?
   >
   > ```c++
   > int i(int n) {
   >     if (n < 0) return n;
   >     return n + 2;
   > }
   >
   > int j(bool b) { return b ? 0: 1; }
   > ```

   No, because the codomain of `i` is smaller than the domain. For each result from `i`, there may be more than one
   input corresponds to it. So information is lost. We cannot construct an `Either` object without losing information.
8. > Come up with an inferior candidate for a coproduct of `int` and `bool` that cannot be better than `Either` because
   > it allows multiple acceptable morphisms from it to `Either`.

   See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_5_8_8.rs).

### 6 Simple Algebraic Data Types

1. > Show the isomorphism between `Maybe a` and `Either () a`.

   See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_6_5_1.rs).
2. > Hereʼs a sum type defined in Haskell:
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

   See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_6_5_2.rs).
3. > Continuing with the previous example: We can easily add a new function `circ` that calculates the circumference of
   > a `Shape`. We can do it without touching the definition of `Shape`:
   >
   > ```haskell
   > circ :: Shape -> Float
   > circ (Circle r) = 2.0 * pi * r
   > circ (Rect d h) = 2.0 * (d + h)
   > ```
   >
   > Add `circ` to your C++ or Java implementation. What parts of the original code did you have to touch?

   See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_6_5_3.rs).
4. > Continuing further: Add a new shape, `Square`, to `Shape` and make all the necessary updates. What code did you
   > have to touch in Haskell vs. C++ or Java? (Even if youʼre not a Haskell programmer, the modifications should be
   > pretty obvious.)

   See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_6_5_4.rs).
5. > Show that *a* + *a* = 2 × *a* holds for types (up to isomorphism). Remember that 2 corresponds to `Bool`, according
   > to our translation table.

   - `a` + `a` ⇒ `Either a a`
   - 2 × `a` ⇒ `(Bool, a)`

   See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_6_5_5.rs) for definitions for
   morphisms.

### 7 Functors

1. > Can we turn the `Maybe` type constructor into a functor by defining:
   >
   > ```haskell
   > fmap _ _ = Nothing
   > ```
   >
   > which ignores both of its arguments? (Hint: Check the functor laws.)

   No. Because `fmap id (Just 4)` = `Nothing`, while `id (Just 4)` = `Just 4`, you can see that this version of `fmap`
   does not preserve identity.
2. > Prove functor laws for the reader functor. Hint: itʼs really simple.

   - `fmap id x` = `id . x` = `x`, so identity is preserved.
   - `fmap (f . g) x` = `(f . g) . x`,
     `(fmap f . fmap g) x` = `fmap f (fmap g x)` =  `fmap f (g . x)` = `f . (g . x)` = `(f . g) . x`, so
     `fmap (f . g) x` = `(fmap f . fmap g) x`, so composition is preserved.
3. > Implement the reader functor in your second favorite language (the first being Haskell, of course).

   See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_7_4_3.rs).
4. > Prove the functor laws for the list functor. Assume that the laws are true for the tail part of the list youʼre
   > applying it to (in other words, use *induction*).

   - `Nil` case:
     - Preservation of identity:

       `fmap id Nil` = `Nil`.
     - Preservation of composition:

       `fmap (f . g) Nil` = `Nil`, and `(fmap f . fmap g) Nil` = `fmap f (fmap g Nil)` = `fmap f Nil` = `Nil`, so
       `fmap (f . g) Nil` = `(fmap f . fmap g) Nil`
   - `Cons x t` case:
     - Preservation of identity:

       `fmap id (Cons x t)` = `Cons (id x) (fmap id t)`. Since `id x` = `x`, and by induction, `fmap id t` = `t`, so
       `Cons (id x) (fmap id t)` = `Cons x t`, so `fmap id (Cons x t)` = `Cons x t`
     - Preservation of composition:

       `fmap (f . g) (Cons x t)` = `Cons ((f . g) x) (fmap (f . g) t)`, and `(fmap f . fmap g) (Cons x t)` =
       `fmap f (fmap g (Cons x t))` = `fmap f (Cons (g x) (fmap g t))` = `Cons (f (g x)) (fmap f (fmap g t))` =
       `Cons ((f . g) x) ((fmap f . fmap g) t)`. By induction, `fmap (f . g) t` = `(fmap f . fmap g) t`, so
       `Cons ((f . g) x) (fmap (f . g) t)` = `Cons ((f . g) x) ((fmap f . fmap g) t)`, so
       `fmap (f . g) (Cons x t)` = `(fmap f . fmap g) (Cons x t)`.

### 8 Functoriality

1. > Show that the data type:
   >
   > ```haskell
   > data Pair a b = Pair a b
   > ```
   >
   > is a bifunctor. For additional credit implement all three methods of `Bifunctor` and use equational reasoning to
   > show that these definitions are compatible with the default implementations whenever they can be applied.

   Haskell implementations:

   ```haskell
   instance Bifunctor Pair where
       bimap f g (a, b) = (f a, g b)
       first f (a, b) = (f a, b)
       second g (a, b) = (a, g b)
   ```

   Proofs that my implementations are compatible with the default implementations:

   - Proof that `bimap f g (a, b)` = `(first f . second g) (a, b)`:

     - `bimap f g (a, b)` = `(f a, g b)`
     - `(first f . second g) (a, b)` = `first f (second g (a, b))` = `first f (a, g b)` = `(f a, g b)`
   - Proof that `first f (a, b)` = `bimap f id (a, b)`:

     - `first f (a, b)` = `(f a, b)`
     - `bimap f id (a, b)` = `(f a, id b)` = `(f a, b)`
   - Proof that `second g (a, b)` = `bimap id g (a, b)`:

     - `second g (a, b)` = `(a, g b)`
     - `bimap id g (a, b)` = `(id a, g b)` = `(a, g b)`

2. > Show the isomorphism between the standard definition of `Maybe` and this desugaring:
   >
   > ```haskell
   > type Maybe' a = Either (Const () a) (Identity a)
   > ```
   >
   > Hint: Define two mappings between the two implementations. For additional credit, show that they are the inverse of
   > each other using equational reasoning.

   ```haskell
   standardToDesugaring Nothing = Left (Const ())
   standardToDesugaring (Just a) = Right a

   desugaringToStandard Left (Const ()) = Nothing
   desugaringToStandard Right a = Just a
   ```

   Proofs that `standardToDesugaring` and `desugaringToStandard` are the inverse of each other.

   - Proof that `standardToDesugaring (desugaringToStandard a)` = `a`:

     - `standardToDesugaring (desugaringToStandard (Left (Const ())))` = `standardToDesugaring Nothing` = `Left (Const ())`
     - `standardToDesugaring (desugaringToStandard (Right a))` = `standardToDesugaring (Just a))` = `Right a`
   - Proof that `desugaringToStandard (standardToDesugaring a)` = `a`:

     - `desugaringToStandard (standardToDesugaring Nothing)` = `desugaringToStandard (Left (Const ()))` = `Nothing`
     - `desugaringToStandard (standardToDesugaring (Just a))` = `desugaringToStandard (Right a))` = `Just a`
3. > Letʼs try another data structure. I call it a `PreList` because itʼs a precursor to a `List`. It replaces recursion
   > with a type parameter `b`.
   >
   > ```haskell
   > data PreList a b = Nil | Cons a b
   > ```
   >
   > You could recover our earlier definition of a `List` by recursively applying `PreList` to itself (weʼll see how
   > itʼs done when we talk about fixed points).
   >
   > Show that `PreList` is an instance of `Bifunctor`.

   First, I will implement `bimap`:

   ```haskell
   bimap f g Nil = Nil
   bimap f g (Cons a b) = Cons (f a) (g b)
   ```

   Then, I will show that `(bimap f g . bimap m n) a` = `bimap (f . m) (g . n) a`:

   - Case `Nil`:

     - `(bimap f g . bimap m n) Nil` = `bimap f g (bimap m n Nil)` = `bimap f g Nil` = `Nil`
     - `bimap (f . m) (g . n) Nil` = `Nil`
   - Case `(Cons a b)`:

     - `(bimap f g . bimap m n) (Cons a b)` = `bimap f g (bimap m n (Cons a b))` = `bimap f g (Cons (m a) (n b))` = `Cons (f (m a)) (g (n b))`
     - `bimap (f . m) (g . n) (Cons a b)` = `Cons ((f . m) a) ((g . n) b)` = `Cons (f (m a)) (g (n b))`

   So in both cases, composition is preserved.

   Finally, I will show that `bimap id id a` = `a`:

   - Case `Nil`:

     - `bimap id id Nil` = `Nil`
   - Case `(Cons a b)`:

     - `bimap id id (Cons a b)` = `Cons (id a) (id b)` = `(Cons a b)`

   So in both cases, identity is preserved.

   So `PreList` is an instance of `Bifunctor`.
4. > Show that the following data types define bifunctors in `a` and `b`:
   >
   > ```haskell
   > data K2 c a b = K2 c
   > ```
   >
   > ```haskell
   > data Fst a b = Fst a
   > ```
   >
   > ```haskell
   > data Snd a b = Snd b
   > ```
   >
   > For additional credit, check your solutions against Conor McBrideʼs paper [Clowns to the Left of me, Jokers to the
   > Right](http://strictlypositive.org/CJ.pdf).

   For `K2`, define `bimap` as follows:

   ```haskell
   bimap f g = id
   ```

   So `bimap f g . bimap m n` = `id . id` = `id`, and `bimap (f . m) (g . n)` = `id`, so
   `bimap f g . bimap m n` = `bimap (f . m) (g . n)`. Also, `bimap id id` = `id`, so `K2 c` is a bifunctor.

   For `Fst`, define `bimap` as follows:

   ```haskell
   bimap f g (Fst a) = Fst (f a)
   ```

   So `(bimap f g . bimap m n) (Fst a)` = `bimap f g (bimap m n (Fst a))` = `bimap f g (Fst (m a))` = `Fst (f (m a))`,
   and `bimap (f . m) (g . n) (Fst a)` = `Fst ((f . m) a)` = `Fst (f (m a))`. So
   `(bimap f g . bimap m n) (Fst a)` = `bimap (f . m) (g . n) (Fst a)`. Also, `bimap id id (Fst a)` = `Fst (id a)` =
   `Fst a`, so `Fst` is a bifunctor. The same for `Snd`.
5. > Define a bifunctor in a language other than Haskell. Implement `bimap` for a generic pair in that language.

   See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_8_9_5.rs).
6. > Should `std::map` be considered a bifunctor or a profunctor in the two template arguments `Key` and `T`? How would
   > you redesign this data type to make it so?

   *Not sure.*

### 9 Function Types

### 10 Natural Transformations

1. > Define a natural transformation from the `Maybe` functor to the list functor. Prove the naturality condition for
   > it.

   ```haskell
   alpha Nothing = Nil
   alpha (Just a) = Cons a Nil
   ```

   We need to prove `(fmap f . alpha) x` = `(alpha . fmap f) x`:

   - `Nothing` case:
     - `(fmap f . alpha) Nothing`\
       = `fmap f (alpha Nothing)`\
       = `fmap f Nil`\
       = `Nil`
     - `(alpha . fmap f) Nothing`\
       = `alpha (fmap f Nothing)`\
       = `alpha Nothing`\
       = `Nil`
   - `Just a` case:
     - `(fmap f . alpha) (Just a)`\
       = `fmap f (alpha (Just a))`\
       = `fmap f (Cons a Nil)`\
       = `Cons (f a) Nil`
     - `(alpha . fmap f) (Just a)`\
       = `alpha (fmap f (Just a))`\
       = `alpha (Just (f a))`\
       = `Cons (f a) Nil`
2. > Define at least two different natural transformations between `Reader ()` and the list functor. How many different
   > lists of `()` are there?

   ```haskell
   alpha1 f = Cons (f ()) Nil
   ```

   ```haskell
   alpha2 f = Cons (f ()) (Cons (f ()) Nil)
   ```

   There are infinite countable number of lists of `()`.
3. > Continue the previous exercise with `Reader Bool` and `Maybe`.

   ```haskell
   alpha1 f = Nothing
   ```

   ```haskell
   alpha2 f = Just (f False)
   ```

   I can also define `alpha3 f = Just (f True)`.
4. > Show that horizontal composition of natural transformation satisfies the naturality condition (hint: use
   > components). Itʼs a good exercise in diagram chasing.

   We need to prove \\(\left(G' \circ F'\right) f \circ \left(β \circ α\right)_a = \left(β \circ α\right)_b \circ \left(G \circ F\right) f\\).

   Let \\(f : a → b\\), then\
   \\(\left(\left(G' \circ F'\right) f \circ \left(β \circ α\right)_a\right) \left(\left(G \circ F\right) a\right) = \left(\left(G' \circ F'\right) f\right) \left(\left(G' \circ F'\right) a\right) = \left(G' \circ F'\right) b\\),
   Also, \
   \\(\left(\left(β \circ α\right)_b \circ \left(G \circ F\right) f\right) \left(\left(G \circ F\right) a\right) = \left(β \circ α\right)_b \left(\left(G \circ F\right) b\right) = \left(G' \circ F'\right) b\\).

5. > Write a short essay about how you may enjoy writing down the evident diagrams needed to prove the interchange law.

   What?
6. > Create a few test cases for the opposite naturality condition of transformations between different `Op` functors.
   > Hereʼs one choice:
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

   ```haskell
   op2 :: Op () Int
   op2 = Op (\x -> ())

   g :: String -> Int
   g x = read x
   ```
