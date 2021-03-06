module.exports = {
	ascvdScore: {
		name: 'ASCVD_SCORE',
		description: 'The ASCVD ten year risk scored generated by the app',
	},
	missingInformation: {
		name: 'MISSING_INFORMATION',
		description:
			'The ASCVD ten year risk score could not be generated due to missing or not enough ' +
			'information on the patient',
	},
	smartOnFhirIssue: {
		name: 'SMART_ON_FHIR_ISSUE',
		description: 'Something went wrong during the SMART on FHIR handshake',
	},
	wentToEducator: {
		name: 'WENT_TO_EDUCATOR',
		description: 'The user went to the Educator',
	},
	sliderEvent: {
		name: 'SLIDER_EVENT',
		description: "In the Educator, the slider's value was changed by the user",
	},
	buttonGroupEvent: {
		name: 'BUTTON_GROUP_EVENT',
		description:
			'In the Educator, the selected element of the button group was changed by the user',
	},
	ageEvent: {
		name: 'AGE_EVENT',
		description: 'The patients age was changed in the Educator',
	},
	wentToEstimator: {
		name: 'BACK_TO_EDUCATOR',
		description: 'The user navigated bacsk to the Educator after visiting the Estimator',
	},
	wentToMedstarGuideliens: {
		name: 'WENT_TO_MEDSTAR_GUIIDLINES',
		description: 'The user clicked the Medstar Guidelines link',
	},
	wentToACCGuidelines: {
		name: 'WENT_TO_ACC_GUIDELINES',
		description: 'The user clicked the ACC Guidlines link',
	},
	userFeedback: {
		name: 'USER_FEEDBACK',
		description: 'The user provided feedback on the application',
	},
};
