---
enable_mathjax: true
---

# Introduction to Algorithms Exercises

I will put the actual implementation of exercises [here](https://github.com/EFanZh/Introduction-to-Algorithms).

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
> Suppose we are comparing implementations of insertion sort and merge sort on the same machine. For inputs of size $n$,
> insertion sort runs in $8 n^2$ steps, while merge sort runs in $64 n \lg n$ steps. For which values of $n$ does
> insertion sort beat merge sort?

We can solve $8 n^2 < 64 n \lg n$ for $n$. Assume $n ≥ 0$, we get $n < 8 \lg n$. With the help of
[Wolfram Alpha](https://www.wolframalpha.com/input/?i=Reduce%5Bn+%3C+8+Log%5B2,+n%5D,+n%5D), we know that
$1.1 < n < 43.5593$. So for $n ∈ \left[2, 43\right]$, insertion sort beats merge sort.

> ***1.2-3***
>
> What is the smallest value of $n$ such that an algorithm whose running time is $100 n^2$ runs faster than an algorithm
> whose running time is $2^n$ on the same machine?

Solve $100 n^2 < 2^n$ for $n$
(using [Wolfram Alpha](https://www.wolframalpha.com/input/?i=Reduce%5B100+n+%5E+2+%3C+2+%5E+n,+n%5D)), we get
$-0.096704 < n < 0.103658$ or $n > 14.3247$, so the smallest value of $n$ is $0$.

Question: Should I only consider positive integer values for $n$?

#### 1.X Problems

> ***1-1 Comparison of running times***
>
> For each function $f\left(n\right)$ and time $t$ in the following table, determine the largest size $n$ of a problem
> that can be solved in time $t$, assuming that the algorithm to solve the problem takes $f\left(n\right)$ microseconds.
>
> |            | 1 second | 1 minute | 1 hour | 1 day | 1 month | 1 year | 1 century |
> | ---------- | -------- | -------- | ------ | ----- | ------- | ------ | --------- |
> | $\lg n$    |          |          |        |       |         |        |           |
> | $\sqrt{n}$ |          |          |        |       |         |        |           |
> | $n$        |          |          |        |       |         |        |           |
> | $n \lg n$  |          |          |        |       |         |        |           |
> | $n^2$      |          |          |        |       |         |        |           |
> | $n^3$      |          |          |        |       |         |        |           |
> | $2^n$      |          |          |        |       |         |        |           |
> | $n!$       |          |          |        |       |         |        |           |

- 1 second = 10⁶ microseconds
- 1 minute = 6 × 10⁷  microseconds
- 1 hour = 3.6 × 10⁹ microseconds
- 1 day = 8.64 × 10¹⁰ microseconds
- 1 month = 2.628 × 10¹² microseconds
- 1 year = 3.154 × 10¹³  microseconds
- 1 century = 3.156 × 10¹⁵ microseconds

|            | 1 second           | 1 minute             | 1 hour                 | 1 day                  | 1 month                  | 1 year                   | 1 century                |
| ---------- | ------------------ | -------------------- | ---------------------- | ---------------------- | ------------------------ | ------------------------ | ------------------------ |
| $\lg n$    | $10^{301029.9957}$ | $10^{18061799.7398}$ | $10^{1083707984.3903}$ | $10^{26008991625.368}$ | $10^{791106828604.9426}$ | $10^{9494486063241.967}$ | $10^{950050666315524.8}$ |
| $\sqrt{n}$ | $10^{12}$          | $10^{15.5563}$       | $10^{19.1126}$         | $10^{21.873}$          | $10^{24.8393}$           | $10^{26.9977}$           | $10^{30.9983}$           |
| $n$        | $10^{6}$           | $10^{7.7782}$        | $10^{9.5563}$          | $10^{10.9365}$         | $10^{12.4196}$           | $10^{13.4989}$           | $10^{15.4991}$           |
| $n \lg n$  | $10^{4.7976}$      | $10^{6.4474}$        | $10^{8.1251}$          | $10^{9.4401}$          | $10^{10.8623}$           | $10^{11.9019}$           | $10^{13.8367}$           |
| $n^2$      | $10^{3}$           | $10^{3.8891}$        | $10^{4.7782}$          | $10^{5.4683}$          | $10^{6.2098}$            | $10^{6.7494}$            | $10^{7.7496}$            |
| $n^3$      | $10^{2}$           | $10^{2.5927}$        | $10^{3.1854}$          | $10^{3.6455}$          | $10^{4.1399}$            | $10^{4.4996}$            | $10^{5.1664}$            |
| $2^n$      | $10^{1.2995}$      | $10^{1.4123}$        | $10^{1.5017}$          | $10^{1.5603}$          | $10^{1.6155}$            | $10^{1.6517}$            | $10^{1.7117}$            |
| $n!$       | $10^{0.9636}$      | $10^{1.0432}$        | $10^{1.0984}$          | $10^{1.1458}$          | $10^{1.178}$             | $10^{1.205}$             | $10^{1.2421}$            |

The table is generated using following JavaScript code:

```js
function generateTable() {
    function binarySearch(f, target) {
        const start = 0.000001;
        const epsilon = 0.0000000001;
        let left = start;
        let right = start;

        while (f(right) < target) {
            right *= 2;
        }

        while (right - left > epsilon) {
            const middle = left + (right - left) / 2;
            const value = f(middle);

            if (value < target) {
                left = middle;
            } else if (value > target) {
                right = middle;
            } else {
                return middle;
            }
        }

        return left + (right - left) / 2;
    }

    function normalize(x) {
        return Math.round(x * 10000) / 10000;
    }

    const algorithms = [
        {
            label: "$\\lg n$",
            func: (t) => Math.log10(2) * t
        },
        {
            label: "$\\sqrt{n}$",
            func: (t) => Math.log10(t) * 2
        },
        {
            label: "$n$",
            func: (t) => Math.log10(t)
        },
        {
            label: "$n \\lg n$",
            func: (t) => binarySearch(n => n * Math.pow(10, n) * Math.log2(10), t)
        },
        {
            label: "$n^2$",
            func: (t) => Math.log10(t) / 2
        },
        {
            label: "$n^3$",
            func: (t) => Math.log10(t) / 3
        },
        {
            label: "$2^n$",
            func: (t) => Math.log10(Math.log2(t))
        },
        {
            label: "$n!$",
            func: function (t) {
                // TODO: use the Γ function (use Stirling's approximation?).
                function fact(n) {
                    let result = 1;
                    let i = 2;

                    for (; i <= n; i++) {
                        result *= i;
                    }

                    if (i > n) {
                        result += result * (i - 1) * (n + 1 - i);
                    }

                    return result;
                }

                return binarySearch((x) => fact(Math.pow(10, x)), t);
            }
        }
    ];

    const times = [
        {
            label: "1 second",
            microseconds: 1e6
        },
        {
            label: "1 minute",
            microseconds: 6e7
        },
        {
            label: "1 hour",
            microseconds: 3.6e9
        },
        {
            label: "1 day",
            microseconds: 8.64e10
        },
        {
            label: "1 month",
            microseconds: 2.628e12
        },
        {
            label: "1 year",
            microseconds: 3.154e13
        },
        {
            label: "1 century",
            microseconds: 3.156e15
        }
    ];

    let result = `| | ${times.map((x) => x.label).join(" | ")} |\n` +
        `| -- | ${times.map((x) => "--").join(" | ")} |\n`;

    for (const algorithm of algorithms) {
        result += `| ${algorithm.label} |`;

        for (const time of times) {
            result += ` $10^{${normalize(algorithm.func(time.microseconds))}}$ |`;
        }

        result += "\n";
    }

    return result;
}
```

### 2 Getting Started

#### 2.1 Insertion sort

> ***2.1-1***
>
> Using Figure 2.2 as a model, illustrate the operation of *Insertion-Sort* on the array *A* = ⟨31, 41, 59, 26, 41, 58⟩.

*Skipped.*

> ***2.1-2***
>
> Rewrite the *Insertion-Sort* procedure to sort into nonincreasing instead of nondecreasing order.

Just change *A*[*i*] > *key* to *A*[*i*] < *key* in the original code.

> ***2.1-3***
>
> Consider the ***searching problem***:
>
> **Input**: A sequence of $n$ numbers $A = ⟨a_1, a_2, …, a_n⟩$ and a value $v$.
>
> **Output**: An index $i$ such that $v = A[i]$ or the special value *nil* if $v$ does not appear in $A$.
>
> Write pseudocode for ***linear search***, which scans through the sequence, looking for $v$. Using a loop invariant,
> prove that your algorithm is correct. Make sure that your loop invariant fulfills the three necessary properties.

*Linear-Search*(*A*, *v*)

1. **for** *i* = 1 **to** *A*.*length*
2. &nbsp;&nbsp;&nbsp;&nbsp;**if** *A*[*i*] == *v*
3. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**return** *i*
4. **return** *nil*

Loop invariant: *A*[1‥*i* - 1] does not contain value *v*. The only way the loop continues is that *A*[*i*] ≠ *v*, so
we know *A*[1‥*i*] does not contain value *v*. Then we increase *i* by 1, so again, *A*[1‥*i* - 1] still does not
contain value *v*. If the loop is completed, *i* must be equal to *A*.*length* + 1, so the whole array does not contain
value *v*, then we return *nil*.

If for some *i*, *A*[*i*] == *v*, we will find it in line 2 and return *i* in line 3. The only way to escape the loop is
either for some *i*, *A*[*i*] == *v*, or none of the elements equals to *v*. we can guarantee that if there is an
element in *A*, we will find it.

> ***2.1-4***
>
> Consider the problem of adding two *n*-bit binary integers, stored in two *n*-element arrays *A* and *B*. The sum of
> the two integers should be stored in binary form in an (*n* + 1)-element array *C*. State the problem formally and
> write pseudocode for adding the two integers.

Problem: Array *A* and *B* only contain elements of 0 and 1, and *A*.*length* == *B*.*length* == *n*. Array *C* that
have length *n* + 1. Rewrite the elements in *C* so that *C* only contains 0s and 1s, and
$\sum_{i=1}^n A[i] × 2^{n - i} + \sum_{i=1}^n B[i] × 2^{n - i} = \sum_{i=1}^{n + 1} C[i] × 2^{n + 1 - i}$.

Pseudocode:

*Add-Binary*(*A*, *B*, *C*)

1. *carry* = 0
2. **for** *i* = 1 **to** *A*.*length*
3. &nbsp;&nbsp;&nbsp;&nbsp;*sum* = *A*[*n* - *i*] + *B*[*n* - *i*] + *carry*
4. &nbsp;&nbsp;&nbsp;&nbsp;*C*[*n* + 1 - *i*] = *sum* mod 2
5. &nbsp;&nbsp;&nbsp;&nbsp;*carry* = *sum* / 2
6. *C*[0] = *carry*

#### 2.2 Analyzing algorithms

> ***2.2-1***
>
> Express the function $n^3/1000 - 100 n^2 - 100 n + 3$ in terms of Θ-notation.

$Θ\left(n^3\right)$.

> ***2.2-2***
>
> Consider sorting *n* numbers stored in array *A* by first finding the smallest element of *A* and exchanging it with
> the element in *A*[1]. Then find the second smallest element of *A*, and exchange it with *A*[2]. Continue in this
> manner for the first *n* - 1 elements of *A*. Write pseudocode for this algorithm, which is known as ***selection
> sort***. What loop invariant does this algorithm maintain? Why does it need to run for only the first *n* - 1
> elements, rather than for all *n* elements? Give the best-case and worst-case running times of selection sort in
> Θ-notation.

The loop invariant: at the start of each iteration of loop, The first *i* elements contains the smallest *i* elements in
*A*, and they are in nondecreasing order.

It only need to run for first *n* - 1 elements because after the loop, we have rearrange the smallest *n* - 1 elements,
to the front of *A*, so the last element must be the biggest one, so the whole array is ordered.

Best-case and worst-case running times are both $Θ\left(n^2\right)$.

> ***2.2-3***
>
> Consider linear search again (see Exercise 2.1-3). How many elements of the input sequence need to be checked on the
> average, assuming that the element being searched for is equally likely to be any element in the array? How about in
> the worst case? What are the average-case and worst-case running times of linear search in Θ-notation? Justify your
> answers.

Assume the element to be searched is in the array, then the average elements to be checked is (*n* + 1) / 2.

Best case running time is Θ(1), worst case running time is Θ(*n*). If we are lucky, we can find the element at the first
position, where only one element need to be checked. If we are unlucky, we can find the element at the last position,
where all elements will be checked.

> ***2.2-4***
>
> How can we modify almost any algorithm to have a good best-case running time?

*What? We can do that?*

*Skipped.*

#### 2.3 Designing algorithms

> ***2.3-1***
>
> Using Figure 2.4 as a model, illustrate the operation of merge sort on the array *A* = ⟨3, 41, 52, 26, 38, 57, 9, 49⟩.

*Skipped.*

> ***2.3-2***
>
> Rewrite the *Merge* procedure so that it does not use sentinels, instead stopping once either array *L* or *R* has had
> all its elements copied back to *A* and then copying the remainder of the other array back into *A*.

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_2_3_designing_algorithms/exercises.rs)
for implementation.

> ***2.3-3***
>
> Use mathematical induction to show that when $n$ is an exact power of 2, the solution of the recurrence
>
> $T\left(n\right) = \begin{cases}
> 2                         &\text{if } n = 2 \\\\
> 2 T\left(n / 2\right) + n &\text{if } n = 2^k, \text{ for } k > 1
> \end{cases}$
>
> is $T\left(n\right) = n \lg n$.

- Base case: If $n = 2$, $T\left(n\right) = 2$. Since $n \lg n = 2 \lg 2 = 2$, $T\left(n\right) = n \lg n$, so the claim
  holds.
- Inductive case: If $n > 2$, $T\left(n\right) = 2 T\left(n / 2\right) + n$, by induction, we know that
  $T\left(n / 2\right) = \left(n / 2\right) \lg \left(n / 2\right)$, so
  $T\left(n\right) = 2 \left(n / 2\right) \lg \left(n / 2\right) + n = n \lg \left(n / 2\right) + n = n \left(\lg n - 1\right) + n = n \lg n$,
  The claim holds.

> ***2.3-4***
>
> We can express insertion sort as a recursive procedure as follows. In order to sort *A*[1‥*n*], we recursively sort
> *A*[1‥*n* - 1] and then insert *A*[*n*] into the sorted array *A*[1‥*n* - 1]. Write a recurrence for the running
> time of this recursive version of insertion sort.

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_2_3_designing_algorithms/exercises.rs)
for implementation.

$$T\left(n\right) = \begin{cases}
    1 &\text{if $n < 2$} \\\\
    T(n - 1) + Θ\left(n\right) &\text{if $n >= 2$}
\end{cases}$$

> ***2.3-5***
>
> Referring back to the searching problem (see Exercise 2.1-3), observe that if the sequence *A* is sorted, we can check
> the midpoint of the sequence against *v* and eliminate half of the sequence from further consideration. The ***binary
> search*** algorithm repeats this procedure, halving the size of the remaining portion of the sequence each time. Write
> pseudocode, either iterative or recursive, for binary search. Argue that the worst-case running time of binary search
> is Θ(lg *n*).

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_2_3_designing_algorithms/exercises.rs)
for implementations.

*Binary-Search*(*A*, *v*)

1. *left* = 1
2. *right* = *A*.*length* + 1
3. **while** *left* < *right*
4. &nbsp;&nbsp;&nbsp;&nbsp;*middle* = ⌊(*left* + *right*) / 2⌋
5. &nbsp;&nbsp;&nbsp;&nbsp;**if** *A*[*middle*] < *v*
6. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*left* = *middle* + 1
7. &nbsp;&nbsp;&nbsp;&nbsp;**else**
8. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*right* = *middle*
9. **if** *left* ≤ *A*.*length* and *A*[*left*] == *v*
10. &nbsp;&nbsp;&nbsp;&nbsp;**return** *left*
11. **else**
12. &nbsp;&nbsp;&nbsp;&nbsp;**return** *nil*

After each iteration, the length of the searching range reduces by half, until the range is empty. So we have:

*T*(*n*) = *c*₁, if *n* = 0;\
*T*(*n*) = *T*(*n* / 2) + *c*₂, if *n* > 0.

We prove *T*(*n*) = Θ(lg *n*) by induction:

- If *n* = 0, Θ(lg *n*) = Θ(lg 0) = Θ(-∞), … Not sure how to go from here.
- If *n* > 0, Θ(lg *n*) = *T*(*n* / 2) + *c*₂ = Θ(*T*(*n* / 2)). By induction, we know *T*(*n* / 2) = Θ(lg (*n* / 2)),
  so Θ(lg *n*) = Θ(lg (*n* / 2)) = Θ((lg *n*)  - 1) = Θ(lg *n*).

> ***2.3-6***
>
> Observe that the **while** loop of lines 5–7 of the *Insertion-Sort* procedure in Section 2.1 uses a linear search to
> scan (backward) through the sorted subarray *A*[1‥*j* - 1]. Can we use a binary search (see Exercise 2.3-5) instead
> to improve the overall worst-case running time of insertion sort to Θ(*n* lg *n*)?

No, we can not. Because despite the searching takes Θ(lg *n*) time, we still need to move *n* elements in the worst-case
scenario, which taks Θ(*n*) time.

> ***2.3-7*** ★
>
> Describe a Θ(*n* lg *n*)-time algorithm that, given a set *S* of *n* integers and another integer *x*, determines
> whether or not there exist two elements in *S* whose sum is exactly *x*.

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_2_3_designing_algorithms/exercises.rs)
for implementations.

