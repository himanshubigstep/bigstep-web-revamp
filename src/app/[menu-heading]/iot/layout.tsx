import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Internet of Things Solutions | Hire IoT Experts - BigStep Tech",
    description: "Leverage IoT solutions to enhance operations, gain actionable insights, and drive innovation. Build scalable, secure, and efficient IoT ecosystems.",
    openGraph: {
        title: "Internet of Things Solutions | Hire IoT Experts - BigStep Tech",
        description: "Leverage IoT solutions to enhance operations, gain actionable insights, and drive innovation. Build scalable, secure, and efficient IoT ecosystems.",
        url: "https://bigsteptech.com/iot",
        type: "website",
        siteName: "Internet of Things Solutions | Hire IoT Experts - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Internet of Things Solutions | Hire IoT Experts - BigStep Tech",
        description: "Leverage IoT solutions to enhance operations, gain actionable insights, and drive innovation. Build scalable, secure, and efficient IoT ecosystems.",
    },
};

export default function IotLayout({
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
