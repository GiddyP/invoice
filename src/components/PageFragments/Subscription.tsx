'use client';
import React, { FormEvent, useState } from 'react';
import Button from '../Reusables/Button';
import { MailIcon } from '../Reusables/SvgIcons';

const Subscription = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <section className='h-screen flex flex-col items-center justify-around bg-white'>

            <Button text='Try for free' className="text-white text-xl font-semibold px-9 py-3 rounded-[100px] bg-primary w-fit mt-6" />

            <div className="flex flex-col w-[80%] h-[400px] justify-center items-center pt-8 pb-5 px-36 bg-primary text-white gap-8 rounded-[60px]">
                <h3 className='text-5xl mx-32 leading-[130%] font-semibold text-center'>Subscribe to our Newsletter</h3>
                <p className='text-xl px-5 leading-[170%] mx-12'>Stay in touch with our team of experts here at Packetz and learn about all the creations and get updates on our newsletter</p>

                <form onSubmit={handleSubmit} className="flex bg-white px-4 py-2 justify-between rounded-[100px] mx-4 w-[90%]">
                    <div className="flex items-center">
                        <MailIcon className='w-[50px]' />
                        <input
                            type="text"
                            className="w-[350px] text-sm py-2 focus:outline-none text-[#000]"
                            placeholder="your email address..."
                            value={email}
                            onChange={handleChange}
                        />
                    </div>

                    <Button type='submit' text='Subscribe' className="text-white text-lg px-8 py-3 rounded-[100px] bg-[#292D32] w-fit" />
                </form>
            </div>
        </section>
    );
};

export default Subscription;