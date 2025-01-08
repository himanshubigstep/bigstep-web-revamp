import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Product Engineering Services Company | Hire Product Developers - BigStep Tech",
    description: "Transform ideas into scalable, robust, and user-friendly products with expert product engineering, leveraging the latest technologies and best practices.",
    openGraph: {
        title: "Product Engineering Services Company | Hire Product Developers - BigStep Tech",
        description: "Transform ideas into scalable, robust, and user-friendly products with expert product engineering, leveraging the latest technologies and best practices.",
        url: "https://bigsteptech.com/services/product-engineering",
        type: "website",
        siteName: "Product Engineering Services Company | Hire Product Developers - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Product Engineering Services Company | Hire Product Developers - BigStep Tech",
        description: "Transform ideas into scalable, robust, and user-friendly products with expert product engineering, leveraging the latest technologies and best practices.",
    },
};

export default function ProductEngineeringLayout({
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
