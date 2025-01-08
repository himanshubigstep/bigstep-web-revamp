import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "AWS Consulting & Development Services Company - BigStep Tech",
    description: "Maximize AWS potential with expert consulting and development. Optimize cloud infrastructure, enhance scalability, and drive innovation with tailored solutions.",
    openGraph: {
        title: "AWS Consulting & Development Services Company - BigStep Tech",
        description: "Maximize AWS potential with expert consulting and development. Optimize cloud infrastructure, enhance scalability, and drive innovation with tailored solutions.",
        url: "https://bigsteptech.com/specializations/aws-consulting-development",
        type: "website",
        siteName: "AWS Consulting & Development Services Company - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "AWS Consulting & Development Services Company - BigStep Tech",
        description: "Maximize AWS potential with expert consulting and development. Optimize cloud infrastructure, enhance scalability, and drive innovation with tailored solutions.",
    },
};

export default function AwsConsultingLayout({
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
