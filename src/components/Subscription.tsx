'use client';
import React, { FormEvent, useState } from 'react';
import Button from './Reusables/Button';
import { MailIcon } from './Reusables/SvgIcons';

const Subscription = () => {
    const [password, setPassword] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle the form submission or further processing here
        console.log('Submitted password:', password);
    };

    return (
        <section className='h-screen flex flex-col items-center justify-around bg-white'>

            <Button text='Try for free' className="text-white text-sm font-semibold px-7 py-3 rounded-3xl bg-primary w-fit" />

            <div className="flex flex-col w-[80%] text-center pt-8 pb-10 px-36 bg-primary text-white gap-8 rounded-[60px]">
                <h3 className='text-5xl mx-24 leading-[150%] font-semibold'>Subscribe to our Newsletter</h3>
                <p className='text-lg px-5 leading-[170%]'>Stay in touch with our team of experts here at Packetz and learn about all the creations and get updates on our newsletter</p>

                <form onSubmit={handleSubmit} className="flex bg-white px-4 py-4 justify-between rounded-[100px] mx-4">
                    <div className="flex items-center">
                        <MailIcon className='w-[50px]' />
                        <input
                            type="text"
                            className="w-[350px] text-sm py-2 focus:outline-none text-[#000]"
                            placeholder="your email address..."
                            value={password}
                            onChange={handleChange}
                        />
                    </div>

                    <Button type='submit' text='Subscribe' className="text-white text-sm font-semibold px-7 py-4 rounded-[100px] bg-[#292D32] w-fit" />
                </form>
            </div>
        </section>
    );
};

export default Subscription;