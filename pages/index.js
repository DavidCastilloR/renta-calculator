import { useState } from 'react';
import styles from '../styles/Home.module.css';


const HomeContent = () => {

  const [salary, setSalary] = useState(0);
  const [categories, setCategories] = useState([]);

  const terms = [
    { inf: 863_000, sup: 1_267_000, percentage: 0.1, category: '10%' },
    { inf: 1_267_000, sup: 2_223_000, percentage: 0.15, category: '15%' },
    { inf: 2_223_000, sup: 4_445_000, percentage: 0.2, category: '20%' },
    { inf: 4_445_000, sup: Infinity, percentage: 0.25, category: '25%' }
  ];

  const onChange = (event) => {
    setSalary(event.target.value);
  }


  const calculate = () => {
    let arrCats = []
    for (const term of terms) {
      if (salary < term.sup && salary >= term.inf) {
        arrCats.push({ ...term, amount: (salary - term.inf) * term.percentage });
        setCategories(arrCats)
        return;
      }
      arrCats.push({ ...term, amount: (term.sup - term.inf) * term.percentage });
    }
  }







  return (
    <div className={styles.container}>

      <input type="number" onChange={onChange} />
      <button onClick={calculate}>Calcular</button>

      <table>
        <tr>
          <th>Salario</th>
          {categories.map(c => (<th>{c.category}</th>))}
          <th>impuesto</th>
          <th>neto</th>
        </tr>

        <tr>
          <td>{salary}</td>
          {categories.map((c, i) => (<td style={{ paddingLeft: 12 }}>{c.amount}</td>))}
          <td> {categories.reduce((z, n) => z + n.amount, 0)}</td>
          <td> {salary - categories.reduce((z, n) => z + n.amount, 0)}</td>
        </tr>
      </table>

    </div>
  )
};

export default function Home() {

  return (<HomeContent />)

}

