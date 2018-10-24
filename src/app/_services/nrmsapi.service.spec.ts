import { TestBed , async, inject } from '@angular/core/testing';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NrmsapiService } from './nrmsapi.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('NrmsapiService', () => {

  let service: NrmsapiService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new NrmsapiService(<any> httpClientSpy);
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        {provide:service}
      ]
    });
  });
 
  it('should create', inject([HttpTestingController, NrmsapiService], (httpMock: HttpTestingController, apiService: NrmsapiService) => {
    expect(apiService).toBeTruthy();
  }));

  it('should get the news release', inject([HttpTestingController, NrmsapiService], (httpMock: HttpTestingController, apiService: NrmsapiService) => {
    expect(apiService.getNewsReleases()).toBeTruthy();
  }));

  it(`should get the news releases`, async(
    inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
 
      http.get('http://localhost:8888/api/newsreleases').subscribe();

      backend.expectOne({
        url: 'http://localhost:8888/api/newsreleases',
        method: 'GET'
      });
    })
  )
);
});