#### 2.X Problems

> ***2-1 Insertion sort on small arrays in merge sort***
>
> Although merge sort runs in $Θ\left(n \lg n\right)$ worst-case time and insertion sort runs in $Θ\left(n^2\right)$
> worst-case time, the constant factors in insertion sort can make it faster in practice for small problem sizes on many
> machines. Thus, it makes sense to ***coarsen*** the leaves of the recursion by using insertion sort within merge sort
> when subproblems become sufficiently small. Consider a modification to merge sort in which $n / k$ sublists of length
> $k$ are sorted using insertion sort and then merged using the standard merging mechanism, where $k$ is a value to be
> determined.
>
> 1. Show that insertion sort can sort the $n / k$ sublists, each of length $k$, in $Θ\left(n k\right)$ worst-case
>    time.
> 2. Show how to merge the sublists in $Θ\left(n \lg \left(n / k\right)\right)$ worst-case time.
> 3. Given that the modified algorithm runs in $Θ\left(n k + n \lg \left(n / k\right)\right)$ worst-case time, what is
>    the largest value of $k$ as a function of $n$ for which the modified algorithm has the same running time as
>    standard merge sort, in terms of $Θ$-notation?
> 4. How should we choose $k$ in practice?

1. Sort a sublist of length $k$ takes $k^2$ time, so sorting $n / k$ sublists takes
   $\left(n / k\right) Θ\left(k^2\right) = Θ\left(\left(n / k\right) k^2\right) = Θ\left(n k\right)$ time.
