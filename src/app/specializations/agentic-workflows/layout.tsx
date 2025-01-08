import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agentic Workflow Solutions Provider - BigStep Tech",
    description: "Streamline operations with automated workflows. Enhance efficiency, reduce errors, and scale processes seamlessly with cutting-edge agentic workflow solutions.",
    openGraph: {
        title: "Agentic Workflow Solutions Provider - BigStep Tech",
        description: "Streamline operations with automated workflows. Enhance efficiency, reduce errors, and scale processes seamlessly with cutting-edge agentic workflow solutions.",
        url: "https://bigsteptech.com/specializations/agentic-workflows",
        type: "website",
        siteName: "Agentic Workflow Solutions Provider - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Agentic Workflow Solutions Provider - BigStep Tech",
        description: "Streamline operations with automated workflows. Enhance efficiency, reduce errors, and scale processes seamlessly with cutting-edge agentic workflow solutions.",
    },
};

export default function AgenticWorkFlowLayout({
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
