'use client';
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface LogoImagesProps {
    img: StaticImageData;
    alt: string;
    width: number;
    className?: string;
    duration: number;
    y: number
}

const LogoImages = ({ img, alt, width, className, duration, y }: LogoImagesProps) => {

    return (
        <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, transition: { duration: duration, ease: 'circOut' }, opacity: 1 }}
        >
            <Image
                src={img}
                alt={alt}
                width={width}
                priority
                className={`${ className }`}
            />
        </motion.div>
    );
};

export default LogoImages;