2. Assume merging $n$ sublists takes $T(n)$ time, we have $T\left(n\right) = 2 T\left(n\right) + c_1 n$, if $n > 1$.
   Also, $T\left(n\right) = c_2$, if $n = 1$. Notice this is the same as equation 2.1 and 2.2. So we have
   $T\left(n\right) = Θ\left(n \lg n\right)$. So merging $n / k$ sublists takes
   $T\left(n / k\right) = Θ\left(\left(n / k\right) \lg \left(n / k\right)\right) = Θ\left(n \lg \left(n / k\right)\right)$.
3. We need to solve the equation $n k + n \lg \left(n / k\right) < c n \lg \left(n\right)$. We can get
   $k - \lg k < \left(c-1\right) \lg n$ from it. I think $k < Θ\left(\lg n\right)$, but I can’t prove it.
4. With benchmarks and profiling.

> ***2-2 Correctness of bubblesort***
>
> Bubblesort is a popular, but inefficient, sorting algorithm. It works by repeatedly swapping adjacent elements that
> are out of order.
>
> *Bubblesort*(*A*)
>
> 1. **for** *i* = 1 **to** *A*.*length* - 1
> 2. &nbsp;&nbsp;&nbsp;&nbsp;**for** *j* = *A*.*length* **downto** *i* + 1
> 3. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**if** *A*[*j*] < *A*[*j* - 1]
> 4. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exchange *A*[*j*] with *A*[*j* - 1]
>
> 1) Let *A*′ denote the output of *Bubblesort*(*A*). To prove that *Bubblesort* is correct, we need to prove that it
>    terminates and that
>
>    *A*′[1] ≤ *A*′[2] ≤ … ≤ *A*′[*n*], (2.3)
>
>    where *n* = *A*.*length*. In order to show that *Bubblesort* actually sorts, what else do we need to prove?
>
>    The next two parts will prove inequality (2.3).
> 2) State precisely a loop invariant for the **for** loop in lines 2–4, and prove that this loop invariant holds. Your
>    proof should use the structure of the loop invariant proof presented in this chapter.
> 3) Using the termination condition of the loop invariant proved in part (b), state a loop invariant for the **for**
>    loop in lines 1–4 that will allow you to prove inequality (2.3). Your proof should use the structure of the loop
>    invariant proof presented in this chapter.
> 4) What is the worst-case running time of bubblesort? How does it compare to the running time of insertion sort?

