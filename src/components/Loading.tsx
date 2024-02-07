import ReactLoading from 'react-loading';
export const Loading = () => {
    return (
        <div className='loading'>
            <p className='loading'>Your information will be here soon...</p>

            <ReactLoading
                className='loading'
                type={'spinningBubbles'}
                color={'#41403f'}
                height={'10%'}
                width={'10%'}
            />
        </div>
    );
};
