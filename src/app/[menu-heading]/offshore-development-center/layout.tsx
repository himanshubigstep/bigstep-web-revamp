import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Offshore Development Center | Cost-Effective Tech Expertise - BigStep Tech",
    description: "Set up a dedicated offshore development center with expert teams, advanced infrastructure, and cost-efficient solutions tailored to your business needs.",
    openGraph: {
        title: "Offshore Development Center | Cost-Effective Tech Expertise - BigStep Tech",
        description: "Set up a dedicated offshore development center with expert teams, advanced infrastructure, and cost-efficient solutions tailored to your business needs.",
        url: "https://bigsteptech.com/engagement-models/offshore-development-center",
        type: "website",
        siteName: "Offshore Development Center | Cost-Effective Tech Expertise - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Offshore Development Center | Cost-Effective Tech Expertise - BigStep Tech",
        description: "Set up a dedicated offshore development center with expert teams, advanced infrastructure, and cost-efficient solutions tailored to your business needs.",
    },
};

export default function OffShoreDevelopmentCenterLayout({
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
