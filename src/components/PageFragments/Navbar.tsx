'use client';
import Link from 'next/link';
import Button from '../Reusables/Button';
import { usePathname } from 'next/navigation';
import Image, { StaticImageData } from 'next/image';
import { invoiceLogo } from '@public/images';
import { logo1, logo2, logo3 } from '@public/icons';
import LogoImages from '../Reusables/LogoImages';

const Navbar = () => {
    const pathname = usePathname();
    return (
        <header className='flex top-0 w-full h-16 justify-center items-center bg-light'>
            <div className="flex w-4/5 h-10 justify-between items-center">
                <section className="flex gap-2 items-center">
                    <div className="w-[60px] h-[30px] relative">
                        <LogoImages
                            img={logo1}
                            alt='logo1'
                            width={27}
                            className='absolute top-0'
                            duration={1.1}
                            y={20}
                        />

                        <LogoImages
                            img={logo2}
                            alt='logo2'
                            width={31}
                            className='absolute top-0 left-[13px]'
                            duration={.9}
                            y={20}
                        />

                        <LogoImages
                            img={logo3}
                            alt='logo3'
                            width={36}
                            className='absolute top-0 left-[30px]'
                            duration={.6}
                            y={20}
                        />
                    </div>
                    <span className='font-semibold 2xl:font-bold text-xl'>Invoice</span>
                </section>

                <nav className='flex gap-12 font-[600] text-sm'>
                    <Link href='/' className={`${ pathname === '/' ? 'text-[#141414]' : 'text-[#B3B3B3]' }`}>
                        Home
                    </Link>
                    <Link href='/about' className={`${ pathname === '/about' ? 'text-[#141414]' : 'text-[#B3B3B3]' }`}>
                        About Us
                    </Link>
                    <Link href='/contact-us' className={`${ pathname === '/contact-us' ? 'text-[#141414]' : 'text-[#B3B3B3]' }`}>
                        Contact Us
                    </Link>
                </nav>

                <section className="flex gap-7 text-sm font-[600]">
                    <Button text='Sign Up' />
                    <Button text='Login' className='text-white px-12 py-3 rounded-3xl bg-primary' />
                </section>
            </div>
        </header>
    );
};

export default Navbar;
