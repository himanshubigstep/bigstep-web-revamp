import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cloud & DevOps Solutions | Hire Cloud & DevOps Experts - BigStep Tech",
    description: "Streamline your IT infrastructure with expert Cloud and DevOps services. Achieve scalability, agility, and efficiency with CI/CD pipelines and Kubernetes.",
    openGraph: {
        title: "Cloud & DevOps Solutions | Hire Cloud & DevOps Experts - BigStep Tech",
        description: "Streamline your IT infrastructure with expert Cloud and DevOps services. Achieve scalability, agility, and efficiency with CI/CD pipelines and Kubernetes.",
        url: "https://bigsteptech.com/services/cloud-devops",
        type: "website",
        siteName: "Cloud & DevOps Solutions | Hire Cloud & DevOps Experts - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cloud & DevOps Solutions | Hire Cloud & DevOps Experts - BigStep Tech",
        description: "Streamline your IT infrastructure with expert Cloud and DevOps services. Achieve scalability, agility, and efficiency with CI/CD pipelines and Kubernetes.",
    },
};

export default function CloudDevOpsLayout({
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
