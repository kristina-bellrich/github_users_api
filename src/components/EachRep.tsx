import { FC } from 'react';
import {IRepositories} from '../data/data';

interface IEachRepProps {
    repos: IRepositories;
}

const EachRep: FC<IEachRepProps> = ({repos}) => {
    return (
        <div className='eachRep'>
            <p className='name'> {repos.name}</p>
            <p className='des'>{repos.description}</p>
        </div>
    );
};
export {EachRep};
