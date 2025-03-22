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
 
 
 
    useEffect(() => {
        const checkEmailAvailability = async () => {
            if(email) {
                try {
                    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
                    if(emailReg.test(email)){
                        const checkResponse = await fetch(`http://localhost:8000/users?email=${email}`);
                        const existingEmailUsers = await checkResponse.json();
 
                        if(existingEmailUsers.length > 0){
                            setIsEmailValid(false);
                            setError('This email is already registered. Please use a different email.');
                        } else{
                            setIsEmailValid(true);
                            setError('')
                        }
                    } else{
                        setIsEmailValid(false);
                        setError('Please enter a valid email address');
                    }
                } catch(error){
                    setIsEmailValid('false');
                    setError('An error occurred while checking email availability.')
                }
            } else{
                setIsEmailValid(true);
                setError('')
            }
        };
        checkEmailAvailability();
    }, [email]);
 
 
    async function handleRegister(event) {
        event.preventDefault();
        setError('');
        // setIsLoading(true);
        const number = event.target.number.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            // setIsLoading(false);
            return;
        }
        try {
            // Check if email or phone number already exists
            const checkResponse = await fetch(`http://localhost:8000/users?email=${email}`);
            const existingEmailUsers = await checkResponse.json();
            const checkNumberResponse = await fetch(`http://localhost:8000/users?number=${number}`);
            const existingNumberUsers = await checkNumberResponse.json();
            if (existingEmailUsers.length > 0) {
                setError('This email is already registered. Please use a different email.');
                // setIsLoading(false);
                return;
            }
            if (existingNumberUsers.length > 0) {
                setError('This mobile number is already registered. Please use a different number.');
                // setIsLoading(false);
                return;
            }
            const newUser = {
                number,
                email,
                password
            };      
            const requestPost = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)
            };
            const postResponse = await fetch("http://localhost:8000/users", requestPost);
            if (!postResponse.ok) {
                throw new Error("Failed to register user");
            }
            const newUserData = await postResponse.json();
            console.log("Registration successful:", newUserData);
            navigate('/login');
        } catch (error) {
            console.error("Error during registration:", error);
            setError('An error occurred while registering. Please try again.');
        } finally {
            // setIsLoading(false);
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
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
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
 

// import Logo from "../assets/Jiomartlogo.png";
// import { RxCross1 } from 'react-icons/rx';
// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from "react";

// export const Signin = () => {
//     const navigate = useNavigate();
//     const [error, setError] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [email, setEmail] = useState('');
//     const [isEmailValid, setIsEmailValid] = useState(true);
//     const [isMobileNumberValid, setIsMobileNumberValid] = useState(true);

//     // Handle phone number input
//     const handlePhoneChange = (event) => {
//         const value = event.target.value.replace(/\D/g, ''); // Removing non-digit characters
//         setPhoneNumber(value);

//         // Validate mobile number: check if it starts with 7, 8, or 9 and is 10 digits long
//         const phoneReg = /^[7-9][0-9]{9}$/;
//         if (phoneReg.test(value)) {
//             setIsMobileNumberValid(true);
//             setError('');
//         } else {
//             setIsMobileNumberValid(false);
//             setError('Please enter a valid 10-digit mobile number starting with 7, 8, or 9.');
//         }
//     };

//     // Handle email input
//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     // Check email availability with validation
//     useEffect(() => {
//         const checkEmailAvailability = async () => {
//             if (email) {
//                 try {
//                     const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//                     if (emailReg.test(email)) {
//                         const checkResponse = await fetch(`http://localhost:8000/users?email=${email}`);
//                         const existingEmailUsers = await checkResponse.json();

//                         if (existingEmailUsers.length > 0) {
//                             setIsEmailValid(false);
//                             setError('This email is already registered. Please use a different email.');
//                         } else {
//                             setIsEmailValid(true);
//                             setError('');
//                         }
//                     } else {
//                         setIsEmailValid(false);
//                         setError('Please enter a valid email address');
//                     }
//                 } catch (error) {
//                     console.error("Error checking email availability:", error);
//                     setIsEmailValid(false);
//                     setError('An error occurred while checking email availability.');
//                 }
//             } else {
//                 setIsEmailValid(true);
//                 setError('');
//             }
//         };
//         checkEmailAvailability();
//     }, [email]);

//     // Register function to handle the form submission
//     const handleRegister = async (event) => {
//         event.preventDefault();
//         setError('');
        
//         const number = event.target.number.value;
//         const email = event.target.email.value;
//         const password = event.target.password.value;
//         const confirmPassword = event.target.confirmPassword.value;

//         // Check if passwords match
//         if (password !== confirmPassword) {
//             setError('Passwords do not match');
//             return;
//         }

//         // Check if the mobile number is valid
//         if (!isMobileNumberValid) {
//             setError('Please enter a valid mobile number.');
//             return;
//         }

//         try {
//             // Check if email or phone number already exists
//             const checkEmailResponse = await fetch(`http://localhost:8000/users?email=${email}`);
//             const existingEmailUsers = await checkEmailResponse.json();
//             const checkNumberResponse = await fetch(`http://localhost:8000/users?number=${number}`);
//             const existingNumberUsers = await checkNumberResponse.json();

//             if (existingEmailUsers.length > 0) {
//                 setError('This email is already registered. Please use a different email.');
//                 return;
//             }

//             if (existingNumberUsers.length > 0) {
//                 setError('This mobile number is already registered. Please use a different number.');
//                 return;
//             }

//             // Register new user if no errors
//             const newUser = {
//                 number,
//                 email,
//                 password
//             };

//             const requestPost = {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(newUser)
//             };

//             const postResponse = await fetch("http://localhost:8000/users", requestPost);

//             if (!postResponse.ok) {
//                 throw new Error("Failed to register user");
//             }

//             const newUserData = await postResponse.json();
//             console.log("Registration successful:", newUserData);
//             navigate('/login');
//         } catch (error) {
//             console.error("Error during registration:", error);
//             setError('An error occurred while registering. Please try again.');
//         }
//     };

//     const handleGoBack = () => {
//         navigate(-1);
//     };

//     return (
//         <main className="flex justify-center items-center min-h-screen bg-gray-50">
//             <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
//                 <div className="mb-6">
//                     <div className="flex justify-between items-center mb-4">
//                         <button onClick={handleGoBack} className="focus:outline-none">
//                             <RxCross1 className="w-5 h-5 text-[#0078ad]" />
//                         </button>
//                         <div className="flex justify-center">
//                             <img src={Logo} className="w-9 h-9" alt="JioMart" />
//                         </div>
//                     </div>
//                     <h1 className="text-2xl font-bold text-gray-900 mb-2 text-left">Sign in</h1>
//                     <p className="text-gray-600 text-left w-[240px]">
//                         Verify your mobile number to access your <span className="font-semibold">JioMart</span> account
//                     </p>
//                 </div>
//                 <form onSubmit={handleRegister}>
//                     <div className="mb-6">
//                         <label className="block text-gray-700 mb-2" htmlFor="number"></label>
//                         <div className="flex border-b-2 border-blue-600">
//                             <span className="text-gray-700 pr-1 pt-[10px]">+91-</span>
//                             <input
//                                 type="tel"
//                                 id="number"
//                                 name="number"
//                                 value={phoneNumber}
//                                 onChange={handlePhoneChange}
//                                 className="w-full py-2 outline-none"
//                                 placeholder="Enter your mobile number"
//                                 required
//                             />
//                         </div>
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             onChange={handleEmailChange}
//                             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                             placeholder="example@email.com"
//                             required
//                             autoComplete="off"
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                             required
//                             minLength="7"
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">Confirm Password</label>
//                         <input
//                             type="password"
//                             id="confirmPassword"
//                             name="confirmPassword"
//                             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                             required
//                             minLength="7"
//                         />
//                     </div>
//                     {error && (
//                         <p className="text-red-500 text-sm mt-2 mb-4">{error}</p>
//                     )}
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-200 text-white py-3 rounded-full font-medium mb-6"
//                         disabled={!isEmailValid || !isMobileNumberValid}
//                     >
//                         Continue
//                     </button>
//                 </form>
//                 <p className="text-sm text-gray-600">
//                     By continuing, you agree to our{' '}
//                     <a href="#" className="text-blue-600">Terms and Conditions of Use</a>,{' '}
//                     <a href="#" className="text-blue-600">Privacy Policy</a> and{' '}
//                     <a href="#" className="text-blue-600">Retail Account Privacy Policy</a>.
//                 </p>
//             </div>
//         </main>
//     );
// };
