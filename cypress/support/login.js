export default function testUserPass() {

	it('Visit Website & Login', () => {

		cy.visit('http://157.230.46.93/login', { timeout: 20000 })

		// login
		cy.fixture('user').then(user => {
			const username = user.username
			const password = user.password

			cy.get('#basic_username').type(username, {delay: 100}).should('have.value', username)
			cy.get('#basic_password').type(password, {delay: 100}).should('have.value', password)
		})

		cy.get('button').contains('Sign In').click()
	})
}