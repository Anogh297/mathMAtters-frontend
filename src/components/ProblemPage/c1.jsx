import React from 'react';

const c1 = () => {
    const theorem =`
    \textbf{Fermat's Little Theorem:}
    If $p$ is a prime number and $a$ is an integer not divisible by $p$, then:
    $$a^{p-1} \equiv 1 \pmod{p}.$$
    
    \textbf{Proof:} Consider the sequence:
    $$a, 2a, 3a, \dots, (p-1)a.$$
    Since $a$ is not divisible by $p$, all terms in this sequence are distinct modulo $p$. Multiplying these terms together gives:
    $$a \cdot 2a \cdot 3a \cdot \dots \cdot (p-1)a \equiv (p-1)! \pmod{p}.$$
    Factoring $a^{p-1}$ from the left side:
    $$a^{p-1} \cdot (p-1)! \equiv (p-1)! \pmod{p}.$$
    Since $(p-1)!$ is not divisible by $p$, we can cancel it out:
    $$a^{p-1} \equiv 1 \pmod{p}.$$

    \textbf{Example:} Let $p = 7$ and $a = 3$. Then:
    $$3^{6} \equiv 1 \pmod{7}.$$

    \textbf{Practice Problems:}
    1. Verify Fermat's Little Theorem for $a = 2$ and $p = 13$.
    2. Compute $7^{11} \pmod{13}$ using Fermat's Little Theorem.
    3. Show that $5^{100} \equiv 25 \pmod{75}$.`
    return (
        <div>
            
        </div>
    );
};

export default c1;