1. We also need to prove that the elements in *A* is the same as in *A*′.
2. The loop invariant: At the start of each iteration, *A*[*j*] is the smallest element in *A*[*j*‥*A*.*length*].

   Proof:

   - **Initialization:** Before the first iteration, *j* = *A*.*length*, So *A*[*j*] is the only element in
     *A*[*j*‥*A*.*length*], the claim holds.
   - **Maintenance:**
     - If *A*[*j*] < *A*[*j* - 1], because we know that *A*[*j*] is the smallest element in
       *A*[*j*‥*A*.*length*], we can be sure *A*[*j*] is the smallest element in *A*[*j* - 1‥*A*.*length*], after
       swapping *A*[*j*] and *A*[*j* - 1], *A*[*j* - 1] became the smallest element in *A*[*j* - 1‥*A*.*length*]. After
       decreasing *j*, the loop invariant holds.
     - If *A*[*j*] ≥ *A*[*j* - 1], we know that *A*[*j* - 1] is the smallest element in *A*[*j* - 1‥*A*.*length*]. After
       decreasing *j*, the loop invariant holds.
   - **Termination:** After termination, *j* = *i*, so we know that *A*[*i*] is the smallest element in
     *A*[*i*‥*A*.*length*].
3. The loop invariant: At the start of the loop, *A*[1‥*i* - 1] is empty or contains the smallest *i* elements and are
   sorted.

   Proof:

   - **Initialization:** Before the first iteration, *i* = 1, So *A*[1‥*i* - 1] is empty, the claim holds.
   - **Maintenance:** After the inner loop, we know that *A*[*i*] is the smallest element in *A*[*i*‥*A*.*length*].
     - If *A*[1‥*i* - 1] is empty, *i* = 1, then *A*[1‥*i*] contains only one element and it is the smallest one in
       *A*[*i*‥*A*.*length*], so *A*[1‥*i*] is sorted and contains the smallest *i* element in *A*[1‥*A*.*length*].
       After increasing *i*, the loop invariant holds.
     - If *A*[1‥*i* - 1] is not empty, then *A*[1‥*i* - 1] contains the smallest *i* - 1 element in *A*[1‥*A*.*length*]
       in sorted order, so *A*[*i* - 1] ≤ *A*[*i*]. Because *A*[*i*] is the smallest element in *A*[*i*‥*A*.*length*],
       we know that *A*[1‥*i*] is sorted and contains the smallest *i* element in *A*[1‥*A*.*length*]. After increasing
       *i*, the loop invariant holds.
   - **Termination:** After termination, *i* = *A*.*length*, and *A*[1‥*A*.*length* - 1] contains the smallest
     *A*.*length* - 1 elements in sorted order, so we know *A*[*A*.*length* - 1] ≤ *A*[*A*.*length*], so the whole
     array is sorted.
