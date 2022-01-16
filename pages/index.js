import styles from '../styles/Home.module.css';
import { useForm, useWatch } from 'react-hook-form';


const HomeContent = () => {

  const limits = [
    { inf: 800_000, sup: 1_000_000, percentage: 0.1 },
    { inf: 1_000_000, sup: 2_000_000, percentage: 0.15 },
    { inf: 2_000_000, sup: 3_000_000, percentage: 0.2 },
    { inf: 3_000_000, sup: 4_000_000, percentage: 0.25 }
  ];

  const { register, control, handleSubmit } = useForm();


  const salary = useWatch({
    control,
    name: "salary", // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
    defaultValue: "default" // default value before the render
  });



  console.log(salary)

  return (
    <div className={styles.container}>

      <input type="number" {...register("salary", { valueAsNumber: true })} />

      <table>
        <tr>
          <th>dgdfg</th>
          <th>dgdfg</th>
          <th>dgdfg</th>
        </tr>

        <tr>
          <td>dgfg</td>

          <td>dgfg</td>
          <td>dgfg</td>
        </tr>
      </table>

    </div>
  )
};

export default function Home() {

  return (<form><HomeContent /></form>)

}

