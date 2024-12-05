import {FC, useEffect, useState} from 'react';
import { Layout } from '../../components/layouts';
import {Button, Dialog, DropDown, EmployeesList, TextField} from '../../components';
import './departmentsPageStyles.scss'
import { Department, Employee } from "../../types/models";
import {DropDownItem} from "../../components/dropDown/DropDownProps";

const fakeEmployeesData = [
    { id: 1, lastName: 'Иванов', firstName: 'Иван', midleName: 'Иванович', birthDate: new Date().toISOString(), email: 'ivanov@mail.ru', phoneNumber: '8-800-535-35-35' },
    { id: 2, lastName: 'Петров', firstName: 'Сергей', midleName: 'Дмитриевич', birthDate: new Date().toISOString(), email: 'petrov@mail.ru', phoneNumber: '8-800-535-35-36'},
    { id: 3, lastName: 'Джон', firstName: 'Смитт', birthDate: new Date().toISOString(), email: 'john@mail.ru', phoneNumber: '8-800-535-35-37'},
    { id: 4, lastName: 'Рябчикова', firstName: 'Лидия', midleName: 'Анатольевич', birthDate: new Date().toISOString(), email: 'ryaba@mail.ru', phoneNumber: '8-800-535-35-38'},
    { id: 5, lastName: 'Семенов', firstName: 'Олег', midleName: 'Артемович', birthDate: new Date().toISOString(), email: 'semenov@mail.ru', phoneNumber: '8-800-535-35-39'},
];

const fakeDepartmentsData = [
    { id: 1, name: 'Отдел 1', employees: [] },
    { id: 2, name: 'Отдел 2', employees: fakeEmployeesData },
    { id: 3, name: 'Отдел 3', employees: [] },
] as Array<Department>;

/*const fakeDepartmentData = [
    {text: 'Отдел 1', value: '1'},
    {text: 'Отдел 2', value: '2'},
    {text: 'Отдел 3', value: '3'}
];*/

export const DepartmentsPage: FC = () => {
   const [departmentsData, setDepartmentsData] = useState<Array<Department>>([]);
   const [employeesData, setEmployeesData] = useState<Array<Employee>>([]);
   const [selectedDepartmentId, setSelectedDepartmentId] = useState<number>();
   const [selectedEmployeeId, setSelectedEmployeeId] = useState<number>();
   const [showEmployeeDialog,  setShowEmployeeDialog] = useState(false);
   const [userActionMode, setUserActionMode] = useState<'create' | 'edit'>('create');
   const [userToEdit, setUserToEdit] = useState(0);

   const [lastName, setLastName] = useState('');
   const [firstName, setFirstName] = useState('');
   const [midleName, setMidleName] = useState('');

   useEffect(() => {
      setTimeout(()=> {
          setDepartmentsData(fakeDepartmentsData);
          if(Array.isArray(fakeDepartmentsData) && fakeDepartmentsData.length) {
              setSelectedDepartmentId(fakeDepartmentsData[0].id);
          }
      }, 2000);
   }, []);

   useEffect(() => {
       const selectedDepartment = departmentsData.find(d => d.id === selectedDepartmentId);
       setEmployeesData(selectedDepartment ? selectedDepartment.employees : []);
   }, [departmentsData, selectedDepartmentId]);

    useEffect(() => {
        clearEmployeeDialogFields();
        if (userActionMode === 'edit') {
            const employee = userActionMode === 'edit'
                ? employeesData.find(e => e.id === userToEdit)
                : undefined;

            setLastName(employee?.lastName ?? '');
            setFirstName(employee?.firstName ?? '');
            setMidleName(employee?.midleName ?? '');
        }
    }, [employeesData, userActionMode, userToEdit])

    const clearEmployeeDialogFields = () => {
        setLastName('');
        setFirstName('');
        setMidleName('');
    }

   const createEmployeeHandler = () => {
       setUserActionMode('create');
       setShowEmployeeDialog(true);
   }

   const editEmployeeHandler = (id: number) => {
       setUserActionMode('edit');
       setUserToEdit(id);
       setShowEmployeeDialog(true);
   }

   const userDialogContentRenderer = () => {
       return (
               <>
                   <TextField labelText="Фамилия" value={lastName} onChange={(val) => setLastName(val)}/>
                   <TextField labelText="Имя" value={firstName} onChange={(val) => setFirstName(val)}/>
                   <TextField labelText="Отчество" value={midleName} onChange={(val) => setMidleName(val)}/>
               </>
       );
   }

   const closeEmployyeDialogHandler = () => {
       setShowEmployeeDialog(false);
       clearEmployeeDialogFields();
   }

   const departmentChangeHandler = (id?: string) => {
        const _id: number | undefined = !id ? undefined : +id;
        setSelectedDepartmentId(_id);
   }

   const  onEmployeeSelectedHandler = (id: number) => {
        setSelectedEmployeeId(id);
   }

    return (
        <Layout>
            <Dialog title={userActionMode !== 'edit' ? 'Добавить сотрудника' : 'Изменить сотрудника'}
                open={showEmployeeDialog}
                    onSave={() => {}}
                    onCancel={closeEmployyeDialogHandler}
            >
                {userDialogContentRenderer()}
            </Dialog>
            <div className="dep-page">
                <div className="dep-page__users-list-container">
                    <DropDown items={departmentsData.map(dd => {
                        return {
                            text: dd.name,
                            value: dd.id.toString()
                        } as DropDownItem;
                    })}
                        label="Отделы:"
                        selectedChanged={(val) => departmentChangeHandler(val)}
                    />
                    <EmployeesList employeesList={employeesData}
                    onItemClick={(id) => onEmployeeSelectedHandler(id)}
                    onItemDelete={(id) => console.log('delete', id)}
                    onItemEdit={editEmployeeHandler}
                    />
                    <Button text="Добавить сотрудника" className="dep-page__add-user-btn" onClick={createEmployeeHandler}/>
                </div>
                <div>
                    <Dialog title={userActionMode !== 'edit' ? 'Добавить сотрудника' : 'Изменить сотрудника'}
                        open={showEmployeeDialog}
                        onSave={() => {}}
                        onCancel={closeEmployyeDialogHandler}
                    >
                        {userDialogContentRenderer()}
                    </Dialog>

                    <div>
                        <span>ФИО</span>
                        <div>*</div>
                    </div>
                    <div>
                        <div>Личные данные</div>
                        <div>Данные о работе</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}