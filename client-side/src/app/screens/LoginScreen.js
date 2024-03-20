import React from 'react';

const LoginScreen = () => {
    return (
        <div className="w-screen h-screen bg-blue-500 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Login Page</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="border border-gray-300 px-4 py-2 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input type="password" id="password" name="password" className="border border-gray-300 px-4 py-2 rounded-md w-full" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginScreen;
