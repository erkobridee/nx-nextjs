describe('shared-components: SharedComponents component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sharedcomponents--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to shared-components!');
  });
});
