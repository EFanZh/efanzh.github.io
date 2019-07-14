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
> **Input**: A sequence of *n* numbers $A = ⟨a_1, a_2, …, a_n⟩$ and a value *v*.
>
> **Output**: An index *i* such that $v = A[i]$ or the special value *nil* if *v* does not appear in *A*.
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
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_2_getting_started/problems/problem_2_3.rs)
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
   [here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_2_getting_started/problems/problem_2_4.rs)
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

#### Problems

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
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/problems/problem_6_2.rs).

***b.*** The maximum number of elements of height *h* is $∑_{i = 0}^{h} d^h = \frac{1 - d^h}{1 - d}$, so we have
$\frac{1 - d^{h - 1}}{1 - d} < n ≤ \frac{1 - d^h}{1 - d}$. Solving it, we have
$\log_d\left(\left(d - 1\right) n + 1\right) ≤ h < \log_d\left(\left(d - 1\right) n + 1\right) + 1$. Since *h* is an
integer, we have *h* = $\left\lceil\log_d\left(\left(d - 1\right) n + 1\right)\right\rceil$ = Θ($\log_d n$).

***c.*** The solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/problems/problem_6_2.rs).
The worst-case running time is linear to the height of the heap, and on every level we have to find the maximum element
in Θ(*d*) time. So the worst case running time is Θ(*d* $\log_d n$).

***d.*** The solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/problems/problem_6_2.rs).
The worst-case running time is linear to the height of the heap. So the worst case running time is
*O*($\log_d n$).

***e.*** The solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/problems/problem_6_2.rs).
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
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/problems/problem_6_3.rs).

*T*(*p*) = *T*(*p* - 1) + *O*(1).

***d.***

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/problems/problem_6_3.rs).

The solution is very similar to the *Extract-Min* and they have the same running time bound.

***e.***

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/problems/problem_6_3.rs).

***f.***

You are thinking about binary search, aren’t you? Too bad this problem isn’t about that.

Solution is implemented
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_6_heapsort/problems/problem_6_3.rs).

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
> when all of the intervals overlap (i.e., when there exists a value *x* such that *x* ϵ [$a_i$, $b_i$] for all *i*).
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
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_8_sorting_in_linear_time/problems/problem_8_2.rs).
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
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_8_sorting_in_linear_time/problems/problem_8_3.rs).

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
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/chapter_8_sorting_in_linear_time/problems/problem_8_4.rs).
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

------------------------------------------------------------------------------------------------------------------------

> List of common symbols:
>
> ```text
> ×ΓΘΩαπωϕϵ–—’“”‥…′ℕℝℱ→⇒⇔∀∃∅∈∏∑∞∧∨∩∪≠≤≥⋀⋁⋂⋃⋅⋯⌈⌉⌊⌋★⟨⟩
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
