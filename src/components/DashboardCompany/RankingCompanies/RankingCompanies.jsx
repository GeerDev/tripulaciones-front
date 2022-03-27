import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRankingCompanies } from '../../../features/company/companySlice'

const RankingCompanies = () => {

  const dispatch = useDispatch()
  const { companies } = useSelector( state => state.company)

  useEffect(() => {
    dispatch(getRankingCompanies())
  },[])

  const mapeo = companies.map(elemento => {
    return elemento.name
  })

  const mapeo2 = companies.map(elemento => {
    return elemento.score
  })

  console.log(mapeo);
  console.log(mapeo2);

  return (
    <div>RankingCompanies... A la espera de gráfico de barras</div>
  )
}

export default RankingCompanies