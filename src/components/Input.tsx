import { ChangeEventHandler, FC } from 'react';
import {IoSearch} from 'react-icons/io5';

interface SearchInputProps {
    onChange: ChangeEventHandler<HTMLInputElement>;
    value: string;
    isError: boolean;
}

export const Input: FC<SearchInputProps> = ({onChange, value, isError}) => {
    return (
        <div className='inputWithIcon'>
            <input
                type='text'
                value={value}
                onChange={onChange}
                className='input'
                placeholder='Enter GitHub username'
            />
            {isError && <p>This field is required</p>}
            <IoSearch
                fill='#808080'
                style={{position: 'absolute', top: '15%', left: '18px'}}
            />
        </div>
    );
};
