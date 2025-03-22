// import  { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const LoginPage = () => {
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     async function handleLogin(event) {

//         event.preventDefault();
//         const email = event.target.email.value;
//         const password = event.target.password.value;

//         try {
//             const response = await fetch("http://localhost:8000/users");
//             const data = await response.json();

//             const verifyEmail = data.find(user => user.email === email);
//             const verifyPassword = data.find(user => user.password === password);

//             if(verifyEmail && verifyPassword) {
//                 localStorage.setItem("isLoggedIn", "true");
//                 sessionStorage.setItem("email", JSON.stringify(verifyEmail));

//                 navigate('/');
//             } else{
//                 setError("Please enter a valid email address or password");
//             }

//             const newUserLogin ={
//                 email,
//                 password
//             }

//             const loginRequest = {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(newUserLogin),
//             };

//             const postResponse = await fetch("http://localhost:3000/login", loginRequest);
//             const newLoginUserData = await postResponse.json();


//             if(newLoginUserData){
//                 sessionStorage.setItem("userEmail", JSON.stringify(newLoginUserData.email));
//                 sessionStorage.setItem("loginUserData", JSON.stringify(newLoginUserData));
//             }

//             if(data.email){
//                 navigate("/products");
//             } else{
                 
//                 console.log("error")
//             }

//         }catch (error){
//             console.log(error)
//         }
        
//     }
//   return (
//     <main>
//     <section>
//         <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Login</p>
//     </section>
//     <form  onSubmit={handleLogin}>
//         <div className="mb-6">
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
//             <input name="email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required autoComplete="off" />
//         </div>
//         <div className="mb-6">
//             <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
//             <input name="password" type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//         </div>
//         <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
//     </form>
//     {/* <button className="mt-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login As Guest</button> */}
// </main>
  
//   )
// }



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const response = await fetch("http://localhost:8000/users");
            const data = await response.json();

            // Find the user with both email and password match
            const user = data.find(user => user.email === email && user.password === password);

            if (user) {
                // Store user data in sessionStorage after successful login
                sessionStorage.setItem("isLoggedIn", "true");
                sessionStorage.setItem("userEmail", JSON.stringify(user.email));
                sessionStorage.setItem("loginUserData", JSON.stringify(user));

                // Redirect to the products page
                navigate('/');
            } else {
                setError("Invalid email or password. Please try again.");
            }

        } catch (error) {
            console.error("Login error: ", error);
            setError("An error occurred while logging in. Please try again.");
        }
    }

    return (
        <main className="flex justify-center items-center min-h-screen bg-gray-50">
            <section className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Login</p>

                <form onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            autoComplete="off"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input
                            name="password"
                            type="password"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm mt-2 mb-4">{error}</p>}

                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Log In
                    </button>
                </form>
            </section>
        </main>
    );
};