4. Worst-case running time is $Θ\left(n^2\right)$, it is the same as insertion sort. But insertion sort have a
   best-case running time which is $Θ\left(n\right)$, while the best-case running time of bubble sort is still
   $Θ\left(n^2\right)$.

> ***2-3 Correctness of Horner’s rule***
>
> The following code fragment implements Horner’s rule for evaluating a polynomial
>
> $\begin{aligned}
> P\left(x\right) &= \sum_{k=0}^n a_k x^k \\\\
> &=a_0 + x\left(a_1 + x\left(a_2 + … + x\left(a_{n - 1} + x a_n\right) …\right)\right),
> \end{aligned}$
>
> given the coefficients $a_0$, $a_1$, …, $a_n$ and a value for $x$:
>
> 1. *y* = 0
> 2. **for** *i* = *n* **downto** 0
> 3. &nbsp;&nbsp;&nbsp;&nbsp;*y* = $a_i$ + *x* ⋅ *y*
>
> 1) In terms of Θ-notation, what is the running time of this code fragment for Horner’s rule?
> 2) Write pseudocode to implement the naive polynomial-evaluation algorithm that computes each term of the polynomial
>    from scratch. What is the running time of this algorithm? How does it compare to Horner’s rule?
> 3) Consider the following loop invariant:
>
>    At the start of each iteration of the **for** loop of lines 2–3,
>
>    $y = \displaystyle\sum_{k = 0}^{n - \left(i + 1\right)} a_{k + i + 1} x^k$.
>
>    Interpret a summation with no terms as equaling 0. Following the structure of the loop invariant proof presented in
>    this chapter, use this loop invariant to show that, at termination, $y = \sum_{k = 0}^n a_k x^k$.
> 4) Conclude by arguing that the given code fragment correctly evaluates a polynomial characterized by the coefficients
>    $a_0$, $a_1$, …, $a_n$.

