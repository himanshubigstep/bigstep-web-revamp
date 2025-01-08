import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Mobile App Development Services | Hire Mobile App Developers - BigStep Tech",
    description: "Design and build high-performing, user-centric mobile applications with robust security and seamless user experiences across all devices.",
    openGraph: {
        title: "Mobile App Development Services | Hire Mobile App Developers - BigStep Tech",
        description: "Design and build high-performing, user-centric mobile applications with robust security and seamless user experiences across all devices.",
        url: "https://bigsteptech.com/services/product-engineering/mobile-app-development",
        type: "website",
        siteName: "Mobile App Development Services | Hire Mobile App Developers - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobile App Development Services | Hire Mobile App Developers - BigStep Tech",
        description: "Design and build high-performing, user-centric mobile applications with robust security and seamless user experiences across all devices.",
    },
};

export default function MobileAppDevelopmentLayout({
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
