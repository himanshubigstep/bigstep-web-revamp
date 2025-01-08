import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Custom Software & Cloud-Native Development Services - BigStep Tech",
    description: "Expert custom software and cloud-native app development to build scalable, secure, and robust solutions tailored to your business needs.",
    openGraph: {
        title: "Custom Software & Cloud-Native Development Services - BigStep Tech",
        description: "Expert custom software and cloud-native app development to build scalable, secure, and robust solutions tailored to your business needs.",
        url: "https://bigsteptech.com/services/product-engineering/custom-software-development",
        type: "website",
        siteName: "Custom Software & Cloud-Native Development Services - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Software & Cloud-Native Development Services - BigStep Tech",
        description: "Expert custom software and cloud-native app development to build scalable, secure, and robust solutions tailored to your business needs.",
    },
};

export default function CustomSoftwareDevelopmentLayout({
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
