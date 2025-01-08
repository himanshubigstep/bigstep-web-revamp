import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "CTO as a Service | Strategic Tech Leadership for Innovation - BigStep Tech",
    description: "Transform your business with expert CTO as a Service. Align tech with goals, drive innovation, manage risks, and scale with tailored leadership solutions.",
    openGraph: {
        title: "CTO as a Service | Strategic Tech Leadership for Innovation - BigStep Tech",
        description: "Transform your business with expert CTO as a Service. Align tech with goals, drive innovation, manage risks, and scale with tailored leadership solutions.",
        url: "https://bigsteptech.com/engagement-models/cto-as-a-service",
        type: "website",
        siteName: "CTO as a Service | Strategic Tech Leadership for Innovation - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "CTO as a Service | Strategic Tech Leadership for Innovation - BigStep Tech",
        description: "Transform your business with expert CTO as a Service. Align tech with goals, drive innovation, manage risks, and scale with tailored leadership solutions.",
    },
};

export default function CtoAsServiceLayout({
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
