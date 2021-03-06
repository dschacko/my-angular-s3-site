import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';

@Component({
  selector: 'app-footer',
  template: '',
})
class MockFooterComponent {}
@Component({
  selector: 'app-header',
  template: '',
})
class MockHeaderComponent {}
@Component({
  selector: 'app-home',
  template: '',
})
class MockHomeComponent {}
@Component({
  selector: 'app-landing',
  template: '',
})
class MockLandingComponent {}
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        MockFooterComponent,
        MockHeaderComponent,
        MockHomeComponent,
        MockLandingComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have as title 'angular-oidc-app'", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-oidc-app');
  });

  /*
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-oidc-app app is running!');
  });
  */
});
