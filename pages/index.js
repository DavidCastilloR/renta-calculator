import { useState } from "react";
import { useCalculateRenta } from "../hooks";
import { toColon } from "../utils";

const HomeContent = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [selectedTaxType, setSelectedTaxType] = useState("salariedAndRetired");

  const [activeTab, setActiveTab] = useState("calculator");

  const termsByYear = [
    {
      //*********2026************
      year: 2026,
      taxTypes: {
        // Asalariados, pensionados
        salariedAndRetired: {
          terms: [
            { inf: 918_000, sup: 1_347_000, percentage: 0.1, category: "10%" },
            {
              inf: 1_347_000,
              sup: 2_364_000,
              percentage: 0.15,
              category: "15%",
            },
            {
              inf: 2_364_000,
              sup: 4_727_000,
              percentage: 0.2,
              category: "20%",
            },
            {
              inf: 4_727_000,
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
              inf: 6_244_000,
              sup: 8_329_000,
              percentage: 0.1,
              category: "10%",
            },
            {
              inf: 8_329_000,
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
        legalLucrative: {
          terms: [
            {
              inf: 0,
              sup: 5_621_000,
              percentage: 0.05,
              category: "5%",
            },
            {
              inf: 5_621_000,
              sup: 8_433_000,
              percentage: 0.1,
              category: "10%",
            },
            {
              inf: 8_433_000,
              sup: 11_243_000,
              percentage: 0.15,
              category: "15%",
            },
            {
              inf: 11_243_000,
              sup: Infinity,
              percentage: 0.2,
              category: "20%",
            },
          ],
        },
      },
    },
    {
      //*********2025************
      year: 2025,
      taxTypes: {
        // Asalariados, pensionados
        salariedAndRetired: {
          terms: [
            { inf: 922_000, sup: 1_352_000, percentage: 0.1, category: "10%" },
            {
              inf: 1_352_000,
              sup: 2_373_000,
              percentage: 0.15,
              category: "15%",
            },
            {
              inf: 2_373_000,
              sup: 4_745_000,
              percentage: 0.2,
              category: "20%",
            },
            {
              inf: 4_745_000,
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
              inf: 4_094_000,
              sup: 6_115_000,
              percentage: 0.1,
              category: "10%",
            },
            {
              inf: 6_115_000,
              sup: 10_200_000,
              percentage: 0.15,
              category: "15%",
            },
            {
              inf: 10_200_000,
              sup: 20_442_000,
              percentage: 0.2,
              category: "20%",
            },
            {
              inf: 20_442_000,
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
              sup: 5_642_000,
              percentage: 0.05,
              category: "5%",
            },
            {
              inf: 5_642_000,
              sup: 8_465_000,
              percentage: 0.1,
              category: "10%",
            },
            {
              inf: 8_465_000,
              sup: 11_286_000,
              percentage: 0.15,
              category: "15%",
            },
            {
              inf: 11_286_000,
              sup: Infinity,
              percentage: 0.2,
              category: "20%",
            },
          ],
        },
      },
    },
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

  const termsToUse =
    termsByYear.find(({ year }) => year === currentYear)?.taxTypes[
      selectedTaxType
    ] ?? termsByYear[0].taxTypes[selectedTaxType];

  const availableYears = termsByYear.map(({ year }) => year);

  const calculate = useCalculateRenta({ terms: termsToUse.terms });

  const [inputSalary, setInputSalary] = useState(null);

  const result =
    inputSalary !== null ? calculate({ salary: inputSalary }) : null;

  const onChange = (event) => {
    setInputSalary(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const chartYears = [...termsByYear].sort((a, b) => a.year - b.year);
  const chartTerms = chartYears.map(({ year, taxTypes }) => ({
    year,
    terms: taxTypes[selectedTaxType].terms,
  }));
  const chartCategories = [
    ...new Set(chartTerms.flatMap(({ terms }) => terms.map(({ category }) => category))),
  ];
  const chartMaximum = Math.max(
    ...chartTerms.flatMap(({ terms }) => terms.map(({ inf }) => inf))
  );
  const chartScaleMaximum = Math.ceil(chartMaximum / 5_000_000) * 5_000_000;
  const chartWidth = 760;
  const chartHeight = 320;
  const plotLeft = 76;
  const plotRight = 744;
  const plotTop = 24;
  const plotBottom = 258;
  const chartX = (index) =>
    plotLeft + (index / (chartYears.length - 1)) * (plotRight - plotLeft);
  const chartY = (amount) =>
    plotBottom - (amount / chartScaleMaximum) * (plotBottom - plotTop);
  const chartColors = ["#7b9b70", "#d69a57", "#6388aa", "#ae7a9b"];
  const formatChartAmount = (amount) =>
    `₡${(amount / 1_000_000).toLocaleString("es-CR", {
      maximumFractionDigits: 2,
    })} M`;

  return (
    <main className="page-shell">
      <form className="calculator" onSubmit={handleSubmit}>
        <header className="calculator-header">
          <h1>Calculadora de Renta</h1>
          <label className="year-field" htmlFor="years">
            <span>Año</span>
            <select
              name="years"
              id="years"
              value={currentYear}
              onChange={(e) => setCurrentYear(Number(e.target.value))}
            >
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>
        </header>

        <nav className="tabs" role="tablist" aria-label="Secciones">
          <button
            id="calculator-tab"
            className={activeTab === "calculator" ? "active" : ""}
            type="button"
            role="tab"
            aria-selected={activeTab === "calculator"}
            aria-controls="calculator-panel"
            onClick={() => setActiveTab("calculator")}
          >
            Calcular
          </button>
          <button
            id="chart-tab"
            className={activeTab === "chart" ? "active" : ""}
            type="button"
            role="tab"
            aria-selected={activeTab === "chart"}
            aria-controls="chart-panel"
            onClick={() => setActiveTab("chart")}
          >
            Variación de tramos
          </button>
        </nav>

        {activeTab === "calculator" ? (
        <div id="calculator-panel" role="tabpanel" aria-labelledby="calculator-tab">
        <div className="form-fields">
          <label className="field" htmlFor="taxType">
            <span>Contribuyente</span>
            <select
              name="taxType"
              id="taxType"
              value={selectedTaxType}
              onChange={(e) => setSelectedTaxType(e.target.value)}
            >
              <option value="salariedAndRetired">
                Asalariados, retirados, jubilados
              </option>
              <option value="naturalLucrative">
                Persona física con actividad lucrativa
              </option>
              <option value="legalLucrative">Persona jurídica</option>
            </select>
          </label>

          <label className="field" htmlFor="salary">
            <span>Ingreso mensual</span>
            <span className="salary-input">
              <span aria-hidden="true">₡</span>
              <input
                id="salary"
                type="number"
                inputMode="numeric"
                placeholder="0"
                onChange={onChange}
              />
            </span>
          </label>
        </div>
        <button className="visually-hidden" type="submit">Calcular</button>

        {Boolean(result?.taxes) && (
          <section className="results" aria-live="polite">
            <div className="summary">
              <div>
                <span>Bruto</span>
                <strong>{toColon(result?.grossSalary)}</strong>
              </div>
              <div>
                <span>Impuesto</span>
                <strong>{toColon(result?.taxes)}</strong>
              </div>
              <div className="net-result">
                <span>Neto</span>
                <strong>{toColon(result?.netSalary)}</strong>
              </div>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Monto</th>
                    {result?.applyingTerms.map((term) => (
                      <th key={term.category}>{term.category}</th>
                    ))}
                    <th>Impuesto</th>
                    <th>Neto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{toColon(result?.grossSalary)}</td>
                    {result?.applyingTerms?.map((term, index) => (
                      <td key={term.amount + index}>
                        {term.amount ? toColon(term.amount) : "N/A"}
                      </td>
                    ))}
                    <td>{toColon(result?.taxes)}</td>
                    <td>{toColon(result?.netSalary)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}
        {result && Boolean(!result.taxes) && (
          <p className="no-tax-result" aria-live="polite">No aplica</p>
        )}
        </div>
        ) : (
          <section
            id="chart-panel"
            className="chart-panel"
            role="tabpanel"
            aria-labelledby="chart-tab"
          >
            <div className="chart-controls">
              <label className="field" htmlFor="chartTaxType">
                <span>Contribuyente</span>
                <select
                  id="chartTaxType"
                  value={selectedTaxType}
                  onChange={(e) => setSelectedTaxType(e.target.value)}
                >
                  <option value="salariedAndRetired">
                    Asalariados, retirados, jubilados
                  </option>
                  <option value="naturalLucrative">
                    Persona física con actividad lucrativa
                  </option>
                  <option value="legalLucrative">Persona jurídica</option>
                </select>
              </label>
              <p className="chart-caption">
                Inicio de cada tasa · colones mensuales
              </p>
            </div>

            <div className="chart-scroll">
              <svg
                className="bracket-chart"
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                role="img"
                aria-label="Variación anual del ingreso donde inicia cada tramo impositivo"
              >
                {[0, 1, 2, 3, 4].map((tick) => {
                  const amount = (chartScaleMaximum / 4) * tick;
                  const y = chartY(amount);
                  return (
                    <g key={tick}>
                      <line
                        className="chart-gridline"
                        x1={plotLeft}
                        x2={plotRight}
                        y1={y}
                        y2={y}
                      />
                      <text className="chart-axis-label" x={plotLeft - 10} y={y + 4}>
                        {formatChartAmount(amount)}
                      </text>
                    </g>
                  );
                })}
                {chartYears.map(({ year }, index) => (
                  <g key={year}>
                    {year === currentYear && (
                      <line
                        className="chart-selected-year"
                        x1={chartX(index)}
                        x2={chartX(index)}
                        y1={plotTop}
                        y2={plotBottom}
                      />
                    )}
                    <text
                      className={`chart-year${year === currentYear ? " selected" : ""}`}
                      x={chartX(index)}
                      y={plotBottom + 25}
                    >
                      {year}
                    </text>
                  </g>
                ))}
                {chartCategories.map((category, categoryIndex) => {
                  const points = chartTerms.map(({ year, terms }, index) => {
                    const threshold = terms.find(
                      (term) => term.category === category
                    )?.inf;
                    return threshold === undefined
                      ? null
                      : {
                          year,
                          amount: threshold,
                          x: chartX(index),
                          y: chartY(threshold),
                        };
                  }).filter(Boolean);
                  return (
                    <g key={category}>
                      <polyline
                        className="chart-series"
                        points={points.map(({ x, y }) => `${x},${y}`).join(" ")}
                        stroke={chartColors[categoryIndex % chartColors.length]}
                      />
                      {points.map(({ year, amount, x, y }) => (
                        <circle
                          key={year}
                          className="chart-point"
                          cx={x}
                          cy={y}
                          r={year === currentYear ? 5 : 3.5}
                          fill={chartColors[categoryIndex % chartColors.length]}
                        >
                          <title>{`${year} · ${category}: ${toColon(amount)}`}</title>
                        </circle>
                      ))}
                    </g>
                  );
                })}
              </svg>
            </div>
            <div className="chart-legend" aria-label="Tasas">
              {chartCategories.map((category, index) => (
                <span key={category}>
                  <i style={{ backgroundColor: chartColors[index % chartColors.length] }} />
                  {category}
                </span>
              ))}
            </div>
          </section>
        )}
      </form>
    </main>
  );
};

export default function Home() {
  return <HomeContent />;
}
