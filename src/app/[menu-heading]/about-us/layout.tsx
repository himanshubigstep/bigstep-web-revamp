import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About BigStep Technologies - AI-Driven Product Engineering & Digital Transformation Company",
    description: "BigStep Technologies is a Cloud-Native AI-Driven Custom Software Product Development, and Digital Transformation company.",
    openGraph: {
        title: "About BigStep Technologies - AI-Driven Product Engineering & Digital Transformation Company",
        description: "BigStep Technologies is a Cloud-Native AI-Driven Custom Software Product Development, and Digital Transformation company.",
        url: "https://bigsteptech.com/company/about-us",
        type: "website",
        siteName: "About BigStep Technologies - AI-Driven Product Engineering & Digital Transformation Company",
    },
    twitter: {
        card: "summary_large_image",
        title: "About BigStep Technologies - AI-Driven Product Engineering & Digital Transformation Company",
        description: "BigStep Technologies is a Cloud-Native AI-Driven Custom Software Product Development, and Digital Transformation company.",
    },
};

export default function AboutUsLayout({
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
