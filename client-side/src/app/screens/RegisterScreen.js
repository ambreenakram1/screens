import React from 'react';

const RegisterScreen = () => {
    return (
        <div className="w-screen h-screen bg-green-500 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Register Page</h1>
                <form>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label id ="firstName" className="block text-gray-700 font-semibold mb-2">First Name</label>
                            <input type="text" id="firstName" name="firstName" className="border border-gray-300 px-4 py-2 rounded-md w-full" />
                        </div>
                        <div className="mb-4">
                            <label id ="lastName" className="block text-gray-700 font-semibold mb-2">Last Name</label>
                            <input type="text" id="lastName" name="lastName" className="border border-gray-300 px-4 py-2 rounded-md w-full" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label id="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="border border-gray-300 px-4 py-2 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label id="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input type="password" id="password" name="password" className="border border-gray-300 px-4 py-2 rounded-md w-full" />
                    </div>
                    <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Register</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterScreen;
