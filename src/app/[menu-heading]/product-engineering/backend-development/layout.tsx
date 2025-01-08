import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Backend Development Services | Hire Backend Developers - BigStep Tech",
    description: "Build robust, secure, and scalable backend systems tailored to your business needs, ensuring high performance and seamless app operations.",
    openGraph: {
        title: "Backend Development Services | Hire Backend Developers - BigStep Tech",
        description: "Build robust, secure, and scalable backend systems tailored to your business needs, ensuring high performance and seamless app operations.",
        url: "https://bigsteptech.com/services/product-engineering/backend-development",
        type: "website",
        siteName: "Backend Development Services | Hire Backend Developers - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Backend Development Services | Hire Backend Developers - BigStep Tech",
        description: "Build robust, secure, and scalable backend systems tailored to your business needs, ensuring high performance and seamless app operations.",
    },
};

export default function BackendDevelopmentLayout({
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