Codes are implemeted
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_2_3_designing_algorithms/problems.rs).

1. Θ(*n*).
2. The psudocode:

   1. *y* = 0
   2. **for** *i* = 0 **to** *n*
   3. &nbsp;&nbsp;&nbsp;&nbsp;*p* = $a_i$
   4. &nbsp;&nbsp;&nbsp;&nbsp;**for** *j* = 0 **to** *i*
   5. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*p* = *p* ⋅ *x*
   6. &nbsp;&nbsp;&nbsp;&nbsp;*y* = *y* + *p*

   The running time of this algorithm is $Θ\left(n^2\right)$. It takes more time than Horner’s rule.
3. Proof:

   - **Initialization:** Before the first iteration, *i* = *n*,
     $y = \sum_{k = 0}^{n - \left(i + 1\right)} a_{k + i + 1} x^k
     = \sum_{k = 0}^{-1} a_{k + n + 1} x^k
     = 0$, so the claim holds.
   - **Maintenance:** After line 3, $y' = a_i + x ⋅ y
     = a_i + x \left(\sum_{k = 0}^{n - \left(i + 1\right)} a_{k + i + 1} x^k\right)
     = a_i ⋅ x^0 + \sum_{k = 0}^{n - \left(i + 1\right)} a_{k + i + 1} x^{k + 1}
     = a_i ⋅ x^0 + \sum_{k = 1}^{n - i} a_{k + i} x^k
     = \sum_{k = 0}^{n - i} a_{k + i} x^k$. After decreasing *i*, the claim holds.
   - **Termination:** At termination, *i* = -1, so
     $y = \sum_{k = 0}^{n - \left(\left(-1\right) + 1\right)} a_{k + \left(-1\right) + 1} x^k
     = \sum_{k = 0}^n a_k x^k$.
4. I thought I have proved it at step 3.

> ***2-4 Inversions***
>
> Let *A*[1‥*n*] be an array of *n* distinct numbers. If *i* < *j* and *A*[*i*] > *A*[*j*], then the pair (*i*, *j*) is
> called an ***inversion*** of *A*.
>
> 1. List the five inversions of the array ⟨2, 3, 8, 6, 1⟩.
> 2. What array with elements from the set {1, 2, …, *n*} has the most inversions? How many does it have?
> 3. What is the relationship between the running time of insertion sort and the number of inversions in the input
>    array? Justify your answer.
> 4. Give an algorithm that determines the number of inversions in any permutation on *n* elements in Θ(*n* lg *n*)
>    worst-case time. (*Hint:* Modify merge sort.)

1. The five inversions are (1, 5), (2, 5), (3, 4), (3, 5) and (4, 5).
2. The array ⟨*n*, …, 2, 1⟩ has the most inversions. It has *n* × (*n* - 1) / 2 inversions.
3. Let *k* be the inversion of an array, the the running time of insertion sort on it is Θ(*k*).

   Let $k_i$ be the numbers of inversions whose second element is $i$. The total sorting time is
   $\sum_{i = 1}^n\left(c_1 k_i + c_2\right) = c_1 k + c_2 n = Θ\left(k\right)$.
4. See
   [here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_2_3_designing_algorithms/problems.rs).

### 3 Growth of Functions

#### 3.1 Asymptotic notation

| Notation                 | Definition                                                                                       |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| *f*(*n*) = *O*(*g*(*n*)) | ∃ *c* > 0, $n_0$ > 0: ∀ *n* ≥ $n_0$: 0 ≤ *f*(*n*) ≤ *c* *g*(*n*)                                 |
| *f*(*n*) = Ω(*g*(*n*))   | ∃ *c* > 0, $n_0$ > 0: ∀ *n* ≥ $n_0$: 0 ≤ *c* *g*(*n*) ≤ *f*(*n*)                                 |
| *f*(*n*) = Θ(*g*(*n*))   | ∃ $c_1$ > 0, $c_2$ > 0, $n_0$ > 0: ∀ *n* ≥ $n_0$: 0 ≤ $c_1$ *g*(*n*) ≤ *f*(*n*) ≤ $c_2$ *g*(*n*) |
| *f*(*n*) = *o*(*g*(*n*)) | ∀ *c* > 0: ∃ $n_0$ > 0: ∀ *n* ≥ $n_0$: 0 ≤ *f*(*n*) < *c* *g*(*n*)                               |
| *f*(*n*) = *ω*(*g*(*n*)) | ∀ *c* > 0: ∃ $n_0$ > 0: ∀ *n* ≥ $n_0$: 0 ≤ *c* *g*(*n*) < *f*(*n*)                               |

> ***3.1-1***
>
> Let *f*(*n*) and *g*(*n*) be asymptotically nonnegative functions. Using the basic definition of Θ-notation, prove
> that max(*f*(*n*), *g*(*n*)) = Θ(*f*(*n*) + *g*(*n*)).

In the following statments, *n* is big enough that both *f*(*n*) and *g*(*n*) is nonnegative.

