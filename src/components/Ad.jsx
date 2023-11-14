import React, { useState } from 'react';

import AdPage from './AdPage';

const App = () => {
    const [showAd, setShowAd] = useState(true);

    const handleToggleAd = () => {
    setShowAd((prevShowAd) => !prevShowAd);
    };

    return (
    <div>
    {showAd && <AdPage />}
    <button onClick={handleToggleAd}>
        {showAd ? '광고 안 보기' : '광고 보기'}
    </button>
    </div>
    );
};

export default App;
