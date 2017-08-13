---
title: Essentials of Programming Languages Exercises
enable_mathjax: true
---

> **Exercise 1.1** Write inductive definitions of the following sets. Write each definition in all three styles
> (top-down, bottom-up, and rules of inference). Using your rules, show the derivation of some sample elements of each
> set.
>
> 1. \$$ \left\{3n + 2 \mid n \in N \right\} $$
> 2. \$$ \left\{2n + 3m + 1 \mid n, m \in N\right\} $$
> 3. \$$ \left\{\left(n, 2n + 1\right) \mid n \in N\right\} $$
> 4. $$ \left\{\left(n, n ^ 2\right) \mid n \in N\right\} $$ Do not mention squaring in your rules. As a hint, remember
>    the equation $$ \left(n + 1\right) ^ 2 = n ^ 2 + 2n + 1 $$.

1. \$$ \left\{3n + 2 \mid n \in N \right\} $$
   - Top-down:

     $$ n \in S $$ if

     - $$ n = 2 $$, or
     - \$$ n - 3 \in S $$
   - Bottom-up:

     $$ S $$ is the smallest set that satisfying the following two properties:

     - $$ 2 \in S $$, and
     - If $$ n \in S $$, then $$ n + 3 \in S $$
   - Rules of inference:
     - \$$ \dfrac{}{2 \in S} $$
     - \$$ \dfrac{n \in S}{\left(n + 3\right) \in S} $$
2. \$$ \left\{2n + 3m + 1 \mid n, m \in N\right\} $$
   - Top-down:

     $$ n \in S $$ if

     - $$ n = 1 $$, or
     - $$ n - 2 \in S $$, or
     - \$$ n - 3 \in S $$
   - Bottom-up:

     $$ S $$ is the smallest set that satisfying the following two properties:

     - $$ 1 \in S $$, and
     - If $$ n \in S $$, then $$ n + 2 \in S $$, and
     - If $$ n \in S $$, then $$ n + 3 \in S $$
   - Rules of inference:
     - \$$ \dfrac{}{1 \in S} $$
     - \$$ \dfrac{n \in S}{\left(n + 2\right) \in S} $$
     - \$$ \dfrac{n \in S}{\left(n + 3\right) \in S} $$
3.  \$$ \left\{\left(n, 2n + 1\right) \mid n \in N\right\} $$
    - Top-down:

      $$ \left(m, n\right) \in S $$ if

      - $$ m = 0 $$ and $$ n = 1 $$, or
      - \$$ \left(m - 1, n - 2\right) \in S $$
    - Bottom-up:

      $$ S $$ is the smallest set that satisfying the following two properties:

      - $$ \left(0, 1\right) \in S $$, and
      - If $$ \left(m, n\right) \in S $$, then $$ \left(m + 1, n + 2\right) \in S $$
    - Rules of inference:
      - \$$ \dfrac{}{\left(0, 1\right) \in S} $$
      - \$$ \dfrac{\left(m, n\right) \in S}{\left(m + 1, n + 2\right) \in S} $$
4. \$$ \left\{\left(n, n ^ 2\right) \mid n \in N\right\} $$

    - Top-down:

      $$ \left(m, n\right) \in S $$ if

      - $$ m = 0 $$ and $$ n = 0 $$, or
      - \$$ \left(m - 1, n - 2m + 1\right) \in S $$
    - Bottom-up:

      $$ S $$ is the smallest set that satisfying the following two properties:

      - $$ \left(0, 0\right) \in S $$, and
      - If $$ \left(m, n\right) \in S $$, then $$ \left(m + 1, n + 2m + 1\right) \in S $$
    - Rules of inference:
      - \$$ \dfrac{}{\left(0, 0\right) \in S} $$
      - \$$ \dfrac{\left(m, n\right) \in S}{\left(m + 1, n + 2m + 1\right) \in S} $$

> **Exercise 1.2** What sets are defined by the following pairs of rules? Explain why.
>
> 1. \$$ \left(0, 1\right) \in S \quad \dfrac{\left(n, k\right) \in S}{\left(n + 1, k + 7\right) \in S} $$
> 2. \$$ \left(0, 1\right) \in S \quad \dfrac{\left(n, k\right) \in S}{\left(n + 1, 2k\right) \in S} $$
> 3. \$$ \left(0, 0, 1\right) \in S \quad \dfrac{\left(n, i, j\right) \in S}{\left(n + 1, j, i + j\right) \in S} $$
> 4. \$$ \left(0, 1, 0\right) \in S \quad \dfrac{\left(n, i, j\right) \in S}{\left(n + 1, i + 2, i + j\right) \in S} $$

1. \$$ \left(0, 1\right) \in S \quad \dfrac{\left(n, k\right) \in S}{\left(n + 1, k + 7\right) \in S} $$

   \$$ \left\{\left(n, 7n + 1\right) \mid n \in N\right\} $$
2. \$$ \left(0, 1\right) \in S \quad \dfrac{\left(n, k\right) \in S}{\left(n + 1, 2k\right) \in S} $$

   \$$ \left\{\left(n, 2 ^ n}\right) \mid n \in N\right\} $$
3. \$$ \left(0, 0, 1\right) \in S \quad \dfrac{\left(n, i, j\right) \in S}{\left(n + 1, j, i + j\right) \in S} $$

   \$$ \left\{\left(n, f\left(n\right), f\left(n + 1\right)\right) \mid
       n \in N\right, f\left(0\right) = 0 and f\left(1\right) = 1\ and f\left(1\right) = 1\} $$
4. \$$ \left(0, 1, 0\right) \in S \quad \dfrac{\left(n, i, j\right) \in S}{\left(n + 1, i + 2, i + j\right) \in S} $$

   \$$ \left\{\left(n, 2n + 1, n ^ 2\right) \mid n \in N\right\} $$

> **Exercise 1.3** Find a set $$ T $$ of natural numbers such that $$ 0 \in T $$, and whenever $$ n \in T $$, then
> $$ n + 3 \in T $$, but $$ T \ne S $$, where $$ S $$ is the set defined in definition 1.1.2.

Let $$ T = N $$.
