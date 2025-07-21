"use client";

import { useEffect, useState } from 'react';

import { fetchClientTestimonial, fetchdiffBigStepData, fetchObjective, fetchTechnologyStack, fetchwhyBigStepData, fetchCaseStudyPage, fetchimplementation, fetchApproachType, fetchClientOverview } from '@/api-data/api';
 import { fetchkeyfeature, fetchoperation } from "@/api-data/api";

// Helper to build Strapi media URLs
const getStrapiMedia = (url: string | undefined) => {
  if (!url) return null;
  if (url.startsWith('http')) return url;
  return `${process.env.NEXT_PUBLIC_IMAGE_URL || 'https://api.bigsteptech.com'}${url}`;
};

export default function CaseStudiesPage() {
 
  // Loading and error states for both
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // Theme detection for background
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  
  const [diffBigStep, setdiffBigStep] = useState<unknown | null>(null);
 
  const [whyBigStep, setwhyBigStep] = useState<unknown | null>(null);
  const [clientTestimonial, setclientTestimonial] = useState<unknown | null>(null);
  const [technologyStack , setTechnologyStack] = useState<unknown | null>(null);
  const [objective , setObjective] = useState<unknown | null>(null);
  const [data , setData] = useState<unknown | null>(null);
  const [keyfeature , setkeyfeature] = useState<unknown | null>(null);
  const [implementation , setimplementation] = useState<unknown | null>(null);
  const [approachtype, setApproachtype] = useState<unknown | null>(null);
  const [operation, setoperation] = useState<unknown | null>(null);
  const [clientoverview, setclientoverview] = useState<unknown | null>(null);
  

  useEffect(() => {
    // Check system theme
    const match = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(match.matches);
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    match.addEventListener('change', handler);
    return () => match.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [diff, why, client, tech, obj, caseStudy] = await Promise.all([
          fetchdiffBigStepData(),
          fetchwhyBigStepData(),
          fetchClientTestimonial(),
          fetchTechnologyStack(),
          fetchObjective(),
          fetchCaseStudyPage(),
        ]);
        setdiffBigStep(diff);
        setwhyBigStep(why);
        setclientTestimonial(client);
        setTechnologyStack(tech);
        setObjective(obj);
        setData(caseStudy);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);
  


  useEffect(() => {
    const fetchAllDetails = async () => {
      try {
        const [keyfeatureData, implementationData, approachtypeData, operationData, clientoverviewData] = await Promise.all([
          fetchkeyfeature(),
          fetchimplementation(),
          fetchApproachType(),
          fetchoperation(),
          fetchClientOverview(),
        ]);
        setkeyfeature(keyfeatureData);
        setimplementation(implementationData);
        setApproachtype(approachtypeData);
        setoperation(operationData);
        setclientoverview(clientoverviewData);
      } finally {
        setLoading(false);
      }
    };
    fetchAllDetails();
  }, []);




   if (loading) return <div className="text-center text-gray-400 py-12">Loading…</div>;
  // if (error) return <div className="text-center text-red-400 py-12">Failed to load case studies.</div>;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: isDarkMode
          ? 'linear-gradient(to bottom right, #0f172a, #1e293b 90%)'
          : 'linear-gradient(to bottom right, #f0f6ff, #e0e7ff 90%)',
        color: isDarkMode ? '#e0e7ff' : undefined,
        transition: 'background 0.3s',
      }}
    >
      <section
        className="relative pt-36 pb-20 bg-white dark:bg-black"
        style={{
          color: isDarkMode ? '#f3f4f6' : undefined,
        }}
      >
        <div>
        <div className="flex justify-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {/* <i className="ri-award-line w-4 h-4 flex items-center justify-center mr-2"></i> */}
            {data?.attributes?.title}
          </div>
        </div>
        </div>
        
        <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
  style={{
    backgroundImage: `url('${
      isDarkMode
        ? getStrapiMedia(data?.attributes?.dark_background_image?.data?.attributes?.url)
        : getStrapiMedia(data?.attributes?.light_background_image?.data?.attributes?.url)
    }')`,
  }}
