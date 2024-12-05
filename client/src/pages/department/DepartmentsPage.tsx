import {FC, useEffect, useState} from 'react';
import { Layout } from '../../components/layouts';
import {Button, Dialog, DropDown, EmployeesList, TextField} from '../../components';
import './departmentsPageStyles.scss'
import { Employee } from "../../types/models";

const fakeEmployyesData = [
    { id: 1, lastName: 'Иванов', firstName: 'Иван', midleName: 'Иванович' },
    { id: 2, lastName: 'Петров', firstName: 'Сергей', midleName: 'Дмитриевич' },
    { id: 3, lastName: 'Джон', firstName: 'Смитт' },
    { id: 4, lastName: 'Рябчикова', firstName: 'Лидия', midleName: 'Анатольевич' },
    { id: 5, lastName: 'Семенов', firstName: 'Олег', midleName: 'Артемович' },
];

export const DepartmentsPage: FC = () => {
   const [employeesData, setEmployeesData] = useState<Array<Employee>>([]);
   const [showEmployeeDialog,  setShowEmployeeDialog] = useState(false);
   const [userActionMode, setUserActionMode] = useState<'create' | 'edit'>('create');
   const [userToEdit, setUserToEdit] = useState(0);

   const [lastName, setLastName] = useState('');
   const [firstName, setFirstName] = useState('');
   const [midleName, setMidleName] = useState('');

   useEffect(() => {
       setEmployeesData(fakeEmployyesData);
   }, []);

    useEffect(() => {
        setLastName('');
        setFirstName('');
        setMidleName('');
        if(userActionMode === 'edit') {
            const employee = userActionMode === 'edit'
            ? employeesData.find(e => e.id === userToEdit)
            : undefined;

        setLastName(employee?.lastName ?? '');
        setFirstName(employee?.firstName ?? '');
        setMidleName(employee?.midleName ?? '')
        }
    }, [employeesData, userActionMode, userToEdit]);

   const  createEmployeeHandler = () => {
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

    return (
        <Layout>
            <div className="dep-page">
                <div className="dep-page__users-list-container">
                    <DropDown items={[{
                        text: 'Отдел 1', value: '1'
                    },{
                        text: 'Отдел 2', value: '2'
                    },{
                        text: 'Отдел 3', value: '3'
                    }]}
                    label="Отделы:"
                    selectedChanged={(val) => console.log(val)}
                    />
                    <EmployeesList employeesList={employeesData}
                    onItemClick={(id) => console.log('select', id)}
                    onItemDelete={(id) => console.log('delete', id)}
                    onItemEdit={editEmployeeHandler}
                    />
                    <Button text="Добавить сотрудника" className="dep-page__add-user-btn" onClick={createEmployeeHandler}/>
                </div>
                <div>
                    <Dialog title={userActionMode !== 'edit' ? 'Добавить сотрудника' : 'Изменить сотрудника'}
                        open={showEmployeeDialog}
                        onSave={() => {}}
                        onCancel={() => setShowEmployeeDialog(false)}
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