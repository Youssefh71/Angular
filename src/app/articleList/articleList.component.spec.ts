import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListeComponent } from './articleList.component';

describe('ArticleComponentComponent', () => {
  let component: ArticleListeComponent;
  let fixture: ComponentFixture<ArticleListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
