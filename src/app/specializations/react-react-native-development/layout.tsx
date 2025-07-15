import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "React & React Native Development | Hire Web & Mobile App Developers - BigStep Tech",
    description: "Create high-performance web and mobile apps with React and React Native. Deliver scalable, responsive, and seamless user experiences across platforms.",
    openGraph: {
        title: "React & React Native Development | Hire Web & Mobile App Developers - BigStep Tech",
        description: "Create high-performance web and mobile apps with React and React Native. Deliver scalable, responsive, and seamless user experiences across platforms.",
        url: "https://bigsteptech.com/specializations/react-react-native-development",
        type: "website",
        siteName: "React & React Native Development | Hire Web & Mobile App Developers - BigStep Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "React & React Native Development | Hire Web & Mobile App Developers - BigStep Tech",
        description: "Create high-performance web and mobile apps with React and React Native. Deliver scalable, responsive, and seamless user experiences across platforms.",
    },
};

export default function ReactNativeLayout({
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
