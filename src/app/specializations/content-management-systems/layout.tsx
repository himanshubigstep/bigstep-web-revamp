import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Content Management Systems (CMS) Solutions Company - BigStep Technologies",
    description: "Empower your digital presence with user-friendly CMS solutions. Manage, optimize, and scale content effortlessly with advanced tools and robust platforms.",
    openGraph: {
        title: "Content Management Systems (CMS) Solutions Company - BigStep Technologies",
        description: "Empower your digital presence with user-friendly CMS solutions. Manage, optimize, and scale content effortlessly with advanced tools and robust platforms.",
        url: "https://bigsteptech.com/specializations/content-management-systems",
        type: "website",
        siteName: "Content Management Systems (CMS) Solutions Company - BigStep Technologies",
    },
    twitter: {
        card: "summary_large_image",
        title: "Content Management Systems (CMS) Solutions Company - BigStep Technologies",
        description: "Empower your digital presence with user-friendly CMS solutions. Manage, optimize, and scale content effortlessly with advanced tools and robust platforms.",
    },
};

export default function ContentmanagementLayout({
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
