import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DialogAddMusicComponent } from './dialog-add-music.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogAddMusicComponent', () => {
  let component: DialogAddMusicComponent;
  let fixture: ComponentFixture<DialogAddMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddMusicComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule, MatSelectModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
