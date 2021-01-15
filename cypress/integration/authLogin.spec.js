describe('Registration', () => {
    beforeEach(() => {
        cy.refreshDatabase();
        cy.create('App\\Models\\User', 1,  {
            name: 'John Doe',
            email: 'johndoe@fakeemail.co.uk',
            password: 'FakePassword01',
            created_at: null
        });
    });

    it('Failed email', () => {
        cy.visit('http://192.168.10.10/login')
        cy.get('input[name=email]').type('janedoe@fakeemail.co.uk')
        cy.get('input[name=password]').type('FakePassword01')
        cy.get('input[id=remember_me]').check()
        cy.get('button').contains('Login').click()
        cy.get('div[name=errors]').should('contain', 'These credentials do not match our records')
    });

    it('Failed email', () => {
        cy.visit('http://192.168.10.10/login')
        cy.get('input[name=email]').type('johndoe@fakeemail.co.uk')
        cy.get('input[name=password]').type('FakeP')
        cy.get('input[id=remember_me]').check()
        cy.get('button').contains('Login').click()
        cy.get('div[name=errors]').should('contain', 'These credentials do not match our records')
    });

    it('Successfull login', () => {
        cy.visit('http://192.168.10.10/register')
        cy.get('input[name=name]').type('Jane Doe')
        cy.get('input[name=email]').type('janedoe@fakeemail.co.uk')
        cy.get('input[name=password]').type('FakePassword01')
        cy.get('input[name=password_confirmation]').type('FakePassword01')
        cy.get('button').contains('Register').click()
        cy.get('button[name=userName]').click()
        cy.get('a').contains('Logout').click()

        cy.visit('http://192.168.10.10/login')
        cy.get('input[name=email]').type('janedoe@fakeemail.co.uk')
        cy.get('input[name=password]').type('FakePassword01')
        cy.get('input[id=remember_me]').check()
        cy.get('button').contains('Login').click()
        cy.url().should('contain', '/dashboard')
    });
});