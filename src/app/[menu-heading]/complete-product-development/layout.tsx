import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Complete Product Development | End to End Deelopment - BigStep Tech",
    description: "Bring your ideas to life with end-to-end product development. Achieve quality, timely delivery, and scalable solutions with our comprehensive approach.",
    openGraph: {
        title: "Complete Product Development | End to End Deelopment - BigStep Tech",
        description: "Bring your ideas to life with end-to-end product development. Achieve quality, timely delivery, and scalable solutions with our comprehensive approach.",
        url: "https://bigsteptech.com/engagement-models/complete-product-development",
        type: "website",
        siteName: "Complete Product Development | End to End Deelopment - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Complete Product Development | End to End Deelopment - BigStep Tech",
        description: "Bring your ideas to life with end-to-end product development. Achieve quality, timely delivery, and scalable solutions with our comprehensive approach.",
    },
};

export default function CompleteProductDevelopmentLayout({
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
