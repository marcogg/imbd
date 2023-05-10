describe('template spec', () => {
  it('Verificar que cargue la página Home leyendo el H1', () => {
    // Paso 1: Configurar el estado de la aplicación
    cy.visit('/')

    // Paso 2: Ehecurar la acción o acciones
    cy.get('h1')
      .contains('Home') // Paso 3: Hacer una aserción
  })

  // Test 2
  it('Verificar que cargue la página Login como Customer, leyendo el H1', () => {
    // Para usar APIs usamos el método intercept
    cy.intercept('POST', 'http://localhost:3000/login').as('loginApi')

    // Paso 1
    cy.visit('/login')

    // Paso 2
    cy.get('#floatingInput')
      .type('drstrange@marvel.com') // Paso 3: Hacer una aserción
    cy.get('#floatingPassword')
      .type('multiverso')
    cy.get('button[type=submit]').click()
    // Aqui le digo que se aguante a que responda la API
    cy.wait('@loginApi')
    cy.get('h1')
      .contains('Home')
  })

  // Test 3
  it('Probar que cuando haga logout me leve a la página del Home, leyendo el H1', () => {
    // Para usar APIs usamos el método intercept
    cy.intercept('POST', 'http://localhost:3000/login').as('loginApi')

    // Paso 1
    cy.visit('/login')

    // Paso 2
    cy.get('#floatingInput').type('superman@dc.com') // Paso 3: Hacer una aserción
    cy.get('#floatingPassword').type('superman')
    cy.get('button[type=submit]').click()
    // Aqui le digo que se aguante a que responda la API
    cy.wait('@loginApi')
    // OPcion de seleccion como CSS selectors
    cy.get('nav > ul li:last').click()
    // Opcion 2 con should
    cy.get('h1').should('have.text', 'Home')
  })
})
