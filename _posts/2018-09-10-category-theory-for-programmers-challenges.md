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
