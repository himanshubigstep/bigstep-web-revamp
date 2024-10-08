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

export const subscriberFormData = async (inputValue: any) => {
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

export const contactFormData = async (formData: any) => {
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
