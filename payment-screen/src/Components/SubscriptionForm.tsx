'use client'
import { paymentMethods } from '@/app/data/paymentMethod';
import Image from 'next/image';
import React, { useState } from 'react';

const SubscriptionForm: React.FC = () => {
    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
    const [plan, setPlan] = useState('monthly');

    return (
        <div className="pt-6 md:py-4 grid md:grid-cols-2 lg:grid-cols-[1fr,_.7fr] items-center">
            <form className=' px-4 sm:px-[8%]'>
                <h1 className='text-purple-700 text-xl font-bold mb-2'>Cosmic</h1>
                <h2 className="text-2xl font-bold mb-2 text-black">Upgrade to Plus</h2>
                <p className="text-sm text-gray-500 mb-4 font-medium">
                    Do more with unlimited blocks, files, automations & integrations.
                </p>
                <label className="block text-sm font-medium text-gray-500">Billed To</label>
                <input
                    type="text"
                    value="Jane Smith"
                    className="w-full p-3 border border-gray-300 rounded-md text-sm font-medium mt-1 mb-4 focus:outline-gray-300"
                    readOnly
                />
                <label className="block text-sm font-medium text-gray-500 mb-2">Payment Details</label>
                <div className="flex flex-wrap mb-3 gap-2">
                    {paymentMethods.map((method, index: number) => (
                        <button
                            type='button'
                            key={index}
                            onClick={() => setPaymentMethod(method.method)}
                            className={`basis-[110px] grow p-2 sm:p-3 w-full border rounded-lg text-left block text-xs ms:text-sm font-medium ${paymentMethod === method.method
                                ? 'border-purple-500 bg-purple-50'
                                : 'border-gray-300'
                                }`}
                        >
                            {method.icon}
                            <span className='inline-block mt-2'>{method.method}</span>
                        </button>
                    ))}
                </div>
                {paymentMethod === 'Credit Card' && (
                    <div>
                        <div className='relative mb-3'>
                            <input
                                type="text"
                                value="1234 1234 1234 12345"
                                className="w-full p-3 pr-8 border border-gray-300 focus:outline-gray-300 rounded-md text-sm font-medium"
                            />
                            <svg className='absolute top-[40%] -translate-y-1/2 right-4' height='30' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 48 48" viewBox="0 0 48 48" id="mastercard">
                                <path fill="#f44336" d="M18,24c0-4.903,2.363-9.243,6-11.98C21.491,10.132,18.382,9,15,9C6.716,9,0,15.716,0,24 c0,8.284,6.716,15,15,15c3.382,0,6.491-1.133,9-3.02C20.363,33.242,18,28.903,18,24z"></path>
                                <path fill="#ff9800" d="M33,9c-3.382,0-6.491,1.132-9,3.02c3.637,2.737,6,7.077,6,11.98s-2.363,9.242-6,11.98 c2.509,1.888,5.618,3.02,9,3.02c8.284,0,15-6.716,15-15C48,15.716,41.284,9,33,9z"></path>
                                <ellipse cx="24" cy="24" fill="#ff7300" rx="6" ry="11.98"></ellipse>
                            </svg>
                        </div>
                        <div className="flex gap-4 flex-wrap mb-3">
                            <input
                                type="text"
                                value="MM/YY"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-gray-300 text-sm font-medium grow basis-32"
                            />
                            <input
                                type="text"
                                value="CVC"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-gray-300 text-sm font-medium grow basis-32"
                            />
                        </div>
                    </div>
                )}
                <div className="">
                    <div className='px-2 border border-gray-300 rounded-md mb-3'>
                        <select className="w-full text-sm font-medium py-2.5">
                            <option>United States</option>
                            <option>Canada</option>
                        </select>
                    </div>
                    <input
                        type="text"
                        value="Postal Code"
                        className="w-full p-2 border border-gray-300 rounded-md text-sm font-medium mb-2 focus:outline-gray-300"
                    />
                </div>
                <div className='flex gap-4 my-6'>
                    <button className='bg-gray-200 font-semibold grow max-w-[200px] rounded-md px-4 py-3 text-sm'>Cancel</button>
                    <button className='bg-purple-700 text-white grow font-semibold rounded-md px-4 py-3 text-sm'>Subscribe</button>
                </div>
                <p className='text-sm text-gray-500 mb-4 font-medium'>By providing your card information, you allow us to charge your card for future payment in accordance with thier terms.</p>
            </form>
            <div className='bg-[#f1f5f9] md:rounded-2xl md:mr-4 overflow-hidden'>
                <div className='px-4 pt-4 md:px-8 md:pt-8'>
                    <h2 className="text-lg font-bold mb-4">Starter Plan</h2>
                    <div
                        onClick={() => setPlan('monthly')}
                        className={`mb-3 cursor-pointer border px-4 py-3 text-base rounded-lg flex items-center gap-2 text-left ${plan === 'monthly' ? 'border-purple-500 bg-purple-50' : 'border-gray-300 bg-white'
                            }`}
                    >
                        <button className={`rounded-full ${plan === 'monthly' ? 'p-1 border-[6px] border-purple-700' : 'p-2 border-[2px]'}`}></button>
                        <div>
                            <span className='font-bold'>Pay Monthly</span> <br />
                            <span className='text-sm text-gray-500 mb-4 font-medium'>$20 / Month</span>
                        </div>
                    </div>
                    <div
                        onClick={() => setPlan('annual')}
                        className={`cursor-pointer border px-4 py-3 text-base rounded-lg flex items-center gap-2 text-left ${plan === 'annual' ? 'border-purple-500 bg-purple-50' : 'border-gray-300 bg-white'
                            }`}
                    >
                        <button className={`rounded-full ${plan === 'annual' ? 'p-1 border-[6px] border-purple-700' : 'p-2 border-[2px]'}`}></button>
                        <div>
                            <span className='font-bold'>Pay Monthly</span> <br />
                            <span className='text-sm text-gray-500 mb-4 font-medium'>$20 / Month</span>
                        </div>
                        <span className='inline-block ml-auto bg-purple-700 text-purple-50 text-xs py-1 px-2 rounded-md'>Save 15%</span>
                    </div>
                    <div className="mt-6 flex justify-between items-center border-t border-t-gray-300 py-6">
                        <p className="text-xl font-bold">Total</p>
                        <p className="text-lg font-semibold">$16 / Month</p>
                    </div>
                    <p className='text-sm text-gray-500 font-medium flex gap-1'>
                        <svg className='shrink-0' width="16" height="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        Guaranteed ot be safe & secure, ensuring that all transactions are protected with the highest level of security.
                    </p>
                </div>
                <Image src={require('@/assets/economy-img.jpg')} alt='economy avatar' />
            </div>
        </div>
    );
};

export default SubscriptionForm;
