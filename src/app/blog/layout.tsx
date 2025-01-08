import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "The BigStep Blog - BigStep Tech",
    description: "Stay updated with expert perspectives on Digital Engineering, Cloud, AI, IoT, and cutting-edge tech. Discover insights that drive innovation.",
    openGraph: {
        title: "The BigStep Blog - BigStep Tech",
        description: "Stay updated with expert perspectives on Digital Engineering, Cloud, AI, IoT, and cutting-edge tech. Discover insights that drive innovation.",
        url: "https://bigsteptech.com/blog",
        type: "website",
        siteName: "The BigStep Blog - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "The BigStep Blog - BigStep Tech",
        description: "Stay updated with expert perspectives on Digital Engineering, Cloud, AI, IoT, and cutting-edge tech. Discover insights that drive innovation.",
    },
};

export default function BlogLayout({
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
