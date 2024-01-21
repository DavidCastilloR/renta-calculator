import { useState } from "react";
import { useCalculateRenta } from "../hooks";
import { toColon } from "../utils";

const HomeContent = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [selectedTaxType, setSelectedTaxType] = useState("salariedAndRetired");

  const termsByYear = [
    {
      //*********2024************
      year: 2024,
      taxTypes: {
        // Asalariados, pensionados
        salariedAndRetired: {
          terms: [
            { inf: 929_000, sup: 1_363_000, percentage: 0.1, category: "10%" },
            {
              inf: 1_363_000,
              sup: 2_392_000,
              percentage: 0.15,
              category: "15%",
            },
            {
              inf: 2_392_000,
              sup: 4_783_000,
              percentage: 0.2,
              category: "20%",
            },
            {
              inf: 4_783_000,
              sup: Infinity,
              percentage: 0.25,
              category: "25%",
            },
          ],
        },
        //Fisicas con actividades lucrativas
        naturalLucrative: {
          terms: [
            {
              inf: 4_127_000,
              sup: 6_164_000,
              percentage: 0.1,
              category: "10%",
            },
            {
              inf: 6_164_000,
              sup: 10_281_000,
              percentage: 0.15,
              category: "15%",
            },
            {
              inf: 10_281_000,
              sup: 20_605_000,
              percentage: 0.2,
              category: "20%",
            },
            {
              inf: 20_605_000,
              sup: Infinity,
              percentage: 0.25,
              category: "25%",
            },
          ],
        },
        //Juridicas con actividades lucrativas
        legalLucrative: {
          terms: [
            {
              inf: 0,
              sup: 5_687_000,
              percentage: 0.05,
              category: "5%",
            },
            {
              inf: 5_687_000,
              sup: 8_532_000,
              percentage: 0.1,
              category: "10%",
            },
            {
              inf: 8_532_000,
              sup: 11_376_000,
              percentage: 0.15,
              category: "15%",
            },
            {
              inf: 11_376_000,
              sup: Infinity,
              percentage: 0.2,
              category: "20%",
            },
          ],
        },
      },
    },
    {
      //*********2023************
      year: 2023,
      taxTypes: {
        // Asalariados, pensionados
        salariedAndRetired: {
          terms: [
            { inf: 941_000, sup: 1_381_000, percentage: 0.1, category: "10%" },
            {
              inf: 1_381_000,
              sup: 2_423_000,
              percentage: 0.15,
              category: "15%",
            },
            {
              inf: 2_423_000,
              sup: 4_845_000,
              percentage: 0.2,
              category: "20%",
            },
            {
              inf: 4_845_000,
              sup: Infinity,
              percentage: 0.25,
              category: "25%",
            },
          ],
        },
        //Fisicas con actividades lucrativas
        naturalLucrative: {
          terms: [
            {
              inf: 4_181_000,
              sup: 6_244_000,
              percentage: 0.1,
              category: "10%",
            },
            {
              inf: 6_244_000,
              sup: 10_414_000,
              percentage: 0.15,
              category: "15%",
            },
            {
              inf: 10_414_000,
              sup: 20_872_000,
              percentage: 0.2,
              category: "20%",
            },
            {
              inf: 20_872_000,
              sup: Infinity,
              percentage: 0.25,
              category: "25%",
            },
          ],
        },
        //Juridicas con actividades lucrativas
        legalLucrative: {
          terms: [
            {
              inf: 0,
              sup: 5_761_000,
              percentage: 0.05,
              category: "5%",
            },
            {
              inf: 5_761_000,
              sup: 8_643_000,
              percentage: 0.1,
              category: "10%",
            },
            {
              inf: 8_643_000,
              sup: 11_524_000,
              percentage: 0.15,
              category: "15%",
            },
            {
              inf: 11_524_000,
              sup: Infinity,
              percentage: 0.2,
              category: "20%",
            },
          ],
        },
      },
    },

    //*********2022************
    {
      year: 2022,
      taxTypes: {
        salariedAndRetired: {
          terms: [
            { inf: 863_000, sup: 1_267_000, percentage: 0.1, category: "10%" },
            {
              inf: 1_267_000,
              sup: 2_223_000,
              percentage: 0.15,
              category: "15%",
            },
            {
              inf: 2_223_000,
              sup: 4_445_000,
              percentage: 0.2,
              category: "20%",
            },
            {
              inf: 4_445_000,
              sup: Infinity,
              percentage: 0.25,
              category: "25%",
            },
          ],
        },
        //Fisicas con actividades lucrativas
        naturalLucrative: {
          terms: [
            {
              inf: 3_742_000,
              sup: 5_589_000,
              percentage: 0.1,
              category: "10%",
            },
            {
              inf: 5_589_000,
              sup: 9_322_000,
              percentage: 0.15,
              category: "15%",
            },
            {
              inf: 9_322_000,
              sup: 18_683_000,
              percentage: 0.2,
              category: "20%",
            },
            {
              inf: 18_683_000,
              sup: Infinity,
              percentage: 0.25,
              category: "25%",
            },
          ],
        },
        //Juridicas con actividades lucrativas
        legalLucrative: {
          terms: [
            {
              inf: 0,
              sup: 5_157_000,
              percentage: 0.05,
              category: "5%",
            },
            {
              inf: 5_157_000,
              sup: 7_737_000,
              percentage: 0.1,
              category: "10%",
            },
            {
              inf: 7_737_000,
              sup: 10_315_000,
              percentage: 0.15,
              category: "15%",
            },
            {
              inf: 10_315_000,
              sup: Infinity,
              percentage: 0.2,
              category: "20%",
            },
          ],
        },
      },
    },
  ];

  const termsToUse = termsByYear.find(({ year }) => year === currentYear)
    .taxTypes[selectedTaxType];

  const availableYears = termsByYear.map(({ year }) => year);

  const calculate = useCalculateRenta({ terms: termsToUse.terms });

  const [inputSalary, setInputSalary] = useState(null);

  const [result, setResult] = useState(null);

  const onChange = (event) => {
    setInputSalary(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(calculate({ salary: inputSalary }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-screen flex flex-col justify-between items-center bg-background text-white">
        <h1 className="text-black lg:text-3xl text-lg mt-10 mb-10 font-bold">
          Calculadora de impuesto de renta{" "}
          <select
            name="years"
            id="years"
            className="bg-background text-primary border-1 border-primary"
            onChange={(e) => setCurrentYear(Number(e.target.value))}
          >
            {availableYears.map((year) => (
              <option
                selected={year === currentYear}
                key={year}
                id={year}
                value={year}
              >
                {year}
              </option>
            ))}
          </select>
        </h1>

        <div>
          <div className="flex mb-5 pl-8 w-full justify-center">
            <select
              name="taxType"
              id="taxType"
              className="bg-white rounded-lg text-primary border-1 border-primary w-[294px] h-12 drop-shadow-lg"
              onChange={(e) => setSelectedTaxType(e.target.value)}
            >
              <option
                selected={"salariedAndRetired" === selectedTaxType}
                id="salariedAndRetired"
                value="salariedAndRetired"
              >
                Asalariados, retirados, jubilados
              </option>
              <option
                selected={"naturalLucrative" === selectedTaxType}
                id="naturalLucrative"
                value="naturalLucrative"
              >
                Persona física con actividad lucrativa
              </option>
              <option
                selected={"legalLucrative" === selectedTaxType}
                id="legalLucrative"
                value="legalLucrative"
              >
                Persona jurídica
              </option>
            </select>
          </div>
          <div className="flex flex-row justify-center items-center space-x-5 mb-5">
            <label className="text-primary text-2xl">₡</label>
            <input
              type="number"
              className="w-50 h-12 px-2 text-black rounded-lg drop-shadow-lg"
              onChange={onChange}
            />
            <button
              className="h-12 w-30 rounded-lg px-2 self-center text-lg drop-shadow-lg alg bg-primary"
              onClick={handleSubmit}
              type="submit"
            >
              Calcular
            </button>
          </div>

          {Boolean(result?.taxes) && (
            <table className="my-2 mx-auto rounded-lg bg-primary overflow-hidden">
              <thead className="m-10">
                <tr>
                  <th className="p-4 text-center font-bold underline hidden md:table-cell">
                    Monto
                  </th>
                  {result?.applyingTerms.map((c) => (
                    <th
                      key={c.category}
                      className="p-4 text-center font-bold underline hidden md:table-cell"
                    >
                      {c.category}
                    </th>
                  ))}
                  <th className="p-4 text-center font-bold underline hidden md:table-cell">
                    Impuesto
                  </th>
                  <th className="p-4 text-center font-bold underline hidden md:table-cell">
                    Neto
                  </th>
                </tr>
              </thead>
              <tbody className="m-10 flex-1 md:flex-none">
                <tr className="flex flex-col flex-no wrap md:table-row">
                  <td className="p-4 text-center">
                    <div className="flex">
                      <div className="md:hidden font-bold underline mr-10">
                        Salario
                      </div>
                      {toColon(result?.grossSalary)}
                    </div>
                  </td>
                  {result?.applyingTerms?.map((c, i) => (
                    <td key={c.amount + i} className="p-4 text-center">
                      <div className="flex">
                        <div className="md:hidden font-bold underline mr-10">
                          {c.category}
                        </div>
                        {c.amount ? toColon(c.amount) : "N/A"}
                      </div>
                    </td>
                  ))}
                  <td className="p-4 text-center">
                    <div className="flex">
                      <div className="md:hidden font-bold underline mr-10">
                        Impuesto
                      </div>
                      {toColon(result?.taxes)}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex">
                      <div className="md:hidden font-bold underline mr-10">
                        Neto
                      </div>
                      {toColon(result?.netSalary)}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
          {result && Boolean(!result.taxes) && (
            <p className="text-2xl text-primary my-10 text-center">No aplica</p>
          )}
        </div>

        <p className="text-black">v2.2 - {new Date().getFullYear()}</p>
      </div>
    </form>
  );
};

export default function Home() {
  return <HomeContent />;
}
