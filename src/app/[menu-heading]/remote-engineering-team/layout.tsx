import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Remote Engineering Team | Flexible & Scalable Global Talent - BigStep Tech",
    description: "Effortlessly scale your projects with a remote engineering team. Access global talent, enhance collaboration, and achieve cost-effective, high-quality outcomes.",
    openGraph: {
        title: "Remote Engineering Team | Flexible & Scalable Global Talent - BigStep Tech",
        description: "Effortlessly scale your projects with a remote engineering team. Access global talent, enhance collaboration, and achieve cost-effective, high-quality outcomes.",
        url: "https://bigsteptech.com/engagement-models/remote-engineering-team",
        type: "website",
        siteName: "Remote Engineering Team | Flexible & Scalable Global Talent - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Remote Engineering Team | Flexible & Scalable Global Talent - BigStep Tech",
        description: "Effortlessly scale your projects with a remote engineering team. Access global talent, enhance collaboration, and achieve cost-effective, high-quality outcomes.",
    },
};

export default function RemoteEngineeringTeamLayout({
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
