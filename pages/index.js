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
      <div className="h-screen p-80 flex flex-col justify-center items-center bg-background text-white">

        <div className="space-x-5">
          <label className="text-primary text-2xl">₡</label><input type="number" className="w-50 h-12 text-black p-2 rounded-lg drop-shadow-lg" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" onChange={onChange} />
          <button className="h-12 rounded-lg px-2 text-lg drop-shadow-lg bg-primary" onClick={handleSubmit} type='submit'>Calcular</button>
        </div>


        {Boolean(result?.taxes) &&
          <table className="my-10 rounded-lg bg-primary">
            <thead className="m-10">
              <tr >
                <th className="p-4 text-center font-bold underline">Salario</th>
                {result?.applyingTerms.map(c => (<th key={c.category} className="p-4 text-center font-bold underline">{c.category}</th>))}
                <th className="p-4 text-center font-bold underline">Impuesto</th>
                <th className="p-4 text-center font-bold underline">Neto</th>
              </tr>
            </thead>
            <tbody className="m-10">
              <tr >
                <td className="p-4 text-center">{toColon(result?.grossSalary)}</td>
                {result?.applyingTerms?.map((c, i) => (<td key={c.amount + i} className="p-4 text-center">{c.amount ? toColon(c.amount) : 'N/A'}</td>))}
                <td className="p-4 text-center"> {toColon(result?.taxes)}</td>
                <td className="p-4 text-center"> {toColon(result?.netSalary)}</td>
              </tr>
            </tbody>
          </table>
        }
        {result && Boolean(!result.taxes) && <p className="text-2xl text-primary my-10">No aplica</p>}



        <p className="absolute bottom-0">v1.1. Creado por:  <a className="text-primary" href="mailto:me@david-castillo.com">David C.</a></p>
      </div>
    </form>
  )
};

export default function Home() {

  return (<HomeContent />)

}

