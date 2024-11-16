import React from 'react';
import Latex from 'react-latex-next';

const EuclidTheorem = () => {
  const theorem = `
    \\textbf{Euclid's Theorem:} 
    There are infinitely many prime numbers.

    \\textbf{Proof:}
    Assume that there are finitely many primes $p_1, p_2, \\dots, p_n$. Define the number:
    $$N = p_1 p_2 \\cdots p_n + 1.$$
    $N$ is not divisible by any $p_i$ because dividing $N$ by any $p_i$ leaves a remainder of $1$. Therefore, $N$ is either prime itself or divisible by a prime not in the list. This contradicts the assumption that there are finitely many primes.

    \\textbf{Example:}
    Suppose the primes are $2, 3, 5$. Then:
    $$N = 2 \\cdot 3 \\cdot 5 + 1 = 31.$$
    Since $31$ is prime, this proves there are more primes.

    \\textbf{Practice Problems:}
    1. Construct $N$ for the first four primes $2, 3, 5, 7$ and verify if it is prime.
    2. Prove that there are infinitely many prime numbers of the form $4k + 3$.
    3. Show that if $p$ is prime, then $p! + 1$ is either prime or divisible by a prime larger than $p$.
  `;

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Euclid's Theorem</h1>
      <div className="text-lg">
        <Latex>{theorem}</Latex>
      </div>
    </div>
  );
};

export default EuclidTheorem;
