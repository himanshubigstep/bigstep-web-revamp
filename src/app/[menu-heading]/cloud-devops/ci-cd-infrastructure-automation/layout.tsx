import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "CI/CD & Infrastructure Automation Services | Hire CI/CD Experts - BigStep Tech",
    description: "Streamline development with CI/CD and infrastructure automation. Enable faster software delivery, reduced errors, and scalable deployment pipelines.",
    openGraph: {
        title: "CI/CD & Infrastructure Automation Services | Hire CI/CD Experts - BigStep Tech",
        description: "Streamline development with CI/CD and infrastructure automation. Enable faster software delivery, reduced errors, and scalable deployment pipelines.",
        url: "https://bigsteptech.com/services/cloud-devops/ci-cd-infrastructure-automation",
        type: "website",
        siteName: "CI/CD & Infrastructure Automation Services | Hire CI/CD Experts - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "CI/CD & Infrastructure Automation Services | Hire CI/CD Experts - BigStep Tech",
        description: "Streamline development with CI/CD and infrastructure automation. Enable faster software delivery, reduced errors, and scalable deployment pipelines.",
    },
};

export default function CiCdLayout({
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
