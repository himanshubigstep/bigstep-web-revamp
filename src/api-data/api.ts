interface SubscriberInput {
  email: string; // Example property, adjust according to your actual structure
}

interface ContactFormInput {
  name: string; // Example property
  business_mail: string; // Example property
  message: string; // Example property
}

export const fetchHeaderData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/header?populate[0]=heading_what_we_do&populate[1]=heading_what_we_do.items_on_left.icon&populate[2]=heading_what_we_do.items_on_right.icon&populate[3]=heading_how_we_do&populate[4]=heading_how_we_do.items_on_left.icon&populate[5]=heading_how_we_do.items_on_right.icon&populate[6]=heading_success_stories&populate[7]=heading_company&populate[8]=heading_company.items_on_left.icon&populate[9]=heading_company.items_on_right.icon&populate[10]=heading_blogs&populate[11]=heading_lets_talk`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchFooterData = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/footer?populate[background_image][populate]=*&populate[logo][populate]=*&populate[organisation_details][populate]=*&populate[keywords][populate]=*&populate[about_organisation][populate]=*&populate[copyright_text][populate]=*&populate[about_tags][populate]=*&populate[instagram][populate]=*&populate[facebook][populate]=*`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchHomepageData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/home-page?populate[home_introduction][populate]=*&populate[Message][populate]=*&populate[success_stories][populate]=*&populate[technologies][populate]=*&populate[milestones][populate]=*&populate[milestones1][populate]=*&populate[partners][populate]=*&populate[culture][populate]=*&populate[client_reviews][populate]=*&populate[home_page_blogs][populate]=*&populate[faq][populate]=*&&populate[latest_info][populate]=*&populate[trusted_by][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchHomePageCarousel = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/home-page-carousels?populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchSuccessStoriesData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/success-stories?populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchPaternershipData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/partnerships?populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchClientReviews = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/reviews/?populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const subscriberFormData = async (inputValue: SubscriberInput) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: inputValue }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchBlogsData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blogs?populate[image][populate]=*&populate[author][populate]=image&populate[category][populate]=name`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const contactFormData = async (formData: ContactFormInput) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: formData }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchServiceDataHome = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/services?populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchtrustedClients = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/trusted-bies?populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};


// Product Engineering Api

export const fetchProductEngineeringData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/product-engineering?populate[product_introduction][populate]=*&populate[product_information][populate]=*&populate[custom_software][populate]=*&populate[how_can_we_help][populate]=*&populate[technologies_we_use][populate]=*&populate[trusted_partner][populate]=*&populate[latest_info][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchProductEngineeringServiceHelp = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=Product%20Engineering%20Page%20-%20How%20We%20Can%20Help%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchProductEngineeringTechnologiesused = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=Product%20Engineering&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchProductEngineeringTrustedPartner = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=Product%20Engineering%20Page%20-%20Trusted%20Partner%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}


// Data And AI Api

export const fetchDataAndAiData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/data-ai?populate[introduction][populate]=*&populate[information][populate]=*&populate[software][populate]=*&populate[how_can_we_help][populate]=*&populate[technologies_we_use][populate]=*&populate[trusted_partner][populate]=*&populate[latest_info][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchDataAndAiServiceHelp = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=Data%20and%20AI%20Page%20-%20How%20We%20Can%20Help%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchDataAndAITechnologiesused = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=Data%20And%20AI&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchDataAndAITrustedPartner = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=Data%20and%20AI%20Page%20-%20Trusted%20Partner%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}


// Rpa Api

export const fetchRpaData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/rpa?populate[introduction][populate]=*&populate[information][populate]=*&populate[software][populate]=*&populate[how_can_we_help][populate]=*&populate[technologies_we_use][populate]=*&populate[trusted_partner][populate]=*&populate[latest_info][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchRpaServiceHelp = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=RPA%20Page%20-%20How%20We%20Can%20Help%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchRpaTechnologiesused = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=RPA&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchRpaTrustedPartner = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=RPA%20Page%20-%20Trusted%20Partner%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}


// CloudDevOps Api

export const fetchCloudDevOpsData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cloud-devop?populate[introduction][populate]=*&populate[information][populate]=*&populate[software][populate]=*&populate[how_can_we_help][populate]=*&populate[technologies_we_use][populate]=*&populate[trusted_partner][populate]=*&populate[latest_info][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchCloudDevOpsServiceHelp = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=Cloud%20and%20DevOps%20Page%20-%20How%20We%20Can%20Help%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchCloudDevOpsTechnologiesused = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=Cloud%20And%20DevOps&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchCloudDevOpsTrustedPartner = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=Cloud%20and%20DevOps%20Page%20-%20Trusted%20Partner%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}


// InternetOfThings Api

export const fetchInternetOfThingsData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/iot?populate[introduction][populate]=*&populate[information][populate]=*&populate[software][populate]=*&populate[how_can_we_help][populate]=*&populate[technologies_we_use][populate]=*&populate[trusted_partner][populate]=*&populate[latest_info][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchInternetOfThingsServiceHelp = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=IoT%20Page%20-%20How%20We%20Can%20Help%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchInternetOfThingsTechnologiesused = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=IoT&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchInternetOfThingsTrustedPartner = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=IoT%20Page%20-%20Trusted%20Partner%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// live streaming and media api

export const fetchLiveStreamingAndMediaData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/streaming-solution?populate[solution_introduction][populate]=*&populate[solution_expertise][populate]=*&populate[engaging_streaming_experience][populate]=*&populate[cutting_edge_technologies][populate]=*&populate[transformative_benefits][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchLiveStreamingFeatures = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=Live%20Video%20Media%20Streaming%20Page%20-%20Features%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchLiveStreamingTechData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=Live%20Video%20And%20Media%20Streaming%20App%20Development&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchLiveStreamingBenifits = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=Live%20Video%20Media%20Streaming%20Page%20-%20Benefits%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// content management systems api

export const fetchContentManagementSystemsData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/content-management-system?populate[introduction][populate]=*&populate[solution_expertise][populate]=*&populate[engaging_streaming_experience][populate]=*&populate[cutting_edge_technologies][populate]=*&populate[transformative_benefits][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchContentManagementSystemsFeatures = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=Content%20Management%20Systems%20Page%20-%20Features%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchContentManagementSystemsTechData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=Content%20Management%20Systems%20(CMS)&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchContentManagementSystemsBenifits = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=Content%20Management%20Systems%20Page%20-%20Benefits%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Saas product development api

export const fetchSaasProductDevelopmentData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/saas-product-architecture?populate[introduction][populate]=*&populate[solution_expertise][populate]=*&populate[engaging_streaming_experience][populate]=*&populate[cutting_edge_technologies][populate]=*&populate[transformative_benefits][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchSaasProductDevelopmentFeatures = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=SaaS%20Products%20Architecture%20And%20Development%20Page%20-%20Features%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchSaasProductDevelopmentTechData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=SaaS%20Products%20Architecture%20And%20Development&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchSaasProductDevelopmentBenifits = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=SaaS Products Architecture And Development Page - Benefits Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// React and React Native api

export const fetchReactAndReactNativeData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/react-native-development?populate[introduction][populate]=*&populate[solution_expertise][populate]=*&populate[engaging_streaming_experience][populate]=*&populate[cutting_edge_technologies][populate]=*&populate[transformative_benefits][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchReactAndReactNativeFeatures = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=React%20And%20React%20Native%20Development%20Page%20-%20Features%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchReactAndReactNativeTechData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=React%20And%20React%20Native%20Development&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchReactAndReactNativeBenifits = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=React%20And%20React%20Native%20Development%20Page%20-%20Benefits%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// agentic workflows api

export const fetchAgenticWorkflowsData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/agentic-workflow?populate[introduction][populate]=*&populate[solution_expertise][populate]=*&populate[engaging_streaming_experience][populate]=*&populate[cutting_edge_technologies][populate]=*&populate[transformative_benefits][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchAgenticWorkflowsFeatures = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=Agentic%20Workflows%20Page%20-%20Features%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchAgenticWorkflowsTechData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=Agentic%20Workflows&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchAgenticWorkflowsBenifits = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=Agentic%20Workflows%20Page%20-%20Benefits%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// document-summarization api

export const fetchDocumentSummarizationsData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/document-summarization?populate[introduction][populate]=*&populate[solution_expertise][populate]=*&populate[engaging_streaming_experience][populate]=*&populate[cutting_edge_technologies][populate]=*&populate[transformative_benefits][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchDocumentSummarizationsFeatures = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=Document%20Summarization%20And%20Intelligence%20Page%20-%20Features%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchDocumentSummarizationsTechData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=Document%20Summarization%20And%20Intelligence&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchDocumentSummarizationsBenifits = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=Document%20Summarization%20And%20Intelligence%20Page%20-%20Benefits%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// aws-consulting-development api

export const fetchAwsConsultingDevelopmentData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/aws-consulting?populate[introduction][populate]=*&populate[solution_expertise][populate]=*&populate[engaging_streaming_experience][populate]=*&populate[cutting_edge_technologies][populate]=*&populate[transformative_benefits][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchAwsConsultingDevelopmentFeatures = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=AWS%20Consulting%20And%20Development%20Page%20-%20Features%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchAwsConsultingDevelopmentTechData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=AWS%20Consulting%20And%20Development&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchAwsConsultingDevelopmentBenifits = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=AWS%20Consulting%20And%20Development%20Page%20-%20Benefits%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Customer Software Development Api

export const fetchCustomerSoftwareDevelopmentData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/pe-cloud?populate[cloud_intro][populate]=*&populate[why_choose][populate]=*&populate[technologies][populate]=*&populate[success][populate]=*&populate[blogs][populate]=*&populate[client_reviews][populate]=*&populate[intro2][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchCustomerSoftwareDevelopmentChooseUs = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=PE%20-%20Custom%20Software%20Page%20-%20Why%20BigStep%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchcustomerSoftwareDevelopmentTech = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=Custom%20Software%20And%20Cloud-Native%20Application%20Development&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Backend Development Api

export const fetchBackendDevelopmentData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/pe-backend?populate[backend_intro][populate]=*&populate[why_choose][populate]=*&populate[technologies][populate]=*&populate[success][populate]=*&populate[blogs][populate]=*&populate[client_reviews][populate]=*&populate[intro2][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchBackendDevelopmentChooseUs = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=PE%20-%20Backend%20Development%20Page%20-%20Why%20BigStep%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchBackendDevelopmentTech = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=Backend%20Development&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Web Application Development Api

export const fetchWebApplicationDevelopmentData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/pe-web?populate[web_intro][populate]=*&populate[why_choose][populate]=*&populate[technologies][populate]=*&populate[success][populate]=*&populate[blogs][populate]=*&populate[client_reviews][populate]=*&populate[intro2][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchWebApplicationDevelopmentChooseUs = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=PE%20-%20Web%20Development%20Page%20-%20Why%20BigStep%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchWebApplicationDevelopmentTech = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=Web%20Application%20Development&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Mobile App Development Api

export const fetchMobileAppDevelopmentData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/pe-mobile?populate[mobile_intro][populate]=*&populate[why_choose][populate]=*&populate[technologies][populate]=*&populate[success][populate]=*&populate[blogs][populate]=*&populate[client_reviews][populate]=*&populate[intro2][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchMobileAppDevelopmentChooseUs = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=PE%20-%20Mobile%20App%20Development%20Page%20-%20Why%20BigStep%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchMobileAppDevelopmentTech = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=Mobile%20App%20Development&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Data Engineering Modernization Api

export const fetchDataEngineeringModernizationData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/da-data-engneering?populate[data_engineering_intro][populate]=*&populate[why_choose][populate]=*&populate[technologies][populate]=*&populate[success][populate]=*&populate[blogs][populate]=*&populate[client_reviews][populate]=*&populate[intro2][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchDataEngineeringModernizationChooseUs = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=DA%20-%20Data%20Engineering%20And%20Modernization%20Page%20-%20Why%20BigStep%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchDataEngineeringModernizationTech = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=Data%20Engineering%20And%20Modernization&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// AiMl Api

export const fetchAiMlData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/da-ai?populate[ai_intro][populate]=*&populate[why_choose][populate]=*&populate[technologies][populate]=*&populate[success][populate]=*&populate[blogs][populate]=*&populate[client_reviews][populate]=*&populate[intro2][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchAiMlChooseUs = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=DA%20-%20AI%20And%20ML%20Page%20-%20Why%20BigStep%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchAiMlTech = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=AI%20And%20ML&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// GenerativeAi Api

export const fetchGenerativeAiData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/da-gai?populate[gai_intro][populate]=*&populate[why_choose][populate]=*&populate[technologies][populate]=*&populate[success][populate]=*&populate[blogs][populate]=*&populate[client_reviews][populate]=*&populate[intro2][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchGenerativeAiChooseUs = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=DA%20-%20Generative%20AI%20Development%20Page%20-%20Why%20BigStep%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchGenerativeAiTech = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=Generative%20AI%20Development&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// CloudArchitech Api

export const fetchCloudArchitechData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cd-cloud?populate[cloud_intro][populate]=*&populate[why_choose][populate]=*&populate[technologies][populate]=*&populate[success][populate]=*&populate[blogs][populate]=*&populate[client_reviews][populate]=*&populate[intro2][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchCloudArchitechChooseUs = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=CD%20-%20Cloud%20Architecture%20Page%20-%20Why%20BigStep%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchCloudArchitechTech = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=Cloud%20Architecture&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Cloud Services Api

export const fetchCloudServicesData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cd-managed-cloud?populate[cloud_intro][populate]=*&populate[why_choose][populate]=*&populate[technologies][populate]=*&populate[success][populate]=*&populate[blogs][populate]=*&populate[client_reviews][populate]=*&populate[intro2][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchCloudServicesChooseUs = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=CD%20-%20Managed%20Cloud%20Services%20Page%20-%20Why%20BigStep%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchCloudServicesTech = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=Managed%20Cloud%20Services&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Ci/Cd Api

export const fetchCiCdData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cd-ci-cd?populate[ci_cd_intro][populate]=*&populate[why_choose][populate]=*&populate[technologies][populate]=*&populate[success][populate]=*&populate[blogs][populate]=*&populate[client_reviews][populate]=*&populate[intro2][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchCiCdChooseUs = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=CD%20-%20CI/CD%20And%20Infrastructure%20Automation%20Page%20-%20Why%20BigStep%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchCiCdTech = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=CI/CD%20And%20Infrastructure%20Automation&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// KubernatesAdoptions Api

export const fetchKubernatesAdoptionsData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cd-kubernet?populate[kubernets_intro][populate]=*&populate[why_choose][populate]=*&populate[technologies][populate]=*&populate[success][populate]=*&populate[blogs][populate]=*&populate[client_reviews][populate]=*&populate[intro2][populate]=*&populate[get_in_touch][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchKubernatesAdoptionsChooseUs = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=CD%20-%20Kubernetes%20Adoption%20-%20Why%20BigStep%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchKubernatesAdoptionsTech = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/technology-we-work-ons?filters[$and][0][category][$eq]=Kubernetes%20Adoption&populate=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Complete Product Development Api

export const fetchCompleteProductDevelopmentData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/engagement-model?populate[introduction][populate]=*&populate[complete_product_development][populate]=*&populate[holistic_approach][populate]=*&populate[product_development][populate]=*&populate[outstanding_results][populate]=*&populate[client_review][populate]=*&populate[client_query][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchCompleteProductDevelopmentHolisticApproach = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=Complete%20Product%20Development%20Page%20-%20Holistic%20Approach%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// OffShore Development Api

export const fetchOffShoreDevelopmentData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/offshore-development-center?populate[introduction][populate]=*&populate[complete_product_development][populate]=*&populate[holistic_approach][populate]=*&populate[product_development][populate]=*&populate[outstanding_results][populate]=*&populate[client_review][populate]=*&populate[client_query][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchOffShoreDevelopmentHolisticApproach = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=Complete%20Product%20Development%20Page%20-%20Holistic%20Approach%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Remote Engineering Team Api

export const fetchRemoteEngineeringTeamData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/remote-engineering-team?populate[introduction][populate]=*&populate[complete_product_development][populate]=*&populate[holistic_approach][populate]=*&populate[product_development][populate]=*&populate[outstanding_results][populate]=*&populate[client_review][populate]=*&populate[client_query][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchRemoteEngineeringTeamHolisticApproach = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=Complete%20Product%20Development%20Page%20-%20Holistic%20Approach%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Cto As Service Api

export const fetchCtoAsServiceData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cto-as-service?populate[introduction][populate]=*&populate[complete_product_development][populate]=*&populate[holistic_approach][populate]=*&populate[product_development][populate]=*&populate[outstanding_results][populate]=*&populate[client_review][populate]=*&populate[client_query][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchCtoAsServiceHolisticApproach = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider-services?filters[$and][0][category][$eq]=Complete%20Product%20Development%20Page%20-%20Holistic%20Approach%20Section&populate[serviceImage][populate]=*&populate[service_data][populate]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Technology Api

export const fetchTechnologyData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/tech?populate[technological_experties][populate]=*&populate[get_in_touch][populate]=*&populate[our_tech_stack]=*`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}