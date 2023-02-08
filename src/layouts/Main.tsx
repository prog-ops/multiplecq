import React from 'react';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import {Navbar} from '../components/Navbar';
import {useAppDispatch, useAppSelector} from '../store';
import {getCategories} from '../store/features/game';
import GamePage from '../views/GamePage';
import InitialPage from '../views/InitialPage';
import ScorePage from '../views/ScorePage';

const MainLayout: React.FC = () => {
    const {stage} = useAppSelector((state) => state.game);
    const {categoriesLoading, categoriesInitialized} = useAppSelector((state) => state.game);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (!categoriesInitialized) dispatch(getCategories()).unwrap();
    }, [dispatch, categoriesInitialized])

    return (
        <div className="main">
            <Navbar/>
            {categoriesLoading ? <LoadingSpinner/> : <React.Fragment>
                {stage === 'INIT' && <InitialPage/>}
                {stage === 'GAME' && <GamePage/>}
                {stage === 'END' && <ScorePage/>}
            </React.Fragment>}
            <Footer/>
        </div>
    )
}
export default MainLayout;