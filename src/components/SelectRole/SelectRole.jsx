import { useSelector } from 'react-redux'

const SelectRole = () => {

  const { user } = useSelector( (state) => state.user )
  console.log(user.user.role);

    return (
      <>
      
      </>
    )
  }
  
  export default SelectRole