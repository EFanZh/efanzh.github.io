+++
title = "Types and Programming Languages Exercises"
+++

<!-- markdownlint-disable no-inline-html -->

## Preface

### 2 Mathematical Preliminaries

#### 2.2 Ordered Sets

##### 2.2.6

> Exercise [★★ ↛]: Suppose we are given a relation *R* on a set *S*. Define the relation *R*′ as follows:
>
> *R*′ = *R* ∪ {(*s*, *s*) | *s* ∈ *S*}.
>
> That is, *R*′ contains all the pairs in *R* plus all pairs of the form (*s*, *s*). Show that *R*′ is the reflexive
> closure of *R*.

We need to show that:

- *R*′ is reflexive:
  - For every element *s* in *S*, we have
    (*s*, *s*) ∈ {(*s*, *s*) | *s* ∈ *S*} ⊆ (*R* ∪ {(*s*, *s*) | *s* ∈ *S*}) = *R*′, so *R*′ is reflexive.
- *R* ⊆ *R*′:
  - *R* ⊆ (*R* ∪ {(*s*, *s*) | *s* ∈ *S*}) = *R*′, so *R* ⊆ *R*′.
- *R*′ is smallest:
  - All elements in *R*′ is either an element in *R* or an element in {(*s*, *s*) | *s* ∈ *S*}, remove any element will
    cause *R*′ no longer containing either *R* or {(*s*, *s*) | *s* ∈ *S*}, which breaks the reflexive closure
    definition, so we can’t remove any element from *R*′, *R*′ must be smallest.

##### 2.2.7

> Exercise [★★, ↛]: Here is a more constructive definition of the transitive closure of a relation *R*. First, we
> define the following sequence of sets of pairs:
>
> <math display="block">
>     <mtable>
>         <mtr>
>             <mtd style="text-align: left;"><msub><mi>R</mi><mn>0</mn></msub></mtd>
>             <mtd><mo>=</mo></mtd>
>             <mtd style="text-align: left;"><mi>R</mi></mtd>
>         </mtr>
>         <mtr>
>             <mtd style="text-align: left;"><msub><mi>R</mi><mrow><mi>i</mi><mo>+</mo><mn>1</mn></mrow></msub></mtd>
>             <mtd><mo>=</mo></mtd>
>             <mtd style="text-align: left;">
>                 <msub><mi>R</mi><mi>i</mi></msub>
>                 <mo>∪</mo>
>                 <mo stretchy="false">{</mo>
>                 <mrow><mo>(</mo><mi>s</mi><mo>,</mo><mi>u</mi><mo>)</mo></mrow>
>                 <mo>∣</mo>
>                 <mtext>for some&nbsp;</mtext><mi>t</mi><mtext>,&nbsp;</mtext>
>                 <mrow><mo>(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo>)</mo></mrow>
>                 <mo>∈</mo>
>                 <msub><mi>R</mi><mi>i</mi></msub>
>                 <mtext>&nbsp;and&nbsp;</mtext>
>                 <mrow><mo>(</mo><mi>t</mi><mo>,</mo><mi>u</mi><mo>)</mo></mrow>
>                 <mo>∈</mo>
>                 <msub><mi>R</mi><mi>i</mi></msub>
>                 <mo stretchy="false">}</mo>
>             </mtd>
>         </mtr>
>     </mtable>
> </math>
>
> That is, we construct each *R*<sub>*i* + 1</sub> by adding to *R*<sub>*i*</sub> all the pairs that can be obtained by
> “one step of transitivity” from pairs already in *R*<sub>*i*</sub>. Finally, define the relation *R*<sup>+</sup> as
> the union of all the *R*<sub>*i*</sub>:
>
> <math display="block">
>     <msup><mi>R</mi><mo>+</mo></msup>
>     <mo>=</mo>
>     <munder>
>         <mo>⋃</mo>
>         <mi>i</mi>
>     </munder>
>     <msub><mi>R</mi><mi>i</mi>
> </math>
>
> Show that this *R*<sup>+</sup> is really the transitive closure of
> <math><mi>R</mi></math>—i.e., that it satisfies the conditions given in Definition 2.2.5.

We need to show that:

