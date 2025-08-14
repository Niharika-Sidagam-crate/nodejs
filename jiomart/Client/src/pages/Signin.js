import Logo from "../assets/Jiomartlogo.png";
import { RxCross1 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

export const Signin = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isMobileNumber, setIsMobileNumber] = useState(true);

    const handlePhoneChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        setPhoneNumber(value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };



    // useEffect(() => {
    //     const checkEmailAvailability = async () => {
    //         if(email) {
    //             try {
    //                 const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //                 if(emailReg.test(email)){
    //                     const checkResponse = await fetch(`http://localhost:8000/users?email=${email}`);
    //                     const existingEmailUsers = await checkResponse.json();

    //                     if(existingEmailUsers.length > 0){
    //                         setIsEmailValid(false);
    //                         setError('This email is already registered. Please use a different email.');
    //                     } else{
    //                         setIsEmailValid(true);
    //                         setError('')
    //                     }
    //                 } else{
    //                     setIsEmailValid(false);
    //                     setError('Please enter a valid email address');
    //                 }
    //             } catch(error){
    //                 setIsEmailValid('false');
    //                 setError('An error occurred while checking email availability.')
    //             }
    //         } else{
    //             setIsEmailValid(true);
    //             setError('')
    //         }
    //     };
    //     checkEmailAvailability();
    // }, [email]);


    // async function handleRegister(event) {
    //     event.preventDefault();
    //     setError('');
    //     // setIsLoading(true);
    //     const number = event.target.number.value;
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     const confirmPassword = event.target.confirmPassword.value;
    //     if (password !== confirmPassword) {
    //         setError('Passwords do not match');
    //         // setIsLoading(false);
    //         return;
    //     }
    //     try {
    //         // Check if email or phone number already exists
    //         const checkResponse = await fetch(`http://localhost:8000/users?email=${email}`);
    //         const existingEmailUsers = await checkResponse.json();
    //         const checkNumberResponse = await fetch(`http://localhost:8000/users?number=${number}`);
    //         const existingNumberUsers = await checkNumberResponse.json();
    //         if (existingEmailUsers.length > 0) {
    //             setError('This email is already registered. Please use a different email.');
    //             // setIsLoading(false);
    //             return;
    //         }
    //         if (existingNumberUsers.length > 0) {
    //             setError('This mobile number is already registered. Please use a different number.');
    //             // setIsLoading(false);
    //             return;
    //         }
    //         const newUser = {
    //             number,
    //             email,
    //             password
    //         };      
    //         const requestPost = {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(newUser)
    //         };
    //         const postResponse = await fetch("http://localhost:8000/users", requestPost);
    //         if (!postResponse.ok) {
    //             throw new Error("Failed to register user");
    //         }
    //         const newUserData = await postResponse.json();
    //         console.log("Registration successful:", newUserData);
    //         navigate('/login');
    //     } catch (error) {
    //         console.error("Error during registration:", error);
    //         setError('An error occurred while registering. Please try again.');
    //     } finally {
    //         // setIsLoading(false);
    //     }
    // }

    //     async function handleRegister(event) {
    //     event.preventDefault();
    //     setError('');

    //     const name = event.target.name.value;  // you'll need a Name field in the form
    //     const number = event.target.number.value;
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     const confirmPassword = event.target.confirmPassword.value;

    //     if (password !== confirmPassword) {
    //         setError('Passwords do not match');
    //         return;
    //     }

    //     try {
    //         const newUser = {
    //             name: name,
    //             email: email,
    //             phoneNumber: number,
    //             password: password
    //         };

    //         const response = await fetch("https://localhost:7151/api/Auth/register", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(newUser)
    //         });

    //         if (!response.ok) {
    //             const errorData = await response.json().catch(() => null);
    //             throw new Error(errorData?.message || "Failed to register user");
    //         }

    //         const data = await response.json();
    //         console.log("Registration successful:", data);

    //         navigate('/login');
    //     } catch (error) {
    //         console.error("Error during registration:", error);
    //         setError(error.message || 'An error occurred while registering. Please try again.');
    //     }
    // }



    async function handleRegister(event) {
        event.preventDefault();
        setError('');

        const name = event.target.name.value;
        const number = event.target.number.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const newUser = {
                name: name,
                email: email,
                phoneNumber: number,
                password: password
            };

            const response = await fetch("https://localhost:7151/api/User/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)
            });
console.log(newUser, "new user")
            console.log(!response.ok, "--------")
            if (!response.ok) {
                let errorMessage;
            try {
                const errJson = await response.json();
                errorMessage = errJson.message || JSON.stringify(errJson);
            } catch {
                errorMessage = await response.text();
            }
            throw new Error(errorMessage || "Failed to register user");
            }

            // const data = await response.json();
            // console.log(data, "data")
            console.log("Registration successful:", response);

            navigate('/LoginPage');
        } catch (error) {
            console.error("Error during registration:", error);
            setError(error.message || 'An error occurred while registering. Please try again.');
        }
    }


    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <main className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <button onClick={handleGoBack} className="focus:outline-none">
                            <RxCross1 className="w-5 h-5 text-[#0078ad]" />
                        </button>
                        <div className="flex justify-center">
                            <img src={Logo} className="w-9 h-9" alt="JioMart" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2 text-left">Sign in</h1>
                    <p className="text-gray-600 text-left w-[240px]">
                        Verify your mobile number to access your <span className="font-semibold">JioMart</span> account
                    </p>
                </div>
                <form onSubmit={handleRegister}>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2" htmlFor="number"></label>
                        <div className="flex border-b-2 border-blue-600">
                            <span className="text-gray-700 pr-1 pt-[10px]">+91-</span>
                            <input
                                type="tel"
                                id="number"
                                name="number"
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                                className="w-full py-2 outline-none"
                                placeholder="Enter your mobile number"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 text-left">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleEmailChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="example@email.com"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                            minLength="7"
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm mt-2 mb-4">{error}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-blue-200 text-white py-3 rounded-full font-medium mb-6"
                        disabled={!isEmailValid}
                    >
                        Continue

                    </button>
                </form>
                <p className="text-sm text-gray-600">
                    By continuing, you agree to our{' '}
                    <a href="#" className="text-blue-600">Terms and Conditions of Use</a>,{' '}
                    <a href="#" className="text-blue-600">Privacy Policy</a> and{' '}
                    <a href="#" className="text-blue-600">Retail Account Privacy Policy</a>.
                </p>
            </div>
        </main>
    );
};
