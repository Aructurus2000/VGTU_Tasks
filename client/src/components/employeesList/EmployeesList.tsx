import { FC, useState } from 'react';
import { EmployeesListProps } from './EmployeesListProps';
import './employeesListStyles.scss'
import clsx from 'classnames';


export const EmployeesList: FC<EmployeesListProps> = props => {
    const { employeesList, onItemClick } = props;
    const [selectedUser, setSelectedUser] = useState(0);

    const employeeClickHandler = (id: number) => {
        setSelectedUser(id);
        onItemClick && onItemClick(id);
    }

    const isSelected = (id: number) => selectedUser === id;

    return (
        <div className="empl-list">
            {employeesList.map(user => {
                return (
                    <div key={user.id}
                         className={clsx('empl-list__item', {'empl-list__item_selected': isSelected(user.id)})}
                         onClick={() => employeeClickHandler(user.id)}
                    >
                        {`${user.lastName} ${user.firstName} ${user.midleName ?? ''}`.trim()}
                    </div>
                );
            })}
        </div>
    );
}