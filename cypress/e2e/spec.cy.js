describe('template spec', () => {
    beforeEach(() => {
        cy
            .session('login', () => {
                // eslint-disable-next-line cypress/unsafe-to-chain-command

            })
    })

    it('passes', () => {
        cy
            .step('Visita a pagina do Saucedemo')
            .visit('/')
            .step('Preenche o campo de usuario')
            .get('#user-name')
            .type('standard_user')
            .step('Preenche o campo de senha')
            .get('#password')
            .type('secret_sauce')
            .get('#login-button')
            .click()
            .waitForNetworkIdle(2000)
            .step('Visita a pagina do Saucedemo')
            .visit('/')
            .step('Preenche o campo de usuario')
            .get('#user-name')
            .type('standard_user')
            .step('Preenche o campo de senha')
            .get('#password')
            .type('secret_sauce')
            .get('#login-button')
            .click()
            .waitForNetworkIdle(2000)
            .get(':nth-child(2) > :nth-child(1) > #inventory_container')
            .getTable()
            .should(tableData => {
                expect(tableData).to.not.contain('')
            })

    })
})