Because *f*(*n*) ≤ max(*f*(*n*), *g*(*n*)), and *g*(*n*) ≤ max(*f*(*n*), *g*(*n*)), we know that
*f*(*n*) + *g*(*n*) ≤ 2 max(*f*(*n*), *g*(*n*)). So 0.5 (*f*(*n*) + *g*(*n*)) ≤ max(*f*(*n*), *g*(*n*)).

Because *f*(*n*) ≤ *f*(*n*) + *g*(*n*), and *g*(*n*) ≤ *f*(*n*) + *g*(*n*), we know that
max(*f*(*n*), *g*(*n*)) ≤ *f*(*n*) + *g*(*n*).

So we have 0.5 (*f*(*n*) + *g*(*n*)) ≤ max(*f*(*n*), *g*(*n*)) ≤ *f*(*n*) + *g*(*n*), max(*f*(*n*),
*g*(*n*)) = Θ(*f*(*n*) + *g*(*n*)).

> ***3.1-2***
>
> Show that for any real constants *a* and *b*, where *b* > 0,
>
> $\left(n + a\right)^b = Θ\left(n^b\right)$. (3.2)

We want to find constant $c_1$, $c_2$ and $n_0$ so that if $n > n_0$, $c_1 n^b ≤ \left(n + a\right)^b ≤ c_2 n^b$.

$c_1 n^b ≤ \left(n + a\right)^b ≤ c_2 n^b$\
⇔ $\left({c_1}^{1 / b}\right)^b n^b ≤ \left(n + a\right)^b ≤ \left({c_2}^{1 / b}\right)^b n^b$\
⇔ $\left({c_1}^{1 / b} n\right)^b ≤ \left(n + a\right)^b ≤ \left({c_2}^{1 / b} n\right)^b$\
⇔ ${c_1}^{1 / b} n ≤ n + a ≤ {c_2}^{1 / b} n$\
⇔ ${c_1}^{1 / b} n - n ≤ a ≤ {c_2}^{1 / b} n - n$\
⇔ $\left({c_1}^{1 / b} - 1\right) n ≤ a ≤ \left({c_2}^{1 / b} - 1\right) n$

We need $n$ to be greater than some $n_0$, so we should have ${c_1}^{1 / b} - 1 < 0$, and ${c_2}^{1 / b} - 1 > 0$, then
we have $n ≥ \frac{a}{ {c_1}^{1 / b} - 1}$, and $n ≥ \frac{a}{ {c_1}^{1 / b} - 1}$, i.e.
$n ≥ \max\left(\frac{a}{ {c_1}^{1 / b} - 1}, \frac{a}{ {c_2}^{1 / b} - 1}\right)$.
Let $c_1 = \left(\frac{1}{2}\right)^b$, $c_2 = 2^b$, we have $n ≥ \max\left(-2 a, a\right)$. So $n_0$ can be
$\max\left(-2 a, a\right)$.

Formally, for any $n > \max\left(-2 a, a\right)$,
$\left(\frac{1}{2}\right)^b n^b ≤ \left(n + a\right)^b ≤ 2^b n^b$, $\left(n + a\right)^b = Θ(n^b)$.

> ***3.1-3***
>
> Explain why the statement, “The running time of algorithm *A* is at least $O\left(n^2\right)$,” is meaningless.

It is like saying *x* is at least less than or equal to 10.

> ***3.1-4***
>
> Is $2^{n + 1} = O\left(2 ^ n\right)$? Is $2^{2 n} = O\left(2^n\right)$?

$2^{n + 1} = 2 × 2^n = O\left(2 ^ n\right)$, $2^{2 n} = \left(2^n\right)^2 ≠ O\left(2^n\right)$.

> ***3.1-5***
>
> Prove Theorem 3.1.

If *f*(*n*) = Θ(*g*(*n*)), *c*1 *g*(*n*) ≤ *f*(*n*) ≤ *c*2 *g*(*n*), for all *n* ≥ *n*0, for some *c*1, *c*2 and *n*0.
Because *f*(*n*) ≤ *c*2 *g*(*n*), we know that *f*(*n*) = *O*(*g*(*n*)). Because *c*1 *g*(*n*) ≤ *f*(*n*), we know that
*f*(*n*) = Ω(*g*(*n*)).

If *f*(*n*) = *O*(*g*(*n*)) then *f*(*n*) ≤ *c*2 *g*(*n*), for all *n* ≥ *n*0, for some *c*2 and *n*0. If
*f*(*n*) = Ω(*g*(*n*)), then *c*1 *g*(*n*) ≤ *f*(*n*), for all *n* ≥ *n*1, for some *c*1 and *n*1. So
*c*1 *g*(*n*) ≤ *f*(*n*) ≤ *c*2 *g*(*n*), for all *n* ≥ max(*n*0, *n*1).

> ***3.1-6***
>
> Prove that the running time of an algorithm is Θ(*g*(*n*)) if and only if its worst-case running time is *O*(*g*(*n*))
> and its best-case running time is Ω(*g*(*n*)).

Running time of an algorithm is Θ(*g*(*n*)) means the running time is bounded by a function *f*(*n*) that
*c*1 *g*(*n*) ≤ *f*(*n*) ≤ *c*2 *g*(*n*), for all *n* ≥ *n*0, for some *c*1, *c*2 and *n*0 > 0. So the worst-case running
time is bounded by *c*2 *g*(*n*), and the best-case running time is bounded by *c*1 *g*(*n*). So the worst-case running
time is *O*(*g*(*n*)), and the best-case running time is Ω(*g*(*n*)).

