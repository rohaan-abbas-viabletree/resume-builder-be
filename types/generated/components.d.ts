import type { Schema, Struct } from '@strapi/strapi';

export interface SharedEducation extends Struct.ComponentSchema {
  collectionName: 'components_shared_educations';
  info: {
    displayName: 'education';
    icon: 'database';
  };
  attributes: {
    date: Schema.Attribute.Date;
    education_info: Schema.Attribute.String;
    education_name: Schema.Attribute.String;
  };
}

export interface SharedLanguages extends Struct.ComponentSchema {
  collectionName: 'components_shared_languages';
  info: {
    displayName: 'languages';
    icon: 'briefcase';
  };
  attributes: {
    level: Schema.Attribute.Integer;
    level_name: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SharedList extends Struct.ComponentSchema {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    description: Schema.Attribute.String;
  };
}

export interface SharedMajorProjects extends Struct.ComponentSchema {
  collectionName: 'components_shared_major_projects';
  info: {
    displayName: 'major_projects';
    icon: 'attachment';
  };
  attributes: {
    description: Schema.Attribute.String;
    name: Schema.Attribute.String;
    project_list: Schema.Attribute.Component<'shared.project-list', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedProjectList extends Struct.ComponentSchema {
  collectionName: 'components_shared_project_lists';
  info: {
    displayName: 'project_list';
  };
  attributes: {
    description: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSkills extends Struct.ComponentSchema {
  collectionName: 'components_shared_skills';
  info: {
    displayName: 'skills';
    icon: 'puzzle';
  };
  attributes: {
    skill_level: Schema.Attribute.Integer;
    skill_name: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedWorkHistory extends Struct.ComponentSchema {
  collectionName: 'components_shared_work_histories';
  info: {
    displayName: 'work_history';
    icon: 'envelop';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.String;
    designation: Schema.Attribute.String;
    list: Schema.Attribute.Component<'shared.list', true>;
    location: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.education': SharedEducation;
      'shared.languages': SharedLanguages;
      'shared.list': SharedList;
      'shared.major-projects': SharedMajorProjects;
      'shared.media': SharedMedia;
      'shared.project-list': SharedProjectList;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.skills': SharedSkills;
      'shared.slider': SharedSlider;
      'shared.work-history': SharedWorkHistory;
    }
  }
}
