import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SaaS Product & Architecture Development Services Company - BigStep Technologies",
    description: "Design and scale SaaS products with secure, scalable architecture. Leverage cutting-edge technologies for enhanced functionality and user engagement.",
    openGraph: {
        title: "SaaS Product & Architecture Development Services Company - BigStep Technologies",
        description: "Design and scale SaaS products with secure, scalable architecture. Leverage cutting-edge technologies for enhanced functionality and user engagement.",
        url: "https://bigsteptech.com/specializations/saas-products-architecture-development",
        type: "website",
        siteName: "SaaS Product & Architecture Development Services Company - BigStep Technologies",
    },
    twitter: {
        card: "summary_large_image",
        title: "SaaS Product & Architecture Development Services Company - BigStep Technologies",
        description: "Design and scale SaaS products with secure, scalable architecture. Leverage cutting-edge technologies for enhanced functionality and user engagement.",
    },
};

export default function SaasProductLayout({
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
