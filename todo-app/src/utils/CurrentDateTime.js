import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';

export default function CurrentDateTime() {
    const [updateDate, setUpdateDate] = useState(new Date())
    // useEffect(() => {
    //     setInterval(() => {
    //         setUpdateDate()
    //     }, 1000);
    // }, [updateDate])
    return (
        // , h:mm:ss a
        <Moment format='MMMM Do YYYY'>{updateDate}</Moment>
    )
}
