import React from 'react';

const c2 = () => {
    const theorem = `
    \\\\textbf{Fermat's Little Theorem:}\n    If $p$ is a prime number and $a$ is an integer not divisible by $p$, then:\n    $$a^{p-1} \\\\equiv 1 \\\\pmod{p}.$$\n    \n    \\\\textbf{Proof:} Consider the sequence:\n    $$a, 2a, 3a, \\\\dots, (p-1)a.$$\n    Since $a$ is not divisible by $p$, all terms in this sequence are distinct modulo $p$. Multiplying these terms together gives:\n    $$a \\\\cdot 2a \\\\cdot 3a \\\\cdot \\\\dots \\\\cdot (p-1)a \\\\equiv (p-1)! \\\\pmod{p}.$$\n    Factoring $a^{p-1}$ from the left side:\n    $$a^{p-1} \\\\cdot (p-1)! \\\\equiv (p-1)! \\\\pmod{p}.$$\n    Since $(p-1)!$ is not divisible by $p$, we can cancel it out:\n    $$a^{p-1} \\\\equiv 1 \\\\pmod{p}.$$\n\n    \\\\textbf{Example:} Let $p = 7$ and $a = 3$. Then:\n    $$3^{6} \\\\equiv 1 \\\\pmod{7}.$$\n\n    \\\\textbf{Practice Problems:}\n    1. Verify Fermat's Little Theorem for $a = 2$ and $p = 13$.\n    2. Compute $7^{11} \\\\pmod{13}$ using Fermat's Little Theorem.\n    3. Show that $5^{100} \\\\equiv 25 \\\\pmod{75}$.`
    return (
        <div>

        </div>
    );
};

export default c2;