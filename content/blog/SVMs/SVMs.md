---
title: SVMS
date: "2020-02-09T05:41:38+00:00"
description: "Thicc Hyperplanes"
---

## SVMs

### Thicc Hyperplanes

- The bigger the margin, the better the seperater
- Generaizes better etc



### The Growth Function

- If you have a fat margin, you eliminate some of the viable dichotomies
- smaller function, lower VC dimension, better generalization



### Find w with large margin

let $x_n$ be nearest data pt to $w^Tx=0$.  We have to do 2 things first.



Normalize $w$, what does this mean?

- basically there are infinite of the same hyperplanes where $w^Tx=0$
- We constain the hyperplane so there's only one...
- Force $|w^Tx_n|=1$, this is just a scale
- Also just pull out $w_0$, it's just not convenient in SVMs
- Now the plane is $w^Tx+b=0$



#### Computing the Distance from $x_n$ to the plane

What is $w$?. $w \perp (w^Tx + b = 0)$

define x as the point $w$ intersects the plane

$w$ is the orthogonal vector, so project $(x_n-x)$ onto $\hat{w}$

distance = $\frac{1}{||w||}|w^Tx_n+b-w^Tx-b|$

$w^Tx = 0$

so, $dist=\frac{1}{||w||}$ which we want to maximize wrt, subject that the neartest point has $|w^Tx_n|=1$



#### Changing the problem

We currently have the constraint that $min_{n=1, 2,…N}|w^Tx_n+b|=1$

This is hard to optimize.  First we change that constraint

$$|w^Tx_n+b| = y_n(w^Tx_n+b)$$

(Bc, $y_n$ will ensure the expression is pos)

Then instead of norm, we minimize $1/2w^Tw$



This leaves us with the following:

Minimize $1/2w^Tw$ given  $y_n(w^Tx_n+b) \geq 1$ **for all** points

This uses Lagrangian.



#### Computing the Lagrangian (quik)

$L(w, b, \alpha) = 1/2w^Tw-\sum_{n=1}^{N}\alpha_n(y_n(w^Tx_n+b)-1)$

we get two conditions, first set gradient to 0

$\nabla_w L(w, b, \alpha) = w-\sum_{n=1}^{N}\alpha y_nx_n=0$

$\frac{\partial L}{\partial b}=-\sum_{n=1}^{N}\alpha y_n$



We sub those two conditions back into the Lagrangian and we get

$L(\alpha) = \sum_{n=1}^N\alpha_n -1/2 \sum_{n=1}^N \sum_{m=1}^N y_ny_m\alpha_n \alpha_m x_n^Tx_m$



We still have the constraint the $\alpha_n \geq 0$, so now more work...

Now we use Quadratic Programming

we minimize $-L(\alpha)$.  We pass in the matrix that is the result of expanding $y_n y_m x_n x_m$

Basically, $min_\alpha 1/2\alpha^TQ \alpha -1^T \alpha$

Practical consideration: $Q$ can get huge and that can become problematic



QP: gives us $\alpha$ so now we gotta find out w and b.

Interestingly most $\alpha$ are 0 bc these are the interior points

There are some $a_n>0$ where $x_n$ are the support vectors

$w=\sum_{n=1}^{N}\alpha y_nx_n = \sum_{x_n\in SV}\alpha y_nx_n$

Your $w$ is based solely on the support vectors, this is great bc you have way fewer SV than you do total vectors.  reduces dimensionality



b is easy to solve, just using $y_n(w^Tx_n+b)=1$



## Nonlinear Transformation

$L(\alpha) = \sum_{n=1}^N\alpha_n -1/2 \sum_{n=1}^N \sum_{m=1}^N y_ny_m\alpha_n \alpha_m x_n^Tx_m$

turns into

$L(\alpha) = \sum_{n=1}^N\alpha_n -1/2 \sum_{n=1}^N \sum_{m=1}^N y_ny_m\alpha_n \alpha_m z_n^Tz_m$

But heres the beautiful thing.  Say u can put z in a huge space, but boom, you'll not suffer at all, you'll get $\alpha$ in the same dimension.

Generalization

$E_{out} \leq \frac{SV}{N-1}$



# Kernel Methods

Ok so remember...

$L(\alpha) = \sum_{n=1}^N\alpha_n -1/2 \sum_{n=1}^N \sum_{m=1}^N y_ny_m\alpha_n \alpha_m z_n^Tz_m$

We need to know $z_n^Tz_m$

We don't actually need to know $z$, so maybe there's some trick exploiting just having the inner prod

our classification is $g(x)=sign(w^Tz+b)$

Oh no!  Just a regular z.  But wait, sub in w...

$w = \sum_{x_n\in SV}\alpha y_nx_n$

then boom, that turns into $z^Tz$

And same thing happens with solving for b!



ok so how do we get that inner product

we have $x, x'$ and want $z^Tz'$

set $z^Tz' = K(x, x')$ , K for kernel



Example: $\phi$ is 2nd order

$x\in R^2$

$\phi(x)=z=(1, x_1, x_2, x_1^2, x_2^2, x_1x_2)$

$K(x,x') = z^Tz=1+ x_1x_1'+ x_2x_2'+ x_1^2x_1'^2+ x_2^2x_2'^2+x_1x_1'x_2x_2'$









 









