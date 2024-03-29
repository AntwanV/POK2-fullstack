import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FeedComponent } from './feed.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedComponent ],
      imports: [HttpClientTestingModule, MatDialogModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
