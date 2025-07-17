import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageCards extends Struct.ComponentSchema {
  collectionName: 'components_homepage_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    back_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sub_heading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageCompany extends Struct.ComponentSchema {
  collectionName: 'components_homepage_companies';
  info: {
    displayName: 'company';
  };
  attributes: {
    company_images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface HomepageHomeIntroduction extends Struct.ComponentSchema {
  collectionName: 'components_homepage_home_introductions';
  info: {
    displayName: 'home_introduction';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageMessage extends Struct.ComponentSchema {
  collectionName: 'components_homepage_messages';
  info: {
    displayName: 'message';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageMilestone extends Struct.ComponentSchema {
  collectionName: 'components_homepage_milestones';
  info: {
    displayName: 'milestone';
  };
  attributes: {
    cloud_projects: Schema.Attribute.Component<
      'homepage.single-milestone',
      false
    >;
    delivered: Schema.Attribute.Component<'homepage.single-milestone', false>;
    retention_rate: Schema.Attribute.Component<
      'homepage.single-milestone',
      false
    >;
    technology_expert: Schema.Attribute.Component<
      'homepage.single-milestone',
      true
    >;
    years: Schema.Attribute.Component<'homepage.single-milestone', false>;
  };
}

export interface HomepageSingleMilestone extends Struct.ComponentSchema {
  collectionName: 'components_homepage_single_milestones';
  info: {
    displayName: 'single_milestone';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageTechnology extends Struct.ComponentSchema {
  collectionName: 'components_homepage_technologies';
  info: {
    displayName: 'technology';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.cards': HomepageCards;
      'homepage.company': HomepageCompany;
      'homepage.home-introduction': HomepageHomeIntroduction;
      'homepage.message': HomepageMessage;
      'homepage.milestone': HomepageMilestone;
      'homepage.single-milestone': HomepageSingleMilestone;
      'homepage.technology': HomepageTechnology;
    }
  }
}
