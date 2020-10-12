import { Fields } from '../enums/fields.enum'

export interface IEntity {
    [Fields.videoId]: string;
    [Fields.thumbnails]: string;
    [Fields.description]: string;
    [Fields.publishedAt]: string;
    [Fields.title]: string;
}
