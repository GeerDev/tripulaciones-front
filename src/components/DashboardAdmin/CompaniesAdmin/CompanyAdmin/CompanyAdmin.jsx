import { useDispatch, useSelector } from "react-redux";
import { confirm } from "../../../../features/company/companySlice";

const CompanyAdmin = () => {
    const { companies } = useSelector((state) => state.company);
    const enterprise = companies || []
    const dispatch = useDispatch();

    const confirmCompany = async (_id) => {
        await dispatch(confirm(_id));
      };

    const enterprises = enterprise.map((company) => {
      return (
        <div>
          <p>{company.name}</p>
          <p>{company.nameCEO}</p>
          <p>{company.phone}</p>
          <p>{company.email}</p>
          <p>{company.employees}</p>
          <p>{company.companyType}</p>

    {company.confirmed ?
    <h3>Ole! Empresa registrada con exito</h3>
    :
    <button onClick={() => confirmCompany(company._id)}>Confirmar NO TOCAR ESTE BOTON POR FAVOR!!!</button>
    }
    </div>
      );
    });
    return <div>{enterprises}</div>;

  }
  
  export default CompanyAdmin