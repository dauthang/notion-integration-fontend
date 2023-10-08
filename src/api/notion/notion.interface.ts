// Request

export interface NotionRequest {
  sort?: {
    timestamp: "last_edited_time";
    direction: "ascending" | "descending";
  };
  query?: string;
  start_cursor?: string;
  page_size?: number;
  filter?: {
    property: "object";
    value: "page" | "database";
  };
}

// Response
export interface NotionRes {
  object: string;
  results: NotionResult[];
  next_cursor: any;
  has_more: boolean;
}

export interface NotionResult {
  object: string;
  id: string;
  cover: any;
  icon?: Icon;
  created_time: string;
  created_by: CreatedBy;
  last_edited_by: LastEditedBy;
  last_edited_time: string;
  title?: Title[];
  description?: Description[];
  is_inline?: boolean;
  properties: Properties;
  parent: Parent;
  url: string;
  public_url: any;
  archived: boolean;
}

export interface Icon {
  type: string;
  emoji: string;
}

export interface CreatedBy {
  object: string;
  id: string;
}

export interface LastEditedBy {
  object: string;
  id: string;
}

export interface Title {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: any;
}

export interface Text {
  content: string;
  link: any;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Description {
  type: string;
  text: Text2;
  annotations: Annotations2;
  plain_text: string;
  href: any;
}

export interface Text2 {
  content: string;
  link: any;
}

export interface Annotations2 {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Properties {
  "Date Created": DateCreated;
  Tags: Tags;
  Date?: Date;
  Status?: Status;
  Name: Name;
}

export interface DateCreated {
  id: string;
  name?: string;
  type: string;
  created_time: any;
}

export interface Tags {
  id: string;
  name?: string;
  type: string;
  multi_select: any;
}

export interface Date {
  id: string;
  type: string;
  date: Date2;
  name?: string;
}

export interface Date2 {
  start?: string;
  end: any;
  time_zone: any;
}

export interface Status {
  id: string;
  name?: string;
  type: string;
  select: Select;
}

export interface Select {
  options?: IOption[];
  id?: string;
  name?: string;
  color?: string;
}

export interface IOption {
  id: string;
  name: string;
  color: string;
}

export interface Name {
  id: string;
  name?: string;
  type: string;
  title: any;
}

export interface Parent {
  type: string;
  workspace?: boolean;
  database_id?: string;
}
