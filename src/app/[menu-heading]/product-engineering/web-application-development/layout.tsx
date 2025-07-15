import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Web Application Development Services | Hire Web Developers - BigStep Tech",
    description: "Create dynamic, secure, and scalable web applications tailored to your business needs. Leverage cutting-edge technology for exceptional user experiences.",
    openGraph: {
        title: "Web Application Development Services | Hire Web Developers - BigStep Tech",
        description: "Create dynamic, secure, and scalable web applications tailored to your business needs. Leverage cutting-edge technology for exceptional user experiences.",
        url: "https://bigsteptech.com/services/product-engineering/web-application-development",
        type: "website",
        siteName: "Web Application Development Services | Hire Web Developers - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Application Development Services | Hire Web Developers - BigStep Tech",
        description: "Create dynamic, secure, and scalable web applications tailored to your business needs. Leverage cutting-edge technology for exceptional user experiences.",
    },
};

export default function WebApplicationDevelopmentLayout({
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
