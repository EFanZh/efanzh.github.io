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

#### Problems

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

*Linear-Search*(*A*, *v*)\
1\. **for** *i* = 1 **to** *A*.*length*\
2\.     **if** *A*[*i*] == *v*\
3\.         **return** *i*\
4\. **return** *nil*

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

*Add-Binary*(*A*, *B*, *C*)\
1\. *carry* = 0\
2\. **for** *i* = 1 **to** *A*.*length*\
3\.     *sum* = *A*[*n* - *i*] + *B*[*n* - *i*] + *carry*\
4\.     *C*[*n* + 1 - *i*] = *sum* mod 2\
5\.     *carry* = *sum* / 2\
6\. *C*[0] = *carry*

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

See [here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_2_3_designing_algorithms.rs) for
implementation.

> ***2.3-3***
>
> Use mathematical induction to show that when $n$ is an exact power of 2, the solution of the recurrence
>
> $T\left(n\right) = \cases{
> 2                         &if $n = 2$ \\\\
> 2 T\left(n / 2\right) + n &if $n = 2^k$, for $k > 1$
> }$
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

See [here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_2_3_designing_algorithms.rs) for
implementation.

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

See [here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_2_3_designing_algorithms.rs) for
Rust implementations.

*Binary-Search*(*A*, *v*)\
1\. *left* = 1\
2\. *right* = *A*.*length* + 1\
3\. ***while*** *left* < *right*\
4\.     *middle* = ⌊(*left* + *right*) / 2⌋\
5\.     ***if*** *A*[*middle*] < *v*\
6\.         *left* = *middle* + 1\
7\.     ***else***\
8\.         *right* = *middle*\
9\. ***if*** *left* ≤ *A*.*length* and *A*[*left*] == *v*\
10\.     ***return*** *left*\
11\. ***else***\
12\.     ***return*** *nil*

After each iteration, the length of the searching range reduces by half, until the range is empty. So we have:

*T*(*n*) = *c*₁, if *n* = 0\
*T*(*n*) = *T*(*n* / 2) + *c*₂, if *n* > 0

We prove *T*(*n*) = Θ(lg *n*) by induction:

- If *n* = 0, Θ(lg *n*) = Θ(lg 0) = Θ(-∞), … Not sure how to go from here.
- If *n* > 0, Θ(lg *n*) = *T*(*n* / 2) + *c*₂. By induction, we know *T*(*n* / 2) = Θ(lg (*n* / 2)), so
  Θ(lg *n*) = Θ(lg (*n* / 2)) + *c*₂ = Θ((lg *n*)  - 1) + *c*₂ = Θ(lg *n*) + *c*₂ = Θ(lg *n*).

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

See [here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_2_3_designing_algorithms.rs) for
implementations.
