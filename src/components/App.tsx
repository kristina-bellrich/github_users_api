import '../App.css';
import  {useState, FC, ChangeEventHandler} from 'react';
import {FaGithub} from 'react-icons/fa6';
import {useForm} from 'react-hook-form';
import { useDebounce } from 'usehooks-ts'
import {Search} from './Search';
import {Users} from './Users';
import {PaginatedItems} from './PaginatedItems';
import {useGitHubData} from './useGitHubData';
import { Loading } from './Loading';
import { Input } from './Input';

interface FormData {
    inputField: string;
}

const App: FC = () => {
    const [name, setName] = useState('');
    const debouncedValue = useDebounce<string>(name, 1500);
    const {
        formState: {errors},
    } = useForm<FormData>();

    const {user, repositories, isEmpty} = useGitHubData({
        username: debouncedValue,
    });

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.currentTarget.value);
    };

    if (isEmpty){
        return <Loading/>
    }
    return (
        <div className='container'>
            <form className='nav' >
                <FaGithub fill='white' size={28}/>
                <Input
          value={name}
          onChange={handleOnChange}
          isError={!!errors.inputField}
        />
            </form>

            {!user ? (
                <Search />
            ) : (
                <div className='flex'>
                    <div className='box '>
                        <Users users={user } />
                    </div>
                    <div className='box box2'>
                        <PaginatedItems
                            itemsPerPage={4}
                            repository={repositories}
                        />
                    </div>
                </div>
            )}
            </div>

    );
};

export {App};
