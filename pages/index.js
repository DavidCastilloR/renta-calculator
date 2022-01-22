import { useState } from 'react';
import { useCalculateRenta } from '../hooks';
import { toColon } from '../utils';


const HomeContent = () => {

  const terms = [
    { inf: 863_000, sup: 1_267_000, percentage: 0.1, category: '10%' },
    { inf: 1_267_000, sup: 2_223_000, percentage: 0.15, category: '15%' },
    { inf: 2_223_000, sup: 4_445_000, percentage: 0.2, category: '20%' },
    { inf: 4_445_000, sup: Infinity, percentage: 0.25, category: '25%' }
  ];

  const calculate = useCalculateRenta({ terms });

  const [inputSalary, setInputSalary] = useState(null);

  const [result, setResult] = useState(null);


  const onChange = (event) => {
    setInputSalary(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(calculate({ salary: inputSalary }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-screen lg:p-80 flex flex-col justify-center items-center bg-background text-white">

        <h1 className="text-black lg:text-3xl text-lg mt-10 lg:mt-20 lg:absolute lg:top-0 mb-10 font-bold">Calculadora de impuesto de renta</h1>

        <div className="flex lg:flex-row flex-col justify-center space-x-5 space-y-2">
          <div className="flex justify-center items-center"><label className="text-primary text-2xl">₡</label><input type="number" className="w-50 h-12 text-black p-2 rounded-lg drop-shadow-lg" onChange={onChange} /></div>
          <button className="h-12 rounded-lg px-2 text-lg drop-shadow-lg bg-primary" onClick={handleSubmit} type='submit'>Calcular</button>
        </div>


        {Boolean(result?.taxes) &&
          <table className="my-10 rounded-lg bg-primary overflow-hidden">
            <thead className="m-10">
              <tr>
                <th className="p-4 text-center font-bold underline hidden md:table-cell">Salario</th>
                {result?.applyingTerms.map(c => (<th key={c.category} className="p-4 text-center font-bold underline hidden md:table-cell">{c.category}</th>))}
                <th className="p-4 text-center font-bold underline hidden md:table-cell">Impuesto</th>
                <th className="p-4 text-center font-bold underline hidden md:table-cell">Neto</th>
              </tr>

            </thead>
            <tbody className="m-10 flex-1 md:flex-none">
              <tr className="flex flex-col flex-no wrap md:table-row">

                <td className="p-4 text-center">
                  <div className="flex">
                    <div className="md:hidden font-bold underline mr-10">Salario</div>
                    {toColon(result?.grossSalary)}
                  </div>
                </td>
                {result?.applyingTerms?.map((c, i) => (<td key={c.amount + i} className="p-4 text-center">
                  <div className="flex">
                    <div className="md:hidden font-bold underline mr-10">{c.category}</div>
                    {c.amount ? toColon(c.amount) : 'N/A'}
                  </div >
                </td>))}
                <td className="p-4 text-center">
                  <div className="flex">
                    <div className="md:hidden font-bold underline mr-10">Impuesto</div>
                    {toColon(result?.taxes)}
                  </div >
                </td>
                <td className="p-4 text-center">
                  <div className="flex">
                    <div className="md:hidden font-bold underline mr-10">Neto</div>
                    {toColon(result?.netSalary)}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        }
        {result && Boolean(!result.taxes) && <p className="text-2xl text-primary my-10">No aplica</p>}



        <p className="absolute bottom-0 text-black">v1.1. Creado por:  <a className="text-primary" href="mailto:me@david-castillo.com">David C.</a></p>
      </div>
    </form>
  )
};

export default function Home() {

  return (<HomeContent />)

}

