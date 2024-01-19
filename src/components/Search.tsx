import {FC} from 'react';
import {IoSearch} from 'react-icons/io5';

export const Search: FC = () => {
    return (
        <div className='searchContainer'>
            <div className='icon'>
                <IoSearch fill='#808080' size={100}/>
                <span>Start with searching a GitHub user</span>
            </div>
        </div>
    );
};
