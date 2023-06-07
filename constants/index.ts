import { createInvoice, excellentFeature } from "@public/images";
import { StaticImageData } from "next/image";

export interface CardDataProps {
    id: number;
    img: string;
    text: string;
    description: string;
}

export const cardData: CardDataProps[] = [
    {
        id: 1,
        img: "/images/card-image-1.png",
        text: "Aldarani ramos",
        description: "Very satisfied with this insurance service. strongly guarantees us in the future to be prosperous",
    },
    {
        id: 2,
        img: "/images/card-image-2.png",
        text: "Jhon Uwuwh",
        description: "Insurance is reliable and guaranteed, so we don't have to worry about thinking about our future.",
    },
    {
        id: 3,
        img: "/images/card-image-3.png",
        text: "Sir bang gosir",
        description: "Very satisfied with this insurance service. strongly guarantees us in the future to be prosperous",
    },
    {
        id: 4,
        img: "/images/card-image-4.png",
        text: "Yono uyinuh",
        description: "Insurance is reliable and guaranteed, so we don't have to worry about thinking about our future.",
    },
    {
        id: 5,
        img: "/images/card-image-5.png",
        text: "Victoria Husband",
        description: "Very satisfied with this insurance service. strongly guarantees us in the future to be prosperous",
    },
    {
        id: 6,
        img: "/images/card-image-6.png",
        text: "Amelia Revania",
        description: "Insurance is reliable and guaranteed, so we don't have to worry about thinking about our future.",
    },

];

export const cardData2: CardDataProps[] = [
    {
        id: 1,
        img: "/images/card-image-2.png",
        text: "Jhon Uwuwh",
        description: "Insurance is reliable and guaranteed, so we don't have to worry about thinking about our future.",
    },
    {
        id: 2,
        img: "/images/card-image-1.png",
        text: "Aldarani ramos",
        description: "Very satisfied with this insurance service. strongly guarantees us in the future to be prosperous",
    },
    {
        id: 3,
        img: "/images/card-image-4.png",
        text: "Yono uyinuh",
        description: "Insurance is reliable and guaranteed, so we don't have to worry about thinking about our future.",
    },
    {
        id: 4,
        img: "/images/card-image-3.png",
        text: "Sir bang gosir",
        description: "Very satisfied with this insurance service. strongly guarantees us in the future to be prosperous",
    },
    {
        id: 5,
        img: "/images/card-image-6.png",
        text: "Amelia Revania",
        description: "Insurance is reliable and guaranteed, so we don't have to worry about thinking about our future.",
    },
    {
        id: 6,
        img: "/images/card-image-5.png",
        text: "Victoria Husband",
        description: "Very satisfied with this insurance service. strongly guarantees us in the future to be prosperous",
    },
];


export interface SectionProps {
    sectionTitle: string;
    listItems: string[];
}

export const aboutData: SectionProps[] = [
    {
        sectionTitle: 'About',
        listItems: ['About us', 'Features', 'Blog', 'Pricing'],
    },
    {
        sectionTitle: 'Company',
        listItems: ['How we work', 'Press Room', 'Jobs', 'Community'],
    },
    {
        sectionTitle: 'Legal',
        listItems: ['Terms of use', 'Privacy Policy', 'Security Policy', 'Cookie Settings'],
    },
];
