import React from 'react';

const DashboardScreen = ({ firstName, lastName, Logout }) => {
    return (
        <div className="w-screen h-screen bg-red-500 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Dashboard Page</h1>
                <p className="mb-4">Welcome {firstName} {lastName}</p>
                <button onClick={Logout} className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Logout</button>
            </div>
        </div>
    );
}

export default DashboardScreen;
