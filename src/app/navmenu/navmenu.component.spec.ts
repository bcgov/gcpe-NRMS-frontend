/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap';
import { OAuthModule } from 'angular-oauth2-oidc';
import { NavMenuComponent } from './navmenu.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavmenuComponent', () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;
  let de: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterModule,
        CollapseModule.forRoot(),
        HttpClientModule,
        OAuthModule.forRoot({ resourceServer: { sendAccessToken: true } }), // send the auth token with each request
      ],
      declarations: [
        NavMenuComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.gov-navbar'));
    element  = de.nativeElement;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a BC gov logo', () => {
    expect(element.innerHTML).toContain("img");
  });

  it('should have a title', () => {
    fixture.detectChanges();
    expect(element.textContent).toContain('News Release Management');
  });

  it('should display the `search` button', () => {
      //There should a create button in the template
      expect(element.innerHTML).toContain("fa-search");
  });

  it('should display the `sign in` button', () => {
      //There should a create button in the template
      expect(element.innerHTML).toContain("Sign in");
  });

 it('should display the `Sign up Now` button', () => {
    //There should a create button in the template
    expect(element.innerHTML).toContain("Sign up Now");
  });

  it('should display the `Topics` button', () => {
    //There should a create button in the template
    expect(element.innerHTML).toContain("Topics");
  });

  it('should display the `hamburger` menu', () => {
    //There should a create button in the template
    expect(element.innerHTML).toContain("navbar-toggler-icon");
  });

  it("should display the topic card when 'Topic' is clicked", fakeAsync(() => {

    let topicButton = fixture.debugElement.query(By.css("#topic-btn"));
    let topicCard = fixture.debugElement.query(By.css("#topic-dropdowns"));
    const onClickMock = spyOn(topicButton.nativeElement, 'click');
    topicButton.nativeElement.click();
    fixture.detectChanges();
    expect(onClickMock).toHaveBeenCalled();
  }));
})