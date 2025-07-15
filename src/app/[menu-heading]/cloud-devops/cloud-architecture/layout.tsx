import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cloud Architecture Services | Hire Cloud Architects - BigStep Tech",
    description: "Design and implement scalable, secure, and cost-efficient cloud architectures. Build a robust foundation for digital transformation and future growth.",
    openGraph: {
        title: "Cloud Architecture Services | Hire Cloud Architects - BigStep Tech",
        description: "Design and implement scalable, secure, and cost-efficient cloud architectures. Build a robust foundation for digital transformation and future growth.",
        url: "https://bigsteptech.com/services/cloud-devops/cloud-architecture",
        type: "website",
        siteName: "Cloud Architecture Services | Hire Cloud Architects - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cloud Architecture Services | Hire Cloud Architects - BigStep Tech",
        description: "Design and implement scalable, secure, and cost-efficient cloud architectures. Build a robust foundation for digital transformation and future growth.",
    },
};

export default function CloudArchitectureLayout({
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
