import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Data & AI Solutions | Hire Data & AI Experts - BigStep Tech",
    description: "Leverage data engineering, AI, and machine learning to unlock actionable insights. Build intelligent, scalable systems for business transformation.",
    openGraph: {
        title: "Data & AI Solutions | Hire Data & AI Experts - BigStep Tech",
        description: "Leverage data engineering, AI, and machine learning to unlock actionable insights. Build intelligent, scalable systems for business transformation.",
        url: "https://bigsteptech.com/services/data-ai",
        type: "website",
        siteName: "Data & AI Solutions | Hire Data & AI Experts - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Data & AI Solutions | Hire Data & AI Experts - BigStep Tech",
        description: "Leverage data engineering, AI, and machine learning to unlock actionable insights. Build intelligent, scalable systems for business transformation.",
    },
};

export default function DataAiLayout({
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
