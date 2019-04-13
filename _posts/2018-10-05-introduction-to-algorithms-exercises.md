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

*What? We can do that?*

*Skipped.*

#### 2.3 Designing algorithms

##### 2.3-1

> Using Figure 2.4 as a model, illustrate the operation of merge sort on the array *A* = ⟨3, 41, 52, 26, 38, 57, 9, 49⟩.

*Skipped.*

##### 2.3-2

> Rewrite the *Merge* procedure so that it does not use sentinels, instead stopping once either array *L* or *R* has had
> all its elements copied back to *A* and then copying the remainder of the other array back into *A*.

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_2_getting_started/section_2_3_designing_algorithms/exercises/exercise_2_3_2.rs)
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
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_2_getting_started/section_2_3_designing_algorithms/exercises/exercise_2_3_4.rs)
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
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_2_getting_started/section_2_3_designing_algorithms/exercises/exercise_2_3_5.rs)
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

*T*(*n*) = *c*₁, if *n* = 0;\
*T*(*n*) = *T*(*n* / 2) + *c*₂, if *n* > 0.

We prove *T*(*n*) = Θ(lg *n*) by induction:

- If *n* = 0, Θ(lg *n*) = Θ(lg 0) = Θ(-∞), … Not sure how to go from here.
- If *n* > 0, Θ(lg *n*) = *T*(*n* / 2) + *c*₂ = Θ(*T*(*n* / 2)). By induction, we know *T*(*n* / 2) = Θ(lg (*n* / 2)),
  so Θ(lg *n*) = Θ(lg (*n* / 2)) = Θ((lg *n*)  - 1) = Θ(lg *n*).

##### 2.3-6

> Observe that the **while** loop of lines 5–7 of the *Insertion-Sort* procedure in Section 2.1 uses a linear search to
> scan (backward) through the sorted subarray *A*[1‥*j* - 1]. Can we use a binary search (see Exercise 2.3-5) instead
> to improve the overall worst-case running time of insertion sort to Θ(*n* lg *n*)?

No, we can not. Because despite the searching takes Θ(lg *n*) time, we still need to move *n* elements in the worst-case
scenario, which taks Θ(*n*) time.

##### 2.3-7 ★

> Describe a Θ(*n* lg *n*)-time algorithm that, given a set *S* of *n* integers and another integer *x*, determines
> whether or not there exist two elements in *S* whose sum is exactly *x*.

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_2_getting_started/section_2_3_designing_algorithms/exercises/exercise_2_3_7.rs)
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
> P\left(x\right) &= \sum_{k=0}^n a_k x^k \\\\
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
>    $y = \displaystyle\sum_{k = 0}^{n - \left(i + 1\right)} a_{k + i + 1} x^k$.
>
>    Interpret a summation with no terms as equaling 0. Following the structure of the loop invariant proof presented in
>    this chapter, use this loop invariant to show that, at termination, $y = \sum_{k = 0}^n a_k x^k$.
> 4) Conclude by arguing that the given code fragment correctly evaluates a polynomial characterized by the coefficients
>    $a_0$, $a_1$, …, $a_n$.

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_2_getting_started/problems/problem_2_3.rs)
for implementation.

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
   $\sum_{i = 1}^n\left(c_1 k_i + c_2\right) = c_1 k + c_2 n = Θ\left(k\right)$.
4. See
   [here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_2_getting_started/problems/problem_2_4.rs)
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

In the following statments, *n* is big enough that both *f*(*n*) and *g*(*n*) is nonnegative.

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

*Skipped*.

#### 3.X Problems

##### 3-1 Asymptotic behavior of polynomials

> Let
>
> $p(n) = \displaystyle\sum_{i=0}^d a_i n^i$,
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

*Too lazy to prove. Just list my guessings here.*

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

