import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Partnerships | Unlock Innovation with our Leading Tech Partners - BigStep Tech",
    description: "Leverage BigStep’s partnerships with top tech providers for exclusive access to innovations, priority support, seamless integrations, and cost advantages.",
    openGraph: {
        title: "Partnerships | Unlock Innovation with our Leading Tech Partners - BigStep Tech",
        description: "Leverage BigStep’s partnerships with top tech providers for exclusive access to innovations, priority support, seamless integrations, and cost advantages.",
        url: "https://bigsteptech.com/partnerships",
        type: "website",
        siteName: "Partnerships | Unlock Innovation with our Leading Tech Partners - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "Partnerships | Unlock Innovation with our Leading Tech Partners - BigStep Tech",
        description: "Leverage BigStep’s partnerships with top tech providers for exclusive access to innovations, priority support, seamless integrations, and cost advantages.",
    },
};

export default function PartnershipLayout({
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
