import { useState } from 'react';
import Routes from './components/Routes';

const App = () => {
    const [userId, setUserId] = useState(localStorage.getItem('userID'))

    return (
        <div className="body">
            <Routes userId={userId} setUserId={setUserId} />
        </div>
    );
};

export default App;