import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us - BigStep Tech",
    description: "Connect with BigStep Technologies to craft tailored digital solutions. From startups to enterprises, we transform ideas into impactful innovations.",
    openGraph: {
        title: "Contact Us - BigStep Tech",
        description: "Connect with BigStep Technologies to craft tailored digital solutions. From startups to enterprises, we transform ideas into impactful innovations.",
        url: "https://bigsteptech.com/contact-us",
        type: "website",
        siteName: "Contact Us - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us - BigStep Tech",
        description: "Connect with BigStep Technologies to craft tailored digital solutions. From startups to enterprises, we transform ideas into impactful innovations.",
    },
};

export default function ContactUsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}
