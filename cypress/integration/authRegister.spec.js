describe('Registration', () => {
    beforeEach(() => {
        cy.refreshDatabase();
        cy.create('App\\Models\\User', 1,  {
            id: 1,
            name: 'John Doe',
            email: 'johndoe@fakeemail.co.uk',
            password: 'FakePassword01',
            created_at: null
        });
    });

    it('Failed registration email', () => {
        cy.visit('http://192.168.10.10/register')
        cy.get('input[name=name]').type('John Doe')
        cy.get('input[name=email]').type('johndoe@fakeemail.com')
        cy.get('input[name=password]').type('FakePassword01')
        cy.get('input[name=password_confirmation]').type('FakePassword01')
        cy.get('button').contains('Register').click()
        cy.get('div[name=errors]').should('contain', 'The email has already been taken')
    });

    it('Failed registration password length', () => {
        cy.visit('http://192.168.10.10/register')
        cy.get('input[name=name]').type('Jane Doe')
        cy.get('input[name=email]').type('janedoe@fakeemail.com')
        cy.get('input[name=password]').type('Passw0r')
        cy.get('input[name=password_confirmation]').type('Passw0r')
        cy.get('button').contains('Register').click()
        cy.get('div[name=errors]').should('contain', 'The password must be at least 8 characters')
    });

    it('Failed registration password not matching', () => {
        cy.visit('http://192.168.10.10/register')
        cy.get('input[name=name]').type('Jane Doe')
        cy.get('input[name=email]').type('janedoe@fakeemail.com')
        cy.get('input[name=password]').type('FakePassword01')
        cy.get('input[name=password_confirmation]').type('FakePassword02')
        cy.get('button').contains('Register').click()
        cy.get('div[name=errors]').should('contain', 'The password confirmation does not match')
    });

    it('Successfull registration', () => {
        cy.visit('http://192.168.10.10/register')
        cy.get('input[name=name]').type('Jane Doe')
        cy.get('input[name=email]').type('janedoe@fakeemail.com')
        cy.get('input[name=password]').type('FakePassword01')
        cy.get('input[name=password_confirmation]').type('FakePassword01')
        cy.get('button').contains('Register').click()
        cy.url().should('contain', 'http://192.168.10.10/dashboard')
        cy.get('div[name=labelLogged]').should('contain', 'You are logged in!')
    });
});