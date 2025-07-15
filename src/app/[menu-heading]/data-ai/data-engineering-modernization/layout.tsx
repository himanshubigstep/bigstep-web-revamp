import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Data Engineering & Modernization Solutions | Hire Data Engineers - BigStep Tech",
    description: "Modernize your data infrastructure for better performance and real-time analytics. Enable secure, scalable data systems with expert engineering.",
    openGraph: {
        title: "Data Engineering & Modernization Solutions | Hire Data Engineers - BigStep Tech",
        description: "Modernize your data infrastructure for better performance and real-time analytics. Enable secure, scalable data systems with expert engineering.",
        url: "https://bigsteptech.com/services/data-ai/data-engineering-modernization",
        type: "website",
        siteName: "Data Engineering & Modernization Solutions | Hire Data Engineers - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Data Engineering & Modernization Solutions | Hire Data Engineers - BigStep Tech",
        description: "Modernize your data infrastructure for better performance and real-time analytics. Enable secure, scalable data systems with expert engineering.",
    },
};

export default function DataEngineeringModernizationLayout({
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