*Skipped*.

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
| ***b***. | lg *n*       | 1   | *Don’t know*         |
| ***c***. | *n* / 2      | 1   | ⌈lg *n*⌉              |
| ***d***. | *n* / 2      | 2   | ⌈lg *n* - 1⌉          |
| ***e***. | $\sqrt{n}$   | 2   | ⌈lg lg *n*⌉           |
| ***f***. | $\sqrt{n}$   | 1   | ∞                     |
| ***g***. | $n^{1 / 3}$  | 2   | ⌈$\log_3 \lg n$⌉      |
| ***h***. | *n* / lg *n* | 2   | *Don’t know*         |

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
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_4_divide_and_conquer/section_4_1_the_maximum_subarray_problem/mod.rs)
for recursive implementation.

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_4_divide_and_conquer/section_4_1_the_maximum_subarray_problem/exercises/exercise_4_1_3.rs)
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
> *A*[*i*‥*j* + 1], for some 1 ≤ *i* ≤ *j* + 1. Determine a maximum subarray of the form *A*[i‥*j* + 1] in constant
> time based on knowing a maximum subarray ending at index *j*.

See
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_4_divide_and_conquer/section_4_1_the_maximum_subarray_problem/exercises/exercise_4_1_5.rs)
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
= *c* $n^2$ + *n*.

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

Note: Solving *T*(*n*) = *a* *T*(*n* / *b*) + *k* $n^p$: if *p* = $\log_b a$, *T*(*n*) = *k* $n^p \log_b n$ + *c* $n^p$, otherwise *T*(*n*) = *c* $n^{\log_b a}$ + (*k* / (1 - *a* / $b^p$)) $n^p$.

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

The master methoid can not be applied to that recurrence, because $n^2$ lg *n* is asymptotically large than
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
= Θ($n^{\log_b a}$) + $\sum_{j = 0}^{\log_b n - 1} a^j f(n / b^j)$\
= Θ($n^{\log_b a}$) + $\sum_{j = 0}^{\log_b n - 1} a^j Θ\left(\left(n / b^j\right)^{\log_b a} \lg^k \left(n / b^j\right)\right)$\
= Θ($n^{\log_b a}$) + $\sum_{j = 0}^{\log_b n - 1} Θ\left(a^j \left(n / b^j\right)^{\log_b a} \lg^k \left(n / b^j\right)\right)$\
= Θ($n^{\log_b a}$) + $\sum_{j = 0}^{\log_b n - 1} Θ\left(n^{\log_b a} \left(\lg n - \lg \left(b^j\right)\right)^k\right)$\
= Θ($n^{\log_b a}$) + $\sum_{j = 0}^{\log_b n - 1} Θ\left(n^{\log_b a} \left(\lg n - j \lg b\right)^k\right)$\
= Θ($n^{\log_b a}$) + $\sum_{j = 0}^{\log_b n - 1} Θ\left(n^{\log_b a} \lg^k n\right)$\
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
> 2. *T*(*n*) = *T*(7 *n*  / 10) + *n*.
> 3. *T*(*n*) = 16 *T*(*n* / 4) + $n^2$.
> 4. *T*(*n*) = 7 *T*(*n* / 3) + $n^2$.
> 5. *T*(*n*) = 7 *T*(*n* / 2) + $n^2$.
> 6. *T*(*n*) = 2 *T*(*n* / 4) + $\sqrt{n}$
> 7. *T*(*n*) = *T*(*n* - 2) + $n^2$.

1. *T*(*n*) = *c* *n* + (8 / 7) $n^4$.
2. *T*(*n*) = (10 / 3) *n* + *c*.
3. *T*(*n*) = $n^2 \log_4 n$ + *c* $n^2$.
4. *T*(*n*) = (9 / 2) $n^2$ + *c* $n^{\log_3 7}$..
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
      = Θ(*n*) + $\sum_{j = 0}^{\lg n - 1} Θ\left(2^j (n / 2^j)\right)$ + $\sum_{j = 0}^{\lg n - 1} Θ\left(2^j N\right)$\
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
> 5. *T*(*n*) = 2 *T*(*n* / 2) + *n* /  lg n.
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
7. *T*(*n*) = *c* + $\sum_{j = 2}^n \left(1 / j\right)$ = Θ(lg *n*).
8. *T*(*n*) = *c* + $\sum_{j = 2}^n \lg n$ = *c* + $\lg \prod_{j = 2}^n n$ = *c* + lg *n*! = Θ(*n* lg *n*).
9. *Skipped*.
10. *T*(*n*) = *n* lg lg *n* + *c* *n*.

