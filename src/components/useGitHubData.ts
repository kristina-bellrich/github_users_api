import {useEffect, useState} from 'react';
import {IRepositories, IUser} from '../data/data';

interface UseGitHubDataProps {
    username: string;
}

export const useGitHubData = ({username}: UseGitHubDataProps) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [repositories, setRepositories] = useState<IRepositories[]>([]);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsEmpty(true);
            try {
                if (username) {
                    const userResponse = await fetch(
                        `https://api.github.com/users/${username}`,
                    );
                    const userData = await userResponse.json();
                    setUser(userData);
                    const reposResponse = await fetch(
                        `https://api.github.com/users/${username}/repos`,
                    );
                    const reposData = await reposResponse.json();
                    setRepositories(reposData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsEmpty(false);
            }
        };

        fetchData();
    }, [username]);

    return {user, repositories, isEmpty, setIsEmpty};
};
