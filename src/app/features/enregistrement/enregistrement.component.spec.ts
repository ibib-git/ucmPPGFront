import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrementComponent } from './enregistrement.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UtilisateurService} from '../../core/services/utilisateur.service';
import {UtilisateurDetailsModel} from '../../core/models/UtilisateurDetailsModel';
import {CoreModule} from '../../core/core.module';

describe('RegisterComponent', () => {
  let component: EnregistrementComponent;
  let fixture: ComponentFixture<EnregistrementComponent>;
  let service: UtilisateurService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnregistrementComponent ],
      imports: [HttpClientTestingModule],
      providers: [UtilisateurService]
    })
    .compileComponents();
    service = TestBed.inject(UtilisateurService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregistrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should create a new user',() =>{
    // Arrange
    const expectedUser = {
      id: null,
    email: 'sith@empireGalactique.st',
    nom: 'Skylwalker',
    prenom: 'Anakin',
    pseudo: 'DarkVador',
    password: 'order#66',
    telephone: '+66456123789',
    infoSuppl: 'Que la force soit avec vous',
    urlPhoto: 'https://vignette.wikia.nocookie.net/lemondededisney/images/3/3d/Dark-vador-1024x768.jpeg/revision/latest?cb=20171030110748&path-prefix=fr'
  };
    const testedUser = {
      email: 'sith@empireGalactique.st',
      nom: 'Skylwalker',
      prenom: 'Anakin',
      pseudo: 'DarkVador',
      password: 'order#66',
      telephone: '+66456123789',
      infoSuppl: 'Que la force soit avec vous',
      urlPhoto: 'https://vignette.wikia.nocookie.net/lemondededisney/images/3/3d/Dark-vador-1024x768.jpeg/revision/latest?cb=20171030110748&path-prefix=fr'
    };
    // Act
    // Assert
    expect(service.register(testedUser).subscribe).toBe(expectedUser, null);
  });
});
