import {FC} from 'react';

interface IItem {
    currentItems: number[];
}

const Items: FC<IItem> = ({currentItems}) => {
    return (
        <div>
            {currentItems &&
                currentItems.map((item) => (
                    <div>
                        <h3>Item #{item}</h3>
                    </div>
                ))}
        </div>
    );
};
export {Items};
