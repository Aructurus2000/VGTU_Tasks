import { FC } from 'react';
import { DownloadIcon, TrashIcon } from '../../assets/icons';
import { FilesListProps } from './FilesListProps';
import clsx from 'classnames';
import './FilesListStyles.scss'

export const FilesList: FC<FilesListProps> = props => {
    const {
        filesList,
        onFileDelete,
        onFileDownload
    } = props;

    const downloadHandler = (id: number) => {
        onFileDownload && onFileDownload(id);
    }

    const deleteHandler = (id: number) => {
        onFileDelete && onFileDelete(id);
    }

    return (
        <div className="file-list">
            {filesList.map(file => {
                return (
                    <div key={file.id} className="file-list__item">
                        <div>
                        {file.displayName}
                        </div>
                        <div className="file-list__item_actions">
                        <DownloadIcon width={18} height={18} onClick={() => {downloadHandler(file.id)}} />
                        <TrashIcon width={18} height={18} onClick={() => {deleteHandler(file.id)}} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}