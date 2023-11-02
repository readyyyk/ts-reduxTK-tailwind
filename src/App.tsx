import React from 'react';
import {decrement, increment} from './store/counterSlice';
import {useAppDispatch} from './hooks';
import {
    Button,
    Counter,
} from './components';


const App: React.FC = () => {
    const d = useAppDispatch();
    console.log('app');

    return (
        <div className={'flex h-screen items-center'}>
            <div className='container m-auto flex w-fit flex-col items-center gap-12 rounded-xl bg-black px-8 py-10 text-3xl text-white sm:flex-row sm:px-20 sm:py-8'>
                <Counter />
                <Button variant={'filled'} className={'hover:bg-green-300'} onClick={()=>d(increment())}> Inc </Button>
                <Button variant={'outline'} className={'hover:bg-red-800'} onClick={()=>d(decrement())}> Dec </Button>
            </div>
        </div>
    );
};

export default App;
