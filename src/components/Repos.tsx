import {FC} from 'react';
import {IRepositories} from '../data/data';
import {EachRep} from './EachRep';

interface IRepProps {
    currentItems: IRepositories[];
}

export const Repos: FC<IRepProps> = ({currentItems}) => {
    return (
        <div>
            {currentItems &&
                currentItems.map((repos) => <EachRep repos={repos} />)}
        </div>
    );
};

