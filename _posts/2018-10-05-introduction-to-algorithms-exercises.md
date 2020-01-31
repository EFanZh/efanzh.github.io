---
enable_mathjax: true
---

# Introduction to Algorithms Exercises

I will put the actual implementation of exercises [here](https://github.com/EFanZh/Introduction-to-Algorithms).

## I Foundations

### 1 The Role of Algorithms in Computing

#### 1.1 Algorithms

##### 1.1-1

> Give a real-world example that requires sorting or a real-world example that requires computing a convex hull.

*Skipped.*

##### 1.1-2

> Other than speed, what other measures of efficiency might one use in a real-world setting?

Memory consumption.

##### 1.1-3

> Select a data structure that you have seen previously, and discuss its strengths and limitations.

[Linked lists](https://en.wikipedia.org/wiki/Linked_list), where insertion and deletion take constant time, but locating
an element by index takes linear time.

##### 1.1-4

> How are the shortest-path and traveling-salesman problems given above similar? How are they different?

They both need to minimize the total distance for travelling. But shortest-path is to find the shortest path between
only two locations, while traveling-salesman is to find the shortest path containing all given locations.

##### 1.1-5

> Come up with a real-world problem in which only the best solution will do. Then come up with one in which a solution
> that is “approximately” the best is good enough.

*Skipped.*

#### 1.2 Algorithms as a technology

##### 1.2-1

> Give an example of an application that requires algorithmic content at the application level, and discuss the function
> of the algorithms involved.

The [Minesweeper](https://en.wikipedia.org/wiki/Minesweeper_(video_game)) game. You have to figure out if there is a
mime under a button base on the numbers that you recovered. That is an algorithm.

##### 1.2-2

> Suppose we are comparing implementations of insertion sort and merge sort on the same machine. For inputs of size *n*,
> insertion sort runs in $8 n^2$ steps, while merge sort runs in 64 *n* lg *n* steps. For which values of *n* does
> insertion sort beat merge sort?

We can solve $8 n^2 < 64 n \lg n$ for *n*. Assume *n* ≥ 0, we get *n* < 8 lg *n*. With the help of
[Wolfram Alpha](https://www.wolframalpha.com/input/?i=Reduce%5Bn+%3C+8+Log%5B2,+n%5D,+n%5D), we know that
1.1 < *n* < 43.5593. So for *n* ∈ [2, 43], insertion sort beats merge sort.

##### 1.2-3

> What is the smallest value of *n* such that an algorithm whose running time is $100 n^2$ runs faster than an algorithm
> whose running time is $2^n$ on the same machine?

Solve $100 n^2 < 2^n$ for *n*
(using [Wolfram Alpha](https://www.wolframalpha.com/input/?i=Reduce%5B100+n+%5E+2+%3C+2+%5E+n,+n%5D)), we get
-0.096704 < *n* < 0.103658 or *n* > 14.3247, so the smallest value of *n* is 0.

Question: Should I only consider positive integer values for *n*?

#### 1.X Problems

##### 1-1 Comparison of running times

> For each function *f*(*n*) and time *t* in the following table, determine the largest size *n* of a problem
> that can be solved in time *t*, assuming that the algorithm to solve the problem takes *f*(*n*) microseconds.
>
> |            | 1 second | 1 minute | 1 hour | 1 day | 1 month | 1 year | 1 century |
> | ---------- | -------- | -------- | ------ | ----- | ------- | ------ | --------- |
> | $\lg n$    |          |          |        |       |         |        |           |
> | $\sqrt{n}$ |          |          |        |       |         |        |           |
> | *n*        |          |          |        |       |         |        |           |
> | $n \lg n$  |          |          |        |       |         |        |           |
> | $n^2$      |          |          |        |       |         |        |           |
> | $n^3$      |          |          |        |       |         |        |           |
> | $2^n$      |          |          |        |       |         |        |           |
> | $n!$       |          |          |        |       |         |        |           |

- 1 second = $10^6$ microseconds
- 1 minute = 6 × $10^7$ microseconds
- 1 hour = 3.6 × $10^9$ microseconds
- 1 day = 8.64 × $10^{10}$ microseconds
- 1 month = 2.628 × $10^{12}$ microseconds
- 1 year = 3.154 × $10^{13}$ microseconds
- 1 century = 3.156 × $10^{15}$ microseconds

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

##### 2.1-1

> Using Figure 2.2 as a model, illustrate the operation of *Insertion-Sort* on the array *A* = ⟨31, 41, 59, 26, 41, 58⟩.

*Skipped.*

##### 2.1-2

> Rewrite the *Insertion-Sort* procedure to sort into nonincreasing instead of nondecreasing order.

Just change *A*[*i*] > *key* to *A*[*i*] < *key* in the original code.

##### 2.1-3

> Consider the ***searching problem***:
>
> **Input**: A sequence of *n* numbers *A* = ⟨$a_1$, $a_2$, …, $a_n$⟩ and a value *v*.
>
> **Output**: An index *i* such that *v* = *A*[*i*] or the special value *nil* if *v* does not appear in *A*.
>
> Write pseudocode for ***linear search***, which scans through the sequence, looking for *v*. Using a loop invariant,
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

##### 2.1-4

> Consider the problem of adding two *n*-bit binary integers, stored in two *n*-element arrays *A* and *B*. The sum of
> the two integers should be stored in binary form in an (*n* + 1)-element array *C*. State the problem formally and
> write pseudocode for adding the two integers.

Problem: Array *A* and *B* only contain elements of 0 and 1, and *A*.*length* == *B*.*length* == *n*. Array *C* that
have length *n* + 1. Rewrite the elements in *C* so that *C* only contains 0s and 1s, and
$∑_{i=1}^n A[i] × 2^{n - i} + ∑_{i=1}^n B[i] × 2^{n - i} = ∑_{i=1}^{n + 1} C[i] × 2^{n + 1 - i}$.

Pseudocode:

*Add-Binary*(*A*, *B*, *C*)

1. *carry* = 0
2. **for** *i* = 1 **to** *A*.*length*
3. &nbsp;&nbsp;&nbsp;&nbsp;*sum* = *A*[*n* - *i*] + *B*[*n* - *i*] + *carry*
4. &nbsp;&nbsp;&nbsp;&nbsp;*C*[*n* + 1 - *i*] = *sum* mod 2
5. &nbsp;&nbsp;&nbsp;&nbsp;*carry* = *sum* / 2
6. *C*[0] = *carry*

#### 2.2 Analyzing algorithms

##### 2.2-1

> Express the function $n^3/1000 - 100 n^2 - 100 n + 3$ in terms of Θ-notation.

$Θ\left(n^3\right)$.

##### 2.2-2

> Consider sorting *n* numbers stored in array *A* by first finding the smallest element of *A* and exchanging it with
> the element in *A*[1]. Then find the second smallest element of *A*, and exchange it with *A*[2]. Continue in this
> manner for the first *n* - 1 elements of *A*. Write pseudocode for this algorithm, which is known as ***selection
> sort***. What loop invariant does this algorithm maintain? Why does it need to run for only the first *n* - 1
> elements, rather than for all *n* elements? Give the best-case and worst-case running times of selection sort in
> Θ-notation.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_2_getting_started/section_2_2_analyzing_algorithms/exercises/exercise_2_2_2.rs).

The loop invariant: at the start of each iteration of loop, The first *i* elements contains the smallest *i* elements in
*A*, and they are in nondecreasing order.

It only need to run for first *n* - 1 elements because after the loop, we have rearrange the smallest *n* - 1 elements,
to the front of *A*, so the last element must be the biggest one, so the whole array is ordered.

Best-case and worst-case running times are both $Θ\left(n^2\right)$.

##### 2.2-3

> Consider linear search again (see Exercise 2.1-3). How many elements of the input sequence need to be checked on the
> average, assuming that the element being searched for is equally likely to be any element in the array? How about in
> the worst case? What are the average-case and worst-case running times of linear search in Θ-notation? Justify your
> answers.

Assume the element to be searched is in the array, then the average elements to be checked is (*n* + 1) / 2.

Best case running time is Θ(1), worst case running time is Θ(*n*). If we are lucky, we can find the element at the first
position, where only one element need to be checked. If we are unlucky, we can find the element at the last position,
where all elements will be checked.

##### 2.2-4

> How can we modify almost any algorithm to have a good best-case running time?

Precompute the result for some special cases, and test the inputs for such cases. If the input matches such cases we
return the precomputed result.

#### 2.3 Designing algorithms

##### 2.3-1

> Using Figure 2.4 as a model, illustrate the operation of merge sort on the array *A* = ⟨3, 41, 52, 26, 38, 57, 9, 49⟩.

*Skipped.*

##### 2.3-2

> Rewrite the *Merge* procedure so that it does not use sentinels, instead stopping once either array *L* or *R* has had
> all its elements copied back to *A* and then copying the remainder of the other array back into *A*.

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_2_getting_started/section_2_3_designing_algorithms/exercises/exercise_2_3_2.rs)
for implementation.

##### 2.3-3

> Use mathematical induction to show that when *n* is an exact power of 2, the solution of the recurrence
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

##### 2.3-4

> We can express insertion sort as a recursive procedure as follows. In order to sort *A*[1‥*n*], we recursively sort
> *A*[1‥*n* - 1] and then insert *A*[*n*] into the sorted array *A*[1‥*n* - 1]. Write a recurrence for the worst-case
> running time of this recursive version of insertion sort.

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_2_getting_started/section_2_3_designing_algorithms/exercises/exercise_2_3_4.rs)
for implementation.

$$T\left(n\right) = \begin{cases}
    1 &\text{if $n < 2$} \\\\
    T(n - 1) + Θ\left(n\right) &\text{if $n >= 2$}
\end{cases}$$

##### 2.3-5

> Referring back to the searching problem (see Exercise 2.1-3), observe that if the sequence *A* is sorted, we can check
> the midpoint of the sequence against *v* and eliminate half of the sequence from further consideration. The ***binary
> search*** algorithm repeats this procedure, halving the size of the remaining portion of the sequence each time. Write
> pseudocode, either iterative or recursive, for binary search. Argue that the worst-case running time of binary search
> is Θ(lg *n*).

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_2_getting_started/section_2_3_designing_algorithms/exercises/exercise_2_3_5.rs)
for implementation.

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

*T*(*n*) = $c_1$, if *n* = 0;\
*T*(*n*) = *T*(*n* / 2) + $c_2$, if *n* > 0.

We prove *T*(*n*) = Θ(lg *n*) by induction:

- If *n* = 0, Θ(lg *n*) = Θ(lg 0) = Θ(-∞), … Not sure how to go from here.
- If *n* > 0, Θ(lg *n*) = *T*(*n* / 2) + $c_2$ = Θ(*T*(*n* / 2)). By induction, we know *T*(*n* / 2) = Θ(lg (*n* / 2)),
  so Θ(lg *n*) = Θ(lg (*n* / 2)) = Θ((lg *n*) - 1) = Θ(lg *n*).

##### 2.3-6

> Observe that the **while** loop of lines 5–7 of the *Insertion-Sort* procedure in Section 2.1 uses a linear search to
> scan (backward) through the sorted subarray *A*[1‥*j* - 1]. Can we use a binary search (see Exercise 2.3-5) instead
> to improve the overall worst-case running time of insertion sort to Θ(*n* lg *n*)?

No, we can not. Because despite the searching takes Θ(lg *n*) time, we still need to move *n* elements in the worst-case
scenario, which takes Θ(*n*) time.

##### 2.3-7 ★

> Describe a Θ(*n* lg *n*)-time algorithm that, given a set *S* of *n* integers and another integer *x*, determines
> whether or not there exist two elements in *S* whose sum is exactly *x*.

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_2_getting_started/section_2_3_designing_algorithms/exercises/exercise_2_3_7.rs)
for implementations.

#### 2.X Problems

##### 2-1 Insertion sort on small arrays in merge sort

> Although merge sort runs in $Θ\left(n \lg n\right)$ worst-case time and insertion sort runs in $Θ\left(n^2\right)$
> worst-case time, the constant factors in insertion sort can make it faster in practice for small problem sizes on many
> machines. Thus, it makes sense to ***coarsen*** the leaves of the recursion by using insertion sort within merge sort
> when subproblems become sufficiently small. Consider a modification to merge sort in which $n / k$ sublists of length
> *k* are sorted using insertion sort and then merged using the standard merging mechanism, where *k* is a value to be
> determined.
>
> 1. Show that insertion sort can sort the $n / k$ sublists, each of length *k*, in $Θ\left(n k\right)$ worst-case
>    time.
> 2. Show how to merge the sublists in $Θ\left(n \lg \left(n / k\right)\right)$ worst-case time.
> 3. Given that the modified algorithm runs in $Θ\left(n k + n \lg \left(n / k\right)\right)$ worst-case time, what is
>    the largest value of *k* as a function of *n* for which the modified algorithm has the same running time as
>    standard merge sort, in terms of $Θ$-notation?
> 4. How should we choose *k* in practice?

1. Sort a sublist of length *k* takes $k^2$ time, so sorting $n / k$ sublists takes
   $\left(n / k\right) Θ\left(k^2\right) = Θ\left(\left(n / k\right) k^2\right) = Θ\left(n k\right)$ time.
2. Assume merging *n* sublists takes $T(n)$ time, we have $T\left(n\right) = 2 T\left(n\right) + c_1 n$, if $n > 1$.
   Also, $T\left(n\right) = c_2$, if $n = 1$. Notice this is the same as equation 2.1 and 2.2. So we have
   $T\left(n\right) = Θ\left(n \lg n\right)$. So merging $n / k$ sublists takes
   $T\left(n / k\right) = Θ\left(\left(n / k\right) \lg \left(n / k\right)\right) = Θ\left(n \lg \left(n / k\right)\right)$.
3. We need to solve the equation $n k + n \lg \left(n / k\right) < c n \lg \left(n\right)$. We can get
   $k - \lg k < \left(c-1\right) \lg n$ from it. I think $k < Θ\left(\lg n\right)$, but I can’t prove it.
4. With benchmarks and profiling.

##### 2-2 Correctness of bubblesort

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

##### 2-3 Correctness of Horner’s rule

> The following code fragment implements Horner’s rule for evaluating a polynomial
>
> $\begin{aligned}
> P\left(x\right) &= ∑_{k=0}^n a_k x^k \\\\
> &=a_0 + x\left(a_1 + x\left(a_2 + … + x\left(a_{n - 1} + x a_n\right) …\right)\right),
> \end{aligned}$
>
> given the coefficients $a_0$, $a_1$, …, $a_n$ and a value for *x*:
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
>    $y = \displaystyle ∑_{k = 0}^{n - \left(i + 1\right)} a_{k + i + 1} x^k$.
>
>    Interpret a summation with no terms as equaling 0. Following the structure of the loop invariant proof presented in
>    this chapter, use this loop invariant to show that, at termination, $y = ∑_{k = 0}^n a_k x^k$.
> 4) Conclude by arguing that the given code fragment correctly evaluates a polynomial characterized by the coefficients
>    $a_0$, $a_1$, …, $a_n$.

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_2_getting_started/problems/problem_2_3_correctness_of_horners_rule.rs)
for implementation.

1. Θ(*n*).
2. The pseudocode:

   1. *y* = 0
   2. **for** *i* = 0 **to** *n*
   3. &nbsp;&nbsp;&nbsp;&nbsp;*p* = $a_i$
   4. &nbsp;&nbsp;&nbsp;&nbsp;**for** *j* = 0 **to** *i*
   5. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*p* = *p* ⋅ *x*
   6. &nbsp;&nbsp;&nbsp;&nbsp;*y* = *y* + *p*

   The running time of this algorithm is $Θ\left(n^2\right)$. It takes more time than Horner’s rule.
3. Proof:

   - **Initialization:** Before the first iteration, *i* = *n*,
     $y = ∑_{k = 0}^{n - \left(i + 1\right)} a_{k + i + 1} x^k
     = ∑_{k = 0}^{-1} a_{k + n + 1} x^k
     = 0$, so the claim holds.
   - **Maintenance:** After line 3, $y' = a_i + x ⋅ y
     = a_i + x \left(∑_{k = 0}^{n - \left(i + 1\right)} a_{k + i + 1} x^k\right)
     = a_i ⋅ x^0 + ∑_{k = 0}^{n - \left(i + 1\right)} a_{k + i + 1} x^{k + 1}
     = a_i ⋅ x^0 + ∑_{k = 1}^{n - i} a_{k + i} x^k
     = ∑_{k = 0}^{n - i} a_{k + i} x^k$. After decreasing *i*, the claim holds.
   - **Termination:** At termination, *i* = -1, so
     $y = ∑_{k = 0}^{n - \left(\left(-1\right) + 1\right)} a_{k + \left(-1\right) + 1} x^k
     = ∑_{k = 0}^n a_k x^k$.
4. I thought I have proved it at step 3.

##### 2-4 Inversions

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

   Let $k_i$ be the numbers of inversions whose second element is *i*. The total sorting time is
   $∑_{i = 1}^n\left(c_1 k_i + c_2\right) = c_1 k + c_2 n = Θ\left(k\right)$.
4. See
   [here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_2_getting_started/problems/problem_2_4_inversions.rs)
   for implementation.

### 3 Growth of Functions

#### 3.1 Asymptotic notation

| Notation                 | Definition                                                                                       |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| *f*(*n*) = *O*(*g*(*n*)) | ∃ *c* > 0, $n_0$ > 0: ∀ *n* ≥ $n_0$: 0 ≤ *f*(*n*) ≤ *c* *g*(*n*)                                 |
| *f*(*n*) = Ω(*g*(*n*))   | ∃ *c* > 0, $n_0$ > 0: ∀ *n* ≥ $n_0$: 0 ≤ *c* *g*(*n*) ≤ *f*(*n*)                                 |
| *f*(*n*) = Θ(*g*(*n*))   | ∃ $c_1$ > 0, $c_2$ > 0, $n_0$ > 0: ∀ *n* ≥ $n_0$: 0 ≤ $c_1$ *g*(*n*) ≤ *f*(*n*) ≤ $c_2$ *g*(*n*) |
| *f*(*n*) = *o*(*g*(*n*)) | ∀ *c* > 0: ∃ $n_0$ > 0: ∀ *n* ≥ $n_0$: 0 ≤ *f*(*n*) < *c* *g*(*n*)                               |
| *f*(*n*) = *ω*(*g*(*n*)) | ∀ *c* > 0: ∃ $n_0$ > 0: ∀ *n* ≥ $n_0$: 0 ≤ *c* *g*(*n*) < *f*(*n*)                               |

##### 3.1-1

> Let *f*(*n*) and *g*(*n*) be asymptotically nonnegative functions. Using the basic definition of Θ-notation, prove
> that max(*f*(*n*), *g*(*n*)) = Θ(*f*(*n*) + *g*(*n*)).

In the following statements, *n* is big enough that both *f*(*n*) and *g*(*n*) is nonnegative.

Because *f*(*n*) ≤ max(*f*(*n*), *g*(*n*)), and *g*(*n*) ≤ max(*f*(*n*), *g*(*n*)), we know that
*f*(*n*) + *g*(*n*) ≤ 2 max(*f*(*n*), *g*(*n*)). So 0.5 (*f*(*n*) + *g*(*n*)) ≤ max(*f*(*n*), *g*(*n*)).

Because *f*(*n*) ≤ *f*(*n*) + *g*(*n*), and *g*(*n*) ≤ *f*(*n*) + *g*(*n*), we know that
max(*f*(*n*), *g*(*n*)) ≤ *f*(*n*) + *g*(*n*).

So we have 0.5 (*f*(*n*) + *g*(*n*)) ≤ max(*f*(*n*), *g*(*n*)) ≤ *f*(*n*) + *g*(*n*), max(*f*(*n*),
*g*(*n*)) = Θ(*f*(*n*) + *g*(*n*)).

##### 3.1-2

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

We need *n* to be greater than some $n_0$, so we should have ${c_1}^{1 / b} - 1 < 0$, and ${c_2}^{1 / b} - 1 > 0$, then
we have $n ≥ \frac{a}{ {c_1}^{1 / b} - 1}$, and $n ≥ \frac{a}{ {c_1}^{1 / b} - 1}$, i.e.
$n ≥ \max\left(\frac{a}{ {c_1}^{1 / b} - 1}, \frac{a}{ {c_2}^{1 / b} - 1}\right)$.
Let $c_1 = \left(\frac{1}{2}\right)^b$, $c_2 = 2^b$, we have $n ≥ \max\left(-2 a, a\right)$. So $n_0$ can be
$\max\left(-2 a, a\right)$.

Formally, for any $n > \max\left(-2 a, a\right)$,
$\left(\frac{1}{2}\right)^b n^b ≤ \left(n + a\right)^b ≤ 2^b n^b$, $\left(n + a\right)^b = Θ(n^b)$.

##### 3.1-3

> Explain why the statement, “The running time of algorithm *A* is at least $O\left(n^2\right)$,” is meaningless.

It is like saying *x* is at least less than or equal to 10.

##### 3.1-4

> Is $2^{n + 1} = O\left(2 ^ n\right)$? Is $2^{2 n} = O\left(2^n\right)$?

$2^{n + 1} = 2 × 2^n = O\left(2 ^ n\right)$, $2^{2 n} = \left(2^n\right)^2 ≠ O\left(2^n\right)$.

##### 3.1-5

> Prove Theorem 3.1.

If *f*(*n*) = Θ(*g*(*n*)), *c*1 *g*(*n*) ≤ *f*(*n*) ≤ *c*2 *g*(*n*), for all *n* ≥ *n*0, for some *c*1, *c*2 and *n*0.
Because *f*(*n*) ≤ *c*2 *g*(*n*), we know that *f*(*n*) = *O*(*g*(*n*)). Because *c*1 *g*(*n*) ≤ *f*(*n*), we know that
*f*(*n*) = Ω(*g*(*n*)).

If *f*(*n*) = *O*(*g*(*n*)) then *f*(*n*) ≤ *c*2 *g*(*n*), for all *n* ≥ *n*0, for some *c*2 and *n*0. If
*f*(*n*) = Ω(*g*(*n*)), then *c*1 *g*(*n*) ≤ *f*(*n*), for all *n* ≥ *n*1, for some *c*1 and *n*1. So
*c*1 *g*(*n*) ≤ *f*(*n*) ≤ *c*2 *g*(*n*), for all *n* ≥ max(*n*0, *n*1).

##### 3.1-6

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

##### 3.1-7

> Prove that *o*(*g*(*n*)) ∩ *ω*(*g*(*n*)) is the empty set.

Assume there exist a function *f*(*n*) that *f*(*n*) = *o*(*g*(*n*)) and *f*(*n*) = *ω*(*g*(*n*)), we have:

- For all *c*1 > 0, for some *n*0 > 0, for all *n* ≥ *n*0, *c*1 *f*(*n*) < *g*(*n*).
- For all *c*2 > 0, for some *n*1 > 0, for all *n* ≥ *n*1, *c*2 *f*(*n*) > *g*(*n*).

Let *c*2 = *c*1, *n* = max(*n*0, *n*1), we have *c*1 *f*(*n*) < *g*(*n*) and *c*1 *f*(*n*) > *g*(*n*) which is
impossible, so *f*(*n*) does not exist. So *o*(*g*(*n*)) ∩ *ω*(*g*(*n*)) is the empty set.

##### 3.1-8

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

##### 3.2-1

> Show that if *f*(*n*) and *g*(*n*) are monotonically increasing functions, then so are the functions *f*(*n*) + g(*n*)
> and *f*(*g*(*n*)), and if *f*(*n*) and *g*(*n*) are in addition nonnegative, then *f*(*n*) ⋅ *g*(*n*) is monotonically
> increasing.

1. *m* ≤ *n* ⇒ (*f*(*m*) ≤ *f*(*n*)) ∧ (*g*(*m*) ≤ *g*(*n*)) ⇒ *f*(*m*) + *g*(*m*) ≤ *f*(*n*) + *g*(*n*).
2. *m* ≤ *n* ⇒ *g*(*m*) ≤ *g*(*n*) ⇒ *f*(*g*(*m*)) ≤ *f*(*g*(*n*)).
3. (*m* ≤ *n*) ∧ (∀ *x*: *f*(*x*) ≥ 0) ∧ (∀ *x*: *g*(*x*) ≥ 0)\
   ⇒ (*f*(*m*) ≤ *f*(*n*)) ∧ (*g*(*m*) ≤ *g*(*n*)) ∧ (∀ *x*: *f*(*x*) ≥ 0) ∧ (∀ *x*: *g*(*x*) ≥ 0)\
   ⇒ *f*(*m*) ⋅ *g*(*m*) ≤ *f*(*n*) ⋅ *g*(*m*) ≤ *f*(*n*) ⋅ *g*(*n*)\
   ⇒ *f*(*m*) ⋅ *g*(*m*) ≤ *f*(*n*) ⋅ *g*(*n*).

##### 3.2-2

> Prove equation (3.16).

$a^{\log_b c} = \left(c^{\log_c a}\right)^{\log_b c} = c^{\left(\log_c a\right)\left(\log_b c\right)} = c^{\frac{\ln a}{\ln c} \frac{\ln c}{\ln b}} = c^{\frac{\ln a}{\ln b}} = c^{\log_b a}$.

##### 3.2-3

> Prove equation (3.19). Also prove that *n*! = *ω*($2^n$) and *n*! = *o*($n^n$).

Proving equation (3.19):

According to equation (3.18), we know that

$\sqrt{2 π n} \left(\frac{n}{e}\right)^n \left(1 + \frac{c_1}{n}\right) ≤ n! ≤ \sqrt{2 π n} \left(\frac{n}{e}\right)^n \left(1 + \frac{c_2}{n}\right)$

So

$\ln \left(\sqrt{2 π n} \left(\frac{n}{e}\right)^n \left(1 + \frac{c_1}{n}\right)\right) ≤ \ln \left(n!\right) ≤ \ln \left(\sqrt{2 π n} \left(\frac{n}{e}\right)^n \left(1 + \frac{c_2}{n}\right)\right)$\
⇒ $\ln \left(\left(\frac{n}{e}\right)^n\right) + \ln \left(\sqrt{2 π n} \left(1 + \frac{c_1}{n}\right)\right) ≤ \ln \left(n!\right) ≤ \ln \left(\left(\frac{n}{e}\right)^n\right) + \ln \left(\sqrt{2 π n} \left(1 + \frac{c_2}{n}\right)\right)$\
⇒ $n \ln \left(\frac{n}{e}\right) + \ln \left(\sqrt{2 π n} \left(1 + \frac{c_1}{n}\right)\right) ≤ \ln \left(n!\right) ≤ n \ln \left(\frac{n}{e}\right) + \ln \left(\sqrt{2 π n} \left(1 + \frac{c_2}{n}\right)\right)$\
⇒ $n \left(\ln n - 1\right) + \ln \left(\sqrt{2 π n} \left(1 + \frac{c_1}{n}\right)\right) ≤ \ln \left(n!\right) ≤ n \left(\ln n - 1\right) + \ln \left(\sqrt{2 π n} \left(1 + \frac{c_2}{n}\right)\right)$\
⇒ $n \ln n - n + \ln \left(\sqrt{2 π n} \left(1 + \frac{c_1}{n}\right)\right) ≤ \ln \left(n!\right) ≤ n \ln n - n + \ln \left(\sqrt{2 π n} \left(1 + \frac{c_2}{n}\right)\right)$\
⇒ $n \ln n - n + \frac{1}{2} \ln {\left(2 π n\right)} + \ln {\left(1 + \frac{c_1}{n}\right)} ≤ \ln \left(n!\right) ≤ n \ln n - n + \frac{1}{2} \ln {\left(2 π n\right)} + \ln {\left(1 + \frac{c_2}{n}\right)}$.

So we have $\ln \left(n!\right) = Ω\left(n \ln n\right)$, and $\ln \left(n!\right) = O\left(n \ln n\right)$, so
$\ln \left(n!\right) = Θ\left(n \ln n\right)$.

Proving *n*! = *ω*($2^n$):

$\lim_{n → ∞}\frac{2^n}{n!} = \lim_{n → ∞}\frac{2 × 2 × 2 × 2 × 2 × … × 2}{1 × 2 × 3 × 4 × 5 × … × n} = \lim_{n → ∞}\left(\frac{2}{1} × \frac{2}{2} × \frac{2}{3} × \frac{2}{4} × \frac{2}{5} × … × \frac{2}{n}\right) = 2 \lim_{n → ∞}\left(\frac{2}{3} × \frac{2}{4} × \frac{2}{5} × … × \frac{2}{n}\right) ≤ 2 \lim_{n → ∞}\left(\frac{2}{n}\right) = 0$.

Proving *n*! = *o*($n^n$):

$\lim_{n → ∞}\frac{n!}{n^n} = \lim_{n → ∞}\frac{1 × 2 × 3 × 4 × 5 × … × n}{n × n × n × n × n × … × n} = \lim_{n → ∞}\left(\frac{1}{n} × \frac{2}{n} × \frac{3}{n} × \frac{4}{n} × \frac{5}{n} × … × \frac{n}{n}\right) ≤ \lim_{n → ∞}\left(\frac{1}{n}\right) = 0$.

##### 3.2-4 ★

> Is the function ⌈lg *n*⌉! polynomially bounded? Is the function ⌈lg lg *n*⌉! polynomially bounded?

*Skipped.*

##### 3.2-5 ★

> Which is asymptotically larger: $\lg \left(\lg^* n\right)$ or $\lg^* \left(\lg n\right)$?

By the definition of $\lg^*$, we have

$\lg^* n = \begin{cases}0&n ≤ 1\\\\
\lg^* \left(\lg n\right) + 1&n > 1\end{cases}$.

So $\lg^* n = Θ\left(\lg^* \left(\lg n\right)\right)$. Because $\lg^* n$ is asymptotically larger than $\lg \left(\lg^* n\right)$,
we know that $\lg^* \left(\lg n\right)$ is asymptotically larger than $\lg \left(\lg^* n\right)$.

##### 3.2-6

> Show that the golden ratio $ϕ$ and its conjugate $\hat{ϕ}$ both satisfy the equation $x^2 = x + 1$.

$ϕ^2 = \left(\frac{1 + \sqrt{5}}{2}\right)^2 = \frac{1 + 2 \sqrt{5} + 5}{4} = \frac{6 + 2 \sqrt{5}}{4} = \frac{3 + \sqrt{5}}{2} = \frac{1 + \sqrt{5}}{2} + 1 = ϕ + 1$.

$\hat{ϕ}^2 = \left(\frac{1 - \sqrt{5}}{2}\right)^2 = \frac{1 - 2 \sqrt{5} + 5}{4} = \frac{6 - 2 \sqrt{5}}{4} = \frac{3 - \sqrt{5}}{2} = \frac{1 - \sqrt{5}}{2} + 1 = \hat{ϕ} + 1$.

##### 3.2-7

> Prove by induction that the *i*th Fibonacci number satisfies the equality
>
> $F_i = \dfrac{ϕ^i - \hat{ϕ}^i}{\sqrt{5}}$,
>
> where $ϕ$ is the golden ratio and $\hat{ϕ}$ is its conjugate.

Base cases:

- If *i* = 0, $\frac{ϕ^i - \hat{ϕ}^i}{\sqrt{5}} = \frac{1 - 1}{\sqrt{5}} = 0$, the claim holds.
- If *i* = 1, $\frac{ϕ^i - \hat{ϕ}^i}{\sqrt{5}} = \frac{ϕ - \hat{ϕ}}{\sqrt{5}} = \frac{\frac{1 + \sqrt{5}}{2} - \frac{1 - \sqrt{5}}{2}}{\sqrt{5}} = \frac{\sqrt{5}}{\sqrt{5}} = 1$, the claim holds.

Inductive case:

- By induction, we have $F_{i - 2} = \frac{ϕ^{i - 2} - \hat{ϕ}^{i - 2}}{\sqrt{5}}$ and $F_{i - 1} = \frac{ϕ^{i - 1} - \hat{ϕ}^{i - 1}}{\sqrt{5}}$.
  So $F_i = F_{i - 2} + F_{i - 1} = \frac{ϕ^{i - 2} - \hat{ϕ}^{i - 2}}{\sqrt{5}} + \frac{ϕ^{i - 1} - \hat{ϕ}^{i - 1}}{\sqrt{5}} = \frac{ϕ^{i - 2} \left(1 + ϕ\right) - \hat{ϕ}^{i - 2} \left(1 + \hat{ϕ}\right)}{\sqrt{5}}$. Base on the conclusion of exercise 3.2-6, we have
  $1 + ϕ = ϕ^2$ and $1 + \hat{ϕ} = \hat{ϕ}^2$, so $F_i = \frac{ϕ^{i - 2} ϕ^2 - \hat{ϕ}^{i - 2} \hat{ϕ}^2}{\sqrt{5}} = \frac{ϕ^i - \hat{ϕ}^i}{\sqrt{5}}$, the claim holds.

##### 3.2-8

> Show that *k* ln *k* = Θ(*n*) implies *k* = Θ(*n* / ln *n*).

*Skipped.*

#### 3.X Problems

##### 3-1 Asymptotic behavior of polynomials

> Let
>
> $p(n) = \displaystyle ∑_{i=0}^d a_i n^i$,
>
> where $a_d > 0$, be a degree-*d* polynomial in *n*, and let *k* be a constant. Use the definitions of the asymptotic
> notations to prove the following properties.
>
> 1. If *k* ≥ *d*, then *p*(*n*) = O($n^k$).
> 2. If *k* ≤ *d*, then *p*(*n*) = Ω($n^k$).
> 3. If *k* = *d*, then *p*(*n*) = Θ($n^k$).
> 4. If *k* > *d*, then *p*(*n*) = o($n^k$).
> 5. If *k* < *d*, then *p*(*n*) = ω($n^k$).

*Skipped.*

##### 3-2 Relative asymptotic growths

> Indicate, for each pair of expressions (*A*, *B*) in the table below, whether *A* is *O*, *o*, Ω, *ω*, or Θ of *B*.
> Assume that *k* ≥ 1, *ϵ* > 0, and *c* > 1 are constants. Your answer should be in the form of the table with “yes” or
> “no” written in each box.
>
> |          | *A*                  | *B*                   | *O* | *o* | Ω | *ω* | Θ |
> | -------- | -------------------- | --------------------- | --- | --- | - | --- | - |
> | ***a***. | $\lg^k n$            | $n^ϵ$                 |     |     |   |     |   |
> | ***b***. | $n^k$                | $c^n$                 |     |     |   |     |   |
> | ***c***. | $\sqrt{n}$           | $n^{\sin n}$          |     |     |   |     |   |
> | ***d***. | $2^n$                | $2^{n / 2}$           |     |     |   |     |   |
> | ***e***. | $n^{\lg c}$          | $c^{\lg n}$           |     |     |   |     |   |
> | ***f***. | $\lg\left(n!\right)$ | $\lg\left(n^n\right)$ |     |     |   |     |   |

|          | *A*                  | *B*                   | *O* | *o* | Ω   | *ω* | Θ   |
| -------- | -------------------- | --------------------- | --- | --- | --- | --- | --- |
| ***a***. | $\lg^k n$            | $n^ϵ$                 | yes | yes | no  | no  | no  |
| ***b***. | $n^k$                | $c^n$                 | yes | yes | no  | no  | no  |
| ***c***. | $\sqrt{n}$           | $n^{\sin n}$          | no  | no  | no  | no  | no  |
| ***d***. | $2^n$                | $2^{n / 2}$           | no  | no  | yes | yes | no  |
| ***e***. | $n^{\lg c}$          | $c^{\lg n}$           | yes | no  | yes | no  | yes |
| ***f***. | $\lg\left(n!\right)$ | $\lg\left(n^n\right)$ | yes | no  | yes | no  | yes |

##### 3-3 Ordering by asymptotic growth rates

> 1. Rank the following functions by order of growth; that is, find an arrangement $g_1$, $g_2$, …, $g_{30}$ of the
>    functions satisfying $g_1 = Ω\left(g_2\right)$, $g_2 = Ω\left(g_3\right)$, …, $g_{29} = Ω\left(g_{30}\right)$.
>    Partition your list into equivalence classes such that functions *f*(*n*) and *g*(*n*) are in the
>    same class if and only if $f\left(n\right) = Θ\left(g\left(n\right)\right)$.
>
>    |                              |                              |                                 |                      |                       |                       |
>    | ---------------------------- | ---------------------------- | ------------------------------- | -------------------- | --------------------- | --------------------- |
>    | $\lg\left(\lg^* n\right)$    | $2^{\lg^* n}$                | $\left(\sqrt{2}\right)^{\lg n}$ | $n^2$                | $n!$                  | $\left(\lg n\right)!$ |
>    | $\left(\frac{3}{2}\right)^n$ | $n^3$                        | $\lg^2 n$                       | $\lg\left(n!\right)$ | $2^{2^n}$             | $n^{1 / \lg n}$       |
>    | $\ln \ln n$                  | $\lg^* n$                    | $n ⋅ 2^n$                       | $n^{\lg \lg n}$      | $\ln n$               | $1$                   |
>    | $2^{\lg n}$                  | $\left(\lg n\right)^{\lg n}$ | $e^n$                           | $4^{\lg n}$          | $\left(n + 1\right)!$ | $\sqrt{\lg n}$        |
>    | $\lg^*\left(\lg n\right)$    | $2^{\sqrt{2 \lg n}}$         | *n*                             | $2^n$                | $n \lg n$             | $2^{2^{n + 1}}$       |
> 2. Give an example of a single nonnegative function *f*(*n*) such that for all functions $g_i\left(n\right)$
>    in part (a), *f*(*n*) is neither $O\left(g_i\left(n\right)\right)$ nor $Ω\left(g_i\left(n\right)\right)$.

*Skipped.*

##### 3-4 Asymptotic notation properties

> Let *f*(*n*) and *g*(*n*) be asymptotically positive functions. Prove or disprove each of the
> following conjectures.
>
> 1. *f*(*n*) = *O*(*g*(*n*)) implies *g*(*n*) = *O*(*f*(*n*)).
> 2. *f*(*n*) + *g*(*n*) = Θ(min(*f*(*n*), *g*(*n*))).
> 3. *f*(*n*) = *O*(*g*(*n*)) implies lg(*f*(*n*)) = *O*(lg(*g*(*n*))), where lg(*g*(*n*)) ≥ 1 and *f*(*n*) ≥ 1 for all
>    sufficiently large *n*.
> 4. *f*(*n*) = *O*(*g*(*n*)) implies $2^{f\left(n\right)} = O\left(2^{g\left(n\right)}\right)$.
> 5. *f*(*n*) = *O*($\left(f\left(n\right)\right)^2$).
> 6. *f*(*n*) = *O*(*g*(*n*)) implies *g*(*n*) = Ω(*f*(*n*)).
> 7. *f*(*n*) = Θ(*f*(*n* / 2)).
> 8. *f*(*n*) + *o*(*f*(*n*)) = Θ(*f*(*n*)).

*Too lazy to prove. Just list my guessing here.*

1. False.
2. False.
3. *Not sure.*
4. *Not sure.*
5. *Not sure.*
6. True.
7. False.
8. True.

##### 3-5 Variations on O and Ω

> Some authors define Ω in a slightly different way than we do; let’s use $\overset{∞}{Ω}$ (read “omega infinity”) for
> this alternative definition. We say that $f\left(n\right) = \overset{∞}{Ω}\left(g\left(n\right)\right)$ if there
> exists a positive constant *c* such that $f\left(n\right) ≥ c g\left(n\right) ≥ 0$ for infinitely many integers *n*.
>
> 1. Show that for any two functions *f*(*n*) and *g*(*n*) that are asymptotically nonnegative, either
>    $f \left(n\right) = O\left(g\left(n\right)\right)$ or
>    $f\left(n\right) = \overset{∞}{Ω}\left(g\left(n\right)\right)$ or both, whereas this is not true if we use $Ω$ in
>    place of $\overset{∞}{Ω}$.
> 2. Describe the potential advantages and disadvantages of using $\overset{∞}{Ω}$ instead of $Ω$ to characterize the
>    running times of programs.
>
> Some authors also define *O* in a slightly different manner; let’s use $O'$ for the alternative definition. We say
> that $f\left(n\right) = O'\left(g\left(n\right)\right)$ if and only if
> $\left|f\left(n\right)\right| = O\left(g\left(n\right)\right)$.
>
> 1. What happens to each direction of the “if and only if” in Theorem 3.1 if we substitute $O'$ for *O* but still use
>    $Ω$?
>
> Some authors define $\widetilde{O}$ (read “soft-oh”) to mean *O* with logarithmic factors ignored:
>
> $\widetilde{O}\left(g\left(n\right)\right)$ = { *f*(*n*) : there exist positive constants *c*, *k*, and $n_0$
> such that $0 ≤ f \left(n\right) ≤ c g\left(n\right) \lg^k\left(n\right)$ for all $n ≥ n_0$ }.
>
> 1. Define $\widetilde{Ω}$ and $\widetilde{Θ}$ in a similar manner. Prove the corresponding analog to Theorem 3.1.

*Skipped.*

##### 3-6 Iterated functions

> We can apply the iteration operator $^\ast$ used in the $\lg^\ast$ function to any monotonically increasing function
> *f*(*n*) over the reals. For a given constant $c ∈ ℝ$, we define the iterated function $f_c^*$ by
>
> $f_c^*\left(n\right) = \min \lbrace i ≥ 0 : f^{\left(i\right)}\left(n\right) ≤ c \rbrace$,
>
> which need not be well defined in all cases. In other words, the quantity $f_c^*\left(n\right)$ is the number of
> iterated applications of the function *f* required to reduce its argument down to *c* or less.
>
> For each of the following functions *f*(*n*) and constants *c*, give as tight a bound as possible on
> $f_c^*\left(n\right)$.

|          | *f*(*n*)     | *c* | $f_c^*\left(n\right)$ |
| -------- | ------------ | --- | --------------------- |
| ***a***. | *n* - 1      | 0   | ⌈*n*⌉                 |
| ***b***. | lg *n*       | 1   | *Don’t know*          |
| ***c***. | *n* / 2      | 1   | ⌈lg *n*⌉              |
| ***d***. | *n* / 2      | 2   | ⌈lg *n* - 1⌉          |
| ***e***. | $\sqrt{n}$   | 2   | ⌈lg lg *n*⌉           |
| ***f***. | $\sqrt{n}$   | 1   | ∞                     |
| ***g***. | $n^{1 / 3}$  | 2   | ⌈$\log_3 \lg n$⌉      |
| ***h***. | *n* / lg *n* | 2   | *Don’t know*          |

### 4 Divide-and-Conquer

#### 4.1 The maximum-subarray problem

##### 4.1-1

> What does *Find-Maximum-Subarray* return when all elements of *A* are negative?

An array containing the single maximum element of the original array.

##### 4.1-2

> Write pseudocode for the brute-force method of solving the maximum-subarray problem. Your procedure should run in
> Θ($n^2$) time.

*Find-Maximum-Subarray-Brute-Force*(*A*)

1. *max-left* = 0
2. *max-right* = 0
3. *max-sum* = -∞
4. **for** *i* = 1 **to** *A*.*Length*
5. &nbsp;&nbsp;&nbsp;&nbsp;*sum* = 0
6. &nbsp;&nbsp;&nbsp;&nbsp;**for** *j* = *i* **to** *A*.*Length*
7. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*sum* = *sum* + *A*[*j*]
8. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**if** *sum* > *max-sum*
9. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*max-left* = *i*
10. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*max-right* = *j*
11. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*max-sum* = *sum*
12. **return** (*max-left*, *max-right*, *max-sum*)

##### 4.1-3

> Implement both the brute-force and recursive algorithms for the maximum-subarray problem on your own computer. What
> problem size $n_0$ gives the crossover point at which the recursive algorithm beats the brute-force algorithm? Then,
> change the base case of the recursive algorithm to use the brute-force algorithm whenever the problem size is less
> than $n_0$. Does that change the crossover point?

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_4_divide_and_conquer/section_4_1_the_maximum_subarray_problem/mod.rs)
for recursive implementation.

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_4_divide_and_conquer/section_4_1_the_maximum_subarray_problem/exercises/exercise_4_1_3.rs)
for brute-force implementation.

*Skipped crossover point test for now.*

##### 4.1-4

> Suppose we change the definition of the maximum-subarray problem to allow the result to be an empty subarray, where
> the sum of the values of an empty subarray is 0. How would you change any of the algorithms that do not allow empty
> subarrays to permit an empty subarray to be the result?

Run the original algorithm first, if the maximum sum is negative, return an empty subarray.

##### 4.1-5

> Use the following ideas to develop a nonrecursive, linear-time algorithm for the maximum-subarray problem. Start at
> the left end of the array, and progress toward the right, keeping track of the maximum subarray seen so far. Knowing a
> maximum subarray of *A*[1‥*j*], extend the answer to find a maximum subarray ending at index *j* + 1 by using the
> following observation: a maximum subarray of *A*[1‥*j* + 1] is either a maximum subarray of *A*[1‥*j*] or a subarray
> *A*[*i*‥*j* + 1], for some 1 ≤ *i* ≤ *j* + 1. Determine a maximum subarray of the form *A*[*i*‥*j* + 1] in constant
> time based on knowing a maximum subarray ending at index *j*.

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_4_divide_and_conquer/section_4_1_the_maximum_subarray_problem/exercises/exercise_4_1_5.rs)
for implementation.

#### 4.2 Strassen’s algorithm for matrix multiplication

##### 4.2-1

> Use Strassen’s algorithm to compute the matrix product
>
> $\begin{pmatrix}1 & 3\\\\7 & 5\end{pmatrix}\begin{pmatrix}6 & 8\\\\4 & 2\end{pmatrix}$.
>
> Show your work.

*Skipped.*

##### 4.2-2

> Write pseudocode for Strassen’s algorithm.

*Skipped.*

##### 4.2-3

> How would you modify Strassen’s algorithm to multiply *n* × *n* matrices in which *n* is not an exact power of 2? Show
> that the resulting algorithm runs in time Θ($n^{\lg 7}$).

*Skipped.*

##### 4.2-4

> What is the largest *k* such that if you can multiply 3 × 3 matrices using *k* multiplications (not assuming
> commutativity of multiplication), then you can multiply *n* × *n* matrices in time o($n^{\lg 7}$)? What would the
> running time of this algorithm be?

*Skipped.*

##### 4.2-5

> V. Pan has discovered a way of multiplying 68 × 68 matrices using 132,464 multiplications, a way of multiplying
> 70 × 70 matrices using 143,640 multiplications, and a way of multiplying 72 × 72 matrices using 155,424
> multiplications. Which method yields the best asymptotic running time when used in a divide-and-conquer
> matrix-multiplication algorithm? How does it compare to Strassen’s algorithm?

*Skipped.*

##### 4.2-6

> How quickly can you multiply a *k* *n* × *n* matrix by an *n* × *k* *n* matrix, using Strassen’s algorithm as a
> subroutine? Answer the same question with the order of the input matrices reversed.

*Skipped.*

##### 4.2-7

> Show how to multiply the complex numbers *a* + *b* *i* and *c* + *d* *i* using only three multiplications of real
> numbers. The algorithm should take *a*, *b*, *c*, and *d* as input and produce the real component *a* *c* - *b* *d*
> and the imaginary component *a* *d* + *b* *c* separately.

Reference: (*a* + *b* *i*) × (*c* + *d* *i*) = *a* *c* - *b* *d* + (*a* *d* + *b* *c*) *i*.

Let *w* = (*a* + *b*) × (*c* - *d*), *x* = *a* × *d*, *y* = *b* × *c*, which uses three real number multiplications,
then the result can be calculated as (*w* + *x* - *y*) + (*x* + *y*) *i*.

#### 4.3 The substitution method for solving recurrences

##### 4.3-1

> Show that the solution of *T*(*n*) = *T*(*n* - 1) + *n* is *O*($n^2$).

*T*(*n*)\
= *T*(*n* - 1) + *n*\
≤ *c* $\left(n - 1\right)^2$ + *n*\
= *c* $n^2$ - 2 *c* *n* + *c* + *n*\
= *c* $n^2$ - (2 *c* - 1) *n* + *c*

Here we choose *c* = 1, we have

*c* $n^2$ - (2 *c* - 1) *n* + *c* = $n^2$ - *n* + 1.

If *n* ≥ 1, we have $n^2$ - *n* + 1 ≤ $n^2$, that is, *T*(*n*) ≤ *c* $n^2$, since *c* = 1.

##### 4.3-2

> Show that the solution of *T*(*n*) = *T*(⌈*n* / 2⌉) + 1 is *O*(lg *n*).

*T*(*n*)\
= *T*(⌈*n* / 2⌉) + 1\
≤ *c* lg ⌈*n* / 2⌉ + 1\
= *c* lg (⌈*n* / 2⌉ $2^{1 / c}$)\
< *c* lg ((*n* / 2 + 1) $2^{1 / c}$)\
= *c* lg ($2^{1 / c - 1}$ *n* + $2^{1 / c}$)

If we choose *c* = 2, we have

*c* lg ($2^{1 / c - 1}$ *n* + $2^{1 / c}$) = 2 lg ($2^{-1 / 2}$ *n* + $2^{1 / 2}$).

If *n* ≥ 2 $\sqrt{2}$ + 2, we have $2^{-1 / 2}$ *n* + $2^{1 / 2}$ ≤ *n*.

So for *c* = 2 and *n* ≥ 2 $\sqrt{2}$ + 2, we have *T*(*n*) < *c* lg ($2^{1 / c - 1}$ *n* + $2^{1 / c}$) ≤ *c* lg *n*.

##### 4.3-3

> We saw that the solution of *T*(*n*) = 2 *T*(⌊*n* / 2⌋) + *n* is *O*(*n* lg *n*). Show that the solution of this
> recurrence is also Ω(*n* lg *n*). Conclude that the solution is Θ(*n* lg *n*).

*T*(*n*)\
= 2 *T*(⌊*n* / 2⌋) + *n*\
≥ 2 *c* ⌊*n* / 2⌋ lg ⌊*n* / 2⌋ + *n*\
\> 2 *c* (*n* / 2 - 1) lg (*n* / 2 - 1) + *n*

*Skipped.*

##### 4.3-4

> Show that by making a different inductive hypothesis, we can overcome the difficulty with the boundary condition
> *T*(1) = 1 for recurrence (4.19) without adjusting the boundary conditions for the inductive proof.

*Skipped.*

##### 4.3-5

> Show that Θ(*n* lg *n*) is the solution to the “exact” recurrence (4.3) for merge sort.

*Skipped.*

##### 4.3-6

> Show that the solution to *T*(*n*) = 2 *T*(⌊*n* / 2⌋ + 17) + *n* is *O*(*n* lg *n*).

*T*(*n*)\
= 2 *T*(⌊*n* / 2⌋ + 17) + *n*\
≤ 2 *c* (⌊*n* / 2⌋ + 17) lg (⌊*n* / 2⌋ + 17) + *n*\
< 2 *c* ((*n* + 2) / 2 + 17) lg ((*n* + 2) / 2 + 17) + *n*

*Skipped.*

##### 4.3-7

> Using the master method in Section 4.5, you can show that the solution to the recurrence
> *T*(*n*) = 4 *T*(*n* / 3) + *n* is *T*(*n*) = Θ($n^{\log_3 4}$). Show that a substitution proof with the assumption
> *T*(*n*) ≤ *c* $n^{\log_3 4}$ fails. Then show how to subtract off a lower-order term to make a substitution proof
> work.

Suppose *T*(*n*) = *c* $n^{\log_3 4}$ - 3 *n*, we have:

*T*(*n*)\
= 4 *T*(*n* / 3) + *n*\
= 4 (*c* $\left(n / 3\right)^{\log_3 4}$ - 3 (*n* / 3)) + *n*\
= 4 (*c* $n^{\log_3 4}$ / 4 - *n*) + *n*\
= *c* $n^{\log_3 4}$ - 3 *n*.

That is exactly what we want.

##### 4.3-8

> Using the master method in Section 4.5, you can show that the solution to the recurrence
> *T*(*n*) = 4 *T*(*n* / 2) + *n* is *T*(*n*) = Θ($n^2$). Show that a substitution proof with the assumption
> *T*(*n*) ≤ *c* $n^2$ fails. Then show how to subtract off a lower-order term to make a substitution proof work.

Suppose *T*(*n*) = *c* $n^2$ - *n*, we have

*T*(*n*)\
= 4 (*c* $\left(n / 2\right)^2$ - *n* / 2) + *n*\
= 4 (*c* $n^2$ / 4 - *n* / 2) + *n*\
= *c* $n^2$ - 2 *n* + *n*\
= *c* $n^2$ - *n*.

That is exactly what we want.

##### 4.3-9

> Solve the recurrence *T*(*n*) = 3 *T*($\sqrt{n}$) + log *n* by making a change of variables. Your solution should be
> asymptotically tight. Do not worry about whether values are integral.

Let *m* = log *n*, we have *n* = $10^m$, so

*T*($10^m$)\
= 3 *T*($\sqrt{10^m}$) + log $10^m$\
= 3 *T*($10^{m / 2}$) + *m*.

Let *S*(*m*) = *T*($10^m$), we have:

*S*(*m*) = 3 *S*(*m* / 2) + *m*.

I guess *S*(*m*) = *c* $m^{\lg 3}$ - 2 *m*,

*S*(*m*)\
= 3 (*c* $(m / 2)^{\lg 3}$ - 2 (*m* / 2)) + *m*\
= 3 (*c* $m^{\lg 3}$ / 3 - *m*) + *m*\
= *c* $m^{\lg 3}$ - 3 *m* + *m*\
= *c* $m^{\lg 3}$ - 2 *m*.

So my guess is right.

*T*(*n*)
= *S*(log *n*)\
= *c* $(\log n)^{\lg 3}$ - 2 log *n*.

Notes:

Solving *T*(*n*) = *a* *T*(*n* / *b*) + *k* $n^p$: if *p* = $\log_b a$, *T*(*n*) = *k* $n^p \log_b n$ + *c* $n^p$,
otherwise *T*(*n*) = *c* $n^{\log_b a}$ + (*k* / (1 - *a* / $b^p$)) $n^p$.

#### 4.4 The recursion-tree method for solving recurrences

##### 4.4-1

> Use a recursion tree to determine a good asymptotic upper bound on the recurrence *T*(*n*) = 3 *T*(⌊*n* / 2⌋) + *n*.
> Use the substitution method to verify your answer.

*T*(*n*) ≤ *c* $n^{\lg 3}$ - 2 *n*.

Verification:

*T*(*n*)\
= 3 *T*(⌊*n* / 2⌋) + *n*\
≤ 3 (*c* $\left\lfloor{}n / 2\right\rfloor^{\lg 3}$ - 2 ⌊*n* / 2⌋) + *n*\
≤ 3 (*c* $\left(n / 2\right)^{\lg 3}$ - 2 (*n* / 2)) + *n*\
= 3 (*c* $n^{\lg 3}$ / 3 - *n*) + *n*\
= 3 *c* $n^{\lg 3}$ / 3 - 3 *n* + *n*\
= *c* $n^{\lg 3}$ - 2 *n*.

##### 4.4-2

> Use a recursion tree to determine a good asymptotic upper bound on the recurrence *T*(*n*) = *T*(*n* / 2) + $n^2$. Use
> the substitution method to verify your answer.

*T*(*n*) = *c* + (4 / 3) $n^2$.

Verification:

*T*(*n*)\
= *c* + (4 / 3) $\left(n / 2\right)^2$ + $n^2$\
= *c* + (1 / 3) $n^2$ + $n^2$\
= *c* + (4 / 3) $n^2$.

##### 4.4-3

> Use a recursion tree to determine a good asymptotic upper bound on the recurrence *T*(*n*) = 4 *T*(*n* / 2 + 2) + *n*.
> Use the substitution method to verify your answer.

*T*(*n*) = *c* $n^2$ - (8 *c* + 1) *n* + 16 *c* + 8 / 3.

Verification:

*T*(*n*)\
= 4 *T*(*n* / 2 + 2) + *n*\
= 4 (*c* $\left(n / 2 + 2\right)^2$ - (8 *c* + 1) (*n* / 2 + 2) + 16 *c* + 8 / 3) + *n*\
= 4 (*c* ($n^2$ / 4 + 2 *n* + 4) - (4 *c* *n* + 16 *c* + *n* / 2 + 2) + 16 *c* + 8 / 3) + *n*\
= 4 (*c* $n^2$ / 4 - (2 *c* + 1 / 2) *n* + 4 *c* + 2 / 3) + *n*\
= *c* $n^2$ - (8 *c* + 2) *n* + 16 *c* + 8 / 3 + *n*\
= *c* $n^2$ - (8 *c* + 1) *n* + 16 *c* + 8 / 3.

##### 4.4-4

> Use a recursion tree to determine a good asymptotic upper bound on the recurrence *T*(*n*) = 2 *T*(*n* - 1) + 1. Use
> the substitution method to verify your answer.

*T*(*n*) = *c* $2^n$ - 1

Verification:

*T*(*n*)\
= 2 *T*(*n* - 1) + 1\
= 2 (*c* $2^{n - 1}$ - 1) + 1\
= *c* $2^n$ - 2 + 1\
= *c* $2^n$ - 1.

##### 4.4-5

> Use a recursion tree to determine a good asymptotic upper bound on the recurrence
> *T*(*n*) = *T*(*n* - 1) + *T*(*n* / 2) + *n*. Use the substitution method to verify your answer.

*T*(*n*) = *O*($2^n$), and *T*(*n*) = Ω(*n* lg *n*).

*Skipped.*

##### 4.4-6

> Argue that the solution to the recurrence *T*(*n*) = *T*(*n* / 3) + *T*(2 *n* / 3) + *c* *n*, where *c* is a constant,
> is Ω(*n* lg *n*) by appealing to a recursion tree.

On each level of recursion whose depth is less than lg *n* / lg 3, the cost on this level is *c* *n*, so the cost is at
least *c* *n* lg *n* / lg 3, that is *T*(*n*) = Ω(*n* lg *n*).

##### 4.4-7

> Draw the recursion tree for *T*(*n*) = 4 *T*(⌊*n* / 2⌋) + *c* *n*, where *c* is a constant, and provide a tight
> asymptotic bound on its solution. Verify your bound by the substitution method.

*T*(*n*) ≥ *k* $n^2$ - (*c* - 4 *k*) *n* + 4 *k* - 4 *c* / 3.

Verification:

*T*(*n*)\
= 4 *T*(⌊*n* / 2⌋) + *c* *n*\
≥ 4 *T*(*n* / 2 - 1) + *c* *n*\
≥ 4 (*k* $(n / 2 - 1)^2$ - (*c* - 4 *k*) (*n* / 2 - 1) + 4 *k* - 4 *c* / 3) + *c* *n*\
= *k* $n^2$ - (*c* - 4 *k*) *n* + 4 *k* - 4 *c* / 3.

*T*(*n*) ≤ *k* $n^2$ - *c* *n*.

Verification:

*T*(*n*)\
= 4 *T*(⌊*n* / 2⌋) + *c* *n*\
≤ 4 *T*(*n* / 2) + *c* *n*\
≤ 4 (*k* $(n / 2)^2$ - *c* (*n* / 2)) + *c* *n*\
= *k* $n^2$ - *c* *n*.

So *T*(*n*) = Θ($n^2$).

##### 4.4-8

> Use a recursion tree to give an asymptotically tight solution to the recurrence
> *T*(*n*) = *T*(*n* - *a*) + *T*(*a*) + *c* *n*, where *a* ≥ 1 and *c* > 0 are constants.

*T*(*n*) = (*c* / (2 *a*)) $n^2$ + *k* *n* - *a* *c*.

Verification:

*T*(*n*)\
= *T*(*n* - *a*) + *T*(*a*) + *c* *n*\
= (*c* / (2 *a*)) $\left(n - a\right)^2$ + *k* (*n* - *a*) - *a* *c* + (*c* / (2 *a*)) $a^2$ + *k* *a* - *a* *c* + *c* *n*\
= (*c* / (2 *a*)) ($n^2$ - 2 *a* *n* + $a^2$) + *k* *n* - *a* *k* - 2 *a* *c* + *a* *c* / 2 + *k* *a* + *c* *n*\
= (*c* / (2 *a*)) $n^2$ - *c* *n* + *a* *c* / 2 + *k* *n* - 2 *a* *c* + *a* *c* / 2 + *c* *n*\
= (*c* / (2 *a*)) $n^2$ + *k* *n* - *a* *c*

##### 4.4-9

> Use a recursion tree to give an asymptotically tight solution to the recurrence
> *T*(*n*) = *T*(*α* *n*) + *T*((1 - *α*) *n*) + *c* *n*, where *α* is a constant in the range 0 < *α* < 1 and *c* > 0
> is also a constant.

Like exercise 4.4-6, we can prove *T*(*n*) = Ω(*n* lg *n*), and *T*(*n*) = *O*(*n* lg *n*), so *T*(*n*) = Θ(*n* lg *n*).

#### 4.5 The master method for solving recurrences

##### 4.5-1

> Use the master method to give tight asymptotic bounds for the following recurrences.
>
> 1. *T*(*n*) = 2 *T*(*n* / 4) + 1.
> 2. *T*(*n*) = 2 *T*(*n* / 4) + $\sqrt{n}$.
> 3. *T*(*n*) = 2 *T*(*n* / 4) + *n*.
> 4. *T*(*n*) = 2 *T*(*n* / 4) + $n^2$.

1. *T*(*n*) = Θ($\sqrt{n}$).
2. *T*(*n*) = Θ($\sqrt{n}$ lg *n*).
3. *T*(*n*) = Θ(*n*).
4. *T*(*n*) = Θ($n^2$).

##### 4.5-2

> Professor Caesar wishes to develop a matrix-multiplication algorithm that is asymptotically faster than Strassen’s
> algorithm. His algorithm will use the divide-and-conquer method, dividing each matrix into pieces of size
> *n* / 4 × *n* / 4, and the divide and combine steps together will take Θ($n^2$) time. He needs to determine how many
> subproblems his algorithm has to create in order to beat Strassen’s algorithm. If his algorithm creates a subproblems,
> then the recurrence for the running time *T*(*n*) becomes *T*(*n*) = *a* *T*(*n* / 4) + Θ($n^2$). What is the largest
> integer value of a for which Professor Caesar’s algorithm would be asymptotically faster than Strassen’s algorithm?

The answer is 48. Since $log_4 49$ = lg 7.

##### 4.5-3

> Use the master method to show that the solution to the binary-search recurrence *T*(*n*) = *T*(*n* / 2) + Θ(1) is
> *T*(*n*) = Θ(lg *n*). (See Exercise 2.3-5 for a description of binary search.)

Since Θ(1) = Θ($n^{\log_2 1}$), *T*(*n*) = Θ($n^{\log_2 1}$ lg *n*) = Θ(lg *n*).

##### 4.5-4

> Can the master method be applied to the recurrence *T*(*n*) = 4 *T*(*n* / 2) + $n^2$ lg *n*? Why or why not? Give an
> asymptotic upper bound for this recurrence.

The master method can not be applied to that recurrence, because $n^2$ lg *n* is asymptotically large than
$n^{\log_2 4} = n^2$, but it is not polynomially asymptotically large than $n^{\log_2 4}$.

*T*(*n*) = $n^2 \left(\lg^2 n + \lg n + c\right)$ / 2.

Verification:

*T*(*n*)\
= 4 *T*(*n* / 2) + $n^2$ lg *n*\
= 4 $(n / 2)^2 \left(\lg^2 (n / 2) + \lg (n / 2) + c\right)$ / 2 + $n^2$ lg *n*\
= 4 $(n / 2)^2 \left((\lg n - 1)^2 + \lg n - 1 + c\right)$ / 2 + $n^2$ lg *n*\
= 4 $(n / 2)^2 \left(\lg^2 n - 2 \lg n + 1 + \lg n - 1 + c\right)$ / 2 + $n^2$ lg *n*\
= $n^2 \left(\lg^2 n - \lg n + c\right)$ / 2 + $n^2$ lg *n*\
= $n^2 \left(\lg^2 n + \lg n + c\right)$ / 2.

##### 4.5-5 ★

> Consider the regularity condition *a* *f*(*n* / *b*) ≤ *c* *f*(*n*) for some constant *c* < 1, which is part of case 3
> of the master theorem. Give an example of constants *a* ≥ 1 and *b* > 1 and a function *f*(*n*) that satisfies all the
> conditions in case 3 of the master theorem except the regularity condition.

*Skipped.*

#### 4.6 Proof of the master theorem ★

##### 4.6-1 ★

> Give a simple and exact expression for $n_j$ in equation (4.27) for the case in which *b* is a positive integer
> instead of an arbitrary real number.

Theorem 3.4 and 3.5:

For any real number *x* ≥ 0 and integers *a*, *b* > 0:

- $\left\lceil\frac{\left\lceil x / a\right\rceil}{b}\right\rceil = \left\lceil\frac{x}{a b}\right\rceil$,
- $\left\lfloor\frac{\left\lfloor x / a\right\rfloor}{b}\right\rfloor = \left\lfloor\frac{x}{a b}\right\rfloor$.

$n_j$ = ⌈*n* / $b^j$⌉.

Proof by induction:

- If *j* = 0, $n_j$ = ⌈*n* / $b^j$⌉ = ⌈*n* / $b^0$⌉ = ⌈*n*⌉ = *n*, the claim holds.
- If *j* > 0, $n_j$ = ⌈$n_{j - 1}$ / *b*⌉ = ⌈⌈*n* / $b^{j - 1}$⌉ / *b*⌉, since both *b* and $b^{j - 1}$ are integers,
  ⌈⌈*n* / $b^{j - 1}$⌉ / *b*⌉ = ⌈*n* / $b^{j - 1}$ / *b*⌉ = ⌈*n* / $b^j$⌉. So $n_j$ = ⌈*n* / $b^j$⌉, the claim holds.

Notes:

In the book [Concrete Mathematics](https://en.wikipedia.org/wiki/Concrete_Mathematics), there is a theorem:

- Let *f*(*x*) be any continuous, monotonically increasing function with the property that

  - *f*(*x*) = integer ⇒ *x* = integer.

  Then we have

  - ⌊*f*(*x*)⌋ = ⌊*f*(⌊*x*⌋)⌋ and ⌈*f*(*x*)⌉ = ⌈*f*(⌈*x*⌉)⌉,

  whenever *f*(*x*), *f*(⌊*x*⌋), and *f*(⌈*x*⌉) are defined.

Proof:

*f*(⌊*x*⌋) - 1 < ⌊*f*(⌊*x*⌋)⌋ ≤ *f*(⌊*x*⌋)\
⇒ ⌊*f*(⌊*x*⌋)⌋ ≤ *f*(⌊*x*⌋) < ⌊*f*(⌊*x*⌋)⌋ + 1\
⇒ $f^{-1}\left(\left\lfloor f\left(\left\lfloor x\right\rfloor\right)\right\rfloor\right)$ ≤ $f^{-1}\left(f\left(\left\lfloor x\right\rfloor\right)\right)$ < $f^{-1}\left(\left\lfloor f\left(\left\lfloor x\right\rfloor\right)\right\rfloor + 1\right)$\
⇒ $f^{-1}\left(\left\lfloor f\left(\left\lfloor x\right\rfloor\right)\right\rfloor\right)$ ≤ ⌊*x*⌋ < $f^{-1}\left(\left\lfloor f\left(\left\lfloor x\right\rfloor\right)\right\rfloor + 1\right)$.

Since $\left\lfloor f\left(\left\lfloor x\right\rfloor\right)\right\rfloor + 1$ is an integer, and we also have
*f*(*x*) = integer ⇒ *x* = integer, we know that
$f^{-1}\left(\left\lfloor f\left(\left\lfloor x\right\rfloor\right)\right\rfloor + 1\right)$ is an integer. Because
⌊*x*⌋ < $f^{-1}\left(\left\lfloor f\left(\left\lfloor x\right\rfloor\right)\right\rfloor + 1\right)$, we have
*x* < $f^{-1}\left(\left\lfloor f\left(\left\lfloor x\right\rfloor\right)\right\rfloor + 1\right)$. So:

$f^{-1}\left(\left\lfloor f\left(\left\lfloor x\right\rfloor\right)\right\rfloor\right)$ ≤ ⌊*x*⌋ < $f^{-1}\left(\left\lfloor f\left(\left\lfloor x\right\rfloor\right)\right\rfloor + 1\right)$\
⇒ $f^{-1}\left(\left\lfloor f\left(\left\lfloor x\right\rfloor\right)\right\rfloor\right)$ ≤ *x* < $f^{-1}\left(\left\lfloor f\left(\left\lfloor x\right\rfloor\right)\right\rfloor + 1\right)$\
⇒ $f\left(f^{-1}\left(\left\lfloor f\left(\left\lfloor x\right\rfloor\right)\right\rfloor\right)\right)$ ≤ *f*(*x*) < $f\left(f^{-1}\left(\left\lfloor f\left(\left\lfloor x\right\rfloor\right)\right\rfloor + 1\right)\right)$\
⇒ ⌊*f*(⌊*x*⌋)⌋ ≤ *f*(*x*) < ⌊*f*(⌊*x*⌋)⌋ + 1\
⇒ *f*(*x*) = ⌊*f*(⌊*x*⌋)⌋.

The same method can be applied to proving ⌈*f*(*x*)⌉ = ⌈*f*(⌈*x*⌉)⌉.

##### 4.6-2 ★

> Show that if *f*(*n*) = Θ($n^{\log_b a} \lg^k n$), where *k* ≥ 0, then the master recurrence has solution
> *T*(*n*) = Θ($n^{\log_b a} \lg^{k + 1} n$). For simplicity, confine your analysis to exact powers of *b*.

*T*(*n*)\
= Θ($n^{\log_b a}$) + $∑_{j = 0}^{\log_b n - 1} a^j f(n / b^j)$\
= Θ($n^{\log_b a}$) + $∑_{j = 0}^{\log_b n - 1} a^j Θ\left(\left(n / b^j\right)^{\log_b a} \lg^k \left(n / b^j\right)\right)$\
= Θ($n^{\log_b a}$) + $∑_{j = 0}^{\log_b n - 1} Θ\left(a^j \left(n / b^j\right)^{\log_b a} \lg^k \left(n / b^j\right)\right)$\
= Θ($n^{\log_b a}$) + $∑_{j = 0}^{\log_b n - 1} Θ\left(n^{\log_b a} \left(\lg n - \lg \left(b^j\right)\right)^k\right)$\
= Θ($n^{\log_b a}$) + $∑_{j = 0}^{\log_b n - 1} Θ\left(n^{\log_b a} \left(\lg n - j \lg b\right)^k\right)$\
= Θ($n^{\log_b a}$) + $∑_{j = 0}^{\log_b n - 1} Θ\left(n^{\log_b a} \lg^k n\right)$\
= Θ($n^{\log_b a}$) + $n^{\log_b a} Θ\left(\left(\log_b n - 1\right)\lg^k n\right)$\
= Θ($n^{\log_b a}$) + $n^{\log_b a} Θ\left(\log_b n \lg^k n - \lg^k n\right)$\
= Θ($n^{\log_b a}$) + $n^{\log_b a} Θ\left(\lg^{k + 1} n\right)$\
= Θ($n^{\log_b a} \lg^{k + 1} n$).

##### 4.6-3 ★

> Show that case 3 of the master theorem is overstated, in the sense that the regularity condition
> *a* *f*(*n* / *b*) ≤ *c* *f*(*n*) for some constant *c* < 1 implies that there exists a constant *ϵ* > 0 such that
> *f*(*n*) = Ω($n^{\log_b a + ϵ}$).

Let *ϵ* = -$\log_b c$, I guess *f*(*n*) = Ω($n^{\log_b a - \log_b c}$).

*f*(*n*)\
≥ (*a* / *c*) *f*(*n* / *b*)\
= (*a* / *c*) Ω($\left(n / b\right)^{\log_b a - \log_b c}$)\
= (*a* / *c*) Ω($n^{\log_b a - \log_b c} / \left(a / c\right)$)\
= Ω($n^{\log_b a - \log_b c}$).

#### 4.X Problems

##### 4-1 Recurrence examples

> Give asymptotic upper and lower bounds for *T*(*n*) in each of the following recurrences. Assume that *T*(*n*) is
> constant for *n* ≤ 2. Make your bounds as tight as possible, and justify your answers.
>
> 1. *T*(*n*) = 2 *T*(*n* / 2) + $n^4$.
> 2. *T*(*n*) = *T*(7 *n* / 10) + *n*.
> 3. *T*(*n*) = 16 *T*(*n* / 4) + $n^2$.
> 4. *T*(*n*) = 7 *T*(*n* / 3) + $n^2$.
> 5. *T*(*n*) = 7 *T*(*n* / 2) + $n^2$.
> 6. *T*(*n*) = 2 *T*(*n* / 4) + $\sqrt{n}$
> 7. *T*(*n*) = *T*(*n* - 2) + $n^2$.

1. *T*(*n*) = *c* *n* + (8 / 7) $n^4$.
2. *T*(*n*) = (10 / 3) *n* + *c*.
3. *T*(*n*) = $n^2 \log_4 n$ + *c* $n^2$.
4. *T*(*n*) = (9 / 2) $n^2$ + *c* $n^{\log_3 7}$.
5. *T*(*n*) = *c* $n^{\lg 7}$ - (4 / 3) $n^2$.
6. *T*(*n*) = $\sqrt{n} \log_4 n$ + *c* $\sqrt{n}$.
7. *T*(*n*) = $n^3$ / 6 + $n^2$ / 2 + *n* / 3 + *c*.

##### 4-2 Parameter-passing costs

> Throughout this book, we assume that parameter passing during procedure calls takes constant time, even if an
> *N*-element array is being passed. This assumption is valid in most systems because a pointer to the array is passed,
> not the array itself. This problem examines the implications of three parameter-passing strategies:
>
> 1) An array is passed by pointer. Time = Θ(1).
> 2) An array is passed by copying. Time = Θ(*N*), where *N* is the size of the array.
> 3) An array is passed by copying only the subrange that might be accessed by the called procedure.
>    Time = Θ(*q* - *p* + 1) if the subarray *A*[*p*‥*q*] is passed.
>
> 1. Consider the recursive binary search algorithm for finding a number in a sorted array (see Exercise 2.3-5). Give
> recurrences for the worst-case running times of binary search when arrays are passed using each of the three methods
> above, and give good upper bounds on the solutions of the recurrences. Let *N* be the size of the original problem and
> *n* be the size of a subproblem.
> 2. Redo part (a) for the Merge-Sort algorithm from Section 2.3.1.

1. Binary search algorithm
   1. By pointer: *T*(*n*) = *T*(*n* / 2) + Θ(1).

      *T*(*N*) = Θ(lg *N*).
   2. By copying: *T*(*n*) = *T*(*n* / 2) + Θ(*N*).

      *T*(*N*) = Θ(*N* lg *N*).
   3. By copying subrange: *T*(*n*) = *T*(*n* / 2) + Θ(*n*).

      *T*(*N*) = Θ(*N*).
2. Merge sort algorithm
   1. By pointer: *T*(*n*) = 2 *T*(*n* / 2) + Θ(*n*).

      *T*(*N*) = Θ(*N* lg *N*).
   2. By copying: *T*(*n*) = 2 *T*(*n* / 2) + Θ(*n*) + Θ(N*).

      *T*(*n*)\
      = Θ(*n*) + $∑_{j = 0}^{\lg n - 1} Θ\left(2^j (n / 2^j)\right)$ + $∑_{j = 0}^{\lg n - 1} Θ\left(2^j N\right)$\
      = Θ(*n*) + Θ(*n* lg *n*) + Θ(*N* *n*)

      *T*(*N*) = Θ($N^2$).
   3. By copying subrange: *T*(*n*) = 2 *T*(*n* / 2) + Θ(*n*), *T*(*N*) = Θ(*N* lg *N*).

##### 4-3 More recurrence examples

> Give asymptotic upper and lower bounds for *T*(*n*) in each of the following recurrences. Assume that *T*(*n*) is
> constant for sufficiently small *n*. Make your bounds as tight as possible, and justify your answers.
>
> 1. *T*(*n*) = 4 *T*(*n* / 3) + *n* lg *n*.
> 2. *T*(*n*) = 3 *T*(*n* / 3) + *n* / lg *n*.
> 3. *T*(*n*) = 4 *T*(*n* / 2) + $n^2 \sqrt{n}$.
> 4. *T*(*n*) = 3 *T*(*n* / 3 - 2) + *n* / 2.
> 5. *T*(*n*) = 2 *T*(*n* / 2) + *n* / lg n.
> 6. *T*(*n*) = *T*(*n* / 2) + *T*(*n* / 4) + *T*(*n* / 8) + *n*.
> 7. *T*(*n*) = *T*(*n* - 1) + 1 / *n*.
> 8. *T*(*n*) = *T*(*n* - 1) + lg *n*.
> 9. *T*(*n*) = *T*(*n* - 2) + 1 / lg *n*.
> 10. *T*(*n*) = $\sqrt{n}$ *T*($\sqrt{n}$) + *n*

1. *T*(*n*) = *c* $n^{\log_3 4}$ - 3 *n* lg *n* - 12 *n* lg 3.
2. *T*(*n*) = Θ(*n*), according to exercise 4.6-2.
3. *T*(*n*) = (2 + $\sqrt{2}$) $n^{5 / 2}$ + *c* $n^2$.
4. *T*(*n*) = (1 / 2) *n* $\log_3 \left(n + 3\right)$ + *c* *n* + (3 / 2) $\log_3 \left(n + 3\right)$ + 3 *c* + 3 / 4.
5. *T*(*n*) = Θ(*n*), according to exercise 4.6-2.
6. *T*(*n*) = 8 *n*.
7. *T*(*n*) = *c* + $∑_{j = 2}^n \left(1 / j\right)$ = Θ(lg *n*).
8. *T*(*n*) = *c* + $∑_{j = 2}^n \lg n$ = *c* + $\lg ∏_{j = 2}^n n$ = *c* + lg *n*! = Θ(*n* lg *n*).
9. *Skipped*.
10. *T*(*n*) = *n* lg lg *n* + *c* *n*.

##### 4-4 Fibonacci numbers

> This problem develops properties of the Fibonacci numbers, which are defined by recurrence (3.22). We shall use the
> technique of generating functions to solve the Fibonacci recurrence. Define the ***generating function*** (or
> ***formal power series***) ℱ as
>
> $\begin{aligned}
> ℱ\left(z\right) &= \displaystyle ∑_{i = 0}^∞ F_i z^i\\\\
> &= 0 + z + z^2 + 2 z^3 + 3 z^4 + 5 z^5 + 8 z^6 + 13 z^7 + 21 z^8 + ⋯,
> \end{aligned}$
>
> where $F_i$ is the *i*th Fibonacci number.
>
> 1. Show that ℱ(*z*) = *z* + *z* ℱ(*z*) + $z^2$ ℱ(*z*).
> 2. Show that
>
>    $\begin{aligned}
>    ℱ\left(z\right) &= \frac{z}{1 - z - z^2}\\\\
>    &= \frac{z}{\left(1 - ϕ z\right)\left(1 - \hat{ϕ} z\right)}\\\\
>    &= \frac{1}{\sqrt{5}}\left(\frac{1}{1 - ϕ z} - \frac{1}{1 - \hat{ϕ} z}\right),
>    \end{aligned}$
>
>    where
>
>    $ϕ$ = $\dfrac{1 + \sqrt{5}}{2}$ = 1.61803…
>
>    and
>
>    $\hat{ϕ}$ = $\dfrac{1 - \sqrt{5}}{2}$ = - 1.61803… .
> 3. Show that
>
>    ℱ(*z*) = $\displaystyle ∑_{i = 0}^∞ \frac{1}{\sqrt{5}}\left(ϕ^i - \hat{ϕ}^i\right) z^i$.
> 4. Use part (c) to prove that $F_i = ϕ^i / \sqrt{5}$ for *i* > 0, rounded to the nearest integer. (*Hint:* Observe
>    that |$\hat{ϕ}$| < 1.)

1. By definition:

   $\begin{aligned}
   z + z ℱ\left(z\right) + z^2 ℱ\left(z\right) &= z + z ∑_{i = 0}^∞ F_i z^i + z^2 ∑_{i = 0}^∞ F_i z^i\\\\
   &= z + ∑_{i = 0}^∞ F_i z^{i + 1} + ∑_{i = 0}^∞ F_i z^{i + 2}\\\\
   &= z + ∑_{i = 1}^∞ F_{i - 1} z^i + ∑_{i = 2}^∞ F_{i - 2} z^i\\\\
   &= z + \left(F_0 z^1 + ∑_{i = 2}^∞ F_{i - 1} z^i\right) + ∑_{i = 2}^∞ F_{i - 2} z^i\\\\
   &= z + F_0 z^1 + \left(∑_{i = 2}^∞ F_{i - 1} z^i + ∑_{i = 2}^∞ F_{i - 2} z^i\right)\\\\
   &= F_1 z^1 + F_0 z^0 + ∑_{i = 2}^∞ F_i z^i\\\\
   &= F_0 z^0 + F_1 z^1 + ∑_{i = 2}^∞ F_i z^i\\\\
   &= ∑_{i = 0}^∞ F_i z^i\\\\
   &= ℱ\left(z\right).
   \end{aligned}$
2. ℱ(*z*) = *z* + *z* ℱ(*z*) + $z^2$ ℱ(*z*)\
   ⇒ ℱ(*z*) - *z* ℱ(*z*) - $z^2$ ℱ(*z*) = *z*\
   ⇒ ℱ(*z*) (1 - *z* - $z^2$) = *z*\
   ⇒ ℱ(*z*) = *z* / (1 - *z* - $z^2$).

   *z* / ((1 - *ϕ* *z*) (1 - $\hat{ϕ}$ *z*))\
   = *z* / (1 - (*ϕ* + $\hat{ϕ}$) *z* + *ϕ* $\hat{ϕ} z^2$)\
   = *z* / (1 - *z* - $z^2$)\
   = ℱ(*z*).

   $\frac{1}{\sqrt{5}} \left(\frac{1}{1 - ϕ z} - \frac{1}{1 - \hat{ϕ} z}\right)$\
   = $\frac{1}{\sqrt{5}} \frac{\left(1 - \hat{ϕ} z\right) - \left(1 - ϕ z\right)}{\left(1 - ϕ z\right) \left(1 - \hat{ϕ} z\right)}$\
   = $\frac{1}{\sqrt{5}} \frac{\left(ϕ - \hat{ϕ}\right) z}{\left(1 - ϕ z\right) \left(1 - \hat{ϕ} z\right)}$\
   = $\frac{1}{\sqrt{5}} \frac{\sqrt{5} z}{\left(1 - ϕ z\right) \left(1 - \hat{ϕ} z\right)}$\
   = $\frac{z}{\left(1 - ϕ z\right) \left(1 - \hat{ϕ} z\right)}$\
   = ℱ(*z*).

   An interesting discovery: if we let *z* = 1, we have ℱ(1) = 1 / (1 - 1 - $1^2$) = -1. Also, according to the
   definition of ℱ, we have: $ℱ\left(1\right) = ∑_{i = 0}^∞ F_i 1^i = ∑_{i = 0}^∞ F_i$.

   So we have $∑_{i = 0}^∞ F_i$ = 0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + … = -1, WTF?
3. $∑_{i = 0}^∞ \frac{1}{\sqrt{5}}\left(ϕ^i - \hat{ϕ}^i\right) z^i$\
   = $\frac{1}{\sqrt{5}} ∑_{i = 0}^∞ \left(ϕ^i - \hat{ϕ}^i\right) z^i$\
   = $\frac{1}{\sqrt{5}} \left(∑_{i = 0}^∞ \left(ϕ z\right)^i - ∑_{i = 0}^∞ \left(\hat{ϕ} z\right)^i\right)$\
   = $\frac{1}{\sqrt{5}} \left(\frac{1}{1 - ϕ z} - \frac{1}{1 - \hat{ϕ} z}\right)$\
   = ℱ(*z*).
4. $F_i = \frac{1}{\sqrt{5}}\left(ϕ^i - \hat{ϕ}^i\right) = ϕ^i / \sqrt{5} - \hat{ϕ}^i / \sqrt{5}$\
   ⇒ $F_i - ϕ^i / \sqrt{5} = - \hat{ϕ}^i / \sqrt{5}$.

   Since $\left|- \hat{ϕ}^i / \sqrt{5}\right|$ < 0.5, and $F_i$ is an integer, $F_i = ϕ^i / \sqrt{5}$, rounded to the
   nearest integer.

##### 4-5 Chip testing

> Professor Diogenes has *n* supposedly identical integrated-circuit chips that in principle are capable of testing each
> other. The professor’s test jig accommodates two chips at a time. When the jig is loaded, each chip tests the other
> and reports whether it is good or bad. A good chip always reports accurately whether the other chip is good or bad,
> but the professor cannot trust the answer of a bad chip. Thus, the four possible outcomes of a test are as follows:
>
> | Chip *A* says | Chip *B* says | Conclusion                     |
> | ------------- | ------------- | ------------------------------ |
> | *B* is good   | *A* is good   | both are good, or both are bad |
> | *B* is good   | *A* is bad    | at least one is bad            |
> | *B* is bad    | *A* is good   | at least one is bad            |
> | *B* is bad    | *A* is bad    | at least one is bad            |
>
> 1. Show that if at least *n* / 2 chips are bad, the professor cannot necessarily determine which chips are good using
>    any strategy based on this kind of pairwise test. Assume that the bad chips can conspire to fool the professor.
> 2. Consider the problem of finding a single good chip from among *n* chips, assuming that more than *n* / 2 of the
>    chips are good. Show that ⌊*n* / 2⌋ pairwise tests are sufficient to reduce the problem to one of nearly half the
>    size.
> 3. Show that the good chips can be identified with Θ(*n*) pairwise tests, assuming that more than *n* / 2 of the chips
>    are good. Give and solve the recurrence that describes the number of tests.

1. If there are at least *n* / 2 chips are bad, there must exist same number of bad chips from good chips, and the bad
   chips can simulate whatever the behavior the good chips have, so it is not possible to distinguish bad chips from
   good chips.
2. Generalize the original problem to this:

   Assume there are no less good chip than bad chips:

   - If the number of good chips is greater than the number of bad chips, find a good chip.
   - If the number of good chips is greater than or equal to the number of bad chips, find a good chip or say the number
     of good chips equal to the number of bad chips.
   - Otherwise, the result is undefined.

   Solution:

   - Base case: If there is zero chip, we say that the number of good chips equal to the number of bad chips.
   - Inductive cases:
     - If the number of chips is even, we group them into pairs, then in each pair, we test each chip with the other
       chip. If the chips in one pair both say the other one is a good chip, we throw away any one chip in this pair;
       otherwise, we throw away both chips. Then we will be left with at most half of the original chips. And since chip
       pairs that do not say each other is good ether have one bad chip or have two bad chips, throwing them away does
       not change the fact that good chips are not less than bad chips. The remaining chip pairs are either both good
       chips or bad chips, after throwing away one chip in every those pairs, we have reduced the size of the problem to
       at most half of the original problem size.
     - If the number of chips is odd, we know that the number of good chip must be greater than the number of bad chips,
       since there can not be the same number of good chips and bad chips. We randomly remove one chip from the chips,
       and we will be left with even number of chips, in which good chips are no less than bad chips. We process the
       remaining chips with the method used in the even number case. After the remaining chips being processed, either
       we get a good chip, or we are told that the number of good chips are the same as the number of bad chips, which
       means the chip we removed is a good chip. Either way, we can get a good chip.

   The solution to the generalized problem applies to the original problem.
3. With the solution above, we can find one good chip in number *T*(*n*) ≤ *T*(*n* / 2) + Θ(*n*) pair tests. According
   to the master theorem, we have *T*(*n*) = *O*(*n*). After we found one good we can identify all good chips with that
   good chip in Θ(*n*) time, so the total number of pairwise tests equals to *O*(*n*) + Θ(*n*) = Θ(*n*).

The solution is implemented [here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_4_divide_and_conquer/problems/problem_4_5_chip_testing.rs).

##### 4-6 Monge arrays

> An *m* × *n* array *A* of real numbers is a ***Monge array*** if for all *i*, *j*, *k*, and *l* such that
> 1 ≤ *i* < *k* ≤ *m* and 1 ≤ *j* < *l* ≤ *n*, we have
>
> *A*[*i*, *j*] + *A*[*k*, *l*] ≤ *A*[*i*, *l*] + *A*[*k*, *j*].
>
> In other words, whenever we pick two rows and two columns of a Monge array and consider the four elements at the
> intersections of the rows and the columns, the sum of the upper-left and lower-right elements is less than or equal to
> the sum of the lower-left and upper-right elements. For example, the following array is Monge:
>
> |    |    |    |    |    |
> | -- | -- | -- | -- | -- |
> | 10 | 17 | 13 | 28 | 23 |
> | 17 | 22 | 16 | 29 | 23 |
> | 24 | 28 | 22 | 34 | 24 |
> | 11 | 13 | 6  | 17 | 7  |
> | 45 | 44 | 32 | 37 | 23 |
> | 36 | 33 | 19 | 21 | 6  |
> | 75 | 66 | 51 | 53 | 34 |
>
> 1. Prove that an array is Monge if and only if for all *i* = 1, 2, …, *m* - 1 and *j* = 1, 2, …, *n* - 1, we have
>    *A*[*i*, *j*] + *A*[*i* + 1, *j* + 1] ≤ *A*[*i*, *j* + 1] + *A*[*i* + 1, *j*].
>
>    (*Hint:* For the “if” part, use induction separately on rows and columns.)
>
> 2. The following array is not Monge. Change one element in order to make it Monge. (*Hint:* Use part (a).)
>
>    |    |    |    |    |
>    | -- | -- | -- | -- |
>    | 37 | 23 | 22 | 32 |
>    | 21 | 6  | 7  | 10 |
>    | 53 | 34 | 30 | 31 |
>    | 32 | 13 | 9  | 6  |
>    | 43 | 21 | 15 | 8  |
>
> 3. Let *f*(*i*) be the index of the column containing the leftmost minimum element of row *i*. Prove that
>    *f*(1) ≤ *f*(2) ≤ ⋯ ≤ *f*(*m*) for any *m* × *n* Monge array.
> 4. Here is a description of a divide-and-conquer algorithm that computes the leftmost minimum element in each row of
>    an *m* × *n* Monge array *A*:
>
>    - Construct a submatrix *A*′ of *A* consisting of the even-numbered rows of *A*. Recursively determine the leftmost
>      minimum for each row of *A*′. Then compute the leftmost minimum in the odd-numbered rows of *A*.
>
>    Explain how to compute the leftmost minimum in the odd-numbered rows of *A* (given that the leftmost minimum of the
>    even-numbered rows is known) in *O*(*m* + *n*) time.
> 5. Write the recurrence describing the running time of the algorithm described in part (d). Show that its solution is
>    *O*(*m* + *n* log *m*).

1. Proof:

   - The “only if” part is trivial.
   - The “if” part:
     - First, we prove that: for all *i*, *j*, and *l* such that 1 ≤ *i* < *m* and 1 ≤ *j* < *l* ≤ *n*, we have
       *A*[*i*, *j*] + *A*[*i* + 1, *l*] ≤ *A*[*i*, *l*] + *A*[*i* + 1, *j*].

       Proof by induction:

       - Base case: Trivially, *A*[*i*, *j*] + *A*[*i* + 1, *j* + 1] ≤ *A*[*i*, *j* + 1] + *A*[*i* + 1, *j*].
       - Inductive case: by induction, we have
         *A*[*i*, *j*] + *A*[*i* + 1, *l* - 1] ≤ *A*[*i*, *l* - 1] + *A*[*i* + 1, *j*]. Since
         *A*[*i*, *l* - 1] + *A*[*i* + 1, *l*] ≤ *A*[*i*, *l*] + *A*[*i* + 1, *l* - 1], we have:

         (*A*[*i*, *j*] + *A*[*i* + 1, *l* - 1]) + (*A*[*i*, *l* - 1] + *A*[*i* + 1, *l*]) ≤ (*A*[*i*, *l* - 1] + *A*[*i* + 1, *j*]) + (*A*[*i*, *l*] + *A*[*i* + 1, *l* - 1])\
         ⇒ (*A*[*i*, *j*] + ~~*A*[*i* + 1, *l* - 1]~~) + (~~*A*[*i*, *l* - 1]~~ + *A*[*i* + 1, *l*]) ≤ (~~*A*[*i*, *l* - 1]~~ + *A*[*i* + 1, *j*]) + (*A*[*i*, *l*] + ~~*A*[*i* + 1, *l* - 1]~~)\
         ⇒ *A*[*i*, *j*] + *A*[*i* + 1, *l*] ≤ *A*[*i* + 1, *j*] + *A*[*i*, *l*]\
         ⇒ *A*[*i*, *j*] + *A*[*i* + 1, *l*] ≤ *A*[*i*, *l*] + *A*[*i* + 1, *j*].
     - Second, we prove the original claim by induction.
       - Base case: according to the first step, we have: for all *i*, *j*, and *l* such that 1 ≤ *i* < *m* and
         1 ≤ *j* < *l* ≤ *n*, we have *A*[*i*, *j*] + *A*[*i* + 1, *l*] ≤ *A*[*i*, *l*] + *A*[*i* + 1, *j*].
       - Inductive case: by induction, *A*[*i*, *j*] + *A*[*k* - 1, *l*] ≤ *A*[*i*, *l*] + *A*[*k* - 1, *j*].
         Since *A*[*k* - 1, *j*] + *A*[*k*, *l*] ≤ *A*[*k* - 1, *l*] + *A*[*k*, *j*], we have:

         (*A*[*i*, *j*] + *A*[*k* - 1, *l*]) + (*A*[*k* - 1, *j*] + *A*[*k*, *l*]) ≤ (*A*[*i*, *l*] + *A*[*k* - 1, *j*]) + (*A*[*k* - 1, *l*] + *A*[*k*, *j*])\
         ⇒ (*A*[*i*, *j*] + ~~*A*[*k* - 1, *l*]~~) + (~~*A*[*k* - 1, *j*]~~ + *A*[*k*, *l*]) ≤ (*A*[*i*, *l*] + ~~*A*[*k* - 1, *j*]~~) + (~~*A*[*k* - 1, *l*]~~ + *A*[*k*, *j*])\
         ⇒ *A*[*i*, *j*] + *A*[*k*, *l*] ≤ *A*[*i*, *l*] + *A*[*k*, *j*]
2. Result:

   |     |     |        |     |
   | --- | --- | ------ | --- |
   | 37  | 23  | **24** | 32  |
   | 21  | 6   | 7      | 10  |
   | 53  | 34  | 30     | 31  |
   | 32  | 13  | 9      | 6   |
   | 43  | 21  | 15     | 8   |
3. Proof by contradiction:

   Assume for some *i*, *f*(*i*) > *f*(*i* + 1), let *f*(*i*) = *j*, and *f*(*i* + 1) = *l*. Since *f*(*i*) is the
   leftmost minimum element of row *i*, and *f*(*i* + 1) is the leftmost minimum element of row *i* + 1, we have

   *A*[*i*, *l*] > *A*[*i*, *j*], and *A*[*i* + 1, *j*] > *A*[*i* + 1, *l*]\
   ⇒ *A*[*i*, *l*] + *A*[*i* + 1, *j*] > *A*[*i*, *j*] + *A*[*i* + 1, *l*].

   That violates the condition of Monge array, so our assumption is wrong. That proves the claim is right.
4. If *f*(*i* - 1) = *j*, and *f*(*i* + 1) = *l*, *j* ≤ *f*(*i*) ≤ *l*.

   The time for computing the leftmost minimal element of odd row *i* is Θ(*f*(*i* + 1) - *f*(*i* - 1) + 1).

   - If the number of rows is even, the time for computing the leftmost minimal element of all odd rows is

     Θ(*f*(2) + $∑_{i = 1}^{m / 2 - 1} \left(f\left(2 i + 2\right) - f\left(2 i\right) + 1\right)$)\
     = Θ(*f*(2) + (*f*(*m*) - *f*(2) + *m* / 2 - 1))\
     = Θ(*f*(*m*) + *m* / 2 - 1)\
     = *O*(*n* + *m* / 2 - 1)\
     = *O*(*n* + *m*)
   - If the number of rows is odd, the time for computing the leftmost minimal element of all odd rows is:

     Θ(*f*(2) + $∑_{i = 1}^{\left(m - 3\right) / 2} \left(f\left(2 i + 2\right) - f\left(2 i\right) + 1\right)$ + (*n* - *f*(*m* - 1) + 1))\
     = Θ(*f*(2) + (*f*(*m* - 1) - *f*(2) + (*m* - 3) / 2) + (*n* - *f*(*m* - 1) + 1))\
     = Θ((*m* - 3) / 2 + *n* + 1)\
     = Θ(*m* / 2 + *n* - 1 / 2)\
     = *O*(*m* + *n*)

   So the time cost for computing the leftmost minimum in the odd-numbered rows is *O*(*m* + *n*).
5. *T*(*m*, *n*) = *T*(*m* / 2, *n*) + *O*(*m* + *n*).

   *T*(*m*, *n*)\
   = Θ(1) + *O*($∑_{i=0}^{\lg m - 1} \left(m / \left(2^i\right) + n\right)$)\
   = Θ(1) + *O*($∑_{i=0}^{\lg m - 1} \left(m / \left(2^i\right)\right) + ∑_{i=0}^{\lg m - 1} n$)\
   = Θ(1) + *O*(*m* $∑_{i=0}^{\lg m - 1} \left(1 / 2\right)^i + ∑_{i=0}^{\lg m - 1} n$)\
   = Θ(1) + *O*(*m* (1 - $\left(1 / 2\right)^{\lg m}$) / (1 - 1 / 2) + *n* lg *m*)\
   = Θ(1) + *O*(2 *m* (1 - (1 / m)) + *n* lg *m*)\
   = Θ(1) + *O*(2 *m* - 2 + *n* lg *m*)\
   = *O*(*m* + *n* lg *m*)

### 5 Probabilistic Analysis and Randomized Algorithms

#### 5.1 The hiring problem

##### 5.1-1

> Show that the assumption that we are always able to determine which candidate is best, in line 4 of procedure
> *Hire-Assistant*, implies that we know a total order on the ranks of the candidates.

We can prove it by proving its contrapositive:

- If the ranks of the candidates don’t form a total order, there exist a set of candidates in which we are not able to
  determine which candidate is best.

Proof:

- Total relation is violated: If there exist two candidates that we can not compare them, then we can not decide which
  one is best.
- Reflexive is violated: *Skipped.*
- Antisymmetric is violated: If candidate *a* is better than or equal to candidate *b*, and candidate *b* is better than
  or equal to candidate *a*, but they are not the same people, we can not decide which one is the best.
- Transitive is violated: If candidate *a* is better than or equal to candidate *b*, and candidate *b* is better than
  or equal to candidate *c*, but *a* is not better than or equal to candidate *c*, we can not decide which one is best.

##### 5.1-2 ★

> Describe an implementation of the procedure *Random*(*a*, *b*) that only makes calls to *Random*(0, 1). What is the
> expected running time of your procedure, as a function of *a* and *b*?

The procedure is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_5_probabilistic_analysis_and_randomized_algorithms/section_5_1_the_hiring_problem/exercises/exercise_5_1_2.rs).

let *n* = ⌈lg (*b* - *a* + 1)⌉ be the number of bits need to generate.

After generating *n* bits of number we are in a space of $2^n$ numbers. But the space we need to generate is of size
*b* - *a* + 1. We have the possibility of *p* = (*b* - *a* + 1) / $2^n$ to get a usable random number, and
possibility of 1 - *p* to generate the number again.

Let *k* = Θ(*n*) be the time needed to generate an *n* bit random number.

*T*(*a*, *b*) = *p* *k* + (1 - *p*) (*k* + *T*(*a*, *b*)).\
⇒ *T*(*a*, *b*) = *p* *k* + (1 - *p*) *k* + (1 - *p*) *T*(*a*, *b*).\
⇒ *T*(*a*, *b*) = *k* + (1 - *p*) *T*(*a*, *b*).\
⇒ *T*(*a*, *b*) = *k* / (1 - (1 - *p*)).\
⇒ *T*(*a*, *b*) = *k* / *p*.\
⇒ *T*(*a*, *b*) = Θ(*n*) / ((*b* - *a* + 1) / $2^n$).\
⇒ *T*(*a*, *b*) = Θ(*n*) $2^{\left\lceil\lg \left(b - a + 1\right)\right\rceil}$ / (*b* - *a* + 1).\
⇒ *T*(*a*, *b*) = Θ(*n* $2^{\left\lceil\lg \left(b - a + 1\right)\right\rceil}$ / (*b* - *a* + 1)).\
⇒ *T*(*a*, *b*) = Θ(*n* $2^{\lg \left(b - a + 1\right)}$ / (*b* - *a* + 1)), because $Θ(n) = 2^n ≤ 2^{\left\lceil n\right\rceil} < 2^{n + 1} = 2 × 2^n = Θ(n)$.\
⇒ *T*(*a*, *b*) = Θ(*n* (*b* - *a* + 1) / (*b* - *a* + 1)).\
⇒ *T*(*a*, *b*) = Θ(*n*).\
⇒ *T*(*a*, *b*) = Θ(⌈lg (*b* - *a* + 1)⌉).

##### 5.1-3 ★

> Suppose that you want to output 0 with probability 1 / 2 and 1 with probability 1 / 2. At your disposal is a procedure
> *Biased-Random*, that outputs either 0 or 1. It outputs 1 with some probability *p* and 0 with probability 1 - *p*,
> where 0 < *p* < 1, but you do not know what *p* is. Give an algorithm that uses *Biased-Random* as a subroutine, and
> returns an unbiased answer, returning 0 with probability 1 / 2 and 1 with probability 1 / 2. What is the expected
> running time of your algorithm as a function of *p*?

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_5_probabilistic_analysis_and_randomized_algorithms/section_5_1_the_hiring_problem/exercises/exercise_5_1_3.rs).

Let *k* be the time used to generate and compare two random value, *T*(*p*) be the expected running time of our
algorithm, we have:

*T*(*p*) = 2 *p* (1 - *p*) *k* + (1 - 2 *p* (1 - *p*)) (*k* + *T*(*p*))\
⇒ *T*(*p*) = *k* / (2 *p* ( 1 - *p*)) = Θ(1 / (*p* (1 - *p*))).

#### 5.2 Indicator random variables

##### 5.2-1

> In *Hire-Assistant*, assuming that the candidates are presented in a random order, what is the probability that you
> hire exactly one time? What is the probability that you hire exactly *n* times?

The probability of hiring exactly one time is 1 / *n*.

The probability of hiring exactly *n* times is 1 / *n*!.

##### 5.2-2

> In *Hire-Assistant*, assuming that the candidates are presented in a random order, what is the probability that you
> hire exactly twice?

The first candidate will be hired, so if there are two candidates being hired, the second candidate must be the best
one, and all candidates between the first candidate and the best candidate are less good than the first candidate.

Let *i* be the rank of the first candidate, then there is *i* candidates are better than the first candidate, and
*n* - *i* - 1 candidates are less good than the first candidate. If there are *j* candidates between the first candidate
and the best candidate, there are *P*(*n* - *i* - 1, *j*) (*n* - *j* - 2)! different situations.

So the probability is

$\frac{∑_{i = 1}^{n - 1} ∑_{j = 0}^{n - i - 1} P(n - i - 1, j) (n - j - 2)!}{n!} = H_{n - 1} / n$,

where $H_n$ is the *n*th [harmonic number](https://en.wikipedia.org/wiki/Harmonic_number).

##### 5.2-3

> Use indicator random variables to compute the expected value of the sum of *n* dice.

Let $X_i$ be the indicator variable associated with the event in which the value of one dice is *i*.

So the expected value of one dice is:

E[*X*] = $∑_{i = 1}^6 i \Pr\left\lbrace X_i = 1\right\rbrace$ = $∑_{i = 1}^6 i / 6$ = 7 / 2.

So the expected value of *n* dices is:

$\operatorname{E}\left[∑_{j = 1}^{n} X\right]$ = $∑_{j = 1}^{n}\operatorname{E}\left[X\right]$ = 7 *n* / 2.

##### 5.2-4

> Use indicator random variables to solve the following problem, which is known as the ***hat-check*** problem. Each of
> *n* customers gives a hat to a hat-check person at a restaurant. The hat-check person gives the hats back to the
> customers in a random order. What is the expected number of customers who get back their own hat?

Let $X_i$ be the indicator variable associated with the event in which the *i*th customer get back its own hat.

E[*X*]\
= $\operatorname{E}\left[∑_{i = 1}^n X_i\right]$\
= $∑_{i = 1}^n \operatorname{E}\left[X_i\right]$\
= $∑_{i = 1}^n 1 / n$\
= $∑_{i = 1}^n 1 / n$\
= 1.

##### 5.2-5

> Let *A*[1‥*n*] be an array of *n* distinct numbers. If *i* < *j* and *A*[*i*] > *A*[*j*], then the pair (*i*, *j*) is
> called an ***inversion*** of *A*. (See Problem 2-4 for more on inversions.) Suppose that the elements of *A* form a
> uniform random permutation of ⟨1, 2, …, *n*⟩. Use indicator random variables to compute the expected number of
> inversions.

Let $X_{i j}$ be the indicator variable associated with the event in which the *A*[*i*] > *A*[*j*], where *i* < *j*.

E[*X*]\
= $E\left[∑_{i = 1}^{n - 1} ∑_{j = i + 1}^{n} X_{i j}\right]$\
= $∑_{i = 1}^{n - 1} E\left[∑_{j = i + 1}^{n} X_{i j}\right]$\
= $∑_{i = 1}^{n - 1} ∑_{j = i + 1}^{n} E\left[X_{i j}\right]$\
= $∑_{i = 1}^{n - 1} ∑_{j = i + 1}^{n} 1 / 2$\
= $∑_{i = 1}^{n - 1} \left(n - i\right) / 2$\
= *n* (*n* - 1) / 4.

##### 5.3-1

> Professor Marceau objects to the loop invariant used in the proof of Lemma 5.5. He questions whether it is true prior
> to the first iteration. He reasons that we could just as easily declare that an empty subarray contains no
> 0-permutations. Therefore, the probability that an empty subarray contains a 0-permutation should be 0, thus
> invalidating the loop invariant prior to the first iteration. Rewrite the procedure Randomize-In-Place so that its
> associated loop invariant applies to a nonempty subarray prior to the first iteration, and modify the proof of Lemma
> 5.5 for your procedure.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_5_probabilistic_analysis_and_randomized_algorithms/section_5_3_randomized_algorithms/exercises/exercise_5_3_1.rs).

##### 5.3-2

> Professor Kelp decides to write a procedure that produces at random any permutation besides the identity permutation.
> He proposes the following procedure:
>
> *Permute-Without-Identity*(*A*)
>
> 1. *n* = *A*.*length*
> 2. **for** *i* = 1 **to** *n* - 1
> 3. &nbsp;&nbsp;&nbsp;&nbsp;swap *A*[*i*] with *A*[*Random*(*i* + 1, *n*)]
>
> Does this code do what Professor Kelp intends?

No, the algorithm above could not produce the permutation ⟨*A*[1], *A*[3], *A*[2], *A*[4], *A*[5], …, A[*n*]⟩ which is
not the identity permutation, because the first element always is always swapped away from its original position.

##### 5.3-3

> Suppose that instead of swapping element *A*[*i*] with a random element from the subarray *A*[*i*‥*n*], we swapped it
> with a random element from anywhere in the array:
>
> *Permute-With-All*(*A*)
>
> 1. *n* = *A*.*length*
> 2. **for** *i* = 1 **to** *n*
> 3. &nbsp;&nbsp;&nbsp;&nbsp;swap *A*[*i*] with *A*[*Random*(1, *n*)]
>
> Does this code produce a uniform random permutation? Why or why not?

In each iteration, there are *n* different possible outcomes of the *Random* function with the same possibility, so
there are total of $n^n$ (possibly same) outcomes of the algorithm with the same possibility. But the uniform random
permutation requires there are *n*! different possible outcomes. It is possible that $n^n / n!$ is not an integer, in
which case, it is impossible to divide $n^n$ probabilities into $n!$ same probabilities. So, the code does not produce a
uniform random permutation.

##### 5.3-4

> Professor Armstrong suggests the following procedure for generating a uniform random permutation:
>
> *Permute-By-Cyclic*(*A*)
>
> 1. *n* = *A*.*length*
> 2. let *B*[1‥*n*] be a new array
> 3. *offset* = *Random*(1, *n*)
> 4. **for** *i* = 1 **to** *n*
> 5. &nbsp;&nbsp;&nbsp;&nbsp;*dest* = *i* + *offset*
> 6. &nbsp;&nbsp;&nbsp;&nbsp;**if** *dest* > *n*
> 7. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*dest* = *dest* - *n*
> 8. &nbsp;&nbsp;&nbsp;&nbsp;*B*[*dest*] = *A*[*i*]
> 9. **return** *B*
>
> Show that each element *A*[*i*] has a 1 / *n* probability of winding up in any particular position in *B*. Then show
> that Professor Armstrong is mistaken by showing that the resulting permutation is not uniformly random.

The permutation is generated by shifting the array by length *Random*(1, *n*). So for each position, any element can
wind up at that position with probability of 1 / *n*.

There can only be *n* different outcomes with *Permute-By-Cyclic*, while the uniform distribution requires *n*!
different results. So the result permutation can not be uniformly random.

##### 5.3-5 ★

> Prove that in the array *P* in procedure *Permute-By-Sorting*, the probability that all elements are unique is at
> least 1 - 1 / *n*.

The probability is:

$P\left(n^3, n\right) / \left(n^3\right)^n$\
= $\left(n^3! / \left(n^3 - n\right)!\right) / \left(n^3\right)^n$\
= $\left(∏_{i = 0}^{n - 1} \left(n^3 - i\right)\right) / \left(∏_{i = 0}^{n - 1} n^3\right)$\
= $∏_{i = 0}^{n - 1} \left(\left(n^3 - i\right) / n^3\right)$\
= $∏_{i = 0}^{n - 1} \left(1 - i / n^3\right)$\
≥ $∏_{i = 0}^{n - 1} \left(1 - n / n^3\right)$\
= $∏_{i = 0}^{n - 1} \left(1 - 1 / n^2\right)$\
= $\left(1 - 1 / n^2\right)^n$

*Not sure how to go from here.*

##### 5.3-6

> Explain how to implement the algorithm *Permute-By-Sorting* to handle the case in which two or more priorities are
> identical. That is, your algorithm should produce a uniform random permutation, even if two or more priorities are
> identical.

*Skipped.*

##### 5.3-7

> Suppose we want to create a ***random sample*** of the set {1, 2, 3, …, *n*}, that is, an *m*-element subset *S*,
> where 0 ≤ *m* ≤ *n*, such that each *m*-subset is equally likely to be created. One way would be to set *A*[*i*] = *i*
> for *i* = 1, 2, 3, …, *n*, call *Randomize-In-Place*(*A*), and then take just the first *m* array elements. This
> method would make *n* calls to the *Random* procedure. If *n* is much larger than *m*, we can create a random sample
> with fewer calls to *Random*. Show that the following recursive procedure returns a random *m*-subset *S* of
> {1, 2, 3, …, *n*}, in which each *m*-subset is equally likely, while making only *m* calls to *Random*:
>
> *Random-Sample*(*m*, *n*)
>
> 1. **if** *m* == 0
> 2. &nbsp;&nbsp;&nbsp;&nbsp;**return** ∅
> 3. **else** *S* = *Random-Sample*(*m* - 1, *n* - 1)
> 4. &nbsp;&nbsp;&nbsp;&nbsp;*i* = *Random*(1, *n*)
> 5. &nbsp;&nbsp;&nbsp;&nbsp;**if** *i* ∈ *S*
> 6. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*S* = *S* ∪ {*n*}
> 7. &nbsp;&nbsp;&nbsp;&nbsp;**else** *S* = *S* ∪ {*i*}
> 8. &nbsp;&nbsp;&nbsp;&nbsp;**return** *S*

The algorithm is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_5_probabilistic_analysis_and_randomized_algorithms/section_5_3_randomized_algorithms/exercises/exercise_5_3_7.rs).

Like exercise 5.3-4, it is not enough by just proving ∀ *i* ∈ ℕ and 1 ≤ *i* ≤ *n*, the probability of
*i* ∈ *Random-Sample*(*m*, *n*) is *m* / *n*.

Lemma: *Random-Sample*(*m*, *n*) generates any *m*-subset with the probability of 1 / *C*(*n*, *m*).

Proof by induction on *m*:

- Base case: *Random-Sample*(0, *n*) only returns the empty set, and the only 0-subset is the empty set, so the
  probability is 1, which equals to 1 / *C*(*n*, 0), the claim holds.
- Inductive cases:

  - For a certain *m*-subset containing *n*, there are two different ways to generate it:

    - When *i* ∈ *S*, which has the probability of (*m* - 1) / *n*,
    - Or *i* = *n*, which has the probability of 1 / *n*,

    So the probability of generating an *m*-subset containing *n* is (*m* - 1) / *n* + 1 / *n* = *m* / *n*.

    By induction, generating an (*m* - 1)-subset on the set [1, *n* - 1] has the probability of
    1 / *C*(*n* - 1, *m* - 1), so generating an *m*-subset on the set [1, *n*] on set [1, *n* - 1] has the probability
    of (1 / *C*(*n* - 1, *m* - 1)) (*m* / *n*) = 1 / *C*(*n*, *m*).
  - For a certain *m*-subset does not contain *n*, let the last element being added to *S* can be *k*, then *k* can be
    any element in the *m*-subset.

    So the probability of generating a certain *m*-subset does not contain *n* is
    $∑_{j = 1}^{m} \left(1 / C\left(n - 1, m - 1\right)\right) \left(1 / n\right)$ =
    (1 / *C*(*n* - 1, *m* - 1)) (*m* / *n*) = 1 / *C*(*n*, *m*).

  So all *m*-subsets have the probability of 1 / *C*(*n*, *m*) of being generated, the claim holds.

#### 5.4 Probabilistic analysis and further uses of indicator random variables ★

##### 5.4-1

> How many people must there be in a room before the probability that someone has the same birthday as you do is at
> least 1 / 2? How many people must there be before the probability that at least two people have a birthday on July 4
> is greater than 1 / 2?

1. The probability that no people in a room has the same birthday as me is $364^{k - 1} / 365^{k - 1}$, so the
   probability that someone has the same birthday as me is $1 - 364^{k - 1} / 365^{k - 1}$.

   Solving 1 - $364^{k - 1} / 365^{k - 1}$ ≥ 1 / 2, we get *k* ≥ 254.
2. The probability that *x* people in a room has the a birthday on July 4 is *C*(*k*, *x*) $364^{k - x} / 365^k$,

   Solving 1 - *C*(*k*, 0) $364^k / 365^k$ - *C*(*k*, 1) $364^{k - 1} / 365^k$ > 1 / 2, we get k ≥ 613.

##### 5.4-2

> Suppose that we toss balls into *b* bins until some bin contains two balls. Each toss is independent, and each ball is
> equally likely to end up in any bin. What is the expected number of ball tosses?

The probability that toss *k* balls into *b* bins to get the first bin containing two balls is:
(*P*(*b*, *k* - 1) / $b^{k - 1}$) ((*k* - 1) / *b*).

So the expected number of ball tosses is:

$∑_{k = 2}^{b + 1} \left(P\left(b, k - 1\right) / b^{k - 1}\right) \left(\left(k - 1\right) / b\right) k$

##### 5.4-3 ★

> For the analysis of the birthday paradox, is it important that the birthdays be mutually independent, or is pairwise
> independence sufficient? Justify your answer.

*Skipped.*

##### 5.4-4 ★

> How many people should be invited to a party in order to make it likely that there are *three* people with the same
> birthday?

*Skipped.*

##### 5.4-5 ★

> What is the probability that a *k*-string over a set of size *n* forms a *k*-permutation? How does this question
> relate to the birthday paradox?

The probability is *P*(*n*, *k*) / $n^k$.

It’s the same as saying *k* people whose birthdays are in *n* days all have different birthday.

##### 5.4-6 ★

> Suppose that *n* balls are tossed into *n* bins, where each toss is independent and the ball is equally likely to end
> up in any bin. What is the expected number of empty bins? What is the expected number of bins with exactly one ball?

Let $X_{i}$ being the indicator variable in which bin *i* have *k* balls, then

E[$X_{i k}$] = *C*(*n*, *k*) $\left(1 / n\right)^k \left(1 - 1 / n\right)^{n - k}$.

So the expected number of bins with exactly *k* balls is

E[$∑_{i = 1}^{n} X_{i k}$]\
= $∑_{i = 1}^{n} \operatorname{E}\left[X_{i k}\right]$\
= $∑_{i = 1}^{n} C\left(n, k\right) \left(1 / n\right)^k \left(1 - 1 / n\right)^{n - k}$\
= *n* *C*(*n*, *k*) $\left(1 / n\right)^k \left(1 - 1 / n\right)^{n - k}$.

So the expected number of bins with exactly 0 ball is:

*n* *C*(*n*, 0) $\left(1 / n\right)^0 \left(1 - 1 / n\right)^{n - 0}$\
= *n* $\left(1 - 1 / n\right)^n$.

So the expected number of bins with exactly 1 ball is:

*n* *C*(*n*, 1) $\left(1 / n\right)^1 \left(1 - 1 / n\right)^{n - 1}$\
= *n* $\left(1 - 1 / n\right)^{n - 1}$.

##### 5.4-7 ★

> Sharpen the lower bound on streak length by showing that in *n* flips of a fair coin, the probability is less than
> 1 / *n* that no streak longer than lg *n* - 2 lg lg *n* consecutive heads occurs.

*Skipped.*

#### 5.X Problems

##### 5-1 Probabilistic counting

> With a *b*-bit counter, we can ordinarily only count up to $2^b$ - 1. With R. Morris’s ***probabilistic counting***,
> we can count up to a much larger value at the expense of some loss of precision.
>
> We let a counter value of *i* represent a count of $n_i$ for *i* = 0, 1, …, $2^b$ - 1, where the $n_i$ form an
> increasing sequence of nonnegative values. We assume that the initial value of the counter is 0, representing a count
> of $n_0$ = 0. The *Increment* operation works on a counter containing the value *i* in a probabilistic manner. If
> *i* = $2^b$ - 1, then the operation reports an overflow error. Otherwise, the *Increment* operation increases the
> counter by 1 with probability 1 / ($n_{i + 1} - n_i$), and it leaves the counter unchanged with probability
> 1 - 1 / ($n_{i + 1} - n_i$).
>
> If we select $n_i$ = *i* for all *i* ≥ 0, then the counter is an ordinary one. More interesting situations arise if we
> select, say, $n_i = 2^{i - 1}$ for *i* > 0 or $n_i = F_i$ (the *i*th Fibonacci number—see Section 3.2).
>
> For this problem, assume that $n_{2^b - 1}$ is large enough that the probability of an overflow error is negligible.
>
> 1. Show that the expected value represented by the counter after *n* *Increment* operations have been performed is
>    exactly *n*.
> 2. The analysis of the variance of the count represented by the counter depends on the sequence of the $n_i$. Let us
>    consider a simple case: $n_i$ = 100 *i* for all *i* ≥ 0. Estimate the variance in the value represented by the
>    register after *n* *Increment* operations have been performed.

1. For any counter value $n_i$, the expected value increased by one increment operation is:

   $\left(n_{i + 1} - n_i\right) \left(1 / \left(n_{i + 1} - n_i\right)\right) + 0 \left(1 / \left(n_{i + 1} - n_i\right)\right)$ = 1.

   Let $X_i$ be the random variable in which the counter values increased by the *i*-th increment operation. So the
   expected value of the counter after *n* *Increment* operations is:

   E[$∑_{i = 1}^{n} X_i$]\
   = $∑_{i = 1}^{n} \operatorname{E}\left[X_i\right]$\
   = $∑_{i = 1}^{n} 1$.\
   = *n*.
2. *Skipped*.

##### 5-2 Searching an unsorted array

> This problem examines three algorithms for searching for a value *x* in an unsorted array *A* consisting of *n*
> elements.
>
> Consider the following randomized strategy: pick a random index *i* into *A*. If *A*[*i*] = *x*, then we terminate;
> otherwise, we continue the search by picking a new random index into *A*. We continue picking random indices into *A*
> until we find an index *j* such that *A*[*j*] = *x* or until we have checked every element of *A*. Note that we pick
> from the whole set of indices each time, so that we may examine a given element more than once.
>
> ***a.*** Write pseudocode for a procedure *Random-Search* to implement the strategy above. Be sure that your algorithm
> terminates when all indices into *A* have been picked.
>
> ***b.*** Suppose that there is exactly one index *i* such that *A*[*i*] = *x*. What is the expected number of indices
> into *A* that we must pick before we find *x* and *Random-Search* terminates?
>
> ***c.*** Generalizing your solution to part (b), suppose that there are *k* ≥ 1 indices *i* such that *A*[*i*] = *x*.
> What is the expected number of indices into *A* that we must pick before we find *x* and *Random-Search* terminates?
> Your answer should be a function of *n* and *k*.
>
> ***d.*** Suppose that there are no indices *i* such that *A*[*i*] = *x*. What is the expected number of indices into
> *A* that we must pick before we have checked all elements of *A* and *Random-Search* terminates?
>
> Now consider a deterministic linear search algorithm, which we refer to as *Deterministic-Search*. Specifically, the
> algorithm searches *A* for *x* in order, considering *A*[1], *A*[2], *A*[3], …, *A*[*n*] until either it finds
> *A*[*i*] = *x* or it reaches the end of the array. Assume that all possible permutations of the input array are
> equally likely.
>
> ***e.*** Suppose that there is exactly one index *i* such that *A*[*i*] = *x*. What is the average-case running time
> of *Deterministic-Search*? What is the worst-case running time of *Deterministic-Search*?
>
> ***f.*** Generalizing your solution to part (e), suppose that there are *k* ≥ 1 indices *i* such that *A*[*i*] = *x*.
> What is the average-case running time of *Deterministic-Search*? What is the worst-case running time of
> *Deterministic-Search*? Your answer should be a function of *n* and *k*.
>
> ***g.*** Suppose that there are no indices *i* such that *A*[*i*] = *x*. What is the average-case running time of
> *Deterministic-Search*? What is the worst-case running time of *Deterministic-Search*?
>
> Finally, consider a randomized algorithm *Scramble-Search* that works by first randomly permuting the input array and
> then running the deterministic linear search given above on the resulting permuted array.
>
> ***h.*** Letting *k* be the number of indices *i* such that *A*[*i*] = *x*, give the worst-case and expected running
> times of *Scramble-Search* for the cases in which *k* = 0 and *k* = 1. Generalize your solution to handle the case in
> which *k* ≥ 1.
>
> ***i.*** Which of the three searching algorithms would you use? Explain your answer.

***a.***

*Scramble-Search*(*A*, *v*)

1. *V* = an array with *A*.*length* *False* values
2. *c* = 0
3. **while** *c* < *A*.*length*
4. &nbsp;&nbsp;&nbsp;&nbsp;*i* = *Random*(1, *n*)
5. &nbsp;&nbsp;&nbsp;&nbsp;**if** not *V*[*i*]
6. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**if** *A*[*i*] == *v*
7. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**return** *i*
8. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*V*[*i*] = *True*
9. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*c* = *c* + 1
10. **return** *nil*

***b.*** Each pick has the probability of 1 / *n* of being succeed, so the expected number of indices to pick is *n*.

***c.*** Each pick has the probability of *k* / *n* of being succeed, so the expected number of indices to pick is
*n* / *k*.

***d.*** It is like the ***coupon collector’s problem***, the expected number of indices to pick is
*n*(ln *n* + *O*(1)).

***e.*** Average-case running time is Θ((1 + *n*) / 2), Worst-case running time is Θ(*n*).

***f.*** The expected number of indices to pick is:

$∑_{i = 1}^{n - k + 1} i P\left(n - k, i - 1\right) k P(n - i, n - i) / P(n, n)$ = (n + 1) / (k + 1).
(By [WolframAlpha](https://www.wolframalpha.com/input/?i=sum(i+P(n+-+k,+i+-+1)+k+P(n+-+i,+n+-+i)+%2F+P(n,+n),+(i,+1,+n+-+k+%2B+1))))

Worst-case running time is Θ(*n* - *k* + 1).

***g.*** They are both Θ(*n*).

***h.*** The worst-case, expected running time are all Θ(*n*).

***i.*** I will use *Deterministic-Search*, it is superior in every way.

## II Sorting and Order Statistics

### 6 Heapsort

#### 6.1 Heaps

##### 6.1-1

> What are the minimum and maximum numbers of elements in a heap of height *h*?

The minimum number of elements is $2^h$, the maximum number of elements is $2^{h + 1} - 1$.

##### 6.1-2

> Show that an *n*-element heap has height ⌊lg *n*⌋.

According to exercise 6.1-1, we know that if the height of a heap is *h*, the number of elements is in range
[$2^h$, $2^{h + 1} - 1$]. Also, if $2^h$ ≤ *n* ≤ $2^{h + 1} - 1$, we must have ⌊lg *n*⌋ = *h*, so an *n*-element heap
must have height ⌊lg *n*⌋.

##### 6.1-3

> Show that in any subtree of a max-heap, the root of the subtree contains the largest value occurring anywhere in that
> subtree.

Proof by induction:

Base case: if a max-heap has one element, then the only subtree is the one-element tree, the root contains the largest
value, since it is the only value the tree has.

Inductive case: if a max-heap *H* has more than one element, by induction, we know that for any subtree in the *H*’s
children, the subtree’s root contains the largest value in the subtree. So the left child *H* contains the largest value
in the left subtree; and if *H* have a right child, it must also contain the largest value in the right subtree. Since
we have that for every node in the heap, the value of the parent is always greater or equal than its children, we know
that the value of the root of *H* must be always greater or equal than its children. So it must be the largest element
in the heap.

##### 6.1-4

> Where in a max-heap might the smallest element reside, assuming that all elements are distinct?

The smallest element must be in the leaf nodes, otherwise the heap property will be violated.

##### 6.1-5

> Is an array that is in sorted order a min-heap?

Yes, since the index of a child node must be greater than the corresponding parent node, and the array is in sorted
order, we know that the value of the child node must be greater or equal to the corresponding parent node, which
satisfies the min-heap property.

##### 6.1-6

> Is the array with values ⟨23, 17, 14, 6, 13, 10, 1, 5, 7, 12⟩ a max-heap?

Nope.

##### 6.1-7

> Show that, with the array representation for storing an *n*-element heap, the leaves are the nodes indexed by
> ⌊*n* / 2⌋ + 1, ⌊*n* / 2⌋ + 2, …, *n*.

The index of the last element is *n*, so the index of the parent of the last element is ⌊*n* / 2⌋, so the leaves are the
nodes starts with ⌊*n* / 2⌋, and ends with *n*.

#### 6.2 Maintaining the heap property

##### 6.2-1

> Using Figure 6.2 as a model, illustrate the operation of *Max-Heapify*(*A*, 3) on the array
> *A* = ⟨27, 17, 3, 16, 13, 10, 1, 5, 7, 12, 4, 8, 9, 0⟩.

*Skipped*.

##### 6.2-2

> Starting with the procedure *Max-Heapify*, write pseudocode for the procedure *Min-Heapify*(*A*, *i*), which performs
> the corresponding manipulation on a min-heap. How does the running time of *Min-Heapify* compare to that of
> *Max-Heapify*?

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/section_6_2_maintaining_the_heap_property/exercises/exercise_6_2_2.rs).

The running time of *Min-Heapify* is the same as *Max-Heapify*.

##### 6.2-3

> What is the effect of calling *Max-Heapify*(*A*, *i*) when the element *A*[*i*] is larger than its children?

Nothing happens.

##### 6.2-4

> What is the effect of calling *Max-Heapify*(*A*, *i*) for *i* > *A*.*heap-size* / 2?

Nothing happens.

##### 6.2-5

> The code for *Max-Heapify* is quite efficient in terms of constant factors, except possibly for the recursive call in
> line 10, which might cause some compilers to produce inefficient code. Write an efficient *Max-Heapify* that uses an
> iterative control construct (a loop) instead of recursion.

The solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/section_6_2_maintaining_the_heap_property/exercises/exercise_6_2_5.rs).

##### 6.2-6

> Show that the worst-case running time of *Max-Heapify* on a heap of size *n* is Ω(lg *n*). (Hint: For a heap with *n*
> nodes, give node values that cause *Max-Heapify* to be called recursively at every node on a simple path from the root
> down to a leaf.)

The height of a heap of size *n* is ⌊lg *n*⌋, if *Max-Heapify* is called at every node on a simple path from the root
down to a leaf, the expected running time is linear to the height of the heap, that is ⌊lg *n*⌋, so the worst-case
running time is Ω(lg *n*).

#### 6.3 Building a heap

##### 6.3-1

> Using Figure 6.3 as a model, illustrate the operation of *Build-Max-Heap* on the array
> *A* = ⟨5, 3, 17, 10, 84, 19, 6, 22, 9⟩.

*Skipped.*

##### 6.3-2

> Why do we want the loop index *i* in line 2 of *Build-Max-Heap* to decrease from ⌊*A*.*length* / 2⌋ to 1 rather than
> increase from 1 to ⌊*A*.*length* / 2⌋?

Because *Max-Heapify* requires that its child subtree being a heap, so we have to do this bottom-up style.

##### 6.3-3

> Show that there are at most ⌈*n* / $2^{h + 1}$⌉ nodes of height *h* in any *n*-element heap.

Proof by induction:

Base case: the nodes of height 0 are leaf nodes. according to exercise 6.1-7, we know that the number of leaf nodes is
*n* - (⌊*n* / 2⌋ + 1) + 1 = *n* - ⌊*n* / 2⌋ = ⌈*n* / 2⌉ = ⌈*n* / $2^{0 + 1}$⌉, since “For any integer *n*,
⌈*n* / 2⌉ + ⌊*n* / 2⌋ = *n*”.

Inductive case: by induction, we know that in height *h* + 1, there are at most ⌈*n* / $2^{h + 2}$⌉ nodes. So there are
at most ⌈⌈*n* / $2^{h + 2}$⌉ / 2⌉ nodes in height *h*. According to equation (3.4), we have
⌈⌈*n* / $2^{h + 2}$⌉ / 2⌉ = ⌈*n* / $2^{h + 2}$ / 2⌉ = ⌈*n* / $2^{h + 1}$⌉.

#### 6.4 The heapsort algorithm

##### 6.4-1

> Using Figure 6.4 as a model, illustrate the operation of *Heapsort* on the array
> *A* = ⟨5, 13, 2, 25, 7, 17, 20, 8, 4⟩.

*Skipped.*

##### 6.4-2

> Argue the correctness of *Heapsort* using the following loop invariant:
>
> > At the start of each iteration of the **for** loop of lines 2–5, the subarray *A*[1‥*i*] is a max-heap containing
> > the *i* smallest elements of *A*[1‥*n*], and the subarray *A*[*i* + 1‥*n*] contains the *n* - *i* largest elements
> > of *A*[1‥*n*], sorted.

*Skipped.*

##### 6.4-3

> What is the running time of *Heapsort* on an array *A* of length *n* that is already sorted in increasing order? What
> about decreasing order?

Both Θ(*n* lg *n*).

##### 6.4-4

> Show that the worst-case running time of *Heapsort* is Ω(*n* lg *n*).

*Skipped.*

##### 6.4-5 ★

> Show that when all elements are distinct, the best-case running time of *Heapsort* is Ω(*n* lg *n*).

*Skipped.*

#### 6.5 Priority queues

##### 6.5-1

> Illustrate the operation of *Heap-Extract-Max* on the heap *A* = ⟨15, 13, 9, 5, 12, 8, 7, 4, 0, 6, 2, 1⟩.

*Skipped.*

##### 6.5-2

> Illustrate the operation of *Max-Heap-Insert*(*A*, 10) on the heap *A* = ⟨15, 13, 9, 5, 12, 8, 7, 4, 0, 6, 2, 1⟩.

*Skipped.*

##### 6.5-3

> Write pseudocode for the procedures *Heap-Minimum*, *Heap-Extract-Min*, *Heap-Decrease-Key*, and *Min-Heap-Insert*
> that implement a min-priority queue with a min-heap.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/section_6_5_priority_queues/exercises/exercise_6_5_3.rs).

##### 6.5-4

> Why do we bother setting the key of the inserted node to -∞ in line 2 of *Max-Heap-Insert* when the next thing we do
> is increase its key to the desired value?

We must ensure that when calling *Heap-Increase-Key*, the value of *key* must be equal to or greater than *A*[*i*], so
we use -∞ to do this.

##### 6.5-5

> Argue the correctness of *Heap-Increase-Key* using the following loop invariant:
>
> > At the start of each iteration of the **while** loop of lines 4–6, *A*[*Parent*(*i*)] ≥ *A*[*Left*(*i*)] and
> > *A*[*Parent*(*i*)] ≥ *A*[*Right*(*i*)], if these nodes exist, and the subarray *A*[1‥*A*.*heap-size*] satisfies the
> > max-heap property, except that there may be one violation: *A*[*i*] may be larger than *A*[*Parent*(*i*)].
>
> You may assume that the subarray *A*[1‥*A*.*heap-size*] satisfies the max-heap property at the time
> *Heap-Increase-Key* is called.

*Skipped.*

##### 6.5-6

> Each exchange operation on line 5 of *Heap-Increase-Key* typically requires three assignments. Show how to use the
> idea of the inner loop of Insertion-Sort to reduce the three assignments down to just one assignment.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/section_6_5_priority_queues/exercises/exercise_6_5_6.rs).

##### 6.5-7

> Show how to implement a first-in, first-out queue with a priority queue. Show how to implement a stack with a priority
> queue. (Queues and stacks are defined in Section 10.1.)

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/section_6_5_priority_queues/exercises/exercise_6_5_7.rs).

##### 6.5-8

> The operation *Heap-Delete*(*A*, *i*) deletes the item in node *i* from heap *A*. Give an implementation of
> *Heap-Delete* that runs in *O*(lg *n*) time for an *n*-element max-heap.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/section_6_5_priority_queues/exercises/exercise_6_5_8.rs).

##### 6.5-9

> Give an *O*(*n* lg *k*)-time algorithm to merge *k* sorted lists into one sorted list, where *n* is the total number
> of elements in all the input lists. (Hint: Use a min-heap for *k*-way merging.)

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/section_6_5_priority_queues/exercises/exercise_6_5_9.rs).

#### 6.X Problems

##### 6-1 Building a heap using insertion

> We can build a heap by repeatedly calling *Max-Heap-Insert* to insert the elements into the heap. Consider the
> following variation on the *Build-Max-Heap* procedure:
>
> *Build-Max-Heap′*(*A*)
>
> 1. *A*.*heap-size* = 1
> 2. **for** *i* = 2 **to** *A*.*length*
> 3. &nbsp;&nbsp;&nbsp;&nbsp;*Build-Max-Heap′*(*A*, *A*[*i*])
>
> ***a.*** Do the procedures *Build-Max-Heap* and *Build-Max-Heap′* always create the same heap when run on the same
> input array? Prove that they do, or provide a counterexample.
>
> ***b.*** Show that in the worst case, *Build-Max-Heap′* requires Θ(*n* lg *n*) time to build an *n*-element heap.

***a.*** No. For array ⟨0, 1, 2, 3⟩, *Build-Max-Heap* produces ⟨3, 1, 2, 0⟩, while *Build-Max-Heap′* produces
⟨3, 2, 1, 0⟩.

***b.*** If *A* is in increasing order, every insertion will have to travel all the way from leaf to root, which has the
run time of Θ(*n* lg *n*).

##### 6-2 Analysis of d-ary heaps

> A ***d-ary heap*** is like a binary heap, but (with one possible exception) non-leaf nodes have *d* children instead
> of 2 children.
>
> ***a.*** How would you represent a *d*-ary heap in an array?
>
> ***b.*** What is the height of a *d*-ary heap of *n* elements in terms of *n* and *d*?
>
> ***c.*** Give an efficient implementation of *Extract-Max* in a *d*-ary max-heap. Analyze its running time in terms of
> *d* and *n*.
>
> ***d.*** Give an efficient implementation of *Insert* in a *d*-ary max-heap. Analyze its running time in terms of *d*
> and *n*.
>
> ***e.*** Give an efficient implementation of *Increase-Key*(*A*, *i*, *k*), which flags an error if *k* < *A*[*i*],
> but otherwise sets *A*[*i*] = *k* and then updates the *d*-ary max-heap structure appropriately. Analyze its running
> time in terms of *d* and *n*.

***a.*** The solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/problems/problem_6_2_analysis_of_d_ary_heaps.rs).

***b.*** The maximum number of elements of height *h* is $∑_{i = 0}^{h} d^h = \frac{1 - d^h}{1 - d}$, so we have
$\frac{1 - d^{h - 1}}{1 - d} < n ≤ \frac{1 - d^h}{1 - d}$. Solving it, we have
$\log_d\left(\left(d - 1\right) n + 1\right) ≤ h < \log_d\left(\left(d - 1\right) n + 1\right) + 1$. Since *h* is an
integer, we have *h* = $\left\lceil\log_d\left(\left(d - 1\right) n + 1\right)\right\rceil$ = Θ($\log_d n$).

***c.*** The solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/problems/problem_6_2_analysis_of_d_ary_heaps.rs).
The worst-case running time is linear to the height of the heap, and on every level we have to find the maximum element
in Θ(*d*) time. So the worst case running time is Θ(*d* $\log_d n$).

***d.*** The solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/problems/problem_6_2_analysis_of_d_ary_heaps.rs).
The worst-case running time is linear to the height of the heap. So the worst case running time is
*O*($\log_d n$).

***e.*** The solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/problems/problem_6_2_analysis_of_d_ary_heaps.rs).
The worst case running time is Θ($\log_d n$).

##### 6-3 Young tableaus

> An *m* × *n* ***Young tableau*** is an *m* × *n* matrix such that the entries of each row are in sorted order from
> left to right and the entries of each column are in sorted order from top to bottom. Some of the entries of a Young
> tableau may be ∞, which we treat as nonexistent elements. Thus, a Young tableau can be used to hold *r* ≤ *m* *n*
> finite numbers.
>
> ***a.*** Draw a 4 × 4 Young tableau containing the elements {9, 16, 3, 2, 4, 8, 5, 14, 12}.
>
> ***b.*** Argue that an *m* × *n* Young tableau *Y* is empty if *Y*[1, 1] = ∞. Argue that *Y* is full (contains *m* *n*
> elements) if *Y*[*m*, *n*] < ∞.
>
> ***c.*** Give an algorithm to implement *Extract-Min* on a nonempty *m* × *n* Young tableau that runs in
> *O*(*m* + *n*) time. Your algorithm should use a recursive subroutine that solves an *m* × *n* problem by recursively
> solving either an (*m* - 1) × *n* or an *m* × (*n* - 1) subproblem. (*Hint:* Think about *Max-Heapify*.) Define
> *T*(*p*), where *p* = *m* + *n*, to be the maximum running time of *Extract-Min* on any *m* × *n* Young tableau. Give
> and solve a recurrence for *T*(*p*) that yields the *O*(*m* + *n*) time bound.
>
> ***d.*** Show how to insert a new element into a nonfull *m* × *n* Young tableau in *O*(*m* + *n*) time.
>
> ***e.*** Using no other sorting method as a subroutine, show how to use an *n* × *n* Young tableau to sort $n^2$
> numbers in *O*($n^3$) time.
>
> ***f.*** Give an *O*(*m* + *n*)-time algorithm to determine whether a given number is stored in a given *m* × *n*
> Young tableau.

***a.***

|     |     |     |     |
| --- | --- | --- | --- |
| 2   | 3   | 4   | 5   |
| 8   | 9   | 12  | 14  |
| 16  | ∞   | ∞   | ∞   |
| ∞   | ∞   | ∞   | ∞   |

***b.***

1. Since *Y*[1, 1] = ∞, the first row will only contain ∞, which means that the first element of every column is ∞,
   which means every column will only contain ∞, which means the table will only contain ∞, which means *Y* is empty.
2. Since *Y*[*m*, *n*] < ∞, the last row will not contain ∞, which means that the last element of every column is not ∞,
   which means every column will not contain ∞, which means the table will not contain ∞, which means *Y* full.

***c.***

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/problems/problem_6_3_young_tableaus.rs).

*T*(*p*) = *T*(*p* - 1) + *O*(1).

***d.***

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/problems/problem_6_3_young_tableaus.rs).

The solution is very similar to the *Extract-Min* and they have the same running time bound.

***e.***

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/problems/problem_6_3_young_tableaus.rs).

***f.***

You are thinking about binary search, aren’t you? Too bad this problem isn’t about that.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/problems/problem_6_3_young_tableaus.rs).

### 7 Quicksort

#### 7.1 Description of quicksort

##### 7.1-1

> Using Figure 7.1 as a model, illustrate the operation of *Partition* on the array *A* = ⟨13, 19, 9, 5, 12, 8, 7, 4,
> 21, 2, 6, 11⟩.

*Skipped.*

##### 7.1-2

> What value of *q* does *Partition* return when all elements in the array *A*[*p*‥*r*] have the same value? Modify
> *Partition* so that *q* = ⌊(*p* + *r*) / 2⌋ when all elements in the array *A*[*p*‥*r*] have the same value.

1. *Partition* returns *r* when all elements have the same value.
2. Solution is implemented
   [here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_7_quicksort/section_7_1_description_of_quicksort/exercises/exercise_7_1_2.rs).

##### 7.1-3

> Give a brief argument that the running time of *Partition* on a subarray of size *n* is Θ(*n*).

There is only one loop that updates *j* from *p* to *r* - 1, and the loop body requires constant time to run, so the
running time is Θ(*r* - *p*) = Θ(*n* - 1) = Θ(*n*).

##### 7.1-4

> How would you modify *Quicksort* to sort into nonincreasing order?

Do you mean that I can’t modify *Partition*?

Fine, the solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_7_quicksort/section_7_1_description_of_quicksort/exercises/exercise_7_1_4.rs).

#### 7.2 Performance of quicksort

##### 7.2-1

> Use the substitution method to prove that the recurrence *T*(*n*) = *T*(*n* - 1) + Θ(*n*) has the solution
> *T*(*n*) = Θ($n^2$), as claimed at the beginning of Section 7.2.

Let *T*(*n*) = *T*(*n* - 1) + *f*(*n*), where for some $c_1$, $c_2$ and $n_0$, for any *n* > $n_0$,
$c_1 n ≤ f\left(n\right) ≤ c_2 n$.

Suppose *T*(*n*) ≥ $\left(c_1 / 2\right) n^2 + \left(c_1 / 2\right) n + c_3$ for large enough *n*, we have

*T*(*n*)\
= *T*(*n* - 1) + *f*(*n*)\
≥ *T*(*n* - 1) + $c_1$ n\
≥ $\left(c_1 / 2\right) \left(n - 1\right)^2 + \left(c_1 / 2\right) \left(n - 1\right) + c_3 + c_1 n$\
= $\left(c_1 / 2\right) n^2 - c_1 n + c_1 / 2 + \left(c_1 / 2\right) \left(n - 1\right) + c_3 + c_1 n$\
= $\left(c_1 / 2\right) n^2 + \left(c_1 / 2\right) n + c_3$.

So *T*(*n*) = Ω($n^2$). Similarly, we can prove *T*(*n*) = *O*($n^2$), so *T*(*n*) = Θ(*n*).

##### 7.2-2

> What is the running time of *Quicksort* when all elements of array *A* have the same value?

Θ($n^2$).

##### 7.2-3

> Show that the running time of *Quicksort* is Θ($n^2$) when the array *A* contains distinct elements and is sorted in
> decreasing order.

Let’s say we have an array ⟨*n*, *n* - 1, …, 2, 1⟩ to sort.

At the first partition, we will choose 1 as the pivot element. so after partition, we get two arrays: ⟨⟩ and
⟨*n* - 1, *n* - 2, …, 2, *n*⟩. This is the worst case scenario.

At the second partition, we will choose *n* as the pivot element. so after partition, we get two arrays:
⟨*n* - 1, *n* - 2, …, 2⟩ and ⟨⟩. This is the worst case scenario.

Notice that after the second partition, the subarray ⟨*n* - 1, *n* - 2, …, 2⟩ is in decreasing order, so we get
ourselves a subproblem of the original problem. Since the first two partitions of the partition is the worst cast
scenario, we know that the subproblem will also be the worst case scenario. So the running time is Θ($n^2$).

##### 7.2-4

> Banks often record transactions on an account in order of the times of the transactions, but many people like to
> receive their bank statements with checks listed in order by check number. People usually write checks in order by
> check number, and merchants usually cash them with reasonable dispatch. The problem of converting time-of-transaction
> ordering to check-number ordering is therefore the problem of sorting almost-sorted input. Argue that the procedure
> *Insertion-Sort* would tend to beat the procedure *Quicksort* on this problem.

According to problem 2-4, the *Insertion-Sort* algorithm has the running time of Θ(*k*), where *k* is the inversions of
the array. An almost sorted array as a few number of inversions, so the expected running time of *Insertion-Sort* should
be low, while the *Quicksort* algorithm requires at Ω(*n* lg *n*) time. So *Insertion-Sort* would tend to beat the
procedure *Quicksort* on this problem.

##### 7.2-5

> Suppose that the splits at every level of quicksort are in the proportion 1 - *α* to *α*, where 0 < *α* ≤ 1 / 2 is a
> constant. Show that the minimum depth of a leaf in the recursion tree is approximately -lg *n* / lg *α* and the
> maximum depth is approximately -lg *n* / lg(1 - *α*). (Don’t worry about integer round-off.)

At each level of recursion the problem of size *n* is divided into problems of size *α* *n* and size (1 - *α*) *n*.
Since *α* ≤ 1 / 2, the minimum depth is on the path *n* → *α* *n* → $α^2$ *n* → ⋯ → 1, the maximum depth is on the path
*n* → (1 - *α*) *n* → $\left(1 - α\right)^2$ *n* → ⋯ → 1.

Solving $α^i$ *n* = 1 for *i*, we get *i* = -lg *n* / lg *α*.

Solving $\left(1 - α\right)^i$ *n* = 1 for *i*, we get *i* = -lg *n* / lg (1 - *α*).

##### 7.2-6 ★

> Argue that for any constant 0 < *α* ≤ 1 / 2, the probability is approximately 1 - 2 *α* that on a random input array,
> *Partition* produces a split more balanced than 1 - *α* to *α*.

Let *n* be the size of the array. Being more balanced than 1 - *α* to *α* means that the number of elements is greater
than or equal to *A*[*n*] is greater than *a* *n* and less than (1 - *a*) *n*, which means *A*[*n*] must be greater than
the (*a* *n*)-th smallest element and less than the ((1 - *a*) *n*)-th biggest element. There are
(1 - *a*) *n* - *a* *n* = (1 - 2 *a*) *n* different cases to choose. So the probability is
(1 - 2 *a*) *n* / *n* = 1 - 2 *a*.

#### 7.3 A randomized version of quicksort

##### 7.3-1

> Why do we analyze the expected running time of a randomized algorithm and not its worst-case running time?

The worst-case running time doesn’t change if we randomize the algorithm, since we might generate the very same worst
case by chance.

##### 7.3-2

> When *Randomized-Quicksort* runs, how many calls are made to the random-number generator *Random* in the worst case?
> How about in the best case? Give your answer in terms of Θ-notation.

- Best case: *T*(*n*) = 2 *T*((*n* - 1) / 2) + 1 ⇒ *T*(*n*) = Θ(*n*).
- Worst case: *T*(*n*) = *T*(*n* - 1) + 1 ⇒ *T*(*n*) = Θ(*n*).

#### 7.4 Analysis of quicksort

##### 7.4-1

> Show that in the recurrence
>
> *T*(*n*) = $\underset{0 ≤ q ≤ n - 1}{\max} \left(T\left(q\right) + T\left(n - q - 1\right)\right) + Θ\left(n\right)$,
>
> *T*(*n*) = Ω($n^2$).

Suppose *T*(*n*) ≥ *c* $n^2$ for some *c*, we have:

*T*(*n*)\
= $\underset{0 ≤ q ≤ n - 1}{\max} \left(T(q) + T(n - q - 1)\right) + Θ\left(n\right)$\
≥ $\underset{0 ≤ q ≤ n - 1}{\max} \left(c q^2 + c \left(n - q - 1\right)^2\right)$ + Θ(*n*)\
= *c* ⋅ $\underset{0 ≤ q ≤ n - 1}{\max} \left(q^2 + \left(n - q - 1\right)^2\right)$ + Θ(*n*)\
= *c* ⋅ $\left(n - 1\right)^2$ + Θ(*n*)\
= *c* $n^2$ - *c* (2 *n* - 1) + Θ(*n*)\
≥ *c* $n^2$.

##### 7.4-2

> Show that quicksort’s best-case running time is Ω(*n* lg *n*).

The best case running time is:

*T*(*n*) = 2 *T*((n - 1) / 2) + Θ(*n*).

Suppose *T*(*n*) ≥ *c* (*n* + 1) lg (*n* + 1) for some *c*, we have:

*T*(*n*)\
= 2 *T*((*n* - 1) / 2) + Θ(*n*)\
≥ 2 *c* ((*n* - 1) / 2 + 1) lg ((*n* - 1) / 2 + 1) + Θ(*n*)\
= 2 *c* ((*n* + 1) / 2) lg ((*n* + 1) / 2) + Θ(*n*)\
= *c* (*n* + 1) (lg (*n* + 1) - 1) + Θ(*n*)\
= *c* (*n* + 1) lg (*n* + 1) - *c* (*n* + 1) + Θ(*n*)\
≥ *c* (*n* + 1) lg (*n* + 1).

##### 7.4-3

> Show that the expression $q^2 + \left(n - q - 1\right)^2$ achieves a maximum over *q* = 0, 1, …, *n* - 1 when
> *q* = 0 or *q* = *n* - 1.

$\frac{\partial\left(q^2 + \left(n - q - 1\right)^2\right)}{\partial q}$\
= 2 *q* - 2 (*n* - q - 1)\
= 4 *q* - 2 *n* + 2

When q < (*n* - 1) / 2, 4 *q* - 2 *n* + 2 > 0; when q > (*n* - 1) / 2, 4 *q* - 2 *n* + 2 < 0, so we have the value of
$q^2 + \left(n - q - 1\right)^2$ decreasing when q < (*n* - 1) / 2, and increasing when q > (*n* - 1) / 2. Since
0 ≤ *q* ≤ *n* - 1, we have maximum when *q* = 0 or *q* = *n* - 1.

##### 7.4-4

> Show that *Randomized-Quicksort*’s expected running time is Ω(*n* lg *n*).

*Skipped.*

##### 7.4-5

> We can improve the running time of quicksort in practice by taking advantage of the fast running time of insertion
> sort when its input is “nearly” sorted. Upon calling quicksort on a subarray with fewer than *k* elements, let it
> simply return without sorting the subarray. After the top-level call to quicksort returns, run insertion sort on the
> entire array to finish the sorting process. Argue that this sorting algorithm runs in
> *O*(*n* *k* + *n* lg (*n* / *k*)) expected time. How should we pick *k*, both in theory and in practice?

*Skipped.*

##### 7.4-6 ★

> Consider modifying the *Partition* procedure by randomly picking three elements from array *A* and partitioning about
> their median (the middle value of the three elements). Approximate the probability of getting at worst an
> *α*-to-(1 - *α*) split, as a function of *α* in the range 0 < *α* < 1.

*Skipped.*

#### 7.X Problems

##### 7-1 Hoare partition correctness

> The version of *Partition* given in this chapter is not the original partitioning algorithm. Here is the original
> partition algorithm, which is due to C. A. R. Hoare:
>
> *Hoare-Partition*(*A*, *p*, *r*)
>
> 1. *x* = *A*[*p*]
> 2. *i* = *p* - 1
> 3. *j* = *r* + 1
> 4. **while** *True*
> 5. &nbsp;&nbsp;&nbsp;&nbsp;**repeat**
> 6. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*j* = *j* - 1
> 7. &nbsp;&nbsp;&nbsp;&nbsp;**until** *A*[*j*] ≤ *x*
> 8. &nbsp;&nbsp;&nbsp;&nbsp;**repeat**
> 9. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*i* = *i* + 1
> 10. &nbsp;&nbsp;&nbsp;&nbsp;**until** *A*[*i*] ≥ *x*
> 11. &nbsp;&nbsp;&nbsp;&nbsp;**if** *i* < *j*
> 12. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exchange *A*[*i*] with *A*[*j*]
> 13. &nbsp;&nbsp;&nbsp;&nbsp;**else** **return** *j*
>
> ***a.*** Demonstrate the operation of *Hoare-Partition* on the array *A* = ⟨13, 19, 9, 5, 12, 8, 7, 4, 11, 2, 6, 21⟩,
> showing the values of the array and auxiliary values after each iteration of the **while** loop in lines 4–13.
>
> The next three questions ask you to give a careful argument that the procedure *Hoare-Partition* is correct. Assuming
> that the subarray *A*[*p*‥*r*] contains at least two elements, prove the following:
>
> ***b.*** The indices *i* and *j* are such that we never access an element of *A* outside the subarray *A*[*p*‥*r*].
>
> ***c.*** When *Hoare-Partition* terminates, it returns a value *j* such that *p* ≤ *j* < *r*.
>
> ***d.*** Every element of *A*[*p*‥*j*] is less than or equal to every element of *A*[*j* + 1‥*r*] when
> *Hoare-Partition* terminates.
>
> The *Partition* procedure in Section 7.1 separates the pivot value (originally in *A*[*r*]) from the two partitions it
> forms. The *Hoare-Partition* procedure, on the other hand, always places the pivot value (originally in *A*[*p*]) into
> one of the two partitions *A*[*p*‥*j*] and *A*[*j* + 1‥*r*]. Since *p* ≤ *j* < *r*, this split is always nontrivial.
>
> ***e.*** Rewrite the *Quicksort* procedure to use *Hoare-Partition*.

***a.***

*Skipped.*

***b.***

At the first iteration of the outer loop, the algorithm first find the first element from right that is less than or
equal to *x*, and the index element won’t be less than *p* since *A*[*p*] = *x*. Then the program find the first element
that is greater or equal than *x*, which will have the index of *p*. If the algorithm doesn’t terminate, the rest of the
first element is just swapping element *A*[*i*] and *A*[*j*]. So the first iteration won’t access outside the subarray
*A*[*p*‥*r*].

After the first iteration, the following loop invariant will hold for each outer loop iteration:

- At the beginning of each iteration, *i* < *j*, and *A*[*i*] ≤ *x*, *A*[*j*] ≥ *x*.
- In the body of each iteration, *i* will be less than or equal to the initial value of *j*, and *j* will be more than
  or equal to the initial value of *i*.

Proof by induction:

- Base case: If the first iteration doesn’t terminate, *A*[*i*] will be equal to some value that is less than or equal
  to *x*, and *A*[*j*] will be equal to *x*, so the loop invariant holds for the second iteration of the outer loop.
- Inductive case: For the *n*th iteration, where *n* > 1, by induction, we know that at the beginning, *i* < *j*, and
  *A*[*i*] ≤ *x*, *A*[*j*] ≥ *x*. Let *m*, *n* be the values of *i*, *j* at the beginning of this iteration, we know at
  line 11:

  - *i* ≤ *n*,
  - *j* ≥ *m*,
  - *A*[*i*] ≥ *x*,
  - *A*[*j*] ≤ *x*.

  If *i* < *j* at line 11, after swapping *A*[*i*] and *A*[*j*]. we have *A*[*i*] ≤ *x*, and *A*[*j*] ≥ *x*. Now the
  (*n* + 1)-th iteration begins, the loop invariant still holds.

  If *i* ≥ *j* at line 11, the algorithm terminates, so the loop invariant still holds.

***c.***

Since *A*[*p*‥*r*] contains at least two elements, we know that *p* < *r*.

First, we prove that the returned *j* is less than *r*:

At the beginning of the first iteration, *i* = *p* - 1, and *j* = *r* + 1. Notice that line 6 and line 9 will be
executed at least once, also, we have *A*[*p*] = *x*, so we know *i* must equal to *p* in line 11. If line 6 is executed
only once, *j* will equal to *p* at line 11. Since *p* < *r*, we know *i* < *j*, so the second iteration of the outer
loop will be executed, which will cause *j* being decremented to a value that is less than *r*. If line 6 is executed
more than once, *j* is still decremented to a value that is less than *r*.

Then, we prove that the returned *j* is greater than or equal to *i*:

If the loop terminates at the first iteration,
*i* will be equal to *p*, otherwise the second iteration will be executed, which will cause *i* being incremented to a
value that is more than *p*.

***d.***

The outer loop has the following loop invariant:

- At the beginning of each iteration, elements in *A*[*p*‥*i*] is less than or equal to *x*, and elements in
  *A*[*j*‥*r*] is greater than or equal to *x*.

Proof by induction:

- Base case: In the beginning of the first iteration, both *A*[*p*‥*i*] and *A*[*j*‥*r*] is empty, so the claim holds.
- Inductive case: In each iteration of the outer loop, Let *m*, *n* be the initial values of *i*, *j*. In the loop body,
  we find the fist element from the right that is less than or equal to *x*, and the first element from the left that is
  greater than or equal to *x*, then swap them. After swapping, we know that every element in *A*[*m* + 1‥*i*] is less
  than or equal to *x*, and every element in *A*[*j* + 1‥*n*] is greater than or equal to *x*. By induction, we know
  that *A*[*p*‥*m*] is less than or equal to *x*, and *A*[*n*‥*r*] is greater than or equal to *x*. So elements in
  *A*[*p*‥*i*] is less than or equal to *x*, and elements in *A*[*j*‥*r*] is greater than or equal to *x* at the
  beginning of next iteration.

  If the algorithm terminates, at line 11, we have *i* ≥ *j*, and elements in *A*[*p*‥*i* - 1] is less than or equal to
  *x*, and elements in *A*[*j* + 1‥*r*] is greater than or equal to *x*. So there are two cases:

  ```text
  ┌─────┬─────┬─────┬─────┬─────┐
  │  p  │  …  │ i j │  …  │  r  │
  ├─────┼─────┼─────┼─────┼─────┤
  │ ≤ x │ ≤ x │ = x │ ≥ x │ ≥ x │
  └─────┴─────┴─────┴─────┴─────┘

  ┌─────┬─────┬─────┬─────┬─────┬─────┐
  │  p  │  …  │  j  │  i  │  …  │  r  │
  ├─────┼─────┼─────┼─────┼─────┼─────┤
  │ ≤ x │ ≤ x │ ≤ x │ ≥ x │ ≥ x │ ≥ x │
  └─────┴─────┴─────┴─────┴─────┴─────┘
  ```

  In both cases, elements in *A*[*p*‥*j*] is less than or equal to *x*, and elements in *A*[*j* + 1‥*r*] is greater
  than or equal to *x*.

***e.***

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_7_quicksort/problems/problem_7_1_hoare_partition_correctness.rs).

##### 7-2 Quicksort with equal element values

> The analysis of the expected running time of randomized quicksort in Section 7.4.2 assumes that all element values are
> distinct. In this problem, we examine what happens when they are not.
>
> ***a.*** Suppose that all element values are equal. What would be randomized quicksort’s running time in this case?
>
> ***b.*** The *Partition* procedure returns an index *q* such that each element of *A*[*p*‥*q* - 1] is less than or
> equal to *A*[*q*] and each element of *A*[*q* + 1‥*r*] is greater than *A*[*q*]. Modify the *Partition* procedure to
> produce a procedure *Partition′*(*A*, *p*, *r*), which permutes the elements of *A*[*p*‥*r*] and returns two indices
> *q* and *t*, where *p* ≤ *q* ≤ *t* ≤ r, such that
>
> - all elements of *A*[*q*‥*t*] are equal,
> - each element of *A*[*p*‥*q* - 1] is less than *A*[*q*], and
> - each element of *A*[*t* + 1‥*r*] is greater than *A*[*q*].
>
> Like *Partition*, your *Partition′* procedure should take Θ(*r* - *p*) time.
>
> ***c.*** Modify the *Randomized-Partition* procedure to call *Partition′*, and name the new procedure
> *Randomized-Quicksort′*. Then modify the *Quicksort* procedure to produce a procedure *Quicksort′*(*A*, *p*, *r*) that
> calls *Randomized-Partition′* and recurses only on partitions of elements not known to be equal to each other.
>
> ***d.*** Using *Quicksort′*, how would you adjust the analysis in Section 7.4.2 to avoid the assumption that all
> elements are distinct?

***a.***

Θ($n^2$).

***b.***

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_7_quicksort/problems/problem_7_2_quicksort_with_equal_element_values.rs).

***c.***

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_7_quicksort/problems/problem_7_2_quicksort_with_equal_element_values.rs).

***d.***

*Skipped.*

##### 7-3 Alternative quicksort analysis

> An alternative analysis of the running time of randomized quicksort focuses on the expected running time of each
> individual recursive call to *Randomized-Quicksort*, rather than on the number of comparisons performed.
>
> ***a.*** Argue that, given an array of size *n*, the probability that any particular element is chosen as the pivot is
> 1 / *n*. Use this to define indicator random variables $X_i$ = I{*i*th smallest element is chosen as the pivot}. What
> is E[$X_i$]?
>
> ***b.*** Let *T*(*n*) be a random variable denoting the running time of quicksort on an array of size *n*. Argue that
>
> - E[*T*(*n*)] = E$\displaystyle\left[∑_{q = 1}^n X_q \left(T\left(q - 1\right) + T\left(n - q\right) + Θ\left(n\right)\right)\right]$. (7.5)
>
> ***c.*** Show that we can rewrite equation (7.5) as
>
> - E[*T*(*n*)] = $\displaystyle\frac{2}{n} ∑_{q = 2}^{n - 1} \operatorname{E}\left[T\left(q\right)\right] + Θ\left(n\right)$. (7.6)
>
> ***d.*** Show that
>
> - $\displaystyle ∑_{k = 2}^{n - 1} k \lg k ≤ \frac{1}{2} n^2 \lg n - \frac{1}{8} n^2$. (7.7)
>
> (*Hint:* Split the summation into two parts, one for *k* = 2, 3, …, ⌈*n* / 2⌉ - 1 and one for *k* = ⌈*n* / 2⌉, …,
> *n* - 1.)
>
> ***e.*** Using the bound from equation (7.7), show that the recurrence in equation (7.6) has the solution
> E[*T*(*n*)] = Θ(*n* lg *n*). (*Hint:* Show, by substitution, that E[*T*(*n*)] ≤ *a* *n* lg *n* for sufficiently large
> *n* and for some positive constant *a*.)

*Skipped.*

##### 7-4 Stack depth for quicksort

> The *Quicksort* algorithm of Section 7.1 contains two recursive calls to itself. After *Quicksort* calls *Partition*,
> it recursively sorts the left subarray and then it recursively sorts the right subarray. The second recursive call in
> *Quicksort* is not really necessary; we can avoid it by using an iterative control structure. This technique, called
> ***tail recursion***, is provided automatically by good compilers. Consider the following version of quicksort, which
> simulates tail recursion:
>
> *Tail-Recursive-Quicksort*(*A*, *p*, *r*)
>
> 1. **while** *p* < *r*
> 2. &nbsp;&nbsp;&nbsp;&nbsp;// Partition and sort left subarray.
> 3. &nbsp;&nbsp;&nbsp;&nbsp;*q* = *Partition*(*A*, *p*, *r*)
> 4. &nbsp;&nbsp;&nbsp;&nbsp;*Tail-Recursive-Quicksort*(*A*, *p*, *q* - 1)
> 5. &nbsp;&nbsp;&nbsp;&nbsp;*p* = *q* + 1
>
> ***a.*** Argue that *Tail-Recursive-Quicksort*(*A*, 1, *A*.*length*) correctly sorts the array *A*.
>
> Compilers usually execute recursive procedures by using a ***stack*** that contains pertinent information, including
> the parameter values, for each recursive call. The information for the most recent call is at the top of the stack,
> and the information for the initial call is at the bottom. Upon calling a procedure, its information is ***pushed***
> onto the stack; when it terminates, its information is ***popped***. Since we assume that array parameters are
> represented by pointers, the information for each procedure call on the stack requires *O*(1) stack space. The
> ***stack depth*** is the maximum amount of stack space used at any time during a computation.
>
> ***b.*** Describe a scenario in which *Tail-Recursive-Quicksort*’s stack depth is Θ(*n*) on an *n*-element input
> array.
>
> ***c.*** Modify the code for *Tail-Recursive-Quicksort* so that the worst-case stack depth is Θ(lg *n*). Maintain the
> O(*n* lg *n*) expected running time of the algorithm.

***a.***

The loop has the following invariant:

- Let *m* be the initial value of *p*. At the beginning of each iteration of the loop, *A*[*m*‥*p* - 1] is in sorted
  order, and no elements in *A*[*m*‥*p* - 1] is more than *A*[*p*].

Proof by induction:

- Base case: At the beginning of the first iteration, *p* = *m*, so *A*[*m*‥*p* - 1] is empty, the invariant holds.
- Inductive case: At the beginning of the *n*th iteration, where *n* ≥ 1, by induction, we know that *A*[*m*‥*p* - 1] is
  in sorted order, and no elements in *A*[*m*‥*p* - 1] is more than *A*[*p*].

  After calling *Partition* in line 3, we know that elements in *A*[*p*‥*q* - 1] is less than or equal to *A*[*q*], and
  elements in *A*[*q* + 1‥*r*] is greater than *A*[*q*].

  After calling *Tail-Recursive-Quicksort* in line 4, we know that *A*[*p*‥*q* - 1] are in sorted order. Since no
  elements in *A*[*m*‥*p* - 1] is more than *A*[*p*], *A*[*m*‥*q*] is in sorted order. After setting *p* = *q* + 1 in
  line 5, the next iteration begins, so the invariant still holds.

When the loop terminates, according to the loop invariant, we know that subarray *A*[*p*‥*r*] will be in sorted order.

***b.***

When the array is in increasing order.

***c.***

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_7_quicksort/problems/problem_7_4_stack_depth_for_quicksort.rs).

##### 7-5 Median-of-3 partition

> One way to improve the *Randomized-Quicksort* procedure is to partition around a pivot that is chosen more carefully
> than by picking a random element from the subarray. One common approach is the ***median-of-3*** method: choose the
> pivot as the median (middle element) of a set of 3 elements randomly selected from the subarray. (See Exercise 7.4-6.)
> For this problem, let us assume that the elements in the input array *A*[1‥*n*] are distinct and that *n* ≥ 3. We
> denote the sorted output array by *A*′[1‥*n*]. Using the median-of-3 method to choose the pivot element *x*, define
> $p_i$ = Pr{*x* = *A*′[*i*]}.
>
> ***a.*** Give an exact formula for $p_i$ as a function of *n* and *i* for *i* = 2, 3, …, *n* - 1. (Note that
> $p_1 = p_n = 0$.)
>
> ***b.*** By what amount have we increased the likelihood of choosing the pivot as *x* = *A*′[⌊(*n* + 1) / 2⌋], the
> median of *A*[1‥*n*], compared with the ordinary implementation? Assume that *n* → ∞, and give the limiting ratio of
> these probabilities.
>
> ***c.*** If we define a “good” split to mean choosing the pivot as *x* = *A*′[*i*], where *n* / 3 ≤ *i* ≤ 2 *n* / 3,
> by what amount have we increased the likelihood of getting a good split compared with the ordinary implementation?
> (*Hint:* Approximate the sum by an integral.)
>
> ***d.*** Argue that in the Ω(*n* lg *n*) running time of quicksort, the median-of-3 method affects only the constant
> factor.

*Skipped.*

The median-of-3 quicksort is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_7_quicksort/problems/problem_7_5_median_of_3_partition.rs).

##### 7-6 Fuzzy sorting of intervals

> Consider a sorting problem in which we do not know the numbers exactly. Instead, for each number, we know an interval
> on the real line to which it belongs. That is, we are given *n* closed intervals of the form [$a_i$, $b_i$], where
> $a_i$ ≤ $b_i$. We wish to ***fuzzy-sort*** these intervals, i.e., to produce a permutation ⟨$i_1$, $i_2$, …, $i_n$⟩ of
> the intervals such that for *j* = 1, 2, …, *n*, there exist $c_j$ ∈ [$a_{i_j}$, $a_{i_j}$] satisfying
> $c_1$ ≤ $c_2$ ≤ ⋯ ≤ $c_n$.
>
> ***a.*** Design a randomized algorithm for fuzzy-sorting *n* intervals. Your algorithm should have the general
> structure of an algorithm that quicksorts the left endpoints (the $a_i$ values), but it should take advantage of
> overlapping intervals to improve the running time. (As the intervals overlap more and more, the problem of
> fuzzy-sorting the intervals becomes progressively easier. Your algorithm should take advantage of such overlapping, to
> the extent that it exists.)
>
> ***b.*** Argue that your algorithm runs in expected time Θ(*n* lg *n*) in general, but runs in expected time Θ(*n*)
> when all of the intervals overlap (i.e., when there exists a value *x* such that *x* ∈ [$a_i$, $b_i$] for all *i*).
> Your algorithm should not be checking for this case explicitly; rather, its performance should naturally improve as
> the amount of overlap increases.

***a.*** Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_7_quicksort/problems/problem_7_6_fuzzy_sorting_of_intervals.rs).

***b.*** *Skipped.*

### 8 Sorting in Linear Time

#### 8.1 Lower bounds for sorting

##### 8.1-1

> What is the smallest possible depth of a leaf in a decision tree for a comparison sort?

*n* - 1.

Because for any element in the array to be sorted, it should be compared at lease once, otherwise we couldn’t determine
its position in the sorted array. So if we must compare every element at least once, we need at least *n* - 1
comparisons.

##### 8.1-2

> Obtain asymptotically tight bounds on lg(*n*!) without using Stirling’s approximation. Instead, evaluate the summation
> $∑_{k = 1}^{n} \lg k$ using techniques from Section A.2.

*Skipped.*

##### 8.1-3

> Show that there is no comparison sort whose running time is linear for at least half of the *n*! inputs of length *n*.
> What about a fraction of 1 / *n* of the inputs of length *n*? What about a fraction 1 / $2^n$?

*Skipped.*

##### 8.1-4

> Suppose that you are given a sequence of *n* elements to sort. The input sequence consists of *n* / *k* subsequences,
> each containing *k* elements. The elements in a given subsequence are all smaller than the elements in the succeeding
> subsequence and larger than the elements in the preceding subsequence. Thus, all that is needed to sort the whole
> sequence of length *n* is to sort the *k* elements in each of the *n* / *k* subsequences. Show an Ω(*n* lg *k*) lower
> bound on the number of comparisons needed to solve this variant of the sorting problem. (*Hint:* It is not rigorous to
> simply combine the lower bounds for the individual subsequences.)

*Skipped.*

#### 8.2 Counting sort

##### 8.2-1

> Using Figure 8.2 as a model, illustrate the operation of *Counting-Sort* on the array
> *A* = ⟨6, 0, 2, 0, 1, 3, 4, 6, 1, 3, 2⟩.

*Skipped.*

##### 8.2-2

> Prove that *Counting-Sort* is stable.

The key is the reverse iterating of line 10.

For all elements in *A* that equals to *k*, the last one will be put at the position *C*[*k*], and then *C*[*k*] will be
decremented by one, so the second last element will be put before the last element and so on. So the relative order of
equal elements is kept, which means the algorithm is stable.

##### 8.2-3

> Suppose that we were to rewrite the **for** loop header in line 10 of the *Counting-Sort* as
>
> 10 **for** *j* = 1 **to** *A*.*length*
>
> Show that the algorithm still works properly. Is the modified algorithm stable?

It is the same as the original algorithm except that the order of the elements with the same value is reversed. The
modified algorithm is not stable.

The algorithm is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_8_sorting_in_linear_time/section_8_2_counting_sort/exercises/exercise_8_2_3.rs).

##### 8.2-4

> Describe an algorithm that, given *n* integers in the range 0 to *k*, preprocesses its input and then answers any
> query about how many of the *n* integers fall into a range [*a*‥*b*] in *O*(1) time. Your algorithm should use
> Θ(*n* + *k*) preprocessing time.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_8_sorting_in_linear_time/section_8_2_counting_sort/exercises/exercise_8_2_4.rs).

#### 8.3 Radix sort

##### 8.3-1

> Using Figure 8.3 as a model, illustrate the operation of *Radix-Sort* on the following list of English words: COW,
> DOG, SEA, RUG, ROW, MOB, BOX, $T_A$B, BAR, EAR, $T_A$R, DIG, BIG, TEA, NOW, FOX.

*Skipped.*

##### 8.3-2

> Which of the following sorting algorithms are stable: insertion sort, merge sort, heapsort, and quicksort? Give a
> simple scheme that makes any comparison sort stable. How much additional time and space does your scheme entail?

1. Insertion sort and merge sort are stable.
2. First, convert each element *A*[*i*] to the tuple (*A*[*i*], *i*), then sort the converted array. When comparing two
   tuples, first compare the first element. If they equal to each other, compare the second element.

   Both additional time and additional space are Θ(*n*).

The algorithm is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_8_sorting_in_linear_time/section_8_3_radix_sort/exercises/exercise_8_3_2.rs).

##### 8.3-3

> Use induction to prove that radix sort works. Where does your proof need the assumption that the intermediate sort is
> stable?

The loop invariant:

- After the *i*th iteration, array *A* is sorted on the *i* lowest-order digits.

Proof by induction:

- Base case: After the first iteration, array *A* is being sorted on the first digit of its elements, so the array is
  sorted on the lowest-order digit.
- Indictive case: At the (*i* + 1)-th iteration, the array is being sorted on the (*i* + 1)-th lowest-order digit with a
  stable sort, which means the elements with the same (*i* + 1)-th lowest-order digit will be grouped together in a
  sorted order; also, because the sort is stable, the relative order of the elements in any group is kept. By induction,
  we know that after the *i*th iteration, array *A* is sorted on the *i* lowest-order digits, so the elements in each
  group is sorted, which means the whole array is sorted on the (*i* + 1) lowest-order digits.

##### 8.3-4

> Show how to sort *n* integers in the range 0 to $n^3$ - 1 in *O*(*n*) time.

Represent the integers with lg *n* bit digits, then the running time will be:

Θ(*d* / *r* (*n* + $2^r$))\
=Θ(lg $n^3$ / lg *n* (*n* + $2^{\lg n}$))\
= Θ(6 *n*)\
= *O*(*n*).

##### 8.3-5 ★

> In the first card-sorting algorithm in this section, exactly how many sorting passes are needed to sort *d*-digit
> decimal numbers in the worst case? How many piles of cards would an operator need to keep track of in the worst case?

1. $∑_{i = 0}^{d - 1} 10^i$ = ($10^d - 1$) / 9.
2. 9 *d*.

#### 8.4 Bucket sort

##### 8.4-1

> Using Figure 8.4 as a model, illustrate the operation of *Bucket-Sort* on the array
> *A* = ⟨.79, .13, .16, .64, .39, .20, .89, .53, .71, .42⟩.

*Skipped.*

##### 8.4-2

> Explain why the worst-case running time for bucket sort is Θ($n^2$). What simple change to the algorithm preserves its
> linear average-case running time and makes its worst-case running time O(*n* lg *n*)?

1. If all elements are put into one single bucket, the running time become Θ($n^2$).
2. Use merge sort instead of insertion sort to sort elements in buckets.

##### 8.4-3

> Let *X* be a random variable that is equal to the number of heads in two flips of a fair coin. What is E[$X^2$]? What
> is $\operatorname{E}^2\left[X\right]$?

E[$X^2$]\
= $0^2$ × 1 / 4 + $1^2$ × 1 / 2 + $2^2$ × 1 / 4\
= 3 / 2.

$\operatorname{E}^2\left[X\right]$\
= $\left(0 × 1 / 4 + 1 × 1 / 2 + 2 × 1 / 4\right)^2$\
= 1.

##### 8.4-4 ★

> We are given *n* points in the unit circle, $p_i$ = ($x_i$, $y_i$), such that 0 < $x_i^2 + y_i^2$ ≤ 1 for
> *i* = 1, 2, …, *n*. Suppose that the points are uniformly distributed; that is, the probability of finding a point in
> any region of the circle is proportional to the area of that region. Design an algorithm with an average-case running
> time of Θ(*n*) to sort the *n* points by their distances $d_i = \sqrt{x_i^2 + y_i^2}$ from the origin. (*Hint:* Design
> the bucket sizes in *Bucket-Sort* to reflect the uniform distribution of the points in the unit circle.)

Question: why can’t $x_i^2 + y_i^2$ be zero?

Since the probability is proportional to the area, and the whole area is *π*, the we construct circles with area
*π* / *n*, 2 *π* / *n*, …, (*n* - 1) *π* / *n*, *π*, and use their boundaries as the bucket boundaries, that is we
construct buckets with boundaries of $\sqrt{1 / n}$, $\sqrt{2 / n}$, …, $\sqrt{\left(n - 1\right) / n}$, 1.

To implement the algorithm, we need to put point (*x*, *y*), in bucket ⌈*n* ($x^2 + y^2$)⌉ - 1.

The solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_8_sorting_in_linear_time/section_8_4_bucket_sort/exercises/exercise_8_4_4.rs).

##### 8.4-5 ★

> A ***probability distribution function*** *P*(*x*) for a random variable *X* is defined by *P*(*x*) = Pr{*X* ≤ *x*}.
> Suppose that we draw a list of *n* random variables $X_1$, $X_2$, …, $X_n$ from a continuous probability distribution
> function *P* that is computable in *O*(1) time. Give an algorithm that sorts these numbers in linear average-case
> time.

Using bucket sort by putting *X* into the bucket ⌈*n* *P*(*X*)⌉ - 1.

Proof: the probability of *X* going into bucket *i* is:

Pr{⌈*n* *P*(*X*)⌉ - 1 = *i*}\
= Pr{⌈*n* *P*(*X*)⌉ = *i* + 1}\
= Pr{*i* < *n* *P*(*X*) ≤ *i* + 1}\
= Pr{*i* / *n* < *P*(*X*) ≤ (*i* + 1) / *n*}\
= Pr{*P*(*X*) ≤ (*i* + 1) / *n*} - Pr{*P*(*X*) ≤ *i* / *n*}.

Since

Pr{*P*(*X*) ≤ *t*}\
= Pr{*X* ≤ $P^{-1}\left(t\right)$}\
= $P\left(P^{-1}\left(t\right)\right)$\
= *t*,

Pr{*P*(*X*) ≤ (*i* + 1) / *n*} - Pr{*P*(*X*) ≤ *i* / *n*}\
= (*i* + 1) / *n* - *i* / *n*\
= 1 / *n*.

So the probability of *X* going into bucket *i* is 1 / *n*.

The solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_8_sorting_in_linear_time/section_8_4_bucket_sort/exercises/exercise_8_4_5.rs).

#### 8.X Problems

##### 8-1 Probabilistic lower bounds on comparison sorting

> In this problem, we prove a probabilistic Ω(*n* lg *n*) lower bound on the running time of any deterministic or
> randomized comparison sort on *n* distinct input elements. We begin by examining a deterministic comparison sort *A*
> with decision tree $T_A$. We assume that every permutation of *A*’s inputs is equally likely.
>
> ***a.*** Suppose that each leaf of $T_A$ is labeled with the probability that it is reached given a random input.
> Prove that exactly *n*! leaves are labeled 1 / *n*! and that the rest are labeled 0.
>
> ***b.*** Let *D*(*T*) denote the external path length of a decision tree *T*; that is, *D*(*T*) is the sum of the
> depths of all the leaves of *T*. Let *T* be a decision tree with *k* > 1 leaves, and let *LT* and *RT* be the left and
> right subtrees of *T*. Show that *D*(*T*) = *D*(*LT*) + *D*(*RT*) + *k*.
>
> ***c.*** Let *d*(*k*) be the minimum value of *D*(*T*) over all decision trees *T* with *k* > 1 leaves. Show that
> *d*(*k*) = $\min_{1 ≤ i ≤ k - 1} \left\lbrace d(i) + d(k - i) + k\right\rbrace$. (*Hint:* Consider a decision tree *T*
> with *k* leaves that achieves the minimum. Let $i_0$ be the number of leaves in *LT* and *k* - $i_0$ the number of
> leaves in *RT*.)
>
> ***d.*** Prove that for a given value of *k* > 1 and *i* in the range 1 ≤ *i* ≤ *k* - 1, the function
> *i* lg *i* + (*k* - *i*) lg(*k* - *i*) is minimized at *i* = *k* / 2. Conclude that *d*(*k*) = Ω(*k* lg *k*).
>
> ***e.*** Prove that *D*($T_A$) = Ω(*n*! lg(*n*!)), and conclude that the average-case time to sort *n* elements is
> Ω(*n* lg *n*).
>
> Now, consider a *randomized* comparison sort *B*. We can extend the decision-tree model to handle randomization by
> incorporating two kinds of nodes: ordinary comparison nodes and “randomization” nodes. A randomization node models a
> random choice of the form *Random*(1, *r*) made by algorithm *B*; the node has *r* children, each of which is equally
> likely to be chosen during an execution of the algorithm.
>
> ***f.*** Show that for any randomized comparison sort *B*, there exists a deterministic comparison sort *A* whose
> expected number of comparisons is no more than those made by *B*.

*Skipped.*

##### 8-2 Sorting in place in linear time

> Suppose that we have an array of *n* data records to sort and that the key of each record has the value 0 or 1. An
> algorithm for sorting such a set of records might possess some subset of the following three desirable
> characteristics:
>
> 1. The algorithm runs in *O*(*n*) time.
> 2. The algorithm is stable.
> 3. The algorithm sorts in place, using no more than a constant amount of storage space in addition to the original
>    array.
>
> ***a.*** Give an algorithm that satisfies criteria 1 and 2 above.
>
> ***b.*** Give an algorithm that satisfies criteria 1 and 3 above.
>
> ***c.*** Give an algorithm that satisfies criteria 2 and 3 above.
>
> ***d.*** Can you use any of your sorting algorithms from parts (a)–(c) as the sorting method used in line 2 of
> *Radix-Sort*, so that *Radix-Sort* sorts *n* records with *b*-bit keys in *O*(*b* *n*) time? Explain how or why not.
>
> ***e.*** Suppose that the *n* records have keys in the range from 1 to *k*. Show how to modify counting sort so that
> it sorts the records in place in *O*(*n* + *k*) time. You may use *O*(*k*) storage outside the input array. Is your
> algorithm stable? (*Hint:* How would you do it for *k* = 3?)

***a.*** Counting sort.

***b.*** The *Partition* procedure used in quicksort, and use 0 as pivot.

***c.*** Insertion sort.

***d.***

- (a) Counting sort: No. Because it requires Ω($2^b$) running time.
- (b) Partition: No. It does not sort keys with more than one bit.
- (c) Insertion sort: Yes.

***e.***

The algorithm is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_8_sorting_in_linear_time/problems/problem_8_2_sorting_in_place_in_linear_time.rs).
It is unstable.

##### 8-3 Sorting variable-length items

> ***a.*** You are given an array of integers, where different integers may have different numbers of digits, but the
> total number of digits over all the integers in the array is *n*. Show how to sort the array in *O*(*n*) time.
>
> ***b.*** You are given an array of strings, where different strings may have different numbers of characters, but the
> total number of characters over all the strings is *n*. Show how to sort the strings in *O*(*n*) time.
>
> (Note that the desired order here is the standard alphabetical order; for example, `a` < `ab` < `b`.)

***a.*** We only consider positive integers without leading zeroes. For each integer *k*, we put it into the bucket *i*
if it has *i* digits. Then radix sort each bucket. Finally concatenate elements in each bucket.

***b.*** Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_8_sorting_in_linear_time/problems/problem_8_3_sorting_variable_length_items.rs).

##### 8-4 Water jugs

> Suppose that you are given *n* red and *n* blue water jugs, all of different shapes and sizes. All red jugs hold
> different amounts of water, as do the blue ones. Moreover, for every red jug, there is a blue jug that holds the same
> amount of water, and vice versa.
>
> Your task is to find a grouping of the jugs into pairs of red and blue jugs that hold the same amount of water. To do
> so, you may perform the following operation: pick a pair of jugs in which one is red and one is blue, fill the red jug
> with water, and then pour the water into the blue jug. This operation will tell you whether the red or the blue jug
> can hold more water, or that they have the same volume. Assume that such a comparison takes one time unit. Your goal
> is to find an algorithm that makes a minimum number of comparisons to determine the grouping. Remember that you may
> not directly compare two red jugs or two blue jugs.
>
> ***a.*** Describe a deterministic algorithm that uses Θ($n^2$) comparisons to group the jugs into pairs.
>
> ***b.*** Prove a lower bound of Ω(*n* lg *n*) for the number of comparisons that an algorithm solving this problem
> must make.
>
> ***c.*** Give a randomized algorithm whose expected number of comparisons is O(*n* lg *n*), and prove that this bound
> is correct. What is the worst-case number of comparisons for your algorithm?

***a.*** For each red jug, we compare it with every blue jug, and find the one with the same volume.

***b.*** It is like sorting, if our algorithm correctly groups jugs into pairs, there must be *n*! different grouping
possible result. So the decision tree must at least have the height lg *n*! = Ω(*n* lg *n*).

***c.*** Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_8_sorting_in_linear_time/problems/problem_8_4_water_jugs.rs).
The worst-cast running time is Θ($n^2$).

##### 8-5 Average sorting

> Suppose that, instead of sorting an array, we just require that the elements increase on average. More precisely, we
> call an *n*-element array *A* ***k-sorted*** if, for all *i* = 1, 2, …, *n* - *k*, the following holds:
>
> $\frac{∑_{j = i}^{i + k - 1} A\left[j\right]}{k} ≤ \frac{∑_{j = i + 1}^{i + k} A\left[j\right]}{k}$.
>
> ***a.*** What does it mean for an array to be 1-sorted?
>
> ***b.*** Give a permutation of the numbers 1, 2, …, 10 that is 2-sorted, but not sorted.
>
> ***c.*** Prove that an *n*-element array is *k*-sorted if and only if *A*[*i*] ≤ *A*[*i* + *k*] for all
> *i* = 1, 2, …, *n* - *k*.
>
> ***d.*** Give an algorithm that *k*-sorts an *n*-element array in *O*(*n* lg(*n* / *k*)) time.
>
> We can also show a lower bound on the time to produce a *k*-sorted array, when *k* is a constant.
>
> ***e.*** Show that we can sort a *k*-sorted array of length *n* in *O*(*n* lg *k*) time. (*Hint:* Use the solution to
> Exercise 6.5-9.)
>
> ***f.*** Show that when *k* is a constant, *k*-sorting an *n*-element array requires Ω(*n* lg *n*) time. (*Hint:* Use
> the solution to the previous part along with the lower bound on comparison sorts.)

***a.***

It means the array is sorted.

***b.***

⟨2, 1, 4, 3, 6, 5, 8, 7, 10, 9⟩.

***c.***

$\frac{∑_{j = i}^{i + k - 1} A\left[j\right]}{k} ≤ \frac{∑_{j = i + 1}^{i + k} A\left[j\right]}{k}$\
⇔ $∑_{j = i}^{i + k - 1} A\left[j\right] ≤ ∑_{j = i + 1}^{i + k} A\left[j\right]$\
⇔ $A\left[i\right] + ∑_{j = i + 1}^{i + k - 1} A\left[j\right] ≤ ∑_{j = i + 1}^{i + k - 1} A\left[j\right] + A\left[i + k\right]$\
⇔ $A\left[i\right] ≤ A\left[i + k\right]$.

***d.***

Running an *O*(*n* lg *n*) running time sorting algorithm on subarrays
⟨*A*[*j*], *A*[*k* + *j*], *A*[2 *k* + *j*], …⟩ for *j* = 0, 1, …, *k* - 1.

***e.***

A *k*-sorted array contains at most *k* sorted subarrays of length *n* / *k*, we can merge *k* sorted arrays in
*O*(*n* / *k* lg *k*) = *O*(*n* lg *k*) time.

***f.***

Proof by contradiction: If *k*-sorting an *n*-element array requires *o*(*n* lg *n*) time, then sorting an *n* element
will only need *o*(*n* lg *n*) + *O*(*n* lg *k*) = *o*(*n* lg *n*) time, which is impossible. So *k*-sorting an
*n*-element array requires Ω(*n* lg *n*) time.

##### 8-6 Lower bound on merging sorted lists

> The problem of merging two sorted lists arises frequently. We have seen a procedure for it as the subroutine *Merge*
> in Section 2.3.1. In this problem, we will prove a lower bound of 2 *n* - 1 on the worst-case number of comparisons
> required to merge two sorted lists, each containing *n* items.
>
> First we will show a lower bound of 2 *n* - *o*(*n*) comparisons by using a decision tree.
>
> ***a.*** Given 2 *n* numbers, compute the number of possible ways to divide them into two sorted lists, each with *n*
> numbers.
>
> ***b.*** Using a decision tree and your answer to part (a), show that any algorithm that correctly merges two sorted
> lists must perform at least 2 *n* - *o*(*n*) comparisons.
>
> Now we will show a slightly tighter 2 *n* - 1 bound.
>
> ***c.*** Show that if two elements are consecutive in the sorted order and from different lists, then they must be
> compared.
>
> ***d.*** Use your answer to the previous part to show a lower bound of 2 *n* - 1 comparisons for merging two sorted
> lists.

***a.***

*C*(2 *n*, *n*) = $\frac{(2 n)!}{\left(n!\right)^2}$.

***b.***

The decision tree has at least $\frac{(2 n)!}{\left(n!\right)^2}$ nodes, so the height of the tree is at least

$\lg \frac{(2 n)!}{\left(n!\right)^2}$\
= lg ((2 *n*)!) - 2 lg(*n*!)\
= $∑_{i = 1}^{2 n} \lg i - 2 ∑_{i = 1}^{n} \lg i$\
= $∑_{i = n + 1}^{2 n} \lg i - ∑_{i = 1}^{n} \lg i$\
= $∑_{i = 1}^{n} \lg \left(n + i\right) - ∑_{i = 1}^{n} \lg i$\
= $∑_{i = 1}^{n} \lg (1 + n / i)$.

*Skipped.*

***c.***

*Skipped.*

***d.***

*Skipped.*

##### 8-7 The 0-1 sorting lemma and columnsort

> A ***compare-exchange*** operation on two array elements *A*[*i*] and *A*[*j*], where *i* < *j*, has the form
>
> *Compare-Exchange*(*A*, *i*, *j*)
>
> 1. **if** *A*[*i*] > *A*[*j*]
> 2. &nbsp;&nbsp;&nbsp;&nbsp;exchange *A*[*i*] with *A*[*j*]
>
> After the compare-exchange operation, we know that *A*[*i*] ≤ *A*[*j*].
>
> An ***oblivious compare-exchange algorithm*** operates solely by a sequence of prespecified compare-exchange
> operations. The indices of the positions compared in the sequence must be determined in advance, and although they can
> depend on the number of elements being sorted, they cannot depend on the values being sorted, nor can they depend on
> the result of any prior compare-exchange operation. For example, here is insertion sort expressed as an oblivious
> compare-exchange algorithm:
>
> *Insertion-Sort*(*A*)
>
> 1. **for** *j* = 2 **to** *A*.*length*
> 2. &nbsp;&nbsp;&nbsp;&nbsp;**for** *i* = *j* - 1 **downto** 1
> 3. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Compare-Exchange**(*A*, *i*, *i* + 1)
>
> The ***0-1 sorting lemma*** provides a powerful way to prove that an oblivious compare-exchange algorithm produces a
> sorted result. It states that if an oblivious compare-exchange algorithm correctly sorts all input sequences
> consisting of only 0s and 1s, then it correctly sorts all inputs containing arbitrary values.
>
> You will prove the 0-1 sorting lemma by proving its contrapositive: if an oblivious compare-exchange algorithm fails
> to sort an input containing arbitrary values, then it fails to sort some 0-1 input. Assume that an oblivious
> compare-exchange algorithm X fails to correctly sort the array *A*[1‥*n*]. Let *A*[*p*] be the smallest value in A
> that algorithm X puts into the wrong location, and let *A*[*q*] be the value that algorithm X moves to the location
> into which *A*[*p*] should have gone. Define an array *B*[1‥*n*] of 0s and 1s as follows:
>
> *B*[*i*] = $\begin{cases}
> 0 &&\text{if } A\left[i\right] ≤ A\left[p\right],\\\\
> 1 &&\text{if } A\left[i\right] > A\left[p\right].
> \end{cases}$
>
> ***a.*** Argue that *A*[*q*] > *A*[*p*], so that *B*[*p*] = 0 and *B*[*q*] = 1.
>
> ***b.*** To complete the proof of the 0-1 sorting lemma, prove that algorithm X fails to sort array B correctly.
>
> Now you will use the 0-1 sorting lemma to prove that a particular sorting algorithm works correctly. The algorithm,
> ***columnsort***, works on a rectangular array of *n* elements. The array has *r* rows and *s* columns (so that
> *n* = *r* *s*), subject to three restrictions:
>
> - *r* must be even,
> - *s* must be a divisor of *r*, and
> - *r* ≥ 2 $s^2$.
>
> When columnsort completes, the array is sorted in ***column-major order***: reading down the columns, from left to
> right, the elements monotonically increase.
>
> Columnsort operates in eight steps, regardless of the value of *n*. The odd steps are all the same: sort each column
> individually. Each even step is a fixed permutation. Here are the steps:
>
> 1. Sort each column.
> 2. Transpose the array, but reshape it back to *r* rows and *s* columns. In other words, turn the leftmost column into
>    the top *r* / *s* rows, in order; turn the next column into the next *r* / *s* rows, in order; and so on.
> 3. Sort each column.
> 4. Perform the inverse of the permutation performed in step 2.
> 5. Sort each column.
> 6. Shift the top half of each column into the bottom half of the same column, and shift the bottom half of each column
>    into the top half of the next column to the right. Leave the top half of the leftmost column empty. Shift the
>    bottom half of the last column into the top half of a new rightmost column, and leave the bottom half of this new
>    column empty.
> 7. Sort each column.
> 8. Perform the inverse of the permutation performed in step 6.
>
> Figure 8.5 shows an example of the steps of columnsort with *r* = 6 and *s* = 3. (Even though this example violates
> the requirement that *r* ≥ 2 $s^2$, it happens to work.)
>
> ```text
> 10 14  5     4  1  2     4  8 10     1  3  6     1  4 11
>  8  7 17     8  3  5    12 16 18     2  5  7     3  8 14
> 12  1  6    10  7  6     1  3  7     4  8 10     6 10 17
> 16  9 11    12  9 11     9 14 15     9 13 15     2  9 12
>  4 15  2    16 14 13     2  5  6    11 14 17     5 13 16
> 18  3 13    18 15 17    11 13 17    12 16 18     7 15 18
>   (a)         (b)         (c)         (d)         (e)
>
>  1  4 11        5 10 16        4 10 16     1  7 13
>  2  8 12        6 13 17        5 11 17     2  8 14
>  3  9 14        7 15 18        6 12 18     3  9 15
>  5 10 16     1  4 11        1  7 13        4 10 16
>  6 13 17     2  8 12        2  8 14        5 11 17
>  7 15 18     3  9 14        3  9 15        6 12 18
>   (f)           (g)            (h)          (i)
> ```
>
> **Figure 8.5** The steps of columnsort. **(a)** The input array with 6 rows and 3 columns. **(b)** After sorting each
> column in step 1. **(c)** After transposing and reshaping in step 2. **(d)** After sorting each column in step 3.
> **(e)** After performing step 4, which inverts the permutation from step 2. **(f)** After sorting each column in step
> 5. **(g)** After shifting by half a column in step 6. **(h)** After sorting each column in step 7. **(i)** After
> performing step 8, which inverts the permutation from step 6. The array is now sorted in column-major order.
>
> ***c.*** Argue that we can treat columnsort as an oblivious compare-exchange algorithm, even if we do not know what
> sorting method the odd steps use.
>
> Although it might seem hard to believe that columnsort actually sorts, you will use the 0-1 sorting lemma to prove
> that it does. The 0-1 sorting lemma applies because we can treat columnsort as an oblivious compare-exchange
> algorithm. A couple of definitions will help you apply the 0-1 sorting lemma. We say that an area of an array is
> ***clean*** if we know that it contains either all 0s or all 1s. Otherwise, the area might contain mixed 0s and 1s,
> and it is ***dirty***. From here on, assume that the input array contains only 0s and 1s, and that we can treat it as
> an array with *r* rows and *s* columns.
>
> ***d.*** Prove that after steps 1–3, the array consists of some clean rows of 0s at the top, some clean rows of 1s at
> the bottom, and at most *s* dirty rows between them.
>
> ***e.*** Prove that after step 4, the array, read in column-major order, starts with a clean area of 0s, ends with a
> clean area of 1s, and has a dirty area of at most $s^2$ elements in the middle.
>
> ***f.*** Prove that steps 5–8 produce a fully sorted 0-1 output. Conclude that columnsort correctly sorts all inputs
> containing arbitrary values.
>
> ***g.*** Now suppose that *s* does not divide *r*. Prove that after steps 1–3, the array consists of some clean rows
> of 0s at the top, some clean rows of 1s at the bottom, and at most 2 *s* - 1 dirty rows between them. How large must
> *r* be, compared with *s*, for columnsort to correctly sort when *s* does not divide *r*?
>
> ***h.*** Suggest a simple change to step 1 that allows us to maintain the requirement that *r* ≥ 2 $s^2$ even when *s*
> does not divide *r*, and prove that with your change, columnsort correctly sorts.

*Skipped.*

### 9 Medians and Order Statistics

#### 9.1 Minimum and maximum

##### 9.1-1

> Show that the second smallest of *n* elements can be found with *n* + ⌈lg *n*⌉ - 2 comparisons in the worst case.
> (*Hint:* Also find the smallest element.)

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_9_medians_and_order_statistics/section_9_1_minimum_and_maximum/exercises/exercise_9_1_1.rs).

##### 9.1-2 ★

> Prove the lower bound of ⌈3 *n* / 2⌉ - 2 comparisons in the worst case to find both the maximum and minimum of *n*
> numbers. (*Hint:* Consider how many numbers are potentially either the maximum or minimum, and investigate how a
> comparison affects these counts.)

*Skipped.*

#### 9.2 Selection in expected linear time

##### 9.2-1

> Show that *Randomized-Select* never makes a recursive call to a 0-length array.

- At line 8, we know that:

  *i* < *k*\
  ⇒ *i* < *q* - *p* + 1\
  ⇒ 1 < *q* - *p* + 1\
  ⇒ (*q* - 1) - *p* > -1\
  ⇒ (*q* - 1) - *p* ≥ 0.

  So the recursion call in line 8 is on a non-empty subarray *A*[*p*‥*q* - 1].
- At line 9, we know that:

  *i* > *k*\
  ⇒ *i* > *q* - *p* + 1\
  ⇒ *r* - *p* + 1 > *q* - *p* + 1\
  ⇒ *r* - (*q* + 1) > -1\
  ⇒ *r* - (*q* + 1) ≥ 0.

  So the recursion call in line 8 is on a non-empty subarray *A*[*q* + 1‥*r*].

##### 9.2-2

> Argue that the indicator random variable $X_k$ and the value *T*(max(*k* - 1, *n* - *k*)) are independent.

*Skipped.*

##### 9.2-3

> Write an iterative version of *Randomized-Select*.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_9_medians_and_order_statistics/section_9_2_selection_in_expected_linear_time/exercises/exercise_9_2_3.rs).

##### 9.2-4

> Suppose we use *Randomized-Select* to select the minimum element of the array *A* = ⟨3, 2, 9, 0, 7, 5, 4, 8, 6, 1⟩.
> Describe a sequence of partitions that results in a worst-case performance of *Randomized-Select*.

On each partition, the maximum element is selected as the pivot.

#### 9.3 Selection in worst-case linear time

##### 9.3-1

> In the algorithm *Select*, the input elements are divided into groups of 5. Will the algorithm work in linear time if
> they are divided into groups of 7? Argue that *Select* does not run in linear time if groups of 3 are used.

Assume the elements are divided into groups of *k*, we know that the number of elements greater than *x* is at least
((*k* + 1) / 2) (⌈⌈*n* / *k*⌉ / 2⌉ - 2) ≥ (*k* + 1) *n* / (4 *k*) - *k* - 1. So in the worst cast, the
recursive call in step 5 is on at most (3 *k* - 1) *n* / (4 *k*) + *k* + 1. So for *n* that is large enough:

*T*(*n*)\
≤ *c* ⌈*n* / *k*⌉ + *c* ((3 *k* - 1) *n* / (4 *k*) + *k* + 1) + *a* *n*\
≤ *c* *n* / *k* + *c* + *c* (3 *k* - 1) *n* / (4 *k*) + *c* (*k* + 1) + *a* *n*\
= (3 / 4) *c* (*k* + 1) *n* / *k* + *c* (*k* + 2) + *a* *n*\
= (3 / 4) *c* (*k* + 1) *n* / *k* + *c* (*k* + 2) + *a* *n*\
= *c* *n* + ((*c* ((3 / 4) (*k* + 1) / *k* - 1) + *a*) *n* + *c* (*k* + 2)).

Solving *c* ((3 / 4) (*k* + 1) / *k* - 1) + *a* < 0, we get:

*c* > *a* / (1 - (3 / 4) (*k* + 1) / *k*).

- If *k* = 3, *c* > *a* / (1 - (3 / 4) (3 + 1) / 3) = ∞, so that’s not possible.
- If *k* = 7, *c* > *a* / (1 - (3 / 4) (7 + 1) / 7) = 7 *a*, so it is possible to select a *c* > 7 *a* to make *T*(*n*)
  linear.

##### 9.3-2

> Analyze *Select* to show that if *n* ≥ 140, then at least ⌈*n* / 4⌉ elements are greater than the median-of-medians
> *x* and at least ⌈*n* / 4⌉ elements are less than *x*.

*Skipped.*

##### 9.3-3

> Show how quicksort can be made to run in *O*(*n* lg *n*) time in the worst case, assuming that all elements are
> distinct.

When doing partition, use the *Select* procedure to find the median element as the pivot.

##### 9.3-4 ★

> Suppose that an algorithm uses only comparisons to find the *i*th smallest element in a set of *n* elements. Show that
> it can also find the *i* - 1 smaller elements and the *n* - *i* larger elements without performing any additional
> comparisons.

*Skipped.*

##### 9.3-5

> Suppose that you have a “black-box” worst-case linear-time median subroutine. Give a simple, linear-time algorithm
> that solves the selection problem for an arbitrary order statistic.

Replace the first 3 steps of *Select* to a step of using the linear-time median subroutine to find the pivot.

The running time becomes:

*T*(*n*) = *T*(*n* / 2) + *O*(*n*).

Using the master theorem, we have *T*(*n*) = *O*(*n*).

##### 9.3-6

> The *k*th ***quantiles*** of an *n*-element set are the *k* - 1 order statistics that divide the sorted set into *k*
> equal-sized sets (to within 1). Give an *O*(*n* lg *k*)-time algorithm to list the *k*th quantiles of a set.

*Skipped.*

##### 9.3-7

> Describe an *O*(*n*)-time algorithm that, given a set *S* of *n* distinct numbers and a positive integer *k* ≤ *n*,
> determines the *k* numbers in *S* that are closest to the median of *S*.

*Skipped.*

##### 9.3-8

> Let *X*[1‥*n*] and *Y*[1‥*n*] be two arrays, each containing *n* numbers already in sorted order. Give an
> *O*(lg *n*)-time algorithm to find the median of all 2 *n* elements in arrays *X* and *Y*.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_9_medians_and_order_statistics/section_9_3_selection_in_worst_case_linear_time/exercises/exercise_9_3_8.rs).

##### 9.3-9

> Professor Olay is consulting for an oil company, which is planning a large pipeline running east to west through an
> oil field of *n* wells. The company wants to connect a spur pipeline from each well directly to the main pipeline
> along a shortest route (either north or south), as shown in Figure 9.2. Given the *x*- and *y*-coordinates of the
> wells, how should the professor pick the optimal location of the main pipeline, which would be the one that minimizes
> the total length of the spurs? Show how to determine the optimal location in linear time.
>
> ```text
>                Well
>   Well          │
>    │   Well     │          Well
>    │    │       │   Well    │
> ──┬┴────┴───┬───┴────┴──┬───┴──┬──
>   │         │           │      │
>  Well       │          Well    │
>            Well               Well
> ```
>
> **Figure 9.2** Professor Olay needs to determine the position of the east-west oil pipeline that minimizes the total
> length of the north-south spurs.

Notice that the *x*-coordinates does not affect the total length of the north-south spurs, so we only consider the
*y*-coordinates.

First, the conclusion: we should put the pipeline anywhere between the lower median and upper median of the
*y*-coordinates of the wells.

Proof:

If we sort the *y*-coordinates of the wells by into an array *A*[1‥*n*], let *k* be the *y* coordinates of the pipeline,
then total length of the spurs is:

$∑_{i = 1}^n \left|A\left[i\right] - k\right|$ \
= $∑_{i = 1}^{\left\lfloor n / 2\right\rfloor} \left|A\left[i\right] - k\right| + ∑_{i = 1}^{\left\lfloor n / 2\right\rfloor} \left|A\left[n + 1 - i\right] - k\right|$ + (*n* mod 2) |*A*[⌈*n* / 2⌉] - *k*|\
= $∑_{i = 1}^{\left\lfloor n / 2\right\rfloor} \left(\left|A\left[i\right] - k\right| + \left|A\left[n + 1 - i\right] - k\right|\right)$ + (*n* mod 2) |*A*[⌈*n* / 2⌉] - *k*|.

If *A*[*i*] ≤ *k* ≤ *A*[*n* + 1 - *i*], |*A*[*i*] - *k*| + |*A*[*n* + 1 - *i*] - *k*| will have the minimal value of
*A*[*n* + 1 - *i*] - *A*[*i*], which means *k* should between *A*[*i*] and *A*[*n* + 1 - *i*]. If
*A*[⌊*n* / 2⌋] ≤ *A*[*k*] ≤ *A*[*n* + 1 - ⌊*n* / 2⌋], *k* is between every (*A*[*i*], *A*[*n* + 1 - *i*]) pair of wells.
If *n* is even, we can put the pipeline anywhere between *A*[*n* / 2] and *A*[*n* / 2 + 1]; if *n* is odd, we must put
the pipeline at coordinate *A*[(*n* + 1) / 2].

So we only need to use the *Select* procedure to find the median of all *y*-coordinates of the wells, which takes linear
time.

#### 9.X Problems

##### 9-1 Largest i numbers in sorted order

> Given a set of *n* numbers, we wish to find the *i* largest in sorted order using a comparison-based algorithm. Find
> the algorithm that implements each of the following methods with the best asymptotic worst-case running time, and
> analyze the running times of the algorithms in terms of *n* and *i*.
>
> ***a.*** Sort the numbers, and list the *i* largest.
>
> ***b.*** Build a max-priority queue from the numbers, and call *Extract-Max* *i* times.
>
> ***c.*** Use an order-statistic algorithm to find the *i*th largest number, partition around that number, and sort the
> *i* largest numbers.

***a.*** Merge sort, then list the *i* largest. Running time is *O*(*n* lg *n* + *i*).

***b.*** Running time is *O*(*n* + *i* lg *n*).

***c.*** Use *Select* to find the *i*th largest number, then partition around the *i*th largest number, then merge sort
*i* largest numbers. Running time is *O*(*n* + *i* lg *i*).

##### 9-2 Weighted median

> For *n* distinct elements $x_1$, $x_2$, …, $x_n$ with positive weights $w_1$, $w_2$, …, $w_n$ such that
> $∑_{i = 1}^n w_i$ = 1, the ***weighted (lower) median*** is the element $x_k$ satisfying
>
> $\displaystyle ∑_{x_i < x_k} w_i < \frac{1}{2}$
>
> and
>
> $\displaystyle ∑_{x_i > x_k} w_i ≤ \frac{1}{2}$.
>
> For example, if the elements are 0.1, 0.35, 0.05, 0.1, 0.15, 0.05, 0.2 and each element equals its weight (that is,
> $w_i = x_i$ for *i* = 1, 2, …, 7), then the median is 0.1, but the weighted median is 0.2.
>
> ***a.*** Argue that the median of $x_1$, $x_2$, …, $x_n$ is the weighted median of the $x_i$ with weights
> $w_i$ = 1 / *n* for *i* = 1, 2, …, *n*.
>
> ***b.*** Show how to compute the weighted median of *n* elements in *O*(*n* lg *n*) worst-case time using sorting.
>
> ***c.*** Show how to compute the weighted median in Θ(*n*) worst-case time using a linear-time median algorithm such
> as *Select* from Section 9.3.
>
> The ***post-office location problem*** is defined as follows. We are given *n* points $p_1$, $p_2$, …, $p_n$ with
> associated weights $w_1$, $w_2$, …, $w_n$. We wish to find a point *p* (not necessarily one of the input points) that
> minimizes the sum $∑_{i = 1}^n w_i d\left(p, p_i\right)$, where *d*(*a*, *b*) is the distance between points *a* and
> *b*.
>
> ***d.*** Argue that the weighted median is a best solution for the 1-dimensional post-office location problem, in
> which points are simply real numbers and the distance between points *a* and *b* is *d*(*a*, *b*) = |*a* - *b*|.
>
> ***e.*** Find the best solution for the 2-dimensional post-office location problem, in which the points are (*x*, *y*)
> coordinate pairs and the distance between points *a* = ($x_1$, $y_1$) and *b* = ($x_2$, $y_2$) is the ***Manhattan
> distance*** given by *d*(*a*, *b*) = |$x_1 - x_2$| + |$y_1 - y_2$|.

***a.***

4 2
5 2
6 3
7 3

There are ⌊(*n* - 1) / 2⌋ elements that are less than the median, and ⌊*n* / 2⌋ elements that are greater than the
median. So we have

- $∑_{x_i < x_k} w_i$ = ⌊(*n* - 1) / 2⌋ / *n* < 1 / 2,
- $∑_{x_i > x_k} w_i$ = ⌊*n* / 2⌋ / *n* ≤ 1 / 2.

That satisfies the weighted median condition.

***b.***

First, sort the elements by their value, then accumulate the weight in the sorted array from left to right, until the
accumulated value is greater than or equal to 1 / 2. Then the weighted median is the first element that makes the
accumulated value greater than or equal to 1 / 2.

***c.***

The solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_9_medians_and_order_statistics/problems/problem_9_2_weighted_median.rs).

***d.***

*Skipped.*

***e.***

$∑_{i = 1}^n w_i d\left(p, p_i\right)$\
= $∑_{i = 1}^n w_i \left(\left|x_1 - x_2\right| + \left|y_1 - y_2\right|\right)$\
= $∑_{i = 1}^n w_i \left|x_1 - x_2\right| + ∑_{i = 1}^n w_i \left|y_1 - y_2\right|$

So we can find the weight medians of *x*-coordinates and *y*-coordinates individually, then combine the result into a
new coordinates, which should be the location of the post-office.

##### 9-3 Small order statistics

> We showed that the worst-case number *T*(*n*) of comparisons used by *Select* to select the *i*th order statistic from
> *n* numbers satisfies *T*(*n*) = Θ(*n*), but the constant hidden by the Θ-notation is rather large. When *i* is small
> relative to *n*, we can implement a different procedure that uses *Select* as a subroutine but makes fewer comparisons
> in the worst case.
>
> - ***a.*** Describe an algorithm that uses $U_i\left(n\right)$ comparisons to find the *i*th smallest of *n* elements,
>   where
>
>   $U_i\left(n\right)\begin{cases}
>   T\left(n\right)&\text{if }i ≥ n / 2,\\\\
>   \left\lfloor n / 2\right\rfloor + U_i\left(\left\lceil n / 2\right\rceil\right) + T\left(2 i\right)&\text{otherwise}.
>   \end{cases}$
>
>   (*Hint:* Begin with ⌊*n* / 2⌋ disjoint pairwise comparisons, and recurse on the set containing the smaller element
>   from each pair.)
> - ***b.*** Show that, if *i* < *n* / 2, then $U_i\left(n\right)$ = *n* + *O*(*T*(2 *i* / lg(*n* / *i*)).
> - ***c.*** Show that if *i* is a constant less than *n* / 2, then $U_i\left(n\right)$ = *n* + *O*(lg *n*).
> - ***d.*** Show that if *i* = *n* / *k* for *k* ≥ 2, then $U_i\left(n\right)$ = *n* + *O*(*T*(2 *n* / *k*) lg *k*).

*Skipped.*

##### 9-4 Alternative analysis of randomized selection

> In this problem, we use indicator random variables to analyze the *Randomized-Select* procedure in a manner akin to
> our analysis of *Randomized-Quicksort* in Section 7.4.2.
>
> As in the quicksort analysis, we assume that all elements are distinct, and we rename the elements of the input array
> *A* as $z_1$, $z_2$, …, $z_n$, where $z_i$ is the *i*th smallest element. Thus, the call
> *Randomized-Select*(*A*, 1, *n*, *k*) returns $z_k$.
>
> For 1 ≤ *i* < *j* ≤ *n*, let
>
> $X_{i j k}$ = I{$z_i$ is compared with $z_j$ sometime during the execution of the algorithm to find $z_k$}.
>
> - ***a.*** Give an exact expression for E[$X_{i j k}$]. (*Hint:* Your expression may have different values, depending
>   on the values of *i*, *j*, and *k*.)
> - ***b.*** Let $X_k$ denote the total number of comparisons between elements of array *A* when finding $z_k$. Show
>   that
>
>   $\displaystyle \operatorname{E}\left[X_k\right] ≤ 2 \left(∑_{i = 1}^k ∑_{j = k}^n \frac{1}{j - i + 1} + ∑_{j = k + 1}^n \frac{j - k - 1}{j - k + 1} + ∑_{i = 1}^{k - 2} \frac{k - i - 1}{k - i + 1}\right)$.
> - ***c.*** Show that E[$X_k$] ≤ 4 *n*.
> - ***d.*** Conclude that, assuming all elements of array *A* are distinct, *Randomized-Select* runs in expected time
>   *O*(*n*).

*Skipped.*

## III Data Structures

### 10 Elementary Data Structures

#### 10.1 Stacks and queues

##### 10.1-1

> Using Figure 10.1 as a model, illustrate the result of each operation in the sequence *Push*(*S*, 4), *Push*(*S*, 1),
> *Push*(*S*, 3), *Pop*(*S*), *Push*(*S*, 8), and *Pop*(*S*) on an initially empty stack *S* stored in array *S*[1‥6].

*Skipped.*

##### 10.1-2

> Explain how to implement two stacks in one array *A*[1…*n*] in such a way that neither stack overflows unless the
> total number of elements in both stacks together is *n*. The *Push* and *Pop* operations should run in *O*(1) time.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_10_elementary_data_structures/section_10_1_stacks_and_queues/exercises/exercise_10_1_2.rs).

##### 10.1-3

> Using Figure 10.2 as a model, illustrate the result of each operation in the sequence *Enqueue*(*Q*, 4),
> *Enqueue*(*Q*, 1), *Enqueue*(*Q*, 3), *Dequeue*(*Q*), *Enqueue*(*Q*, 8), and *Dequeue*(*Q*) on an initially empty
> queue *Q* stored in array *Q*[1‥6].

*Skipped.*

##### 10.1-4

> Rewrite *Enqueue* and *Dequeue* to detect underflow and overflow of a queue.

- Underflow condition: *Q*.*tail* == *Q*.*head*.
- Overflow condition: (*Q*.*tail* + 1) mod *Q*.length + 1 == *Q*.*head*.

##### 10.1-5

> Whereas a stack allows insertion and deletion of elements at only one end, and a queue allows insertion at one end and
> deletion at the other end, a ***deque*** (double-ended queue) allows insertion and deletion at both ends. Write four
> *O*(1)-time procedures to insert elements into and delete elements from both ends of a deque implemented by an array.

[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_10_elementary_data_structures/section_10_1_stacks_and_queues/exercises/exercise_10_1_5.rs).

##### 10.1-6

> Show how to implement a queue using two stacks. Analyze the running time of the queue operations.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_10_elementary_data_structures/section_10_1_stacks_and_queues/exercises/exercise_10_1_6.rs).

*Push* need *O*(1) running time, *Pop* need *O*(1) running time on average, but has worst-case *O*(*n*) running time.

##### 10.1-7

> Show how to implement a stack using two queues. Analyze the running time of the stack operations.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_10_elementary_data_structures/section_10_1_stacks_and_queues/exercises/exercise_10_1_7.rs).

*Push* need *O*(1) running time, *Pop* need *O*(*n*) running time.

#### 10.2 Linked lists

##### 10.2-1

> Can you implement the dynamic-set operation *Insert* on a singly linked list in *O*(1) time? How about *Delete*?

*Insert* can be done in *O*(1) time.

As for *Delete*, if the node to be deleted is the last node, I will have to use *O*(*n*) time to delete it, but for
nodes that are not the last node, I can move the contents of the next node into the node to be deleted, which will make
the linked list look like the node is deleted. This method takes *O*(1) time.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_10_elementary_data_structures/section_10_2_linked_lists/exercises/exercise_10_2_1.rs).

##### 10.2-2

> Implement a stack using a singly linked list *L*. The operations *Push* and *Pop* should still take *O*(1) time.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_10_elementary_data_structures/section_10_2_linked_lists/exercises/exercise_10_2_2.rs).

##### 10.2-3

> Implement a queue by a singly linked list *L*. The operations *Enqueue* and *Dequeue* should still take *O*(1) time.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_10_elementary_data_structures/section_10_2_linked_lists/exercises/exercise_10_2_3.rs).

##### 10.2-4

> As written, each loop iteration in the *List-Search′* procedure requires two tests: one for *x* ≠ *L*.*nil* and one
> for *x*.*key* ≠ *k*. Show how to eliminate the test for *x* ≠ *L*.*nil* in each iteration.

Set the value of *x*.*nil*.*key* to *k*, so that if every test fails for *k*, we will get *x*.*nil* as the result, which
is exactly what we wanted.

##### 10.2-5

> Implement the dictionary operations *Insert*, *Delete*, and *Search* using singly linked, circular lists. What are the
> running times of your procedures?

*Skipped.*

##### 10.2-6

> The dynamic-set operation *Union* takes two disjoint sets $S_1$ and $S_2$ as input, and it returns a set
> *S* = $S_1 ∪ S_2$ consisting of all the elements of $S_1$ and $S_2$. The sets $S_1$ and $S_2$ are usually destroyed by
> the operation. Show how to support *Union* in *O*(1) time using a suitable list data structure.

Both singly and doubly linked list are fine, just stitch the tail of the first list onto the head of the second list and
you are done.

##### 10.2-7

> Give a Θ(*n*)-time nonrecursive procedure that reverses a singly linked list of *n* elements. The procedure should use
> no more than constant storage beyond that needed for the list itself.

Remember that we have implemented a stack using singly linked list in exercise 10.2-2? To reverse a singly linked list,
just treat the list as a stack, and pop their elements to construct a new list, the newly constructed list will be the
reversion of the original list.

##### 10.2-8 ★

> Explain how to implement doubly linked lists using only one pointer value *x*.*np* per item instead of the usual two
> (*next* and *prev*). Assume that all pointer values can be interpreted as *k*-bit integers, and define *x*.*np* to be
> *x*.*np* = *x*.*next* XOR *x*.*prev*, the *k*-bit “exclusive-or” of *x*.*next* and *x*.*prev*. (The value *nil* is
> represented by 0.) Be sure to describe what information you need to access the head of the list. Show how to implement
> the *Search*, *Insert*, and *Delete* operations on such a list. Also show how to reverse such a list in *O*(1) time.

*Skipped.*

#### 10.3 Implementing pointers and objects

##### 10.3-1

> Draw a picture of the sequence ⟨13, 4, 8, 19, 5, 11⟩ stored as a doubly linked list using the multiple-array
> representation. Do the same for the single-array representation.

*Skipped.*

##### 10.3-2

> Write the procedures Allocate-Object and Free-Object for a homogeneous collection of objects implemented by the
> single-array representation.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_10_elementary_data_structures/section_10_3_implementing_pointers_and_objects/exercises/exercise_10_3_2.rs).

##### 10.3-3

> Why don’t we need to set or reset the *prev* attributes of objects in the implementation of the *Allocate-Object* and
> *Free-Object* procedures?

We treat the free list as a singly linked list, which only uses the *next* attribute, we don’t care for attributes
other than *prev*.

##### 10.3-4

> It is often desirable to keep all elements of a doubly linked list compact in storage, using, for example, the first
> *m* index locations in the multiple-array representation. (This is the case in a paged, virtual-memory computing
> environment.) Explain how to implement the procedures *Allocate-Object* and *Free-Object* so that the representation
> is compact. Assume that there are no pointers to elements of the linked list outside the list itself. (*Hint:* Use the
> array implementation of a stack.)

*Skipped.*

##### 10.3-5

> Let *L* be a doubly linked list of length *n* stored in arrays *key*, *prev*, and *next* of length *m*. Suppose that
> these arrays are managed by *Allocate-Object* and *Free-Object* procedures that keep a doubly linked free list *F*.
> Suppose further that of the *m* items, exactly *n* are on list *L* and *m* - *n* are on the free list. Write a
> procedure *Compactify-List*(*L*, *F*) that, given the list *L* and the free list *F*, moves the items in *L* so that
> they occupy array positions 1, 2, …, *n* and adjusts the free list *F* so that it remains correct, occupying array
> positions *n* + 1; *n* + 2, …, *m*. The running time of your procedure should be Θ(*n*), and it should use only a
> constant amount of extra space. Argue that your procedure is correct.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_10_elementary_data_structures/section_10_3_implementing_pointers_and_objects/exercises/exercise_10_3_5.rs).

#### 10.4 Representing rooted trees

##### 10.4-1

> Draw the binary tree rooted at index 6 that is represented by the following attributes:
>
> | index | key | left  | right |
> | ----- | --- | ----- | ----- |
> | 1     | 12  | 7     | 3     |
> | 2     | 15  | 8     | *nil* |
> | 3     | 4   | 10    | *nil* |
> | 4     | 10  | 5     | 9     |
> | 5     | 2   | *nil* | *nil* |
> | 6     | 18  | 1     | 4     |
> | 7     | 7   | *nil* | *nil* |
> | 8     | 14  | 6     | 2     |
> | 9     | 21  | *nil* | *nil* |
> | 10    | 5   | *nil* | *nil* |

*Skipped.*

##### 10.4-2

> Write an *O*(*n*)-time recursive procedure that, given an *n*-node binary tree, prints out the key of each node in the
> tree.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_10_elementary_data_structures/section_10_4_representing_rooted_trees/exercises/exercise_10_4_2.rs).

##### 10.4-3

> Write an *O*(*n*)-time nonrecursive procedure that, given an *n*-node binary tree, prints out the key of each node in
> the tree. Use a stack as an auxiliary data structure.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_10_elementary_data_structures/section_10_4_representing_rooted_trees/exercises/exercise_10_4_3.rs).

##### 10.4-4

> Write an *O*(*n*)-time procedure that prints all the keys of an arbitrary rooted tree with *n* nodes, where the tree
> is stored using the left-child, right-sibling representation.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_10_elementary_data_structures/section_10_4_representing_rooted_trees/exercises/exercise_10_4_4.rs).

Notice that the solution is exactly the same as exercise 10.4-2, because the structure of an unbounded branching tree
with left-child, right-sibling representation is the same as a binary tree, but the children of nodes has different
meaning, so we can iterate through the tree with the same method used for iterating binary trees.

##### 10.4-5 ★

> Write an *O*(*n*)-time nonrecursive procedure that, given an *n*-node binary tree, prints out the key of each node.
> Use no more than constant extra space outside of the tree itself and do not modify the tree, even temporarily, during
> the procedure.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_10_elementary_data_structures/section_10_4_representing_rooted_trees/exercises/exercise_10_4_5.rs).

##### 10.4-6 ★

> The left-child, right-sibling representation of an arbitrary rooted tree uses three pointers in each node:
> *left-child*, *right-sibling*, and *parent*. From any node, its parent can be reached and identified in constant time
> and all its children can be reached and identified in time linear in the number of children. Show how to use only two
> pointers and one boolean value in each node so that the parent of a node or all of its children can be reached and
> identified in time linear in the number of children.

Let the three members be *left-child*, *right-sibling-or-parent* and *is-last-child*.

- If the node is the last child of its parent, store pointer to left child in *left-child*, pointer to parent in
  *right-sibling-or-parent*, and *true* in *is-last-child*.
- Otherwise store pointer to left child in *left-child*, pointer to right sibling in *right-sibling-or-parent*, and
  *true* in *is-last-child*.

#### 10.X Problems

##### 10-1 Comparisons among lists

> For each of the four types of lists in the following table, what is the asymptotic worst-case running time for each
> dynamic-set operation listed?
>
> |                         | unsorted, singly linked | sorted, singly linked | unsorted, doubly linked | sorted, doubly linked |
> | ----------------------- | ----------------------- | --------------------- | ----------------------- | --------------------- |
> | *Search*(*L*, *k*)      |                         |                       |                         |                       |
> | *Insert*(*L*, *x*)      |                         |                       |                         |                       |
> | *Delete*(*L*, *x*)      |                         |                       |                         |                       |
> | *Successor*(*L*, *x*)   |                         |                       |                         |                       |
> | *Predecessor*(*L*, *x*) |                         |                       |                         |                       |
> | *Minimum*(*L*)          |                         |                       |                         |                       |
> | *Maximum*(*L*)          |                         |                       |                         |                       |

|                         | unsorted, singly linked | sorted, singly linked | unsorted, doubly linked | sorted, doubly linked |
| ----------------------- | ----------------------- | --------------------- | ----------------------- | --------------------- |
| *Search*(*L*, *k*)      | *O*(*n*)                | *O*(*n*)              | *O*(*n*)                | *O*(*n*)              |
| *Insert*(*L*, *x*)      | *O*(1)                  | *O*(*n*)              | *O*(1)                  | *O*(*n*)              |
| *Delete*(*L*, *x*)      | *O*(*n*)                | *O*(*n*)              | *O*(1)                  | *O*(1)                |
| *Successor*(*L*, *x*)   | *O*(1)                  | *O*(1)                | *O*(1)                  | *O*(1)                |
| *Predecessor*(*L*, *x*) | *O*(*n*)                | *O*(*n*)              | *O*(1)                  | *O*(1)                |
| *Minimum*(*L*)          | *O*(*n*)                | *O*(1)                | *O*(*n*)                | *O*(*1*)              |
| *Maximum*(*L*)          | *O*(*n*)                | *O*(*n*)              | *O*(*n*)                | *O*(*n*)              |

##### 10-2 Mergeable heaps using linked lists

> A ***mergeable heap*** supports the following operations: *Make-Heap* (which creates an empty mergeable heap),
> *Insert*, *Minimum*, *Extract-Min*, and *Union*. Show how to implement mergeable heaps using linked lists in each of
> the following cases. Try to make each operation as efficient as possible. Analyze the running time of each operation
> in terms of the size of the dynamic set(s) being operated on.
>
> - ***a.*** Lists are sorted.
> - ***b.*** Lists are unsorted.
> - ***c.*** Lists are unsorted, and dynamic sets to be merged are disjoint.

*Skipped.*

##### 10-3 Searching a sorted compact list

> Exercise 10.3-4 asked how we might maintain an *n*-element list compactly in the first *n* positions of an array. We
> shall assume that all keys are distinct and that the compact list is also sorted, that is,
> *key*[*i*] < *key*[*next*[*i*]] for all *i* = 1, 2, …, *n* such that *next*[*i*] ≠ *nil*. We will also assume that we
> have a variable *L* that contains the index of the first element on the list. Under these assumptions, you will show
> that we can use the following randomized algorithm to search the list in *O*($\sqrt{n}$) expected time.
>
> *Compact-List-Search*(*L*, *n*, *k*)
>
>  1. *i* = *L*
>  2. **while** *i* ≠ *nil* and *key*[*i*] < *k*
>  3. &nbsp;&nbsp;&nbsp;&nbsp;*j* = *Random*(1, *n*)
>  4. &nbsp;&nbsp;&nbsp;&nbsp;**if** *key*[*i*] < *key*[*j*] and *key*[*j*] ≤ *k*
>  5. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*i* = *j*
>  6. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**if** *key*[*i*] == *k*
>  7. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**return** *i*
>  8. &nbsp;&nbsp;&nbsp;&nbsp;*i* = *next*[*i*]
>  9. **if** *i* == *nil* or *key*[*i*] > *k*
> 10. &nbsp;&nbsp;&nbsp;&nbsp;**return** *nil*
> 11. **else** **return** *i*
>
> If we ignore lines 3–7 of the procedure, we have an ordinary algorithm for searching a sorted linked list, in which
> index *i* points to each position of the list in turn. The search terminates once the index *i* “falls off” the end of
> the list or once *key*[*i*] ≥ *k*. In the latter case, if *key*[*i*] = *k*, clearly we have found a key with the value
> *k*. If, however, *key*[*i*] > *k*, then we will never find a key with the value *k*, and so terminating the search
> was the right thing to do.
>
> Lines 3–7 attempt to skip ahead to a randomly chosen position *j*. Such a skip benefits us if *key*[*j*] is larger
> than *key*[*i*] and no larger than *k*; in such a case, *j* marks a position in the list that *i* would have to reach
> during an ordinary list search. Because the list is compact, we know that any choice of *j* between 1 and *n* indexes
> some object in the list rather than a slot on the free list.
>
> Instead of analyzing the performance of *Compact-List-Search* directly, we shall analyze a related algorithm,
> *Compact-List-Search′*, which executes two separate loops. This algorithm takes an additional parameter *t* which
> determines an upper bound on the number of iterations of the first loop.
>
> *Compact-List-Search′*(*L*, *n*, *k*, *t*)
>
>  1. *i* = *L*
>  2. **for** *q* = 1 **to** *t*
>  3. &nbsp;&nbsp;&nbsp;&nbsp;*j* = *Random*(1, *n*)
>  4. &nbsp;&nbsp;&nbsp;&nbsp;**if** *key*[*i*] < *key*[*j*] and *key*[*j*] ≤ *k*
>  5. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*i* = *j*
>  6. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**if** *key*[*i*] == *k*
>  7. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**return** *i*
>  8. **while** *i* ≠ *nil* and *key*[*i*] < *k*
>  9. &nbsp;&nbsp;&nbsp;&nbsp;*i* = *next*[*i*]
> 10. **if** *i* == *nil* or *key*[*i*] > *k*
> 11. &nbsp;&nbsp;&nbsp;&nbsp;**return** *nil*
> 12. **else** **return** *i*
>
> To compare the execution of the algorithms *Compact-List-Search*(*L*, *n*, *k*) and
> *Compact-List-Search′*(*L*, *n*, *k*, *t*), assume that the sequence of integers returned by the calls of
> *Random*(1, *n*) is the same for both algorithms.
>
> - ***a.*** Suppose that *Compact-List-Search*(*L*, *n*, *k*) takes *t* iterations of the **while** loop of lines 2–8.
>   Argue that *Compact-List-Search′*(*L*, *n*, *k*, *t*) returns the same answer and that the total number of
>   iterations of both the **for** and **while** loops within *Compact-List-Search′* is at least *t*.
>
> In the call *Compact-List-Search′*(*L*, *n*, *k*, *t*), let $X_t$ be the random variable that describes the distance
> in the linked list (that is, through the chain of *next* pointers) from position *i* to the desired key *k* after *t*
> iterations of the **for** loop of lines 2–7 have occurred.
>
> - ***b.*** Argue that the expected running time of *Compact-List-Search′*(*L*, *n*, *k*, *t*) is *O*(*t* + E[$X_t$]).
> - ***c.*** Show that E[$X_t$] ≤ $∑_{r = 1}^n \left(1 - r / n\right)^t$. (*Hint:* Use equation (C.25).)
> - ***d.*** Show that $∑_{r = 0}^{n - 1} r^t ≤ n^{t + 1} / \left(t + 1\right)$.
> - ***e.*** Prove that E[$X_t$] ≤ *n* / (*t* + 1).
> - ***f.*** Show that *Compact-List-Search′*(*L*, *n*, *k*, *t*) runs in *O*(*t* + *n* / *t*) expected time.
> - ***g.*** Conclude that *Compact-List-Search* runs in *O*($\sqrt{n}$) expected time.
> - ***h.*** Why do we assume that all keys are distinct in *Compact-List-Search*? Argue that random skips do not
>   necessarily help asymptotically when the list contains repeated key values.

*Skipped.*

### 11 Hash Tables

#### 11.1 Direct-address tables

##### 11.1-1

> Suppose that a dynamic set *S* is represented by a direct-address table *T* of length *m*. Describe a procedure that
> finds the maximum element of *S*. What is the worst-case performance of your procedure?

Θ(*m*).

##### 11.1-2

> A ***bit vector*** is simply an array of bits (0s and 1s). A bit vector of length *m* takes much less space than an
> array of *m* pointers. Describe how to use a bit vector to represent a dynamic set of distinct elements with no
> satellite data. Dictionary operations should run in *O*(1) time.

We use the value of *i*th bit to indicate whether the key *i* exists, then the implementation is trivial.

##### 11.1-3

> Suggest how to implement a direct-address table in which the keys of stored elements do not need to be distinct and
> the elements can have satellite data. All three dictionary operations (*Insert*, *Delete*, and *Search*) should run in
> *O*(1) time. (Don’t forget that *Delete* takes as an argument a pointer to an object to be deleted, not a key.)

For all elements with key *k*, store them in a doubly linked list, then store the doubly linked list in position *i* of
the direct-address table.

##### 11.1-4 ★

> We wish to implement a dictionary by using direct addressing on a *huge* array. At the start, the array entries may
> contain garbage, and initializing the entire array is impractical because of its size. Describe a scheme for
> implementing a direct-address dictionary on a huge array. Each stored object should use *O*(1) space; the operations
> *Search*, *Insert*, and *Delete* should take *O*(1) time each; and initializing the data structure should take *O*(1)
> time. (*Hint:* Use an additional array, treated somewhat like a stack whose size is the number of keys actually stored
> in the dictionary, to help determine whether a given entry in the huge array is valid or not.)

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_11_hash_tables/section_11_1_direct_address_tables/exercises/exercise_11_1_4.rs).

#### 11.2 Hash tables

##### 11.2-1

> Suppose we use a hash function *h* to hash *n* distinct keys into an array *T* of length *m*. Assuming simple uniform
> hashing, what is the expected number of collisions? More precisely, what is the expected cardinality of
> {\{*k*, *l*} : *k* ≠ *l* and *h*(*k*) = *h*(*l*)}?

Let $X_i$ be the random variable that represents the number of elements in the *i*th position, then the expected number
of collisions is:

E[$∑_{i = 1}^m X_i \left(X_i - 1\right) / 2$]\
= $∑_{i = 1}^m \operatorname{E} \left[X_i \left(X_i - 1\right) / 2\right]$\
= *m* E[$X_1 \left(X_1 - 1\right) / 2$]\
= *m* (E[$X_1^2$] - E[$X_1$]) / 2\
= *m* (E[$X_1^2$] - *n* / *m*) / 2\
= *m* ($\operatorname{E}^2 \left[X_i\right]$ + Var[$X_i$] - *n* / *m*) / 2\
= *m* ($\left(n / m\right)^2$ + *n* (1 / *m*) (*m* - 1) / *m* - *n* / *m*) / 2\
= *n* (*n* - 1) / (2 *m*).

That is way too complicated.

Another way:

Let $X_i$ be the *i*th key, then the expected number of collisions is:

E[$∑_{i = 1}^{n - 1} ∑_{j = i + 1}^n \Pr\left\lbrace h\left(X_i\right) = h\left(X_j\right) \right\rbrace$]\
= E[$∑_{i = 1}^{n - 1} ∑_{j = i + 1}^n 1 / m$]\
= $∑_{i = 1}^{n - 1} ∑_{j = i + 1}^n 1 / m$\
= *n* (*n* - 1) / (2 *m*).

##### 11.2-2

> Demonstrate what happens when we insert the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into a hash table with collisions
> resolved by chaining. Let the table have 9 slots, and let the hash function be *h*(*k*) = *k* mod 9.

*Skipped.*

##### 11.2-3

> Professor Marley hypothesizes that he can obtain substantial performance gains by modifying the chaining scheme to
> keep each list in sorted order. How does the professor’s modification affect the running time for successful searches,
> unsuccessful searches, insertions, and deletions?

- Successful searches: Worst case running time decreases to Θ(lg *n*).
- Unsuccessful searches: Worst case running time decreases to Θ(lg *n*).
- Insertions: Worst case running time increases to Θ(*n*).
- Deletions: Unaffected.

##### 11.2-4

> Suggest how to allocate and deallocate storage for elements within the hash table itself by linking all unused slots
> into a free list. Assume that one slot can store a flag and either one element plus a pointer or two pointers. All
> dictionary and free-list operations should run in *O*(1) expected time. Does the free list need to be doubly linked,
> or does a singly linked free list suffice?

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_11_hash_tables/section_11_2_hash_tables/exercises/exercise_11_2_4.rs).

##### 11.2-5

> Suppose that we are storing a set of *n* keys into a hash table of size *m*. Show that if the keys are drawn from a
> universe *U* with |*U*| > *n* *m*, then *U* has a subset of size *n* consisting of keys that all hash to the same
> slot, so that the worst-case searching time for hashing with chaining is Θ(*n*).

This is like putting *n* *m* balls into *m* buckets, there must be at least one bucket contains more than or equal to
*n* balls.

##### 11.2-6

> Suppose we have stored *n* keys in a hash table of size *m*, with collisions resolved by chaining, and that we know
> the length of each chain, including the length *L* of the longest chain. Describe a procedure that selects a key
> uniformly at random from among the keys in the hash table and returns it in expected time *O*(*L* ⋅ (1 + 1 / *α*)).

First, randomly generate an integer *i* within [1, *m*], then generate an random integer *j* within [1, *L*], if the
length of the *i*th chain is less than or equal to *j*, return the *j*th element of the *i*th chain as the result,
otherwise repeat the process.

Rationalization:

```text
  j
  ↑
L │     ▌
  │ ▌   ▌     ▌
  │ ▌▌  ▌     ▌   ▌
  │▌▌▌ ▌▌   ▌ ▌   ▌ ▌ ▌  ▌
  │▌▌▌ ▌▌▌  ▌ ▌▌▌ ▌▌▌▌▌ ▌▌
──┼───────────────────────→ i
0 │                      m
```

Time complexity analysis:

The process is a sequence of Bernoulli trials with a probability *p* = *n* / (*m* *L*). So the number of iterations
needed to find an element follows geometric distribution, so the expected number of iterations for finding the position
of an element is 1 / *p* = *m* *L* / *n* = *L* / *α*. But it is not done, we still need to get the value of the selected
element in a linked list, which takes *O*(*L*) time. So the total expected running time is
Θ(*L* / *α*) + *O*(*L*) = *O* (*L* ⋅ (1 + 1 / *α*)).

#### 11.3 Hash functions

##### 11.3-1

> Suppose we wish to search a linked list of length *n*, where each element contains a key *k* along with a hash value
> *h*(*k*). Each key is a long character string. How might we take advantage of the hash values when searching the list
> for an element with a given key?

Precompute the hash value of the given key. Then when searching the linked list, first compare the hash value, only if
the hash values are equal, we compare the actual string.

##### 11.3-2

> Suppose that we hash a string of *r* characters into *m* slots by treating it as a radix-128 number and then using the
> division method. We can easily represent the number *m* as a 32-bit computer word, but the string of *r* characters,
> treated as a radix-128 number, takes many words. How can we apply the division method to compute the hash value of the
> character string without using more than a constant number of words of storage outside the string itself?

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_11_hash_tables/section_11_3_hash_functions/exercises/exercise_11_3_2.rs).

##### 11.3-3

> Consider a version of the division method in which *h*(*k*) = *k* mod *m*, where *m* = $2^p$ - 1 and *k* is a
> character string interpreted in radix $2^p$. Show that if we can derive string *x* from string *y* by permuting its
> characters, then *x* and *y* hash to the same value. Give an example of an application in which this property would be
> undesirable in a hash function.

According to the solution to exercise 11.3-2, we can calculate the hash value using a loop whose body is:

*result* = (*result* × $2^p$ + *S*[*i*]) mod *m*.

If *m* = $2^p$ - 1, the body become:

*result*\
= (*result* × $2^p$ + *S*[*i*]) mod ($2^p$ - 1)\
= ((*result* mod ($2^p$ - 1)) × ($2^p$ mod ($2^p$ - 1)) + *S*[*i*] mod ($2^p$ - 1)) mod ($2^p$ - 1)\
= ((*result* mod ($2^p$ - 1)) × 1 + *S*[*i*] mod ($2^p$ - 1)) mod ($2^p$ - 1)\
= ((*result* mod ($2^p$ - 1)) + *S*[*i*] mod ($2^p$ - 1)) mod ($2^p$ - 1)\
= (*result* + *S*[*i*] mod ($2^p$ - 1)) mod ($2^p$ - 1).

Where *S*[*i*] is the *i*th element of the string.

So the final result is just $\left(∑_{i = 1}^n S[i] \bmod m\right) \bmod m$. Notice that the order of *S*[*i*] does not
matter in calculating the hash value.

As for the example, consider storing the anagrams of a word in a hash table.

##### 11.3-4

> Consider a hash table of size *m* = 1000 and a corresponding hash function *h*(*k*) = ⌊*m* (*k* *A* mod 1)⌋ for
> *A* = ($\sqrt{5}$ - 1) / 2. Compute the locations to which the keys 61, 62, 63, 64, and 65 are mapped.

*Skipped.*

##### 11.3-5 ★

> Define a family ℋ of hash functions from a finite set *U* to a finite set *B* to be ***ϵ-universal*** if for all
> pairs of distinct elements *k* and *l* in *U*,
>
> Pr{*h*(*k*) = *h*(*l*)} ≤ *ϵ*,
>
> where the probability is over the choice of the hash function *h* drawn at random from the family ℋ. Show that an
> *ϵ*-universal family of hash functions must have
>
> *ϵ* ≥ $\displaystyle \frac{1}{\left|B\right|} - \frac{1}{\left|U\right|}$.

*Skipped.*

##### 11.3-6 ★

> Let *U* be the set of *n*-tuples of values drawn from $ℤ_p$, and let *B* = $ℤ_p$, where *p* is prime. Define the hash
> function $h_b$: *U* → *B* for *b* ∈ $ℤ_p$ on an input *n*-tuple ⟨$a_0$, $a_1$, …, $a_{n - 1}$⟩ from *U* as
>
> $h_b\left(⟨a_0, a_1, …, a_{n - 1}⟩\right) = \left(\displaystyle ∑_{j = 0}^{n = 1} a_j b^j\right) \bmod p$.
>
> and let ℋ = {$h_b$ : *b* ∈ $ℤ_p$}. Argue that ℋ is ((*n* - 1) / *p*)-universal according to the definition of
> *ϵ*-universal in Exercise 11.3-5. (*Hint:* See Exercise 31.4-4.)

*Skipped.*

#### 11.4 Open addressing

##### 11.4-1

> Consider inserting the keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash table of length *m* = 11 using open
> addressing with the auxiliary hash function *h*′(*k*) = *k*. Illustrate the result of inserting these keys using
> linear probing, using quadratic probing with $c_1$ = 1 and $c_2$ = 3, and using double hashing with $h_1$(*k*) = *k*
> and $h_2$(*k*) = 1 + (*k* mod (*m* - 1)).

*Skipped.*

##### 11.4-2

> Write pseudocode for *Hash-Delete* as outlined in the text, and modify *Hash-Insert* to handle the special value
> *deleted*.

*Skipped.*

##### 11.4-3

> Consider an open-address hash table with uniform hashing. Give upper bounds on the expected number of probes in an
> unsuccessful search and on the expected number of probes in a successful search when the load factor is 3 / 4 and when
> it is 7 / 8.

*Skipped.*

##### 11.4-4 ★

> Suppose that we use double hashing to resolve collisions—that is, we use the hash function
> *h*(*k*, *i*) = ($h_1$(*k*) + *i* $h_2$(*k*)) mod *m*. Show that if *m* and $h_2$(*k*) have greatest common divisor
> *d* ≥ 1 for some key *k*, then an unsuccessful search for key *k* examines (1 / *d*)th of the hash table before
> returning to slot h_1(*k*). Thus, when *d* = 1, so that *m* and $h_2$(*k*) are relatively prime, the search may
> examine the entire hash table. (*Hint:* See Chapter 31.)

*Skipped.*

##### 11.4-5 ★

> Consider an open-address hash table with a load factor *α*. Find the nonzero value *α* for which the expected number
> of probes in an unsuccessful search equals twice the expected number of probes in a successful search. Use the upper
> bounds given by Theorems 11.6 and 11.8 for these expected numbers of probes.

*Skipped.*

#### 11.5 Perfect hashing ★

##### 11.5-1 ★

> Suppose that we insert *n* keys into a hash table of size *m* using open addressing and uniform hashing. Let
> *p*(*n*, *m*) be the probability that no collisions occur. Show that
> *p*(*n*, *m*) ≤ $e^{-n \left(n - 1\right) / 2 m}$. (*Hint:* See equation (3.12).) Argue that when *n* exceeds
> $\sqrt{m}$, the probability of avoiding collisions goes rapidly to zero.

*p*(*n*, *m*)\
= $\frac{P\left(m, n\right)}{m^n}$

*Skipped.*

#### 11.X Problems

##### 11-1 Longest-probe bound for hashing

> Suppose that we use an open-addressed hash table of size *m* to store *n* ≤ *m* / 2 items.
>
> ***a.*** Assuming uniform hashing, show that for *i* = 1, 2, …, *n*, the probability is at most $2^{-k}$ that the
> *i*th insertion requires strictly more than *k* probes.
>
> ***b.*** Show that for *i* = 1, 2, …, *n*, the probability is *O*(1 / $n^2$) that the *i*th insertion requires more
> than 2 lg *n* probes.
>
> Let the random variable $X_i$ denote the number of probes required by the *i*th insertion. You have shown in part (b)
> that Pr{$X_i$ > 2 lg *n*} = *O*(1 / $n^2$). Let the random variable *X* = $\max_{1 ≤ i ≤ n} X_i$ denote the maximum
> number of probes required by any of the *n* insertions.
>
> ***c.*** Show that Pr{*X* > 2 lg *n*} = *O*(1 / *n*).
>
> ***d.*** Show that the expected length E[*X*] of the longest probe sequence is *O*(lg *n*).

*Skipped.*

##### 11-2 Slot-size bound for chaining

> Suppose that we have a hash table with *n* slots, with collisions resolved by chaining, and suppose that *n* keys are
> inserted into the table. Each key is equally likely to be hashed to each slot. Let *M* be the maximum number of keys
> in any slot after all the keys have been inserted. Your mission is to prove an *O*(lg *n* / lg lg *n*) upper bound on
> E[*M*], the expected value of *M*.
>
> - ***a.*** Argue that the probability $Q_k$ that exactly *k* keys hash to a particular slot is given by
>   $\displaystyle Q_k = \left(\frac{1}{n}\right)^k \left(1 - \frac{1}{n}\right)^{n - k} \binom{n}{k}$.
> - ***b.*** Let $P_k$ be the probability that *M* = *k*, that is, the probability that the slot containing the most
>   keys contains *k* keys. Show that $P_k$ ≤ *n* $Q_k$.
> - ***c.*** Use Stirling’s approximation, equation (3.18), to show that $Q_k < e^k / k^k$.
> - ***d.*** Show that there exists a constant *c* > 1 such that $Q_{k_0}$ < 1 / $n^3$ for
>   $k_0$ = *c* lg *n* / lg lg *n*. Conclude that $P_k$ < 1 / $n^2$ for *k* ≥ $k_0$ = *c* lg *n* / lg lg *n*.
> - ***e.*** Argue that
>
>   $\displaystyle \operatorname{E}\left[M\right] ≤ \Pr\left\lbrace M > \frac{c \lg n}{\lg \lg n} \right\rbrace ⋅ n + \Pr\left\lbrace M ≤ \frac{c \lg n}{\lg \lg n} \right\rbrace ⋅ \frac{c \lg n}{\lg \lg n}$.
>
>   Conclude that E[*M*] = *O*(lg *n* / lg lg *n*).

*Skipped.*

##### 11-3 Quadratic probing

> Suppose that we are given a key *k* to search for in a hash table with positions 0, 1, …, *m* - 1, and suppose that we
> have a hash function *h* mapping the key space into the set {0, 1, …, *m* - 1}. The search scheme is as follows:
>
> 1. Compute the value *j* = *h*(*k*), and set *i* = 0.
> 2. Probe in position *j* for the desired key *k*. If you find it, or if this position is empty, terminate the search.
> 3. Set *i* = *i* + 1. If *i* now equals *m*, the table is full, so terminate the search. Otherwise, set
>    *j* = (*i* + *j*) / mod *m*, and return to step 2.
>
> Assume that *m* is a power of 2.
>
> ***a.*** Show that this scheme is an instance of the general “quadratic probing” scheme by exhibiting the appropriate
> constants $c_1$ and $c_2$ for equation (11.5).
>
> ***b.*** Prove that this algorithm examines every table position in the worst case.

*Skipped.*

##### 11-4 Hashing and authentication

> Let ℋ be a class of hash functions in which each hash function *h* ∈ ℋ maps the universe *U* of keys to
> {0, 1, …, m - 1}. We say that ℋ is ***k-universal*** if, for every fixed sequence of *k* distinct keys
> $⟨x^{(1)}, x^{(2)}, …, x^{(k)}⟩$ and for any *h* chosen at random from ℋ, the sequence
> $⟨h(x^{(1)}), h(x^{(2)}), …, h(x^{(k)})⟩$ is equally likely to be any of the $m^k$ sequences of length *k* with
> elements drawn from {0, 1, …, *m* - 1}.
>
> - ***a.*** Show that if the family ℋ of hash functions is 2-universal, then it is universal.
> - ***b.*** Suppose that the universe *U* is the set of *n*-tuples of values drawn from
>   $ℤ_p$ = {0, 1, …, *p* - 1}, where *p* is prime. Consider an element *x* = $⟨x_0, x_1, …, x_{n - 1}⟩$ ∈ *U*. For any
>   *n*-tuple *a* = $⟨a_0, a_1, …, a_{n - 1}⟩$ ∈ *U*, define the hash function $h_a$ by
>
>   $\displaystyle h_a(x) = \left(∑_{j = 0}^{n - 1} a_j x_j\right) \bmod p$.
>
>   Let ℋ = {$h_a$}. Show that ℋ is universal, but not 2-universal. (*Hint:* Find a key for which all hash functions
>   in ℋ produce the same value.)
> - ***c.*** Suppose that we modify ℋ slightly from part (b): for any *a* ∈ *U* and for any *b* ∈ $ℤ_p$, define
>
>   $\displaystyle h'\_{a b}(x) = \left(∑_{j = 0}^{n - 1} a_j x_j + b\right) \bmod p$
>
>   and ℋ′ = {$h'\_{a b}$}. Argue that ℋ′ is 2-universal. (*Hint:* Consider fixed *n*-tuples *x* ∈ *U* and *y* ∈ *U*,
>   with $x_i$ ≠ $y_i$ for some *i*. What happens to $h'\_{a b}(x)$ and $h'_{a b}(y)$ as $a_i$ and *b* range over
>   $ℤ_p$?)
> - ***d.*** Suppose that Alice and Bob secretly agree on a hash function *h* from a 2-universal family ℋ of hash
>   functions. Each *h* ∈ ℋ maps from a universe of keys *U* to $ℤ_p$, where *p* is prime. Later, Alice sends a message
>   *m* to Bob over the Internet, where *m* ∈ *U*. She authenticates this message to Bob by also sending an
>   authentication tag *t* = *h*(*m*), and Bob checks that the pair (*m*, *t*) he receives indeed satisfies
>   *t* = *h*(*m*). Suppose that an adversary intercepts (*m*, *t*) en route and tries to fool Bob by replacing the pair
>   (*m*, *t*) with a different pair (*m*′, *t*′). Argue that the probability that the adversary succeeds in fooling Bob
>   into accepting (*m*′, *t*′) is at most 1 / *p*, no matter how much computing power the adversary has, and even if
>   the adversary knows the family ℋ of hash functions used.

*Skipped.*

### 12 Binary Search Trees

#### 12.1 What is a binary search tree?

##### 12.1-1

> For the set of {1, 4, 5, 10, 16, 17, 21} of keys, draw binary search trees of heights 2, 3, 4, 5, and 6.

*Skipped.*

##### 12.1-2

> What is the difference between the binary-search-tree property and the min-heap property (see page 153)? Can the
> min-heap property be used to print out the keys of an *n*-node tree in sorted order in *O*(*n*) time? Show how, or
> explain why not.

Binary-search-tree property requires nodes in left subtree of every node being less than or equal to a node, but
min-heap property requires nodes in left subtree of every node being greater than or equal to the node.

We can not print out the keys of an *n*-node tree with min-heap property in sorted order in *O*(*n*) time. Remember
heapsort? If we can do that, we can get a comparison sorting algorithm runs in *O*(*n*) time, which is impossible.

##### 12.1-3

> Give a nonrecursive algorithm that performs an inorder tree walk. (*Hint:* An easy solution uses a stack as an
> auxiliary data structure. A more complicated, but elegant, solution uses no stack but assumes that we can test two
> pointers for equality.)

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_12_binary_search_trees/section_12_1_what_is_a_binary_search_tree/exercises/exercise_12_1_3.rs).

##### 12.1-4

> Give recursive algorithms that perform preorder and postorder tree walks in Θ(*n*) time on a tree of n nodes.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_12_binary_search_trees/section_12_1_what_is_a_binary_search_tree/exercises/exercise_12_1_4.rs).

##### 12.1-5

> Argue that since sorting *n* elements takes Ω(*n* lg *n*) time in the worst case in the comparison model, any
> comparison-based algorithm for constructing a binary search tree from an arbitrary list of *n* elements takes
> Ω(*n* lg *n*) time in the worst case.

Like exercise 12.1-2, If we can construct a binary search tree within *o*(*n* lg *n*) time, we can get a comparison
sorting algorithm that takes *o*(*n* lg *n*) time, which is impossible.

#### 12.2 Querying a binary search tree

##### 12.2-1

> Suppose that we have numbers between 1 and 1000 in a binary search tree, and we want to search for the number 363.
> Which of the following sequences could not be the sequence of nodes examined?
>
> - ***a.*** 2, 252, 401, 398, 330, 344, 397, 363.
> - ***b.*** 924, 220, 911, 244, 898, 258, 362, 363.
> - ***c.*** 925, 202, 911, 240, 912, 245, 363.
> - ***d.*** 2, 399, 387, 219, 266, 382, 381, 278, 363.
> - ***e.*** 935, 278, 347, 621, 299, 392, 358, 363.

***c*** and ***e*** are not valid sequences.

[Here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_12_binary_search_trees/section_12_2_querying_a_binary_search_tree/exercises/exercise_12_2_1.rs)
is an algorithm for detecting valid sequences.

##### 12.2-2

> Write recursive versions of *Tree-Minimum* and *Tree-Maximum*.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_12_binary_search_trees/section_12_2_querying_a_binary_search_tree/exercises/exercise_12_2_2.rs).

##### 12.2-3

> Write the *Tree-Predecessor* procedure.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_12_binary_search_trees/section_12_2_querying_a_binary_search_tree/exercises/exercise_12_2_3.rs).

##### 12.2-4

> Professor Bunyan thinks he has discovered a remarkable property of binary search trees. Suppose that the search for
> key *k* in a binary search tree ends up in a leaf. Consider three sets: *A*, the keys to the left of the search path;
> *B*, the keys on the search path; and *C*, the keys to the right of the search path. Professor Bunyan claims that any
> three keys *a* ∈ *A*, *b* ∈ *B*, and *c* ∈ *C* must satisfy *a* ≤ *b* ≤ *c*. Give a smallest possible counterexample
> to the professor’s claim.

```text
     ┌───┐
     │ 1 │
     └─┬─┘
   ┌───┴───┐
┌──┴──┐  ┌─┴─┐
│ nil │  │ 3 │
└─────┘  └─┬─┘
        ┌──┴───┐
      ┌─┴─┐  ┌─┴─┐
      │ 2 │  │ 4 │
      └───┘  └───┘
```

Searching for 4, we have 2 ∈ *A* and 1 ∈ *B*.

##### 12.2-5

> Show that if a node in a binary search tree has two children, then its successor has no left child and its predecessor
> has no right child.

If a node has left child then its predecessor is the right most node of the left child, if the right most node has right
child, then it is not the right most child, by contradiction, we know the predecessor has no right child.

The same applies to the successor.

##### 12.2-6

> Consider a binary search tree *T* whose keys are distinct. Show that if the right subtree of a node *x* in *T* is
> empty and *x* has a successor *y*, then *y* is the lowest ancestor of *x* whose left child is also an ancestor of *x*.
> (Recall that every node is its own ancestor.)

*Skipped.*

##### 12.2-7

> An alternative method of performing an inorder tree walk of an *n*-node binary search tree finds the minimum element
> in the tree by calling *Tree-Minimum* and then making *n* - 1 calls to *Tree-Successor*. Prove that this algorithm
> runs in Θ(*n*) time.

*Skipped.*

##### 12.2-8

> Prove that no matter what node we start at in a height-*h* binary search tree, *k* successive calls to
> *Tree-Successor* take *O*(*k* + *h*) time.

*Skipped.*

##### 12.2-9

> Let *T* be a binary search tree whose keys are distinct, let *x* be a leaf node, and let *y* be its parent. Show that
> *y*.*key* is either the smallest key in *T* larger than *x*.*key* or the largest key in *T* smaller than *x*.*key*.

By the definition of *Successor*, we know that:

- If *x* is the left child of *y*, then *y* is the successor of *x*, so *y*.*key* is the smallest key in *T* larger than
  *x*.*key*.
- Otherwise, *x* is the right child of *y*, then *x* is the successor of *y*, so *y*.*key* is the largest key in *T*
  smaller than *x*.*key*.

#### 12.3 Insertion and deletion

##### 12.3-1

> Give a recursive version of the *Tree-Insert* procedure.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_12_binary_search_trees/section_12_3_insertion_and_deletion/exercises/exercise_12_3_1.rs).

##### 12.3-2

> Suppose that we construct a binary search tree by repeatedly inserting distinct values into the tree. Argue that the
> number of nodes examined in searching for a value in the tree is one plus the number of nodes examined when the value
> was first inserted into the tree.

Note that the new value is only inserted to the leaf position, so inserting a new value does not affect the relative
positions of the old values, which means once a node is inserted into the tree, it stays at its position all the time.

The number of nodes to be examined when the node was inserted into the tree equals to the number of ancestors except the
node itself, and searching examines all the node’s ancestors. So the claim is true.

##### 12.3-3

> We can sort a given set of *n* numbers by first building a binary search tree containing these numbers (using
> *Tree-Insert* repeatedly to insert the numbers one by one) and then printing the numbers by an inorder tree walk. What
> are the worst-case and best-case running times for this sorting algorithm?

Worst-case running time is Θ($n^2$) when the numbers are already sorted.

Best-case running time is Θ(*n* log *n*) when the tree is a complete binary tree.

##### 12.3-4

> Is the operation of deletion “commutative” in the sense that deleting *x* and then *y* from a binary search tree
> leaves the same tree as deleting *y* and then *x*? Argue why it is or give a counterexample.

Deletion is not “commutative”.

Counterexample: deleting 1 and 2 from the following tree:

```text
   ┌───┐
   │ 2 │
   └─┬─┘
  ┌──┴───┐
┌─┴─┐  ┌─┴─┐
│ 1 │  │ 4 │
└───┘  └─┬─┘
     ┌───┴───┐
   ┌─┴─┐  ┌──┴──┐
   │ 3 │  │ nil │
   └───┘  └─────┘
```

Delete 1 first, then delete 2, we will get the following tree:

```text
    ┌───┐
    │ 4 │
    └─┬─┘
  ┌───┴───┐
┌─┴─┐  ┌──┴──┐
│ 3 │  │ nil │
└───┘  └─────┘
```

Delete 2 first, then delete 1, we will get the following tree:

```text
     ┌───┐
     │ 3 │
     └─┬─┘
   ┌───┴───┐
┌──┴──┐  ┌─┴─┐
│ nil │  │ 4 │
└─────┘  └───┘
```

##### 12.3-5

> Suppose that instead of each node *x* keeping the attribute *x*.*p*, pointing to *x*’s parent, it keeps *x*.*succ*,
> pointing to *x*’s successor. Give pseudocode for *Search*, *Insert*, and *Delete* on a binary search tree *T* using
> this representation. These procedures should operate in time *O*(*h*), where *h* is the height of the tree *T*.
> (*Hint:* You may wish to implement a subroutine that returns the parent of a node.)

*Skipped.*

##### 12.3-6

> When node *z* in *Tree-Delete* has two children, we could choose node *y* as its predecessor rather than its
> successor. What other changes to *Tree-Delete* would be necessary if we did so? Some have argued that a fair strategy,
> giving equal priority to predecessor and successor, yields better empirical performance. How might *Tree-Delete* be
> changed to implement such a fair strategy?

*Skipped.*

#### 12.4 Randomly built binary search trees ★

##### 12.4-1

> Prove equation (12.3).

Proof by induction:

- Base case: If *n* = 1,

  $∑_{i = 0}^{n - 1} \binom{i + 3}{3}$ = $∑_{i = 0}^{0} \binom{i + 3}{3}$ = $\binom{3}{3}$ = 1.

  $\binom{n + 3}{4}$ = $\binom{4}{4}$ = 1.

  So the claim holds.
- Inductive cases: If *n* > 1,

  $∑_{i = 0}^{n - 1} \binom{i + 3}{3}$\
  = $∑_{i = 0}^{n - 2} \binom{i + 3}{3} + \binom{n + 2}{3}$\
  = $\binom{n + 2}{4} + \binom{n + 2}{3}$\
  = $\frac{\left(n + 2\right)!}{4! \left(n - 2\right)!} + \frac{\left(n + 2\right)!}{3! \left(n - 1\right)!}$\
  = $\frac{\left(n + 2\right)!}{\left(n - 1\right)!} \left(\frac{n - 1}{4!} + \frac{1}{3!}\right)$\
  = $\frac{\left(n + 2\right)!}{\left(n - 1\right)!} \frac{n + 3}{4!}$\
  = $\frac{\left(n + 3\right)!}{\left(n - 1\right)! 4!}$\
  = $\binom{n + 3}{4}$.

##### 12.4-2

> Describe a binary search tree on *n* nodes such that the average depth of a node in the tree is Θ(lg *n*) but the
> height of the tree is *ω*(lg *n*). Give an asymptotic upper bound on the height of an *n*-node binary search tree in
> which the average depth of a node is Θ(lg *n*).

*Skipped.*

##### 12.4-3

> Show that the notion of a randomly chosen binary search tree on *n* keys, where each binary search tree of *n* keys is
> equally likely to be chosen, is different from the notion of a randomly built binary search tree given in this
> section. (*Hint:* List the possibilities when *n* = 3.)

*Skipped.*

##### 12.4-4

> Show that the function *f*(*x*) = $2^x$ is convex.

*Skipped.*

##### 12.4-5 ★

> Consider *Randomized-Quicksort* operating on a sequence of *n* distinct input numbers. Prove that for any constant
> *k* > 0, all but *O*(1 / $n^k$) of the *n*! input permutations yield an *O*(*n* lg *n*) running time.

*Skipped.*

#### 12.X Problems

##### 12-1 Binary search trees with equal keys

> Equal keys pose a problem for the implementation of binary search trees.
>
> - ***a.*** What is the asymptotic performance of *Tree-Insert* when used to insert *n* items with identical keys into
>   an initially empty binary search tree?
>
> We propose to improve *Tree-Insert* by testing before line 5 to determine whether *z*.*key* = *x*.*key* and by testing
> before line 11 to determine whether *z*.*key* = *y*.*key*.
>
> If equality holds, we implement one of the following strategies. For each strategy, find the asymptotic performance of
> inserting *n* items with identical keys into an initially empty binary search tree. (The strategies are described for
> line 5, in which we compare the keys of *z* and *x*. Substitute *y* for *x* to arrive at the strategies for line 11.)
>
> - ***b.*** Keep a boolean flag *x*.*b* at node *x*, and set *x* to either *x*.*left* or *x*.*right* based on the value
>   of *x*.*b*, which alternates between *false* and *true* each time we visit *x* while inserting a node with the same
>   key as *x*.
> - ***c.*** Keep a list of nodes with equal keys at *x*, and insert *z* into the list.
> - ***d.*** Randomly set *x* to either *x*.*left* or *x*.*right*. (Give the worst-case performance and informally
>   derive the expected running time.)

- ***a.*** Θ($n^2$).
- ***b.*** Θ(*n* lg *n*).
- ***c.*** Θ(*n* lg *n*).
- ***d.*** Θ(*n*).
- ***d.*** Worst-case running time is Θ($n^2$), expected running time is Θ(*n* lg *n*).

##### 12-2 Radix trees

> Given two strings *a* = $a_0 a_1 … a_p$ and *b* = $b_0 b_1 … b_q$, where each $a_i$ and each $b_j$ is in some ordered
> set of characters, we say that string $a$ is lexicographically less than string $b$ if either
>
> 1. there exists an integer *j*, where 0 ≤ *j* ≤ min(*p*, *q*), such that $a_i$ = $b_i$ for all *i* = 0, 1, …, *j* - 1
>    and $a_j$ < $b_j$, or
> 2. *p* < *q* and $a_i$ = $b_i$ for all *i* = 0, 1, …, *p*.
>
> For example, if *a* and *b* are bit strings, then 10100 < 10110 by rule 1 (letting *j* = 3) and 10100 < 101000 by
> rule 2. This ordering is similar to that used in English-language dictionaries.
>
> The ***radix tree*** data structure shown in Figure 12.5 stores the bit strings 1011, 10, 011, 100, and 0. When
> searching for a key *a* = $a_0 a_1 … a_p$, we go left at a node of depth *i* if $a_i$ = 0 and right if $a_i$ = 1. Let
> *S* be a set of distinct bit strings whose lengths sum to *n*. Show how to use a radix tree to sort *S*
> lexicographically in Θ(*n*) time. For the example in Figure 12.5, the output of the sort should be the sequence 0,
> 011, 10, 100, 1011.
>
> ```text
>               ┌──┐
>               │//│
>               └┬─┘
>     ┌──────────┴──────────┐
>     0                     1
>   ┌─┴─┐                  ┌┴─┐
>   │ 0 │                  │//│
>   └─┬─┘                  └┬─┘
>     └──┐               ┌──┘
>        1               0
>       ┌┴─┐           ┌─┴──┐
>       │//│           │ 10 │
>       └┬─┘           └─┬──┘
>        └───┐        ┌──┴───┐
>            1        0      1
>         ┌──┴──┐  ┌──┴──┐  ┌┴─┐
>         │ 011 │  │ 100 │  │//│
>         └─────┘  └─────┘  └┬─┘
>                            └───┐
>                                1
>                             ┌──┴───┐
>                             │ 1011 │
>                             └──────┘
> ```
>
> **Figure 12.5** A radix tree storing the bit strings 1011, 10, 011, 100, and 0. We can determine each node’s key by
> traversing the simple path from the root to that node. There is no need, therefore, to store the keys in the nodes;
> the keys appear here for illustrative purposes only. Nodes are heavily shaded if the keys corresponding to them are
> not in the tree; such nodes are present only to establish a path to other nodes.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_12_binary_search_trees/problems/problem_12_2_radix_trees.rs).

##### 12-3 Average node depth in a randomly built binary search tree

> In this problem, we prove that the average depth of a node in a randomly built binary search tree with *n* nodes is
> *O*(lg *n*). Although this result is weaker than that of Theorem 12.4, the technique we shall use reveals a surprising
> similarity between the building of a binary search tree and the execution of *Randomized-Quicksort* from Section 7.3.
>
> We define the ***total path length*** *P*(*T*) of a binary tree *T* as the sum, over all nodes *x* in *T*, of the
> depth of node *x*, which we denote by *d*(*x*, *T*).
>
> - ***a.*** Argue that the average depth of a node in *T* is
>
>   $\displaystyle \frac{1}{n} ∑_{x ∈ T} d(x, T) = \frac{1}{n} P(T)$.
>
> Thus, we wish to show that the expected value of *P*(*T*) is *O*(*n* lg *n*).
>
> - ***b.*** Let $T_L$ and $T_R$ denote the left and right subtrees of tree *T*, respectively. Argue that if *T* has *n*
>   nodes, then
>
>   *P*(*T*) = *P*($T_L$) + *P*($T_R$) + *n* - 1.
>
> - ***c.*** Let *P*(*n*) denote the average total path length of a randomly built binary search tree with *n* nodes.
>   Show that
>
>   $\displaystyle P(n) = \frac{1}{n} ∑_{i = 0}^{n - 1}(P(i) + P(n - i - 1) + n - 1)$.
>
> - ***d.*** Show how to rewrite *P*(*n*) as
>
>   $\displaystyle P(n) = \frac{2}{n} ∑_{k = 1}^{n - 1} P(k) + Θ(n)$.
>
> - ***e.*** Recalling the alternative analysis of the randomized version of quicksort given in Problem 7-3, conclude
>   that *P*(*n*) = *O*(*n* lg *n*).
>
> At each recursive invocation of quicksort, we choose a random pivot element to partition the set of elements being
> sorted. Each node of a binary search tree partitions the set of elements that fall into the subtree rooted at that
> node.
>
> - ***f.*** Describe an implementation of quicksort in which the comparisons to sort a set of elements are exactly the
>   same as the comparisons to insert the elements into a binary search tree. (The order in which comparisons are made
>   may differ, but the same comparisons must occur.)

*Skipped.*

##### 12-4 Number of different binary trees

> Let $b_n$ denote the number of different binary trees with *n* nodes. In this problem, you will find a formula for
> $b_n$, as well as an asymptotic estimate.
>
> - ***a.*** Show that $b_0$ = 1 and that, for *n* ≥ 1,
>
>   $\displaystyle b_n = ∑_{k = 0}^{n - 1} b_k b_{n - 1 - k}$.
>
> - ***b.*** Referring to Problem 4-4 for the definition of a generating function, let *B*(*x*) be the generating
>   function
>
>   *B*(*x*) = $\displaystyle ∑_{n = 0}^∞ b_n x^n$.
>
>   Show that *B*(*x*) = *x* $B(x)^2$ + 1, and hence one way to express *B*(*x*) in closed form is
>
>   *B*(*x*) = $\dfrac{1}{2 x} \left(1 - \sqrt{1 - 4 x}\right)$.
>
> The ***Taylor expansion*** of *f*(*x*) around the point *x* = *a* is given by
>
> *f*(*x*) = $\displaystyle ∑_{k = 0}^∞ \frac{f^{(k)}(a)}{k!}(x - a)^k$.
>
> where $f^{(k)}(x)$ is the *k*th derivative of *f* evaluated at *x*.
>
> - ***c.*** Show that
>
>   $\displaystyle b_n = \frac{1}{n + 1} \binom{2 n}{n}$
>
>   (the *n*th ***Catalan number***) by using the Taylor expansion of $\sqrt{1 - 4 x}$ around *x* = 0. (If you wish,
>   instead of using the Taylor expansion, you may use the generalization of the binomial expansion (C.4) to nonintegral
>   exponents *n*, where for any real number *n* and for any integer *k*, we interpret $\binom{n}{k}$ to be
>   *n* (*n* - 1) ⋯ (*n* - *k* + 1) / *k*! if *k* ≥ 0, and 0 otherwise.)
>
> - ***d.*** Show that
>
>   $b_n = \dfrac{4^n}{\sqrt{π} n^{3 / 2}}$ (1 + *O*(1 / *n*)).

- ***a***

  1. There is only one type of binary tree of zero nodes, that is, no tree, so $b_0$ = 1.
  2. For *n* > 0, if the left child of the root has *k* nodes, then the right child has *n* - 1 - *k* nodes, for this
     situation, there can be $b_k b_{n - 1 - k}$ different kinds of trees. Since *k* must be in range [0, *n* - 1], the
     total number of kinds of binary trees is $∑_{k = 0}^{n - 1} b_k b_{n - 1 - k}$.
- ***b***

  *Skipped.*
- ***c***

  *Skipped.*
- ***d***

  *Skipped.*

### 13 Red-Black Trees

#### 13.1 Properties of red-black trees

##### 13.1-1

> In the style of Figure 13.1(a), draw the complete binary search tree of height 3 on the keys {1, 2, …, 15}. Add the
> *nil* leaves and color the nodes in three different ways such that the black-heights of the resulting red-black trees
> are 2, 3, and 4.

There you go:

```text
                       ┌─────┐
                       │ [8] │
                       └──┬──┘
            ┌─────────────┴──────────────┐
          ┌─┴─┐                        ┌─┴──┐
          │ 4 │                        │ 12 │
          └─┬─┘                        └─┬──┘
     ┌──────┴──────┐             ┌───────┴───────┐
  ┌──┴──┐       ┌──┴──┐       ┌──┴───┐        ┌──┴───┐
  │ [2] │       │ [6] │       │ [10] │        │ [14] │
  └──┬──┘       └──┬──┘       └──┬───┘        └──┬───┘
  ┌──┴───┐      ┌──┴───┐      ┌──┴───┐       ┌───┴───┐
┌─┴─┐  ┌─┴─┐  ┌─┴─┐  ┌─┴─┐  ┌─┴─┐  ┌─┴──┐  ┌─┴──┐  ┌─┴──┐
│ 1 │  │ 3 │  │ 5 │  │ 7 │  │ 9 │  │ 11 │  │ 13 │  │ 15 │
└───┘  └───┘  └───┘  └───┘  └───┘  └────┘  └────┘  └────┘
```

```text
                       ┌─────┐
                       │ [8] │
                       └──┬──┘
            ┌─────────────┴──────────────┐
         ┌──┴──┐                      ┌──┴───┐
         │ [4] │                      │ [12] │
         └──┬──┘                      └──┬───┘
     ┌──────┴──────┐             ┌───────┴───────┐
  ┌──┴──┐       ┌──┴──┐       ┌──┴───┐        ┌──┴───┐
  │ [2] │       │ [6] │       │ [10] │        │ [14] │
  └──┬──┘       └──┬──┘       └──┬───┘        └──┬───┘
  ┌──┴───┐      ┌──┴───┐      ┌──┴───┐       ┌───┴───┐
┌─┴─┐  ┌─┴─┐  ┌─┴─┐  ┌─┴─┐  ┌─┴─┐  ┌─┴──┐  ┌─┴──┐  ┌─┴──┐
│ 1 │  │ 3 │  │ 5 │  │ 7 │  │ 9 │  │ 11 │  │ 13 │  │ 15 │
└───┘  └───┘  └───┘  └───┘  └───┘  └────┘  └────┘  └────┘
```

```text
                               ┌─────┐
                               │ [8] │
                               └──┬──┘
                ┌─────────────────┴──────────────────┐
             ┌──┴──┐                              ┌──┴───┐
             │ [4] │                              │ [12] │
             └──┬──┘                              └──┬───┘
       ┌────────┴────────┐                 ┌─────────┴─────────┐
    ┌──┴──┐           ┌──┴──┐           ┌──┴───┐            ┌──┴───┐
    │ [2] │           │ [6] │           │ [10] │            │ [14] │
    └──┬──┘           └──┬──┘           └──┬───┘            └──┬───┘
   ┌───┴────┐        ┌───┴────┐        ┌───┴────┐         ┌────┴────┐
┌──┴──┐  ┌──┴──┐  ┌──┴──┐  ┌──┴──┐  ┌──┴──┐  ┌──┴───┐  ┌──┴───┐  ┌──┴───┐
│ [1] │  │ [3] │  │ [5] │  │ [7] │  │ [9] │  │ [11] │  │ [13] │  │ [15] │
└─────┘  └─────┘  └─────┘  └─────┘  └─────┘  └──────┘  └──────┘  └──────┘
```

##### 13.1-2

> Draw the red-black tree that results after *Tree-Insert* is called on the tree in Figure 13.1 with key 36. If the
> inserted node is colored red, is the resulting tree a red-black tree? What if it is colored black?

*Skipped.*

##### 13.1-3

> Let us define a ***relaxed red-black tree*** as a binary search tree that satisfies red-black properties 1, 3, 4,
> and 5. In other words, the root may be either red or black. Consider a relaxed red-black tree *T* whose root is red.
> If we color the root of *T* black but make no other changes to *T*, is the resulting tree a red-black tree?

Yes.

##### 13.1-4

> Suppose that we “absorb” every red node in a red-black tree into its black parent, so that the children of the red
> node become children of the black parent. (Ignore what happens to the keys.) What are the possible degrees of a black
> node after all its red children are absorbed? What can you say about the depths of the leaves of the resulting tree?

*Skipped.*

##### 13.1-5

> Show that the longest simple path from a node *x* in a red-black tree to a descendant leaf has length at most twice
> that of the shortest simple path from node *x* to a descendant leaf.

Since all simple paths has the same number of black nodes and the children of a red node must be black, the shortest
path will contain no red nodes, and the longest path will interleave between black and red nodes, it is obvious that the
longest path has length at most twice that of the shortest path.

##### 13.1-6

> What is the largest possible number of internal nodes in a red-black tree with black-height *k*? What is the smallest
> possible number?

The largest number of internal nodes is $2^{2 k}$ - 1, the smallest possible number is $2^k$ - 1.

##### 13.1-7

> Describe a red-black tree on *n* keys that realizes the largest possible ratio of red internal nodes to black internal
> nodes. What is this ratio? What tree has the smallest possible ratio, and what is the ratio?

*Skipped.*

#### 13.2 Rotations

##### 13.2-1

> Write pseudocode for **Right-Rotate**.

I’ll do you one better: Write
[real code](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_13_red_black_trees/section_13_2_rotations/exercises/exercise_13_2_1.rs)
for **Right-Rotate**.

##### 13.2-2

> Argue that in every *n*-node binary search tree, there are exactly *n* - 1 possible rotations.

If a node is the left child of another node, we can do a right rotation on its parent; if a node is the right child of
another node, we can do a left rotation on its parent. Since there are *n* - 1 nodes with a parent, we can do *n* - 1
possible rotations.

##### 13.2-3

> Let *a*, *b*, and *c* be arbitrary nodes in subtrees *α*, *β*, and *γ*, respectively, in the right tree of Figure
> 13.2. How do the depths of *a*, *b*, and *c* change when a left rotation is performed on node *x* in the figure?
>
>
> ```text
>                 ┌───┐
>                 │ 7 │
>                 └─┬─┘
>            ┌──────┴───────┐
>          ┌─┴─┐        ┌───┴────┐
>          │ 4 │        │ 11 (x) │
>          └─┬─┘        └───┬────┘
>         ┌──┴───┐      ┌───┴────┐
>       ┌─┴─┐  ┌─┴─┐  ┌─┴─┐  ┌───┴────┐
>       │ 3 │  │ 6 │  │ 9 │  │ 18 (y) │
>       └─┬─┘  └───┘  └───┘  └───┬────┘
>      ┌──┘               ┌──────┴──────┐
>    ┌─┴─┐              ┌─┴──┐        ┌─┴──┐
>    │ 2 │              │ 14 │        │ 19 │
>    └───┘              └─┬──┘        └─┬──┘
>                     ┌───┴───┐         └───┐
>                   ┌─┴──┐  ┌─┴──┐        ┌─┴──┐
>                   │ 12 │  │ 17 │        │ 22 │
>                   └────┘  └────┘        └─┬──┘
>                                        ┌──┘
>                   ┊                  ┌─┴──┐
>                   ┊                  │ 20 │
> Left-Rotate(T, X) ┊                  └────┘
>                   ┊
>                   ┊
>                   ⇣
>                 ┌───┐
>                 │ 7 │
>                 └─┬─┘
>         ┌─────────┴─────────┐
>       ┌─┴─┐             ┌───┴────┐
>       │ 4 │             │ 18 (y) │
>       └─┬─┘             └───┬────┘
>      ┌──┴───┐        ┌──────┴───────┐
>    ┌─┴─┐  ┌─┴─┐  ┌───┴────┐       ┌─┴──┐
>    │ 3 │  │ 6 │  │ 11 (x) │       │ 19 │
>    └─┬─┘  └───┘  └───┬────┘       └─┬──┘
>   ┌──┘            ┌──┴───┐          └───┐
> ┌─┴─┐           ┌─┴─┐  ┌─┴──┐         ┌─┴──┐
> │ 2 │           │ 9 │  │ 14 │         │ 22 │
> └───┘           └───┘  └─┬──┘         └─┬──┘
>                      ┌───┴───┐       ┌──┘
>                    ┌─┴──┐  ┌─┴──┐  ┌─┴──┐
>                    │ 12 │  │ 17 │  │ 20 │
>                    └────┘  └────┘  └────┘
> ```
>
> **Figure 13.3** An example of how the procedure *Left-Rotate*(*T*, *x*) modifies a binary search tree. Inorder tree
> walks of the input tree and the modified tree produce the same listing of key values.

- *a* increases by 1.
- *b* stays the same.
- *c* decreases by 1.

##### 13.2-4

> Show that any arbitrary *n*-node binary search tree can be transformed into any other arbitrary *n*-node binary search
> tree using *O*(*n*) rotations. (*Hint:* First show that at most *n* - 1 right rotations suffice to transform the tree
> into a right-going chain.)

One right rotation operation decrease the total number of left child by exactly one and increase the total number of
right child by exactly one. So *n* - 1 right rotations suffice to transform the tree into a tree with at least *n* - 1
right child, which can only be a right-going chain. This step takes *O*(*n* - 1) time.

Since the left rotation and right rotation are symmetric, we can recover the original tree structure from a right going
chain using left rotations in a reversed order, which takes *O*(*n* - 1) time.

So to transform one tree *A* to another tree *B*, we can first transform it into a right going chain, then recover the
struct of tree *B*. Both steps takes *O*(*n* - 1) time, so the total running time is *O*(*n*).

##### 13.2-5 ★

> We say that a binary search tree $T_1$ can be ***right-converted*** to binary search tree $T_2$ if it is possible to
> obtain $T_2$ from $T_1$ via a series of calls to *Right-Rotate*. Give an example of two trees $T_1$ and $T_2$ such
> that $T_1$ cannot be right-converted to $T_2$. Then, show that if a tree $T_1$ can be right-converted to $T_2$, it can
> be right-converted using *O*($n^2$) calls to *Right-Rotate*.

If *A* is a right going chain and *B* is a left going chain, *A* cannot be right-converted into *B* since *A* doesn’t
have left child nodes.

*Skipped.*

#### 13.3 Insertion

##### 13.3-1

> In line 16 of *RB-Insert*, we set the color of the newly inserted node *z* to red. Observe that if we had chosen to
> set *z*’s color to black, then property 4 of a red-black tree would not be violated. Why didn’t we choose to set *z*’s
> color to black?

For any valid red-black tree, property 4 is not violated, then after inserting a black node, red nodes are not affected,
so property 4 will still be valid.

But setting *z*’s color to black will violate property 5, which seems harder to fix than property 4.

##### 13.3-2

> Show the red-black trees that result after successively inserting the keys 41, 38, 31, 12, 19, 8 into an initially
> empty red-black tree.

*Skipped.*

##### 13.3-3

> Suppose that the black-height of each of the subtrees *α*, *β*, *γ*, *δ*, *ε* in Figures 13.5 and 13.6 is *k*. Label
> each node in each figure with its black-height to verify that the indicated transformation preserves property 5.

*Skipped.*

##### 13.3-4

> Professor Teach is concerned that *RB-Insert-Fixup* might set *T*.*nil*.*color* to *red*, in which case the test in
> line 1 would not cause the loop to terminate when *z* is the root. Show that the professor’s concern is unfounded by
> arguing that *RB-Insert-Fixup* never sets *T*.*nil*.*color* to *red*.

The only possible setting nodes’ color to *red* is line 7 and line 13, and in both cases, we are sure that *z* are
*z*.*p*.*p*’s grandchild, so *z*.*p*.*p* can’t be *T*.*nil*. So *RB-Insert-Fixup* never sets *T*.*nil*.*color* to *red*.

##### 13.3-5

> Consider a red-black tree formed by inserting *n* nodes with *RB-Insert*. Argue that if *n* > 1, the tree has at least
> one red node.

Since *n* > 1, the tree will have a root, so the newly inserted node will have a parent.

If the newly inserted node is a child of a black node, the tree will not need any fixups. Since the newly inserted node
is a red node, the tree has at least one red node.

If the newly inserted node is a child of a red node, we will have to do fixup operations on all three cases.

For case 1 of the fixup, one red node will be left on a branch of the new *z* of next iteration.

For case 2 and 3 of the fixup, after one iteration of this case, two red nodes will be left in the tree.

##### 13.3-6

> Suggest how to implement *RB-Insert* efficiently if the representation for red-black trees includes no storage for
> parent pointers.

I can
[do it recursively](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_13_red_black_trees/extra.rs).

#### 13.4 Deletion

##### 13.4-1

> Argue that after executing *RB-Delete-Fixup*, the root of the tree must be black.

*Skipped.*

##### 13.4-2

> Argue that if in *RB-Delete* both *x* and *x*.*p* are red, then property 4 is restored by the call to
> *RB-Delete-Fixup*(*T*, *x*).

*Skipped.*

##### 13.4-3

> In Exercise 13.3-2, you found the red-black tree that results from successively inserting the keys 41, 38, 31, 12, 19,
> 8 into an initially empty tree. Now show the red-black trees that result from the successive deletion of the keys in
> the order 8, 12, 19, 31, 38, 41.

*Skipped.*

##### 13.4-4

> In which lines of the code for *RB-Delete-Fixup* might we examine or modify the sentinel *T*.*nil*?

*Skipped.*

##### 13.4-5

> In each of the cases of Figure 13.7, give the count of black nodes from the root of the subtree shown to each of the
> subtrees *α*, *β*, …, *ζ*, and verify that each count remains the same after the transformation. When a node has a
> *color* attribute *c* or *c*′, use the notation count(*c*) or count(*c*′) symbolically in your count.

*Skipped.*

##### 13.4-6

> Professors Skelton and Baron are concerned that at the start of case 1 of *RB-Delete-Fixup*, the node *x*.*p* might
> not be black. If the professors are correct, then lines 5–6 are wrong. Show that *x*.*p* must be black at the start of
> case 1, so that the professors have nothing to worry about.

Because the right child of *x*.*p* is red, so the parent must be a black node.

##### 13.4-7

> Suppose that a node *x* is inserted into a red-black tree with RB-Insert and then is immediately deleted with
> *RB-Delete*. Is the resulting red-black tree the same as the initial red-black tree? Justify your answer.

No. For example:

```text
  ┌─────┐
  │ [2] │
  └──┬──┘
  ┌──┴───┐
┌─┴─┐  ┌─┴─┐
│ 1 │  │ 3 │
└───┘  └───┘
```

After inserting 4:

```text
    ┌─────┐
    │ [2] │
    └──┬──┘
   ┌───┴────┐
┌──┴──┐  ┌──┴──┐
│ [1] │  │ [3] │
└─────┘  └──┬──┘
        ┌───┴───┐
     ┌──┴──┐  ┌─┴─┐
     │ nil │  │ 4 │
     └─────┘  └───┘
```

After removing 4:

```text
    ┌─────┐
    │ [2] │
    └──┬──┘
   ┌───┴────┐
┌──┴──┐  ┌──┴──┐
│ [1] │  │ [3] │
└─────┘  └─────┘
```

#### 13.X Problems

##### 13-1 Persistent dynamic sets

> During the course of an algorithm, we sometimes find that we need to maintain past versions of a dynamic set as it is
> updated. We call such a set persistent. One way to implement a persistent set is to copy the entire set whenever it is
> modified, but this approach can slow down a program and also consume much space. Sometimes, we can do much better.
>
> Consider a persistent set *S* with the operations *Insert*, *Delete*, and *Search*, which we implement using binary
> search trees as shown in Figure 13.8(a). We maintain a separate root for every version of the set. In order to insert
> the key 5 into the set, we create a new node with key 5. This node becomes the left child of a new node with key 7,
> since we cannot modify the existing node with key 7. Similarly, the new node with key 7 becomes the left child of a
> new node with key 8 whose right child is the existing node with key 10. The new node with key 8 becomes, in turn, the
> right child of a new root *r*′ with key 4 whose left child is the existing node with key 3. We thus copy only part of
> the tree and share some of the nodes with the original tree, as shown in Figure 13.8(b).
>
> Assume that each tree node has the attributes key, left, and right but no parent. (See also Exercise 13.3-6.)
>
> ***a.*** For a general persistent binary search tree, identify the nodes that we need to change to insert a key *k* or
> delete a node *y*.
>
> ***b.*** Write a procedure *Persistent-Tree-Insert* that, given a persistent tree *T* and a key *k* to insert, returns
> a new persistent tree *T*′ that is the result of inserting *k* into *T*.
>
> ***c.*** If the height of the persistent binary search tree *T* is *h*, what are the time and space requirements of
> your implementation of *Persistent-Tree-Insert*? (The space requirement is proportional to the number of new nodes
> allocated.)
>
> ***d.*** Suppose that we had included the parent attribute in each node. In this case, *Persistent-Tree-Insert* would
> need to perform additional copying. Prove that *Persistent-Tree-Insert* would then require Ω(*n*) time and space,
> where *n* is the number of nodes in the tree.
>
> ***e.*** Show how to use red-black trees to guarantee that the worst-case running time and space are *O*(lg *n*) per
> insertion or deletion.

Solutions are implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/tree/master/src/chapter_13_red_black_trees/problems/problem_13_1_persistent_dynamic_sets).

##### 13-2 Join operation on red-black trees

> The ***join*** operation takes two dynamic sets $S_1$ and $S_2$ and an element *x* such that for any $x_1$ ∈ $S_1$ and
> $x_2$ ∈ $S_2$, we have $x_1$.*key* ≤ $x$.*key* ≤ $x_2$.*key*. It returns a set *S* = $S_1$ ∪ { *x* } ∪ $S_2$. In this
> problem, we investigate how to implement the join operation on red-black trees.
>
> - ***a.*** Given a red-black tree *T*, let us store its black-height as the new attribute *T*.*bh*. Argue that
>   *RB-Insert* and *RB-Delete* can maintain the *bh* attribute without requiring extra storage in the nodes of the tree
>   and without increasing the asymptotic running times. Show that while descending through *T*, we can determine the
>   black-height of each node we visit in *O*(1) time per node visited.
>
> We wish to implement the operation *RB-Join*($T_1$, *x*, $T_2$), which destroys $T_1$ and $T_2$ and returns a
> red-black tree *T* = $T_1$ ∪ { *x* } ∪ $T_2$. Let *n* be the total number of nodes in $T_1$ and $T_2$.
>
> - ***b.*** Assume that $T_1$.*bh* ≥ $T_2$.*bh*. Describe an *O*(lg *n*)-time algorithm that finds a black node *y* in
>   $T_1$ with the largest key from among those nodes whose black-height is $T_2$.*bh*.
> - ***c.*** Let $T_y$ be the subtree rooted at *y*. Describe how $T_y$ ∪ { *x* } ∪ $T_2$ can replace $T_y$ in O(1)
>   time without destroying the binary-search-tree property.
> - ***d.*** What color should we make *x* so that red-black properties 1, 3, and 5 are maintained? Describe how to
>   enforce properties 2 and 4 in *O*(lg *n*) time.
> - ***e.*** Argue that no generality is lost by making the assumption in part (b). Describe the symmetric situation
>   that arises when $T_1$.*bh* ≤ $T_2$.*bh*.
> - ***f.*** Argue that the running time of *RB-Join* is *O*(lg *n*).

*Skipped.*

##### 13-3 AVL trees

> An ***AVL tree*** is a binary search tree that is ***height balanced***: for each node *x*, the heights of the left
> and right subtrees of *x* differ by at most 1. To implement an AVL tree, we maintain an extra attribute in each node:
> *x*.*h* is the height of node *x*. As for any other binary search tree *T*, we assume that *T*.*root* points to the
> root node.
>
> ***a.*** Prove that an AVL tree with *n* nodes has height *O*(lg *n*). (*Hint:* Prove that an AVL tree of height *h*
> has at least $F_h$ nodes, where $F_h$ is the *h*th Fibonacci number.)
>
> ***b.*** To insert into an AVL tree, we first place a node into the appropriate place in binary search tree order.
> Afterward, the tree might no longer be height balanced. Specifically, the heights of the left and right children of
> some node might differ by 2. Describe a procedure *Balance*(*x*), which takes a subtree rooted at *x* whose left and
> right children are height balanced and have heights that differ by at most 2, i.e.,
> |*x*.*right*.*h* - *x*.*left*.*h*| ≤ 2, and alters the subtree rooted at *x* to be height balanced. (*Hint:* Use
> rotations.)
>
> ***c.*** Using part (b), describe a recursive procedure ***AVL-Insert***(*x*, *z*) that takes a node *x* within an AVL
> tree and a newly created node *z* (whose key has already been filled in), and adds *z* to the subtree rooted at *x*,
> maintaining the property that *x* is the root of an AVL tree. As in *Tree-Insert* from Section 12.3, assume that
> *z*.*key* has already been filled in and that *z*.*left* = *nil* and *z*.*right* = *nil*; also assume that
> *z*.*h* = 0. Thus, to insert the node *z* into the AVL tree *T*, we call ***AVL-Insert***(*T*.root, *z*).
>
> ***d.*** Show that ***AVL-Insert***, run on an *n*-node AVL tree, takes *O*(lg *n*) time and performs *O*(1)
> rotations.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_13_red_black_trees/problems/problem_13_3_avl_trees.rs).

##### 13-4 Treaps

> If we insert a set of *n* items into a binary search tree, the resulting tree may be horribly unbalanced, leading to
> long search times. As we saw in Section 12.4, however, randomly built binary search trees tend to be balanced.
> Therefore, one strategy that, on average, builds a balanced tree for a fixed set of items would be to randomly permute
> the items and then insert them in that order into the tree.
>
> What if we do not have all the items at once? If we receive the items one at a time, can we still randomly build a
> binary search tree out of them?
>
> We will examine a data structure that answers this question in the affirmative. A ***treap*** is a binary search tree
> with a modified way of ordering the nodes. Figure 13.9 shows an example. As usual, each node *x* in the tree has a key
> value *x*.*key*. In addition, we assign *x*.*priority*, which is a random number chosen independently for each node.
> We assume that all priorities are distinct and also that all keys are distinct. The nodes of the treap are ordered so
> that the keys obey the binary-search-tree property and the priorities obey the min-heap order property:
>
> - If *v* is a left child of *u*, then *v*.*key* < *u*.*key*.
> - If *v* is a right child of *u*, then *v*.*key* > *u*.*key*.
> - If *v* is a child of *u*, then *v*.*priority* > u.*priority*.
>
> (This combination of properties is why the tree is called a “treap”: it has features of both a binary search tree and
> a heap.)
>
> It helps to think of treaps in the following way. Suppose that we insert nodes $x_1$, $x_2$, …, $x_n$, with associated
> keys, into a treap. Then the resulting treap is the tree that would have been formed if the nodes had been inserted
> into a normal binary search tree in the order given by their (randomly chosen) priorities, i.e.,
> $x_i$.*priority* < $x_j$.*priority* means that we had inserted $x_i$ before $x_j$.
>
> - ***a.*** Show that given a set of nodes $x_1$, $x_2$, …, $x_n$, with associated keys and priorities, all distinct,
>   the treap associated with these nodes is unique.
> - ***b.*** Show that the expected height of a treap is Θ(lg *n*), and hence the expected time to search for a value in
>   the treap is Θ(lg *n*).
>
> Let us see how to insert a new node into an existing treap. The first thing we do is assign to the new node a random
> priority. Then we call the insertion algorithm, which we call *Treap-Insert*, whose operation is illustrated in Figure
> 13.10.
>
> - ***c.*** Explain how *Treap-Insert* works. Explain the idea in English and give pseudocode. (*Hint:* Execute the
>   usual binary-search-tree insertion procedure and then perform rotations to restore the min-heap order property.)
> - ***d.*** Show that the expected running time of *Treap-Insert* is Θ(lg *n*).
>
> *Treap-Insert* performs a search and then a sequence of rotations. Although these two operations have the same
> expected running time, they have different costs in practice. A search reads information from the treap without
> modifying it. In contrast, a rotation changes parent and child pointers within the treap. On most computers, read
> operations are much faster than write operations. Thus we would like *Treap-Insert* to perform few rotations. We will
> show that the expected number of rotations performed is bounded by a constant.
>
> In order to do so, we will need some definitions, which Figure 13.11 depicts. The ***left spine*** of a binary search
> tree *T* is the simple path from the root to the node with the smallest key. In other words, the left spine is the
> simple path from the root that consists of only left edges. Symmetrically, the ***right spine*** of *T* is the simple
> path from the root consisting of only right edges. The ***length*** of a spine is the number of nodes it contains.
>
> - ***e.*** Consider the treap *T* immediately after *Treap-Insert* has inserted node *x*. Let *C* be the length of the
>   right spine of the left subtree of *x*. Let *D* be the length of the left spine of the right subtree of *x*. Prove
>   that the total number of rotations that were performed during the insertion of *x* is equal to *C* + *D*.
>
> We will now calculate the expected values of *C* and *D*. Without loss of generality, we assume that the keys are
> 1, 2, …, *n*, since we are comparing them only to one another.
>
> For nodes *x* and *y* in treap *T*, where *y* ≠ *x*, let *k* = *x*.*key* and *i* = *y*.*key*. We define indicator
> random variables
>
> $X_{i k}$ = I{*y* is in the right spine of the left subtree of *x*}.
>
> - ***f.*** Show that $X_{i k}$ = 1 if and only if *y*.*priority* > *x*.*priority*, *y*.*key* < *x*.*key*, and, for
>   every *z* such that *y*.*key* < *z*.*key* < *x*.*key*, we have *y*.*priority* < *z*.*priority*.
> - ***g.*** Show that
>
>   $\begin{aligned}
>   \Pr\left\lbrace X_{i k} = 1\right\rbrace &= \frac{(k - i - i)!}{(k - i + 1)!} \\\\
>   &= \frac{1}{(k - i + 1)(k - i)}.
>   \end{aligned}$
> - ***h.*** Show that
>
>   $\begin{aligned}
>   \operatorname{E}[C] &= ∑_{j = 1}^{k - 1} \frac{1}{j (j + 1)} \\\\
>   &= 1 - \frac{1}{k}.
>   \end{aligned}$
> - ***i.*** Use a symmetry argument to show that
>
>   E[*D*] = 1 - $\dfrac{1}{n - k + 1}$.
> - ***j.*** Conclude that the expected number of rotations performed when inserting a node into a treap is less than 2.

- ***a.*** Proof by induction.

  - Base case: If the treap has 0 node, the treap is trivially unique.
  - Inductive case: If the treap has more than one nodes, the tree must have a root with the lowest priority, so the
    root is unique. The left subtree contains nodes that have keys less than key of root, by induction, we know the left
    subtree is unique. The same applies to the right subtree, so the treap is unique.
- ***c.*** Solution is implemented
  [here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_13_red_black_trees/problems/problem_13_4_treaps.rs).

### 14 Augmenting Data Structures

#### 14.1 Dynamic order statistics

##### 14.1-1

> Show how *OS-Select*(*T*.*root*, 10) operates on the red-black tree *T* of Figure 14.1.

*Skipped.*

##### 14.1-2

> Show how *OS-Rank*(*T*, *x*) operates on the red-black tree *T* of Figure 14.1 and the node *x* with *x*.*key* = 35.

*Skipped.*

##### 14.1-3

> Write a nonrecursive version of *OS-Select*.

*OS-Select*(*x*, *i*)

1. *r* = *x*.*left*.*size* + 1
2. **while** *i* ≠ *r*
3. &nbsp;&nbsp;&nbsp;&nbsp;**if** *i* < *r*
4. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*x* = *x*.*left*
5. &nbsp;&nbsp;&nbsp;&nbsp;**else**
6. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*x* = *x*.*right*
7. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*i* = *i* - *r*
8. &nbsp;&nbsp;&nbsp;&nbsp;*r* = *x*.*left*.*size* + 1
9. **return** *x*

##### 14.1-4

> Write a recursive procedure *OS-Key-Rank*(*T*, *k*) that takes as input an order-statistic tree *T* and a key *k* and
> returns the rank of *k* in the dynamic set represented by *T*. Assume that the keys of *T* are distinct.

*OS-Key-Rank-Helper*(*x*, *k*, *a*)

1. **if** *k* == *x*.*key*
2. &nbsp;&nbsp;&nbsp;&nbsp;**return** *a* + *x*.*left*.*size* + 1
3. **elseif** *k* < *T*.*key*
4. &nbsp;&nbsp;&nbsp;&nbsp;**return** *OS-Key-Rank-Helper*(*x*.*left*, *k*, *a*)
5. **else**
6. &nbsp;&nbsp;&nbsp;&nbsp;**return** *OS-Key-Rank-Helper*(*x*.*right*, *k*, *a* + *x*.*left*.*size* + 1)

*OS-Key-Rank*(*T*, *k*)

1. **return** *OS-Key-Rank-Helper*(*T*.*root*, *k*, 0)

##### 14.1-5

> Given an element *x* in an *n*-node order-statistic tree and a natural number *i*, how can we determine the *i*th
> successor of *x* in the linear order of the tree in *O*(lg *n*) time?

*OS-I-th-Successor*(*x*, *i*)

1. **if** *i* == 0
2. &nbsp;&nbsp;&nbsp;&nbsp;**return** *x*
3. **elseif** *x*.*right*.*size* >= *i*
4. &nbsp;&nbsp;&nbsp;&nbsp;**return** *OS-I-th-Successor*(*x*.*right*, *i* - 1)
5. **elseif** *x* == *x*.*p*.*left*
6. &nbsp;&nbsp;&nbsp;&nbsp;**return** *OS-I-th-Successor*(*x*.*p*, *i* - *x*.*right*.*size* - 1)
7. **else** **return** *OS-I-th-Successor*(*x*.*p*, *i* + *x*.*left*.*size* + 1)

##### 14.1-6

> Observe that whenever we reference the *size* attribute of a node in either *OS-SELECT* or *OS-Rank*, we use it only
> to compute a rank. Accordingly, suppose we store in each node its rank in the subtree of which it is the root. Show
> how to maintain this information during insertion and deletion. (Remember that these two operations can cause
> rotations.)

*Skipped*.

##### 14.1-7

> Show how to use an order-statistic tree to count the number of inversions (see Problem 2-4) in an array of size *n* in
> time *O*(*n* lg *n*).

*Inversions*(*A*)

1. *T* = new empty order-statistic red-black tree
2. *r* = 0
3. **for** *i* = 1 **to** *A*.*length*
4. &nbsp;&nbsp;&nbsp;&nbsp;*x* = new node with key *A*[*i*]
5. &nbsp;&nbsp;&nbsp;&nbsp;*RB-Insert*(*T*, *x*)
6. &nbsp;&nbsp;&nbsp;&nbsp;*r* = *r* + (*i* - *OS-Rank*(*T*, *x*))
7. **return** *r*

##### 14.1-8 ★

> Consider *n* chords on a circle, each defined by its endpoints. Describe an *O*(*n* lg *n*)- time algorithm to
> determine the number of pairs of chords that intersect inside the circle. (For example, if the *n* chords are all
> diameters that meet at the center, then the correct answer is $\binom{n}{2}$ Assume that no two chords share an
> endpoint.

Define a chord as (*a*, *b*), where *a* is the endpoint of lesser degrees (the *start* endpoint), and *b* is the endpoint
of greater degrees (the *end* endpoint), that is, *a* ∈ [0, 2 *π*), *a* ∈ [0, 2 *π*), and *a* ≤ *b*.

To get the number of pairs of chords that intersect inside the circle:

1. Sort these *n* chords by their start endpoint degree. This step can be done in *O*(*n* lg *n*) time.
2. Insert these sorted *n* chords into an order-statistics red-black tree in order by their end endpoint degree.

   Before a new chord (*a*, *b*) being inserted into the order-statistics red-black tree, we know that all chords
   already in the order-statistics red-black tree has start endpoints with lesser degree than *a*, because we have
   sorted the chords in the beginning. All chords that already in the tree that intersect with the new chord must have
   end endpoints within [*a*, *b*] range. Good thing that they are in an order-statistics red-black tree with the end
   endpoint as key, so that we can find the number of chords with end endpoint within [*a*, *b*] range in *O*(lg *k*)
   time, where *k* is the number of nodes in the tree. The total running time of this step is *O*(*n* lg *n*).

So the total running time is in *O*(*n* lg *n*) limit.

#### 14.2 How to augment a data structure

##### 14.2-1

> Show, by adding pointers to the nodes, how to support each of the dynamic-set queries *Minimum*, *Maximum*,
> *Successor*, and *Predecessor* in *O*(1) worst-case time on an augmented order-statistic tree. The asymptotic
> performance of other operations on order-statistic trees should not be affected.

*Skipped.*

##### 14.2-2

> Can we maintain the black-heights of nodes in a red-black tree as attributes in the nodes of the tree without
> affecting the asymptotic performance of any of the red-black tree operations? Show how, or argue why not. How about
> maintaining the depths of nodes?

Black-heights of nodes can be maintained, but depth of nodes can not be maintained.

##### 14.2-3 ★

> Let ⊗ be an associative binary operator, and let a be an attribute maintained in each node of a red-black tree.
> Suppose that we want to include in each node *x* an additional attribute *f* such that
> *x*.*f* = $x_1$.*a* ⊗ $x_2$.*a* ⊗ ⋯ ⊗ $x_m$.*a*, where $x_1$, $x_2$, …, $x_m$ is the inorder listing of nodes in
> the subtree rooted at *x*. Show how to update the *f* attributes in *O*(1) time after a rotation. Modify your argument
> slightly to apply it to the size attributes in order-statistic trees.

Assume we are doing right rotation:

```text
      ┌───┐            ┌───┐
      │ d │            │ b │
      └─┬─┘            └─┬─┘
     ┌──┴───┐         ┌──┴───┐
   ┌─┴─┐  ┌─┴─┐     ┌─┴─┐  ┌─┴─┐
   │ b │  │ e │  →  │ a │  │ d │
   └─┬─┘  └───┘     └───┘  └─┬─┘
  ┌──┴───┐                ┌──┴───┐
┌─┴─┐  ┌─┴─┐            ┌─┴─┐  ┌─┴─┐
│ a │  │ c │            │ c │  │ e │
└───┘  └───┘            └───┘  └───┘
```

Just follow this table:

| Node | Old *f* attribute                               | New *f* attribute                               |
| ---- | ----------------------------------------------- | ----------------------------------------------- |
| *a*  | *a*.*f*                                         | *a*.*f*                                         |
| *b*  | *a*.*f* ⊗ *b*.*a* ⊗ *c*.*f*                     | *a*.*f* ⊗ *b*.*a* ⊗ *c*.*f* ⊗ *d*.*a* ⊗ *e*.*f* |
| *c*  | *c*.*f*                                         | *c*.*f*                                         |
| *d*  | *a*.*f* ⊗ *b*.*a* ⊗ *c*.*f* ⊗ *d*.*a* ⊗ *e*.*f* | *c*.*f* ⊗ *d*.*a* ⊗ *e*.*f*                     |
| *e*  | *e*.*f*                                         | *e*.*f*                                         |

##### 14.2-4 ★

> We wish to augment red-black trees with an operation *RB-Enumerate*(*x*, *a*, *b*) that outputs all the keys *k* such
> that *a* ≤ *k* ≤ *b* in a red-black tree rooted at *x*. Describe how to implement *RB-Enumerate* in Θ(*m* + lg *n*)
> time, where *m* is the number of keys that are output and *n* is the number of internal nodes in the tree. (*Hint:*
> You do not need to add new attributes to the red-black tree.)

*RB-Enumerate*(*x*, *a*, *b*)

1. **if** *x* ≠ *nil*
2. &nbsp;&nbsp;&nbsp;&nbsp;**if** *b* < *x*.key
3. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*RB-Enumerate*(*x*.*left*, *a*, *b*)
4. &nbsp;&nbsp;&nbsp;&nbsp;**elseif** *a* > *x*.key
5. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*RB-Enumerate*(*x*.*right*, *a*, *b*)
6. &nbsp;&nbsp;&nbsp;&nbsp;**else**
7. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*RB-Enumerate*(*x*.*left*, *a*, *b*)
8. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**output** *x*.*key*
9. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*RB-Enumerate*(*x*.*right*, *a*, *b*)

#### 14.3 Interval trees

##### 14.3-1

> Write pseudocode for *Left-Rotate* that operates on nodes in an interval tree and updates the max attributes in *O*(1)
> time.

*Skipped.*

##### 14.3-2

> Rewrite the code for *Interval-Search* so that it works properly when all intervals are open.

*Interval-Search*(*T*, *i*)

1. *x* = *T*.*root*
2. **while** *x* ≠ *T*.*nil* and *i* does not overlap *x*.*int*
3. &nbsp;&nbsp;&nbsp;&nbsp;**if** *x*.*left* ≠ *T*.*nil* and *x*.*left*.*max* > *i*.*low*
4. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*x* = *x*.*left*
5. &nbsp;&nbsp;&nbsp;&nbsp;**else** *x* = *x*.*right*
6. **return** *x*

##### 14.3-3

> Describe an efficient algorithm that, given an interval *i*, returns an interval overlapping *i* that has the minimum
> low endpoint, or *T*.*nil* if no such interval exists.

1. *x* = *T*.*root*
2. *r* = *T*.*nil*
3. **while** *x* ≠ *T*.*nil*
4. &nbsp;&nbsp;&nbsp;&nbsp;**if** *i* overlap *x*.*int*
5. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*r* = *x*
6. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**if** *x*.*left* ≠ *T*.*nil* and *x*.*left*.*max* ≥ *i*.*low*
7. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*x* = *x*.*left*
8. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**else** **break**
9. &nbsp;&nbsp;&nbsp;&nbsp;**else**
10. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**if** *x*.*left* ≠ *T*.*nil* and *x*.*left*.*max* ≥ *i*.*low*
11. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*x* = *x*.*left*
12. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**else** *x* = *x*.*right*
13. **return** *r*

##### 14.3-4

> Given an interval tree *T* and an interval *i*, describe how to list all intervals in *T* that overlap *i* in
> *O*(min(*n*, *k* lg *n*)) time, where *k* is the number of intervals in the output list. (*Hint:* One simple method
> makes several queries, modifying the tree between queries. A slightly more complicated method does not modify the
> tree.)

*Skipped.*

##### 14.3-5

> Suggest modifications to the interval-tree procedures to support the new operation *Interval-Search-Exactly*(*T*, *i*)
> where *T* is an interval tree and *i* is an interval. The operation should return a pointer to a node *x* in *T* such
> that *x*.*int*.*low* = *i*.*low* and *x*.*int*.*high* = *i*.*high*, or *T*.*nil* if *T* contains no such node. All
> operations, including *Interval-Search-Exactly*, should run in *O*(lg *n*) time on an *n*-node interval tree.

*Skipped.*

##### 14.3-6

> Show how to maintain a dynamic set *Q* of numbers that supports the operation *Min-Gap*, which gives the magnitude of
> the difference of the two closest numbers in *Q*. For example, if *Q* = {1, 5, 9, 15, 18, 22}, then *Min-Gap*(*Q*)
> returns 18 - 15 = 3, since 15 and 18 are the two closest numbers in *Q*. Make the operations *Insert*, *Delete*,
> *Search*, and *Min-Gap* as efficient as possible, and analyze their running times.

We add three extra augmenting property to every node:

1. Minimal value of subtree *min*.
2. Maximal value of subtree *max*.
3. Minimal gap of numbers in the tree *min-gap*.

For a node *x*:

- *x*.*min* =
  - *x*.*left*.*min* if *x*.*left* ≠ *nil*
  - *x*.*key* otherwise.
- *x*.*max* =
  - *x*.*right*.*max* if *x*.*right* ≠ *nil*
  - *x*.*key* otherwise.
- *x*.*min-gap* = the minimal value of the following values if they exist:
  - *x*.*left*.*min-gap*
  - *x*.*right*.*min-gap*
  - *x*.*key* - *x*.*left*.*max*
  - *x*.*right*.*min* - *x*.*key*
  - +∞

Then the operations are easy to implement.

##### 14.3-7 ★

> VLSI databases commonly represent an integrated circuit as a list of rectangles. Assume that each rectangle is
> rectilinearly oriented (sides parallel to the *x*- and *y*-axes), so that we represent a rectangle by its minimum and
> maximum *x*-and *y*-coordinates. Give an *O*(*n* lg *n*)-time algorithm to decide whether or not a set of *n*
> rectangles so represented contains two rectangles that overlap. Your algorithm need not report all intersecting pairs,
> but it must report that an overlap exists if one rectangle entirely covers another, even if the boundary lines do not
> intersect. (*Hint:* Move a “sweep” line across the set of rectangles.)

As in the hint, we sweep one vertical line from left to right, and maintain a interval tree in which the intervals are
the intervals that the sweep line intersects with the rectangles.

Before inserting each interval into the tree, check whether there is already interval in the tree that overlaps this new
interval using *Interval-Search*. If there exists any overlaps during inserting, then there are two rectangles that
overlap.

#### 14.X Problems

##### 14-1 Point of maximum overlap

> Suppose that we wish to keep track of a ***point of maximum overlap*** in a set of intervals—a point with the largest
> number of intervals in the set that overlap it.
>
> ***a.*** Show that there will always be a point of maximum overlap that is an endpoint of one of the segments.
>
> ***b.*** Design a data structure that efficiently supports the operations *Interval-Insert*, *Interval-Delete*, and
> *Find-POM*, which returns a point of maximum overlap. (*Hint:* Keep a red-black tree of all the endpoints. Associate a
> value of +1 with each left endpoint, and associate a value of -1 with each right endpoint. Augment each node of the
> tree with some extra information to maintain the point of maximum overlap.)

- ***a.*** *Skipped.*
- ***b.*** As in the hint, we got an red-black tree. We add an augmenting properties to each node:

  1. The sum of the all value property (the one with +1 and -1 values) rooted at that node *sum*.
  2. The point of maximum overlap *pom*.
  3. The number of overlaps on the point of maximum overlap *max-overlaps*.

  For a node *x*, we have:

  - *x*.*sum* = *x*.*left*.*sum* + *x*.*value* + *x*.*right*.*sum*
  - Depending on the maximal value of:

    - *x*.*left*.*max-overlaps*
      - *x*.*pom* = *x*.*left*.*pom*
      - *x*.*max-overlaps* = *x*.*left*.*max-overlaps*
    - *x*.*left*.*sum* + *x*.*value*
      - *x*.*pom* = *x*.*key*
      - *x*.*max-overlaps* = *x*.*left*.*max-overlaps* + *x*.*value*
    - *x*.*left*.*sum* + *x*.*value* + *x*.*right*.*max-overlaps*
      - *x*.*pom* = *x*.*right*.*pom*
      - *x*.*max-overlaps* = *x*.*left*.*sum* + *x*.*value* + *x*.*right*.*max-overlaps*

  *Interval-Insert*, *Interval-Delete* are just normal augmented red-black tree operations. *Find-POM* just return the
  *pom* property of the root node.

##### 14-2 Josephus permutation

> We define the ***Josephus problem*** as follows. Suppose that *n* people form a circle and that we are given a
> positive integer *m* ≤ *n*. Beginning with a designated first person, we proceed around the circle, removing every
> *m*th person. After each person is removed, counting continues around the circle that remains. This process continues
> until we have removed all *n* people. The order in which the people are removed from the circle defines the
> ***(n, m)-Josephus permutation*** of the integers 1, 2, …, *n*. For example, the (7, 3)-Josephus permutation is
> ⟨3, 6, 2, 7, 5, 1, 4⟩.
>
> ***a.*** Suppose that *m* is a constant. Describe an *O*(*n*)-time algorithm that, given an integer *n*, outputs the
> (*n*, *m*)-Josephus permutation.
>
> ***b.*** Suppose that *m* is not a constant. Describe an *O*(*n* lg *n*)-time algorithm that, given integers *n* and
> *m*, outputs the (*n*, *m*)-Josephus permutation.

*Josephus-Permutation*(*n*, *m*)

1. *T* = new order statistic red-black tree with values 1, 2, …, *n*.
2. *i* = 1
3. **for** *k* = *n* **downto** 1
4. &nbsp;&nbsp;&nbsp;&nbsp;*i* = (*i* + *m* - 2) mod *k* + 1
5. &nbsp;&nbsp;&nbsp;&nbsp;*x* = *OS-Select*(*T*.*root*, *i*)
6. &nbsp;&nbsp;&nbsp;&nbsp;**output** *x*.*key*
7. &nbsp;&nbsp;&nbsp;&nbsp;*RB-Delete*(*T*, *x*)

## IV Advanced Design and Analysis Techniques

### 15 Dynamic Programming

#### 15.1 Rod cutting

##### 15.1-1

> Show that equation (15.4) follows from equation (15.3) and the initial condition *T*(0) = 1.

By induction:

Base case:

*T*(0)\
= 1 + $∑_{j = 0}^{-1} T(j)$\
= 1\
= $2^0$.

Indictive case: If *n* > 0:

*T*(*n*)\
= 1 + $∑_{j = 0}^{n - 1} T(j)$\
= 1 + $∑_{j = 0}^{n - 1} 2^j$ (By induction)\
= 1 + ($2^n$ - 1)\
= $2^n$.

##### 15.1-2

> Show, by means of a counterexample, that the following “greedy” strategy does not always determine an optimal way to
> cut rods. Define the ***density*** of a rod of length *i* to be $p_i$ / *i*, that is, its value per inch. The greedy
> strategy for a rod of length *n* cuts off a first piece of length *i*, where 1 ≤ *i* ≤ *n*, having maximum density. It
> then continues by applying the greedy strategy to the remaining piece of length *n* - *i*.

Assume we are cutting a rod of length 4, and we have:

- $p_1$ = 1
- $p_2$ = 6
- $p_3$ = 10
- $p_4$ = 12

Then the densities of length *i* is:

- $d_1$ = 1
- $d_2$ = 3
- $d_3$ = 10 / 3
- $d_4$ = 3

The greedy strategy give us 10 / 3 + 1 = 13 / 3 revenue, but if we cut the rod into two pieces of length 2, we can get
revenue of 3 + 3 = 6.

##### 15.1-3

> Consider a modification of the rod-cutting problem in which, in addition to a price $p_i$ for each rod, each cut
> incurs a fixed cost of *c*. The revenue associated with a solution is now the sum of the prices of the pieces minus
> the costs of making the cuts. Give a dynamic-programming algorithm to solve this modified problem.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/section_15_1_rod_cutting/exercises/exercise_15_1_3.rs).

##### 15.1-4

> Modify *Memoized-Cut-Rod* to return not only the value but the actual solution, too.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/section_15_1_rod_cutting/exercises/exercise_15_1_4.rs).

##### 15.1-5

> The Fibonacci numbers are defined by recurrence (3.22). Give an *O*(*n*)-time dynamic-programming algorithm to compute
> the *n*th Fibonacci number. Draw the subproblem graph. How many vertices and edges are in the graph?

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/section_15_1_rod_cutting/exercises/exercise_15_1_5.rs).

There are max(0, 2 *n* - 2) edges.

#### 15.2 Matrix-chain multiplication

##### 15.2-1

> Find an optimal parenthesization of a matrix-chain product whose sequence of dimensions is ⟨5, 10, 3, 12, 5, 50, 6⟩.

$((A_1 A_2) ((A_3 A_4) (A_5 A_6)))$ (See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/section_15_2_matrix_chain_multiplication/exercises/exercise_15_2_1.rs)).

##### 15.2-2

> Give a recursive algorithm *Matrix-Chain-Multiply*(*A*, *s*, *i*, *j*) that actually performs the optimal matrix-chain
> multiplication, given the sequence of matrices ⟨$A_1$, $A_2$, …, $A_n$⟩, the *s* table computed by
> *Matrix-Chain-Order*, and the indices *i* and *j*. (The initial call would be
> *Matrix-Chain-Multiply*(*A*, *s*, 1, *n*).)

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/section_15_2_matrix_chain_multiplication/exercises/exercise_15_2_2.rs).

##### 15.2-3

> Use the substitution method to show that the solution to the recurrence (15.6) is Ω($2^n$).

*Skipped.*

##### 15.2-4

> Describe the subproblem graph for matrix-chain multiplication with an input chain of length *n*. How many vertices
> does it have? How many edges does it have, and which edges are they?

The total number of vertices is:

$∑_{i = 1}^n (n - i + 1)$\
= *n* (*n* + 1) / 2.

For subproblem of length *k*, there are 2 (*k* - 1) subproblems, so the total number of edges is:

$∑_{k = 1}^n ∑_{i = 1}^{n - k + 1} 2 (k - 1)$\
= $∑_{k = 1}^n 2 (n - k + 1) (k - 1)$\
= ($n^3$ - *n*) / 3.

##### 15.2-5

> Let *R*(*i*, *j*) be the number of times that table entry *m*[*i*, *j*] is referenced while computing other table
> entries in a call of *Matrix-Chain-Order*. Show that the total number of references for the entire table is
>
> $\displaystyle ∑_{i = 1}^n ∑_{j = i}^n R(i, j) = \frac{n^3 - n}{3}$.
>
> (*Hint:* You may find equation (A.3) useful.)

One edge in the subproblem graph means one reference, so the total number of references equals to the number of edges in
the subproblem graph, which, according to exercise 15.2-4, is ($n^3$ - *n*) / 3.

##### 15.2-6

> Show that a full parenthesization of an *n*-element expression has exactly *n* - 1 pairs of parentheses.

Proof by induction.

Base case: A 1-element expression has 0 pair of parentheses.

Inductive case: An *n*-element expression is composed of two sub-expressions. Suppose the left one has *k* elements,
then the right one has *n* - *k* elements. By induction, we know these two sub-expressions have *k* - 1 and
*n* - *k* - 1 pairs of parentheses. Since *n*-element expression is enclosed inside a pair of parentheses, the total
pairs of parentheses is (*k* - 1) + (*n* - *k* - 1) + 1 = *n* - 1.

#### 15.3 Elements of dynamic programming

##### 15.3-1

> Which is a more efficient way to determine the optimal number of multiplications in a matrix-chain multiplication
> problem: enumerating all the ways of parenthesizing the product and computing the number of multiplications for each,
> or running *Recursive-Matrix-Chain*? Justify your answer.

*Skipped.*

##### 15.3-2

> Draw the recursion tree for the *Merge-Sort* procedure from Section 2.3.1 on an array of 16 elements. Explain why
> memoization fails to speed up a good divide-and-conquer algorithm such as *Merge-Sort*.

Because the subproblems do not overlap.

##### 15.3-3

> Consider a variant of the matrix-chain multiplication problem in which the goal is to parenthesize the sequence of
> matrices so as to maximize, rather than minimize, the number of scalar multiplications. Does this problem exhibit
> optimal substructure?

Yes.

##### 15.3-4

> As stated, in dynamic programming we first solve the subproblems and then choose which of them to use in an optimal
> solution to the problem. Professor Capulet claims that we do not always need to solve all the subproblems in order to
> find an optimal solution. She suggests that we can find an optimal solution to the matrix-chain multiplication problem
> by always choosing the matrix $A_k$ at which to split the subproduct $A_i A_{i + 1} ⋯ A_j$ (by selecting *k* to
> minimize the quantity $p_{i - 1} p_k p_j$) before solving the subproblems. Find an instance of the matrix-chain
> multiplication problem for which this greedy approach yields a suboptimal solution.

*Skipped.*

##### 15.3-5

> Suppose that in the rod-cutting problem of Section 15.1, we also had limit $l_i$ on the number of pieces of length *i*
> that we are allowed to produce, for *i* = 1, 2, …, *n*. Show that the optimal-substructure property described in
> Section 15.1 no longer holds.

For rod of length *n*, the number of ways to cutting it depends on the number of pieces has already been cut off, not
the only the value of *n*.

##### 15.3-6

> Imagine that you wish to exchange one currency for another. You realize that instead of directly exchanging one
> currency for another, you might be better off making a series of trades through other currencies, winding up with the
> currency you want. Suppose that you can trade *n* different currencies, numbered 1, 2, …, *n*, where you start with
> currency 1 and wish to wind up with currency *n*. You are given, for each pair of currencies *i* and *j*, an exchange
> rate $r_{i j}$, meaning that if you start with *d* units of currency *i*, you can trade for $d r_{i j}$ units of
> currency *j*. A sequence of trades may entail a commission, which depends on the number of trades you make. Let $c_k$
> be the commission that you are charged when you make *k* trades. Show that, if $c_k$ = 0 for all *k* = 1, 2, …, *n*,
> then the problem of finding the best sequence of exchanges from currency 1 to currency *n* exhibits optimal
> substructure. Then show that if commissions $c_k$ are arbitrary values, then the problem of finding the best sequence
> of exchanges from currency 1 to currency *n* does not necessarily exhibit optimal substructure.

*Skipped*.

#### 15.4 Longest common subsequence

##### 15.4-1

> Determine an LCS of ⟨1, 0, 0, 1, 0, 1, 0, 1⟩ and ⟨0, 1, 0, 1, 1, 0, 1, 1, 0⟩.

The result is ⟨1, 0, 0, 1, 1, 0⟩.

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/section_15_4_longest_common_subsequence/exercises/exercise_15_4_1.rs).

##### 15.4-2

> Give pseudocode to reconstruct an LCS from the completed *c* table and the original sequences
> *X* = ⟨$x_1$, $x_2$, …, $x_m$⟩ and *Y* = ⟨$y_1$, $y_2$, …, $y_n$⟩ in *O*(*m* + *n*) time, without using the *b* table.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/section_15_4_longest_common_subsequence/exercises/exercise_15_4_2.rs).

##### 15.4-3

> Give a memoized version of *LCS-Length* that runs in *O*(*m* *n*) time.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/section_15_4_longest_common_subsequence/exercises/exercise_15_4_3.rs).

##### 15.4-4

> Show how to compute the length of an LCS using only 2 ⋅ min(*m*, *n*) entries in the *c* table plus *O*(1) additional
> space. Then show how to do the same thing, but using min(*m*, *n*) entries plus *O*(1) additional space.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/section_15_4_longest_common_subsequence/exercises/exercise_15_4_4.rs).

##### 15.4-5

> Give an *O*($n^2$)-time algorithm to find the longest monotonically increasing subsequence of a sequence of *n*
> numbers.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/section_15_4_longest_common_subsequence/exercises/exercise_15_4_5.rs).

##### 15.4-6 ★

> Give an *O*(*n* lg *n*)-time algorithm to find the longest monotonically increasing subsequence of a sequence of *n*
> numbers. (*Hint:* Observe that the last element of a candidate subsequence of length *i* is at least as large as the
> last element of a candidate subsequence of length *i* - 1. Maintain candidate subsequences by linking them through the
> input sequence.)

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/section_15_4_longest_common_subsequence/exercises/exercise_15_4_6.rs).

#### 15.5 Optimal binary search trees

##### 15.5-1

> Write pseudocode for the procedure *Construct-Optimal-BST*(*root*) which, given the table *root*, outputs the
> structure of an optimal binary search tree. For the example in Figure 15.10, your procedure should print out the
> structure
>
> - $k_2$ is the root\
>   $k_1$ is the left child of $k_2$\
>   $d_0$ is the left child of $k_1$\
>   $d_1$ is the right child of $k_1$\
>   $k_5$ is the right child of $k_2$\
>   $k_4$ is the left child of $k_5$\
>   $k_3$ is the left child of $k_4$\
>   $d_2$ is the left child of $k_3$\
>   $d_3$ is the right child of $k_3$\
>   $d_4$ is the right child of $k_4$\
>   $d_5$ is the right child of $k_5$
>
> corresponding to the optimal binary search tree shown in Figure 15.9(b).

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/section_15_5_optimal_binary_search_trees/exercises/exercise_15_5_1.rs).

##### 15.5-2

> Determine the cost and structure of an optimal binary search tree for a set of *n* = 7 keys with the following
> probabilities:
>
> | *i*   | 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    |
> | ----- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
> | $p_i$ |      | 0.04 | 0.06 | 0.08 | 0.02 | 0.10 | 0.12 | 0.14 |
> | $q_i$ | 0.06 | 0.06 | 0.06 | 0.06 | 0.05 | 0.05 | 0.05 | 0.05 |

The optimal cost is 3.12. The optimal structure is:

```text
                            ┌─────┐
                            │ k_5 │
                            └──┬──┘
                ┌──────────────┴───────────────┐
             ┌──┴──┐                        ┌──┴──┐
             │ k_2 │                        │ k_7 │
             └──┬──┘                        └──┬──┘
       ┌────────┴────────┐                 ┌───┴────┐
    ┌──┴──┐           ┌──┴──┐           ┌──┴──┐  ┌──┴──┐
    │ k_1 │           │ k_3 │           │ k_6 │  │ d_7 │
    └──┬──┘           └──┬──┘           └──┬──┘  └─────┘
   ┌───┴────┐        ┌───┴────┐        ┌───┴────┐
┌──┴──┐  ┌──┴──┐  ┌──┴──┐  ┌──┴──┐  ┌──┴──┐  ┌──┴──┐
│ d_0 │  │ d_1 │  │ d_2 │  │ k_4 │  │ d_5 │  │ d_6 │
└─────┘  └─────┘  └─────┘  └──┬──┘  └─────┘  └─────┘
                          ┌───┴────┐
                       ┌──┴──┐  ┌──┴──┐
                       │ d_3 │  │ d_4 │
                       └─────┘  └─────┘
```

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/section_15_5_optimal_binary_search_trees/exercises/exercise_15_5_2.rs).

##### 15.5-3

> Suppose that instead of maintaining the table *w*[*i*, *j*], we computed the value of *w*(*i*, *j*) directly from
> equation (15.12) in line 9 of *Optimal-BST* and used this computed value in line 11. How would this change affect the
> asymptotic running time of *Optimal-BST*?

This change doesn’t affect the asymptotic running time of *Optimal-BST*. because computing *w*(*i*, *j*) takes the same
time as the innermost loop.

##### 15.5-4 ★

> Knuth [212] has shown that there are always roots of optimal subtrees such that
> *root*[*i*, *j* - 1] ≤ *root*[*i*, *j*] ≤ *root*[*i* + 1, *j*] for all 1 ≤ *i* < *j* ≤ *n*. Use this fact to modify
> the *Optimal-BST* procedure to run in Θ($n^2$) time.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/section_15_5_optimal_binary_search_trees/exercises/exercise_15_5_4.rs).

#### 15.X Problems

##### 15-1 Longest simple path in a directed acyclic graph

> Suppose that we are given a directed acyclic graph *G* = (*V*, *E*) with real-valued edge weights and two
> distinguished vertices *s* and *t*. Describe a dynamic programming approach for finding a longest weighted simple path
> from *s* to *t*. What does the subproblem graph look like? What is the efficiency of your algorithm?

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/problems/problem_15_1_longest_simple_path_in_a_directed_acyclic_graph.rs).

The running time is *O*(*V* + *E*).

##### 15-2 Longest palindrome subsequence

> A ***palindrome*** is a nonempty string over some alphabet that reads the same forward and backward. Examples of
> palindromes are all strings of length 1, `civic`, `racecar`, and `aibohphobia` (fear of palindromes).
>
> Give an efficient algorithm to find the longest palindrome that is a subsequence of a given input string. For example,
> given the input `character`, your algorithm should return `carac`. What is the running time of your algorithm?

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/problems/problem_15_2_longest_palindrome_subsequence.rs).

The running time is *O*($n^2$), where *n* is the length of the input.

##### 15-3 Bitonic euclidean traveling-salesman problem

> In the ***euclidean traveling-salesman problem***, we are given a set of *n* points in the plane, and we wish to find
> the shortest closed tour that connects all *n* points. Figure 15.11(a) shows the solution to a 7-point problem. The
> general problem is NP-hard, and its solution is therefore believed to require more than polynomial time (see Chapter
> 34).
>
> J. L. Bentley has suggested that we simplify the problem by restricting our attention to bitonic tours, that is, tours
> that start at the leftmost point, go strictly rightward to the rightmost point, and then go strictly leftward back to
> the starting point. Figure 15.11(b) shows the shortest bitonic tour of the same 7 points. In this case, a
> polynomial-time algorithm is possible.
>
> Describe an *O*($n^2$)-time algorithm for determining an optimal bitonic tour. You may assume that no two points have
> the same x-coordinate and that all operations on real numbers take unit time. (*Hint:* Scan left to right, maintaining
> optimal possibilities for the two parts of the tour.)

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/problems/problem_15_3_bitonic_euclidean_traveling_salesman_problem.rs).

##### 15-4 Printing neatly

> Consider the problem of neatly printing a paragraph with a monospaced font (all characters having the same width) on a
> printer. The input text is a sequence of *n* words of lengths $l_1$, $l_2$, …, $l_n$, measured in characters. We want
> to print this paragraph neatly on a number of lines that hold a maximum of *M* characters each. Our criterion of
> “neatness” is as follows. If a given line contains words *i* through *j*, where *i* ≤ *j*, and we leave exactly one
> space between words, the number of extra space characters at the end of the line is
> *M* - *j* + *i* - $∑_{k = i}^j l_k$, which must be nonnegative so that the words fit on the line. We wish to minimize
> the sum, over all lines except the last, of the cubes of the numbers of extra space characters at the ends of lines.
> Give a dynamic-programming algorithm to print a paragraph of *n* words neatly on a printer. Analyze the running time
> and space requirements of your algorithm.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/problems/problem_15_4_printing_neatly.rs).

Running time is *O*(*M* *n*), space requirement is *O*(*n*).

##### 15-5 Edit distance

> In order to transform one source string of text *x*[1‥*m*] to a target string *y*[1‥*n*], we can perform various
> transformation operations. Our goal is, given *x* and *y*, to produce a series of transformations that change *x* to
> *y*. We use an array *z*—assumed to be large enough to hold all the characters it will need—to hold the intermediate
> results. Initially, *z* is empty, and at termination, we should have *z*[*j*] = *y*[*j*] for *j* = 1, 2, …, *n*. We
> maintain current indices *i* into *x* and *j* into *z*, and the operations are allowed to alter *z* and these indices.
> Initially, *i* = *j* = 1. We are required to examine every character in *x* during the transformation, which means
> that at the end of the sequence of transformation operations, we must have *i* = *m* + 1.
>
> We may choose from among six transformation operations:
>
> - **Copy** a character from *x* to *z* by setting *z*[*j*] = *x*[*i*] and then incrementing both *i* and *j*. This
>   operation examines *x*[*i*].
> - **Replace** a character from *x* by another character *c*, by setting *z*[*j*] = *c*, and then incrementing both *i*
>   and *j*. This operation examines *x*[*i*].
> - **Delete** a character from *x* by incrementing *i* but leaving *j* alone. This operation examines *x*[*i*].
> - **Insert** the character *c* into *z* by setting *z*[*j*] = *c* and then incrementing *j*, but leaving *i* alone.
>   This operation examines no characters of *x*.
> - **Twiddle** (i.e., exchange) the next two characters by copying them from *x* to *z* but in the opposite order; we
>   do so by setting *z*[*j*] = *x*[*i* + 1] and *z*[*j* + 1] = *x*[*i*] and then setting *i* = *i* + 2 and
>   *j* = *j* + 2. This operation examines *x*[*i*] and *x*[*i* + 1].
> - **Kill** the remainder of *x* by setting *i* = *m* + 1. This operation examines all characters in *x* that have not
>   yet been examined. This operation, if performed, must be the final operation.
>
> As an example, one way to transform the source string `algorithm` to the target string `altruistic` is to use the
> following sequence of operations, where the underlined characters are *x*[*i*] and *z*[*j*] after the operation:
>
> | Operation         | *x*          | *z*           |
> | ----------------- | ------------ | ------------- |
> | *initial strings* | `a̲lgorithm`  | `_`           |
> | copy              | `al̲gorithm`  | `a_`          |
> | copy              | `alg̲orithm`  | `al_`         |
> | replace by `t`    | `algo̲rithm`  | `alt_`        |
> | delete            | `algor̲ithm`  | `alt_`        |
> | copy              | `algori̲thm`  | `altr_`       |
> | insert `u`        | `algori̲thm`  | `altru_`      |
> | insert `i`        | `algori̲thm`  | `altrui_`     |
> | insert `s`        | `algori̲thm`  | `altruis_`    |
> | twiddle           | `algorith̲m`  | `altruisti_`  |
> | insert `c`        | `algorith̲m`  | `altruistic_` |
> | kill              | `algorithm_` | `altruistic_` |
>
> Note that there are several other sequences of transformation operations that transform `algorithm` to `altruistic`.
>
> Each of the transformation operations has an associated cost. The cost of an operation depends on the specific
> application, but we assume that each operation’s cost is a constant that is known to us. We also assume that the
> individual costs of the copy and replace operations are less than the combined costs of the delete and insert
> operations; otherwise, the copy and replace operations would not be used. The cost of a given sequence of
> transformation operations is the sum of the costs of the individual operations in the sequence. For the sequence
> above, the cost of transforming `algorithm` to `altruistic` is
>
> (3 ⋅ cost(copy)) + cost(replace) + cost(delete) + (4 ⋅ cost.insert)) + cost(twiddle) + cost(kill).
>
> - ***a.*** Given two sequences *x*[1‥*m*] and *y*[1‥*n*] and set of transformation-operation costs, the
>   ***edit distance*** from *x* to *y* is the cost of the least expensive operation sequence that transforms *x* to
>   *y*. Describe a dynamic-programming algorithm that finds the edit distance from *x*[1‥*m*] to *y*[1‥*n*] and prints
>   an optimal operation sequence. Analyze the running time and space requirements of your algorithm.
>
> The edit-distance problem generalizes the problem of aligning two DNA sequences (see, for example, Setubal and
> Meidanis [310, Section 3.2]). There are several methods for measuring the similarity of two DNA sequences by aligning
> them. One such method to align two sequences *x* and *y* consists of inserting spaces at arbitrary locations in the
> two sequences (including at either end) so that the resulting sequences *x*′ and *y*′ have the same length but do not
> have a space in the same position (i.e., for no position *j* are both *x*′[*j*] and *y*′[*j*] a space). Then we assign
> a “score” to each position. Position *j* receives a score as follows:
>
> - +1 if *x*′[*j*] = *y*′[*j*] and neither is a space,
> - -1 if *x*′[*j*] ≠ *y*′[*j*] and neither is a space,
> - -2 if either *x*′[*j*] or *y*′[*j*] is a space.
>
> The score for the alignment is the sum of the scores of the individual positions. For example, given the sequences
> *x* = `GATCGGCAT` and *y* = `CAATGTGAATC`, one alignment is
>
> ```text
> G ATCG GCAT
> CAAT GTGAATC
> -*++*+*+-++*
> ```
>
> A `+` under a position indicates a score of +1 for that position, a `-` indicates a score of -1, and a `*` indicates a
> score of -2, so that this alignment has a total score of 6 ⋅ 1 - 2 ⋅ 1 - 4 ⋅ 2 = -4.
>
> - ***b.*** Explain how to cast the problem of finding an optimal alignment as an edit distance problem using a subset
>   of the transformation operations copy, replace, delete, insert, twiddle, and kill.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/problems/problem_15_5_edit_distance.rs).

- ***a.*** Running time is in Θ(*m* *n*), space requirement is Θ(*m* *n*).
- ***b.*** Each alignment can be transformed into a sequence of transformation operations:

  - The +1 case can be transformed into **copy** operation with cost of -1.
  - The -1 case can be transformed into **replace** operation with cost of 1.
  - The -2 case can be transformed into **insert** or **delete** operation with cost of 2.

  And we set **twiddle** and **kill** operation as cost of ∞ since there is no corresponding alignment.

  Note that the cost is the negative score, since our algorithm of edit-distance *minimizes* the cost but we want to
  maximize the *score*.

##### 15-6 Planning a company party

> Professor Stewart is consulting for the president of a corporation that is planning a company party. The company has a
> hierarchical structure; that is, the supervisor relation forms a tree rooted at the president. The personnel office
> has ranked each employee with a conviviality rating, which is a real number. In order to make the party fun for all
> attendees, the president does not want both an employee and his or her immediate supervisor to attend.
>
> Professor Stewart is given the tree that describes the structure of the corporation, using the left-child,
> right-sibling representation described in Section 10.4. Each node of the tree holds, in addition to the pointers, the
> name of an employee and that employee’s conviviality ranking. Describe an algorithm to make up a guest list that
> maximizes the sum of the conviviality ratings of the guests. Analyze the running time of your algorithm.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/problems/problem_15_6_planning_a_company_party.rs).

Running time is Θ(*n*) where *n* is the total number of employees.

##### 15-7 Viterbi algorithm

> We can use dynamic programming on a directed graph *G* = (*V*, *E*) for speech recognition. Each edge (*u*, *v*) ∈ *E*
> is labeled with a sound *σ*(*u*, *v*) from a finite set Σ of sounds. The labeled graph is a formal model of a person
> speaking a restricted language. Each path in the graph starting from a distinguished vertex $v_0$ ∈ *V* corresponds to
> a possible sequence of sounds produced by the model. We define the label of a directed path to be the concatenation of
> the labels of the edges on that path.
>
> - ***a.*** Describe an efficient algorithm that, given an edge-labeled graph *G* with distinguished vertex $v_0$ and a
>   sequence *s* = ⟨$σ_1$, $σ_2$, …, $σ_k$⟩ of sounds from Σ, returns a path in *G* that begins at $v_0$ and has s as its
>   label, if any such path exists. Otherwise, the algorithm should return *no-such-path*. Analyze the running time of
>   your algorithm. (*Hint:* You may find concepts from Chapter 22 useful.)
>
> Now, suppose that every edge (*u*, *v*) ∈ *E* has an associated nonnegative probability *p*(*u*, *v*) of traversing
> the edge (*u*, *v*) from vertex *u* and thus producing the corresponding sound. The sum of the probabilities of the
> edges leaving any vertex equals 1. The probability of a path is defined to be the product of the probabilities of its
> edges. We can view the probability of a path beginning at $v_0$ as the probability that a “random walk” beginning at
> $v_0$ will follow the specified path, where we randomly choose which edge to take leaving a vertex *u* according to
> the probabilities of the available edges leaving *u*.
>
> - ***b.*** Extend your answer to part (a) so that if a path is returned, it is a *most probable path* starting at
>   $v_0$ and having label *s*. Analyze the running time of your algorithm.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/problems/problem_15_7_viterbi_algorithm.rs).

##### 15-8 Image compression by seam carving

> We are given a color picture consisting of an *m* × *n* array *A*[1‥*m*, 1‥*n*] of pixels, where each pixel specifies
> a triple of red, green, and blue (RGB) intensities. Suppose that we wish to compress this picture slightly.
> Specifically, we wish to remove one pixel from each of the *m* rows, so that the whole picture becomes one pixel
> narrower. To avoid disturbing visual effects, however, we require that the pixels removed in two adjacent rows be in
> the same or adjacent columns; the pixels removed form a “seam” from the top row to the bottom row where successive
> pixels in the seam are adjacent vertically or diagonally.
>
> - ***a.*** Show that the number of such possible seams grows at least exponentially in *m*, assuming that *n* > 1.
> - ***b.*** Suppose now that along with each pixel *A*[*i*, *j*], we have calculated a real-valued disruption measure
>   d[*i*, *j*], indicating how disruptive it would be to remove pixel *A*[*i*, *j*]. Intuitively, the lower a pixel’s
>   disruption measure, the more similar the pixel is to its neighbors. Suppose further that we define the disruption
>   measure of a seam to be the sum of the disruption measures of its pixels.
>
>   Give an algorithm to find a seam with the lowest disruption measure. How efficient is your algorithm?

- ***a.*** Assume we are selecting a seam from top to bottom. First, we can select one of *n* pixels in the first row,
  then for each pixel we already selected, there are two or three pixels in the next row to select from. So the total
  number of seams is at least *n* × $2^{m - 1}$ = *n* / 2 × $2^m$, which is at least exponentially in *m*.

- ***b.*** Solution is implemented
  [here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/problems/problem_15_8_image_compression_by_seam_carving.rs).

##### 15-9 Breaking a string

> A certain string-processing language allows a programmer to break a string into two pieces. Because this operation
> copies the string, it costs *n* time units to break a string of *n* characters into two pieces. Suppose a programmer
> wants to break a string into many pieces. The order in which the breaks occur can affect the total amount of time
> used. For example, suppose that the programmer wants to break a 20-character string after characters 2, 8, and 10
> (numbering the characters in ascending order from the left-hand end, starting from 1). If she programs the breaks to
> occur in left-to-right order, then the first break costs 20 time units, the second break costs 18 time units (breaking
> the string from characters 3 to 20 at character 8), and the third break costs 12 time units, totaling 50 time units.
> If she programs the breaks to occur in right-to-left order, however, then the first break costs 20 time units, the
> second break costs 10 time units, and the third break costs 8 time units, totaling 38 time units. In yet another
> order, she could break first at 8 (costing 20), then break the left piece at 2 (costing 8), and finally the right
> piece at 10 (costing 12), for a total cost of 40.
>
> Design an algorithm that, given the numbers of characters after which to break, determines a least-cost way to
> sequence those breaks. More formally, given a string *S* with *n* characters and an array *L*[1‥*m*] containing the
> break points, compute the lowest cost for a sequence of breaks, along with a sequence of breaks that achieves this
> cost.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/problems/problem_15_9_breaking_a_string.rs).

##### 15-10 Planning an investment strategy

> Your knowledge of algorithms helps you obtain an exciting job with the Acme Computer Company, along with a $10,000
> signing bonus. You decide to invest this money with the goal of maximizing your return at the end of 10 years. You
> decide to use the Amalgamated Investment Company to manage your investments. Amalgamated Investments requires you to
> observe the following rules. It offers *n* different investments, numbered 1 through *n*. In each year *j*, investment
> *i* provides a return rate of $r_{i j}$ . In other words, if you invest *d* dollars in investment *i* in year *j*, then
> at the end of year *j*, you have $d r_{i j}$ dollars. The return rates are guaranteed, that is, you are given all the
> return rates for the next 10 years for each investment. You make investment decisions only once per year. At the end
> of each year, you can leave the money made in the previous year in the same investments, or you can shift money to
> other investments, by either shifting money between existing investments or moving money to a new investment. If you
> do not move your money between two consecutive years, you pay a fee of $f_1$ dollars, whereas if you switch your
> money, you pay a fee of $f_2$ dollars, where $f_2$ > $f_1$.
>
> - ***a.*** The problem, as stated, allows you to invest your money in multiple investments in each year. Prove that
>   there exists an optimal investment strategy that, in each year, puts all the money into a single investment. (Recall
>   that an optimal investment strategy maximizes the amount of money after 10 years and is not concerned with any other
>   objectives, such as minimizing risk.)
> - ***b.*** Prove that the problem of planning your optimal investment strategy exhibits optimal substructure.
> - ***c.*** Design an algorithm that plans your optimal investment strategy. What is the running time of your
>   algorithm?
> - ***d.*** Suppose that Amalgamated Investments imposed the additional restriction that, at any point, you can have no
>   more than $15,000 in any one investment. Show that the problem of maximizing your income at the end of 10 years no
>   longer exhibits optimal substructure.

- ***a.*** *Skipped.*
- ***b.*** *Skipped.*
- ***c.*** Solution is implemented
  [here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/problems/problem_15_10_planning_an_investment_strategy.rs).
  Running time is Θ(*m* *n*), where *m* is the number of total years, which equals to 10 in this problem.
- ***d.*** *Skipped.*

##### 15-11 Inventory planning

> The Rinky Dink Company makes machines that resurface ice rinks. The demand for such products varies from month to
> month, and so the company needs to develop a strategy to plan its manufacturing given the fluctuating, but
> predictable, demand. The company wishes to design a plan for the next *n* months. For each month *i*, the company
> knows the demand $d_i$, that is, the number of machines that it will sell. Let *D* = $∑_{i = 1}^n d_i$ be the total
> demand over the next *n* months. The company keeps a full-time staff who provide labor to manufacture up to *m*
> machines per month. If the company needs to make more than *m* machines in a given month, it can hire additional,
> part-time labor, at a cost that works out to *c* dollars per machine. Furthermore, if, at the end of a month, the
> company is holding any unsold machines, it must pay inventory costs. The cost for holding *j* machines is given as a
> function *h*(*j*) for *j* = 1, 2, …, *D*, where *h*(*j*) ≥ 0 for 1 ≤ *j* ≤ *D* and *h*(*j*) ≤ *h*(*j* + 1) for
> 1 ≤ *j* ≤ *D* - 1.
>
> Give an algorithm that calculates a plan for the company that minimizes its costs while fulfilling all the demand. The
> running time should be polynomial in *n* and *D*.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/problems/problem_15_11_inventory_planning.rs).

##### 15-12 Signing free-agent baseball players

> Suppose that you are the general manager for a major-league baseball team. During the off-season, you need to sign
> some free-agent players for your team. The team owner has given you a budget of $*X* to spend on free agents. You are
> allowed to spend less than $*X* altogether, but the owner will fire you if you spend any more than $*X*.
>
> You are considering *N* different positions, and for each position, *P* free-agent players who play that position are
> available. Because you do not want to overload your roster with too many players at any position, for each position
> you may sign at most one free agent who plays that position. (If you do not sign any players at a particular position,
> then you plan to stick with the players you already have at that position.)
>
> To determine how valuable a player is going to be, you decide to use a sabermetric statistic known as “VORP,” or
> “value over replacement player.” A player with a higher VORP is more valuable than a player with a lower VORP. A
> player with a higher VORP is not necessarily more expensive to sign than a player with a lower VORP, because factors
> other than a player’s value determine how much it costs to sign him.
>
> For each available free-agent player, you have three pieces of information:
>
> - the player’s position,
> - the amount of money it will cost to sign the player, and
> - the player’s VORP.
>
> Devise an algorithm that maximizes the total VORP of the players you sign while spending no more than $*X* altogether.
> You may assume that each player signs for a multiple of $100,000. Your algorithm should output the total VORP of the
> players you sign, the total amount of money you spend, and a list of which players you sign. Analyze the running time
> and space requirement of your algorithm.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_15_dynamic_programming/problems/problem_15_12_signing_free_agent_baseball_players.rs).

### 16 Greedy Algorithms

#### 16.1 An activity-selection problem

##### 16.1-1

> Give a dynamic-programming algorithm for the activity-selection problem, based on recurrence (16.2). Have your
> algorithm compute the sizes *c*[*i*, *j*] as defined above and also produce the maximum-size subset of mutually
> compatible activities. Assume that the inputs have been sorted as in equation (16.1). Compare the running time of your
> solution to the running time of *Greedy-Activity-Selector*.

*Skipped.*

##### 16.1-2

> Suppose that instead of always selecting the first activity to finish, we instead select the last activity to start
> that is compatible with all previously selected activities. Describe how this approach is a greedy algorithm, and
> prove that it yields an optimal solution.

This is essentially the same as the original problem, but with time reversed.

##### 16.1-3

> Not just any greedy approach to the activity-selection problem produces a maximum-size set of mutually compatible
> activities. Give an example to show that the approach of selecting the activity of least duration from among those
> that are compatible with previously selected activities does not work. Do the same for the approaches of always
> selecting the compatible activity that overlaps the fewest other remaining activities and always selecting the
> compatible remaining activity with the earliest start time.

- Least duration:

  ```text
  ▬▬▬▬ ▬▬▬▬
     ▬▬▬
  ```

- Fewest overlaps:

  ```text
  ▬▬▬ ▬▬▬ ▬▬▬ ▬▬▬
    ▬▬▬ ▬▬▬ ▬▬▬
    ▬▬▬     ▬▬▬
    ▬▬▬     ▬▬▬
  ```

- Earliest start time:

  ```text
  ▬▬▬▬▬▬▬▬▬
   ▬▬▬ ▬▬▬
  ```

##### 16.1-4

> Suppose that we have a set of activities to schedule among a large number of lecture halls, where any activity can
> take place in any lecture hall. We wish to schedule all the activities using as few lecture halls as possible. Give an
> efficient greedy algorithm to determine which activity should use which lecture hall.
>
> (This problem is also known as the ***interval-graph coloring problem***. We can create an interval graph whose
> vertices are the given activities and whose edges connect incompatible activities. The smallest number of colors
> required to color every vertex so that no two adjacent vertices have the same color corresponds to finding the fewest
> lecture halls needed to schedule all of the given activities.)

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_16_greedy_algorithms/section_16_1_an_activity_selection_problem/exercises/exercise_16_1_4.rs).

##### 16.1-5

> Consider a modification to the activity-selection problem in which each activity $a_i$ has, in addition to a start and
> finish time, a value $v_i$. The objective is no longer to maximize the number of activities scheduled, but instead to
> maximize the total value of the activities scheduled. That is, we wish to choose a set *A* of compatible activities
> such that $Σ_{a_k ∈ A} v_k$ is maximized. Give a polynomial-time algorithm for this problem.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_16_greedy_algorithms/section_16_1_an_activity_selection_problem/exercises/exercise_16_1_5.rs).

#### 16.2 Elements of the greedy strategy

##### 16.2-1

> Prove that the fractional knapsack problem has the greedy-choice property.

For each subproblem, as long as there are items that with more value per pound than some items already in the knapsack,
we can replace some items already in the knapsack with items with more value per pound to get a better solution. So for
each subproblem, we must put as much as possible items with the most value per pound.

##### 16.2-2

> Give a dynamic-programming solution to the 0-1 knapsack problem that runs in *O*(*n* *W*) time, where *n* is the
> number of items and *W* is the maximum weight of items that the thief can put in his knapsack.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_16_greedy_algorithms/section_16_2_elements_of_the_greedy_strategy/exercises/exercise_16_2_2.rs).

##### 16.2-3

> Suppose that in a 0-1 knapsack problem, the order of the items when sorted by increasing weight is the same as their
> order when sorted by decreasing value. Give an efficient algorithm to find an optimal solution to this variant of the
> knapsack problem, and argue that your algorithm is correct.

Algorithm: For each subproblem, select the item with most value within the remaining items.

Proof: Like 16.2-1, if we have selected other item instead of the item with most value, we can replace that item with
the item with most value to get more optimized solution.

##### 16.2-4

> Professor Gekko has always dreamed of inline skating across North Dakota. He plans to cross the state on highway
> U.S. 2, which runs from Grand Forks, on the eastern border with Minnesota, to Williston, near the western border with
> Montana. The professor can carry two liters of water, and he can skate *m* miles before running out of water. (Because
> North Dakota is relatively flat, the professor does not have to worry about drinking water at a greater rate on uphill
> sections than on flat or downhill sections.) The professor will start in Grand Forks with two full liters of water.
> His official North Dakota state map shows all the places along U.S. 2 at which he can refill his water and the
> distances between these locations.
>
> The professor’s goal is to minimize the number of water stops along his route across the state. Give an efficient
> method by which he can determine which water stops he should make. Prove that your strategy yields an optimal
> solution, and give its running time.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_16_greedy_algorithms/section_16_2_elements_of_the_greedy_strategy/exercises/exercise_16_2_4.rs).

The strategy is to stop as late as possible at each step. Suppose the latest water stop is *k*. If you stop early, then
when you reach *k*, you can choose to stop or continue.

- If you stop, you will have one more stop than stopping at *k* directly.
- If you continue, you will have the same number of stops so far, but with less water. Less water means earlier stop, so
  you can go no further than stopping at *k* directly.

So the only choice is to stop at *k*.

The running time is *O*(*n*).

##### 16.2-5

> Describe an efficient algorithm that, given a set {$x_1$, $x_2$, …, $x_n$} of points on the real line, determines the
> smallest set of unit-length closed intervals that contains all of the given points. Argue that your algorithm is
> correct.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_16_greedy_algorithms/section_16_2_elements_of_the_greedy_strategy/exercises/exercise_16_2_5.rs).

##### 16.2-6 ★

> Show how to solve the fractional knapsack problem in *O*(*n*) time.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_16_greedy_algorithms/section_16_2_elements_of_the_greedy_strategy/exercises/exercise_16_2_6.rs).

##### 16.2-7

> Suppose you are given two sets *A* and *B*, each containing *n* positive integers. You can choose to reorder each set
> however you like. After reordering, let $a_i$ be the *i*th element of set *A*, and let $b_i$ be the *i*th element of
> set *B*. You then receive a payoff of $∏_{i = 1}^n a_i^{b_i}$. Give an algorithm that will maximize your payoff. Prove
> that your algorithm maximizes the payoff, and state its running time.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_16_greedy_algorithms/section_16_2_elements_of_the_greedy_strategy/exercises/exercise_16_2_7.rs).

Just sort two sets incrementally.

Proof: Let $a_i$ and $a_j$ be two elements from set *A*, and $a_i$ ≤ $a_j$; Let $b_i$ and $b_j$ be two elements from set
*B*, and $b_i$ ≤ $b_j$, we have:

$\dfrac{a_i^{b_i} a_j^{b_j}}{a_i^{b_j} a_j^{b_i}}$\
= $a_i^{b_i - b_j} a_j^{b_j - b_i}$\
= $\dfrac{a_j^{b_j - b_i}}{a_i^{b_j - b_i}}$\
= $\left(\dfrac{a_j}{a_i}\right)^{b_j - b_i}$.

Since $a_i$, $a_j$, $b_i$ and $b_j$ are positive integers, we have $\frac{a_j}{a_i}$ ≥ 1, and $b_j - b_i$ ≥ 0, then:

$\left(\dfrac{a_j}{a_i}\right)^{b_j - b_i}$ ≥ 1, which means $a_i^{b_i} a_j^{b_j}$ ≥ $a_i^{b_j} a_j^{b_i}$.

So for each pair $a_i$ and $a_j$ in set *A*, if $a_i$ ≤ $a_j$, we must ensure that the corresponding $b_i$ ≤ $b_j$. To
get the maximize payoff, we should make sure that the relative order in two sets are the same. The simplest way to do
this is sorting two sets in increasing order.

##### 16.3-1

> Explain why, in the proof of Lemma 16.2, if *x*.*freq* = *b*.*freq*, then we must have
> *a*.*freq* = *b*.*freq* = *x*.*freq* = *y*.*freq*.

Since *b*.*freq* = *x*.*freq* ≤ *y*.*freq*, and *y*.*freq* ≤ *b*.*freq*, we have *x*.*freq* = *y*.*freq* = *b*.*freq*.

Since *b*.*freq* = *x*.*freq* ≤ *a*.*freq*, and *a*.*freq* ≤ *b*.*freq*, we have *a*.*freq* = *b*.*freq* = *x*.*freq*.

So *a*.*freq* = *b*.*freq* = *x*.*freq* = *y*.*freq*.

##### 16.3-2

> Prove that a binary tree that is not full cannot correspond to an optimal prefix code.

Suppose there is a node *x* with only one child *y*, then we can use the codeword for *x* to represent *y* directly,
since we know exactly what the last bit will be, we don’t need to include it explicitly. So we can transform the
original tree into a new tree with one leaf node’s depth shortened by 1. So the original tree cannot correspond to an
optimal prefix code.

##### 16.3-3

> What is an optimal Huffman code for the following set of frequencies, based on the first 8 Fibonacci numbers?
>
> `a:1 b:1 c:2 d:3 e:5 f:8 g:13 h:21`
>
> Can you generalize your answer to find the optimal code when the frequencies are the first *n* Fibonacci numbers?

| Character | Huffman code |
| --------- | ------------ |
| `a`       | `0000000`    |
| `b`       | `0000001`    |
| `c`       | `000001`     |
| `d`       | `00001`      |
| `e`       | `0001`       |
| `f`       | `001`        |
| `g`       | `01`         |
| `h`       | `1`          |

If there are *n* Fibonacci frequencies, then:

- The Huffman code for the first frequency is (*n* - 1) `0`s.
- The Huffman code for the *i*th (*i* > 1) frequency is (*n* - *i*) `0`s, followed by a `1`.

##### 16.3-4

> Prove that we can also express the total cost of a tree for a code as the sum, over all internal nodes, of the
> combined frequencies of the two children of the node.

Proof by induction:

- Base case: For empty nodes (*nil*), there are no leaf nodes or internal nodes, so the cost and the sum of the
  frequencies of internal nodes are both 0, the claim holds. We can assume the frequency of a *nil* node is 0.
- Inductive case: For non-*nil* nodes:

  - Let the node be *T*;
  - Let the left child be *L*;
  - Let the right child be *R*;
  - Let the total frequency of leaf nodes of the left child be *f*;
  - Let the total frequency of leaf nodes of the right child be *g*;
  - Let the total sum of frequencies of internal nodes of left child be *s*;
  - Let the total sum of frequencies of internal nodes of right child be *t*.

  The cost of the node is:

  $∑_{c ∈ T} c.\textit{freq} ⋅ d_T(c)$\
  = $∑_{c ∈ L} c.\textit{freq} ⋅ d_T(c) + ∑_{c ∈ R} c.\textit{freq} ⋅ d_T(c)$\
  = $∑_{c ∈ L} c.\textit{freq} ⋅ (d_L(c) + 1) + ∑_{c ∈ R} c.\textit{freq} ⋅ (d_R(c) + 1)$\
  = $∑_{c ∈ L} c.\textit{freq} ⋅ d_L(c) + ∑_{c ∈ R} c.\textit{freq} ⋅ d_R(c) + ∑_{c ∈ L} c.\textit{freq} + ∑_{c ∈ R} c.\textit{freq}$\
  = *s* + *t* + *f* + *g* (by induction)

  Since the frequence of *T* = *f* + *g*, so *s* + *t* + *f* + *g* equals to the sum of frequences of internal nodes of
  *T*. The claim holds.

##### 16.3-5

> Prove that if we order the characters in an alphabet so that their frequencies are monotonically decreasing, then
> there exists an optimal code whose codeword lengths are monotonically increasing.

Proof by contradiction:

Suppose all optimal codes are non-monotonically increasing, then there must exist a pair of codes in which the longer
coder has lesser frequency.

- Let *s* be the length of the shorter code;
- Let *t* be the length of the longer code;
- Let *f* be the frequency of the shorter code;
- Let *g* be the frequency of the longer code.

We have *s* < *t* and *f* > *g*.

We can represent the cost as *c* + *s* *f* + *t* *g*, where *c* is some constant value.

Now we devise a new code which swaps the representation code of the selected pair. Now we get a new code whose cost is
*c* + *s* *g* + *t* *f*.

(*c* + *s* *f* + *t* *g*) - (*c* + *s* *g* + *t* *f*)\
= (*c* + *s* *f* + *t* *g*) - (*c* + *s* *g* + *t* *f*)\
= *s* (*f* - *g*) + *t* (*f* - *g*)\
= (*s* + *t*) (*f* - *g*)\
\> 0.

So we got a code which is lesser than the original code, so the original code is not optimal. So our supposition is
wrong, which means there exists an optimal code whose codeword lengths are monotonically increasing.

##### 16.3-6

> Suppose we have an optimal prefix code on a set *C* = {0, 1, …, *n* - 1} of characters and we wish to transmit this
> code using as few bits as possible. Show how to represent any optimal prefix code on *C* using only
> 2 *n* - 1 + *n* ⌈lg *n*⌉ bits. (*Hint:* Use 2 *n* - 1 bits to specify the structure of the tree, as discovered by a
> walk of the tree.)

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_16_greedy_algorithms/section_16_3_huffman_codes/exercises/exercise_16_3_6.rs).

##### 16.3-7

> Generalize Huffman’s algorithm to ternary codewords (i.e., codewords using the symbols 0, 1, and 2), and prove that it
> yields optimal ternary codes.

*Skipped.*

##### 16.3-8

> Suppose that a data file contains a sequence of 8-bit characters such that all 256 characters are about equally
> common: the maximum character frequency is less than twice the minimum character frequency. Prove that Huffman coding
> in this case is no more efficient than using an ordinary 8-bit fixed-length code.

*Skipped.*

##### 16.3-9

> Show that no compression scheme can expect to compress a file of randomly chosen 8-bit characters by even a single
> bit. (*Hint:* Compare the number of possible files with the number of possible encoded files.)

Assume there exists such a compression scheme.

The number of possible files with *n* bits is $2^n$, but the number of possible files with *n* - 1 bits is $2^{n - 1}$,
which is less than $2^n$, which means that some *n*-bits files will be transformed into the same (*n* - 1)-bits file.

But we cannot restore two different *n*-bits files from one single (*n* - 1)-bits files, so the compression scheme does
not exist.

#### 16.4 Matroids and greedy methods

##### 16.4-1

> Show that (*S*, $\mathcal{I}_k$) is a matroid, where *S* is any finite set and $\mathcal{I}_k$ is the set of all
> subsets of *S* of size at most *k*, where *k* ≤ |*S*|.

1. *S* is a finite set.
2. For any *B* ∈ $\mathcal{I}_k$ and *A* ⊆ *B*, |*A*| ≤ |*B*| ≤ *k*, so *A* ∈ $\mathcal{I}_k$.
3. If *A* ∈ $\mathcal{I}_k$, *B* ∈ $\mathcal{I}_k$, and |*A*| < |*B*|, we know |*A*| < |*B*| ≤ *k*. For some
   *x* ∈ *B* - *A*, |*A* ∪ {*x*}| ≤ *k*, so *A* ∪ {*x*} ∈ $\mathcal{I}_k$.

------------------------------------------------------------------------------------------------------------------------

> List of common symbols:
>
> ```text
> ×ΓΘΣΩαβγδεζπσωϕϵ–—’“”‥…′ℋℕℝℤℱ↑→⇒⇔⇣∀∃∅∈∏∑∞⊆∧∨∩∪≠≤≥⊗⋂⋅⋯⌈⌉⌊⌋─│┊┌┐└┘├┤┬┴┼▌★⟨⟩
> ```

------------------------------------------------------------------------------------------------------------------------

## VIII Appendix: Mathematical Background

### C Counting and Probability

#### C.2 Probability

##### C.2-1

> Professor Rosencrantz flips a fair coin once. Professor Guildenstern flips a fair coin twice. What is the probability
> that Professor Rosencrantz obtains more heads than Professor Guildenstern?

*S* = { (H, HH), (H, HT), (H, TH), (H, TT), (T, HH), (T, HT), (T, TH), (T, TT) }.

*A* = { (H, TT) }.

Pr{*A*} = 1 / 8.

##### C.2-2

> Prove ***Boole’s inequality***: For any finite or countably infinite sequence of events $A_1$, $A_2$, …,
>
> Pr {$A_1$ ∪ $A_2$ ∪ ⋯} ≤ Pr{$A_1$} + Pr{$A_2$} + ⋯. (C.19)

Proof by induction:

Base case: Pr{$A_1$} ≤ Pr{$A_1$}.

Inductive case:

$\Pr\left\lbrace\left(\bigcup_{i = 1}^j A_i\right) ∪ A_{i + 1}\right\rbrace$ \
≤ $\Pr\left\lbrace\bigcup_{i = 1}^j A_i\right\rbrace + \Pr\left\lbrace A_{i + 1}\right\rbrace$\
≤ $∑_{i = 1}^j \Pr\left\lbrace A_i\right\rbrace + \Pr\left\lbrace A_{i + 1}\right\rbrace$ (By induction)\
= $∑_{i = 1}^{j + 1} \Pr\left\lbrace A_i\right\rbrace$.

##### C.2-3

> Suppose we shuffle a deck of 10 cards, each bearing a distinct number from 1 to 10, to mix the cards thoroughly. We
> then remove three cards, one at a time, from the deck. What is the probability that we select the three cards in
> sorted (increasing) order?

The order of the selected cards is independent of the number of cards, so the probability is 1 / 3! = 1 / 6.

##### C.2-4

> Prove that Pr{*A* | *B*} + Pr{$\bar{A}$ | *B*} = 1.

Pr{*A* | *B*} + Pr{$\bar{A}$ | *B*}\
= Pr{*A* ∩ *B*} / Pr{*B*} + Pr{$\bar{A}$ ∩ *B*} / Pr{*B*}\
= (Pr{*A* ∩ *B*} + Pr{$\bar{A}$ ∩ *B*}) / Pr{*B*}\
= Pr{(*A* ∩ *B*) ∪ ($\bar{A}$ ∩ *B*)} / Pr{*B*} (Since *A* and $\bar{A}$ are mutually exclusive)\
= Pr{*B*} / Pr{*B*}
= 1.

##### C.2-5

> Prove that for any collection of events $A_1$, $A_2$, …, $A_n$,
>
> $\begin{aligned}
> \Pr\left\lbrace A_1 \cap A_2 \cap ⋯ \cap A_n\right\rbrace = &\Pr\left\lbrace A_1\right\rbrace ⋅ \Pr\left\lbrace A_2 \middle| A_1\right\rbrace ⋅ \Pr\left\lbrace A_3 \middle| A_1 \cap A_2\right\rbrace ⋯\\
> &\Pr\left\lbrace A_n \middle| A_1 \cap A_2 \cap ⋯ \cap A_{n - 1}\right\rbrace\text{.}
> \end{aligned}$

Proof by induction:

Base case: $\Pr\left\lbrace A_1\right\rbrace = \Pr\left\lbrace A_1\right\rbrace$.

Inductive case: By induction, we have:

$\Pr\left\lbrace ⋂_{i = 1}^n A_i\right\rbrace = ∏_{i = 1}^n \Pr\left\lbrace A_i \middle| ⋂_{j = 1}^{i - 1} A_j \right\rbrace$.

So

$\Pr\left\lbrace ⋂_{i = 1}^{n + 1} A_i\right\rbrace$\
= $\Pr\left\lbrace\left(⋂_{i = 1}^n A_i\right) \cap A_{n + 1}\right\rbrace$\
= $\Pr\left\lbrace ⋂_{i = 1}^n A_i\right\rbrace ⋅ \Pr\left\lbrace A_{n + 1} \middle| ⋂_{i = 1}^n A_i\right\rbrace$\
= $\left(∏_{i = 1}^n \Pr\left\lbrace A_i \middle| ⋂_{j = 1}^{i - 1} A_j \right\rbrace\right) ⋅ \Pr\left\lbrace A_{n + 1} \middle| ⋂_{i = 1}^n A_i\right\rbrace$\
= $∏_{i = 1}^{n + 1} \Pr\left\lbrace A_i \middle| ⋂_{j = 1}^{i - 1} A_j \right\rbrace$.

##### C.2-6 ★

> Describe a procedure that takes as input two integers *a* and *b* such that 0 < *a* < *b* and, using fair coin flips,
> produces as output heads with probability *a* / *b* and tails with probability (*b* - *a*) / *b*. Give a bound on the
> expected number of coin flips, which should be *O*(1). (*Hint:* Represent *a* / *b* in binary.)

Solution is implemented [here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_c_counting_and_probability/section_c_2_probability/exercises/exercise_c_2_6.rs).

The expected number of coin flips is 2.

##### C.2-7 ★

> Show how to construct a set of *n* events that are pairwise independent but such that no subset of *k* > 2 of them is
> mutually independent.

*Skipped.*

##### C.2-8 ★

> Two events *A* and *B* are **conditionally independent**, given *C*, if
>
> Pr{*A* ∩ *B* | *C*} = Pr{*A* | *C*} ⋅ Pr{*B* | *C*}.
>
> Give a simple but nontrivial example of two events that are not independent but are conditionally independent given a
> third event.

*Skipped.*

##### C.2-9 ★

> You are a contestant in a game show in which a prize is hidden behind one of three curtains. You will win the prize if
> you select the correct curtain. After you have picked one curtain but before the curtain is lifted, the emcee lifts
> one of the other curtains, knowing that it will reveal an empty stage, and asks if you would like to switch from your
> current selection to the remaining curtain. How would your chances change if you switch? (This question is the
> celebrated ***Monty Hall*** problem, named after a game-show host who often presented contestants with just this
> dilemma.)

The winning chance changes from 1 / 3 to 2 / 3.

##### C.2-10 ★

> A prison warden has randomly picked one prisoner among three to go free. The other two will be executed. The guard
> knows which one will go free but is forbidden to give any prisoner information regarding his status. Let us call the
> prisoners *X*, *Y*, and *Z*. Prisoner *X* asks the guard privately which of *Y* or *Z* will be executed, arguing that
> since he already knows that at least one of them must die, the guard won’t be revealing any information about his own
> status. The guard tells *X* that *Y* is to be executed. Prisoner *X* feels happier now, since he figures that either
> he or prisoner *Z* will go free, which means that his probability of going free is now 1 / 2. Is he right, or are his
> chances still 1 / 3? Explain.

Still 1 / 3. Like the previous exercise, the chance of prisoner *Z* will go free is 2 / 3 after the guard says *Y* will
be executed.

#### C.3 Discrete random variables

##### C.3-1

> Suppose we roll two ordinary, 6-sided dice. What is the expectation of the sum of the two values showing? What is the
> expectation of the maximum of the two values showing?

E[*X* + *Y*] = E[*X*] + E[*Y*] = 7 / 2 + 7 / 2 = 7.

According to equation C.25:

E[max(*X*, *Y*)]\
= $∑_{i = 1}^∞ \Pr\left\lbrace \max\left(X, Y\right) ≥ i\right\rbrace$\
= $∑_{i = 1}^6 \Pr\left\lbrace \max\left(X, Y\right) ≥ i\right\rbrace$\
= $∑_{i = 1}^6 \Pr\left\lbrace X ≥ i ∨ Y ≥ i\right\rbrace$\
= $∑_{i = 1}^6 \Pr\left\lbrace X ≥ i\right\rbrace + \Pr\left\lbrace Y ≥ i\right\rbrace - \Pr\left\lbrace X ≥ i ∧ Y ≥ i\right\rbrace$\
= $∑_{i = 1}^6 (7 - i) / 6 + (7 - i) / 6 - (7 - i)^2 / 36$\
= 161 / 36.

##### C.3-2

> An array *A*[1‥n] contains *n* distinct numbers that are randomly ordered, with each permutation of the *n* numbers
> being equally likely. What is the expectation of the index of the maximum element in the array? What is the
> expectation of the index of the minimum element in the array?

E[arg max(*A*)] = (1 + *n*) / 2.

E[arg min(*A*)] = (1 + *n*) / 2.

##### C.3-3

> A carnival game consists of three dice in a cage. A player can bet a dollar on any of the numbers 1 through 6. The
> cage is shaken, and the payoff is as follows. If the player’s number doesn’t appear on any of the dice, he loses his
> dollar. Otherwise, if his number appears on exactly *k* of the three dice, for *k* = 1, 2, 3, he keeps his dollar and
> wins *k* more dollars. What is his expected gain from playing the carnival game once?

E\
= - Pr{*k* = 0} + $∑_{i = 1}^3 i \Pr\left\lbrace k = i\right\rbrace$\
= - 125 / 216 + $∑_{i = 1}^3 i \binom{3}{i} \left(1 / 6\right) ^ i \left(5 / 6\right) ^ {3 - i}$\
= - 125 / 216 + 1 × 3 × 1 / 6 × 25 / 36 + 2 × 3 × 1 / 36 × 5 / 6 + 3 × 1 × 1 / 216 × 1\
= - 17 / 216.

So, do not gamble.

##### C.3-4

> Argue that if *X* and *Y* are nonnegative random variables, then
>
> E[max(*X*, *Y*)] ≤ E[*X*] + E[*Y*].

Since *X* and *Y* are nonnegative, E[max(*X*, *Y*)] ≤ E[*X* + *Y*] = E[*X*] + E[*Y*].

##### C.3-5 ★

> Let *X* and *Y* be independent random variables. Prove that *f*(*X*) and *g*(*Y*) are independent for any choice of
> functions *f* and *g*.

*Skipped.*

##### C.3-6 ★

> Let *X* be a nonnegative random variable, and suppose that E[*X*] is well defined. Prove ***Markov’s inequality***:
>
> Pr{*X* ≥ *t*} ≤ E[*X*] / *t* (C.30)
>
> for all *t* > 0.

*Skipped.*

##### C.3-7 ★

> Let *S* be a sample space, and let *X* and *X*′ be random variables such that *X*(s) ≥ *X*′(*s*) for all *s* ∈ *S*.
> Prove that for any real constant *t*,
>
> Pr{*X* ≥ *t*} ≥ Pr{*X*′ ≥ *t*}.

*Skipped.*

##### C.3-8

> Which is larger: the expectation of the square of a random variable, or the square of its expectation?

E[$X^2$] - $\operatorname{E}^2\left[Y\right]$\
= E[$X^2$] - $\operatorname{E}^2\left[X\right]$\
= Var[*X*]\
≥ 0

##### C.3-9

> Show that for any random variable *X* that takes on only the values 0 and 1, we have Var[*X*] = E[*X*] E[1 - *X*].

Since *X* takes on only the values 0 and 1, we have $X^2$ = *X*.

Var[*X*]\
= E[$X^2$] - $\operatorname{E}^2\left[X\right]$\
= E[*X*] - $\operatorname{E}^2\left[X\right]$\
= E[*X*](1 - E[*X*])\
= E[*X*]E[1 - *X*]

##### C.3-10

> Prove that Var[*a* *X*] = $a^2$ Var[*X*] from the definition (C.27) of variance.

Var[*a* *X*]\
= E[$a^2 X^2$] - $\operatorname{E}^2\left[a X\right]$\
= $a^2$ E[$X^2$] - $a^2 \operatorname{E}^2\left[X\right]$\
= $a^2$(E[$X^2$] - $\operatorname{E}^2\left[X\right]$)\
= $a^2$ Var[*X*].
