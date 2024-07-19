export function waitForAppLoader() {

}

export function interceptResposeCodeWait(api, responseCode) {
	return cy.wait(api).its("response.statusCode").should("eq", responseCode);	
}

export function interceptResponse(api) {
	return cy.wait(api,{timeout:60000})
}

export function addArtBoard(){
    cy.get('div[name="Draw Artboard"]').should('be.visible').click()
}

export function generateUniqueId(length = 5) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let uniqueId = '';
	
	for (let i = 0; i < length; i++) {
	  const randomIndex = Math.floor(Math.random() * characters.length);
	  uniqueId += characters[randomIndex];
	}
	
	return uniqueId;
  }
  
  