- *R*<sup>+</sup> is transitive:
  - If (*s*, *t*) ∈ *R*<sup>+</sup> and (*t*, *u*) ∈ *R*<sup>+</sup>, then there must exist an *i* such that
    (*s*, *t*) ∈ *R*<sub>i</sub> and (*t*, *u*) ∈ *R*<sub>i</sub>. By definition, (*s*, *u*) will be added to
    *R*<sup>+</sup> at some *i* + *n* step. So *R*<sup>+</sup> is transitive.
- *R* ⊆ *R*<sup>+</sup>:
  - *R* = *R*<sub>0</sub> ⊆
    <math><munder><mo>⋃</mo><mi>i</mi></munder><msub><mi>R</mi><mi>i</mi></math> = *R*<sup>+</sup>, so *R* ⊆ *R*′.
- *R*<sup>+</sup> is smallest:
  - All elements in *R*<sup>+</sup> is either originally contained in *R*, or added to
    *R*<sup>+</sup> at some later step. If we remove an element from *R*<sup>+</sup> that is originally contained in
    *R*, *R*<sup>+</sup> will no longer contain *R*, which breaks the transitive closure condition. Similarly, we also
    can’t remove an element that is added at some later step. If (*s*, *u*) is added at some later step, is must due to
    the set also containing some *t*, so that both (*s*, *t*) and (*t*, *u*) are in the set. If we remove (*s*, *u*),
    the condition that (*s*, *t*) ∈ *R*<sup>+</sup> and (*t*, *u*) ∈ *R*<sup>+</sup> implies
    (*s*, *u*) ∈ *R*<sup>+</sup> will be broken. So we can’t remove any element from *R*<sup>+</sup>, *R*<sup>+</sup>
    must be smallest.

##### 2.2.8

> Exercise [★★, ↛]: Suppose *R* is a binary relation on a set *S* and *P* is a predicate on *S* that is preserved by
> *R*. Show that *P* is also preserved by *R*<sup>\*</sup>.

We need to show that: For any *s* ∈ *S* and *t* ∈ *S*: (*s*, *t*) ∈ *R*<sup>\*</sup> and *s* ∈ *P* implies *t* ∈ *P*.

Since *P* is preserved by *R*, we have: For any *s* ∈ *S* and *t* ∈ *S*: (*s*, *t*) ∈ *R* and *s* ∈ *P* implies
*t* ∈ *P*.

First, we prove that for all *i*, *P* is preserved by *R*<sub>*i*</sub> that is defined in exercise 2.2.7. This can be
done by induction:

- Base case: If *i* = 0, we have *R*<sub>*i*</sub> = *R*<sub>0</sub> = *R*, which preserves *P* by definition.
- Inductive cases: Assume *P* is preserved by *R*<sub>*i*</sub>, (*s*, *t*) ∈ *R*<sub>*i*</sub>,
  (*t*, *u*) ∈ *R*<sub>*i*</sub>, and the pair we add to *R*<sub>*i*</sub> to get *R*<sub>*i* + 1</sub> is (*s*, *u*):

  - If *s* ∈ *P*, since *P* is preserved by *R*<sub>*i*</sub>, we have *t* ∈ *P* and *u* ∈ *P*. Since both *s* ∈ *P* and
    *u* ∈ *P*, adding (*s*, *u*) to *R*<sub>*i*</sub> doesn’t break the preserving property.
  - If *s* ∉ *P*, trivially, adding (*s*, *u*) to *R*<sub>*i*</sub> doesn’t break the preserving property.

  So we have *P* is also preserved by *R*<sub>*i* + 1</sub>.

Since *R*<sup>\*</sup> is the union of all *R*<sub>*i*</sub>, *P* is also preserved by *R*<sup>\*</sup>.

------------------------------------------------------------------------------------------------------------------------

> List of common unicode characters:
>
> ```txt
> U+2032 PRIME : minutes, feet                       ′
> U+219B RIGHTWARDS ARROW WITH STROKE:               ↛
> U+2208 ELEMENT OF                                  ∈
> U+2209 NOT AN ELEMENT OF                           ∉
> U+2223 DIVIDES : such that, APL stile:             ∣
> U+222A UNION : cup:                                ∪
> U+2286 SUBSET OF OR EQUAL TO:                      ⊆
> U+22C3 N-ARY UNION : z notation generalised union: ⋃
> U+2605 BLACK STAR:                                 ★
> ```

------------------------------------------------------------------------------------------------------------------------
