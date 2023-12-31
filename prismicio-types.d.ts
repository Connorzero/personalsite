// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type CaseStudyDocumentDataSlicesSlice =
  | ImageSlice
  | TextSlice
  | TextImageSlice
  | TextGridSlice;

/**
 * Content for Case Study documents
 */
interface CaseStudyDocumentData {
  /**
   * Title field in *Case Study*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Client field in *Case Study*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.client
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  client: prismic.RichTextField;

  /**
   * Description field in *Case Study*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Featured Image field in *Case Study*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.featured_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featured_image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Case Study*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<CaseStudyDocumentDataSlicesSlice>
  /**
   * Meta Title field in *Case Study*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.metaTitle
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  metaTitle: prismic.KeyTextField;

  /**
   * Meta Description field in *Case Study*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.metaDescription
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  metaDescription: prismic.KeyTextField;

  /**
   * Meta Image field in *Case Study*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.metaImage
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  metaImage: prismic.ImageField<never>
  /**
   * Card Title field in *Case Study*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.card_title
   * - **Tab**: Card
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */;
  card_title: prismic.RichTextField;

  /**
   * Card Description field in *Case Study*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.card_description
   * - **Tab**: Card
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  card_description: prismic.RichTextField;

  /**
   * Card Image field in *Case Study*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.card_image
   * - **Tab**: Card
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  card_image: prismic.ImageField<never>;
}

/**
 * Case Study document from Prismic
 *
 * - **API ID**: `case_study`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CaseStudyDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CaseStudyDocumentData>,
    'case_study',
    Lang
  >;

/**
 * Content for defaultSEO documents
 */
interface DefaultseoDocumentData {
  /**
   * Meta Title field in *defaultSEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Meta title
   * - **API ID Path**: defaultseo.metaTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  metaTitle: prismic.KeyTextField;

  /**
   * Meta Description field in *defaultSEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Meta description
   * - **API ID Path**: defaultseo.metaDescription
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  metaDescription: prismic.KeyTextField;

  /**
   * Meta Image field in *defaultSEO*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: defaultseo.metaImage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  metaImage: prismic.ImageField<never>;
}

/**
 * defaultSEO document from Prismic
 *
 * - **API ID**: `defaultseo`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DefaultseoDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<DefaultseoDocumentData>,
    'defaultseo',
    Lang
  >;

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Title field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Footer title
   * - **API ID Path**: footer.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Footer description
   * - **API ID Path**: footer.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Link field in *Footer*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Link Label field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_label: prismic.KeyTextField;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    'footer',
    Lang
  >;

type HomepageDocumentDataSlicesSlice = never;

/**
 * Item in *Homepage → Images*
 */
export interface HomepageDocumentDataImagesItem {
  /**
   * Image field in *Homepage → Images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.images[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Title field in *Homepage*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title
   * - **API ID Path**: homepage.title
   * - **Tab**: Hero
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Description field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Description
   * - **API ID Path**: homepage.description
   * - **Tab**: Hero
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Hero
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>
  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.metaTitle
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  metaTitle: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.metaDescription
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  metaDescription: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.metaImage
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  metaImage: prismic.ImageField<never>
  /**
   * Services Title field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.services_title
   * - **Tab**: Services
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */;
  services_title: prismic.RichTextField;

  /**
   * Services Description field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.services_description
   * - **Tab**: Services
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  services_description: prismic.RichTextField;

  /**
   * Images field in *Homepage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.images[]
   * - **Tab**: Services
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  images: prismic.GroupField<Simplify<HomepageDocumentDataImagesItem>>
  /**
   * Process Title field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.process_title
   * - **Tab**: Process
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */;
  process_title: prismic.RichTextField;

  /**
   * Process Description field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.process_description
   * - **Tab**: Process
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  process_description: prismic.RichTextField
  /**
   * Explorations Title field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.explorations_title
   * - **Tab**: Explorations
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */;
  explorations_title: prismic.RichTextField;

