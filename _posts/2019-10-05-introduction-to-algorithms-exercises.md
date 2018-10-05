---
title: Introduction to Algorithms Exercises
enable_mathjax: true
---

# Introduction to Algorithms Exercises

## I Foundations

### 1 The Role of Algorithms in Computing

#### 1.1 Algorithms

> ***1.1-1***
>
> Give a real-world example that requires sorting or a real-world example that requires computing a convex hull.

*Skipped.*

> ***1.1-2***
>
> Other than speed, what other measures of efficiency might one use in a real-world setting?

Memory consumption.

> ***1.1-3***
>
> Select a data structure that you have seen previously, and discuss its strengths and limitations.

[Linked lists](https://en.wikipedia.org/wiki/Linked_list), where insertion and deletion take constant time, but locating
an element by index takes linear time.

> ***1.1-4***
>
> How are the shortest-path and traveling-salesman problems given above similar? How are they different?

They both need to minimize the total distance for travelling. But shortest-path is to find the shortest path between
only two locations, while traveling-salesman is to find the shortest path containing all given locations.

> ***1.1-5***
>
> Come up with a real-world problem in which only the best solution will do. Then come up with one in which a solution
> that is “approximately” the best is good enough.

*Skipped.*

#### 1.2 Algorithms as a technology

> ***1.2-1***
>
> Give an example of an application that requires algorithmic content at the application level, and discuss the function
> of the algorithms involved.

The [Minesweeper](https://en.wikipedia.org/wiki/Minesweeper_(video_game)) game. You have to figure out if there is a
mime under a button base on the numbers that you recovered. That is an algorithm.

> ***1.2-2***
>
> Suppose we are comparing implementations of insertion sort and merge sort on the same machine. For inputs of size
> $$n$$, insertion sort runs in $$8 n^2$$ steps, while merge sort runs in $$64 n \lg n$$ steps. For which values of
> $$n$$ does insertion sort beat merge sort?

We can solve $$8 n^2 < 64 n \lg n$$ for $$n$$. Assume $$n ≥ 0$$, we get $$n < 8 \lg n$$. With the help of
[Wolfram Alpha](https://www.wolframalpha.com/input/?i=Reduce%5Bn+%3C+8+Log%5B2,+n%5D,+n%5D), we know that
$$1.1 < n < 43.5593$$. So for $$n ∈ \left[2, 43\right]$$, insertion sort beats merge sort.

> ***1.2-3***
>
> What is the smallest value of $$n$$ such that an algorithm whose running time is $$100 n^2$$ runs faster than an
> algorithm whose running time is $$2^n$$ on the same machine?

Solve $$100 n^2 < 2^n$$ for $$n$$
(using [Wolfram Alpha](https://www.wolframalpha.com/input/?i=Reduce%5B100+n+%5E+2+%3C+2+%5E+n,+n%5D)), we get
$$-0.096704 < n < 0.103658$$ or $$n > 14.3247$$, so the smallest value of $$n$$ is $$0$$.

Question: Should I only consider positive integer values for $$n$$?
