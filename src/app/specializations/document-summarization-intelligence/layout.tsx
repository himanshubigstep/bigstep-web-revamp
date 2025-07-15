import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Document Summarization & Intelligence Solutions Provider - BigStep Tech",
    description: "Streamline document management with AI-powered summarization. Extract insights, improve efficiency, and enhance decision-making with advanced solutions.",
    openGraph: {
        title: "Document Summarization & Intelligence Solutions Provider - BigStep Tech",
        description: "Streamline document management with AI-powered summarization. Extract insights, improve efficiency, and enhance decision-making with advanced solutions.",
        url: "https://bigsteptech.com/specializations/document-summarization-intelligence",
        type: "website",
        siteName: "Document Summarization & Intelligence Solutions Provider - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Document Summarization & Intelligence Solutions Provider - BigStep Tech",
        description: "Streamline document management with AI-powered summarization. Extract insights, improve efficiency, and enhance decision-making with advanced solutions.",
    },
};

export default function DocumentSummarizationLayout({
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
