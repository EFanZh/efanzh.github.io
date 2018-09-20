---
title: Category Theory for Programmers Challenges
---

# Part One

## 1. Category: The Essence of Composition

1. > Implement, as best as you can, the identity function in your favorite language (or the second favorite, if your
   > favorite language happens to be Haskell).

   See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_1_4_1.rs).
2. > Implement the composition function in your favorite language. It takes two functions as arguments and returns a
   > function that is their composition.

   See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_1_4_2.rs).
3. > Write a program that tries to test that your composition function respects identity.

   See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_1_4_3.rs).
4. > Is the world-wide web a category in any sense? Are links morphisms?

   *Not sure.*
5. > Is Facebook a category, with people as objects and friendships as morphisms?

   *Not sure.*
6. > When is a directed graph a category?

   When for every node, there is a edge from it to itself, and for every pair of edges a -> b and b -> c, there is an
   edge a -> c.

## 2. Types and Functions

1. > Define a higher-order function (or a function object) `memoize` in your favorite language. This function takes a
   > pure function `f` as an argument and returns a function that behaves almost exactly like `f`, except that it only
   > calls the original function once for every argument, stores the result internally, and subsequently returns this
   > stored result every time it’s called with the same argument. You can tell the memoized function from the original
   > by watching its performance. For instance, try to memoize a function that takes a long time to evaluate. You’ll
   > have to wait for the result the first time you call it, but on subsequent calls, with the same argument, you should
   > get the result immediately.

   See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_2_7_1.rs).
2. > Try to memoize a function from your standard library that you normally use to produce random numbers. Does it work?

   No, it does not work.

   See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_2_7_2.rs).
3. > Most random number generators can be initialized with a seed. Implement a function that takes a seed, calls the
   > random number generator with that seed, and returns the result. Memoize that function. Does it work?

   Yes it works.

   See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_2_7_3.rs).
4. > Which of these C++ functions are pure? Try to memoize them and observe what happens when you call them multiple
   > times: memoized and not.
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
   2. Not pure.
   3. Not pure.
   4. Not pure.
5. > How many different functions are there from `Bool` to `Bool`? Can you implement them all?

   There are 4 *pure* functions from `Bool` to `Bool`.

   See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_2_7_5.rs).
6. > Draw a picture of a category whose only objects are the types `Void`, `()` (unit), and `Bool`; with arrows
   > corresponding to all possible functions between these types. Label the arrows with the names of the functions.

   *Not sure.*

## 3. Categories Great and Small

1. > Generate a free category from:
   >
   > 1. A graph with one node and no edges
   > 2. A graph with one node and one (directed) edge (hint: this edge can be composed with itself)
   > 3. A graph with two nodes and a single arrow between them
   > 4. A graph with a single node and 26 arrows marked with the letters of the alphabet: a, b, c … z.

   1. Add an edge from the node to itself.
   2. Do nothing.
   3. Add an edge to each node from that node to itself.
   4. *Not sure.*
2. > What kind of order is this?
   >
   > 1. A set of sets with the inclusion relation: *A* is included in *B* if every element of *A* is also an element of
   >    *B*.
   > 2. C++ types with the following subtyping relation: `T1` is a subtype of `T2` if a pointer to `T1` can be passed to
   >    a function that expects a pointer to `T2` without triggering a compilation error.

   1. Partial order.
   2. Partial order.
3. > Considering that `Bool` is a set of two values `True` and `False`, show that it forms two (set-theoretical) monoids
   > with respect to, respectively, operator `&&` (AND) and `||` (OR).

   1. For `&&`:
      - Neutral value is `True`.
      - `a && True == True && a`.
      - `(a && b) && c  == a && (b && c)`.
   2. For `||`:
      - Neutral value is `False`.
      - `a || False == False || a`.
      - `(a || b) || c  == a || (b || c)`.
4. > Represent the `Bool` monoid with the AND operator as a category: List the morphisms and their rules of composition.

   Morphisms:
      - `\x -> x && False`
      - `\x -> x && True`

   Rules of composition:
      - `(\x -> x && False) . (\x -> x && False) == \x -> x && False`
      - `(\x -> x && False) . (\x -> x && True) == \x -> x && False`
      - `(\x -> x && True) . (\x -> x && False) == \x -> x && False`
      - `(\x -> x && True) . (\x -> x && True) == \x -> x && True`
5. > Represent addition modulo 3 as a monoid category.

   Morphisms:
      - `\x -> mod (x + 0) 3`
      - `\x -> mod (x + 1) 3`
      - `\x -> mod (x + 2) 3`
      - …

   Rules of composition:
      - `(\x -> mod (x + m) 3) . (\x -> mod (x + n) 3) == \x -> mod (x + (m + n)) 3`

## 4. Kleisli Categories

> A function that is not defined for all possible values of its argument is called a partial function. It’s not really a
> function in the mathematical sense, so it doesn’t fit the standard categorical mold. It can, however, be represented
> by a function that returns an embellished type `optional`:
>
> ```c++
> template<class A> class optional {
>     bool _isValid;
>     A _value;
> public:
>     optional() : _isValid(false) {}
>     optional(A v) : _isValid(true), _value(v) {}
>     bool isValid() const { return _isValid; }
>     A value() const { return _value; }
> };
> ```
>
> As an example, here’s the implementation of the embellished function `safe_root`:
>
> ```c++
> optional<double> safe_root(double x) {
>     if (x >= 0) return optional<double>{sqrt(x)};
>     else return optional<double>{};
> }
> ```
>
> Here’s the challenge:
>
> 1. Construct the Kleisli category for partial functions (define composition and identity).
> 2. Implement the embellished function `safe_reciprocal` that returns a valid reciprocal of its argument, if it’s
>    different from zero.
> 3. Compose `safe_root` and `safe_reciprocal` to implement `safe_root_reciprocal` that calculates `sqrt(1/x)` whenever
>    possible.

1. Composition:

   - `(A -> optional<B>) . (B -> optional<C>) => A -> optional<C>`.

   Identity:

   - The `optional` constructor, which has the type `A -> optional<A>`.
2. See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_4_4_2.rs).
3. See [here](https://github.com/EFanZh/CTfP-Challenges/blob/master/src/challenge_4_4_3.rs).

## 5. Products and Coproducts

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
   origin object is `int` or `bool`, so we can not determine wether to use `Left` or `Right` to construct `Either`.
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

## 6. Simple Algebraic Data Types

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