  /**
   * Explorations Description field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.explorations_description
   * - **Tab**: Explorations
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  explorations_description: prismic.RichTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    'homepage',
    Lang
  >;

/**
 * Item in *Navigation → Navigation Items*
 */
export interface NavigationDocumentDataNavigationItemsItem {
  /**
   * Link field in *Navigation → Navigation Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.navigationItems[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.ContentRelationshipField;

  /**
   * Label field in *Navigation → Navigation Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.navigationItems[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Navigation Items field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.navigationItems[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigationItems: prismic.GroupField<
    Simplify<NavigationDocumentDataNavigationItemsItem>
  >;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    'navigation',
    Lang
  >;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField
  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.metaTitle
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  metaTitle: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.metaDescription
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  metaDescription: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.metaImage
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  metaImage: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, 'page', Lang>;

export type AllDocumentTypes =
  | CaseStudyDocument
  | DefaultseoDocument
  | FooterDocument
  | HomepageDocument
  | NavigationDocument
  | PageDocument;

/**
 * Primary content in *Image → Primary*
 */
export interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ImageSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Image → Primary*
 */
export interface ImageSliceVariation2Primary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Variation 2 variation for Image Slice
 *
 * - **API ID**: `variation2`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceVariation2 = prismic.SharedSliceVariation<
  'variation2',
  Simplify<ImageSliceVariation2Primary>,
  never
>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault | ImageSliceVariation2;

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<'image', ImageSliceVariation>;

/**
 * Primary content in *Text → Primary*
 */
export interface TextSliceDefaultPrimary {
  /**
   * Title field in *Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text slice title
   * - **API ID Path**: text.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text slice description
   * - **API ID Path**: text.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<TextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Text*
 */
type TextSliceVariation = TextSliceDefault;

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<'text', TextSliceVariation>;

/**
 * Primary content in *TextGrid → Primary*
 */
export interface TextGridSliceDefaultPrimary {
  /**
   * Title field in *TextGrid → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text grid title
   * - **API ID Path**: text_grid.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Primary content in *TextGrid → Items*
 */
export interface TextGridSliceDefaultItem {
  /**
   * Text Section Title field in *TextGrid → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text section title
   * - **API ID Path**: text_grid.items[].text_section_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_section_title: prismic.RichTextField;

  /**
   * Text Section Content field in *TextGrid → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text section content
   * - **API ID Path**: text_grid.items[].text_section_content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_section_content: prismic.RichTextField;
}

/**
 * Default variation for TextGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextGridSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<TextGridSliceDefaultPrimary>,
  Simplify<TextGridSliceDefaultItem>
>;

/**
 * Slice variation for *TextGrid*
 */
type TextGridSliceVariation = TextGridSliceDefault;

/**
 * TextGrid Shared Slice
 *
 * - **API ID**: `text_grid`
 * - **Description**: TextGrid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextGridSlice = prismic.SharedSlice<
  'text_grid',
  TextGridSliceVariation
>;

/**
 * Primary content in *TextImage → Primary*
 */
export interface TextImageSliceDefaultPrimary {
  /**
   * Title field in *TextImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text image title
   * - **API ID Path**: text_image.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *TextImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text image description
   * - **API ID Path**: text_image.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Image field in *TextImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for TextImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextImageSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<TextImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TextImage*
 */
type TextImageSliceVariation = TextImageSliceDefault;

/**
 * TextImage Shared Slice
 *
 * - **API ID**: `text_image`
 * - **Description**: TextImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextImageSlice = prismic.SharedSlice<
  'text_image',
  TextImageSliceVariation
>;

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      CaseStudyDocument,
      CaseStudyDocumentData,
      CaseStudyDocumentDataSlicesSlice,
      DefaultseoDocument,
      DefaultseoDocumentData,
      FooterDocument,
      FooterDocumentData,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      PageDocument,
      PageDocumentData,
      AllDocumentTypes,
      ImageSlice,
      ImageSliceDefaultPrimary,
      ImageSliceVariation2Primary,
      ImageSliceVariation,
      ImageSliceDefault,
      ImageSliceVariation2,
      TextSlice,
      TextSliceDefaultPrimary,
      TextSliceVariation,
      TextSliceDefault,
      TextGridSlice,
      TextGridSliceDefaultPrimary,
      TextGridSliceDefaultItem,
      TextGridSliceVariation,
      TextGridSliceDefault,
      TextImageSlice,
      TextImageSliceDefaultPrimary,
      TextImageSliceVariation,
      TextImageSliceDefault,
    };
  }
}
