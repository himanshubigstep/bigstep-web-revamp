import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Culture at BigStep | Innovation, Collaboration & Growth - BigStep Tech",
    description: "Experience BigStep's culture of innovation, collaboration, and growth with flexible hours, wellness programs, team events, and learning opportunities.",
    openGraph: {
        title: "Culture at BigStep | Innovation, Collaboration & Growth - BigStep Tech",
        description: "Experience BigStep's culture of innovation, collaboration, and growth with flexible hours, wellness programs, team events, and learning opportunities.",
        url: "https://bigsteptech.com/culture",
        type: "website",
        siteName: "Culture at BigStep | Innovation, Collaboration & Growth - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Culture at BigStep | Innovation, Collaboration & Growth - BigStep Tech",
        description: "Experience BigStep's culture of innovation, collaboration, and growth with flexible hours, wellness programs, team events, and learning opportunities.",
    },
};

export default function CultureLayout({
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
