import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Managed Cloud Services Provider | Hire Cloud Experts - BigStep Tech",
    description: "Optimize, secure, and manage your cloud environment with expert-managed cloud services. Achieve peak performance and focus on your core business goals.",
    openGraph: {
        title: "Managed Cloud Services Provider | Hire Cloud Experts - BigStep Tech",
        description: "Optimize, secure, and manage your cloud environment with expert-managed cloud services. Achieve peak performance and focus on your core business goals.",
        url: "https://bigsteptech.com/services/cloud-devops/managed-cloud-services",
        type: "website",
        siteName: "Managed Cloud Services Provider | Hire Cloud Experts - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Managed Cloud Services Provider | Hire Cloud Experts - BigStep Tech",
        description: "Optimize, secure, and manage your cloud environment with expert-managed cloud services. Achieve peak performance and focus on your core business goals.",
    },
};

export default function ManagedCloudServicesLayout({
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
