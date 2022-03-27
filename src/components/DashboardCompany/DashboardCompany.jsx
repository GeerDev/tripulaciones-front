import ProfileCompany from './ProfileCompany/ProfileCompany'
import RankingCompanies from './RankingCompanies/RankingCompanies'
import SearchCompany from './SearchCompany/SearchCompany'
import StatsCompany from './StatsCompany/StatsCompany'
const DashboardCompany = () => {

    return (
      <>
      <SearchCompany />
      <ProfileCompany />
      <StatsCompany />
      <RankingCompanies />
      </>
    )
  }
  
  export default DashboardCompany