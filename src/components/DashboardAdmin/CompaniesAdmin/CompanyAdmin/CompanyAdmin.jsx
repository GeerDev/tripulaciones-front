import { useDispatch, useSelector } from "react-redux";
import { confirm } from "../../../../features/company/companySlice";
import { Table, Button } from 'antd';

const CompanyAdmin = () => {
    const { companies } = useSelector((state) => state.company);
    const enterprise = companies || []
    const dispatch = useDispatch();

    const confirmCompany = async (_id) => {
        await dispatch(confirm(_id));
      };

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'NameCEO',
          dataIndex: 'nameCEO',
          key: 'nameCEO',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
          title: 'CompanyType',
          dataIndex: 'companyType',
          key: 'companyType',
        },
        {
          title: 'Buttons',
          dataIndex: 'buttons',
          key: 'buttons',
          render: buttons => 
            {
              return (
              buttons[0] ?
              <h3>Ole! Empresa registrada con exito</h3>
              :
              <Button onClick={() => confirmCompany(buttons[1])}>Confirmar Empresa</Button>
              )
            }
        },
      ];

    const enterprises = enterprise.map((company) => {
    return {
      key: company._id,
      name: company.name,
      nameCEO: company.nameCEO,
      email: company.email,
      phone: company.phone,
      companyType: company.companyType,
      buttons: [company.confirmed, company._id]
    }
  });

    return <Table dataSource={enterprises} columns={columns} />;;

  }
  
  export default CompanyAdmin

              // company.confirmed ? 
              // <h3>Ole! Empresa registrada con exito</h3>
              // :
              // <Button onClick={() => confirmCompany(company._id)}>Confirmar</Button>