##### 4-4 Fibonacci numbers

> This problem develops properties of the Fibonacci numbers, which are defined by recurrence (3.22). We shall use the
> technique of generating functions to solve the Fibonacci recurrence. Define the ***generating function*** (or
> ***formal power series***) ℱ as
>
> $\begin{aligned}
> ℱ\left(z\right) &= \displaystyle\sum_{i = 0}^∞ F_i z^i\\\\
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
>    ℱ(*z*) = $\displaystyle\sum_{i = 0}^∞ \frac{1}{\sqrt{5}}\left(ϕ^i - \hat{ϕ}^i\right) z^i$.
> 4. Use part (c) to prove that $F_i = ϕ^i / \sqrt{5}$ for *i* > 0, rounded to the nearest integer. (*Hint:* Observe
>    that |$\hat{ϕ}$| < 1.)

1. By definition:

   $\begin{aligned}
   z + z ℱ\left(z\right) + z^2 ℱ\left(z\right) &= z + z \sum_{i = 0}^∞ F_i z^i + z^2 \sum_{i = 0}^∞ F_i z^i\\\\
   &= z + \sum_{i = 0}^∞ F_i z^{i + 1} + \sum_{i = 0}^∞ F_i z^{i + 2}\\\\
   &= z + \sum_{i = 1}^∞ F_{i - 1} z^i + \sum_{i = 2}^∞ F_{i - 2} z^i\\\\
   &= z + \left(F_0 z^1 + \sum_{i = 2}^∞ F_{i - 1} z^i\right) + \sum_{i = 2}^∞ F_{i - 2} z^i\\\\
   &= z + F_0 z^1 + \left(\sum_{i = 2}^∞ F_{i - 1} z^i + \sum_{i = 2}^∞ F_{i - 2} z^i\right)\\\\
   &= F_1 z^1 + F_0 z^0 + \sum_{i = 2}^∞ F_i z^i\\\\
   &= F_0 z^0 + F_1 z^1 + \sum_{i = 2}^∞ F_i z^i\\\\
   &= \sum_{i = 0}^∞ F_i z^i\\\\
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

   An interesting discovery: if we let *z* = 1, we have ℱ(1) = 1 / (1 - 1 - $1^2$) =  -1. Also, according to the
   definition of ℱ, we have: $ℱ\left(1\right) = \sum_{i = 0}^∞ F_i 1^i = \sum_{i = 0}^∞ F_i$.

   So we have $\sum_{i = 0}^∞ F_i$ = 0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + … = -1, WTF?
3. $\sum_{i = 0}^∞ \frac{1}{\sqrt{5}}\left(ϕ^i - \hat{ϕ}^i\right) z^i$\
   = $\frac{1}{\sqrt{5}} \sum_{i = 0}^∞ \left(ϕ^i - \hat{ϕ}^i\right) z^i$\
   = $\frac{1}{\sqrt{5}} \left(\sum_{i = 0}^∞ \left(ϕ z\right)^i - \sum_{i = 0}^∞ \left(\hat{ϕ} z\right)^i\right)$\
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
       since there can not be the same number of good chips and bads chips. We randomly remove one chip from the chips,
       and we will be left with even number of chips, in which good chips are no less than bad chips. We process the
       remaning chips with the method used in the even number case. After the remaining chips being processed, either we
       get a good chip, or we are told that the number of good chips are the same as the number of bad chips, which
       means the chip we removed is a good chip. Either way, we can get a good chip.

   The solution to the generalized problem applies to the original problem.
