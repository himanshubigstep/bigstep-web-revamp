// 'use client'
// import { fetchHomepageData } from '@/api-data/api'
// import Clients from '@/app/components/common/clients/Clients'
// import ContactUs from '@/app/components/common/contact-us/ContactUs'
// import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner'
// import MilesTone from '@/app/components/common/milestones-data/MilesTone'
// import TopBanner from '@/app/components/common/top-banner/TopBanner'
// import HolisticApproach from '@/app/components/holistic-approach/HolisticApproach'
// import ProductDevelopment from '@/app/components/product-development/ProductDevelopment'

// interface HomePageData {
//   id: number;
//   home_introduction: {
//     id: number;
//     heading: string;
//     button_text: string;
//     description: string;
//     background_image: {
//       data: {
//         attributes: {
//           formats: {
//             large: {
//               url: string
//             }
//           }
//         }
//       }
//     }
//   }[];
//   Message: {
//     id: number;
//     heading: string;
//     button_text: string | null;
//     description: string;
//     background_image: any
//   };
//   success_stories: {
//     id: number;
//     heading: string;
//     button_text: string;
//     description: string;
//   };
//   technologies: {
//     id: number;
//     heading: string;
//     button_text: string;
//     description: string;
//   }[];
//   milestones: {
//     id: number;
//     heading: string;
//     button_text: string | null;
//     description: string;
//     background_image: {
//       data: {
//         attributes: {
//           formats: {
//             large: {
//               url: string
//             }
//           }
//         }
//       }
//     }
//   };
//   milestones1: {
//     id: number;
//     Years: {
//       id: number;
//       description: string;
//       heading: string;
//     };
//     cloud_projects: {
//       id: number;
//       description: string;
//       heading: string;
//     };
//     deliveries: {
//       id: number;
//       description: string;
//       heading: string;
//     };
//     experts: {
//       id: number;
//       description: string;
//       heading: string;
//     };
//   }
//   partners: {
//     id: number;
//     heading: string;
//     button_text: string;
//     description: string;
//     background_image: {
//       data: {
//         attributes: {
//           formats: {
//             large: {
//               url: string
//             }
//           }
//         }
//       }
//     }
//   }[];
//   client_reviews: {
//     id: number;
//     heading: string;
//     button_text: string | null;
//     description: string;
//     background_image: {
//       data: {
//         attributes: {
//           formats: {
//             large: {
//               url: string
//             }
//           }
//         }
//       }
//     }
//   }[];
//   home_page_blogs: {
//     id: number;
//     heading: string;
//     button_text: string | null;
//     description: string | null;
//   }[];
//   culture: {
//     id: number;
//     heading: string;
//     description: string;
//   };
//   faq: {
//     id: number;
//     heading: string;
//     button_text: string | null;
//     description: string;
//   }[];
//   trusted_by: {
//     heading: string;
//     description: string;
//   };
//   latest_info: {
//     background_image: {
//       data: {
//         attributes: {
//           formats: {
//             large: {
//               url: string
//             }
//           }
//         }
//       }
//     }
//     heading: string;
//   }
//   get_in_touch: any[];
// }
// import React, { useEffect, useState } from 'react'

const RemoteEngineeringTeam = () => {
    // const [homePageData, setHomePageData] = useState<HomePageData | null>(null)
    // const [loading, setLoading] = useState<boolean>(true);

    // useEffect(() => {
    //   const fetchHomePageDataResponse = async () => {
    //     try {
    //       const response = await fetchHomepageData();
    //       setHomePageData(response.attributes);
  
    //     } catch (error) {
    //       console.log(error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
  
    //   fetchHomePageDataResponse();
    // }, []);

    // if (loading) {
    //   return <LoaderSpinner />;
    // }
    
  return (    
    <div className='poppins'>
        {/* <TopBanner />
        <HolisticApproach />
        <ProductDevelopment />
        <MilesTone homePageData={homePageData} />
        <Clients
            title={homePageData?.client_reviews[0].heading || ''}
            description={homePageData?.client_reviews[0].description || ''}
            bgImage={homePageData ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${homePageData.client_reviews[0].background_image.data.attributes.formats.large.url}`  : ''} 
        />
        <ContactUs buttonText="Send" contactUsData = {homePageData?.get_in_touch || []} /> */}
    </div>
  )
}

export default RemoteEngineeringTeam