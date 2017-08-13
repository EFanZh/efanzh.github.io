---
title: Essentials of Programming Languages Exercises
enable_mathjax: true
---

> **Exercise 1.1** Write inductive definitions of the following sets. Write each definition in all three styles
> (top-down, bottom-up, and rules of inference). Using your rules, show the derivation of some sample elements of each
> set.
> 1. \$$ \left\{3n + 2 \mid n \in N \right\} $$
> 2. \$$ \left\{2n + 3m + 1 \mid n, m \in N\right\} $$
> 3. \$$ \left\{\left(n, 2n + 1\right) \mid n \in N\right\} $$
> 4. $$ \left\{\left(n, n ^ 2\right) \mid n \in N\right\} $$ Do not mention squaring in your rules. As a hint, remember
>    the equation $$ \left(n + 1\right) ^ 2 = n ^ 2 + 2n + 1 $$.

1. \$$ \left\{3n + 2 \mid n \in N \right\} $$

   - Top-down:
       - $$ n \in S $$ if
           - $$ n = 2 $$, or
           - \$$ n - 3 \in S $$
   - Bottom-up:
       - $$ 2 \in S $$, and
       - If $$ n \in S $$, then $$ n + 3 \in S $$
   - Rules of inference:
       - \$$ \dfrac{}{2 \in S} $$
       - \$$ \dfrac{n \in S}{\left(n + 3\right) \in S} $$
2. \$$ \left\{2n + 3m + 1 \mid n, m \in N\right\} $$

   - Top-down:
       - $$ n \in S $$ if
           - $$ n = 1 $$, or
           - $$ n - 2 \in S $$, or
           - \$$ n - 3 \in S $$
   - Bottom-up:
       - $$ 1 \in S $$, and
       - If $$ n \in S $$, then
           - $$ n + 2 \in S $$, and
           - \$$ n + 3 \in S $$
   - Rules of inference:
       - \$$ \dfrac{}{1 \in S} $$
       - \$$ \dfrac{n \in S}{\left(n + 2\right) \in S} $$
       - \$$ \dfrac{n \in S}{\left(n + 3\right) \in S} $$
3.  \$$ \left\{\left(n, 2n + 1\right) \mid n \in N\right\} $$

    - Top-down:
        - $$ \left(m, n\right) \in S $$ if
             - $$ m = 0 $$ and $$ n = 1 $$, or
             - \$$ \left(m - 1, n - 2\right) \in S $$
    - Bottom-up:
        - $$ \left(0, 1\right) \in S $$, and
        - If $$ \left(m, n\right) \in S $$, then $$ \left(m + 1, n + 2\right) \in S $$
    - Rules of inference:
        - \$$ \dfrac{}{\left(0, 1\right) \in S} $$
        - \$$ \dfrac{\left(m, n\right) \in S}{\left(m + 1, n + 2\right) \in S} $$
4. \$$ \left\{\left(n, n ^ 2\right) \mid n \in N\right\} $$
    - Top-down:
        - $$ \left(m, n\right) \in S $$ if
             - $$ m = 0 $$ and $$ n = 0 $$, or
             - \$$ \left(m - 1, n - 2m + 1\right) \in S $$
    - Bottom-up:
        - $$ \left(0, 0\right) \in S $$, and
        - If $$ \left(m, n\right) \in S $$, then $$ \left(m + 1, n + 2m + 1\right) \in S $$
    - Rules of inference:
        - \$$ \dfrac{}{\left(0, 0\right) \in S} $$
        - \$$ \dfrac{\left(m, n\right) \in S}{\left(m + 1, n + 2m + 1\right) \in S} $$
