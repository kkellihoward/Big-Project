import React, { useState } from 'react';
import { InlineEdit } from '../components/InlineEdit';

export const EventViewerPage = () => {
    const [value, setValue] = useState();
    
    return (
        <>
            <InlineEdit 
                type="text"
                value="maybe"
                setValue={setValue} 
            />
        </>
    );
};