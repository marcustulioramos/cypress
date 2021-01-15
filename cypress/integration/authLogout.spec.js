describe('Registration', () => {
    beforeEach(() => {
        cy.refreshDatabase();
    });

    it('Successfull logout', () => {
        cy.visit('http://192.168.10.10/register')
        cy.get('input[name=name]').type('Jane Doe')
        cy.get('input[name=email]').type('janedoe@fakeemail.co.uk')
        cy.get('input[name=password]').type('FakePassword01')
        cy.get('input[name=password_confirmation]').type('FakePassword01')
        cy.get('button').contains('Register').click()
        cy.get('button[name=userName]').click()
        cy.get('a').contains('Logout').click()
        cy.contains('Login')
    });
});