// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Homepage documents */
interface HomepageDocumentData {
  /**
   * Title field in *Homepage*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice =
  | CardGridSlice
  | ImageGallerySlice
  | ContactCardSlice
  | CalendarSlice
  | TableSlice
  | SpacerSlice
  | HeroSlice
  | HeaderSlice
  | RichTextSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;
/** Content for Navigation documents */
interface NavigationDocumentData {
  /**
   * Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}
/**
 * Item in Navigation → Links
 *
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * link field in *Navigation → Links*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.ContentRelationshipField<"page" | "homepage">;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;
/** Content for Page documents */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Description field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
  /**
   * Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Related Tags field in *Page*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: page.related_tags[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  related_tags: prismic.GroupField<Simplify<PageDocumentDataRelatedTagsItem>>;
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Item in Page → Related Tags
 *
 */
export interface PageDocumentDataRelatedTagsItem {
  /**
   * Tag field in *Page → Related Tags*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.related_tags[].tag
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  tag: prismic.ContentRelationshipField<"page_tag">;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice =
  | NavbarSlice
  | SpacerSlice
  | CalendarSlice
  | ContactCardSlice
  | TableSlice
  | ImageGallerySlice
  | CardGridSlice
  | HeroSlice
  | RichTextSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Page Tag documents */
interface PageTagDocumentData {
  /**
   * Title field in *Page Tag*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page_tag.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
}
/**
 * Page Tag document from Prismic
 *
 * - **API ID**: `page_tag`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageTagDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<PageTagDocumentData>,
    "page_tag",
    Lang
  >;
/** Content for Post documents */
interface PostDocumentData {
  /**
   * Title field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * Description field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Meta Description field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Title field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.meta_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
  /**
   * Image field in *Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Subtitle field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  subtitle: prismic.RichTextField;
  /**
   * Related Tags field in *Post*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: post.related_tags[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  related_tags: prismic.GroupField<Simplify<PostDocumentDataRelatedTagsItem>>;
  /**
   * Slice Zone field in *Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PostDocumentDataSlicesSlice>;
}
/**
 * Item in Post → Related Tags
 *
 */
export interface PostDocumentDataRelatedTagsItem {
  /**
   * Tag field in *Post → Related Tags*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: post.related_tags[].tag
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  tag: prismic.ContentRelationshipField<"post_tag">;
}
/**
 * Slice for *Post → Slice Zone*
 *
 */
type PostDocumentDataSlicesSlice =
  | ContactCardSlice
  | CardGridSlice
  | CalendarSlice
  | HeroSlice
  | ImageGallerySlice
  | RichTextSlice
  | NavbarSlice
  | SpacerSlice
  | TableSlice
  | HeaderSlice;
/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PostDocumentData>, "post", Lang>;
/** Content for Post Tag documents */
interface PostTagDocumentData {
  /**
   * Title field in *Post Tag*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post_tag.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
}
/**
 * Post Tag document from Prismic
 *
 * - **API ID**: `post_tag`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostTagDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<PostTagDocumentData>,
    "post_tag",
    Lang
  >;
export type AllDocumentTypes =
  | HomepageDocument
  | NavigationDocument
  | PageDocument
  | PageTagDocument
  | PostDocument
  | PostTagDocument;
/**
 * Default variation for Calendar Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CalendarSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;
/**
 * Slice variation for *Calendar*
 *
 */
type CalendarSliceVariation = CalendarSliceDefault;
/**
 * Calendar Shared Slice
 *
 * - **API ID**: `calendar`
 * - **Description**: `Calendar`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CalendarSlice = prismic.SharedSlice<
  "calendar",
  CalendarSliceVariation
>;
/**
 * Primary content in CardGrid → Primary
 *
 */
interface CardGridSliceDefaultPrimary {
  /**
   * tag field in *CardGrid → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: card_grid.primary.tag
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  tag: prismic.ContentRelationshipField<"page_tag" | "post_tag">;
}
/**
 * Item in CardGrid → Items
 *
 */
export interface CardGridSliceDefaultItem {
  /**
   * Title field in *CardGrid → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card_grid.items[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * Description field in *CardGrid → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card_grid.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Image field in *CardGrid → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: card_grid.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for CardGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CardGridSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CardGridSliceDefaultPrimary>,
  Simplify<CardGridSliceDefaultItem>
>;
/**
 * Slice variation for *CardGrid*
 *
 */
type CardGridSliceVariation = CardGridSliceDefault;
/**
 * CardGrid Shared Slice
 *
 * - **API ID**: `card_grid`
 * - **Description**: `CardGrid`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CardGridSlice = prismic.SharedSlice<
  "card_grid",
  CardGridSliceVariation
>;
/**
 * Primary content in ContactCard → Primary
 *
 */
interface ContactCardSliceDefaultPrimary {
  /**
   * tag field in *ContactCard → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_card.primary.tag
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  tag: prismic.ContentRelationshipField<"page_tag" | "post_tag">;
}
/**
 * Item in ContactCard → Items
 *
 */
export interface ContactCardSliceDefaultItem {
  /**
   * Image field in *ContactCard → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_card.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Title field in *ContactCard → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_card.items[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * Description field in *ContactCard → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_card.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Badge field in *ContactCard → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_card.items[].badge
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  badge: prismic.RichTextField;
  /**
   * Icon One field in *ContactCard → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_card.items[].icon_one
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  icon_one: prismic.SelectField<"1" | "2">;
  /**
   * Icon Text One field in *ContactCard → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_card.items[].icon_text_one
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  icon_text_one: prismic.RichTextField;
  /**
   * Icon Two field in *ContactCard → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_card.items[].icon_two
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  icon_two: prismic.SelectField<"1" | "2">;
  /**
   * Icon Text Two field in *ContactCard → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_card.items[].icon_text_two
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  icon_text_two: prismic.RichTextField;
}
/**
 * Default variation for ContactCard Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactCardSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactCardSliceDefaultPrimary>,
  Simplify<ContactCardSliceDefaultItem>
>;
/**
 * Slice variation for *ContactCard*
 *
 */
type ContactCardSliceVariation = ContactCardSliceDefault;
/**
 * ContactCard Shared Slice
 *
 * - **API ID**: `contact_card`
 * - **Description**: `ContactCard`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactCardSlice = prismic.SharedSlice<
  "contact_card",
  ContactCardSliceVariation
>;
/**
 * Primary content in Header → Primary
 *
 */
interface HeaderSliceDefaultPrimary {
  /**
   * Title field in *Header → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A simple one line header
   * - **API ID Path**: header.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * Alignment field in *Header → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: center
   * - **API ID Path**: header.primary.alignment
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  alignment: prismic.SelectField<"center" | "left" | "right", "filled">;
}
/**
 * Default variation for Header Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeaderSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Header*
 *
 */
type HeaderSliceVariation = HeaderSliceDefault;
/**
 * Header Shared Slice
 *
 * - **API ID**: `header`
 * - **Description**: `Header`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderSlice = prismic.SharedSlice<"header", HeaderSliceVariation>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
  /**
   * Overlay field in *Hero → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: text
   * - **API ID Path**: hero.primary.overlay
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  overlay: prismic.SelectField<"text" | "image" | "none", "filled">;
  /**
   * Relationship field in *Hero → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.relationship
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  relationship: prismic.ContentRelationshipField<"page" | "post">;
  /**
   * Title field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * Description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Subtitle field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  subtitle: prismic.RichTextField;
  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in ImageGallery → Primary
 *
 */
interface ImageGallerySliceDefaultPrimary {
  /**
   * Title field in *ImageGallery → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_gallery.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * tag field in *ImageGallery → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: image_gallery.primary.tag
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  tag: prismic.ContentRelationshipField<"page_tag" | "post_tag">;
}
/**
 * Item in ImageGallery → Items
 *
 */
export interface ImageGallerySliceDefaultItem {
  /**
   * Image field in *ImageGallery → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_gallery.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Title field in *ImageGallery → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_gallery.items[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * Description field in *ImageGallery → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_gallery.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
}
/**
 * Default variation for ImageGallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageGallerySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageGallerySliceDefaultPrimary>,
  Simplify<ImageGallerySliceDefaultItem>
>;
/**
 * Slice variation for *ImageGallery*
 *
 */
type ImageGallerySliceVariation = ImageGallerySliceDefault;
/**
 * ImageGallery Shared Slice
 *
 * - **API ID**: `image_gallery`
 * - **Description**: `ImageGallery`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageGallerySlice = prismic.SharedSlice<
  "image_gallery",
  ImageGallerySliceVariation
>;
/**
 * Primary content in Navbar → Primary
 *
 */
interface NavbarSliceDefaultPrimary {
  /**
   * Default User Image field in *Navbar → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.primary.default_user_image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  default_user_image: prismic.ImageField<never>;
}
/**
 * Item in Navbar → Items
 *
 */
export interface NavbarSliceDefaultItem {
  /**
   * Link field in *Navbar → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.items[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * Default variation for Navbar Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavbarSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavbarSliceDefaultPrimary>,
  Simplify<NavbarSliceDefaultItem>
>;
/**
 * Slice variation for *Navbar*
 *
 */
type NavbarSliceVariation = NavbarSliceDefault;
/**
 * Navbar Shared Slice
 *
 * - **API ID**: `navbar`
 * - **Description**: `Navbar`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavbarSlice = prismic.SharedSlice<"navbar", NavbarSliceVariation>;
/**
 * Primary content in RichText → Primary
 *
 */
interface RichTextSliceDefaultPrimary {
  /**
   * Text field in *RichText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rich_text.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Alignment field in *RichText → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: The text alignment
   * - **Default Value**: left
   * - **API ID Path**: rich_text.primary.alignment
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  alignment: prismic.SelectField<"left" | "center" | "right", "filled">;
}
/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *RichText*
 *
 */
type RichTextSliceVariation = RichTextSliceDefault;
/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: `RichText`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;
/**
 * Primary content in Spacer → Primary
 *
 */
interface SpacerSliceDefaultPrimary {
  /**
   * Height field in *Spacer → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: spacer.primary.height
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  height: prismic.NumberField;
}
/**
 * Default variation for Spacer Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SpacerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SpacerSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Spacer*
 *
 */
type SpacerSliceVariation = SpacerSliceDefault;
/**
 * Spacer Shared Slice
 *
 * - **API ID**: `spacer`
 * - **Description**: `Spacer`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SpacerSlice = prismic.SharedSlice<"spacer", SpacerSliceVariation>;
/**
 * Default variation for Table Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TableSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;
/**
 * Slice variation for *Table*
 *
 */
type TableSliceVariation = TableSliceDefault;
/**
 * Table Shared Slice
 *
 * - **API ID**: `table`
 * - **Description**: `Table`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TableSlice = prismic.SharedSlice<"table", TableSliceVariation>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      HomepageDocument,
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      NavigationDocument,
      PageDocumentData,
      PageDocumentDataRelatedTagsItem,
      PageDocumentDataSlicesSlice,
      PageDocument,
      PageTagDocumentData,
      PageTagDocument,
      PostDocumentData,
      PostDocumentDataRelatedTagsItem,
      PostDocumentDataSlicesSlice,
      PostDocument,
      PostTagDocumentData,
      PostTagDocument,
      AllDocumentTypes,
      CalendarSliceDefault,
      CalendarSliceVariation,
      CalendarSlice,
      CardGridSliceDefaultPrimary,
      CardGridSliceDefaultItem,
      CardGridSliceDefault,
      CardGridSliceVariation,
      CardGridSlice,
      ContactCardSliceDefaultPrimary,
      ContactCardSliceDefaultItem,
      ContactCardSliceDefault,
      ContactCardSliceVariation,
      ContactCardSlice,
      HeaderSliceDefaultPrimary,
      HeaderSliceDefault,
      HeaderSliceVariation,
      HeaderSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefault,
      HeroSliceVariation,
      HeroSlice,
      ImageGallerySliceDefaultPrimary,
      ImageGallerySliceDefaultItem,
      ImageGallerySliceDefault,
      ImageGallerySliceVariation,
      ImageGallerySlice,
      NavbarSliceDefaultPrimary,
      NavbarSliceDefaultItem,
      NavbarSliceDefault,
      NavbarSliceVariation,
      NavbarSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceDefault,
      RichTextSliceVariation,
      RichTextSlice,
      SpacerSliceDefaultPrimary,
      SpacerSliceDefault,
      SpacerSliceVariation,
      SpacerSlice,
      TableSliceDefault,
      TableSliceVariation,
      TableSlice,
    };
  }
}
