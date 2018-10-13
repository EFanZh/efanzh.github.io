---
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
> Using Figure 2.2 as a model, illustrate the operation of *INSERTION-SORT* on the array *A* = 〈31, 41, 59, 26, 41, 58〉.

*Skipped.*

> ***2.1-2***
>
> Rewrite the *INSERTION-SORT* procedure to sort into nonincreasing instead of nondecreasing order.

Just change *A*[*i*] > *key* to *A*[*i*] < *key* in the original code.

> ***2.1-3***
>
> Consider the ***searching problem***:
>
> **Input**: A sequence of $n$ numbers $A = 〈a_1, a_2, …, a_n〉$ and a value $v$.
>
> **Output**: An index $i$ such that $v = A[i]$ or the special value *NIL* if $v$ does not appear in $A$.
>
> Write pseudocode for ***linear search***, which scans through the sequence, looking for $v$. Using a loop invariant,
> prove that your algorithm is correct. Make sure that your loop invariant fulfills the three necessary properties.

LINEAR-SEARCH(*A*, *v*)\
1\. **for** *i* = 1 **to** *A*.*length*\
2\.     **if** *A*[*i*] == *v*\
3\.         **return** *i*\
4\. **return** *NIL*

Loop invariant: *A*[1..*i* - 1] does not contain value *v*. The only way the loop continues is that *A*[*i*] ≠ *v*, so
we know *A*[1..*i*] does not contain value *v*. Then we increase *i* by 1, so again, *A*[1..*i* - 1] still does not
contain value *v*. If the loop is completed, *i* must be equal to *A*.*length* + 1, so the whole array does not contain
value *v*, then we return *NIL*.

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

ADD-BINARY(*A*, *B*, *C*)\
1\. *carry* = 0\
2\. **for** *i* = 1 **to** *A*.*length*\
3\.     *sum* = *A*[*n* - *i*] + *B*[*n* - *i*] + *carry*\
4\.     *C*[*n* + 1 - *i*] = *sum* mod 2\
5\.     *carry* = *sum* / 2\
6\. *C*[0] = *carry*