3. With the solution above, we can find one good chip in number *T*(*n*) ≤ *T*(*n* / 2) + Θ(*n*) pair tests. According
   to the master theorem, we have *T*(*n*) = *O*(*n*). After we found one good we can identify all good chips with that
   good chip in Θ(*n*) time, so the total number of pairwise tests equals to *O*(*n*) + Θ(*n*) = Θ(*n*).

The solution is implemented [here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_4_divide_and_conquer/problems/problem_4_5_chip_testing.rs).

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

     Θ(*f*(2) + $\sum_{i = 1}^{m / 2 - 1} \left(f\left(2 i + 2\right) - f\left(2 i\right) + 1\right)$)\
     = Θ(*f*(2) + (*f*(*m*) - *f*(2) + *m* / 2 - 1))\
     = Θ(*f*(*m*) + *m* / 2 - 1)\
     = *O*(*n* + *m* / 2 - 1)\
     = *O*(*n* + *m*)
   - If the number of rows is odd, the time for computing the leftmost minimal element of all odd rows is:

     Θ(*f*(2) + $\sum_{i = 1}^{\left(m - 3\right) / 2} \left(f\left(2 i + 2\right) - f\left(2 i\right) + 1\right)$ + (*n* - *f*(*m* - 1) + 1))\
     = Θ(*f*(2) + (*f*(*m* - 1) - *f*(2) + (*m* - 3) / 2) + (*n* - *f*(*m* - 1) + 1))\
     = Θ((*m* - 3) / 2 + *n* + 1)\
     = Θ(*m* / 2 + *n* - 1 / 2)\
     = *O*(*m* + *n*)

   So the time cost for computing the leftmost minimum in the odd-numbered rows is *O*(*m* + *n*).
5. *T*(*m*, *n*) = *T*(*m* / 2, *n*) + *O*(*m* + *n*).

   *T*(*m*, *n*)\
   = Θ(1) + *O*($\sum_{i=0}^{\lg m - 1} \left(m / \left(2^i\right) + n\right)$)\
   = Θ(1) + *O*($\sum_{i=0}^{\lg m - 1} \left(m / \left(2^i\right)\right) + \sum_{i=0}^{\lg m - 1} n$)\
   = Θ(1) + *O*(*m* $\sum_{i=0}^{\lg m - 1} \left(1 / 2\right)^i + \sum_{i=0}^{\lg m - 1} n$)\
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
  deternube which candidate is best.

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
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_5_probabilistic_analysis_and_randomized_algorithms/section_5_1_the_hiring_problem/exercises/exercise_5_1_2.rs).

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
[here](https://github.com/EFanZh/Introduction-to-Algorithms/blob/master/src/section_5_probabilistic_analysis_and_randomized_algorithms/section_5_1_the_hiring_problem/exercises/exercise_5_1_3.rs).

Let *k* be the time used to generate and compare two random value, *T*(*p*) be the expected running time of our
algorithm, we have:

*T*(*p*) = 2 *p* (1 - *p*) *k* + (1 - 2 *p* (1 - *p*)) (*k* + *T*(*p*))\
⇒ *T*(*p*) = *k* / (2 *p* ( 1 - *p*)) = Θ(1 / (*p* (1 - *p*))).

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

$\text{Pr}\left\{\left(\bigcup_{i = 1}^j A_i\right) ∪ A_{i + 1}\right\}$ \
≤ $\text{Pr}\left\{\bigcup_{i = 1}^j A_i\right\} + \text{Pr}\left\{A_{i + 1}\right\}$\
≤ $\sum_{i = 1}^j \text{Pr}\left\{A_i\right\} + \text{Pr}\left\{A_{i + 1}\right\}$ (By induction)\
= $\sum_{i = 1}^{j + 1} \text{Pr}\left\{A_i\right\}$.

##### C.2-3

> Suppose we shuffle a deck of 10 cards, each bearing a distinct number from 1 to 10, to mix the cards thoroughly. We
> then remove three cards, one at a time, from the deck. What is the probability that we select the three cards in
> sorted (increasing) order?

The order of the selected cards is independ of the number of cards, so the probability is 1 / 3! = 1 / 6.
