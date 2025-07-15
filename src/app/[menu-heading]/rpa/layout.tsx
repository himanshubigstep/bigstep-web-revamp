import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Robotic Process Automation Solutions | Hire RPA Experts - BigStep Tech",
    description: "Streamline operations with intelligent RPA solutions. Automate repetitive tasks, reduce errors, and boost efficiency with secure and scalable RPA services.",
    openGraph: {
        title: "Robotic Process Automation Solutions | Hire RPA Experts - BigStep Tech",
        description: "Streamline operations with intelligent RPA solutions. Automate repetitive tasks, reduce errors, and boost efficiency with secure and scalable RPA services.",
        url: "https://bigsteptech.com/rpa",
        type: "website",
        siteName: "Robotic Process Automation Solutions | Hire RPA Experts - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Robotic Process Automation Solutions | Hire RPA Experts - BigStep Tech",
        description: "Streamline operations with intelligent RPA solutions. Automate repetitive tasks, reduce errors, and boost efficiency with secure and scalable RPA services.",
    },
};

export default function RpaLayout({
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
