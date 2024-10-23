import React from 'react';
import AdminStatistics from '../Admin/AdminStatistics';
import useRole from '../../../hooks/useRole';
import HostStatistics from '../Host/HostStatistics';
import GuestStatistics from '../Guest/GuestStatistics';

const Statistics = () => {
    const [role,isLoading]  =useRole()
    return (
        <div>
            <h2>wel dashboard: statistics page</h2>
           { role === 'admin' &&  <AdminStatistics></AdminStatistics>}
           { role === 'host' &&  <HostStatistics></HostStatistics>}
           { role === 'guest' &&  <GuestStatistics></GuestStatistics>}
           

        </div>
    );
};

export default Statistics; 