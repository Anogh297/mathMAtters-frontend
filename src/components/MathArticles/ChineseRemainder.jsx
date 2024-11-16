import React from 'react';
import Latex from 'react-latex-next';

const ChineseRemainder = () => {
  const theorem = `
    \\textbf{Chinese Remainder Theorem:}
    Let $n_1, n_2, \\dots, n_k$ be pairwise coprime integers. For any integers $a_1, a_2, \\dots, a_k$, there exists a unique integer $x$ modulo $N = n_1 n_2 \\cdots n_k$ such that:
    $$x \\equiv a_i \\pmod{n_i} \\quad \\text{for } i = 1, 2, \\dots, k.$$

    \\textbf{Example:}
    Solve the system of congruences:
    $$x \\equiv 2 \\pmod{3},$$
    $$x \\equiv 3 \\pmod{5},$$
    $$x \\equiv 2 \\pmod{7}.$$

    \\textbf{Solution:}
    1. Compute $N = 3 \\cdot 5 \\cdot 7 = 105.$
    2. Find $N_i = \\frac{N}{n_i}$ for each $i$:
    $$N_1 = 35, \\; N_2 = 21, \\; N_3 = 15.$$
    3. Compute the modular inverses of $N_i$ modulo $n_i$:
    $$M_1 \\equiv 35^{-1} \\pmod{3} = 2,$$
    $$M_2 \\equiv 21^{-1} \\pmod{5} = 1,$$
    $$M_3 \\equiv 15^{-1} \\pmod{7} = 1.$$
    4. Combine to get:
    $$x = a_1 N_1 M_1 + a_2 N_2 M_2 + a_3 N_3 M_3 \\pmod{105}.$$
    $$x = 2 \\cdot 35 \\cdot 2 + 3 \\cdot 21 \\cdot 1 + 2 \\cdot 15 \\cdot 1 \\pmod{105} = 233 \\pmod{105} = 23.$$

    \\textbf{Practice Problems:}
    1. Solve $x \\equiv 1 \\pmod{4}, x \\equiv 2 \\pmod{5}, x \\equiv 3 \\pmod{7}.$
    2. Find $x$ modulo $84$ if $x \\equiv 3 \\pmod{4}$ and $x \\equiv 5 \\pmod{7}$.
    3. Prove the uniqueness of $x \\pmod{N}$ in the Chinese Remainder Theorem.
  `;

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Chinese Remainder Theorem</h1>
      <div className="text-lg">
        <Latex>{theorem}</Latex>
      </div>
    </div>
  );
};

export default ChineseRemainder;
