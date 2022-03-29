import ProfileCompany from './ProfileCompany/ProfileCompany'
import RankingCompanies from './RankingCompanies/RankingCompanies'
import SearchCompany from './SearchCompany/SearchCompany'
import StatsCompany from './StatsCompany/StatsCompany'
import './DashboardCompany.scss'

const DashboardCompany = () => {

    return (
      
      <>
      <div className="container-stats-search card animate__animated animate__fadeIn">
        <div className="stats-company-container">
      <StatsCompany />
        </div>
        <div className="search-company-container">
      <RankingCompanies />
        </div>
      </div>
      <hr />
      <hr />
      <SearchCompany />
      </>
    )
  }
  
  export default DashboardCompany