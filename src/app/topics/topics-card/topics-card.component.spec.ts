/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { NewsRelease } from '../../_models/NewsRelease';
import { TopicsCardComponent } from './topics-card.component';

describe('TopicsCardComponent', () => {
  let component: TopicsCardComponent;
  let fixture: ComponentFixture<TopicsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsCardComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
