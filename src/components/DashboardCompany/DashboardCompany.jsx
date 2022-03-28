import ProfileCompany from './ProfileCompany/ProfileCompany'
import RankingCompanies from './RankingCompanies/RankingCompanies'
import SearchCompany from './SearchCompany/SearchCompany'
import StatsCompany from './StatsCompany/StatsCompany'
import './DashboardCompany.scss'

const DashboardCompany = () => {

    return (
      
      <>
      <SearchCompany />
      <hr />
      <StatsCompany />
      <hr />
      <RankingCompanies />
      </>
    )
  }
  
  export default DashboardCompany