import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
}

export const VectorStickIcon = ({ className, ...rest }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="79"
        viewBox="0 0 70 79"
        fill="none"
        {...rest}
        className={`${ className }`}
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M64.745 28.3665C65.0352 25.5199 65.3473 22.7064 65.5544 19.8527C65.6012 19.239 65.1438 18.7084 64.5339 18.6638C63.9201 18.617 63.3872 19.0782 63.3427 19.6881C63.1345 22.5258 62.8259 25.3156 62.5369 28.1424C62.4763 28.7534 62.921 29.2973 63.5259 29.3595C64.1368 29.42 64.6845 28.9775 64.745 28.3665Z" fill="#2E1133" />
        <path fillRule="evenodd" clipRule="evenodd" d="M43.146 38.0434C37.9329 30.6558 32.3497 23.5363 26.9824 16.2648C26.6163 15.7714 25.9223 15.6681 25.4312 16.0305C24.9378 16.3967 24.8307 17.0883 25.1947 17.5855C30.5549 24.8426 36.131 31.9477 41.331 39.3225C41.6866 39.8252 42.3777 39.9423 42.8781 39.5905C43.3808 39.2348 43.4978 38.5438 43.146 38.0434Z" fill="#2E1133" />
        <path fillRule="evenodd" clipRule="evenodd" d="M25.0399 65.1469C17.898 62.423 10.6689 59.8948 3.55765 57.0912C2.98816 56.87 2.34496 57.1496 2.11997 57.7169C1.89276 58.288 2.1762 58.9334 2.74346 59.1584C9.86459 61.9626 17.1015 64.4953 24.2533 67.2198C24.825 67.4371 25.4666 67.1515 25.6839 66.5798C25.9034 66.0043 25.6155 65.3665 25.0399 65.1469Z" fill="#2E1133" />
    </svg>
);

export const ArrowDownIcon = ({ className, ...rest }: IconProps) => (
    <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        className={`${ className }`}
    >
        <path d="M12.25 12.25L29.75 29.75" stroke="#292D32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M29.75 12.25V29.75H12.25" stroke="#292D32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

);

export const MailIcon = ({ className, ...rest }: IconProps) => (
    <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        className={`${ className }`}
    >
        <g opacity="0.7">
            <path d="M4 4.5H20C21.1 4.5 22 5.4 22 6.5V18.5C22 19.6 21.1 20.5 20 20.5H4C2.9 20.5 2 19.6 2 18.5V6.5C2 5.4 2.9 4.5 4 4.5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 6.5L12 13.5L2 6.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
    </svg>
);