></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            
            <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">{data?.attributes?.casestudy_heading?.heading}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{data?.attributes?.casestudy_heading?.description}</p>
            
          </div>
        </div>
      </section>
      
     
      {/* Case Study Cards Section */}
      
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
            
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">{clientoverview?.attributes?.client_overview?.heading}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{clientoverview?.attributes?.client_overview?.sub_heading}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{clientoverview?.attributes?.client_overview?.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                
                  {clientoverview?.attributes?.client_data?.map((item: any, idx: number) => {
                  if (!item.heading && !item.description && !item.icon?.data) return null;
                
                    const iconUrl = getStrapiMedia(item.icon?.data?.attributes?.url)
                    
                    const bgColors = ['bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-orange-50'];
                    const colorClass = bgColors[idx % bgColors.length];
                
                    return (
                      <div key={item.id || idx} className={`${colorClass} dark:bg-gray-900 p-4 rounded-lg`}>
                        <div className="flex items-center mb-2">
                          {iconUrl ? (
                            <img src={iconUrl} alt={item.heading || ''} className="w-5 h-5 mr-2 object-contain" />
                          ) : (
                            <span className="w-5 h-5 mr-2 text-gray-400">?</span>
                          )}
                          <span className="font-semibold text-gray-800 dark:text-gray-200">
                            {item.heading || 'N/A'}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{item.description || 'N/A'}</p>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
            <div className="lg:pl-8">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
                
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                  {operation?.attributes?.operation?.heading || 'Core Operations'}
                </h3>
                <div className="space-y-4">
                  {operation?.attributes?.operation?.operation_type?.map((item: any) => (
                    <div className="flex items-start" key={item.id}>
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-200">{item.heading}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-gray-100">{data?.attributes?.objective_title?.heading}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{data?.attributes?.objective_title?.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(objective) && objective.map((obj: any, idx: number) => {
              const iconUrl = getStrapiMedia(obj.attributes.icon?.data?.attributes?.url) || undefined;
              return (
                <div key={obj.id || idx} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    {iconUrl ? (
                      <img src={iconUrl} alt="Icon" className="w-8 h-8 object-contain" />
                    ) : (
                      <i className="ri-file-text-line w-6 h-6 flex items-center justify-center text-blue-600"></i>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{obj.attributes.heading}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{obj.attributes.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      
      <section className="py-16 bg-gray-50 dark:bg-black">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-gray-100">
        {data?.attributes?.approach_heading?.heading}
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
        {data?.attributes?.approach_heading?.description}
      </p>
    </div>

    {/* Two-Column Grid: Overview & Tools */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      {/* Left Column: High-Level Solution Overview */}
      <div>
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-8 dark:text-gray-100">
          {approachtype?.attributes?.approach_type[0].heading}
        </h3>
        <div className="space-y-6">
          {approachtype?.attributes?.approach_type[0].type?.map((item: any, idx: number) => {
            const iconUrl = getStrapiMedia(item.icon?.data?.attributes?.url);
            const backgroundUrl = getStrapiMedia(item.background?.data?.attributes?.url);
            return (
              <div key={item.id || idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    {iconUrl ? (
                      <img src={iconUrl} alt="Icon" className="w-8 h-8 object-contain" />
                    ) : (
                      <i className="ri-robot-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{item.heading}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
                {backgroundUrl && (
                  <img
                    src={backgroundUrl}
                    alt="Background"
                    className="w-full h-20 object-cover rounded-lg mt-4"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Technologies & Tools */}
      <div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-8 dark:text-gray-100">
        {approachtype?.attributes?.approach_type[1].heading}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {approachtype?.attributes?.approach_type[1].type?.map((item: any, idx: number) => {
          const iconUrl = getStrapiMedia(item.icon?.data?.attributes?.url);
          const backgroundUrl = getStrapiMedia(item.background?.data?.attributes?.url);
          return (
            <div key={item.id || idx} className="bg-white p-4 rounded-lg border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                  {iconUrl ? (
                    <img src={iconUrl} alt="Icon" className="w-8 h-8 object-contain" />
                  ) : (
                    <i className="ri-brain-line w-6 h-6 flex items-center justify-center text-blue-600"></i>
                  )}
                </div>
                <h4 className="font-medium text-gray-800 mb-1">{item.heading}</h4>
                <p className="text-xs text-gray-600">{item.description}</p>
                {backgroundUrl && (
                  <img src={backgroundUrl} alt="Background" className="w-full h-12 object-cover rounded-lg mt-2" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>

    {/* Implementation Methodology */}
    <section>
      <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center dark:text-gray-100">
        {data?.attributes?.implementation?.heading}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.isArray(implementation?.attributes?.implementation?.type) &&
          implementation.attributes.implementation.type.map((item: any, idx: number) => {
            const iconUrl = getStrapiMedia(item.icon?.data?.attributes?.url);
            return (
              <div key={item.id || idx} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">{idx + 1}</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2 dark:text-gray-100">{item.heading}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            );
          })}
      </div>
    </section>
  </div>
</section>

      
      <section className="py-16 bg-gray-50 dark:bg-black">
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-gray-100">{data?.attributes?.keyfeature_heading?.heading}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-300">{data?.attributes?.keyfeature_heading?.description}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          

{Array.isArray(keyfeature?.attributes?.key_features) &&
  keyfeature.attributes.key_features.map((feature: any, idx: number) => {
    const iconUrl = getStrapiMedia(
      feature?.icon?.data?.attributes?.formats?.thumbnail?.url ||
      feature?.icon?.data?.attributes?.url
    );

    // console.log("🔍 Single feature:", feature);
    // console.log("🖼️ Icon raw URL:", feature?.icon?.data?.attributes?.url);
    // console.log("🌐 Final icon URL:", iconUrl);

    return (
      <div
        key={feature.id || idx}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start mb-4"
      >
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
          {iconUrl ? (
            <img
              src={iconUrl}
              alt={feature.heading || "Icon"}
              className="w-8 h-8 object-contain"
            />
          ) : (
            <i className="ri-file-text-line w-6 h-6 flex items-center justify-center text-blue-600"></i>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.heading}</h3>
          <p className="text-gray-600 text-sm">{feature.description}</p>
        </div>
      </div>
    );
  })}


          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-gray-100">{data?.attributes?.technology_heading?.heading}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-300">{data?.attributes?.technology_heading?.description}</p>
          </div>
         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
           {Array.isArray(technologyStack) && technologyStack.map((item: any, idx: number) => (
             <div key={item.id || idx}>
               <h3 className="text-xl font-semibold text-gray-800 mb-6 dark:text-gray-100">{item.attributes.type}</h3>
               <div className="space-y-4">
                 {Array.isArray(item.attributes.sub_type) && item.attributes.sub_type.map((sub: any, subIdx: number) => (
                   <div key={sub.id || subIdx} className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                     <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                       {getStrapiMedia(sub.image?.data?.attributes?.url) ? (
                         <img
                           src={getStrapiMedia(sub.image.data.attributes.url) || undefined}
                           alt={sub.heading}
                           className="w-8 h-8 object-contain"
                         />
                       ) : (
                         <i className="ri-brain-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                       )}
                     </div>
                     <div>
                       <h4 className="font-medium text-gray-800">{sub.heading}</h4>
                       <p className="text-xs text-gray-600">{sub.description}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           ))}
         </div>
          
        </div>
      </section>
      <section className=" min-h-screen flex items-center image.pngs bg-gray-50 dark:bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-gray-100">{data?.attributes?.clientTestimonal_heading?.heading}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{data?.attributes?.clientTestimonal_heading?.description}</p>
          </div>
          <div className="grid grid-cols-1 justify-items-center min-h-[400px] ">
            
            <div className="flex justify-center items-center h-full">
              {Array.isArray(clientTestimonial) && clientTestimonial.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        {clientTestimonial && Array.isArray(clientTestimonial) && clientTestimonial[0] &&
                          typeof clientTestimonial[0] === 'object' &&
                          'attributes' in clientTestimonial[0] &&
                          getStrapiMedia(clientTestimonial[0].attributes.icon?.data?.attributes?.url) ? (
                            <img
                              src={getStrapiMedia(clientTestimonial[0].attributes.icon.data.attributes.url) || undefined}
                              alt={clientTestimonial[0].attributes.icon.data.attributes.alternativeText || 'icon'}
                              className="w-8 h-8 object-contain"
                            />
                          ) : (
                            <i className="ri-double-quotes-l text-blue-600 text-xl"></i>
                          )}
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex text-yellow-400 mb-2">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">{clientTestimonial[0].attributes.description}</blockquote>
                  <div className="flex items-center">
                    {getStrapiMedia(clientTestimonial[0].attributes.client_photo?.data?.attributes?.url) ? (
                      <img
                        src={getStrapiMedia(clientTestimonial[0].attributes.client_photo.data.attributes.url) || undefined}
                        alt={clientTestimonial[0].attributes.client_name || 'Client'}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {clientTestimonial[0].attributes.client_name?.split(' ').map((n: string) => n[0]).join('').slice(0,2)}
                      </div>
                    )}
                    <div className="ml-4">
                      <div className="font-semibold text-gray-900">{clientTestimonial[0].attributes.client_name}</div>
                      <div className="text-sm text-gray-600">{clientTestimonial[0].attributes.client_intro}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
            
          
        </div>
      </section>
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-gray-100">{whyBigStep?.attributes?.whybigstep_heading?.heading}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-300">{whyBigStep?.attributes?.whybigstep_heading?.description}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 dark:text-gray-100">{diffBigStep?.attributes?.difference?.heading}</h3>
              <div className="space-y-6">
                {typeof diffBigStep === 'object' && diffBigStep !== null && 'attributes' in diffBigStep && Array.isArray((diffBigStep as any).attributes.difference?.type) && (diffBigStep as any).attributes.difference.type.map((item: {
                    id: number;

                    heading: string;
                    description: string;
                    icon?: { data?: { attributes?: { url?: string; name?: string } } };
                  }, idx: number) => (
                    <div key={item.id || idx} className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        {item.icon?.data?.attributes?.url ? (
                          <img src={`https://api-stag-bigstep.bigsteptech.com${item.icon.data.attributes.url}`} alt={item.icon.data.attributes.name || 'icon'} className="w-8 h-8 object-contain" />
                        ) : (
                          <i className="ri-award-line w-6 h-6 flex items-center justify-center text-blue-600"></i>
                        )}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 dark:text-gray-100">{item.heading}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 dark:text-gray-100">{whyBigStep?.attributes?.whychoose_heading}</h3>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="space-y-6">
                  {whyBigStep?.attributes?.choose_reason && Array.isArray(whyBigStep.attributes.choose_reason) && whyBigStep.attributes.choose_reason.map((reason: {
                    id: number;
                    heading: string;
                    description: string;
                    hex_code?: string;
                  }, idx: number) => (
                    <div key={reason.id || idx} className={`border-l-4 pl-4`} style={{ borderColor: reason.hex_code || '#3fe2f9' }}>
                      <h4 className="font-medium text-gray-800 mb-2">{reason.heading}</h4>
                      <p className="text-sm text-gray-600">{reason.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {whyBigStep?.attributes?.choose_data && Array.isArray(whyBigStep.attributes.choose_data) && whyBigStep.attributes.choose_data.map((data: {
                  id: number;
                  heading: string;
                  description: string;
                  hex_code?: string;
                }, idx: number) => (
                  <div key={data.id || idx} className="p-4 rounded-lg text-center" style={{ background:  '#3fe2f9' + '20' }}>
                    <div className="text-2xl font-bold mb-1" style={{ color: data.hex_code || '#3fe2f9' }}>{data.heading}</div>
                    <p className="text-xs text-gray-600">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
    </div>
  );
} 