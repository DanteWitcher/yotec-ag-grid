import { Fields } from '../enums/fields.enum';
import { IEntity } from '../interfaces/entity.interface';

export class EntityMapper {
    static map(entity: any): IEntity {
        const getTitle = (title: string, id: string): string => {
            const regexp = /XXXX/gi;

            return title.replace(regexp, id);
        };

        return {
            [Fields.videoId]: entity.videoId,
            [Fields.title]: getTitle(entity.title, entity.videoId),
            [Fields.description]: entity.description,
            [Fields.publishedAt]: entity.publishedAt,
            [Fields.thumbnails]: entity.thumbnails,
        };
    }
}