If the worst-case running time is *O*(*g*(*n*)), it means the running time is bounded by a function *f*1(*n*) from above
that *f*1(*n*) ≤ *c*2 *g*(*n*) for sufficiently large *n* for some *c*2. If the best-case running time is Ω(*g*(*n*)),
it means the running time is bounded from below by a function *f*2(*n*) that *c*1 *f*(*n*) ≤ *f*2(*n*) for sufficiently
large *n* for some *c*1. Because *f*1(*n*) and *f*2(*n*) is the worst-cast running time and the best-case running time,
the running time is bounded by *c*1 *g*(*n*) *c*2 *g*(*n*), so the running time is Θ(*g*(*n*)).

> ***3.1-7***
>
> Prove that *o*(*g*(*n*)) ∩ *ω*(*g*(*n*)) is the empty set.

Assume there exist a function *f*(*n*) that *f*(*n*) = *o*(*g*(*n*)) and *f*(*n*) = *ω*(*g*(*n*)), we have:

- For all *c*1 > 0, for some *n*0 > 0, for all *n* ≥ *n*0, *c*1 *f*(*n*) < *g*(*n*).
- For all *c*2 > 0, for some *n*1 > 0, for all *n* ≥ *n*1, *c*2 *f*(*n*) > *g*(*n*).

Let *c*2 = *c*1, *n* = max(*n*0, *n*1), we have *c*1 *f*(*n*) < *g*(*n*) and *c*1 *f*(*n*) > *g*(*n*) which is
impossible, so *f*(*n*) does not exist. So *o*(*g*(*n*)) ∩ *ω*(*g*(*n*)) is the empty set.

> ***3.1-8***
>
> We can extend our notation to the case of two parameters *n* and *m* that can go to infinity independently at
> different rates. For a given function *g*(*n*, *m*), we denote by *O*(*g*(*n*, *m*)) the set of functions
>
> *O*(*g*(*n*, *m*)) = { *f*(*n*, *m*) : there exist positive constants *c*, $n_0$, and $m_0$ such that
> 0 ≤ *f*(*n*, *m*) ≤ *c* *g*(*n*, *m*) for all *n* ≥ $n_0$ or *m* ≥ $m_0$ }.
>
> Give corresponding definitions for Ω(*g*(*n*, *m*)) and Θ(*g*(*n*, *m*)).

Ω(*g*(*n*, *m*)) = { *f*(*n*, *m*) : there exist positive constants *c*, $n_0$, and $m_0$ such that
0 ≤ *c* *g*(*n*, *m*) ≤ *f*(*n*, *m*) for all *n* ≥ $n_0$ or *m* ≥ $m_0$ }.

Θ(*g*(*n*, *m*)) = { *f*(*n*, *m*) : there exist positive constants $c_1$, $c_2$, $n_0$, and $m_0$ such that
0 ≤ $c_1$ *g*(*n*, *m*) ≤ *f*(*n*, *m*) ≤ $c_2$ *g*(*n*, *m*) for all *n* ≥ $n_0$ or *m* ≥ $m_0$ }.

#### 3.2 Standard notations and common functions

> ***3.2-1***
>
> Show that if *f*(*n*) and *g*(*n*) are monotonically increasing functions, then so are the functions *f*(*n*) + g(*n*)
> and *f*(*g*(*n*)), and if *f*(*n*) and *g*(*n*) are in addition nonnegative, then *f*(*n*) ⋅ *g*(*n*) is monotonically
> increasing.

1. *m* ≤ *n* ⇒ (*f*(*m*) ≤ *f*(*n*)) ∧ (*g*(*m*) ≤ *g*(*n*)) ⇒ *f*(*m*) + *g*(*m*) ≤ *f*(*n*) + *g*(*n*).
2. *m* ≤ *n* ⇒ *g*(*m*) ≤ *g*(*n*) ⇒ *f*(*g*(*m*)) ≤ *f*(*g*(*n*)).
3. (*m* ≤ *n*) ∧ (∀ *x*: *f*(*x*) ≥ 0) ∧ (∀ *x*: *g*(*x*) ≥ 0)\
   ⇒ (*f*(*m*) ≤ *f*(*n*)) ∧ (*g*(*m*) ≤ *g*(*n*)) ∧ (∀ *x*: *f*(*x*) ≥ 0) ∧ (∀ *x*: *g*(*x*) ≥ 0)\
   ⇒ *f*(*m*) ⋅ *g*(*m*) ≤ *f*(*n*) ⋅ *g*(*m*) ≤ *f*(*n*) ⋅ *g*(*n*)\
   ⇒ *f*(*m*) ⋅ *g*(*m*) ≤ *f*(*n*) ⋅ *g*(*n*).

> ***3.2-2***
>
> Prove equation (3.16).

$a^{\log_b c} = \left(c^{\log_c a}\right)^{\log_b c} = c^{\left(\log_c a\right)\left(\log_b c\right)} = c^{\frac{\ln a}{\ln c} \frac{\ln c}{\ln b}} = c^{\frac{\ln a}{\ln b}} = c^{\log_b a}$.
