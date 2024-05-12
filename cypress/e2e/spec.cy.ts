describe('template spec', () => {
    beforeEach(() => {
        cy
            .session('login', () => {
                // eslint-disable-next-line cypress/unsafe-to-chain-command

            })
    })

    it('passes', () => {
        cy
            .visit('/')
            .get('#user-name')
            .type('standard_user')
            .get('#password')
            .type('secret_sauce')
            .get('#login-button')
            .click()
            .waitForNetworkIdle(2000)
            .visit('/')
            .get('#user-name')
            .type('standard_user')
            .get('#password')
            .type('secret_sauce')
            .get('#login-button')
            .click()
            .waitForNetworkIdle(2000)
            .get(':nth-child(2) > :nth-child(1) > #inventory_container')

    })
})