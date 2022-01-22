import { useCallback } from "react";


export const useCalculateRenta = ({ terms }) => {

    const calculate = useCallback(({ salary }) => {
        let applyingTerms = []
        if (salary < terms[0].inf) {
            return {
                taxes: 0,
                grossSalary: salary,
            }
        }
        for (const term of terms) {

            if (salary < term.sup && salary >= term.inf) {
                applyingTerms.push({ ...term, amount: (salary - term.inf) * term.percentage });
                continue;

            }
            if (salary < term.inf) {
                applyingTerms.push({ ...term, amount: 0 });
                continue;
            }

            applyingTerms.push({ ...term, amount: (term.sup - term.inf) * term.percentage });

        }

        const taxes = applyingTerms.reduce((z, n) => z + n.amount, 0);

        return {
            netSalary: salary - taxes,
            taxes,
            grossSalary: salary,
            applyingTerms
        }



    }, [terms])

    return calculate;

}