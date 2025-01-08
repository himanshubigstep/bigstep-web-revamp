import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Kubernetes Adoption Solutions | Hire Kubernetes Experts - BigStep Tech",
    description: "Leverage Kubernetes for scalable and secure containerized applications. Simplify deployment, management, and scaling with expert Kubernetes adoption.",
    openGraph: {
        title: "Kubernetes Adoption Solutions | Hire Kubernetes Experts - BigStep Tech",
        description: "Leverage Kubernetes for scalable and secure containerized applications. Simplify deployment, management, and scaling with expert Kubernetes adoption.",
        url: "https://bigsteptech.com/services/cloud-devops/kubernates-adoption",
        type: "website",
        siteName: "Kubernetes Adoption Solutions | Hire Kubernetes Experts - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kubernetes Adoption Solutions | Hire Kubernetes Experts - BigStep Tech",
        description: "Leverage Kubernetes for scalable and secure containerized applications. Simplify deployment, management, and scaling with expert Kubernetes adoption.",
    },
};

export default function KubernatesAdoptionLayout({
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
