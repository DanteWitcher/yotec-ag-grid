import { Fields } from '../enums/fields.enum';
import { IEntity } from '../interfaces/entity.interface';

export class EntityMapper {
    static map(data: any): IEntity {
        const getTitle = (title: string, id: string): string => {
            const regexp = /XXXX/gi;

            return title.replace(regexp, id);
        };

        return {
            [Fields.videoId]: data.videoId,
            [Fields.title]: getTitle(data.title, data.videoId),
            [Fields.description]: data.description,
            [Fields.publishedAt]: data.publishedAt,
            [Fields.thumbnails]: data.thumbnails,
        };
    }
}
