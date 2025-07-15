import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Live Video & Media Streaming Solutions Company - BigStep Tech",
    description: "Transform content delivery with live video and media streaming solutions. Engage viewers with chat, video calls, and flawless streaming.",
    openGraph: {
        title: "Live Video & Media Streaming Solutions Company - BigStep Tech",
        description: "Transform content delivery with live video and media streaming solutions. Engage viewers with chat, video calls, and flawless streaming.",
        url: "https://bigsteptech.com/specializations/live-video-media-streaming",
        type: "website",
        siteName: "Live Video & Media Streaming Solutions Company - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Live Video & Media Streaming Solutions Company - BigStep Tech",
        description: "Transform content delivery with live video and media streaming solutions. Engage viewers with chat, video calls, and flawless streaming.",
    },
};

export default function liveVideoStreamingLayout({
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
