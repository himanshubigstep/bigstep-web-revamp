import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "AI & ML Solutions | Hire AI & ML Developers - BigStepTech",
    description: "Develop tailored AI and machine learning solutions for predictive insights, process automation, and intelligent decision-making.",
    openGraph: {
        title: "AI & ML Solutions | Hire AI & ML Developers - BigStepTech",
        description: "Develop tailored AI and machine learning solutions for predictive insights, process automation, and intelligent decision-making.",
        url: "https://bigsteptech.com/services/data-ai/ai-ml",
        type: "website",
        siteName: "AI & ML Solutions | Hire AI & ML Developers - BigStepTech",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI & ML Solutions | Hire AI & ML Developers - BigStepTech",
        description: "Develop tailored AI and machine learning solutions for predictive insights, process automation, and intelligent decision-making.",
    },
};

export default function AiMlLayout({
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
