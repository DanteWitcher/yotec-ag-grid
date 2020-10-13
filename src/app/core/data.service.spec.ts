import { of } from 'rxjs';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpClientSpy: {
    get: jasmine.Spy
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new DataService(httpClientSpy as any);
  });

  it('should return expected entities', () => {
    const data = [
        {
            videoId: 'wFw3C-YIq7M&t=1785s',
            thumbnails: 'hz',
            publishedAt: 'Oct 22, 2020',
            title: 'https://www.youtube.com/watch?v=XXXX',
            description: 'Markaplier'
          },
          {
            videoId: 'GyAAwCu-Lu4',
            thumbnails: 'hz',
            publishedAt: 'Jul 22, 2013',
            title: 'https://www.youtube.com/watch?v=XXXX',
            description: 'Limp Bizkit - Ready To Go ft. Lil Wayne'
          },
    ];

    const result = [
        {
            videoId: 'wFw3C-YIq7M&t=1785s',
            thumbnails: 'hz',
            publishedAt: 'Oct 22, 2020',
            title: 'https://www.youtube.com/watch?v=wFw3C-YIq7M&t=1785s',
            description: 'Markaplier'
          },
          {
            videoId: 'GyAAwCu-Lu4',
            thumbnails: 'hz',
            publishedAt: 'Jul 22, 2013',
            title: 'https://www.youtube.com/watch?v=GyAAwCu-Lu4',
            description: 'Limp Bizkit - Ready To Go ft. Lil Wayne'
          },
    ];

    httpClientSpy.get.and.returnValue(of(data));

    service.getEntities().subscribe(
        entities => expect(entities).toEqual(result, 'expected entites'),
        fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
