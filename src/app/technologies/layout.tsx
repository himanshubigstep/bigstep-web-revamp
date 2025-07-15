import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Technologies | Advanced Solutions for Future-Ready Businesses - BigStep Tech",
    description: "Leverage cutting-edge technologies with BigStep. Build scalable, tailored solutions in app development, AI, cloud, and IoT to transform your business.",
    openGraph: {
        title: "Technologies | Advanced Solutions for Future-Ready Businesses - BigStep Tech",
        description: "Leverage cutting-edge technologies with BigStep. Build scalable, tailored solutions in app development, AI, cloud, and IoT to transform your business.",
        url: "https://bigsteptech.com/technologies",
        type: "website",
        siteName: "Technologies | Advanced Solutions for Future-Ready Businesses - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Technologies | Advanced Solutions for Future-Ready Businesses - BigStep Tech",
        description: "Leverage cutting-edge technologies with BigStep. Build scalable, tailored solutions in app development, AI, cloud, and IoT to transform your business.",
    },
};

export default function TechnologiesLayout({
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
