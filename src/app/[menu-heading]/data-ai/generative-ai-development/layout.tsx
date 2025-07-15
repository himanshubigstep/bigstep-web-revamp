import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Generative AI Development Services | Hire GenAI App Developers - BigStep Tech",
    description: "Create cutting-edge AI systems to generate content, optimize processes, and drive innovation with tailored generative AI solutions.",
    openGraph: {
        title: "Generative AI Development Services | Hire GenAI App Developers - BigStep Tech",
        description: "Create cutting-edge AI systems to generate content, optimize processes, and drive innovation with tailored generative AI solutions.",
        url: "https://bigsteptech.com/services/data-ai/generative-ai-development",
        type: "website",
        siteName: "Generative AI Development Services | Hire GenAI App Developers - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Generative AI Development Services | Hire GenAI App Developers - BigStep Tech",
        description: "Create cutting-edge AI systems to generate content, optimize processes, and drive innovation with tailored generative AI solutions.",
    },
};

export default function GenerativeDevelopmentLayout({
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
