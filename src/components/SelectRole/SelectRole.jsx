import { useSelector } from 'react-redux'

const SelectRole = () => {

  const { user } = useSelector( (state) => state.user )
  console.log(user);

    return (
      <div>SelectRole</div>
    )
  }
  
  export default SelectRole