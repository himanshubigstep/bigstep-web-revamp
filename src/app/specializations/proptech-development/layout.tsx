import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "PropTech Solution Development Company - BigStep Tech",
    description: "Revolutionize real estate with PropTech solutions. Enhance tenant experiences, streamline operations, and drive growth with advanced IoT, AI, and analytics.",
    openGraph: {
        title: "PropTech Solution Development Company - BigStep Tech",
        description: "Revolutionize real estate with PropTech solutions. Enhance tenant experiences, streamline operations, and drive growth with advanced IoT, AI, and analytics.",
        url: "https://bigsteptech.com/specializations/proptech-development",
        type: "website",
        siteName: "PropTech Solution Development Company - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "PropTech Solution Development Company - BigStep Tech",
        description: "Revolutionize real estate with PropTech solutions. Enhance tenant experiences, streamline operations, and drive growth with advanced IoT, AI, and analytics.",
    },
};

export default function PropTechLayout({
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
