// A simple validator for spaces
export const trapSpacesForFields = (value) =>
	!!value.trim() || "This field can't be empty!"

// Regex for email validation
export const rgx_emailValidator =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
