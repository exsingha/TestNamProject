import login from '../support/login'

describe('Retest UAT Log', () => {
	login()

	// it('Issue No.12 Master - Branch', () => {
	//   cy.viewport('macbook-15')

	//   //click master data & branch
	//   cy.get(':nth-child(3) > .muiltr-semhhs').click()
	//   cy.get('[href="/branch"]').click()

	//   cy.get('button').contains('Filter').click()
	//   cy.get('#branch_id').type('11')
	//   cy.get('.ant-modal-footer > :nth-child(3)').click()

	// });

	// it('Issue No.16 Master - Business Structure', () => {
	// 	cy.viewport('macbook-15')

	// 	cy.wait(2000)
	// 	cy.get('[href="/division"]').click({ force: true })

	// 	cy.get('button').contains('Filter').click()
	// 	cy.get(
	// 		':nth-child(1) > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-overflow'
	// 	).click()

	// 	cy.wait(200)
	//   cy.get('div[title*="B2B"]').click({force:true})
	// 	cy.get('div[title*="Bakery"]').click({force:true})
	//   cy.get('button').contains('Search').click()
	// })

	// it('Issue No.17 Master - Zone', () => {

	// 	const zoneName = 'East'

	// 	cy.viewport('macbook-15')

	// 	cy.wait(2000)
	// 	cy.get('[href="/zone"]').click({ force: true })

	// 	cy.get('button').contains('Filter').click()

	// 	// click province and select กระบี่
	// cy.get(
	// 	':nth-child(1) > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
	// ).as('filterProvince')
	// cy.get('@filterProvince').click()
	// 	cy.wait(200)
	// 	cy.get('div[title*="กระบี่"]').click({ force: true })
	// 	cy.get('.ant-modal-footer > :nth-child(3)').click()

	// 	// clear filter
	// 	cy.get('button').contains('Filter').click()
	// 	cy.get('.ant-modal-footer > :nth-child(2)').click()
	// 	cy.get('.ant-modal-footer > :nth-child(3)').click()

	// 	// check lowercase
	// 	cy.get('#basic_name').type('east')
	// 	cy.get('.ant-col-xl-3 > .ant-btn-default').click()

	// 	// clear search
	// 	cy.get('#basic_name').clear()
	// 	cy.get('.ant-col-xl-3 > .ant-btn-default').click()

	// 	// check text = result not exist
	// 	cy.contains('Result').should('not.exist')

	// 	cy.get('.ant-card-extra > .ant-btn').click()
	// 	cy.get('#basic_name').type(zoneName, {delay: 100}).should('have.value', zoneName)
	// 	cy.get('.wrap-btn-top-right > .ant-btn').click()
	// 	cy.get('.ant-form-item-explain-error').should('have.text', 'Zone Name Already Exists')

	// 	cy.get('.text-back').click()
	// })

	// ! test fail : not sort A-Z, Expected Result : Major asset group sort by A-Z
	it('Issue No.24 Master - Asset Group Structure', () => {
		
	});

	// it('Issue No.33 Master - Branch', () => {

	// 	const branchName = 'Test'
	// 	const branchID = '11'
	// 	const phoneNum = '0835447877'
	// 	const addressNo = '40/100'

	// 	cy.viewport('macbook-15')

	// 	cy.wait(2000)
	// 	cy.get('[href="/branch"]').click({ force: true })

	// 	cy.get('.ant-card-extra > .ant-btn').click()

	// 	cy.get('#basic_name').type(branchName).should('have.value', branchName)
	// 	cy.get('#basic_branch_id').type(branchID).should('have.value', branchID)
	// 	cy.get('#basic_branch_type_id').click({timeout:200})
	// 	cy.get('div[title*="Express"]').click({ force: true })
	// 	cy.wait(1000)
	// 	cy.get('#basic_contact_person').click({timeout:200})
	// 	cy.get('div[title*="admin01 admin"]').click({ force: true , multiple:true})
	// 	cy.get('#basic_tel_no').type(phoneNum).should('have.value', phoneNum)
	// 	cy.get('#basic_zip_code').click({timeout:200})
	// 	cy.get('div[title*="10100"]').click({ force: true })
	// 	cy.wait(1000)
	// 	cy.get('#basic_district_id').click({timeout:200})
	// 	cy.get('div[title*="เขตป้อมปราบศัตรูพ่าย"]').click({ force: true })
	// 	cy.get('#basic_sub_district_id').click({timeout:200})
	// 	cy.get('div[title*="บ้านบาตร"]').click({ force: true })
	// 	cy.get('#basic_address').type(addressNo).should('have.value', addressNo)

	// 	cy.get('.ant-btn').click()

	//validate alert
	// 	cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-explain > .ant-form-item-explain-error').should('have.txt', 'Branch Name Already Exists')
	// 	cy.get(':nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-explain > .ant-form-item-explain-error').should('have.text', 'Branch Id Already Exists')
	// })

	// it('Issue No.35 Master - Business Type', () => {

	// 	const businessTypeName = '~`!@#$%^&*()-_=+[]}{|\\\'":;/?.>,<'

	// 	cy.viewport('macbook-15')

	// 	cy.wait(2000)
	// 	cy.get('[href="/business_type"]').click({ force: true })

	// 	cy.get('.ant-card-extra > .ant-btn').click()

	// 	cy.get('#basic_name').type(businessTypeName).should('have.value', businessTypeName)
	// 	cy.get('.ant-form-item-explain-error').should('have.text','No Special Characters Allowed')
	// 	cy.get('.ant-btn').click()
	// })

	// it('Issue No.36 Master - Business Type', () => {

	// 	const businessTypeName = 'Ditribution Center'

	// 	cy.viewport('macbook-15')

	// 	cy.wait(2000)
	// 	cy.get('[href="/business_type"]').click({ force: true })

	// 	cy.get('[data-row-key="2"] > .ant-table-column-sort').click()
	// 	cy.get('#basic_name').clear()
	// 	cy.get('#basic_name').type(businessTypeName).should('have.value', businessTypeName)
	// 	cy.get('.ant-btn').contains('Edit',{delay: 100}).click()
	// 	cy.get('.ant-modal-footer > .flex > :nth-child(1)').click()

	// 	cy.get('.ant-notification-notice-message').should('be.exist')
	// });

	// it('Issue No.42 Master - Business Unit', () => {

	// 	// 629/1 ถนนนวมินทร์
	// 	const addressNo = ' '

	// 	cy.viewport('macbook-15')

	// 	cy.wait(2000)
	// 	cy.get('[href="/business_unit"]').click({ force: true })

	// 	cy.get('#basic_address').clear()
	// 	cy.get('#basic_address').type(addressNo)
	// 	cy.get('.ant-form-item-control-input-content > .ant-btn').contains('Save', {delay: 100}).click()
	// 	cy.get('.ant-form-item-explain-error').should('be.exist')
	// });

	// it('Issue No.43 Master - Business Unit', () => {

	// 	// 027979000
	// 	const telNo = 'aaaaa'

	// 	cy.viewport('macbook-15')

	// 	cy.wait(2000)
	// 	cy.get('[href="/business_unit"]').click({ force: true })

	// 	cy.get('#basic_tel_no').clear()
	// 	cy.get('#basic_tel_no').type(telNo)
	// 	cy.get('.ant-form-item-control-input-content > .ant-btn').contains('Save', {delay: 100}).click()
	// 	cy.get('.ant-form-item-explain-error').should('be.exist')
	// });

	// it('Issue No.44 Master - Business Unit', () => {
	// 	// can't test png image
	// })

	// it('Issue No.55 Master - Branch', () => {
	// 	const branchName = 'Test'
	// 	const branchID = '1123'
	// 	const phoneNum = '0835447877'
	// 	const addressNo = '40/100'

	// 	cy.viewport('macbook-15')

	// 	cy.wait(2000)
	// 	cy.get('[href="/branch"]').click({ force: true })

	// 	cy.get('button').contains('Filter').click()
	// 	cy.wait(1000)
	// 	cy.get('#branch_id').type(branchID).should('have.value', branchID)

	// 	cy.get(
	// 		':nth-child(2) > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-overflow'
	// 	).click({ timeout: 200 })
	// 	cy.get('div[title*="Express"]').click({ force: true, multiple: true })
	// 	cy.get('body').click(0,0)

	// 	cy.get(
	// 		':nth-child(3) > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
	// 	).click()
	// 	cy.get('div[title*="North"]').click({ force: true, multiple: true })
	// 	cy.get('body').click(0,0)

	// 	cy.get('.ant-modal-footer > :nth-child(3)').click()

	// })

	// ! test fail : check % in search branch name, expected result : not show 
	it('Issue No.56 Master - Branch', () => {

		const branchName = '%'

		// cy.viewport('macbook-15')

		cy.wait(2000)
		cy.get('[href="/branch"]').click({ force: true })

		cy.get('#basic_name').type(branchName).should('have.value', branchName)
		cy.get('.ant-col-xl-3 > .ant-btn-default').click()
	})

	// it('Issue No.59 Master - Zone', () => {
	// 	cy.viewport('macbook-15')

	// 	cy.wait(2000)
	// 	cy.get('[href="/zone"]').click({ force: true })
	// 	cy.get('button').contains('Filter').click()

	// 	cy.get(
	// 		':nth-child(1) > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-overflow'
	// 	).click()
	// 	cy.get('div[title*="กระบี่"]').click({ force: true, multiple: true })
	// 	cy.get('body').click(0, 0)

	// 	cy.get(
	// 		':nth-child(2) > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-overflow'
	// 	).click()
	// 	cy.get('div[title*="admin01 admin"]').click({ force: true, multiple: true })
	// 	cy.get('body').click(0, 0)

	// 	cy.get('.ant-modal-footer > :nth-child(3)').contains('Search').click()
	// })
})
